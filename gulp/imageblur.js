'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import jimp from 'gulp-jimp';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

  gulp.task('imageblur', function () {
  return gulp.src(path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg}'))
    .pipe(jimp({
      '-thumb': {
            blur: 20,
            quality: 40
        }
    })).pipe(gulp.dest(dest));
});
}
