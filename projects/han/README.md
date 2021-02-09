# Weather

## 기능 목록

- 도시 조회
- 도시 별 날씨 조회 및 전시
- 온도 단위 변환

## 페이지 구성

- 공통 페이지
  - Header
    - 사이트 타이틀 LOGO 메인페이지 링크 버튼
    - 도시 검색 버튼
    
- 도시 조회 페이지 ( /search/city )

  - 도시를 검색하는 Search Box 와 검색 버튼
  - 검색된 도시가 하단에 전시
  - 전시된 도시를 클릭하여 도시 날씨 전시 페이지로 이동

- 도시 별 날씨 페이지( /weather )

  - 세팅 버튼 (세팅 페이지 연결)
  - 검색을 하지 않은 경우 검색 페이지로 이동하는 버튼 전시
  - 도시 이름, 검색 시간, 날씨 상태 이미지/텍스트, 평균, 최저, 최고 온도 (섭씨, 화씨 지원)

- 세팅 페이지 ( /settings )
  - 기온 단위 변환 토글 버튼 : 클릭하여 전시되는 기온의 단위(섭씨, 화씨)를 설정
  - 돌아가기 버튼 (도시 별 날씨 페이지)

## Backend

### 도시 검색

- `API`
  ```
    https://www.metaweather.com/api/location/search/?query=$city_name
  ```
- `response`
  ```json
  [{
    "title": "London",
    "location_type": "City",
    "woeid": 44418,
    "latt_long": "51.506321,-0.12714"
  }]
  ```
- `model`
  ```ts
  interface City {
    title: string;
    woeid: number;
    latitude: number;
    longitude: number;
  }
  ```

### 날씨 검색

- `API`
  ```
    https://www.metaweather.com/api/location/$woeid
  ```
- `response`
  ```json
  {
    "consolidated_weather": [
      {
        "id": 5565095488782336,
        "weather_state_name": "Showers",
        "weather_state_abbr": "s",
        "wind_direction_compass": "WNW",
        "created": "2019-02-10T19:55:02.434940Z",
        "applicable_date": "2019-02-10",
        "min_temp": 3.75,
        "max_temp": 6.883333333333333,
        "the_temp": 6.885,
        "wind_speed": 10.251177687940428,
        "wind_direction": 288.4087075064449,
        "air_pressure": 998.9649999999999,
        "humidity": 79,
        "visibility": 8.241867493835997,
        "predictability": 73
      },
      ...
    ],
    "time": "2019-02-10T21:49:37.574260Z",
    "sun_rise": "2019-02-10T07:24:19.235049Z",
    "sun_set": "2019-02-10T17:05:51.151342Z",
    "timezone_name": "LMT",
    "parent": {
      "title": "England",
      "location_type": "Region / State / Province",
      "woeid": 24554868,
      "latt_long": "52.883560,-1.974060"
    },
    "sources": [
      {
        "title": "BBC",
        "slug": "bbc",
        "url": "http://www.bbc.co.uk/weather/",
        "crawl_rate": 180
      },
      ...
    ],
    "title": "London",
    "location_type": "City",
    "woeid": 44418,
    "latt_long": "51.506321,-0.12714",
    "timezone": "Europe/London"
  }
  ```
- `model`
  ```ts
  enum WeatherCondition {
    snow,
    sleet,
    hail,
    thunderstorm,
    heavyRain,
    lightRain,
    showers,
    heavyCloud,
    clear,
    unknown
  }

  interface Weather {
    condition: WeatherCondition;
    formattedCondition: string;
    temp: number;
    minTemp: number;
    maxTemp: number;
    locationId: number;
    created: string;
    lastUpdated: Date;
    location: string
  }
  ```

## Package

```
/src
  /core
    /services
      - weather.service.ts : 날씨 조회 서비스
      - city.service.ts : 도시 관련 서비스
      - temperature.service.ts : 온도 변환 서비스
      - api.service.ts : 공통 weather api 서비스
    /models
      - weather.model.ts : 날씨 정보 저장 모델
      - city.model.ts : 도시 정보 저장 모델
    /enums
      - weathercondition.enum.ts : 날씨 상태 별 텍스트 Enum

  /weather : 메인 날씨 전시 페이지
    - weather.component.ts : 날씨 페이지 컴포넌트
    - weather.module.ts : 날씨 페이지 모듈
    - weather-routing.module.ts : 날씨 페이지 라우팅 모듈
    - weather.resolver.ts : 날씨 페이지 resolver
    - weather.guard.ts : 날씨 페이지 guard
    /weatherinfo
      - weatherinfo.component.ts : 날씨 정보 컴포넌트

  /search : 검색 페이지
    - search.component.ts : 검색 페이지 컴포넌트
    - search.module.ts : 검색 페이지 모듈
    - search-routing.module.ts : 검색 페이지 라우팅 모듈
    /city : 도시 검색 컴포넌트
      - searchcity.component.ts : 도시 검색 컴포넌트

  /settings
    - settings.component.ts : 세팅 페이지 컴포넌트
    - settings.module.ts : 세팅 페이지 모듈
    - settings-routing.module.ts : 세팅 페이지 라우팅 모듈
    
  /shared
    - shared.module.ts : 공통 공유 모듈
    /layout
        - header.component.ts : 공통 헤더 컴포넌트
    /pipes
      - temperature.pipe.ts : 온도 단위를 변환하여 전시하기 위한 온도 파이프
```
