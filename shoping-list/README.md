







### document.querySelectorAll 에서  .map 이 안되는 이유 

map과 filter 와 같은 것은 함수가 아니라 메서드이다. 
array가 아니면 사용할 수 없다. array가 아닌데 array같이 여겨지는 객체 중 하나가 document.querySelectorAll이다.
![image](https://user-images.githubusercontent.com/46587806/106703684-13b3a080-662e-11eb-984f-4d268a5c5ee0.png)

이렇게 보면 array라고 생각하지만, 이 객체는 array가 아니라 .map을 지원하지 않는다.

그럼 우리가 아는 배열을 보면
![image](https://user-images.githubusercontent.com/46587806/106703727-304fd880-662e-11eb-90a0-f212987e41af.png)

위에 $('*') 과 밑의 배열의 차이는 _proto_ 생성자가 nodelist, array로 차이가 있다. 

정확하게 말하자면 $() 로 생성된 배열같은 객체의 클래스는 .map을 지원하지 않기 때문에 사용할 수 없다.