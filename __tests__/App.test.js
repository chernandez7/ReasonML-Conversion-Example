import React from "react";
import { render } from "react-native-testing-library";

import JSApp from "../src/js/App";
// import ReasonApp from "../src/re/App.bs";

describe("<App /> (JS)", () => {
  it("renders without exploding", () => {
    const { getByTestId } = render(<JSApp />);

    expect(getByTestId("JSApp")).toHaveLength(1);
  });
});

/* Need bs-jest for this
describe("<App /> (ReasonML)", () => {
  it("renders without exploding", () => {
    const { getByTestId } = render(<ReasonApp />);

    expect(getByTestId("ReasonApp")).toHaveLength(1);
  });
}); */
