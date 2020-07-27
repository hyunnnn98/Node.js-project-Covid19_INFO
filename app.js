/* 모듈 호출 */
const express = require('express');
const app = express();
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const bodyParser = require('body-parser');
const update = require('./utils/u_data_update');

/* 데이터베이스 연결 */
const models = require("./models/index.js");

models.sequelize.sync().then(() => {
    console.log(" DB connect");
}).catch(err => {
    console.log(" DB connect fail");
    console.log(err);
});

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

const listRouter = require('./router/r_list')(router);
app.use('/list', listRouter);

app.listen(3333, function () {
    console.log("server is running on port 3333");
});

/* 1일 1 업데이트 기준 (월 ~ 금) : 0:00 */
update();



