---
date: '2022-11-01 13:55:52'
title: 'React Design Pattern - Compound Component (1)'
category: 'React'
tags: ['react', 'design pattern']
summary: 'What is Compound Component'
thumbnail: './default.png'
---

## Intro - **Compound Component** instead God-like component

리액트 컴포넌트를 만들다보면 어느 순간 아래와 같은 god-like 컴포넌트들을 만들고 있다는 것을 깨닫게 됩니다.
특히 테이블이나 모달, 입력창처럼 간단해보여서 작성하기 시작한 컴포넌트가 점점 기능과 인터랙션이 몇 백줄짜리 컴포넌트가 됩니다.
```js
<Table
  id="table-id"
  caption="New Data Table"
  columns={columns}
  rowData={rowData}
  onRowClick={handleRowClick}
  rowClassName="table-row"
  cellClassName="table-cell"
  tableStyle={tableStyle}
  checkboxSelection
>
```

위처럼 컴포넌트를 만들어놓고 후에 기능을 추가하거나 레이아웃이 변경된다면 `Table` 컴포넌트를 뒤져서 수정해야할 부분을 찾고 고친다음에야 컴포넌트를 제대로 사용할 수 있을 것입니다.
하지만 테이블을 컴파운드 컴포넌트(Compound component, 합성 컴포넌트)로 만들어 사용한다면 위와 같은 컴포넌트의 문제점 몇가지를 해결할 수 있습니다.


## What is the problem of God-like component

아래 글에서는 이러한 어려움을 크게 세 가지로 정리하고 있습니다.
> https://jjenzz.com/compound-components   
> *번역: https://itchallenger.tistory.com/752

<br />

1. **Config driven for consumers** : (API)사용자를 위한 설정
2. **Maintenance overhead** : 유지 보수 부담
3. **Difficult to paint a mental picture** : 멘탈 모델 파악의 어려움


다시 맨 처음의 `Table` 컴포넌트를 살펴보면, 아마도 아래와 같이 이미 작성되어 있을 것이라 짐작할 수 있습니다.
```js
const Table = (props) => {
  const { 
    id,
    caption,
    columns,
    rowData,
    onRowClick,
    rowClassName,
    cellClassName,
    tableStyle,
    checkboxSelection = false
  } = props;

  // ...

  return (
    <div>
      <caption>{caption}</caption>
      <table>
        <thead>
          <tr>
            {checkboxSelection ? <th><input type="checkbox" onChange={handleToggleAllCheckbox} aria-label="toggle all" /></th> : null}
            {columns.map(cell => <th key={cell.id}>{cell.data}</th>)}
          </tr>
        </thead>
        <tbody>
          {rowData.map(row => (
            <tr key={row.id} onClick={onRowClick}>
              {checkboxSelection ? <td><input type="checkbox" onChange={(e) => handleToggleCheckbox(e)} aria-label="toggle" /></td> : null}
              {row.cells.map(cell => <td key={cell.id}>{cell.data}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

이 `Table` 컴포넌트에 테이블 footer나 pagination을 추가하려면 어떻게 해야할까요? 혹은 각 셀의 값을 계산하여 새로운 열이 추가되어야한다면?

전자는 `caption`이나 `thead`를 조건부로 표시하는 것처럼 어렵지 않을 수 있습니다. 하지만 이 상태에서 후자의 경우에는 고민이 생깁니다.

물론 데이터 자체가 가공되어 컴포넌트의 `rowData`로 전달받을 수도 있겠지만 만약 서비스 사용자가 직접 가공된 값을 추가하고 테이블을 확인하고 싶다면? `Table` 컴포넌트에서 액션에 맞는 데이터 가공을 수행해야할까요? `Table` 컴포넌트에 점점 더 데이터가 개입하고 있습니다. 이렇게되면 이 컴포넌트는 다른 곳에서 다른 형태로 절대 사용하지 못할것입니다.


<br />

이러한 상황을 대비하여 컴파운드 컴포넌트 구조를 사용하여 아래처럼 컴포넌트를 사용할 수도 있습니다.

```js
const TableViewer = () => {
  const data = useGetData();

  // ...

  return (
    <div>
      <ActionBar />
      <TableRoot>
        <TableCaption>New Data Table</TableCaption>
        <TableHead>
          <TableRow>
            <TableCell><input type="checkbox" onChange={handleToggleAllCheckbox} aria-label="toggle all" /></TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id} className="table-row" onClick={handleRowClick}>
              <TableCell className="table-cell"><input type="checkbox" onChange={handleToggleAllCheckbox} aria-label="toggle all" /></TableCell>
              <TableCell className="table-cell">{row.firstName}</TableCell>
              <TableCell className="table-cell">{row.lastName}</TableCell>
              <TableCell className="table-cell">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  )
}
```

언뜻 생각하기엔 컴포넌트를 만들 때 코드를 많이 작성하느냐 혹은 사용할 때 코드를 많이 작성하는냐의 차이처럼 생각될 수도 있습니다. 코드의 양만 보기에는 컴파운드 컴포넌트가 만들고 사용하기에 복잡해 보이기도 합니다.

하지만 첫번째 코드처럼 `Table` 컴포넌트를 만들고 사용한다면, 기능이나 인터랙션만이 아니라 데이터 구조가 변경될때도 마찬가지로 `Table`을 수정할 후 사용해야만 합니다. 반면 컴파운드 컴포넌트로 만들어진 `Table` 컴포넌트는 데이터의 구조에 대해 알 필요가 없게 됩니다. 만들고자 하는 UI 컴포넌트에서 데이터 핸들링을 최소화하고 그래픽 인터페이스만을 담당한다면 불필요한 컴포넌트 수정을 하지 않아도 되며, 해당 컴포넌트를 재사용하기에도 쉬워집니다. 

이러한 점은 한 명의 개발자가 컴포넌트를 만들고 데이터를 사용할때는 크게 느끼지 못하기도 합니다. 하지만 서비스가 커지고 두 명 이상의 개발자가 함께 개발하는 상황에서는 이러한 문제로 소비하게 되는 시간이 늘어날 수록 결국 개발자가 더 중요한 문제에 집중할 수 있는 시간을 빼앗습니다.


<br />

끝으로 다음은 컴파운드 컴포넌트에 대한 예시들입니다.

**Compound Components Ref.**
- https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html
- https://reach.tech/tabs/
- https://www.radix-ui.com/docs/primitives/components/select#anatomy

이외에도, [Ant Design의 Layout 컴포넌트](https://ant.design/components/layout/) 등에서도 컴파운드 컴포넌트 구조를 확인할 수 있습니다.