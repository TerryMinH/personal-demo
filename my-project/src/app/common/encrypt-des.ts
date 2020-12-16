/*
 * @Author: qiuz
 * @Date: 2018-06-19 11:16:40
 * */

import * as CryptoJS from 'crypto-js';
import { environment } from '@env/environment';
import { sortForAscii } from './utils';

const MD5 = 'ab610c3bfb3a85f35b4abb1b1ee17a93';
const { DES_KEY, DES_IV } = environment;

// 业务加密
export const DES = (data:any) => {
  return encryptByDES(JSON.stringify(data), DES_KEY, DES_IV);
};

// 业务解密
export const SED = (desString:any) => {
  const data = JSON.parse(decryptByDESModeEBC(desString, DES_KEY, DES_IV));
  return data;
};

// 请求加密
export const HttpDES = (jsonData: any) => {
  return encryptByDES(jsonData, DES_KEY, DES_IV);
};


// des加密
export const encryptByDES = function (message: any, key: any, iv: any) {
  // 把私钥转换成16进制的字符串
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Utf8.parse(iv);
  // 模式为ECB padding为Pkcs7
  // TripleDES
  const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  // 加密出来是一个16进制的字符串
  return encrypted.toString();
};
// 解密
export const decryptByDESModeEBC = function (ciphertexat: string, key: any, iv: any) {
  // 把私钥转换成16进制的字符串
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Utf8.parse(iv);
  // 把需要解密的数据从16进制字符串转换成字符byte数组
  const decrypted = CryptoJS.DES.decrypt(
    // @ts-ignore
    {
      ciphertext: CryptoJS.enc.Base64.parse(ciphertexat)
    },
    keyHex,
    {
      iv: ivHex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }
  );
  // 以utf-8的形式输出解密过后内容
  const result_value = decrypted.toString(CryptoJS.enc.Utf8);
  return result_value;
};
// 这个默认是32位的
export const md5Encode = function (str: any) {
  return CryptoJS.MD5(str).toString();
};

// 签名
export const sign = (obj: object): string => {
  const str = sortForAscii(obj, true);
  return md5Encode(str);
};
