const app = require('./app');

const PORT = process.env.PORT || 3003;

const apiRouter = require('./routes/api');
const path = require("path");
const {urlencoded} = require("body-parser");

app.use(json());
app.use(urlencoded());
app.use(urlencoded({ extended: false }));

app.use(static(path.resolve(__dirname, '../public')));
app.use(static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;