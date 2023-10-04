// 条件分岐

// const num = Math.random() // Math.random() =>0.0~1.0のランダムな数を返してくれるプログラム

// if (num >= 0.5) { // numが0.5以上である場合
// console.log('大きめ')
// } else { // 上記の条件に合致しなかった場合
// console.log('小さめ')
// }

// console.log(`数: ${num}`)

//真偽値(if文のより厳密な挙動)
// const num = Math.random()

//原則、if文は、条件式がtrueの場合に実行される。
// if (true) {
// console.log(`条件はtrueです`)
// } else {
// console.log(`条件はfalseです`)
// }

// if ([]) {
// console.log('このプログラムは実行される')
// }

// falsy
//条件式でfalseとみなされる値 => false, 0, ""(空文字列)

// const a = 2
// const b = 3
// const c = 10
// const d = 10

// console.log(a === b)//false
// console.log(c === d)//true

// console.log(a === b && c === d)//=>false
//A && B =>AがtrueかつBもtrueの場合、trueになる

// console.log(a === b || c === d)//=>true
//A || B =>AがtrueまたはBがtrueの場合、trueになる。

// console.log(!(a === b))//=>true
//!(true)=>false !(false)=>true  真偽値を逆転させる。


//for文

// for (let i = 0; i < 10; i++) {
// console.log(i)
// }// consoleに0から9までの値を表示

// 1.変数iに0を代入(初期化処理の実行)
// 2.i<10は満たしているか?(継続条件を評価)満たしていない場合は終了
// 3.ブロック内の処理を実行
// 4.iに1可算代入する(i === 1)
// 5.2に戻る

//while文

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }



// 関数(処理をまとめて名前をつけるもの)の定義
// function applyTax(price) {
//     console .log(price * 1.1) //TODO: 消費税(10%)込の金額を出力する

     // !return文を使用することで、任意の値を「戻り値」として指定できる！
//     return price * 1.1
// }


//* function 関数名(引数){
//* 処理
//* return 戻り値
//* }

// 実行(呼び出し)
// 関数を実行する際は、関数名に()をつける
// const result1=applyTax(1000)
// const result2=applyTax(580)

// TODO: 上の結果を合計したい...
// console .log(result1+result2)
// 関数を使うと...
// -好きな時に何度でも呼び出せる
// -引数を用いて、実行時に任意の値を渡せる
// -戻り値を指定して、関数内の任意の値を別の場所(コンテクト)で使用することができる


// 関数宣言
// *function applyTax(price) {
// *    return price * 1.1
// *}

// 関数式
// const applyTax = function(price) {
    // return price*1.1
// }

// アロー関数
// const applyTax = (price) => {
    // return price*1.1
// }

// 引数が一つの場合、()を省略できる
// const applyTax = price => {
    // return price * 1.1
// }

// 処理が一行の場合、returnとブロック({})を省略できる
// const applyTax=price => price*1.1


