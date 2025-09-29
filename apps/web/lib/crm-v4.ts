export async function createCrmLead({ name, email, company }) {
  const sfToken = process.env.SALESFORCE_TOKEN;
  if (!sfToken) throw new Error("Salesforce token not set");
  const res = await fetch("https://yourinstance.salesforce.com/services/data/v53.0/sobjects/Lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sfToken}`
    },
    body: JSON.stringify({
      FirstName: name.split(' ')[0],
      LastName: name.split(' ').slice(1).join(' ') || 'Unknown',
      Email: email,
      Company: company || 'HOTMESS Lead'
    })
  });
  
  if (!res.ok) throw new Error(`Salesforce API error: ${res.status}`);
  return await res.json();
}