// module
const puppeteer = require('puppeteer');

const get_detail_info = async (start_point_value, end_point_value, _id) => {
    try {
        _id = _id + 2;
        console.log(_id);
        const browser = await puppeteer.launch({ headless: false, args: ['--window-size=1520,1080', '--disable-notifications'] });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1080,
            height: 1080,
        })

        await page.goto('https://map.kakao.com/?target=car');

        // 다음 길찾기 접속 -> 왼쪽 길찾기 엘리먼트 불러올때까지 대기
        await page.waitForSelector('.menu');

        // 출발지 입력
        await page.evaluate(async (start_point_value) => {
            // 출발지 도착지 엘리먼트 로딩.
            const start_point = document.querySelectorAll('.valueBox')[0];
            start_point.value = start_point_value;
            start_point.click();
        }, start_point_value);
        await page.waitFor(1000);
        await page.keyboard.press('Enter');
        await page.waitFor(1000);

        // 도착지 입력
        await page.evaluate(async (end_point_value) => {
            // 도착지 엘리먼트 로딩.
            const end_point = document.querySelectorAll('.valueBox')[1];
            end_point.value = end_point_value;
            end_point.click();
        }, end_point_value);

        await page.waitFor(1000);
        await page.keyboard.press('Enter');
        await page.waitFor(1000);

        // 다음 웹페이지 튜토리얼 제거.
        await page.mouse.move(0, 200);
        await page.mouse.click(0, 200);

        // 교통수단 : 버스 설정
        await page.evaluate(() => {
            document.querySelector('#transittab').click();
        });

        await page.waitForSelector('.list.bustab');

        await page.evaluate(() => {
            document.querySelector('.list.bustab').click();
        });

        // 상세정보 불러올때까지 대기
        await page.waitForSelector('.TransitTotalPanel');
        console.log('상세정보가져오기');
        // 상세정보 가져오기
        await page.evaluate(async () => {
            document.querySelector(`li.TransitRouteItem.busOnly:nth-child(${_id}) .title`).click();
            // document.querySelector(`li.TransitRouteItem.busOnly:nth-child(${_id}) .title`).click();
            // document.querySelector(`li.TransitRouteItem.busOnly:nth-child(${_id})`).click();
        }, _id);
        
        console.log('test1');
        await page.waitFor(1000);

        // const data = await page.evaluate(async () => {
        //     let get_route_detail_tag = document.querySelectorAll(`.TransitRouteItem.busOnly:nth-child(${_id}) ol .TransitPointItem ol li`);
        //     await get_route_detail_tag.click();

        // }, _id);

        // await page.close();
        // await browser.close();

        return data;
    } catch (e) {
        return false;
    }
};

module.exports = get_detail_info;
