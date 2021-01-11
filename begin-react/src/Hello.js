import React from "react";

//컴포넌트를 만들때 두가지 방법이 있는데 하나는 함수, 하나는 클래스

function Hello({ color, name, isSpecial }) {
  {
    /* 구조분해할당 */
  }
  return (
    <div
      style={{
        color,
      }}
    >
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
      {/* falsy한 값 undefined나 null같은 경우는 안나타나지만
      0은 예외 */}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
