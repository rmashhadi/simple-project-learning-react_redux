import React, { Component } from "react";
import { connect } from "react-redux";
import { saveText } from "./action";
class Menu1 extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div>
        <input onChange={e => this.setState({ text: e.target.value })} />
        <input
          name="Ragele"
          onChange={e =>
            this.props.dispatch(saveText(e.target.value, this.state.text))
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapDispatchToProps)(Menu1);
// import React, { Component } from "react";

// export default class Menu1 extends Component {
//   state = {
//     show: true,
//     txt: ""
//   };
//   handler = e => {
//     this.setState({ txt: e.target.value });
//   };
//   render() {
//     let txt = "";
//     return (
//       <div>
//         <input value={this.state.txt} onChange={e => this.handler(e)} />
//         <button
//           onClick={() => {
//             txt = this.state.txt;
//           }}
//         >
//           dd
//         </button>
//         <p>{txt}</p>
//       </div>
//     );
//   }
// }
