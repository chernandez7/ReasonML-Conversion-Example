open ReactNative;

let styles =
  Style.(
    StyleSheet.create({
      "container":
        style(
          ~flex=1.,
          ~backgroundColor="#FFF",
          ~justifyContent=`center,
          ~alignContent=`center,
          ~alignItems=`center,
          (),
        ),
      "count": style(~fontSize=24., ~fontWeight=`bold, ~margin=8.->dp, ()),
      "buttonsContainer":
        style(
          ~flexDirection=`row,
          ~justifyContent=`spaceBetween,
          ~alignContent=`center,
          ~alignItems=`center,
          (),
        ),
    })
  );

[@react.component]
let app = () => {
  let (count, setCount) = React.useState(() => 0);
  <View
    style={
      styles##container;
    }>
    <Text style=styles##count>
      {ReasonReact.string(string_of_int(count))}
    </Text>
    <View style={styles##buttonsContainer}>
      <MyButton text="-" onPress={_ => setCount(_ => count - 1)} />
      <MyButton text="+" onPress={_ => setCount(_ => count + 1)} />
    </View>
    <Text style=styles##count>
      {ReasonReact.string("Currently running ReasonML.")}
    </Text>
  </View>;
};
