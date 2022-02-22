# FE-specification-template

前端开发模版 EsLint + Prettier + Husky + Commitlint + Lint-staged + Cz-customizable + Conventional Changelog

解决冲突
eslint-config-prettier eslint-plugin-prettier

EditorConfig 将负责统一各种编辑器的配置，所有和编辑器相关的配置 (行尾、缩进样式、缩进距离...) 都交给它
Prettier 作为 代码格式化 工具
其余的，也就是 代码质量 方面的语法检查，用 ESLint 来做
"eslintIntegration": true, // 解决 Eslint 默认规则冲突

---

## husky

npm i lint-staged husky -save-dev
https://github.com/typicode/husky#readme

npm set-script prepare "husky install"
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"prepare": "husky install"
},

Add a hook:
npx husky add .husky/pre-commit "npm test"

旧版本 husky 无法在 package 中进行配置 4.2.5
"husky": {
"hooks": {
"commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
"pre-commit": "lint-staged"
}
},

## lint-staged

npm i lint-staged -D
https://github.com/okonet/lint-staged
husky 添加一个钩子 执行 list-staged
npx husky add .husky/pre-commit "npx lint-staged"
pre-commit 执行 npx lint-staged 指令

创建文件夹 或者是在 package 文件中添加 lint-staged 参数
.lintstagedrc
// "\*.{js,vue}": ["prettier --write .", "eslint --cache --fix", "git add"]


## 校验commit
规范commit message信息
https://github.com/conventional-changelog/commitlint
npm i commitlint @commitlint/config-conventional -D

# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

安装辅助提交依赖
commitizen cz-conventional-changelog
https://github.com/commitizen/cz-cli
npm set-script commit "git-cz"
提交commit方式
npx cz
or as an npm script:

  ...
  "scripts": {
    "commit": "cz"
  }

安装指令和命令行的展示信息
  git-cz