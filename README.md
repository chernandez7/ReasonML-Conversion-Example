# Reason Counter Example

Converting a basic React Native app to ReasonML using Bucklescript, Reason React, and Hooks!

Used in tandem with [this talk](https://docs.google.com/presentation/d/1va2zii776X4H5t892FNPCYzys9dSAHCgDeT55H4RZ_o/edit?usp=sharing).

## Setup

- `yarn`
- `yarn watch`
- `yarn start`

## To run the ReasonML version:

```javascript
// import App from "./src/js/App";
// export default App;

export { app as default } from "./src/re/App.bs.js";
```

## To run the Javascript version

```javascript
import App from "./src/js/App";
export default App;

// export { app as default } from "./src/re/App.bs.js";
```

## Example

![Image of app](https://i.imgur.com/vSnRuTL.png)
