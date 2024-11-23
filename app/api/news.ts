import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=forex&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data.articles || []);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
