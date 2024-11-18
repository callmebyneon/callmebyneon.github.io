---
start: "2022-01"
end: "2023-09"
title: "연합 학습을 위한 플랫폼 데모 개발"
type: "team"
skills: ["React", "RTK Query", "React-Router v6", "MUI"]
summary: "React를 이용한 연합 학습 과제 진행에 필요한 모니터링 및 연합 학습을 위한 웹 서비스 프론트엔드 개발"
thumbnail: "project__fl_platform"
emoji: "📲"
links: [{ name: "Storybook 정리 (재정비중)", href: "https://github.com/callmebyneon/elf-client-storybook" }]
---

응급실에서 활용 가능한 모델 개발을 위해 React를 이용하여 연합 학습 플랫폼의 프론트엔드 개발 진행.

## 팀 프로젝트

팀원 : 프론트엔드 개발자 1인 + 백엔드 개발자 1인

## 사용 기술

|         part          |                     skills                     |
| :-------------------: | :--------------------------------------------: |
|      프론트엔드       |     React, RTK Query, React-Router v6, MUI     |
|   로컬 테스트 진행    | msw, Storybook (UI 테스트), Flask (API 테스트) |
| 프로젝트 설계 및 관리 |       Figma, PowerPoint, Excel, OneDrive       |
|   API 설계 및 통신    |         REST API (XMLHttpRequest API)         |

## 주요 성과

- 과제 진행 단계별 내부 요구 사항 정의 후, 기능별 화면 설계 진행. React를 이용하여 연합 학습 과제 진행에 필요한 모니터링 및 연합 학습을 위한 웹 서비스 프론트엔드 개발과 모니터링 대시보드 개발
    - 초기 백엔드 개발자와 함께 요구 사항과 기능 리스트 정리 후, 사용자 흐름도와 그에 따른 화면 설계서 작성
    - 이후 과제 진행 단계에 따라 요구 사항 변경에 따른 문서 업데이트 및 요구 사항에 맞는 데모 프로젝트 코드 업데이트
-	Python Flask와 React 웹 애플리케이션에서의 파일 전송 관련 REST API 요청 테스트   
    - Flask와 React 웹 사이에서의 파일 업로드 및 다운로드 과정 테스트를 위한 기본적인 로컬 환경 구축 후 요청 테스트 선행 후 백엔드 개발자와 업로드•다운로드 요청 API 정의
    - 그 외 데이터 통신과 상태 관리를 위해 Redux부터 RTK Query까지 점진적 마이그레이션 진행
-	React와 MUI를 기반으로 테마 적용 후 컴포넌트 기반 개발 및 테스트   
    - CSS_in_JS를 이용하여 styled 컴포넌트와 애플리케이션 로직을 함께 페이지 컴포넌트와 분리하여 관리
    - Storybook을 통해 개발 과정에서 컴포넌트별 테스트를 진행하며 컴포넌트 개발과 리팩토링 진행


---

<figure>
  <img src="./project__fl_screen.jpg" alt="설계 내용과 데모 화면 비교" />
  <figcaption>설계 내용과 데모 화면 비교</figcaption>
</figure>
