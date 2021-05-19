var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("browser-sync", function () {
  browserSync.init({
    watch: true,
    server: "./",
  });
});
gulp.task("watch", gulp.series("browser-sync"), function () {
  gulp.watch("*/*/*.*");
});
