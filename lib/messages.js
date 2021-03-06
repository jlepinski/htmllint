var lodash = require('lodash');

var errors = {
    E000: 'not a valid error code',
    E001: 'the `<%= attribute %>` attribute is banned',
    E002: 'attribute names must match the format: <%= format %>',
    E003: 'duplicate attribute: <%= attribute %>',
    E004: 'attribute values must not include unsafe characters',
    E005: 'the `<%= attribute %>` attribute is not <%= format %>',
    E006: 'attribute values cannot be empty',
    E007: '<!DOCTYPE> should be the first element seen',
    E008: 'the doctype must conform to the HTML5 standard',
    E009: 'use only <%= format %> links',
    E010: 'ids and classes may not use the word: <%= word %>',
    E011: '<%= attribute %> value must match the format: <%= format %>',
    E012: 'the id "<%= id %>" is already in use',
    E013: 'the `alt` property must be set for image tags',
    E014: 'a source must be given for each `img` tag',
    E015: 'line ending does not match format: <%= format %>',
    E016: 'the <%= tag %> tag is banned',
    E017: 'tag names must be lowercase',
    E018: 'void element should <%= expect %> close itself',
    E019: 'all labels should have a `for` attribute',
    E020: 'label does not have a `for` attribute or a labeable child',
    E021: 'an element with the id "<%= id %>" does not exist (should match `for` attribute)',
    E022: 'the linked element is not labeable (id: <%= id %>)',
    E023: '<%= part %> contains <%= desc %>: <%= chars %>',
    E024: '<%= type %> not allowed',
    E025: 'html element should specify the language of the page',
    E026: '<%= op %> (all focusable elements on a page must either have a positive tabindex or none at all)',
    E027: 'the <head> tag must contain a title',
    E028: 'the <head> tag can only contain one title; <%= num %> given',
    E029: 'title "<%= title %>" exceeds maximum length of <%= maxlength %>',
    E030: 'tag start and end must match',
    E031: 'table must have a caption for accessibility',
    E032: 'figure must have a figcaption, figcaption must be in a figure (for accessibility)',
    E033: 'input with id: <%= idValue %> (or if type is text, name: <%= nameValue %>) is not associated with a label for accessibility',
    E034: 'radio input must have an associated name',
    E035: 'table must have a header for accessibility',
    E036: 'indenting spaces must be used in groups of <%= width %>',
    E037: 'attributes for one tag on the one line should be limited to <%= limit %>',
    E038: 'lang attribute <%= lang %> is not valid',
    E039: 'lang attribute <%= lang %> in not properly capitalized',
    E040: 'line length should not exceed <%= maxlength %> characters (current: <%= length %>)',
    E041: 'duplicate class: <%= classes %>',
    E042: 'tag is not closed',
    E043: 'attribute <%= attribute %> should come before <%= previous %>',
    E044: 'only <head> and <body> may be children of <html>',
    E045: 'tags in <html> may not be duplicated',
    E046: '<head> tag must come before <body> in <html>',
    E047: 'the only tags allowed in the <head> are base, link, meta, noscript, script, style, template, and title',
    E048: 'invalid value for option <%= option %>: <%= value %>',
    E049: 'tag attributes are malformed',
    E050: 'invalid configuration',
    E051: 'invalid option or preset name: <%= name %>',
    E052: 'not a preset: <%= preset %>',
    E053: 'invalid value for option <%= rule %>: <%= value %>',
    E054: 'option <%= name %> does not exist',
    E055: 'line contains trailing whitespace',
    E056: 'expected from <%= expectedMin %> to <%= expectedMax %> levels of indentation. <%= value %> levels instead',
    E057: 'tag has missing or empty attributes',
    E058: 'rel="noopener" required for links with target="blank"',
    E059: 'WCAG rule 38: links should have at least 4 chars <%= content %> is of length <%= length %>',
    E060: 'WCAG rule 77: Input elements where type=[button|submit|reset] must have a value or title attribute.',
    E061: 'WCAG rule 78: Each button element must contain content.',
    E062: 'WCAG rule 74: The label element should not encapsulate select and textarea elements.',
    E063: 'WCAG rule 73: Each fieldset element should contain a legend element.'
};

module.exports.errors = {};

lodash.forOwn(errors, function (format, code) {
    module.exports.errors[code] = {
        format: format,
        code: code
    };
});

module.exports.renderMsg = function (code, data) {
    var format = errors[code];

    return lodash.template(format)(data);
};

module.exports.renderIssue = function (issue) {
    return this.renderMsg(issue.code, issue.data);
};
