---
date: '2022-11-18 15:25:24'
title: 'Argument and Parameter'
category: 'Basic'
tags: ['basic', 'word']
summary: "The difference of argument and parameter"
emoji: '0️⃣'
---

**Argument(인자)**와 **Parameter(매개변수)**는 영문 문서를 읽거나 한글로 번역된 문서들을 읽다가도 간혹 헷갈리는 단어들입니다.

Argument는 '전달받은 인자'라는 뜻으로 번역되고 있으며, 말 그대로 함수나 메서드 호출 시 전달되거나 입력하는 **실제 값(value)**입니다.

Parameter는 '매개변수'라고 번역되는데, 함수나 메서드 정의에서 사용되는 **변수 명(variable)**입니다.

예를 들자면, 아래 함수는 `a, b`라는 이름의 두 개의 parameter(매개변수)를 더한 값을 반환하고 있습니다. 아래 함수를 사용할 때는 숫자 두 개를 argument로 받기 때문에 2와 3이 argument로 사용되어 `add(2, 3)`과 같이 사용하고 있습니다. 
```ts

function add (a, b) {
  return a + b
}

add(2, 3)

```


# ref.
참고한 다음 글에서 두 단어를 비교하여 만든 표가 있으니 함께 참고하면 좋을 것 같습니다.
- http://taewan.kim/tip/argument_parameter/