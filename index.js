const express = require("express");
const path = require("path");
const memberRoutes = require("./routes/membersRoutes");
const logger = require("./middleware/logger");

const app = express();

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
