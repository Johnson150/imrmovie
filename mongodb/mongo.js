const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Update this URI with your MongoDB connection string

const dbName = 'IMR'; 
const collectionName = 'Movies';

// Connect to MongoDB
async function connectToMongoDB() 
{
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try 
  {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Query: Find all movies
    const movies = await collection.find({}).toArray();
    console.log('Movies:', movies);
  } 
  catch (error) 
  {
    console.error('Error connecting to MongoDB:', error);
  } 
  finally 
  {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();
