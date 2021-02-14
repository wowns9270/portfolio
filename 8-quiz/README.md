## 8-quiz

https://wowns9270.github.io/portfolio/8-quiz/

- 스택 : html , css , javascript

- 목적 : 문제를 풀고 사용자가 몇개의 문제를 맞추었는지 알려주는 퀴즈게임.

- 디자인 : florinpop17의 깃허브에서 프로젝트를 참고 https://github.com/florinpop17/quiz-app

### html

- 크게 시작 팝업창 , 게임화면 , 종료 팝업창 으로 구성 했습니다.

- 시작 팝업창은 퀴즈를 시작하는 창으로 start 버튼을 클릭하면 퀴즈 화면으로 넘어간다.

- quiz는 보기가 4개로 구성된 사지선다 문제로 각 문제마다 data-key를 설정하여 구별하여 이벤트 위임을 사용할 수 있게 하였다.

- 종료 팝업창은 8문제 중에 맞춘 문제를 사용자에게 알려준다.

### css

- 전체적으로 flex-box를 이용했고 화면이 풀사이즈 일 때만 UI를 구성했다. (모바일이나 작은 화면에서도 불편하지 않도록 업데이트 하겠습니다.)

- 팝업창은 건드리지 않고 클래스 add , remove 를 이용하여 동작하도록 했습니다.

- hover로 cursor가 왔을 때 보기가 커지는 효과와 클릭했을 때 보기 색깔이 변하도록 했습니다.

### javascript // pre.js

- pre.js는 처음 동작을 구현하고 하나의 javascript로 구성했습니다.

- 필요한 dom 요소를 모두 불러오고 quiz에 필요한 data idx, score, current_pick을 변수로 설정했습니다.

- 이벤트와 함수를 설정하고 각 단계마다 제대로 동작하도록 구현했지만, 가독성과 확장성이라는 거창한 말보다 남들이 이해하기 힘든 코드였습니다.

#### 모듈화 과정 // End_popup.js, index.js, Quiz.js, Start_popup.js

- index.js에는 각 모듈이 동작하도록 연결하는 메인 자바스크립트입니다.

- 각 클래스에는 constructor로 생성된 dom요소들고 변수들을 정의했고 클래스의 메서드를 정의 했습니다.

- data를 받아오는 비동기적 처리에서 확실한 이해를 해야한다. 동작한다고 다 똑같은게 아니다. (중요)
