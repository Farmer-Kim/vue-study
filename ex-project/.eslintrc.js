module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": Process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": Process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        trailingComa: "none",
      },
    ],
  },

  parserOptions: {
    parser: "babel-eslint",
  },
};
