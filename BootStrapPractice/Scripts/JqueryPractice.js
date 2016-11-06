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

//=============class13================

//$(function () {
    //動態建立元素節點
    //var box = '<div id="box">節點</div>'  //建立節點
    //$('body').append(box);             //插入節點

    //內部插入節點方式
    //$('div').append('<strong>DOM</strong>');  //DIV 元素內部 & 後面

    //index = 哪一個節點  html = 獲取節點的內容值
    //$('div').append(function (index,html) {
    //    return '<strong>DOM</strong>' + index + html
    //});

    //$('strong').appendTo('div');  //移入操作不需要建立節點

    //$('div').prepend('<strong>DOM</strong>');  //DIV 元素內部 & 前面

    //$('div').prepend(function (index,html) {
    //        return '<strong>DOM</strong>' + index + html
    //});

    //$('strong').prependTo('div');


    //外部插入節點方式
    //$('div').after('<strong>DOM</strong>');  //外部 同級(相同父節點)後面
    //$('div').after(function (index,html) {
    //        return '<strong>DOM</strong>' + index + html
    //});

    //$('div').before('<strong>DOM</strong>');  //外部 同級(相同父節點)前面
    //$('div').before(function (index, html) {
    //        return '<strong>DOM</strong>' + index + html
    //});

    //$('strong').insertAfter('div')
    //$('strong').insertBefore('div')


    //=============class14================

    //包裹節點相關應用

    //在DIV節點的外層 添加了一個strong元素
    //$('div').wrap('<strong class="B"></strong>');
    //$('div').wrap('</strong>');

    //$('div').wrap('<strong>123</strong>');
    //$('div').wrap('<strong><em></em></strong>');

    //$('div').wrap($('strong').get(0));
    //$('div').wrap(document.createElement('strong'))

    //$('div').wrap(function (index) {
    //    return '<strong>' + index + '</strong>';
    //});

    //$('div').wrap('<strong><em></em></strong>');
    //$('div').unwrap(); //移除一層
    //$('div').unwrap(); //移除一層

    //所有DIV都會包起來
    //$('div').wrapAll('<strong><em></em></strong>');
    //$('div').wrapAll(document.createElement('strong'));

    //div的裡面會被放置<strong>元素
    //$('div').wrapInner('<strong></strong>');
    //$('div').wrapInner(document.createElement('strong'));

    //$('div').wrapInner(function (index) {
    //      return '<strong>' + index + '</strong>';
    //});


    //節點操作
    //$('div').click(function () {
    //    alert('abc')
    //});

    //div複製起來 然後新增至body
    //clone() => True / false  true表示將事件處裡複製過來
    //$('div').clone().appendTo('body');
    //$('div').clone(true).appendTo('body');
    //$('div').clone(false).appendTo('body');

    //刪除節點
    //$('div').remove();
    //$('div').remove('.box');

    //alert($('div').remove())
    //alert($('div').remove().length)
    //alert($('div').remove().get(0))

    //刪除掉後再添加是沒有事件行為的
    //$('div').remove().appendTo('body')

    //另一個刪除行為
    //$('div').detach()
    //另一個刪除行為再添加會保留事件行為
    //$('div').detach().appendTo('body')

    //將DIV內容清空但是保留節點
    //$('div').empty();

    //替換DIV節點  不會保留事件行為
    //$('div').replaceWith('<span>DOM</span>')
    //$('<span>DOM</span>').replaceAll('div')
//});

//=============class15================

//$(function () {

    //常規選擇器
    //alert($('input').size());
    //alert($('input').val());

    //這個寫法語意不佳 不會知道是哪個input
    //alert($('input').eq(1).val());

    //以下寫法語意教上面寫法清晰 但有多個密碼欄怎麼辦呢?
    //alert($('input[type=password]').val())

    //ID是絕對唯一性 NAME是相對唯一性
    //alert($('input[name=user]').val())
    //alert($('input[name=pass]').val())


    //如何透過INPUT選擇表單內所有元素
    //alert($(':input').size());
    //alert($(':input[name=city]').size());
    //alert($(':text').size());
    //alert($(':password').size());

    //清楚指定type為password 且NAME為pass 輸入框 語異
    //alert($(':password[name="pass"]').size());


    //alert($(':radio').size());
    //如何獲取到第2個radio 女的值
    //alert($(':radio[name="sex"]').eq(1).val());
    //alert($(':radio[name="sex"]').last().val());

    //隱藏須注意  要指定是FORM下面的HIDDEN 限定範圍
    //alert($(':hidden').size());
    //alert($('form:hidden').size());

    //=======表單過濾器=======
    //注意form 後面需要空一格  選擇可用元素
    //alert($('form :enabled').size());
    //alert($('form :disabled').size());
    //alert($('form :checked').size());
    //alert($('form :selected').size());
    //alert($('form :selected').get(0));
