import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    //여기서 e가 가리키는 것은 해당 태그에서 이벤트가 발생하였을 때 해당
    //내용을 함수안에서 사용할 수 있는 것
    setText(e.target.value);
    //setText text = e.target.value
  };
  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      {/* value지정을 꼭 해줘야함!! 안하면 setText가 변경을 안함 */}
      <div>
        <b>값: {text} </b>
      </div>
    </div>
  );
}

export default InputSample;
