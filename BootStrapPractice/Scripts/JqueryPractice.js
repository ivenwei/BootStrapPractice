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
    //=========================class5========================

    //群組選擇器
    //$('div, p, strong').css('color','red')
    //$('#box, .pox, strong').css('color', 'red')

    //後代選擇器
    //$('ul li a').css('color', 'green')


    //通配選擇器
    //$('*').css('color', 'green');
    //alert($('*').size())
    //alert($('*')[0].nodeName)
    //在全局範圍使用*會消耗極大資源 不建議在全局使用


    //$('ul li a, ul li em, ul li strong').css('color', 'green');
    //$('ul li, ul li a').css('color', 'green');
    //$('ul li *').css('color', 'blue');
    //$('ul li *').css('color', 'blue');
    //$('#practiceUL li *').css('color', 'blue');
    //alert($('#practiceUL li *').size())  //通配選擇器一般運用在局部的環境內

    //$('div.box').css('color', 'red');
    //$('.box.pox').css('color', 'red');

    //$('div#box p ul li a #link');//不建議這樣使用 因為選擇器越複雜 解析速度就越慢
    //$('#link') //只有ID不需要解析就可以獲取到

    //=========================class6========================

    //後代選擇器的另一個方法 使用FIND
    //$('#box p').css('color', 'red');
    //$('#box').find('p').css('color', 'red');

    //子選擇器
    //$('#box>p').css('color', 'red')
    //children('#p') children('.p')都可
    //$('#box').children('p').css('color', 'blue')

    //next選擇器 => 指定(id=box)的下一個節點為P才有作用
    //next方法
    //$('#box + p').css('color', 'blue')
    //$('#box').next('p').css('color', 'maroon')

    //nextAll選擇器 => 指定(id=box)的同等級往下的節點都會有作用
    //$('#box ~ p').css('color', 'blue');
    //nextAll方法
    //$('#box').nextAll('p').css('color', 'orange');

    //.next() = .next('*') 不管下一個節點內容為甚麼都會被選擇
    //若'*'在某個環境有所浪費的話 建議不使用
    //$('#box').next().css('color', 'orange')
    //$('#box').next('*').css('color', 'orange')

    //prev  同等級的上一個節點
    //$('#box').prev('p').css('color', 'red');
    //$('#box').prevAll('p').css('color', 'red');
    //上面和下面都變顏色
    //$('#box').prevAll('p').css('color', 'orange');
    //$('#box').nextAll('p').css('color', 'orange');
    //$('#box').prevAll('p').nextAll('p').css('color', 'orange')//錯誤的形式 不可這樣使用

    //siblings 上下同級所有的被選定
    //$('#box').siblings('p').css('color', 'blue');

    //nextUntil 方法
    //從指定節點往下掃 遇到指定的節點就停止  下面案例為從id=box節點往下掃 遇到節點為p的時候就停止
    //$('#box').nextUntil('p').css('color', 'red');

    //prevUntil 方法
    //從指定節點往上掃 遇到指定的節點就停止  下面案例為從id=box節點往上掃 遇到節點為p的時候就停止
    //$('#box').prevUntil('p').css('color', 'blue');


})