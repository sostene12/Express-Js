const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const memberRoutes = require("./routes/membersRoutes");
const logger = require("./middleware/logger");
const members = require("./members");

const app = express();

// middleware of views
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", { tittle: "Member App", members });
});

// static files
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// using middleware
// app.use(logger);

// members API routes
app.use("/api/members", memberRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
