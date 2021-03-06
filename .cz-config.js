'use strict';

module.exports = {
  types: [
    {
      value: ':construction: WIP',
      name: 'πͺ  WIP:      Work in progress',
    },
    {
      value: ':sparkles: feat',
      name: 'β¨  feat:     A new feature',
    },
    {
      value: ':bug: fix',
      name: 'π  fix:      A bug fix',
    },
    {
      value: ':hammer: refactor',
      name: 'π¨  refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: ':pencil: docs',
      name: 'π  docs:     Documentation only changes',
    },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: 'π  merge:     Merge a branch code',
    },
    {
      value: ':white_check_mark: test',
      name: 'β  test:     Add missing tests or correcting existing tests',
    },
    {
      value: ':chart_with_upwards_trend: perf',
      name: 'π perf:     A code change that improves performance',
    },
    {
      value: ':thought_balloon: chore',
      name: "π―  chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager",
    },
    {
      value: ':lipstick: ui',
      name: 'π Updating the UI and style files.',
    },
    {
      value: ':art: style',
      name: 'π¨ Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'revert',
      name: 'βͺ  revert:   Revert to a commit',
    },
    {
      value: ':package: dep_up',
      name: 'π¦ Updating compiled files or packages.',
    },
    {
      value: ':wrench: CI',
      name: 'π§  Project structure changeοΌCI, Buiding, Tool...οΌ',
    },
    {
      value: ':truck: mv',
      name: 'π Moving or renaming files.',
    },
    {
      value: ':rocket: release',
      name: 'π Releasing / Version tags.',
    },
  ],

  scopes: [],
  messages: {
    type: 'ιζ©δΈη§δ½ ηζδΊ€η±»ε:',
    scope: 'ιζ©δΈδΈͺscope (ε―ι):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'η­θ―΄ζ:\n',
    body: 'ιΏθ―΄ζοΌδ½Ώη¨"|"ζ’θ‘(ε―ι)οΌ\n',
    breaking: 'ιεΌε?Ήζ§θ―΄ζ (ε―ι):\n',
    footer: 'ε³θε³ι­ηissueοΌδΎε¦οΌ#31, #34(ε―ι):\n',
    confirmCommit: 'η‘?ε?ζδΊ€θ―΄ζ? yes/no',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
