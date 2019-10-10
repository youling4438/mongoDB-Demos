const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "shici";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const insertDocument = (db, cb) => {
    const collection = db.collection("jrsc");
    collection.insertOne(
        {
            status: "success",
            data: {
                id: "5b8b9572e116fb3714e73031",
                content: "月度银墙，不辨花丛那辨香。",
                popularity: 2210,
                origin: {
                    title: "采桑子·谢家庭院残更立",
                    dynasty: "清代",
                    author: "纳兰性德",
                    content: [
                        "谢家庭院残更立，燕宿雕梁。月度银墙，不辨花丛那辨香。",
                        "此情已自成追忆，零落鸳鸯。雨歇微凉，十一年前梦一场。"
                    ],
                    translate: null
                },
                matchTags: ["晚上"],
                recommendedReason: "",
                cacheAt: "2019-10-10T23:10:15.835886"
            },
            token: "PwccpS+Em5U5jLHCKwm1rivdKqC3CCoG",
            ipAddress: "124.23.132.30",
            warning: null
        },
        (err, result) => {
            if (err) {
                console.log("err", err);
            }
            console.log("result", result);
            console.log("result.insertedCount: ", result.insertedCount);
            cb(result);
        }
    );
};

client.connect(err => {
    if (err) {
        console.log("err", err);
        return;
    }
    const db = client.db(dbName);
    insertDocument(db, () => {
        client.close();
    });
});
