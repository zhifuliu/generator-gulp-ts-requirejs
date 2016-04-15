/// <reference path="../references.d.ts" />

import $ = require("jquery");

class Application {
    /*public clickList = value => {
        console.log(value);
    };
    public clickNum: number = 0;
    public clickBtn = () => {
        $('#msg').val((this.clickNum++).toString());
        console.log(this.clickNum++)
    };*/

    // requireJS 的精髓是模块化和分离(页面和处理逻辑),所以,不该是在require 中 声明html的onclick等事件处理程序,而是直接通过dom来绑定,下面做实验
    constructor() {

    }
    public clickNum: number = 0;
    /*
    public clickAddOne() {
        console.log(this);
        $('#msg').val((this.clickNum++).toString());
        console.log(this.clickNum)
    }
    这种写法,导致 this 居然是Element,并不知道为什么,貌似改变了函数运行的作用域
    看看编译后的结果,这种写法编译成的结果是:
     Application.prototype.clickAddOne = function () {
         console.log(this);
         $('#msg').val((this.clickNum++).toString());
         console.log(this.clickNum);
     };

     使用箭头函数,编译结果是这样
     function Application() {
         var _this = this;
         this.clickNum = 0;
        this.clickAddOne = function () {
            console.log(_this);
            $('#msg').val((_this.clickNum++).toString());
            console.log(_this.clickNum);
        };
        };
    }
    */
    public clickAddOne = () => {
        console.log(this);
        $('#msg').val((this.clickNum++).toString());
        console.log(this.clickNum)
    }
    /*public clickMenu(menuName: string) {
        console.log(menuName)
    }*/
    public clickMenu = () => {
        console.log('点击菜单');
    }
}

var app = new Application();

/*$('#clickBtnAddOne').click(app.clickAddOne());
$('#clickListHome').click(app.clickMenu('首页'));
$('#clickListAbout').click(app.clickMenu('关于我们'));
$('#clickListContact').click(app.clickMenu('内容'));*/

$('#clickBtnAddOne').click(app.clickAddOne);
$('#clickListHome').click(app.clickMenu);
$('#clickListAbout').click(app.clickMenu);
$('#clickListContact').click(app.clickMenu);

export = app;
