# Nodejs-project-Covid19_INFO
2020.07.24 정부혁신 끝장개발대회 메이커톤

# 제출 자료

### 소개글

현재까지 코로나19 바이러스가 장기화 되면서 방역의 중요성에 대한 관심이 증가되고 있습니다. 그에 따라 정부에서 제공하는 소득 업체 관리번호, 인허가 일자, 영업 상태여부, 보유 장비 등 신뢰성 있는 정보를 시각화시켜 일반 사용자도도 손쉽게 소독업체의 정보를 조회하고 이용할 수 있게 하였습니다. 보기 쉽게 시각화된 데이터를 통해, 좀 더 적극적으로 방역에 관심을 가지게 독려함으로써, 바이러스 확산을 막고 사회적으로 긍정적인 효과를 얻을 수 있습니다.

### 제안 이유

최근 코로나19 바이러스 정례 브리핑에서 코로나 근절을 위한 소독의 중요성을 강조하였습니다. 코로나19 바이러스가 묻어 있는 물체, 특히 침 방울 같은 경우 2~3일까지 생존이 가능하기 때문에 물체 표면을 소독하는 것만으로도 바이러스 전파를 차단하는 것에 효과적일 수 있다고 합니다. 일반 자영 업체나 가정에서 자체적으로 소독을 하는 것은 어렵기 때문에 전문 소독 업체를 찾아볼 수밖에 없지만, 네이버 같은 검색엔진에서 검색할 경우 정제되지 않은 정보(무허가 업체, 광고순으로 노출) 들이 많아 신뢰성 있는 데이터라고 보기 어렵습니다. 그래서 우리는 국가에서 제공해주는 신뢰성있는 데이터를 가공하여 코로나19 바이러스 확산을 막기 위해 제안하게 되었습니다.

### 첨부영상

### 출품작의 역할

소독을 필요로 하는 사람들에게 소독 업체들에 대한 데이터를 효과적 제공할 수 있습니다. 지역구별, 업체명으로 검색이 가능하도록 하여 사용자가 보다 넓은 범위의 정제된 데이터를 손쉽게 이용할 수 있습니다.

### 출품작에 대한 기대효과

향후에는 사용자가 소독업체를 이용한 후, 업체에 대한 평점과 이용후기를 등록하고 공유할 수 있는 서비스를 제공하게 됩니다. 또한 사업자가 기본 견적 정보를 추가하여 사용자에게 보다 다양한 선택의 폭을 줄 수 있도록 할 것입니다.

### 출품작의 제작 과정

- api 에서 활용가능한 데이터 분석, 사용자에게 필요한 데이터를 시각화 방안을 고안
- 웹페이지의 UI / UX 및 사용자 관점 스토리보드 구상
- node.js 서버가 api 에 요청해 매시작 정각 필요한 데이터를 업데이트
- 웹페이지에서 node.js 서버를 통해 데이터베이스의 정보를 검색(지역구, 업체명 검색)

### 적용 기술

- AWS EC2, RDS, S3
- 카카오맵 API
- Node.js
- React.js
- 포토샵, 일러스트레이터

### 홈페이지(사이트, 블로그)

- http://vue-syder.s3-website.ap-northeast-2.amazonaws.com

### 깃허브(깃랩)

- React : https://github.com/LeeJaeBae/covid19-yss
- Node JS : https://github.com/kokomade98/Nodejs-project-Covid19_INFO

### 활용 데이터

- 서울특별시 소독업 인허가 정보
- 카카오맵 위치정보