console.log("find function!");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "xuesheng";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const findDocuments = (db, cb) => {
    const collection = db.collection("studentsInfo");
    collection.find({}).toArray((err, result) => {
        if (err) {
            console.log("err", err);
        }
        console.log("result:", result);
        console.log(
            `show all documents from collection about ${result.length} items!`
        );
        cb(result);
    });
};

// client.connect(err => {
//     if (err) {
//         console.log("err", err);
//         return;
//     }
//     console.log("Connected successfully to server!");
//     const db = client.db(dbName);
//     findDocuments(db, () => {
//         client.close();
//     });
// });

const findDocumentsWithFilter = (db, filter, cb) => {
    const collection = db.collection("studentsInfo");
    collection.find(filter).toArray((err, result) => {
        if (err) {
            console.log("err", err);
        }
        console.log("result:", result);
        console.log(
            `show all documents from collection about ${result.length} items!`
        );
        cb(result);
    });
};

client.connect(err => {
    if (err) {
        console.log("err", err);
        return;
    }
    console.log("Connected successfully to server!");
    const db = client.db(dbName);
    findDocumentsWithFilter(db, { age: 27, sex: "male" }, () => {
        client.close();
    });
});
