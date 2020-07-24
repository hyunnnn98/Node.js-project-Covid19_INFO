/* 모듈 호출 */
const express = require('express');
const app = express();
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const bodyParser = require('body-parser');

/* 모듈 적용 */
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use static folder
app.use(express.static('public'));
// cors
app.use(cors());
// cookie-parser
app.use(cookie_parser());

/* 라우터 호출 */
const router = express.Router();

const routeRouter = require('./router/r_route')(router);
app.use('/route', routeRouter);

app.listen(3333, function () {
    console.log("server is running on port 3333");
});



