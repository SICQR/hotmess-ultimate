interface CreateCrmLeadParams {
  name: string;
  email: string;
  company?: string;
}

interface CrmLead {
  Id?: string;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  Company?: string;
  Status?: string;
  CreatedDate?: string;
}

export async function createCrmLead({ name, email, company }: CreateCrmLeadParams) {
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


export async function updateCrmLead(leadId: string, updates: Partial<CrmLead>) {
  const sfToken = process.env.SALESFORCE_TOKEN;
  if (!sfToken) throw new Error("Salesforce token not set");

  try {
    const res = await fetch(`https://yourinstance.salesforce.com/services/data/v53.0/sobjects/Lead/${leadId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sfToken}`
      },
      body: JSON.stringify(updates)
    });

    if (!res.ok) {
      throw new Error(`Salesforce API error: ${res.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to update CRM lead:", error);
    throw error;
  }
}

export async function getCrmLeads(limit: number = 50) {
  const sfToken = process.env.SALESFORCE_TOKEN;
  if (!sfToken) throw new Error("Salesforce token not set");

  try {
    const query = `SELECT Id, FirstName, LastName, Email, Company, Status, CreatedDate FROM Lead ORDER BY CreatedDate DESC LIMIT ${limit}`;
    const res = await fetch(`https://yourinstance.salesforce.com/services/data/v53.0/query?q=${encodeURIComponent(query)}`, {
      headers: {
        "Authorization": `Bearer ${sfToken}`
      }
    });

    if (!res.ok) {
      throw new Error(`Salesforce API error: ${res.status}`);
    }

    const result = await res.json();
    return result.records;
  } catch (error) {
    console.error("Failed to get CRM leads:", error);
    throw error;
  }
}