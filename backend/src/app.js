import express from "express"
import cors from "cors"
import {router as recipeRouter} from "./routes.js";

const app = express();
const port = 3001;
const hostname = "localhost"

app.use(express.json());
app.use(cors());

app.use("/api", recipeRouter);

app.listen(port, hostname, ()=>{
  console.log(`Server is running on http://${hostname}:${port}`);
});


