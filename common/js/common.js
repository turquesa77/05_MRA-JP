// スムーススクロール -------------------------------------------

$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// 移動先を取得
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

// ページトップリンク -------------------------------------------

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// menu スクロール固定 -------------------------------------------

(function($) {
	$(function() {
		var $header = $('header');
		// Nav Fixed
		$(window).scroll(function() {
			if ($(window).scrollTop() > 350) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}
		});
	});
})(jQuery);

// slick: keyVisual -------------------------------------------

$(document).ready(function(){
	$('.keyVisual__show__slider').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 1, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
		variableWidth: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

// slick: shows in japan -------------------------------------------

$(document).ready(function(){
	$('.shows__slider1').slick({
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.shows__slider2').slick({
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

// slick: visitor -------------------------------------------

$(document).ready(function(){
	$('.visitor__slider').slick({
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});
