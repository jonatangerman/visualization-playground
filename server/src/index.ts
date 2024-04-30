import express from "express";
import cors from "cors";

import pieChartRouter from "./routes/PieChart";
import areaChartRouter from "./routes/AreaChart";
import lineChartRouter from "./routes/LineChart";

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/pie", pieChartRouter);
app.use("/area", areaChartRouter);
app.use("/line", lineChartRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
