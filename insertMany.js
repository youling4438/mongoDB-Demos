console.log("insert function!");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "xuesheng";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const insertDocuments = (db, cb) => {
    const collection = db.collection("studentsInfo");
    collection.insertMany(
        [
            {
                name: "roy",
                age: 27,
                sex: "male",
                home: "xi'an",
                hobbies: ["NBA", "running", "history"]
            },
            {
                name: "youling",
                age: 25,
                sex: "male",
                home: "xi'an",
                hobbies: ["reading", "sports"]
            },
            {
                name: "zhen",
                age: 27,
                sex: "female",
                home: "xian yang",
                hobbies: ["tv", "music", "food"]
            }
        ],
        (err, result) => {
            if (err) {
                console.log("err", err);
            }
            console.log("result.result.n", result.result.n);
            console.log("result.ops.length", result.ops.length);
            console.log(
                `Inserted ${result.ops.length} documents into the collection ${collection}`
            );
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
    insertDocuments(db, () => {
        client.close();
    });
});
