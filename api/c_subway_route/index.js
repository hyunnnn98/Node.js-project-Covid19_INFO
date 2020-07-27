const puppeteer = require('puppeteer');

const crawler = async (start_point_value, end_point_value) => {
    console.log(start_point_value, end_point_value);
    try {
        const browser = await puppeteer.launch({ headless: false, args: ['--window-size=1520,1080'] });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1080,
            height: 1080,
        })

        await page.goto('https://map.kakao.com/');

        // 다음 길찾기 접속 -> 왼쪽 길찾기 엘리먼트 불러올때까지 대기
        await page.waitForSelector('#info');

        // 크롤링된 데이터 담을 변수
        let result = [];

        // 메뉴 - 길찾기 클릭.
        await page.evaluate(async () => {
            await document.querySelector('.menu > li:nth-child(2)').click();
        });

        // 출발지 입력
        await page.evaluate(async (start_point_value) => {
            // 출발지 도착지 엘리먼트 로딩.
            const start_point = document.querySelectorAll('.valueBox')[0];
            start_point.value = start_point_value;
            await start_point.click();
        }, start_point_value);
        await page.waitFor(1000);
        await page.keyboard.press('Enter');
        await page.waitFor(1000);

        // 도착지 입력
        await page.evaluate(async (end_point_value) => {
            // 도착지 엘리먼트 로딩.
            const end_point = document.querySelectorAll('.valueBox')[1];
            end_point.value = end_point_value;
            await end_point.click();
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

        await page.waitFor(1000);

        // 상세정보 불러올때까지 대기
        await page.waitForSelector('.TransitTotalPanel');
        console.log('태그 불러왔어요!');
        // 상세정보 가져오기
        const data = await page.evaluate(async () => {

            let route_info_tags = document.querySelectorAll('.TransitRouteItem.busOnly');
            let Tags = [];
            if (route_info_tags.length) {
                route_info_tags.forEach(async (v) => {
                    let time = v.querySelector('.title.clickArea .time .num.minute').innerText;
                    let info = v.querySelector('.title.clickArea .walkTime').title.split(' | ');
                    let start_bus_station = v.querySelector('.TransitRouteOutlineItemView .summaryName > .name').innerText.split(' ')[0];
                    let end_bus_station = v.querySelector('.TransitRouteOutlineItemView.getoff .summaryName > .name').innerText.split(' ')[0];

                    let data = {
                        time,
                        'walk': info[0],
                        'transper': info[1],
                        'cost': info[2],
                        'distance': info[3],
                        start_bus_station,
                        end_bus_station,

                    };

                    Tags.push(data);
                })
            } else {
                console.log("데이터가 없습니다.");
            }
            return Tags;
        });
        console.log(data);


        // await page.close();
        // await browser.close();
    } catch (e) {
        console.log(e);
    }
};

crawler('파스쿠찌 대구신암점', '영진전문대학교 복현캠퍼스');
