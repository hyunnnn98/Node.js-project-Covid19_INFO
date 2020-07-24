// modules
const response = require("../../utils/u_res");
const sequelize = require('sequelize');
const { Op } = sequelize;

// models
const models = require("../../models");
const Store = models.Store;

let get_detail_data = async (req, res) => {
    let { start_lat, end_lat, start_lng, end_lng } = await req.body;
    start_lat = parseFloat(start_lat);
    // const data = await sequelize.query(sql, { replacements: values })
    //     .spread(function (results, metadata) {
    //         console.log('results: ', results);
    //     }, function (err) {
    //         console.log('err: ', err)
    //     })
    let data = await Store.findAll({
        where: {
            lat: { [Op.gte]: start_lat, [Op.lte]: end_lat },
            lng: { [Op.gte]: start_lng, [Op.lte]: end_lng },
        },
    });
    console.log('getData: ', data.length);

    // console.log(start_lat, end_lat, start_lng, end_lng);

    // let data = await Store.findAll({
    //     // where: { lat: { gte: start_lat }, lat: { lte: end_lat }, lng: { gte: start_lng }, lng: { lte: end_lng }, }
    //     where: {
    //         lat: { [Op.between]: [37.5465729561758, 37.563662597033684] },
    //         lng: { [Op.between]: [126.95718027928548, 126.9843350873578] }
    //     }
    // }
    // );

    if (data) {
        response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
    } else {
        response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }

}

module.exports = get_detail_data;