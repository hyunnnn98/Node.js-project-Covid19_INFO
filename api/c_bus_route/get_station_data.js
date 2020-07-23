// 크롤링 코드 들어갈 예정

// modules
const puppeteer = require('puppeteer');
const response = require("../../utils/u_res");

let get_station_data = async (req, res) => {
    try {
        let data = {

        };
        
        response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
    } catch (e) {
        response(res, 500, true, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }

}

module.exports = get_station_data;