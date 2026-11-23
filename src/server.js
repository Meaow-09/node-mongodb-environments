const app = require("./app");
const config = require("./config/env");
const connectDatabase = require("./config/database");

async function startServer() {
    try {
        await connectDatabase();

        app.listen(config.port, () => {
            console.log(
                `Server running on port ${config.port}`
            );

            console.log(
                `Current environment: ${config.environment}`
            );
        });
    } catch (error) {
        console.error("Application startup failed:", error.message);
        process.exit(1);
    }
}

startServer();