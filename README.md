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

## Redux Middleware

Dispatch가 action을 전달하고 Reducer에 도달하는 순간 사전에 지정된 작업을 실행할 수 있게하는 중간자 역할을 수행합니다.

즉 Redux Store의 문지기 역할을 이 **Redux Middleware**가 수행한다고 볼 수 있습니다.

`action`인자를 Middleware의 `next`로 넘겨서 Reducer에 도달하는 구조입니다.

![2023-03-09 16;43;43](https://user-images.githubusercontent.com/90133704/223954269-4752b0fe-d7c6-4a5e-a6c5-8f08a3b49a96.PNG)

## Redux Thunk Middleware

**비동기 작업**을 할때 많이 사용하는 방법 중 하나인 미들웨어입니다.
즉 dispatch 함수는 보통 매개변수로 객체를 action으로 state를 raise하는데, 함수로 state를 raise하기 위해서 **redux-thunk**가 필요합니다.

다음 CLI 명령어로 redux-thunk 라이브러리를 설치합니다.

```bash
npm install redux-thunk --save
```

설치 후, `applyMiddleware`에 thunk를 선언합니다.

### Redux Thunk를 적용한 미들웨어에서의 Data Flow

![2023-03-09 18;02;07](https://user-images.githubusercontent.com/90133704/223972537-baddb8ec-749e-4bd1-ba9e-6b70843f74ee.PNG)
