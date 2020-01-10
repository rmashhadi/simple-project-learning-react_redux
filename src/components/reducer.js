const init = {
  timer: "",
  msgList: [
    {
      msg: "",
      time: "",
      te: ""
    }
  ]
};
const newMsg = [];
export default function Sender(state = init, action) {
  switch (action.type) {
    case "TSaver":
      return {
        ...state,
        msgList: [
          ...state.msgList,
          {
            msg: action.payload,
            te: action.tt,
            time: Date()
          }
        ]
      };
    case "TSender":
      return {
        ...state,
        timer: action.payload
      };
    case "DEL":
      newMsg.push({ msg: action.payload, te: action.te });
      console.log("newMsg", newMsg);
      return {
        ...state,
        msgList: newMsg
      };

    default:
      return state;
  }
}
