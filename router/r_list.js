// call controller
const ctrl = require('../api/c_store_list');

module.exports = (router) => {
    /* 
        출발, 도착 정류장 데이터 받은 후 크롤링 데이터 제공.
        @string 출발지 , 도착지 데이터 받기.
    */
    router.post('/', ctrl.get_detail_data);

    router.post('/reset', ctrl.set_detail_data);

   return router;
}