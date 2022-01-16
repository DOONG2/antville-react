# 실시간 거래소 레벨의 WebSocket 통신과 피드 및 멘션 기능 구현하기

> `2021. 06. 01 ~ 2021. 06. 12 / 1주 반 / (주)비바체스`

## [Product](https://antville.kr/)

![](src/images/web_mockup.gif)

## 0. 팀원

- 강중석

## 1. 직면한 문제

- 촉박한 일정으로 빠르게 쳐내야하는 상황
- 정적 데이터와 동적 웹소켓 데이터의 상태관리
- 특정 종목이 렌더링되면 모든 종목이 렌더링 되는 이슈
- textarea 구조로 구현할 수 없는 멘션 기능

## 2. 주요 기능

![](src/images/websocket.gif)

![](src/images/mention.gif)

- 국내/해외 주식, 비트코인의 가격을 웹소켓으로 제공

- redux-toolkit 파편화로 렌더링을 최적화

- 태그와 피드기능

- API 요청 최적화

## 4. 사용 스택

- React.js
- TypeScript
- redux-toolkit
- react-query
- emotion
