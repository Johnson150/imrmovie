import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'IMR';
const collectionName = 'Movies';

let cachedClient: MongoClient | null;

export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    cachedClient = client;
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export async function getAllMovies() {
  const client = await connectToDatabase();
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const movies = await collection.find({}).toArray();
  return movies;
}
