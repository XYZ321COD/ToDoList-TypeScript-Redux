var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("run", gulp.series("sass"));

gulp.task("watch", function () {
  gulp.watch("./sass/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("run", "watch"));
