// module
const puppeteer = require('puppeteer');

const get_station_info = async (start_point_value, end_point_value) => {
    try {
        const browser = await puppeteer.launch({ headless: false, args: ['--window-size=1520,1080', '--disable-notifications'] });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1080,
            height: 1080,
        })

        await page.goto('https://map.kakao.com/?target=car');

        // 다음 길찾기 접속 -> 왼쪽 길찾기 엘리먼트 불러올때까지 대기
        await page.waitForSelector('.menu');

        // 메뉴 - 길찾기 클릭.
        await page.evaluate(async () => {
            await document.querySelector('.menu > li:nth-child(2)').click();
        });

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
        // 상세정보 가져오기
        const data = await page.evaluate(async () => {
            
            let route_info_tags = document.querySelectorAll('.TransitRouteItem.busOnly');
            let Tags = [];
            let _id = 0;
            if (route_info_tags.length) {
                route_info_tags.forEach(async (v) => {
                    let time = v.querySelector('.title.clickArea .time .num.minute').innerText;
                    v.querySelector('.title.clickArea .time .num.minute').click();
                    
                    // let tag = v.querySelector('')
                    
                    let info = v.querySelector('.title.clickArea .walkTime').title.split(' | ');
                    let start_bus_station = v.querySelector('.TransitRouteOutlineItemView .summaryName > .name').innerText.split(' ')[0];
                    let end_bus_station = v.querySelector('.TransitRouteOutlineItemView.getoff .summaryName > .name').innerText.split(' ')[0];
                    
                    let data = {
                        _id,
                        time,
                        'walk': info[0],
                        'transper': info[1],
                        'cost': info[2],
                        'distance': info[3],
                        'stations': [],
                    };
                    v.querySelector('.moreRoute a').click();
                    // await v.waitForSelector('.detailRoute');
                    let temp = v.querySelectorAll('.detailRoute');
                    data.stations.push(start_bus_station);
                    await temp.forEach((val) => {
                        let temp1 = val.innerText.split('\n');
                        temp1.forEach((v) => {
                            data.stations.push(v);
                        })
                    })
                    data.stations.push(end_bus_station);
                    
                    Tags.push(data);
                    _id++;
                })
            } else {
                return false;
            }
            return Tags;
        });

        // await page.close();
        // await browser.close();

        return data;


    } catch (e) {
        return false;
    }
};

module.exports = get_station_info;
