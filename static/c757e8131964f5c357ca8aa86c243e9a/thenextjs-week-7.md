---
date: '2024-07-06 00:30:00'
title: '[유데미x스나이퍼팩토리] 프로젝트 캠프 : Next.js 1기 - 7주차 기능 구현 시작?'
category: 'Camp'
tags:
  [
    'til',
    'b-log',
    'project-camp',
    'nextjs',
    'react-component',
    'soc',
    'fsd',
    'container-presentational',
  ]
summary: 'This week WE did : 개발 진행 시작 & 데이터 스키마 이해'
emoji: '💻'
---

![프로젝트 셋째주 회고](./thenextjs-week-6-cover.png)

# 7주차

**이번 주 to-do**

- [ ] 컴포넌트 설계 점검 & 리팩토링
- [ ] 반응형 추가
- [ ] MongoDB 연결 확인
- [ ] 기능 구현 시작 (Auth.js+)

## What we mainly did

### 컴포넌트 설계 점검

- 🖇️
  - [관심사 분리 (Separation of Concerns, SoC)](https://ko.wikipedia.org/wiki/%EA%B4%80%EC%8B%AC%EC%82%AC_%EB%B6%84%EB%A6%AC)
    - Headless UI 예시들: [Radix](https://www.radix-ui.com/primitives/docs/overview/introduction), [Tailwind Headless UI](https://github.com/tailwindlabs/headlessui), [shadcn/ui](https://ui.shadcn.com/docs)
  - [(번역) Feature-Sliced Design: The Best Frontend Architecture](https://emewjin.github.io/feature-sliced-design/)
    - (origin) https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj
  - [(번역) Container/Presentational 패턴](https://patterns-dev-kr.github.io/design-patterns/container-presentational-pattern/)
    - (origin) https://www.patterns.dev/react/presentational-container-pattern

\*외부 라이브러리를 사용할 때도 마찬가지,

외부 라이브러리를 사용하기 위해 작성한 코드 범위가 뷰나 기능을 위한 로직 외에 존재하게 되므로 라이브러리를 사용하기 위한 기본 컴포넌트(+필요한 뷰를 위한 커스터마이징 코드)와 데이터를 받아 프레젠테이셔널 컴포넌트에 전달하는 컨테이너로 역할에 따라 책임을 분산시킨다.

---

## What we have done and have to do

|       | 목표                                                                                                                       | 완료도     |
| ----- | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1주차 | 기획안&프로토타입 보충, 개발환경 세팅                                                                                      | ✅✅✅🔲🔲 |
| 2주차 | 과업 범위 정하기, 역할 분담, 마일스톤 추가, 공통 컴포넌트&라우트 정리, 페이지 마크업                                       | ✅✅✅✅🔲 |
| 3주차 | 공통 컴포넌트 개발, 페이지 마크업&스타일링, 데이터 스키마 타입과 ERD 이해, 리팩토링 및 merge 충돌 해결                     | ✅✅✅✅   |
| 4주차 | **공통 컴포넌트 개발 및 리팩토링, 반응형 추가, 메타데이터 설정 정리, MongoDB 구성 및 연결(+Auth.js 적용), 기능 로직 구현** |            |
| 5주차 | 기능 로직 구현, 1차 배포, 리뷰 및 추가 (가능하면 2순위 페이지까지 구현) 개발                                               |            |
| 6주차 | 배포, QA/리팩토링                                                                                                          |            |
| 7주차 | QA 마무리, 프로젝트 회고, 발표 준비&성과발표                                                                               |            |

### To be continued

- 기능 개발...

---

본 후기는 본 후기는 [유데미x스나이퍼팩토리] 프로젝트 캠프 : Next.js 1기 과정(B-log) 리뷰로 작성 되었습니다.

#유데미 #udemy #웅진씽크빅 #스나이퍼팩토리 #인사이드아웃 #미래내일일경험 #프로젝트캠프 #부트캠프 #Next.js #프론트엔드개발자양성과정 #개발자교육과정
