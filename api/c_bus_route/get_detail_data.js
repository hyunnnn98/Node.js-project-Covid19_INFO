// modules
const response = require("../../utils/u_res");
const detail_info = require("../../utils/u_get_detail_info");

let get_detail_data = async (req, res) => {
    try {
        const { start_point_value, end_point_value, _id } = req.body;
        console.log(start_point_value, end_point_value, _id);
        const data = await detail_info(start_point_value, end_point_value, _id);

        if (data) {
            response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
        } else {
            response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
        }
    } catch (e) {
        response(res, 500, true, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }
}

module.exports = get_detail_data;