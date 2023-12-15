## 📝 프로젝트 소개

- 수입, 지출 내역을 보여주는 가계부
- 사용한 외부 라이브러리 :
  - 차트 : reChart
  - UI : chakra UI
- 개발기간 : 2023.12.14 ~ 2023.12.15
  <br/>
  <br/>

## 🔍 실행 방법

1. 설치  
   `npm install`
2. json-server 실행  
   `npm run server-start`
3. 프로젝트 실행  
   `npm run dev`

## 🙋‍♂️ 팀원 소개

| [우지음](https://github.com/oozeume)                      | [신승민](https://github.com/cnythnk100)                      | [김유은](https://github.com/YueunKim)                      |
| --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| <img src="https://github.com/oozeume.png" width="200px"/> | <img src="https://github.com/cnythnk100.png" width="200px"/> | <img src="https://github.com/YueunKim.png" width="200px"/> |

<br/>
<br/>

## 🛠 기술 스택

<img alt=""  src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/vite-646CFF.svg?&style=for-the-badge&logo=vite&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/eslint-4B32C3.svg?&style=for-the-badge&logo=eslint&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/prettier-DF0067.svg?&style=for-the-badge&logo=prettier&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/react router-CA4245.svg?&style=for-the-badge&logo=react router&logoColor=white"/>

<br/>
<br/>

## 🤝 협업 방식

- Feature branch 생성 및 merge

<br/>
<br/>

## ⚙ 기능 시연

<br/>
<br/>

## 📲 도메인 용어 정의

- income : 수입
- charge : 지출

<br/>
<br/>

## ✔ 핵심 기능

<br/>
<br/>

## 🎯 트러블 슈팅

### 1. Link vs useNavigator

- 문제 상황 : chakra에서 제공하는 Link태그로 페이지 이동을 했을 때 업데이트된 데이터가 보이지 않음
- 원인 : chakra의 Link 태그는 주로 디자인 및 스타일링을 위한 것으로, 웹 페이지 내에서의 라우팅 기능은 제공하지 않음. 일반적인 HTML <a> 태그와 동일하게 작동하며, 클릭하면 새로운 페이지로 완전히 이동하거나 새 탭을 열기 때문에 페이지를 이동하면 상태가 초기화됨 <br>
  반면에, react-router-dom에서 제공하는 useNavigator는 브라우저의 API를 이용하여 페이지를 이동하면서 상태를 유지함
  클릭하면 페이지의 URL만 변경하고, 페이지 전체를 새로고침하지 않음
- 해결 : react-router-dom에서 제공하는 useNavigator로 페이지 이동

<br>

### 2. Maximum call stack size exceeded

- 문제 상황 : Fetch 함수명을 변경한 후, Maximum call stack size exceeded 에러 발생
  ![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-accountBook/assets/65431814/fa6a1dd9-d883-4ca2-9cc7-ac52d3d17692)
- 원인 : 함수명을 fetchSave에서 fetch로 바꾸면서 발생한 재귀호출
- 해결 : 함수명을 fetch가 아닌 fetchAPI로 변경

<br>

### 3. 데이터 모두 삭제

- 문제 상황 : 데이터 개별 삭제는 되지만 선택된 여러 개의 데이터가 한 번에 삭제되지 않음
- 원인 : fetchAPI 함수가 하나의 데이터만 받을 수 있음
- 해결 : 삭제 함수에서 체크된 항목과 체크되지 않은 항목을 분리한 다음, 체크된 항목의 ID별로 각각 fetchAPI 함수를 호출 <br>
  이 때, 모든 요청이 성공적으로 처리되었는지 확인하기 위해 Promise.all을 사용 <br>
  (Promise.all은 모든 fetchAPI 호출이 완료되면 then 메소드를 호출)

```javascript
const handleDeleteChecked = () => {
  const checkedData = data.filter((item, index) => checkedItems[index]);
  const uncheckedData = data.filter((item, index) => !checkedItems[index]);

  Promise.all(checkedData.map((item) => fetchAPI(item.id)))
    .then(() => {
      setData(uncheckedData);
      setCheckedItems(uncheckedData.map(() => false));
    })
    .catch((e) => console.log(e));
};
```

<br/>
<br/>

## 😀 느낀 점

- 신승민 :

- 우지음 : UI를 빠르고 편하게 구현하기 위해 shadcn UI로 선택하고 설정을 했는데, 타입스크립트 호환 컴포넌트가 많아서 자바스크립트로만 원하는 UI를 그리는데 문제가 있었습니다. 개발 상황을 고려하고 테스트를 해본뒤 시행착오를 줄여야겠다는 생각을 했습니다.

- 김유은 :
