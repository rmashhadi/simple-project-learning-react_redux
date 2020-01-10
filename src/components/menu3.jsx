import React, { Component } from "react";
import { connect } from "react-redux";
import { sendText } from "./action";
class Menu3 extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div>
        <input
          name="Ragele"
          onChange={e => this.props.dispatch(sendText(e.target.value))}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapDispatchToProps)(Menu3);
