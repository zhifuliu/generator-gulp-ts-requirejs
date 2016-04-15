/* https://github.com/requirejs/requirejs/wiki/Patterns-for-separating-config-from-the-main-module 讲了以引入 js 文件来配置 requireJs 这种模式 */
var require = {
    baseUrl: '.',
    paths: {
        "bootstrap": "../bower_modules/dist/js/bootstrap.min",
        "jquery":    "../bower_modules/jquery/dist/jquery",
        "requirejs": "../bower_modules/requirejs/require"
    }
}