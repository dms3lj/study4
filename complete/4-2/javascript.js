// 変数a,bを宣言し、aに9を、bに3を代入して・・・
let a = 9;
let b = 3;

// 課題4-2-1: 変数aが奇数なら「aは奇数です」と表示、
// 偶数なら表示の必要なし。
if ( a % 2 == 1 ) {
    // ちなみに a % 2 != 0 でも可
    console.log('aは奇数です');
}

// 課題4-2-2: a / b の余りがゼロなら「割り切れます」
// 余りがゼロでなければ「割り切れません」と表示。
if ( a % b == 0) {
    console.log('割り切れます');
} else {
    console.log('割り切れません');
}
