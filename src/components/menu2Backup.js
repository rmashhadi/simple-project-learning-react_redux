import React, { Component } from "react";
import { connect } from "react-redux";

class Menu2 extends Component {
  render() {
    return (
      <div>
        {this.props.msgList.map(message => (
          <p>
            {message.msg} and {message.te}
          </p>
        ))}
        <h1>{this.props.timer}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    msgList: state.msgList,
    te: state.te,
    timer: state.timer
  };
};

export default connect(mapStateToProps)(Menu2);
