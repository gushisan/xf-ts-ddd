module.exports = {
  root: true,
  globals: {
    AMap: true,
    localStorage: true,
    window: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    // "@vue/standard",
    "@vue/typescript",
  ],
  rules: {
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "ignore",
        named: "ignore",
        asyncArrow: "always",
      },
    ],
    "vue/singleline-html-element-content-newline": 0,
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ], // 每行最大属性
    "vue/require-prop-types": "warn",
    "vue/require-default-prop": "warn",
    "vue/no-template-shadow": "warn", // 禁止在外部范围中声明的阴影变量中声明变量
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    //在computed properties中禁用异步actions
    "vue/no-async-in-computed-properties": "error",
    //不允许重复的keys
    "vue/no-dupe-keys": "error",
    //不允许重复的attributes
    "vue/no-duplicate-attributes": "warn",
    //在 <template> 标签下不允许解析错误
    "vue/no-parsing-error": [
      "error",
      {
        "x-invalid-end-tag": false,
      },
    ],
    //不允许覆盖保留关键字
    "vue/no-reserved-keys": "error",
    //强制data必须是一个带返回值的函数
    // 'vue/no-shared-component-data': 'error',
    //不允许在computed properties中出现副作用。
    "vue/no-side-effects-in-computed-properties": "error",
    //<template>不允许key属性
    "vue/no-template-key": "warn",
    //在 <textarea> 中不允许mustaches
    "vue/no-textarea-mustache": "error",
    //不允许在v-for或者范围内的属性出现未使用的变量定义
    "vue/no-unused-vars": "warn",
    //<component>标签需要v-bind:is属性
    "vue/require-component-is": "error",
    // render 函数必须有一个返回值
    "vue/require-render-return": "error",
    //保证 v-bind:key 和 v-for 指令成对出现
    "vue/require-v-for-key": "error",
    // 检查默认的prop值是否有效
    "vue/require-valid-default-prop": "error",
    // 保证computed属性中有return语句
    "vue/return-in-computed-property": "error",
    // 强制校验 template 根节点
    "vue/valid-template-root": "error",
    // 强制校验 v-bind 指令
    "vue/valid-v-bind": "error",
    // 强制校验 v-cloak 指令
    "vue/valid-v-cloak": "error",
    // 强制校验 v-else-if 指令
    "vue/valid-v-else-if": "error",
    // 强制校验 v-else 指令
    "vue/valid-v-else": "error",
    // 强制校验 v-for 指令
    "vue/valid-v-for": "error",
    // 强制校验 v-html 指令
    "vue/valid-v-html": "error",
    // 强制校验 v-if 指令
    "vue/valid-v-if": "error",
    // 强制校验 v-model 指令
    "vue/valid-v-model": "error",
    // 强制校验 v-on 指令
    "vue/valid-v-on": "error",
    // 强制校验 v-once 指令
    "vue/valid-v-once": "error",
    // 强制校验 v-pre 指令
    "vue/valid-v-pre": "error",
    // 强制校验 v-show 指令
    "vue/valid-v-show": "error",
    // 强制校验 v-text 指令
    "vue/valid-v-text": "error",
    "no-extra-semi": 0,
    "vue/comment-directive": 0,
    "no-tabs": 0,
    "vue/html-self-closing": 0,
    "vue/object-curly-spacing": [
      "error",
      "always",
      { objectsInObjects: false },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
