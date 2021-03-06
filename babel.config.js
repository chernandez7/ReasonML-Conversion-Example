module.exports = {
  presets: ["babel-preset-expo"],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-proposal-class-properties"
      ]
    },
    development: {
      plugins: ["@babel/plugin-proposal-class-properties"]
    }
  }
};
