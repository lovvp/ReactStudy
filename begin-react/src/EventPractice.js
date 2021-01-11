import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //핵심 문장
    });
  };
  handleClick = () => {
    this.setState({
      message: "",
      username: "",
    });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="이름을 입력하세요"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="메시지를 입력해보세요"
          value={this.state.message} //! 주의
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>입력</button>
      </div>
    );
  }
}

export default EventPractice;
