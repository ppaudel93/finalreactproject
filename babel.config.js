const presets = [["@babel/env"], ["@babel/preset-react"]];
const plugins = [
  ["@babel/proposal-class-properties"],
  ["@babel/transform-arrow-functions"],
  ["@babel/syntax-async-generators"],
  ["@babel/proposal-object-rest-spread"],
  [
    "@babel/plugin-transform-runtime",
    {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false
    }
  ]
];

module.exports = { presets, plugins };
