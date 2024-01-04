const { MongoClient } = require('mongodb');

// Replace 'your-mongodb-uri' with your actual MongoDB connection string
const uri = 'your-mongodb-uri';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndInsertSingle() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('your-database-name'); // Replace 'your-database-name' with your actual database name
    const collection = db.collection('posts');

    // Insert a single document
    const result = await collection.insertOne({
      title: "Post Title 1",
      body: "Body of post.",
      category: "News",
      likes: 1,
      tags: ["news", "events"],
      date: new Date()
    });

    console.log('Inserted Single Document:', result.insertedId);
  } finally {
    // Close the connection after the operation
    client.close();
    console.log('MongoDB connection closed');
  }
}

// Run the function to insert a single document
connectAndInsertSingle();