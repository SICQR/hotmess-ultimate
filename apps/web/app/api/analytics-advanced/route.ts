import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    // Get advanced analytics data
    const { data: analytics, error } = await supabase
      .from('analytics')
      .select(`
        *,
        users!inner(*),
        sessions!inner(*)
      `)
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    if (error) throw error;

    // Calculate advanced metrics
    const totalUsers = analytics.length;
    const avgSessionDuration = analytics.reduce((sum, a) => sum + (a.sessions?.duration || 0), 0) / totalUsers;
    const topGenres = analytics
      .flatMap(a => a.genres || [])
      .reduce((acc, genre) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const engagement = {
      dailyActiveUsers: totalUsers,
      averageSessionDuration: Math.round(avgSessionDuration / 60), // minutes
      topGenres: Object.entries(topGenres)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 5)
        .map(([genre, count]) => ({ genre, count })),
      retentionRate: Math.round((totalUsers / 1000) * 100), // mock calculation
    };

    return Response.json({
      success: true,
      data: engagement,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Analytics error:', error);
    return Response.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, event, metadata } = await req.json();

    // Track user engagement event
    const { data, error } = await supabase
      .from('analytics')
      .insert({
        user_id: userId,
        event_type: event,
        metadata: metadata || {},
        timestamp: new Date().toISOString(),
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
        user_agent: req.headers.get('user-agent')
      });

    if (error) throw error;

    return Response.json({
      success: true,
      message: 'Event tracked successfully'
    });

  } catch (error) {
    console.error('Event tracking error:', error);
    return Response.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}