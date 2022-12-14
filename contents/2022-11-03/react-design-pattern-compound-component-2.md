---
date: '2022-11-03 09:45:55'
title: 'React Design Pattern - Compound Component (2)'
category: 'React'
tags: ['react', 'design pattern', 'compound component']
summary: "Let's create Compound Component"
emoji: 'π§ββοΈ' 
---

<small><em>last modified: 2022-12-02</em></small>
 

# Intro

μ²μ ν©μ± μ»΄ν¬λνΈλ₯Ό νλ‘μ νΈμ μ μ©νλ €κ³  ν  λ κ°μ₯ λ¨Όμ  λ§λ§νλ μ μ κ·Έλμ μ΄λ»κ² λ§λ€μ΄μΌ κ°μ μ€μλ₯Ό λ°λ³΅νμ§ μμ μ μλκ°μμ΅λλ€. κ·Έλμ λ¨Όμ  λ°μ΄ν°μ λ³κ²½μ΄ μμ λ μμλ₯Ό λ³κ²½ν΄μΌ ν μ§λ₯Ό μκ°νλ©° ν©μ± μ»΄ν¬λνΈ ν¨ν΄μ λμΌλ‘ λ³΄κ³  μ΅νμ΅λλ€.

μ°Έκ³ ν μλ£λ μμ  κΈμμλ μ μ΄λμλ μμλ€κ³Ό κ΄λ ¨ λΈλ‘κ·Έ κΈλ€(μλ)μλλ€.

- https://itchallenger.tistory.com/753
  - origin: https://jjenzz.com/smarter-dumb-breadcrumb
- https://itchallenger.tistory.com/266
- https://wishket.tistory.com/12 | https://cocobi.tistory.com/120
- https://velog.io/@operqudgns/%EC%8B%A4%ED%99%94-%EA%B0%99%EC%9D%80-%EC%83%81%ED%99%A9%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-Compound-Component
- https://medium.com/unibuddy-technology-blog/compound-components-in-react-b04772f9eb58


# Let's create compound component! π

μ΄μ  ν©μ± μ»΄ν¬λνΈ ν¨ν΄μ΄ λμ μ΅μλ€λ©΄ μ΄λ²μλ Table μ»΄ν¬λνΈλ₯Ό μ§μ  λ§λ€μ΄ λ³΄κ² μ΅λλ€.

μμλ [μ°Έκ³  κΈ](https://itchallenger.tistory.com/266)μμ μ€λͺνλ κ΅¬ν λ¨κ³λ₯Ό λ°λμ΅λλ€.

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

μ μ»΄ν¬λνΈλ₯Ό μ€μ  νλ‘μ νΈμ μ¬μ©νκΈ°μλ λ λ§μ μ½λκ° μΆκ°λ‘ νμνκ² μ§λ§ μ΄ κΈμμλ μ΄μ―€μμ μΌλ¨ λλ΄λ €κ³  ν©λλ€.

μ²μ κΈμ μμν  λλ λͺ κ°μ§ μκ΅¬μ¬ν­μ μΆ©μ‘±νλ Table μ»΄ν¬λνΈλ₯Ό μ€λͺνλ €κ³  νμ§λ§, μ»΄ν¬λνΈλ₯Ό κ³μ μμ ν΄ λ³΄λ©° μ’ λ κ³΅λΆκ° νμνλ€λ κ²μ λκΌμ΅λλ€.

λ¬Όλ‘  λͺ¨λ  μν©μ λ΅μ΄ λλ, μμΈ‘ λΆκ°λ₯ν μκ΅¬μ¬ν­λ€μ λͺ¨λ μμ©ν  μ μλ god-like ν λ΅μ λ§λ€κΈ°λ μ΄λ €μΈ κ²μλλ€.

νμ§λ§ λͺ κ°μ§ μκ΅¬μ¬ν­μ λ§μ‘±νλ μ»΄ν¬λνΈλ₯Ό μν΄ λ€λ₯Έ κΈμμ μ΄μ΄κ°λλ‘ νκ² μ΅λλ€.

<p align="center">βΈ</p>
