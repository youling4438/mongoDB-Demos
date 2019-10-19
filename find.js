console.log("find function!");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";

// const dbName = "xuesheng";
const dbName = "shici";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const findDocuments = (db, cb) => {
    const collection = db.collection("jrsc");
    collection.find({ type: "INSERT_JR_SHICI" }).toArray((err, result) => {
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

const updateDocument = (db, cb) => {
    const collection = db.collection("jrsc");
    collection.updateMany(
        { type: "INSERT_SHICI" },
        { $set: { type: "INSERT_JR_SHICI" } },
        (err, result) => {
            if (err) {
                console.log("err", err);
            }
            console.log("result:", result);
            cb(result);
        }
    );
};

client.connect(err => {
    if (err) {
        console.log("err", err);
        return;
    }
    console.log("Connected successfully to server!");
    const db = client.db(dbName);
    findDocuments(db, () => {
        client.close();
    });
    // updateDocument(db, () => {
    //     client.close();
    // });
});

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

// client.connect(err => {
//     if (err) {
//         console.log("err", err);
//         return;
//     }
//     console.log("Connected successfully to server!");
//     const db = client.db(dbName);
//     findDocumentsWithFilter(db, { age: 27, sex: "male" }, () => {
//         client.close();
//     });
// });
