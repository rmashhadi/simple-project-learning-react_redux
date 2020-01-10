import React, { Component } from "react";
import { connect } from "react-redux";
import { delText } from "./action";

class Menu2 extends Component {
  constructor() {
    super();
    this.state = {
      clicked: "p",
      notdelMsg: []
    };
  }
  handledel() {
    let y = this.props.msgList.filter(x => x.time != this.state.clicked);
    console.log("clicked1", this.state.clicked);

    y.map(x => this.props.dispatch(delText(x.msg, x.te, x.time)));

    console.log("yyy", y);
    this.setState({ clicked: "" });
    console.log("clicked2", this.state.clicked);
  }
  render() {
    return (
      <div>
        {this.state.clicked === "" &&
          this.props.msgList.map(message => (
            <p onClick={() => this.setState({ clicked: message.time })}>
              {message.msg} and {message.te}
            </p>
          ))}
        {this.state.clicked !== "" && this.handledel()}
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

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu2);
