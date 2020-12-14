/*
 * @Author: TerryMin
 * @Date: 2020-09-10 16:39:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-09-15 11:45:26
 * @Description: file not
 */
exports.index = function (req, res) {
  res.render('index', { title: 'Index' });
}
exports.login = function (req, res) {
  res.render('login', { title: '用户登陆' });
};
exports.doLogin = function (req, res) {
  var user = {
    username: 'admin',
    password: 'admin'
  }
  if (req.body.username === user.username && req.body.password === user.password) {
    req.session.user = user;
    return res.redirect('/home');
  } else {
    req.session.error = '用户名或密码不正确';
    return res.redirect('/login');
  }
}

exports.logout = function (req, res) {
  res.session.user = null;
  res.redirect('/');
}


exports.home = function (req, res) {
  res.render('home', { title: 'Home' });
}
