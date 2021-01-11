import React, { useReducer } from "react";
function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch(action.type){
    case 'INCREMENT':
      return {value: state.value + 1}
    case 'DECREMENT':
      return {value: state.value -1}
    default:
      //아무 것도 해당되지 않을 때 기존 상태 반환
      return state; 
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});
  
}
