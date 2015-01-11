/*
 * grunt-td-background-outlook
 * https://github.com/attiks/grunt-contrib-td-background-outlook
 *
 * Copyright (c) 2015 Peter Droogmans
 * Licensed under the MIT license.
 */

'use strict';

var Soup = require('soup');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('td_background_outlook', 'The best Grunt plugin ever.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Replace <td background=""></td>.
      src = src.replace(/<td ([^>]*?)>([\s\S]*?)<\/td>/g, function(match, p1, p2) {
        var tdInner = '',
            width = '',
            height = '',
            bgcolor = '#ffffff',
            background = '',
            matcher;

        if (/background="/.test(p1)) {
          // Width;
          matcher = (/width="([^"]*)"/g).exec(p1);
          if (matcher) {
            width = 'width:' + matcher[1] + 'px;';
          }

          // Height;
          matcher = (/height="([^"]*)"/g).exec(p1);
          if (matcher) {
            height = 'height:' + matcher[1] + 'px;';
          }

          // Bgcolor;
          matcher = (/bgcolor="([^"]*)"/g).exec(p1);
          if (matcher) {
            bgcolor = matcher[1];
          }

          // Background;
          matcher = (/background="([^"]*)"/g).exec(p1);
          if (matcher) {
            background = matcher[1];
          }

          var top = '<td ' + p1 + '><!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="' + width + height +'"><v:fill type="tile" src="' + background + '" color="' + bgcolor + '" /><v:textbox inset="0,0,0,0"><![endif]--><div>';
          var bottom = '</div><!--[if gte mso 9]></v:textbox></v:rect><![endif]--></td>';
          return top + p2 + bottom;
        }
        return match;
      });

      // Replace white space between </td> and </td>.
      src = src.replace(/<\/td>(\s+)<td/g, '</td><td');

      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
