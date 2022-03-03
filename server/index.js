import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import profileRoutes from "./routes/profile.js";
dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/user', profileRoutes);

app.get('/', function (req, res) {
    res.send("Welcome to REST Api");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL || "0.0.0.0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
