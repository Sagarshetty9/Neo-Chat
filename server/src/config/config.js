import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  throw new Error("Port not defined in env file");
}

if (!process.env.MONGODB_URI) {
  throw new Error("Mongo URI not defined in env file");
}

if (!process.env.JWT_SECRET_KEY) {
  throw new Error("JWT secret key not defined in env file");
}

if (!process.env.FRONTEND_URL) {
  throw new Error("Frontend URL not defined in env file");
}


const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  FRONTEND_URL:process.env.FRONTEND_URL
};

export default config;
