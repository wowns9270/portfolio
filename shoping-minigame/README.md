### shopping minigame //dream coding//

> html , css , javascript

[https://wowns9270.github.io/portfolio/shoping-minigame/]

> 쇼핑몰에 셔츠 , 바지 , 치마의 종류가 있고 색상은 파랑, 노랑, 핑크의 색이 있을 때 요구사항에 맞게 리스트를 뽑아주는 프로젝트입니다.

> 이미지와 json 파일은 가져와서 사용했습니다.

```
1. html을 구성했습니다. 저는 header에는 logo , nav에는 버튼들 , section에 각 리스트가 올 수 있도록 구성했습니다.

2. css 스타일링을 통해 정적으로 화면이 어떻게 나오는지 확인했습니다.

3. 먼저 fetch를 이용하여 data파일을 shop이라는 배열에 저장했습니다. 이 배열은 전체 데이터를 가지고 있어서 변경을 하지 않습니다.

4. shop 배열에서 arr 내장 메소드 .filter를 이용하여 특정 조건의 배열을 새로 만들었고 그배열을 makelist함수로 넘겨주었습니다.

5. makelist함수는 특정 배열이 인자로 넘어왔을 때 기존의 section을 구성하는 itmes를 모두 삭제하고 인자로 넘어온 값들로 다시 구성했습니다.

6. 6개의 버튼을 클릭했을 때 동작하도록 완성했습니다.
```

#### 어려웠던점

> css 를 구성하는 것이 어렵다. 근거를 가지고 구성을 하기보다 일단 해서 끼어 맞추는 느낌이 너무 강하다.

> axios를 주로 사용해서 fetch를 사용했는데 내장모듈이라는 장점은 있는 것 같다.

===

### 엘리의 강의를 보고 느낀점

> html 마크업할 때 javascript로 동적으로 아이템들을 만들어도 미리 정적인 아이템을 넣어서 확인한다.

> 변수 명이나 alt와 같은 속성도 꼼꼼히 체크한다. (나는 변수명을 많이 고민하지 않는 문제)

> css 색상도 변수로 설정해서 중복이나 오류가 없도록 한다.
> ![image](https://user-images.githubusercontent.com/46587806/107137394-656e6a80-694f-11eb-898c-12d922e6b9c8.png)

> 마우스에 커서가 올라갔을 때 포인터로 변하고 300ms 동안 크기가 1.1배로 변하도록하는 효과
> ![image](https://user-images.githubusercontent.com/46587806/107137759-0d396780-6953-11eb-9a2e-98649cfad83b.png)

> button에 백그라운드를 투명으로 바꾸는 법
> background-color : transparent

> fetch 대신 async await을 사용해서 비교를 해보았는데 then으로 넘어가는 것 보다 훨씬 간단했고 이해하기도 편했다.

> 나는 creatE~로 class도 추가하고 했는데 innerHTML로 문자열을 한번에 받아서 구성하는 법이 더 좋았고, .map으로 새로운 배열을 구성하고 .json('')로 붙여주어야 하는 것도 알았다.

> 그리고 filter 된 함수를 display 함수로 넘겨주는 과정도 리펙토링 했는데 훨씬 보기 좋았다.

- 이벤트위임으로 깔끔한 코드 작성

1. 6개의 버튼의 상위 노드를 이벤트에 등록하고 각 요소에 접근하기 위해 html에서
   data-[] , data-[] 을 각각 설정했다.

2. 상위 노드에서 이벤트 발생시에 event.target으로 접근하면 각 요소의 html정보가 나오는데 우리가 data-[] 로 만든 정보를 불러오기 위해서는 event.target.dataset.[]라고 하면 HTML에 등록된 정보를 얻을 수 있다.

3. 정보를 이용하여 추출된 집합이 필요해서 filter를 이용했고, display함수로 다시 만들어준다.

> 이벤트 위임으로 인해 가독성과 여러 이벤트를 등록하지 않아도 되는 이점이 있는데 특정한 상황에서만 사용이 가능한건지 알아보아야 겠다. 일단 html에서 data-[]를 통해 작업을 하는 것이 좋은 방법이 아닌 것 같아서 알아보고 업데이트 하겠습니다.

> 이벤트 위임을 사용하는 것은 아주 좋은 방법인 것 같습니다.

> logo.addEventListener('click', displayItems(items))
> 이부분이 왜 실행이 안될까 생각을 하고 찾아보니 콜백함수를 등록을 해야하는 부분인데 나는 함수를 실행시켜 제대로 등록이 안되었다. 익명함수를 이용한

function (){ displayItems(items); } 또는
() => displayItems(items); 를 사용해서 등록해 주어야 한다.

## 'click' , gogo) 라고 하고 function gogo() { ~~~ }; 가 되는 이유는 click의 콜백함수로 gogo를 등록한 것이기 때문에 가능한 것이고 매개변수를 이용하거나 하면 익명함수 , 화살표 함수를 사용해야한다.

![image](https://user-images.githubusercontent.com/46587806/107333649-19f7c000-6af9-11eb-9740-ff39891cc5cf.png)

> 문득 두 표현의 차이에서 this가 궁금해서 살펴보니 예상과 다른 결과가 나왔다. 화살표 함수에서 this는 window(전역) , 익명함수에서 this는 logo엘리멘트가 나왔다.

> 일반함수는 호출한 방법에 따라 this 가 동적으로 결정된다. 라고 일단 알고 있겠다.

> 화살표함수는 호출할 때가 아닌 상위 스코프의 this를 따른다. 여기서 상위 스코프는 setEventListen 함수이고 이함수를 호출한 것은 전역객체다?

### innerHtml 로 새로 만드는 것이 아닌 item display를 이용하여 성능 업그레이드 해보기
