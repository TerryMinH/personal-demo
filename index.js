/*
 * @Author: TerryMin
 * @Date: 2021-03-08 13:33:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-08 13:41:01
 * @Description: file not
 */

function memoize (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args));
  }
}

function sqrt (arg) {
  return Math.sqrt(arg);
}

const memoizedSqrt = memoize(sqrt);

console.time("non-memoized call");
console.log(sqrt(4));
console.timeEnd("non-memoized call");
console.time("memoized call")
console.log(sqrt(4))
console.timeEnd("memoized call")