---
date: '2022-11-03 09:45:55'
title: 'React Design Pattern - Compound Component (2)'
category: 'React'
tags: ['react', 'design pattern']
summary: "🚧 Let's create Compound Component"
thumbnail: './default.png'
---

## Intro

처음 합성 컴포넌트를 프로젝트에 적용하려고 할 때 가장 먼저 막막했던 점은 그래서 어떻게 만들어야 같은 실수를 반복하지 않을 수 있는가 였습니다. 그래서 먼저 데이터의 변경이 있을 때 요소를 변경해야 할지를 생각하며 합성 컴포넌트 패턴을 눈으로 보고 익혔습니다.

참고한 자료는 앞선 글에서도 적어놓았던 예시들과 관련 블로그 글들(아래)입니다.

- https://itchallenger.tistory.com/753
  - origin: https://jjenzz.com/smarter-dumb-breadcrumb
- https://itchallenger.tistory.com/266
- https://wishket.tistory.com/12 | https://cocobi.tistory.com/120
- https://velog.io/@operqudgns/%EC%8B%A4%ED%99%94-%EA%B0%99%EC%9D%80-%EC%83%81%ED%99%A9%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-Compound-Component
- https://medium.com/unibuddy-technology-blog/compound-components-in-react-b04772f9eb58


## Let's create compound component! 👉

이제 합성 컴포넌트 패턴이 눈에 익었다면 이번에는 Table 컴포넌트를 직접 만들어 보겠습니다.

순서는 [참고 글](https://itchallenger.tistory.com/266)에서 설명하는 구현 단계를 따랐습니다.

### 1. Create context and context provider to share inner state

```js
const TableContext = React.createContext()

function TableRoot(props) {
  const [status, setStatus] = useState(props?.status || null)
  const value = [status, setStatus]
  
  return (
    <TableContext.Provider value={value}>
      <table {...props} />
    </TableContext.Provider>
  )
}
```

### 2. Create useContext hook and make must be used within the component

```js
function useTable() {
  const context = React.useContext(TableContext)
  if (context === undefined) {
    throw new Error("`useTable` must be used within a `<Table />`. Check the table components out.")
  }
  return context
}
```

### 3. Create APIs of substantial components to provide

```js
import styled from '@emotion.styled'

// ...

const TableHead = (props) => <Thead {...props} />
const TableBody = (props) => <Tbody {...props} />
const TableRow = (props) => <Tr {...props} />
const TableHeading = (props) => <Th {...props} />
const TableData = (props) => <Td {...props} />

const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Heading: TableHeading,
  Data: TableData
})

export { Table, useTable }
```

### 4. Use the compound component

```js
function TableViewer() {
  const data = getData();

  const table = getTableData({
    data: data,
    columns: columns
  })

  return (
    <div className="table-viewer">
      {data?.pending
        ? <Loader />
        : <DataTable value={table} />
      }
    </div>
  )
}

function DataTable({ value }) {
  return (
    <Table>
      <Table.Head>
        {value.getHeaderGroups().map(headerGroup => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.map(header => (
              <Table.Heading key={header.id}>
                {header.text}
              </Table.Heading>
            ))}
          </Table.Row>
        ))}
      </Table.Head>
      <Table.Body>
        {value.getRowModel().rows.map(row => (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map(cell => (
              <Table.Data key={cell.id}>
                {cell.data}
              </Table.Data>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
```



## REALLY? Let's try again

이걸로 정말 우리가 합성 컴포넌트를 만들어 낸 것일까요? 어딘가 찜찜한 기분이 드니까 이전 글에서 했던 질문으로 한 번 돌아가 보겠습니다.

_이 `Table` 컴포넌트에 테이블 footer나 pagination을 추가하려면 어떻게 해야할까요?_ 

이 상황을 위한 테이블을 위에서 작성한 컴포넌트로는 부족해보입니다.

<!-- 우선 위 질문에 필요한 사항을 정리하고 presentational/business logic을 한 번 분리해보겠습니다.

1. 사용자가 계산하고자 하는 값을 선택한다. → 계산하고자하는 타겟 위치를 특정하여 가져온다.
2. 사용자가 타겟 값을 이용하여 계산할 수식을 입력하고 저장한다. → 타겟 값을 이용하여 저장된 수식에 대입하여 계산된 값을 추출한다.
3. 계산된 값들을 새로운 열 -->


🚧
