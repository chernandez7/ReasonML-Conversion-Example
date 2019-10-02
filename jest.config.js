module.exports = {
  preset: "jest-expo",
  verbose: true,
  transformIgnorePatterns: [
    "./node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|@sentry|@glennsl/bs-jest|bs-platform)"
  ]
};
