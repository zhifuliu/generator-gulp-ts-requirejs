/// <reference path="../references.d.ts" />

import $ = require("jquery");

class Application {
    constructor() {

    }
    public clickNum: number = 0;
    public clickAddOne = () => {
        $('#msg').val((this.clickNum++).toString());
        console.log(this.clickNum)
    }
    public clickMenu = menuName => {
        console.log(menuName);
    }
}

var app = new Application();
export = app;
