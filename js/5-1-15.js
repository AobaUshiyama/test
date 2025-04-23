$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$(function() {
	$('body').fadeIn(800); //1秒かけてフェードイン！
});

$(window).on('load', function() {
  $('#loading img').fadeIn(500); // ロゴを1秒かけてフェードイン
  setTimeout(function() {
    $('#loading').fadeOut(1000); // 2秒後にローディング画面全体をフェードアウト
  }, 2000);
});

$(window).scroll(function() {
  $('.fade-in').each(function() {
    var pos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    if (scroll > pos - wHeight + wHeight/90){
      $(this).addClass('inview');
    }
  });
});