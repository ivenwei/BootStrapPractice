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

//$(function () {
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

    //=========================class9========================
    //子元素過濾器

    //先找到LI的父元素UL 再查看所有UL下面的LI的第一個元素 
    //$('li:first-child').css('background', '#ccc');
    //$('li:last-child').css('background', '#ccc');

    //先找到LI的父元素UL 再查看所有UL下面只有一個LI的元素
    //$('li:only-child').css('background', '#ccc');


    //索引值從1開始
    //$('li:nth-child(even)').css('background', '#ccc');
    //$('li:nth-child(odd)').css('background', '#ccc');
    //$('li:nth-child(2)').css('background', '#ccc');

    //2n每隔2倍顯示
    //$('li:nth-child(2n)').css('background', '#ccc');
    //$('li:nth-child(3n)').css('background', '#ccc');

    //倍數的下一個顯示
    //$('li:nth-child(3n+1)').css('background', '#ccc');


    //過濾器和選擇器上常用的方法

    //alert($('.red').is('li'))
    //alert($('.red').is('div'))
    //alert($('.red').is($('li')))
    //alert($('.red').is($('div')))

    //alert($('.red').is($('li').get(2)))
    //alert($('.red').is($('li').eq(2)))

    //$('.red').is(function () {
    //    //$(this) = $('.red')
    //    return $(this);
    //})

    /*
    //注意，必需使用$(this)來表示要判断的元素，否則，不管function裡面是否返回true或false都和調用的元素無關了
    alert($('.red').is(function () {
        //$(this) = $('.red')
        //alert( $(this).get(0));
        return $(this).attr('title') == '列表3';  //true
        //return $(this).attr('title') == '列表4';  //false
    }))
    */
    
    //判斷第2個LI CLASS是否為red
    //alert($('li').eq(2).hasClass('red'))
    //第1個為起始元素(起始值為0) 第2個為到第幾個索引元素(起始值為1)
    //$('li').slice(0, 2).css('background', '#ccc');

    //第1個為起始元素(起始值為0)  第2個參數未指定表示全部選定
    //$('li').slice(2).css('background', '#ccc');

    //起始元素為0 最後2個不選
    //$('li').slice(0,-2).css('background', '#ccc');

    //起始元素為2 最後2個不選
    //$('li').slice(2,-2).css('background', '#ccc');


    //end為返回指定元素的前一個狀態的元素對象  以例子而言為#box
    //$('#box').find('li').end().get(0);
    //alert($('#box').find('li').get(0));
    //alert($('#box').find('li').end().get(0));
    //alert($('#box').find('li').parent().get(0));
    //$('#box').next('ul').css('background', '#ccc');
    //$('#box').next('ul').end().css('background', '#ccc');

    //第一個div的子元素有幾個(只會偵測出子元素不會有內容)
    //alert($('div').first().children().size());
    //第一個div的子元素有幾個(包含TAG和內容)
    //alert($('div').first().contents().size());


    //$('li').filter('.red,:first,:last').css('background', '#ccc');
    //$('li').filter('.red,:first-child,:last-child').css('background', '#ccc');

//    $('li').filter(function () {
//        return $(this).attr('class') == 'red' && $(this).attr('title') == '列表3';
//    }).css('background', '#ccc');

//})


//=============class10================
//$(function () {

    //設定元素和內容
    //HTML content
    //alert($('#box').html());
    //替換HTML內容 有HTML會自動解析
    //$('#box').html('<em>www.google.com</em>')

    //得到內文 自動清理HTML
    //alert($('#box').text());
    //替換內文  有HTML會自動轉譯
    //$('#box').text('<em>www.google.com</em>')

    //alert($('input').val());
    //$('input').val('北風網')

    //alert($('input').val());
    //$('input').val('女')
    //$('input').val(['Boy', 'Girl', '編程'])


    //元素屬性操作

    //取得ID屬性
    //alert($('#box').attr('id'));

    //設定屬性
    //$('div').attr('title', 'ivAN');

    //$('div').attr({
    //    'title': 'i am cool',
    //    'class': 'red',     //class不建議用attr 後面有功能更強大的功能代替
    //    'data' : '123'
    //});

    //$('div').attr('title', function () {
    //    return 'i am cool'
    //});


    //value是原來的屬性直  若沒有值存在可以不使用
    //$('div').attr('title', function (index,value) {
    //    return 'Old title is ' + value + ',New title is i am cool No ' + index;
    //});


    //$('div').html($('div').html()+' <em>www.google.com</em>')

    //$('div').html(function (index,value) {
    //    return value + '<em>www.google.com</em>';
    //});

    //$('div').removeAttr('title');
//});

