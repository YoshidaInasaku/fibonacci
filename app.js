'use strict';
const memo = new Map();    // マップを作成（連想配列を作成）
memo.set(0, 0);    // キー値と値をセット
memo.set(1, 1);    //  この場合だと「0は値0」「1は値1」
function fib(n) {
    // もしマップがnをキーとした値を持っていたら、nを返す
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for(let i = 0; i <= length; i++) {
    console.log(fib(i));
}
