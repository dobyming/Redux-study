# Redux

이 레포지토리에서는 리덕스의 기본적인 개념을 익힙니다.

## Redux의 데이터 flow

![2023-03-09 15;21;22](https://user-images.githubusercontent.com/90133704/223937469-993794b5-f3ba-4c0d-9e5d-a59d526dbdd9.PNG)

- Redux Store: 애플리케이션의 전체 상태 트리를 보유합니다.
- Reducer: 업데이트 된 상태를 반환하는 function입니다.
- Dispatch: Dispatch는 reducer 함수에 Action을 raise하게 만듭니다.

Redux Store는 반드시 1개만 존재해야 한다. 하지만 그 내부에 reducer함수는 여러개 생성할 수 있습니다. (combineReducers)

## Redux Provider

Redux Store에 저장된 state를 적재적소에 맞게 컴포넌트가 사용할 수 있도록 access 하게 해줍니다.
따라서 store를 Provider의 `props`로 전달하여 공급합니다.

이떄 Redux의 Provider는 `react-redux`라는 라이브러리의 설치가 요구됩니다. 해당 CLI 명령어로 먼저 설치를 진행합니다.

```bash
npm install react-redux --save
```

`package.json` 파일을 통해 해당 라이브러리가 설치됐는지 확인합니다.
