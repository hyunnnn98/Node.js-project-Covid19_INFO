// modules
const response = require("../../utils/u_res");
const detail_info = require("../../utils/u_get_detail_info");

// models
const models = require("../../models");
const Store = models.Store;

let set_detail_data = async (req, res) => {
    const data = await detail_info();
    data.forEach(async (v) => {
        let { MGTNO, APVPERMYMD, SITETEL, SITEWHLADDR, RDNWHLADDR, BPLCNM, DISFETVEHGARAR, MICROSPKLNUM, HNDUSESTLZNUM, DYNPWSPRAYNUM, HDOPTDSPRAYNUM, GMKNUM, PROTGLSNUM, PROTUSECLOTNUM, VACUCLERNUM } = v;
        await Store.create({
            MGTNO, 
            APVPERMYMD, 
            SITETEL, 
            SITEWHLADDR, 
            RDNWHLADDR, 
            BPLCNM, 
            lat: parseFloat(v.lat),
            lng: parseFloat(v.lng),
            DISFETVEHGARAR: parseInt(DISFETVEHGARAR), 
            MICROSPKLNUM: parseInt(MICROSPKLNUM), 
            HNDUSESTLZNUM: parseInt(HNDUSESTLZNUM), 
            DYNPWSPRAYNUM: parseInt(DYNPWSPRAYNUM), 
            HDOPTDSPRAYNUM: parseInt(HDOPTDSPRAYNUM), 
            GMKNUM: parseInt(GMKNUM), 
            PROTGLSNUM: parseInt(PROTGLSNUM), 
            PROTUSECLOTNUM: parseInt(PROTUSECLOTNUM), 
            VACUCLERNUM: parseInt(VACUCLERNUM),
            X: '0',
            Y: '0',
        })
    })

    if (data) {
        response(res, 200, true, "[완료] 검색된 데이터의 정보를 반환합니다.", data);
    } else {
        response(res, 500, false, "[오류] 요청하신 데이터 검색에 실패하였습니다.");
    }

}

module.exports = set_detail_data;