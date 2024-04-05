// pages/api/movies.js

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS'); // Allow DELETE requests
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle DELETE request
  if (req.method === 'DELETE') {
    // Delete movie logic
    res.status(200).json({ message: 'Movie deleted successfully' });
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
