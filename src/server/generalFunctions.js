import Mongo from "mongodb";
import { MONGO_URL, DB_NAME } from "../static/JS/actionConstants";
const MongoClient = Mongo.MongoClient;

export const connectToDB = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        reject(err);
      }
      console.log("Connected to server");
      const db = client.db(DB_NAME);
      resolve(db);
    });
  });
};

export const findDocuments = (db, email) => {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    collection.find({ email }).toArray((err, docs) => {
      if (err) reject(err);
      console.log("Found the Following Records");
      resolve(docs);
    });
  });
};

export const insertOne = (db, data) => {
  let collection = db.collection("users");
  collection.insertOne(data);
};

export const findAll = db => {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    collection.find().toArray((err, docs) => {
      if (err) {
        reject(err);
      }
      console.log("Found the following records");
      resolve(docs);
    });
  });
};
