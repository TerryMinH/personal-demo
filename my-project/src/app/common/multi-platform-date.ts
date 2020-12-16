/*
 * @Author: qiuz
 * @Date: 2018-08-14 13:42:49
 * */

const MPDate = (time: string | Date) => {
  if (typeof time === 'string' && isNaN(Date.parse(time))) {
    // '2000-01-01 00:00:00' => '2000/01/01 00:00:00'
    time = time.replace(/-/g, '/');
  }
  return new Date(time);
};

const zore = (number: number): string => {
  return number < 10 ? ('0' + number) : number + '';
};

const dateFormat = (date: Date, showTime = true) => {
  const
    Y = date.getFullYear() + '-',
    M = zore(date.getMonth() + 1) + '-',
    D = zore(date.getDate()) + ' ',
    h = zore(date.getHours()) + ':',
    m = zore(date.getMinutes()) + ':',
    s = zore(date.getSeconds());

  return showTime ? Y + M + D + h + m + s : Y + M + D + '00:00:00';
};

export {
  MPDate,
  dateFormat
}