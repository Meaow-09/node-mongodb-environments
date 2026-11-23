const mongoose = require("mongoose");
const config = require("./env");

async function connectDatabase() {
    try {
        await mongoose.connect(config.mongoUri);

        console.log(
            `MongoDB connected successfully (${config.environment})`
        );
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

module.exports = connectDatabase;