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
      result = await haiku.insertOne(getNewCustomer(starting));
      starting++;
    }
  } finally {
    // await client.close();
  }
}

for (var i = 0; i < 20; i++) {
  var recordCount = 100000 * i + 1;
  insert(100000, recordCount).catch(console.dir);
}
// insert(1, 1, true).catch(console.dir);
// insert(50000, 350001).catch(console.dir);
// insert(100000, 400001).catch(console.dir);
// insert(100000, 500001).catch(console.dir);
// insert(100000, 600001).catch(console.dir);
// insert(100000, 700001).catch(console.dir);
// insert(100000, 800001).catch(console.dir);
// insert(100000, 900001).catch(console.dir);
// insert(100000, 1000001).catch(console.dir);
// insert(100000, 110001).catch(console.dir);
// insert(100000, 1200001).catch(console.dir);
// insert(100000, 1300001).catch(console.dir);
// insert(100000, 1400001).catch(console.dir);
// insert(100000, 1500001).catch(console.dir);
// insert(100000, 1600001).catch(console.dir);
// insert(100000, 1700001).catch(console.dir);
// insert(100000, 1800001).catch(console.dir);
// insert(100000, 1900001).catch(console.dir);
// insert(100000, 2000001).catch(console.dir);
// insert(100000, 2100001).catch(console.dir);
// insert(100000, 2200001).catch(console.dir);
// insert(100000, 2300001).catch(console.dir);
