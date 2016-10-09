$(function () {
    //1.得到圖片的高度
    //2.將目前圖片高度傳入
    //3.瀏覽器變更大小時自動刷新
    $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px')
    //console.log($('.carousel-inner img').height) + 'px'

    //设置垂直居中 => 到第2張圖片會獲取不到高度值
    //$(window).resize(function () {
    //    $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px')
    //})
    ////console.log($('.carousel-inner img').height)

    //设置垂直居中  註釋掉為不使用JQ版本
    //$('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
    //$(window).resize(function () {
    //    //各別取得 1張圖  2張圖  3張圖 的高度  不為0的為目前的圖片  將高度給顯示的CSS
    //    var $height = $('.carousel-inner img').eq(0).height() ||
	//				  $('.carousel-inner img').eq(1).height() ||
	//				  $('.carousel-inner img').eq(2).height();
    //    $('.carousel-control').css('line-height', $height + 'px');
    //});

    //輪播圖自動撥放 
    $('#myCarousel').carousel({
        //4秒
        interval: 4000,
    });
})