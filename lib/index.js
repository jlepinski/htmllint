var Linter = require('./linter'),
    linter = new Linter();

linter.addRule(require('./rules/disable_inline_style'));

module.exports = function (html, opts) {
    return linter.lint(html, opts);
};
module.exports.Linter = Linter;
module.exports.defaultLinter = linter;