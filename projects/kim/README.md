# Weather

## 기능 목록

- 도시 검색
- 검색된 도시 날씨 전시
- 온도 unit 변환

## 페이지 구성

- 도시 검색 페이지 ( /search-city )

  - 도시 검색버튼

- 날씨 조회 페이지 ( /weather ), 메인 페이지

  - 날씨 조회 결과 전시 (도시 이름, 업데이트 시간, 날씨 정보)
  - 온도 조회 결과 전시 (섭씨, 화씨, 최저, 최고, 평균 온도)
  - 도시 검색버튼, 셋팅 페이지 이동 버튼 전시

- 셋팅 페이지 ( /settings )

  - 온도 unit 변환 토글 전시

## Backend

### 도시 검색

- `API`
    ```
    도시의 locationId 정보
    https://www.metaweather.com/api/location/search/?query=$city

    locationId 에 대한 날씨 정보
    https://www.metaweather.com/api/location/$locationId
    ```
- `response`
    ```json
    {
        "title": "London",
        "location_type": "City",
        "woeid": 44418,
        "latt_long": "51.506321,-0.12714"
    }
    ```
- `model`
    ```js
    interface City {
        title: string,
        loationType: string,
        woeid: number,
    }
    ```
## Package

```
/src
    /core
        - core.module.ts - core 모듈 구성
        /guards
            - city.search.guard.service.ts - 도시 검색 guard 서비스 구현
        /services
            - weather.service.ts   - 날씨, 온도 조회 서비스 구현
            - city.service.ts      - 도시 검색 서비스 구현
            - api.service.ts       - api 호출 서비스 구현
        /models
            - weather.model.ts     - 날씨, 온도 데이터 모델 구성
        /enums
            - weather.condition.ts - 날씨 상태를 나타낼 enum 구성
    /shared
        - shared.module.ts - shared 모듈 구성
        /components
            - city.search.component.ts - 도시 검색바 Component
            - temperature.component.ts - 온도 조회 Component
            - unit.toggle.component.ts - 온도 unit 변환 Component
        /directives
            - unit.toggle.directive.ts - 온도 unit 변환 Directive 구현
    /weather
        - weather.component.ts         - 날씨 조회 페이지 Component
        - weather-routing.module.ts    - 날씨 조회 페이지 Router 구성
        - weather.module.ts            - 날씨 조회 페이지 Module 구성
        - weather.resolver.ts          - 날씨 조회 페이지 resolver 구현
    /settings
        - settings.component.ts        - 셋팅 페이지 Component
        - settings-routing.module.ts   - 셋팅 페이지 Router 구성
        - settings.module.ts           - 셋팅 페이지 Module 구성
```

