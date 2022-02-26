const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

dotenv.config();

const app = express();

app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


// middlewares

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => {

    app.listen(process.env.PORT, () => console.log('Backend server is running'));
})
.catch(err => console.log(err))


