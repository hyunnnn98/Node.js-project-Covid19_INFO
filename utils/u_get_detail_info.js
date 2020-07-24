// module
const axios = require('axios');

const myAxios = axios.create({ timeout: 1000 });

const get_list_count = async () => {
    url = `http://openapi.seoul.go.kr:8088/757557487074796a353361677a536f/json/LOCALDATA_093011/1/1/`;
    const { data } = await myAxios.get(url);
    return await data['LOCALDATA_093011'].list_total_count;
}

const get_detail_info = async () => {
    // 영업중 데이터 저장
    let arr_data = [];
    try {
        // 개수 설정
        const count = await get_list_count();
        let temp = parseInt(count / 1000);
        let url = null;

        // 천번대 데이터 바인딩
        for (let i = 0; i < temp; i++) {
            url = `http://openapi.seoul.go.kr:8088/757557487074796a353361677a536f/json/LOCALDATA_093011/${(i * 1000) + 1}/${(i + 1) * 1000}/`;
            let { data } = await myAxios.get(url);
            await data['LOCALDATA_093011'].row.forEach(element => {
                temp_val = parseInt(element.TRDSTATEGBN);
                if (temp_val === 1 && element.APVCANCELYMD.length == 0) arr_data.push(element);
            });
        }

        // 1000번대 나머지 비교
        url = `http://openapi.seoul.go.kr:8088/757557487074796a353361677a536f/json/LOCALDATA_093011/${(1000 * temp) + 1}/${count}/`;
        let { data } = await myAxios.get(url);
        await data['LOCALDATA_093011'].row.forEach(element => {
            temp_val = parseInt(element.TRDSTATEGBN);
            if (temp_val === 1 && element.APVCANCELYMD.length == 0) arr_data.push(element);
        });

        console.log(arr_data.length);
        let final_arr = [];
        // x , y값 넣기.
        for (let i = 0; i < arr_data.length; i++) {
            add = (arr_data[i].RDNWHLADDR != "") ? arr_data[i].RDNWHLADDR : arr_data[i].SITEWHLADDR;
            add = encodeURI(add);
            url = 'https://dapi.kakao.com/v2/local/search/address.json?query=' + add;
            // console.log('url: ', url);
            await myAxios.get(url, {
                headers: {
                    Authorization: 'KakaoAK f01dcaead85b5ba96ef7f16a75ee6497',
                    Host: 'dapi.kakao.com'
                }
            }).then(async res => {
                arr_data[i].lat = await res.data.documents[0].y;
                arr_data[i].lng = await res.data.documents[0].x;
            }).catch(e => {
                console.log(e);
            })
            setTimeout(async () => {
                console.log("저장..");
            }, 1000);
        }
        return arr_data;
    } catch (e) {
        console.log('에러발생: ', e)
        return false;
    }
};

module.exports = get_detail_info;
