import $ from 'jquery';

$(function() {
  // if($('.do_cal').length) {
  //     console.log("$('.do_cal')[0] の結果: true");
  //     console.log($('.do_cal').length);

  // } else {
  //     console.log("$('.do_cal')[0] の結果: false");
  // }

  // 非表示になってる計算エリアを表示する
  $(".btn-show").on("click", function() {
    // classの内容を変更する
    $(".calculator").removeClass("d-none");

  //   if($('.do_cal').length) {
  //     console.log("$('.do_cal')[0] の結果: true");
  //     console.log($('.do_cal').length);

  // } else {
  //     console.log("$('.do_cal')[0] の結果: false");
  // }
  });

  // 計算するボタン押したら掛け算する
  $(document).on("click", ".do_cal", function() {
    // ２つの値を取得
    var num_1st = $("[name=num-1st]").val();
    // console.log(num_1st);
    var num_2nd = $("[name=num-2nd]").val();
    // console.log(num_2nd);
    // それらを掛け算する
    var answer = num_1st * num_2nd
    // 結果を表示する（前の結果があったら消しとく）
    $(".answer").empty().append(answer)
  });
});


