/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    camelCase: [
      0,
      {
        properties: 'always'
      }
    ], //强制驼峰法命名 - 关闭
    'eol-last': 0, //文件以单一的换行符结束 - 打开
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ], //必须使用全等  0关 1警告 2或者error错误
    'no-const-assign': 2, //禁止修改const声明的变量 - 开启
    'no-empty': 0, //块语句中的内容不能为空 - 关闭
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格 - 开启
    'no-undef': 2, //不能有未定义的变量 - 打开
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ], //不能有声明后未被使用的变量或参数 0关 1警告 2声明不使用就爆红
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any'
        },
        svg: 'always',
        math: 'always'
      }
    ], //html使用单闭合标签 -打开（配置：在html中never从不开启）
    'space-before-function-paren': [0, 'never'], //函数定义时括号前面要不要有空格：设置为0就是关闭这个规则的检验 1就是如不符合规则就警告 2就是如不符合就报错 --至于保存代码时候 是否会生成空格 这个取决于你设置的代码风格（例如prettier）
    'prefer-const': 0, //首选const -- 关闭（就可以用var let const）
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': [2, 'never']
  }
}
