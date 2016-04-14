/*(function(){
    console.log('startup');
})();*/

requirejs(['jquery'], function ($) {
    console.log('startup.js');
    function clickList(value) {
        console.log(value);
    }
    var clickNum = 0;
    function clickBtn() {
        $('#msg').val((clickNum++).toString());
        //console.log(clickNum++)
    }
    return {
        clickBtn: clickBtn()
    };
});