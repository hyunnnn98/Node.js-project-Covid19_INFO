# YSS :: Your Safe Space - Node.js Server

### [ Method Type ] :: POST

- 좌표 기준 업체 리스트 검색

  #### URL : /

  ```javascript
  params: start_lat, end_lat, start_lng, end_lng;

  return
      {
        "status": 200,
        "success": true,
        "message": "[완료] 검색된 데이터의 정보를 반환합니다.",
        "info": [
            ...
        ]
      }
  ```

- (수동 업데이트 요청) 정부 제공 업체 데이터 업데이트

  #### URL : /reset

  ```javascript
  params : 없음
  ```

- 서울시 행정 구 기준 업체 목록 검색

  #### URL : /gu_search

  ```javascript
  params: company_name;

  return
      {
        "status": 200,
        "success": true,
        "message": "[완료] 검색된 데이터의 정보를 반환합니다.",
        "info": [
            {
                "id": 290,
                "MGTNO": "PHMB520193080033042500003",
                "APVPERMYMD": "20191021",
                "SITETEL": "02-989-7333",
                "SITEWHLADDR": "서울특별시 강북구 미아동 327번지 20호 코리아나빌딩",
                "RDNWHLADDR": "서울특별시 강북구 솔샘로67길 62, 코리아나빌딩 7층 703호 (미아동)",
                "BPLCNM": "(주)굿에어테크",
                "lat": 37.62,
                "lng": 127.028,
                "DISFETVEHGARAR": 9,
                "MICROSPKLNUM": 1,
                "HNDUSESTLZNUM": 2,
                "DYNPWSPRAYNUM": 0,
                "HDOPTDSPRAYNUM": 3,
                "GMKNUM": 5,
                "PROTGLSNUM": 5,
                "PROTUSECLOTNUM": 5,
                "VACUCLERNUM": 2,
                "createdAt": "2020-07-24T20:34:30.000Z",
                "updatedAt": "2020-07-24T20:34:30.000Z"
            }, ...
        ]
      }
  ```

- 서울시 소독 업체명 기준 검색 #### URL : /company_search

  ```javascript
  params: gu_name;

  return
      {
        "status": 200,
        "success": true,
        "message": "[완료] 검색된 데이터의 정보를 반환합니다.",
        "info": [
            {
                "id": 290,
                "MGTNO": "PHMB520193080033042500003",
                "APVPERMYMD": "20191021",
                "SITETEL": "02-989-7333",
                "SITEWHLADDR": "서울특별시 강북구 미아동 327번지 20호 코리아나빌딩",
                "RDNWHLADDR": "서울특별시 강북구 솔샘로67길 62, 코리아나빌딩 7층 703호 (미아동)",
                "BPLCNM": "(주)굿에어테크",
                "lat": 37.62,
                "lng": 127.028,
                "DISFETVEHGARAR": 9,
                "MICROSPKLNUM": 1,
                "HNDUSESTLZNUM": 2,
                "DYNPWSPRAYNUM": 0,
                "HDOPTDSPRAYNUM": 3,
                "GMKNUM": 5,
                "PROTGLSNUM": 5,
                "PROTUSECLOTNUM": 5,
                "VACUCLERNUM": 2,
                "createdAt": "2020-07-24T20:34:30.000Z",
                "updatedAt": "2020-07-24T20:34:30.000Z"
            }, ...
        ]
      }
  ```
