// modules
const response = require("../../utils/u_res");

// models
const models = require("../../models");
const Store = models.Store;

let get_detail_data = async (req, res) => {
    let { start_lat, end_lat, start_lng, end_lng } = req.body;
    console.log(start_lat, end_lat, start_lng, end_lng);
    
    let data = await Store.findAll({
        where: { lat: { between: [start_lat, end_lat] }, lng: { between: [start_lng, end_lng] } }
    });

    if (data) {
        response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
    } else {
        response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }

}

module.exports = get_detail_data;