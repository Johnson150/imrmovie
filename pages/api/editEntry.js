import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        const database = client.db('IMR');
        const collection = database.collection('movies');

        if (req.method === 'PUT') {
            const { id, title, actors, release_year } = req.body;

            // Check if `id` is a valid ObjectId
            const isValidObjectId = ObjectId.isValid(id);
            if (!isValidObjectId) {
                return res.status(400).json({ error: 'Invalid ObjectId', id });
            }

            // Update the existing entry in the database
            const result = await collection.findOneAndUpdate(
                { _id: new ObjectId(id) }, // Correct usage of ObjectId
                { $set: { title, actors, release_year } },
                { returnOriginal: false }
            );

            res.status(200).json({ message: 'Entry updated successfully', entry: result.value });
        } else {
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}