//});

//=============class16================
//$(function () {
    //$('input').bind('click', function () {
    //    alert('show')
    //});

    //$('input').bind('click', fn());
    //function fn() {
    //    alert('show4')
    //}

    //可以綁定多個事件  mouseover 為滑鼠移入效果
    //$('input').bind('click mouseover', function () {
    //      alert('show')
    //});

    //$('input').bind('mouseout mouseover', function () {
    //    $('div').html(function (index, value) {
    //        return value + '1';
    //    });
    //});


    //分開撰寫移入移出方法  KEY - VALUE
    //$('input').bind({
    //    mouseout: function () {
    //        alert('移出');
    //    },
    //    mouseover: function () {
    //        alert('移入');
    //    }
    //});
    //$('input').bind({
    //    'mouseout': function () {
    //        alert('移出');
    //    },
    //    'mouseover': function () {
    //        alert('移入');
    //    }
    //});


    //刪除綁定事件
    //$('input').bind('click mouseover', function () {
    //    alert('show')
    //});
    
    //$('input').unbind();      //刪除全部事件
    //$('input').unbind('click'); //刪除click事件
    //$('input').bind('click', fn1);
    //$('input').bind('click', fn2);

    //function fn1() {
    //    alert('fn1')
    //}
    //function fn2() {
    //    alert('fn2')
    //}
    //$('input').unbind('click', fn2); //刪除fn2函式的click事件 

    //Jquery封裝事件
    //$('input').click(function () {
    //    alert('點1下');
    //});

    //$('input').dblclick(function () {
    //    alert('點2下');
    //});

    //$('input').mousedown(function () {
    //    alert('滑鼠點一下');
    //});

    //$('input').mouseup(function () {
    //    alert('滑鼠點一下放開');
    //});

    //unload 是整個頁面卸載  一般新瀏覽器不支持
    //一般用於清理工作 變量清理  內存清理
    //$(window).unload(function () {
    //    alert('頁面刷新');
    //});

    //$(window).resize(function () {
    //    alert('頁面大小變更');
    //});

    //$(window).scroll(function () {
    //    alert('滾動條改變了');
    //});

    //$('input').select(function () {
    //    alert('將內文選定後觸發');
    //});

    //$('input').change(function () {
    //    alert('將內文改變後觸發');
    //});

    //表單提交是作用在表單上 不是按鈕本身
    //$('form').submit(function () {
    //    alert('表單送出');
    //});

//});

//=============class17================
//$(function () {
    //移出移入
    /*
    $('div').mouseover(function(){
      $(this).css('background','red'); 
    }).mouseout(function(){
      $(this).css('background','green'); 
    });  
    
    //穿入穿出區別
    $('div').mouseenter(function(){
      $(this).css('background','red'); 
    }).mouseleave(function(){
      $(this).css('background','green'); 
    });  
    
     //over會觸發子節點
    $('div').mouseover(function(){
      $('strong').html(function(index,value){
        return value + '1';
      }); 
    });  
    
    //enter不會觸發子節點
   //enter會比over常用 因為over會造成多次無效觸發
   $('div').mouseenter(function(){
      $('strong').html(function(index,value){
        return value + '1';
      }); 
    });  
    
    $('div').mouseout(function(){
      $('strong').html(function(index,value){
        return value + '1';
      }); 
    });  
    
    $('div').mouseleave(function(){
      $('strong').html(function(index,value){
        return value + '1';
      }); 
    });  
    
    //單元速操作兩者都可以使用 多元素操作建議使用enter and
    //leave
    
    
    $('input').keydown(function(){
      alert('鍵盤按下')
    });
   
     $('input').keyup(function(){
      alert('鍵盤放開')
    });
    
    
    //keydown & keypress 為 字串編碼
    $('input').keydown(function(e){
      alert(e.keyCode);
    });
    
     $('input').keypress(function(e){
      alert(e.charCode);
    });
    
    
    
    $('input').focus(function(){
      alert('焦點資訊移入');
    });
    
    $('input').blur(function(){
      alert('焦點資訊離開');
    });
    
   
     $('input').focusin(function(){
      alert('焦點資訊移入');
    });
    
    $('input').focusout(function(){
      alert('焦點資訊移出');
    });
    
     //focus & blur 是當前元素材會有效
   $('div').focus(function(){
      alert('焦點資訊移入');
    });
  
   $('input').focus(function(){
      alert('焦點資訊移入');
    });
    
     //focus & blur 是當前元素材會有效 裡面的元素不會有效果
    $('div').focus(function(){
      alert('焦點資訊移入');
    });
    
    //focusin & focusout 子元素也可以有影響
    $('div').focusin(function(){
      alert('焦點資訊移入');
    });
    
    $('input').focusout(function(){
      alert('焦點資訊移出');
    });
    
    $('div').blur(function(){
      alert('焦點資訊移出');
    });
    
    $('div').focusout(function(){
      alert('焦點資訊移出');
    });
    
    //===複合事件=====
    //DIV移入變紅色 移出變綠色
    //hover是mouseenter和mouseLeave的結合體
    $('div').hover(function(){
      $(this).css('background','red'); 
    },function(){
      $(this).css('background','green'); 
    });
    
    $('div').toggle('slow');
    
    //toggle 效果需要有向下兼容的JQ套件才能使用
    //1.10版已刪除此功能
    $('div').toggle(function(){
      $(this).css('background','red'); 
    },function(){
      $(this).css('background','blue'); 
    },function(){
      $(this).css('background','green'); 
    });
    
    //實作Toggle方法
    var flag = 1;
    $('div').click(function(){
      if(flag==1){
        $(this).css('background','red'); 
        flag = 2;
      }else if (flag==2){
        $(this).css('background','blue'); 
        flag = 3;
      }else if (flag==3){
        $(this).css('background','green'); 
        flag = 1;
      }
    });
    */
