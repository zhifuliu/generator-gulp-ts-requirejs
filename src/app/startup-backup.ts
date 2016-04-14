/// <reference path="../references.d.ts" />

/*var $ = require('jquery');*/
/*import $ = require('jquery');*/



/*import $ = require("jquery");
class App {
    public clickList = value => {
        console.log(value);
    };

    private clickNum: number = 0;
    public clickBtn = () => {
        $('#msg').val((this.clickNum++).toString());
        console.log(this.clickNum++)
    };
}
var app = new App();
export = app;
app.clickBtn();*/
/* 上面这种形式,能够运行,也会修改 dom */



/*import $ = require("jquery");
var clickList = value => {
    console.log(value);
};
var clickNum: number = 0;
var clickBtn = () => {
    $('#msg').val((clickNum++).toString());
    //console.log(clickNum++)
};
//clickBtn();*/
/* 上面这段代码一直运行不了,触发事件的时候,报错: 未定义函数,为什么? 看看 ts 编译后的 js 文件,编译成的时一个模板 define, 看 requirejs
文档,程序入口不是模板,模板是给别的程序代码引用的, 程序入口不应该是一个模板
require 只定义了两个函数: requirejs() 和 define() 一个用来定义模板,一个是真正的程序入口, 可以做一个实验,我不写ts,直接写js 用 requirejs
函数来写事件处理函数,这样index.html 可以绑定到 startup.js 中得事件处理程序上面 */

import $ = require("jquery");
var clickList = value => {
    console.log(value);
};
var clickNum: number = 0;
var clickBtn = () => {
    $('#msg').val((clickNum++).toString());
    //console.log(clickNum++)
};
//clickBtn();
