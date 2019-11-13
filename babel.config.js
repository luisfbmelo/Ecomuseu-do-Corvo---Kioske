module.exports = {
  plugins: [
    ["babel-plugin-root-import", {
      paths : [
        {
          "rootPathSuffix": "src",
          "rootPathPrefix": "#"
        }
      ]      
    }],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["babel-plugin-styled-components"]
  ]
}