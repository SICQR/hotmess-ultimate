
type Input = {
  sku?: string;
  affiliate?: string;
  campaign?: string;
  utm?: Record<string, string>;
};

export function nextTargetFor(input: Input): string {
  // Basic routing logic. Adjust to your site structure.
  // Example: SKUs that start with HNH -> lube PDP; SUPERHUNG -> product page; otherwise radio.
  const params = new URLSearchParams();
  if (input.affiliate) params.set("a", input.affiliate);
  if (input.campaign) params.set("c", input.campaign);
  Object.entries(input.utm || {}).forEach(([k, v]) => params.set(k, v));

  if (input.sku?.startsWith("HNH")) return `/shop/hnh?${params.toString()}`;
  if (input.sku?.startsWith("SUPERHUNG")) return `/shop/superhung?${params.toString()}`;
  if (input.sku) return `/shop/${encodeURIComponent(input.sku.toLowerCase())}?${params.toString()}`;
  return `/radio?${params.toString()}`;
}
