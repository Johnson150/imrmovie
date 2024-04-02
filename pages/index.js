// pages/index.js

import MongoDBComponent from '../app/components/MongoDBComponent'; // Import MongoDBComponent

export default function Home({ data }) {
  return (
    <div>
      <h1>Next.js App</h1>
      <MongoDBComponent data={data} /> {/* Use MongoDBComponent and pass data as props */}
    </div>
  );
}

//
