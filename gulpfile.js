/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

const gulp = require('gulp');
const toolsCommon = require('./gulp-tasks');
// Use this instead in other repos:
// const toolsCommon = require('tools-common/gulp-tasks');

toolsCommon.test({
  // What will get deleted when gulp clean is run
  buildArtifacts: ['lib/', 'typings/'],

  // Dependencies that we assert are actually used, even if they look unused.
  stickyDeps: new Set([/* sticky deps here */]),

  // Typescript sources here
  tsSrcs: gulp.src('src/**/*.ts'),
  // Files to copy to lib/
  dataSrcs: gulp.src(['src/**/*', '!src/**/*.ts']),
});
