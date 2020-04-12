module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-unused-prop-types": 1,
    "react/jsx-closing-tag-location": "error",
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/forbid-prop-types": ["error", {
      "forbid": ["any", "array", "object"],
      "checkContextTypes": true,
      "checkChildContextTypes": true
    }],
    "react/jsx-handler-names": ["off", {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "multiline" }],
    "react/jsx-no-bind": ["error", {
      "ignoreRefs": true,
      "allowArrowFunctions": true,
      "allowFunctions": false,
      "allowBind": false,
      "ignoreDOMComponents": true
    }],
    "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],
    "react/jsx-pascal-case": ["error", {
      "allowAllCaps": true,
      "ignore": []
    }],
    "react/no-danger": "warn",
    "react/no-deprecated": ["error"],
    "react/no-direct-mutation-state": "off",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["warn", { "ignoreStateless": true }],
    "react/no-string-refs": "error",
    "react/react-in-jsx-scope": "error",
    "react/sort-comp": [1, {
      "order": [
        "static-methods",
        "instance-variables",
        "lifecycle",
        "/^on.+$/",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering"
      ],
      "groups": {
        "lifecycle": [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "state",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ],
        "rendering": [
          "/^render.+$/",
          "render"
        ]
      }
    }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".tsx", "ts"] }],
    "react/jsx-no-comment-textnodes": "error",
    "react/no-array-index-key": "error",
    "react/require-default-props": ["error", {
      "forbidDefaultForRequired": true
    }],
    "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": false }],
    "react/no-redundant-should-component-update": "error",
    "react/no-unused-state": "error",
    "react/boolean-prop-naming": ["off", {
      "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],
      "rule": "^(is|has|can)[A-Z]([A-Za-z0-9]?)+",
      "message": ""
    }],
    "react/no-typos": "error",
    "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
    "react/no-access-state-in-setstate": "error",
    "react/no-this-in-sfc": "error",
    "jsx-a11y/label-has-for": "off"
  },
};
