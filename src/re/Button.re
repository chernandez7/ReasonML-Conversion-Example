open ReactNative;

let component = ReasonReact.statelessComponent("Button");

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
        "incContainer":
        style(
          ~borderColor= "green",
          (),
        ),
        "decContainer":
        style(
          ~borderColor= "red",
          ()
        ),
      "text":
        style(~fontSize=24., ~fontWeight=`bold, ()),
    })
  );

let make = (~text, ~onPress, _children) => {
  ...component,
  render: _self =>
    <TouchableOpacity
      style={Style.arrayOption([|Some(styles##container),Some((text === "+"->ReasonReact.string) ? styles##incContainer : styles##decContainer)|])} onPress>
      <Text
        style=styles##text
      >text</Text>
    </TouchableOpacity>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~text=jsProps##text, ~onPress=jsProps##onPress, [||])
  );
