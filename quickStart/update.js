console.log("hello update");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "xuesheng";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const updateDocuments = (db, cb) => {
    const collection = db.collection("studentsInfo");
    // collection.updateMany(
    collection.updateOne(
        { name: "youling" },
        { $set: { age: 15 } },
        (err, result) => {
            if (err) {
                console.log("err", err);
                return;
            }
            console.log("result:", result);
            console.log("result.updatedCount: ", result.updatedCount);
            console.log("result.result.n : ", result.result.n);
            console.log(
                `Updated the document with the field a equal to ${result.result.n}`
            );
            cb(result);
        }
    );
};

client.connect(err => {
    if (err) {
        console.log("connect to server failed!");
        return;
    }
    console.log("Connected successfully to mongoDB server!");
    const db = client.db(dbName);
    updateDocuments(db, () => {
        client.close();
    });
});
