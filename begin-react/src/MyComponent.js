import React from "react";
import PropTypes from "prop-types";
const MyComponent = (props) => {
  return (
    <>
      <div>안녕하세요, 제 이름은 {props.name}</div>
      <div>children 값은 {props.children}</div>
      <div>제가 제일 좋아하는 숫자는 {props.favoriteNumber}</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.PropTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
