/*
 * @Author: TerryMin
 * @Date: 2019-08-20 14:10:57
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-09-19 18:09:47
 * @Description: file not
 */

// let fn = () => {
//   console.log(11);
// }
// fn();

function People(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name);
  }
}

const boy = new People('TerryMin', '26');
boy.say()
console.log(boy);