/**
 * Created by cag on 2016/11/5.
 */
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
// ?????
gulp.task("browser-sync", function () {
    browserSync.init({
        files: "./src/html/*.html,./src/css/*.css,./src/js/*.js,./src/*.*", // ?????
        server: {
            baseDir: "./src" // ?????????index.html,??????????????????
        },
        // 在所有浏览器上同步点击、滚动
        ghostMode: {clicks: true, scroll: true},
        logPrefix: "learning browser-sync in gulp",
        // browser: ["chrome", "firefox", "iexplore"], // 打开3个浏览器
        browser: ["chrome"],
        port: 3000
    })
});

gulp.task("default", ["browser-sync"]);
