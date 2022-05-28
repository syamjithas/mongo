import { MongoClient } from "mongodb";
import getNewCustomer from "./src/profile.js";
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const client = new MongoClient(uri);

async function retrive() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'The Room'
    const query = { title: "The Room" };
    const movie = await movies.findOne(query, getNewCustomer);
    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
// retrive().catch(console.dir);

async function insert(record, starting) {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const haiku = database.collection("cust1");
    // create a document to insert
    let result, cust;
    for (let index = 1; index <= record; index++) {
      process.stdout.write(`${index}/${record}\r`);
      result = await haiku.insertOne(getNewCustomer(index));
      starting++;
    }
  } finally {
    // await client.close();
  }
}
insert(50000, 1).catch(console.dir);
insert(50000, 50001).catch(console.dir);
insert(50000, 100001).catch(console.dir);
insert(50000, 150001).catch(console.dir);
insert(50000, 200001).catch(console.dir);
insert(50000, 250001).catch(console.dir);
// insert(50000, 300001).catch(console.dir);


