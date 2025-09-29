"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import LuxButton from "@/components/LuxButton";

interface LeaderboardEntry {
  rank: number;
  ref_code: string;
  total_sales: number;
  total_referrals: number;
  conversion_rate: number;
  last_sale: string;
  tier: string;
}

interface LeaderboardData {
  leaderboard: LeaderboardEntry[];
  updated_at: string;
  total_affiliates: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AffiliateLeaderboard() {
  const { data, error, isLoading } = useSWR<LeaderboardData>("/api/leaderboard", fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
  });

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

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            🏆 <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              AFFILIATE LEADERBOARD
            </span>
          </h1>
          <div className="text-center text-red-400">
            Failed to load leaderboard. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            🏆 <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              AFFILIATE LEADERBOARD
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Top performers crushing it with HOTMESS affiliate program
          </p>
          {data && (
            <div className="flex justify-center gap-8 mt-6 text-sm text-gray-500">
              <span>📊 {data.total_affiliates} Total Affiliates</span>
              <span>🕒 Updated {new Date(data.updated_at).toLocaleTimeString()}</span>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading leaderboard...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data?.leaderboard.map((entry) => (
              <div
                key={entry.ref_code}
                className={`
                  relative overflow-hidden rounded-xl p-6 backdrop-blur
                  ${entry.rank <= 3 
                    ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-400/50' 
                    : 'bg-white/5 border border-white/20'
                  }
                  hover:bg-white/10 transition-all duration-300
                  shadow-lg hover:shadow-xl
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Rank */}
                    <div className={`
                      text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-full
                      ${entry.rank <= 3 
                        ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-black' 
                        : 'bg-white/10 text-white'
                      }
                    `}>
                      #{entry.rank}
                    </div>

                    {/* Affiliate Info */}
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {entry.ref_code}
                        </h3>
                        <span className={`
                          px-3 py-1 rounded-full text-sm font-medium
                          bg-gradient-to-r ${getTierColor(entry.tier)} text-white
                        `}>
                          {getTierBadge(entry.tier)} {entry.tier}
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        Last sale: {entry.last_sale ? new Date(entry.last_sale).toLocaleDateString() : 'Never'}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-right space-y-2">
                    <div className="text-2xl font-bold text-green-400">
                      £{entry.total_sales.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400 space-x-4">
                      <span>📈 {entry.total_referrals} referrals</span>
                      <span>🎯 {entry.conversion_rate}% conversion</span>
                    </div>
                  </div>
                </div>

                {/* Shimmer effect for top 3 */}
                {entry.rank <= 3 && (
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent 
                                    transform -skew-x-12 animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}

            {(!data?.leaderboard || data.leaderboard.length === 0) && !isLoading && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  No affiliates yet
                </h3>
                <p className="text-gray-500">
                  Be the first to join the HOTMESS affiliate program!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Join CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-400/50 
                          rounded-xl p-8 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">
              Ready to dominate the leaderboard?
            </h2>
            <p className="text-gray-400 mb-6">
              Join the HOTMESS affiliate program and start earning 15% commission on every sale
            </p>
            <LuxButton 
              onClick={() => window.location.href = '/affiliate/dashboard'}
              className="text-lg px-8 py-3"
            >
              🚀 Join the Program
            </LuxButton>
          </div>
        </div>
      </div>
    </div>
  );
}