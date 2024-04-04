// pages/api/deleteEntry.js

import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db('IMR');
      const collection = database.collection('movies');

      // Extract the ID of the entry to be deleted from the request URL
      const { id } = req.query;

      // Delete the entry from the database using its ID
      const result = await collection.deleteOne({ _id: ObjectId(id) });
      res.status(200).json({ message: 'Entry deleted successfully', deletedCount: result.deletedCount });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
