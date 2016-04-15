/// <reference path="../references.d.ts" />

import $ = require("jquery");

class Application {
    public clickList = value => {
        console.log(value);
    };
    public clickNum: number = 0;
    public clickBtn = () => {
        $('#msg').val((this.clickNum++).toString());
        console.log(this.clickNum++)
    };
}

var app = new Application();
export = app;
