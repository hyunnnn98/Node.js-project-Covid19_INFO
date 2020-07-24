// modules
const response = require("../../utils/u_res");
const station_info = require("../../utils/u_get_station_info");

let get_station_data = async (req, res) => {
    try {
        const { start_point_value, end_point_value } = req.body;
        console.log(start_point_value, end_point_value);
        const data = await station_info(start_point_value, end_point_value);

        if(data) {
            response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
        } else {
            response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
        }
    } catch (e) {
        response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }

}

module.exports = get_station_data;