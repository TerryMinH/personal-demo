/*
 * @Author: TerryMin
 * @Date: 2021-03-12 14:46:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-12 15:05:31
 * @Description: file not
 */
import _ from 'lodash';
import './style.css';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log(process);
  console.log('Looks like we are in development mode3!');
}
function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack test'], ' ');
  element.classList.add('hello');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;

}

document.body.appendChild(component());
