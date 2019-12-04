open ReactNative;

let styles =
  Style.(
    StyleSheet.create({
      "container":
        style(
          ~width=80.->dp,
          ~height=32.->dp,
          ~borderWidth=2.,
          ~borderRadius=4.,
          ~justifyContent=`center,
          ~alignContent=`center,
          ~alignItems=`center,
          ~margin=8.->dp,
          (),
        ),
      "incContainer": style(~borderColor="green", ()),
      "decContainer": style(~borderColor="red", ()),
      "text": style(~fontSize=24., ~fontWeight=`bold, ()),
    })
  );

[@react.component]
let make = (~text="", ~onPress) => {
  let isPlus = text === "+";
  <TouchableOpacity
    style={Style.arrayOption([|
      Some(styles##container),
      Some(isPlus ? styles##incContainer : styles##decContainer),
    |])}
    onPress>
    <Text style=styles##text> text->ReasonReact.string </Text>
  </TouchableOpacity>;
};

let default = make;