//=============class11================
//$(function () {

    //沒有任CSS情況下 rgb(0,0,0)
    //alert($('div').css('color'));

    //$('div').css('color','red')

    //顯示出來的東西有設置屬性會比瀏覽器默認屬性程度高
    //var box = $('div').css(['color', 'width', 'height']);

    //JS語法
    //for (var i in box) {
    //    alert(i + ' : ' + box[i])
    //}

    //Jquery 迴圈用法
    //$.each(box, function (attr,value) {
    //    alert(attr + ':' + value);
    //});

    //alert($('div')[0]);

    //$('div').each(function (index, value) {
    //    alert(index + ' : ' + value);
    //});

    //$('div').each(function (index, element) {
    //    alert(index + ' : ' + element);
    //});

    //設置多屬性CSS用法
    //$('div').css('color','red').css('background-color','blue')
    //$('div').css({
    //    'color': 'blue',
    //    'background-color': '#eee',
    //    'width': '200px',
    //    'height' : '20px'

    //});

    //局部操作屬性參數
    //$('div').css('width', function (index, value) {
    //    //alert(index + ':' + value);
    //    return parseInt(value) - 500+'px';
    //});


    ////添加CSS CLASS
    //$('div').addClass('red bg size');
    ////刪除CSS CLASS
    //$('div').removeClass('bg')


    //兩個樣式之間的切換  默認樣式和指定樣式切換
    //$('div').click(function () {
    //    $(this).toggleClass('red size');
    //});

    //$('div').click(function () {
    //    $(this).toggleClass('red size', true);
    //});

    //var count = 0;
    //$('div').click(function () {
    //    $(this).toggleClass('red size', count++ % 2 == 0);  //count++%2==0頻率問題
    //});


    //實作樣式之間的切換
    //$('div').click(function () {
    //    //這裡只是click的局部 而對toggle來說是全局
    //    //$(this).addClass('green');  這行不可使用ADD 因為沒有切換效果  必須有一處為toggleClass
    //    $(this).toggleClass('red');
    //    if ($(this).hasClass('red')){
    //        $(this).removeClass('green');
    //    } else {
    //        //$(this).addClass('green');
    //        $(this).toggleClass('green');
    //    }
    //});


    //$('div').click(function () {
    //    $(this).toggleClass(function () {
    //        //動態返回RED或GREEN  但還是有缺點
    //        return $(this).hasClass('red') ? 'green' : 'red';
    //    });
    //});

    //$('div').click(function () {
    //    $(this).toggleClass(function () {
    //        //click局部  toggle局部
    //            if ($(this).hasClass('red')) {
    //                $(this).removeClass('red')
    //                return 'green';
    //            } else {
    //                $(this).removeClass('green')
    //                return 'red';
    //            }
               
    //    });  //這邊不建議使用count++%2==0頻率 會出現問題
    //});


    //$('div').click(function () {
    //    $(this).toggleClass(function (index, classname, switchBool) {
    //        //顯示出來的index都是會0 因為綁定的是div的Class事件 所以不會有其他的DIV
    //        alert(index + ':' + classname + ':' + switchBool);
    //            //click局部  toggle局部
    //                if ($(this).hasClass('red')) {
    //                    $(this).removeClass('red')
    //                    return 'green';
    //                } else {
    //                    $(this).removeClass('green')
    //                    return 'red';
    //                }
    //        });  
    //});


    //var count = 0;
    //$(document).click(function () {
    //    $('div').toggleClass(function (index, classname, switchBool) {
    //        //顯示出來的index都是會0 因為綁定的是div的Class事件 所以不會有其他的DIV
    //        alert(index + ':' + classname + ':' + switchBool);
    //        //click局部  toggle局部
    //        if ($(this).hasClass('red')) {
    //            $(this).removeClass('red')
    //            return 'green';
    //        } else {
    //            $(this).removeClass('green')
    //            return 'red';
    //        }
    //    }, count++ % 2 == 0);
    //});

//})

//=============class12================

//$(function () {

    //寬度CSS
    //alert($('div').css('width'))
    //alert($('div').width());

    //alert(typeof ($('div').css('width')));  //return string
    //alert(typeof ($('div').width()));       //return number  功能優化 已經將型態轉換成NUMBER
    //alert($(window).width())
    //alert($(document).width())

    //$('div').width(500);
    //$('div').width('500px');
    //$('div').width('500pt');

    //$('div').width(function (index, width) {
    //    return width - 500 + 'px'; //雖然會智能添加上PX 但建議還是加上單位 可以更佳清晰
    //});

    //高度CSS和寬度類似
    //alert($(window).height())
    // HTML 加上                                       padding  border margin
    //alert($('div').width());                         //200      200    200
    //alert($('div').innerWidth());                    //400      400    400   計算內邊距
    //alert($('div').outerWidth());                    //400      600    600   計算邊框
    //alert($('div').outerWidth(true));                //400      600    800   true = 計算外邊距


    //元素偏移方法

    //和網頁邊框的距離
    //alert($('div').offset());
    //alert($('div').offset().left);
    //alert($('div').offset().top);
    //alert($('strong').offset().top);


    //position 為相對於父元素的距離
    //alert($('div').position().top);
    //alert($('strong').offset().top);
    //alert($('strong').position().top);

    //取得滾動軸的數值
    //alert($(window).scrollTop());
    //$(window).scrollTop(300)
//})