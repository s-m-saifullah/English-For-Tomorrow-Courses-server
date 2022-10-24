const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const courses = require("./data/courses.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedCourse = courses.find((course) => course.id === id);
  res.send(selectedCourse);
});

app.listen(port, console.log("Server Running on Port", port));
