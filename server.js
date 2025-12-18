'use strict';
require("dotenv").config()
const orchesterRoutes = require("./routes/orchesterRouter");
const express = require('express');
const app = express();
app.use(express.json());
app.use("/", orchesterRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});