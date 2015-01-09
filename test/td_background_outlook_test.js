'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.td_background_outlook = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
    test.expect(1);

    var actual, expected;
    test.expect(1);
    actual = grunt.file.read('tmp/sample.html');
    expected = grunt.file.read('test/expected/sample.html');
    test.equal(actual, expected);

    test.done();
  },
  custom_options: function (test) {
    test.expect(1);

    var actual, expected;
    test.expect(1);
    actual = grunt.file.read('tmp/sample.html');
    expected = grunt.file.read('test/expected/sample.html');
    test.equal(actual, expected);

    test.done();
  }
};
