console.log("hello MongoDB");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "xuesheng";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if (err) return new Error("Connected failed to server!");
    console.log("Connected successfully to server!");
    const db = client.db(dbName);
    console.log("db: ", db);
    client.close();
});
