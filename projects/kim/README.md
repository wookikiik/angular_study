# Weather

## 기능 목록

- 도시 검색
- 검색된 도시 날씨 전시
- 온도 unit 변환

## 페이지 구성

- 도시 검색 페이지 ( /search-city )

  - 도시 검색버튼

- 날씨 조회 페이지 ( /weather )

  - 날씨 조회 결과 전시 (도시 이름, 업데이트 시간, 날씨 정보)
  - 온도 조회 결과 전시 (섭씨, 화씨, 최저, 최고, 평균 온도)
  - 도시 검색버튼, 셋팅 페이지 이동 버튼 전시

- 셋팅 페이지 ( /settings )

  - 온도 unit 변환 토글 전시

## Backend

### 도시 검색

- `API`
  ```
    https/www?city?query=$city_name
  ```
- `response`
  ```json
  {
    ..
  }
  ```
- `model`
  ```js
  interface City {
    id: string;
  }
  ```

## Package

```
/src
  /core
    /services
        - weather.service.ts : 날씨 조회 서비스
    /models
[...]
```
