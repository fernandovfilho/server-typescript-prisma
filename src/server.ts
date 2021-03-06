import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import express from "express";
import router from "./routes";
const prisma = new PrismaClient();
dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () => console.log(`server running on port ${port}`));
