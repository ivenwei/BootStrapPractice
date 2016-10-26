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
//$(function () {
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

    //=========================class7========================

    //$('#box p').css('color', 'red');

    //全局的P都變顏色
    //$('p').css('color', 'blue');

    //將要變顏色的P 限定在範圍內
    //這樣寫JQ會自動將轉譯為成$('#box').find('p') 但慢了5%-10%
    //$('p','#box').css('color', 'blue');

    //jQuery 自動將轉譯為成$('#box').find('p')，比最快的慢了23%
    //$('p', $('#box')).css('color', 'orange');

    //a 有title屬性的就選定他
    //$('a[title]').css('color', 'orange');

    //a 有title屬性且屬性質為number1的就選定他
    //$('a[title=number1]').css('color', 'red');

    //a 有title屬性且開頭屬性質為num的就選定他
    //$('a[title^=num]').css('color', 'red');

    //a 有title屬性且結尾屬性質為num的就選定他
    //$('a[title$=number]').css('color', 'red');

    //有title屬性且開頭屬性質為num後面包含一個- 的就選定他
    //$('a[title|=number]').css('color', 'red');

    //有title屬性且屬性質不等於number1的就選定他
    //$('a[title!=number1]').css('color', 'red');

    //$('a[title~=aaa]').css('color', 'red');

    //$('a[title*=number1]').css('color', 'red');

    //$('a[bbb][title=number1]').css('color', 'red');
//})

//=========================class8========================

$(function () {
    //基本過濾器
    //$('li:first').css('background', '#ccc');
    //$('li:last').css('background', '#ccc');
    //$('#box li:last').css('background', '#ccc');
    //$('ul:first li:last').css('background', '#ccc')
    //$('li:not(.red)').css('background', '#ccc')
    //$('li:even').css('background', '#ccc');
    //$('li:odd').css('background', '#ccc');
    //$('li:eq(3)').css('background', '#ccc');
    //$('li:eq(-2)').css('background', '#ccc');
    //$('li:gt(2)').css('background', '#ccc');
    //$('li:gt(-2)').css('background', '#ccc');
    //$('li:lt(2)').css('background', '#ccc');

    //$(':header').css('background', '#ccc');
    //後面沒有空格只能是當前的元素
    //$('h3:header').css('background', '#ccc');
    //因為header為DIV的後代 因此加入一個空格後再加:header
    //$('div :header').css('background', '#ccc');

    //$('input').get(0).focus();
    //$(':focus').css('background', 'red')

    //$('li').first().css('background', '#ccc');
    //$('li').last().css('background', '#ccc');
    //$('li').not('.red').css('background', '#ccc');
    //$('li').eq(5).css('background', '#ccc');

    //內容過濾器 =>主要是子元素或文本内容上
    //$('div:contains("ycku.com")').css('background', '#ccc');
    //DIV裡面不能有子元素也不能有文字
    //$('div:empty').css('background', '#ccc').css('height','20px');

    //錯誤 需要在父元素上調用
    //$('li:has(.red)').css('background', '#ccc')

    //父元素為UL 檢查裡面是否有class = red 有的話選擇全部UL
    //$('ul:has(.red)').css('background', '#ccc')
    //$('ul').has('.red').css('background', '#ccc')


    //DIV裡面有子元素或有文字的話就選擇
    //$('div:parent').css('background', '#ccc');

    //先看返回多少元素
    //alert($('li').parent().size());
    //alert($('li').parent().get(0))

    //當前元素的父節點
    //$('li').parent().css('background', '#ccc')
    //當前元素的父節點和所有節點
    //$('li').parents().css('background', '#ccc')

    //遇到某個父節點後然後停止
    //$('li').parentsUntil('body').css('background', '#ccc')

    //可見性過濾器
    //display:none、input type="hidden"  和visibility:hidden 的元素都可以操作

    //查看目前div隱藏的元素有幾個
    //alert($('div:hidden').size());
    //div隱藏的元素在1秒內呈現出來
    //$('div:hidden').css('background', '#ccc').show(1000)

    //alert($('div:visible').size());
})