module.exports={
    mongoURI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/library",
    secretKey: process.env.SECRET_KEY || "dogs"

}
