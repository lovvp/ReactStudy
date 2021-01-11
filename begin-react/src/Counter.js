import React, { Component } from "react";
/* 난 지금 컴포넌트를 만들거야, props는 외부에서 들어오는 값, state는 이벤트등 외부의 요인으로인해
import React, { useState } from 'react'
const [변하는 값, 함수명 ] = useState(초기값)
함수명(상태로직 ex 변하는값(명시적인 변수 선언 어떤것을 선언해도 상관없음)n => n + 1)
특정 상태가 변해야 할때 변하는 로직을 만들어 주는 것. 

*/
class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
// function Counter() {
//   const [number, setNumber] = useState(0);
//   const decrease = () => {
//     setNumber((prevNum) => prevNum - 1);
//   };
//   const increase = () => {
//     setNumber((prevNum) => prevNum + 1);
//   };
//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={increase}>+1</button>
//       <button onClick={decrease}>-1</button>
//     </>
//   );
// }

// function Counter() {
//   const [number, setNumber] = useState(0);

//   const onIncrease = () => {
//     // setNumber(number + 1);
//     // 함수성능 최적화
//     setNumber(prevNumber => prevNumber + 1);
//   };
//   const onDecrease = () => {
//     // setNumber(number - 1);
//     setNumber(prevNumber => prevNumber + 1);
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;
