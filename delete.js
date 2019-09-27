console.log("hello delete");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "xuesheng";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const deleteDocument = (db, cb) => {
    const collection = db.collection("studentsInfo");
    // collection.deleteMany(
    collection.deleteOne(
        {
            age: 27,
            sex: "male"
        },
        (err, result) => {
            if (err) {
                console.log("err", err);
            }
            console.log("result :", result);
            console.log("result.deletedCount: ", result.deletedCount);
            console.log("result.result.n: ", result.result.n);
            cb(result);
        }
    );
};

client.connect(err => {
    if (err) {
        console.log("err", err);
        return;
    }
    console.log("成功连接MongoDB数据库");
    const db = client.db(dbName);
    deleteDocument(db, () => {
        client.close();
    });
});
