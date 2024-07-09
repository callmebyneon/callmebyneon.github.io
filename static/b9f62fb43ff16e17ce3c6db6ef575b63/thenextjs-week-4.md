---
date: '2024-06-22 22:00:00'
title: '[유데미x스나이퍼팩토리] 프로젝트 캠프 : Next.js 1기 - 4주차 프로젝트 시작'
category: 'Camp'
tags:
  [
    'til',
    'b-log',
    'project-camp',
    'nextjs',
    'github',
    'functional-specification',
    'user-flow',
    'design-system',
  ]
summary: 'This week WE did : 프로젝트 시작 준비'
emoji: '💻'
---

![프로젝트 첫째주 회고](./thenextjs-week-4-cover.png)

# 4주차

**이번 주 to-do**

- [x] 프로젝트 파악
- [x] 깃허브 생성
- [x] 사용자 흐름 1차 완성
- [ ] 기능 정의 (\~)
- [ ] 프로토타입 보충 (\~)

## What we did

### 1. 프로젝트 기획안 파악

![프로젝트 기획안의 컨셉 설명과 로고, 슬로건](./thenextjs-week-4-project-concept.png)

우리 팀은 [유데미 큐레이션](https://udemy.wjtb.co.kr/) 서비스에서 학습한 사용자들이 사용자들끼리 함께 스터디로 이어질 수 있는 SaaS형 스터디 서비스를 개발하게 되었다. (팀원들 모두 이 프로젝트를 1순위로 지원하여 만나게 되었고 아주 다행이라고 생각한다ㅎ😸)

> **SaaS**(Software as a Service, 서비스형 소프트웨어)는 기기에 설치하지 않고 온라인으로 접근할 수 있는 소프트웨어 라이센스 및 제공 수단을 이야기한다. 호스팅 소프트웨어, 주문형 소프트웨어 및 웹 기반 소프트웨어라고도 한다.  
> (출처: [https://ko.wix.com/blog/post/software-as-a-service-saas](https://ko.wix.com/blog/post/software-as-a-service-saas))

우선 주어진 프로젝트 기획안을 확인했다. 기획서가 아니라 기획안이라고 하는 데에는 이유가 있다. 피그마 프로토타입도 완성된 상태가 아니라고 느껴졌고 팀원들과 이야기하다 보니 '굳이 필요한가?' 싶은 부분들도 있었고 화면이 아예 없는 화면들도 많이 발견하게 됐다.

- 프로젝트의 목표
- 타겟 유저
- 주요 시나리오
- 그 외 프로토타입에서 보이는 것들
  - 구분해야 할 사용자 유형
  - 완성되지 않아 작성되지 않은 프로토타입 페이지들... 😱
  - 조건이 정확하지 않은 기능들... 🥲
- 더 필요한 부분들
  - 없는 페이지들: 마이 페이지/프로필 수정, 로그인·회원가입 과정, 스터디룸 세부 페이지
  - 프로토타입 보충
  - 사용자 흐름 정확하게 파악하기

기획적인 부분에서 팀원들과 함께 더 진행되어야 할 부분들이 보인다. 그래서 핵심적인 컨셉과 디자인, 역할이나 기능 페이지의 이름들은 그대로 가져가되, 모든 페이지에서의 사용자 흐름은 90% 이상 서로 합의하고 이해한 후 넘어가기로 했다.

### 2. 사용자 흐름

<figure>
  <img src="./thenextjs-week-4-flow-chart-symbols.png" alt="사용자 흐름(user flow)을 그리는 기호들. 출처: https://brunch.co.kr/@hyoi0303/1" />
  <figcaption>사용자 흐름(user flow)을 그리는 기호들<br />출처: <a href="https://brunch.co.kr/@hyoi0303/1">https://brunch.co.kr/@hyoi0303/1</a></figcaption>
</figure>

기호들을 정확히 지켜가며 그리진 않고 페이지와 필요한 데이터, 액션에 따른 모달/알림 바(notification) 변화, 화면 출력 내용 등을 중점으로 그려나갔다.

<figure>
  <img src="./thenextjs-week-4-flow-chart-elements.png" alt="사용한 기호들 예시" />
  <figcaption>사용한 기호들 예시</figcaption>
</figure>

**추가로 논의하게 된 주제들**

기존 기획안에 서비스에서 필요한 기능들에 대한 자세한 정의들이 부족했지만 가장 먼저 논의가 필요하다고 생각되었던 주제들이 있다.

- 로그인, 회원가입 (이메일, 소셜 회원가입)
  - 가장 중요한 로그인과 회원가입 과정이 생략되어 있었다. 왜 없는지는 알 수 없지만 일단 기획 초안에 있던 레퍼런스들에 유데미 큐레이션과 비슷하게 인프런이나 패스트 캠퍼스, 제로베이스 등의 온라인 강의 서비스에서 회원 가입과 로그인을 어떻게 다루고 있는지 살펴보고 우리 서비스의 로그인/회원가입 단계를 설정했다.
- 사용자 유형 전환 🔺
  - 기획안의 가장 큰 컨셉이 프로(전문가)와 함께 하는 스터디 서비스이기 때문에 일반 수강자, 일반 사용자들끼리만 스터디를 진행하는 것이 아닌 전문가임을 인증하고 프로들이 멘토링 형식으로 스터디를 진행하고 스터디에 참여할 수 있도록 하는 부분이었다. 하지만 일반 사용자끼리도 스터디를 모집하고 진행할 수 있는데 프로임을 굳이 인증까지 해가며 스터디를 이끌어가기 위해 서비스를 사용할 사람이 얼마나 될까라는 의문으로 이런 사용자 유형 전환 기능은 그대로 구현할지 보류하게 되었다.
  - 기획안에서 스터디 참가비를 설정할 수 있는 부분이 있는 것으로 보아 프로 사용자들의 수요가 있을 수도 있겠지만 온라인 강의보다도 수익화가 어려워 보이는 소수의 스터디를 굳이 후배 양성의 이유만으로? 서비스를 선택할 이유가 있을지 아직까지도 의문이긴 하다.
- 댓글과 답글 작성 (CRUD)
  - 사용자 흐름을 작성하다 보니 서비스 전반적으로 CRUD(Create, Read, Update, Delete) 과정이 정말 많다고 느꼈다. 특히 풀스택 개발자로서 이 프로젝트를 진행하며 데이터 CRUD 과정을 생각하니 머리가 좀 복잡해졌는데, 그중에도 커뮤니티에 글을 작성하고 댓글을 작성, 수정, 삭제하는 과정에 데이터를 어떤 구조로 다루어야 할지 사실 아직도 명확하게 와닿지 않는다.
  - 일단 무한하게 답글의 답글이 이어지는 것을 막기 위해 '게시글-댓글-답글'의 depth까지 만을 허용하기로 합의하게 되었다.
  - 그나마 데이터를 꺼내는 과정이 익숙하다고 생각했던 RDB가 아닌 이번에 Next.js와 함께 학습한 MongoDB를 사용해야 한다고 생각하니 어떻게 데이터를 관리해야 할지 와닿지 않는 듯하다. 사실 RDB를 사용하여 SQL을 짜라고 했어도 얼렁뚱땅 짰겠지만... 고민이다.

### 3. 깃허브 레포지토리 세팅과 기능 정의

이번 프로젝트 첫 주의 마지막에는 깃허브(Github)에 프로젝트 세팅을 하며 약속된 주 작업 시간을 끝냈다. 이렇게 깃허브로 개발 프로젝트를 관리하며 진행하게 되는 게 처음이다 보니 코드나 커밋 컨벤션부터 팀원들의 경험이나 공유해 준 내용들에서 도움을 많이 받았다. (감사합니다 🙏)

세팅을 끝마쳤다고 할 수 있는 상태는 아니어서 앞으로 기능 정의를 Issue에 작성하고 마일스톤을 논의하여 설정하고 개발을 진행하게 될 것이다.

**진행 중**

- Project : 프로젝트에서 개발해야 하는 기능들, to-do 관리
  - Issue와 연동
- Issue & Milestones : 개발 마일스톤과 그에 따라 개발이 필요한 기능 명세 관리
- 이슈, 커밋, PR 템플릿 추가

**참고 글**

- [[Git] 깃헙 프로젝트와 이슈 정리하기](https://softwaresaramdle.tistory.com/25)

## What we have to do

기획 단계부터 손볼 곳이 많아 다 같이 합의하며 유저 플로우 차트까지 어느 정도 완성시켰더니 일주일이 금세 가버렸다.
다음 주에는 기능 정의를 마무리하고 프로젝트 세팅 후 프로젝트를 시작을 목표로 할까 한다.
구현해야 할 기능과 아직 익숙하지 않은 기술들 탓에 시간이 모자랄지 모른다는 불안감을 안고 시작한다.
구현해야 할 기능들의 우선순위를 잘 생각하며 개발해야 할 듯싶다. 현재 상태에서, 아마 앞으로 팀의 대략적인 마일스톤은 이렇지 않을까?

|       | 목표                                         | 완료도     |
| ----- | -------------------------------------------- | ---------- |
| 1주차 | 기획안&프로토타입 보충, 개발환경 세팅        | ✅✅✅🔲🔲 |
| 2주차 | 기획 보강, 기능 정의, 개발 시작              |            |
| 3주차 | 개발                                         |            |
| 4주차 | 개발                                         |            |
| 5주차 | 1차 배포, 리뷰 및 추가 개발                  |            |
| 6주차 | 배포, QA                                     |            |
| 7주차 | QA 마무리, 프로젝트 회고, 발표 준비&성과발표 |            |

### 개인적으로 공부가 더 필요해보이는 부분

팀에서 진행하는 기획도 더 보충이 필요해 부분이 여전히 보이지만, 기능을 어느 정도 머릿속에서 그리고 라이브러리도 찾다 보니 스스로 생각이 더 필요한듯한 부분도 보인다.

- RDB가 아닌 MongoDB(NoSQL)에서 각각의 컬렉션에서 선택자로 어떤 속성을 사용하고 어떻게 관계를 보아야 할지 아직 감이 덜 잡힌듯하다. 이 부분도 좀 더 자료나 예시를 찾아봐야 할 것 같다.
- next.js 앱에서의 rich text editor
  - 예상되는 툴바 기능 : 단계별 글자 크기 설정(headign1, heading2), 글자 스타일 설정(bold, italic, line-through), 링크, 인용 블록, 코드 블록이나 이미지 추가, 리스트(ordered, unordered)
  - 리액트에서의 예시는 많이 보이는데 next.js 앱에서의 예시는 따라 하는 족족 에러가 발생하거나 화면에 에디터가 보이지 않는다; 에디터 라이브러리 특성상 SSR이 아닌 CSR로 만들어야 하는 듯한데 구현하고자 하는 서비스 특성상 글 에디터가 여기저기서 많이 필요해 보여서 더 공부가 필요할 것 같다. 혹은 markdown 에디터로 대체해야 할지 테스트가 더 필요해 보인다.
  - 사용자가 작성 시 추가한 이미지 저장 → 저장된 이미지 가져와서 화면 렌더링(CDN?)
- React useFormState 훅을 이용한 form validation 결과 화면에 출력하는 방법 더 익히기
  - Form Action을 사용하더라도 개별 입력창들에 onBlur에 유효성 검사 결과 출력을 위한 함수를 연결하기 위해서는 CSR이 필요해 보인다.
  - Form 유효성 검사 with [Zod](https://zod.dev/) 한 번 더 찾아보기
- 프로필 이미지, 썸네일 이미지 등록 시 화면 변화들 더 연구해 보기
  - multipart 데이터를 전송하는 Form Action이 로딩 시 FileReader를 이용하여 진행도에 따라 progress bar를 변화시키는 방법은 react만을 사용했을 때도 이해가 부족하다 느꼈는데 역시 아직도 이해가 덜 된 느낌이다.
- Next.js 14 앱 라우터의 더 많은 활용 (Parallel Routes, Intercapting Routes)

---

본 후기는 본 후기는 [유데미x스나이퍼팩토리] 프로젝트 캠프 : Next.js 1기 과정(B-log) 리뷰로 작성 되었습니다.

#유데미 #udemy #웅진씽크빅 #스나이퍼팩토리 #인사이드아웃 #미래내일일경험 #프로젝트캠프 #부트캠프 #Next.js #프론트엔드개발자양성과정 #개발자교육과정