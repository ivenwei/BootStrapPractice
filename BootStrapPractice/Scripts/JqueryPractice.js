//$(function () {

//    $('#box').css('color', 'red').css('font-size','200px').css('font-weight');
//});

//$(document).ready(function () {
//    alert(1)
//})

//$(document).ready(function () {
//    alert(2)
//})

//$(function () {
//    alert(1)
//})
//$(function () {
//    alert(2)
//})

//$(function () {
    //alert($);			//jQuery对象的内部
    //alert($());			//返回的jQuery对象
    //alert($('#box'));	//返回的也是jQuery对象
    //alert($('#box').css('color', 'red'));		//还是返回的jQuery对象
    //alert(document.getElementById('box'));  //[object HTMLDivElement]，原生DOM对象

    //alert($('#box').get(0));  //取回ID回BOX的第一筆DOM对象

    //alert($(document.getElementById('box')).css('color', 'red'));		//jQuery对象和DOM对象之间的互换
//})

//=========================class4========================

//id選擇器
$(function () {
    //添加一個行為 行為叫做添加樣式
    //$('#box').css('color','blue')  //返回多個
    //$('div').css('color', 'orange')//返回1個對象 只認第一個
    //$('.pox').css('color', 'rosybrown')//返回多個
    //alert($('#box').size());
    //alert($('.pox').size());
    //alert($('div').size());
    //$('div').get(0).css('color', 'rosybrown');
    //$('div').eq(2).css('color', 'green');

    //alert($('div').length); //屬性不需要加上.length()
    //$('#box > p').css('color', 'green')

    //if (document.getElementById('pox')) { //先判断是否存在这个对象
    //    document.getElementById('pox').style.color = 'red';
    //}
    //很多情況下有動態產生DOM的問題  會導致執行到ID不存在的選擇器  頁面越多判斷越多
    //$('#pox').css('color', 'green')
    ////alert($('#pox').size())
    //if ($('#pox').size() > 0) {
    //    $('#pox').css('color', 'green')
    //}
    //if ($('#pox').get(0)) {
    //        ///...
    //}
    //alert($('#box')[0])

    //$('#pox')[0] = $('#pox').get(0)
    //if ($('#pox')[0]) {
    //    //...
    //}
})