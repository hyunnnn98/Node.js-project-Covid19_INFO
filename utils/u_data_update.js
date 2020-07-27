const schedule = require('node-schedule');
const detail_info = require('./u_get_detail_info');

/* 1일 1 업데이트 기준 (월 ~ 금) : 0:00 */
const update = () => {
    schedule.scheduleJob('00 00 00 * * 1-5', () => {
        detail_info();
    })
}

module.exports = update;