//})

//=============class18  &  class19================

$(function () {
    
    //=============class18===============
    //$('input').bind('click', function (e) {
    //    alert(e);
    //    //回傳OBJECT
    //})

    ////說明屬性和方法
    //$('input').bind('click', function (e) {
    //    alert(e.type);
    //    alert(typeof(e.type));
    //})

    //$('input').bind('click', function (e) {
    //    alert(e.target);
    //})

 
    //$('input').bind('click', function (e) {
    //    alert(e.currentTarget);
    //})
    
    //target是獲取觸發元素的DOM,觸發元素就是你點了哪個就是哪個 選擇到區域內的其他元素都會是該元素對象
    //$('div').bind('click', function (e) {
    //    alert(e.target);
    //})

    //currentTarget得到的是監聽元素的DOM,你綁定了哪個就是哪個 無論選擇到區域內的任何元素都會是綁定對向DIV
    //$('div').bind('click', function (e) {
    //    alert(e.currentTarget);
    //})
    

    //移入SPAN後檢查DOM是甚麼
    //$('span').bind('mouseover', function (e) {
    //    alert(e.relatedTarget);
    //})

    //$('span').bind('mouseout', function (e) {
    //    alert(e.relatedTarget);
    //})

    //$('div').bind('click', function (e) {
    //    alert(this);
    //})

    //$('div').bind('click', function (e) {
    //    alert(this==e.currentTarget);
    //})

    //$('div').bind('click', function (e) {
    //    alert(this==e.target);
    //})


    //$('input').bind('click',123, function (e) {
    //    alert(e.data);
    //})

    //$('input').bind('click', 'abc', function (e) {
    //    alert(e.data);
    //})

    //$('input').bind('click', [1,2,3,'a','b'], function (e) {
    //    alert(e.data);
    //})

    //$('input').bind('click', [1,2,3,'a','b'], function (e) {
    //    alert(e.data[3]);
    //})

    //$('input').bind('click', {user:'Lee',age:100}, function (e) {
    //    alert(e.data.age);
    //})

    //$(document).bind('click', function (e) {
    //    alert(e.pageX + ',' + e.screenX + ',' + e.clientX)
    //})

    //pageY 頁面的原點有滾軸 則就是目前位置至滾軸圓點位置
    //screenY 螢幕視窗最上方到目前位置的距離
    //clientY 為頁面內文原點到目前位置的距離
    //$(document).bind('click', function (e) {
    //    alert(e.pageY + ',' + e.screenY + ',' + e.clientY)
    //})

    //$('input').bind('click', function (e) {
    //    return 123;
    //})

    //$('input').bind('click', function (e) {
    //    alert(e.result)
    //})

    //$('input').bind('click', function (e) {
    //      alert(e.timeStamp)
    //})

    //判斷滑鼠的左中右鍵
    //$('input').bind('mousedown', function (e) {
    //    alert(e.which)
    //})

    //得到鍵盤的按鍵
    //$('input').bind('keyup', function (e) {
    //    alert(e.which)
    //})

    //判斷是否有使用Ctrl按鍵
    //$('input').bind('click', function (e) {
    //    alert(e.ctrlKey)
    //})

    //============== class19================

})