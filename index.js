
import { MongoClient } from "mongodb";
import customer from "./src/profile";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const client = new MongoClient(uri);

async function retrive() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'The Room'
    const query = { title: "The Room" };
    const movie = await movies.findOne(query, customer);
    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
// retrive().catch(console.dir);


async function insert() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    
  } finally {
    await client.close();
  }
}
insert().catch(console.dir);

