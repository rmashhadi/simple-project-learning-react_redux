export const saveText = (text1, text2) => ({
  type: "TSaver",
  payload: text1,
  tt: text2
});

export const sendText = text3 => ({
  type: "TSender",
  payload: text3
});

export const delText = (text4, text5) => ({
  type: "DEL",
  payload: text4,
  te: text5
});
