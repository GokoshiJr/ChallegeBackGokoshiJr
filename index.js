const cors = require("cors");
const express = require("express");
const morgan = require('morgan');
const connectDb = require('./database/mongodb');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/products', require('./routes/product_routes'));
app.use('/price', require('./routes/price_routes'));

async function main({ port = 3000 }) {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`Server on port ${port}`);
        })
    } catch (err) {
        console.error(error);
        process.exit(0);
    }
}

main({})