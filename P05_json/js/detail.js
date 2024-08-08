// GETパラメータの取得する処理
let url = new URL(window.location.href)
let params = url.searchParams
let i = params.get('i')


window.onload = function () {
    // ウィンドウを読み込んだら実行される処理
    let output = document.getElementById('output')
  
    fetch('../data/data.json')
    // fetch('http://192.168.0.32/data/employees')
      .then(response => response.json())
      .then(json => {
        console.log(json)
  
        // json.members.forEach(function (member,i) {
        // さっきまで↓が${members.name}でよかったけど、↑の宣言がなくなったから
        // ジェイソンの、メンバーの、index番目の、名前、という表記が必要になる　→　${json.members[i].name}
let outHtml = `        
<div class = "item">
<dl>
    <dt>名前</dt>
    <dd>${json.members[i].name}</dd>
    <dt>年齢</dt>
    <dd>${json.members[i].age}</dd>
    <dt>証明写真</dt>
    <dd><img src="../img/${json.members[i].img}" alt=""></dd>
    <dt>詳細</dt>
    <dd>${json.members[i].detail}</dd>
</dl>   
</dl>   
`
  
  
          output.innerHTML += outHtml
        // })
      })
  
  }

// 先生のサーバーのぽけもんバージョン
//<dl>
//     <dt>名前</dt>
//     <dd>${json.members[i].name}</dd>
//     <dt>年齢</dt>
//     <dd>${json.members[i].age}</dd>
//     <dt>画像</dt>
//     <dd><img src="http://192.168.0.32/img/${json.members[i].img}" alt=""></dd>
//     <dt>詳細</dt>
//     <dd>${json.members[i].detail}</dd>
// </dl>   