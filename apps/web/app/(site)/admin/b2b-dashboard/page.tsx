"use client";

import useSWR from "swr";
import { useState } from "react";
import LuxButton from "@/components/LuxButton";

const fetcher = (url: string) => fetch(url).then(r => r.json());

const getTierColor = (tier: string) => {
    const colors = {
      Gold: "from-yellow-400 to-yellow-600",
      Silver: "from-gray-400 to-gray-600",
      Bronze: "from-amber-600 to-orange-700",
      Platinum: "from-purple-400 to-purple-600"
    };
    return colors[tier as keyof typeof colors] || "from-blue-400 to-blue-600";
};

interface Partner {
  name: string;
  sales: number;
  tier: string;
  lastContact: string;
  revenue?: number;
  commissionRate?: number;
}

interface AnalyticsData {
  partners: Partner[];
  totalRevenue: number;
  monthlyGrowth: number;
  activeDeals: number;
}

export default function B2BDashboard() {
  const { data, error, isLoading } = useSWR<AnalyticsData>("/api/b2b-analytics", fetcher);
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">B2B Dashboard</h1>
          <div className="text-red-400">Failed to load dashboard data</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            🏢 <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              B2B PARTNER DASHBOARD
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Manage enterprise partnerships and track B2B performance
          </p>
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading dashboard...</p>
          </div>
        ) : data ? (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-green-400">
                  £{data.totalRevenue?.toLocaleString() || '0'}
                </div>
                <div className="text-gray-400">Total Revenue</div>
              </div>
              
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold text-blue-400">
                  {data.monthlyGrowth || 0}%
                </div>
                <div className="text-gray-400">Monthly Growth</div>
              </div>
              
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">🤝</div>
                <div className="text-2xl font-bold text-purple-400">
                  {data.partners?.length || 0}
                </div>
                <div className="text-gray-400">Active Partners</div>
              </div>
              
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-orange-400">
                  {data.activeDeals || 0}
                </div>
                <div className="text-gray-400">Active Deals</div>
              </div>
            </div>

            {/* Partners List */}
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur">
              <h2 className="text-2xl font-bold mb-6">Partner Performance</h2>
              <div className="space-y-4">
                {data.partners?.map((partner, index) => (
                  <div
                    key={partner.name}
                    className={`
                      p-4 rounded-lg border transition-all duration-300 cursor-pointer
                      ${
                        selectedPartner === partner.name
                          ? 'border-orange-400 bg-orange-500/10'
                          : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                      }
                    `}
                    onClick={() => setSelectedPartner(
                      selectedPartner === partner.name ? null : partner.name
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold text-white">
                          #{index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {partner.name}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <span className={`
                              px-2 py-1 rounded-full text-xs font-medium
                              bg-gradient-to-r ${getTierColor(partner.tier)} text-white
                            `}>
                              {partner.tier}
                            </span>
                            <span className="text-gray-400 text-sm">
                              Last contact: {new Date(partner.lastContact).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-400">
                          £{partner.sales?.toLocaleString() || '0'}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {partner.commissionRate || 15}% commission
                        </div>
                      </div>
                    </div>
                    
                    {selectedPartner === partner.name && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Revenue: </span>
                            <span className="text-white font-medium">
                              £{partner.revenue?.toLocaleString() || '0'}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-400">Commission Rate: </span>
                            <span className="text-white font-medium">
                              {partner.commissionRate || 15}%
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <LuxButton className="text-xs px-3 py-1">
                            📧 Contact
                          </LuxButton>
                          <LuxButton variant="secondary" className="text-xs px-3 py-1">
                            📊 View Details
                          </LuxButton>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LuxButton className="h-16 text-lg">
                ➕ Add New Partner
              </LuxButton>
              <LuxButton className="h-16 text-lg">
                📊 Generate Report
              </LuxButton>
              <LuxButton className="h-16 text-lg">
                📧 Send Newsletter
              </LuxButton>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}