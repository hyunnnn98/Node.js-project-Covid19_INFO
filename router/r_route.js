// call controller
const ctrl = require('../api/c_bus_route');

module.exports = (router) => {
    /* 
        출발, 도착 정류장 데이터 받은 후 크롤링 데이터 제공.
        @string 출발지 , 도착지 데이터 받기.
    */
    router.post('/', ctrl.get_station_data);

    /* 
        제공받은 데이터 상세보기
        @int dataset_id 값 받기.
    */ 
   router.get('/info', ctrl.get_detail_data);
}