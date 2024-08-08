


window.onload = function () {
  // ウィンドウを読み込んだら実行される処理
  let empList = document.getElementById('empList')
  



// ↓↓↓↓↓ほぼ定型↓↓↓↓↓＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// fetch('http://192.168.0.32/data/employees')
// ↑は先生のサーバーの課題。ぽけもん。
      fetch('../data/data.json')
.then(response => response.json())
.then(json => {
  console.log(json)
// ↑↑↑↑↑ほぼ定型↑↑↑↑↑＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ただ、「json」は適切な名前に変えられる

      json.members.forEach(function (member,i) {



        let outHtml = `
        <div class="card" onclick="window.location.href = './detail.html?i=${i}'">
          <img src="../img/${member.img}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
            </div>
        </div>
            
        `



        empList.innerHTML += outHtml
      })
    })

}




// ポケモンバージョン
// <div class="card" onclick="window.location.href = './detail.html?i=${i}'">
//   <img src="http://192.168.0.32/img/${member.img}" class="card-img-top" alt="${member.name}">
//     <div class="card-body">
//       <h5 class="card-title">${member.name}</h5>
//     </div>
// </div>


// ドラクエ
// <dl>
//     <dt>名前</dt>
//     <dd>${member.name}</dd>
//     <dt>年齢</dt>
//     <dd>${member.age}</dd>
//     <dt>画像</dt>
//     <dd><img src="../img/${member.img}" alt=""></dd>
//     <dt>詳細</dt>
//     <dd>${member.detail}</dd>
// </dl>    
