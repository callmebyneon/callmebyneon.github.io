---
date: '2022-11-03 09:45:55'
title: 'React Design Pattern - Compound Component (2)'
category: 'React'
tags: ['react', 'design pattern', 'compound component']
summary: "Let's create Compound Component"
emoji: '🧙‍♂️' 
---

<small><em>last modified: 2022-12-02</em></small>
 

# Intro

처음 합성 컴포넌트를 프로젝트에 적용하려고 할 때 가장 먼저 막막했던 점은 그래서 어떻게 만들어야 같은 실수를 반복하지 않을 수 있는가였습니다. 그래서 먼저 데이터의 변경이 있을 때 요소를 변경해야 할지를 생각하며 합성 컴포넌트 패턴을 눈으로 보고 익혔습니다.

참고한 자료는 앞선 글에서도 적어놓았던 예시들과 관련 블로그 글들(아래)입니다.

- https://itchallenger.tistory.com/753
  - origin: https://jjenzz.com/smarter-dumb-breadcrumb
- https://itchallenger.tistory.com/266
- https://wishket.tistory.com/12 | https://cocobi.tistory.com/120
- https://velog.io/@operqudgns/%EC%8B%A4%ED%99%94-%EA%B0%99%EC%9D%80-%EC%83%81%ED%99%A9%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-Compound-Component
- https://medium.com/unibuddy-technology-blog/compound-components-in-react-b04772f9eb58


# Let's create compound component! 👉

이제 합성 컴포넌트 패턴이 눈에 익었다면 이번에는 Table 컴포넌트를 직접 만들어 보겠습니다.

순서는 [참고 글](https://itchallenger.tistory.com/266)에서 설명하는 구현 단계를 따랐습니다.

## 1. Create context and context provider to share inner state

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

## 2. Create useContext hook and make must be used within the component

```js
function useTable() {
  const context = React.useContext(TableContext)
  if (context === undefined) {
    throw new Error("`useTable` must be used within a `<Table />`. Check the table components out.")
  }
  return context
}
```

## 3. Create APIs of substantial components to provide

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

## 4. Use the compound component

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


# Outro

위 컴포넌트를 실제 프로젝트에 사용하기에는 더 많은 코드가 추가로 필요하겠지만 이 글에서는 이쯤에서 일단 끝내려고 합니다.

처음 글을 시작할 때는 몇 가지 요구사항을 충족하는 Table 컴포넌트를 설명하려고 했지만, 컴포넌트를 계속 수정해 보며 좀 더 공부가 필요하다는 것을 느꼈습니다.

물론 모든 상황에 답이 되는, 예측 불가능한 요구사항들을 모두 수용할 수 있는 god-like 한 답을 만들기란 어려울 것입니다.

하지만 몇 가지 요구사항을 만족하는 컴포넌트를 위해 다른 글에서 이어가도록 하겠습니다.

<p align="center">⏸</p>
