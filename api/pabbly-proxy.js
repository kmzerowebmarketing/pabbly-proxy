import fetch from "node-fetch";

export default async function handler(req, res) {
  // Verifica metodo
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
  }

  try {
    const pabblyUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzZTA0MzI1MjZiNTUzNTUxMzci_pc";

    const response = await fetch(pabblyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body || {}),
    });

    const data = await response.text();
    return res.status(200).json({ success: true, pabbly_response: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
