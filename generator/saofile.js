const licenses = require('spdx-license-ids')

module.exports = {
  prompts() {
    return [
      {
        name: 'projectName',
        message: 'Project name',
        default: 'expresso-api'
      },
      {
        name: 'projectDescription',
        message: 'Project description',
        default: 'A simple express api'
      },
      {
        name: 'authorName',
        message: 'Author name',
        default: this.gitUser.name
      },
      {
        name: 'authorEmail',
        message: 'Author email',
        default: this.gitUser.email
      },
      {
        name: 'apiName',
        message: 'API Name',
        default: 'Expresso API'
      },
      {
        name: 'apiVersion',
        message: 'API Version',
        default: '1.0.0'
      },
      {
        name: 'apiDescription',
        message: 'API Description',
        default: 'An automatically documented expresso API'
      },
      {
        name: 'licenseName',
        message: 'Project license (use a valid npm license)',
        default: 'GPL-3.0-only',
        type: 'list',
        choices: licenses
      },
      {
        name: 'licenseUrl',
        message: 'URL pointing to license text',
        default: (answers) =>
          `https://spdx.org/licenses/${answers.licenseName}.html`
      },
      {
        name: 'npmInstall',
        message: 'Install packages with npm?',
        type: 'confirm'
      },
      {
        name: 'gitInit',
        message: 'Initialize a git repository in the directory?',
        type: 'confirm'
      }
    ]
  },
  async actions() {
    return [
      {
        type: 'add',
        files: '**',
        transformInclude: '**'
      },
      {
        type: 'move',
        patterns: {
          'eslintrc.js': '.eslintrc.js',
          editorconfig: '.editorconfig',
          gitignore: '.gitignore',
          prettierrc: '.prettierrc'
        }
      }
    ]
  },
  async completed() {
    if (this.answers.gitInit) this.gitInit()
    if (this.answers.npmInstall) await this.npmInstall()
    this.showProjectTips()
  }
}
