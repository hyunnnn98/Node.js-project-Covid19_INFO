// modules
const response = require("../../utils/u_res");
const sequelize = require('sequelize');
const { Op } = sequelize;

// models
const models = require("../../models");
const Store = models.Store;

let get_search_gu_data = async (req, res) => {
    let { gu_name } = await req.body;
    console.log(gu_name);

    let data = await Store.findAll({
        where: {
            [Op.or]: [{ RDNWHLADDR: { [Op.like]: "%" + gu_name + "%" } },
            { SITEWHLADDR: { [Op.like]: "%" + gu_name + "%" } }]
        },
    });
    console.log('getData: ', data.length);

    if (data) {
        response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
    } else {
        response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }

}

module.exports = get_search_gu_data;