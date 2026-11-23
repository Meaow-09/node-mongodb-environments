const dotenv = require("dotenv");
const path = require("path");

const allowedEnvironments = ["staging", "preprod", "prod"];

const environment = process.env.APP_ENV || "staging";

if (!allowedEnvironments.includes(environment)) {
    throw new Error(`Invalid environment: ${environment}`);
}

const envFile = path.resolve(
    process.cwd(),
    `.env.${environment}`
);

const result = dotenv.config({ path: envFile });

if (result.error) {
    throw new Error(`Cannot load environment file: ${envFile}`);
}

const requiredVariables = ["MONGODB_URI", "PORT"];

for (const variable of requiredVariables) {
    if (!process.env[variable]) {
        throw new Error(`Missing environment variable: ${variable}`);
    }
}

module.exports = {
    environment,
    port: Number(process.env.PORT),
    mongoUri: process.env.MONGODB_URI,
    logLevel: process.env.LOG_LEVEL || "info"
};