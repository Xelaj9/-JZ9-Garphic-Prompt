export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'OPENAI_API_KEY not configured' });

  try {
    const { prompt, size = '1024x1024' } = req.body;

    // Valid DALL-E 3 sizes only
    const validSizes = ['1024x1024', '1792x1024', '1024x1792'];
    const safeSize = validSizes.includes(size) ? size : '1024x1024';

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: safeSize,
        response_format: 'b64_json',
        quality: 'standard'
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'DALL-E error' });
    }

    // Check for null content (content policy rejection)
    if (!data.data || !data.data[0] || !data.data[0].b64_json) {
      const reason = data.data?.[0]?.revised_prompt || 'Content policy rejection';
      return res.status(400).json({ error: `Image blocked by content policy. Try a different prompt. Reason: ${reason}` });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
