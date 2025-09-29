import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function B2BDashboard() {
  const { data } = useSWR("/api/b2b-analytics", fetcher);
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">B2B Dashboard</h1>
      <div className="grid gap-4">
        {data?.partners?.map((partner: any) => (
          <div key={partner.name} className="bg-white/10 p-4 rounded">
            <h3 className="text-xl font-bold">{partner.name}</h3>
            <p>Sales: £{partner.sales}</p>
            <p>Tier: {partner.tier}</p>
          </div>
        ))}
      </div>
    </div>
  );
}