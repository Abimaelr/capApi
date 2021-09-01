const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8877;

app.use(bodyParser);

app.listen(PORT, () => {
    console.log("STARTING")
})