"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import LuxButton from "@/components/LuxButton";

interface AffiliateData {
  affiliate: {
    ref_code: string;
    created_at: string;
    user_id: string;
  };
  stats: {
    totalSales: number;
    totalReferrals: number;
    conversionRate: number;
    recentEvents: any[];
  };
  commission: {
    total: number;
    pending: number;
    paid: number;
    rate: number;
  };
  recentActivity: any[];
  monthlyBreakdown: Array<{
    month: string;
    sales: number;
    commission: number;
  }>;
  performance: {
    tier: string;
    nextTierThreshold: number | null;
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AffiliateDashboard() {
  const [refCode, setRefCode] = useState<string>("");
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  // Load ref code from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("hotmess_ref_code");
    if (stored) {
      setRefCode(stored);
    }
  }, []);

  const { data, error, isLoading, mutate } = useSWR<AffiliateData>(
    refCode ? `/api/my-affiliate?ref=${refCode}` : null,
    fetcher,
    { refreshInterval: 10000 }
  );

  const generateRefCode = async () => {
    try {
      // In a real app, this would call an API to generate a code for the logged-in user
      const newCode = `HM${Date.now().toString(36).toUpperCase()}`;
      localStorage.setItem("hotmess_ref_code", newCode);
      setRefCode(newCode);
      setShowGenerateModal(false);
      mutate();
    } catch (error) {
      console.error("Failed to generate ref code:", error);
    }
  };

  const getTierBadge = (tier: string) => {
    const badges = {
      VIP: "💎",
      Gold: "🥇",
      Silver: "🥈",
      Bronze: "🥉",
      Starter: "🌟"
    };
    return badges[tier as keyof typeof badges] || "🌟";
  };

  const getTierColor = (tier: string) => {
    const colors = {
      VIP: "from-purple-600 to-pink-600",
      Gold: "from-yellow-500 to-orange-500",
      Silver: "from-gray-400 to-gray-600",
      Bronze: "from-amber-600 to-orange-700",
      Starter: "from-blue-500 to-cyan-500"
    };
    return colors[tier as keyof typeof colors] || "from-blue-500 to-cyan-500";
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  // If no ref code, show setup screen
  if (!refCode) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">
            💸 <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              AFFILIATE DASHBOARD
            </span>
          </h1>
          
          <div className="bg-white/5 border border-white/20 rounded-xl p-12 backdrop-blur">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Join the HOTMESS Affiliate Program</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Earn 15% commission on every sale you generate. 
              Get your unique referral code and start earning today!
            </p>
            
            <LuxButton onClick={generateRefCode} className="text-lg px-8 py-3">
              🎯 Generate My Referral Code
            </LuxButton>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Affiliate Dashboard</h1>
          <div className="text-red-400">
            Failed to load dashboard data. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            💸 <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              YOUR AFFILIATE DASHBOARD
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Track your earnings and grow your affiliate empire
          </p>
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading your dashboard...</p>
          </div>
        ) : data ? (
          <div className="space-y-8">
            {/* Referral Code Card */}
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-400/50 rounded-xl p-6 backdrop-blur">
              <h2 className="text-xl font-bold mb-4">🎯 Your Referral Code</h2>
              <div className="flex items-center justify-between">
                <div className="font-mono text-2xl font-bold text-orange-400">
                  {data.affiliate.ref_code}
                </div>
                <LuxButton 
                  onClick={() => copyToClipboard(`https://hotmess.radio/shop?ref=${data.affiliate.ref_code}`)}
                  className="text-sm"
                >
                  📋 Copy Link
                </LuxButton>
              </div>
              <p className="text-gray-400 mt-2">
                Share this link to earn 15% commission on every sale
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-green-400">
                  £{data.stats.totalSales.toLocaleString()}
                </div>
                <div className="text-gray-400">Total Sales</div>
              </div>
              
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-blue-400">
                  {data.stats.totalReferrals}
                </div>
                <div className="text-gray-400">Total Referrals</div>
              </div>
              
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-purple-400">
                  {data.stats.conversionRate}%
                </div>
                <div className="text-gray-400">Conversion Rate</div>
              </div>
              
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">💸</div>
                <div className="text-2xl font-bold text-orange-400">
                  £{data.commission.pending.toFixed(2)}
                </div>
                <div className="text-gray-400">Pending Commission</div>
              </div>
            </div>

            {/* Tier Status */}
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
              <h2 className="text-xl font-bold mb-4">🏆 Your Status</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className={`
                    px-4 py-2 rounded-full text-lg font-medium
                    bg-gradient-to-r ${getTierColor(data.performance.tier)} text-white
                  `}>
                    {getTierBadge(data.performance.tier)} {data.performance.tier}
                  </span>
                  {data.performance.nextTierThreshold && (
                    <div className="text-gray-400">
                      £{(data.performance.nextTierThreshold - data.stats.totalSales).toLocaleString()} to next tier
                    </div>
                  )}
                </div>
                <LuxButton 
                  onClick={() => window.location.href = '/affiliate/leaderboard'}
                  className="text-sm"
                >
                  🏆 View Leaderboard
                </LuxButton>
              </div>
            </div>

            {/* Monthly Breakdown */}
            {data.monthlyBreakdown && data.monthlyBreakdown.length > 0 && (
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <h2 className="text-xl font-bold mb-4">📊 Monthly Performance</h2>
                <div className="space-y-3">
                  {data.monthlyBreakdown.slice(-6).map((month) => (
                    <div key={month.month} className="flex items-center justify-between py-2 border-b border-white/10">
                      <div className="font-medium">
                        {new Date(month.month + '-01').toLocaleDateString('en-GB', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">£{month.sales.toFixed(2)} sales</div>
                        <div className="text-gray-400 text-sm">£{month.commission.toFixed(2)} commission</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Activity */}
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
              <h2 className="text-xl font-bold mb-4">🕒 Recent Activity</h2>
              {data.recentActivity && data.recentActivity.length > 0 ? (
                <div className="space-y-3">
                  {data.recentActivity.slice(0, 10).map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-white/10">
                      <div>
                        <div className="font-medium">
                          {activity.event === 'sale' ? '💰 Sale' : 
                           activity.event === 'click' ? '👆 Click' : '📝 Event'}
                        </div>
                        <div className="text-sm text-gray-400">
                          {new Date(activity.created_at).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        {activity.amount && (
                          <div className="text-green-400 font-bold">
                            £{activity.amount.toFixed(2)}
                          </div>
                        )}
                        {activity.product && (
                          <div className="text-gray-400 text-sm">{activity.product}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No activity yet. Start sharing your referral link!
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LuxButton 
                onClick={() => window.location.href = '/affiliate/payouts'}
                className="h-16 text-lg"
              >
                💳 Payout History
              </LuxButton>
              <LuxButton 
                onClick={() => copyToClipboard(`https://hotmess.radio/shop?ref=${data.affiliate.ref_code}`)}
                className="h-16 text-lg"
              >
                📋 Copy Referral Link
              </LuxButton>
              <LuxButton 
                onClick={() => window.location.href = '/affiliate/leaderboard'}
                className="h-16 text-lg"
              >
                🏆 View Leaderboard
              </LuxButton>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}