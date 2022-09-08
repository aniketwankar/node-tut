const { MongoClient } = require("mongodb");
// const express = require(express);
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-comm";

async function getData() {
  let result = await client.connect();

  let db = result.db(database);
  let collection = db.collection("product");
  let data = await collection.find({}).toArray();
  console.log(data);
}

getData();
