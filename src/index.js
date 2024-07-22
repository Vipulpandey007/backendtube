import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
