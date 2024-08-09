//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
  })
  
  //ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用
  
  function fadeAnime(){
  // flipLeft
  $('.gallery li').each(function(){ 
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
          $(this).addClass('flipLeft');
      }else{
          $(this).removeClass('flipLeft');
      }
  });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまでページが読み込まれたらすぐに動かしたい場合の記述

    $(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

//＝＝＝Muuriギャラリープラグイン設定
var grid = new Muuri('.grid', {

//アイテムの表示速度※オプション。入れなくても動作します
showDuration: 600,
showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
hideDuration: 600,
hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	
// アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
  visibleStyles: {
    opacity: '1',
    transform: 'scale(1)'
  },
  hiddenStyles: {
    opacity: '0',
    transform: 'scale(0.5)'
  }    
});

//＝＝＝並び替えボタン設定
$('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
	$(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
	var className = $(this).attr("class");			//クラス名を取得
	className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
	$("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
	if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
		 grid.show('');								//全ての要素を出す
	}else{											//それ以外の場合は
		grid.filter("."+className[0]); 				//フィルターを実行
	}
});

//＝＝＝ Fancyboxの設定
$('[data-fancybox]').fancybox({
 thumbs: {
    autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
  },	
});
	
});

// ============================

$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

  //＝＝＝Muuriギャラリープラグイン設定
  var grid = new Muuri('.grid', {
  
  //アイテムの表示速度※オプション。入れなくても動作します
  showDuration: 600,
  showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  hideDuration: 600,
  hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    
  // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }    
  });
  
  //＝＝＝並び替えボタン設定
  $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
    $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
    var className = $(this).attr("class");			//クラス名を取得
    className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
    $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
    if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
       grid.show('');								//全ての要素を出す
    }else{											//それ以外の場合は
      grid.filter("."+className[0]); 				//フィルターを実行
    }
  });
  
  //＝＝＝ Fancyboxの設定
  $('[data-fancybox]').fancybox({
   thumbs: {
      autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
    },	
  });
    
  });
