export { soNut, nguhanh, banmenh };
import { amDuong } from './data.js';
function soNut(arr) {
  let result = 0;
  arr.forEach((element) => {
    result += parseInt(element);
  });
  if (result < 10) {
    return result;
  } else {
    return soNut(result.toString().split(''));
  }
}

function can(number) {
  switch (number % 10) {
    case 1:
      return ['Giáp', 'Mộc'];
      break;
    case 2:
      return ['Ất', 'Mộc'];
      break;
    case 3:
      return ['Bính', 'Hoả'];
      break;
    case 4:
      return ['Đinh', 'Hoả'];
      break;
    case 5:
      return ['Mậu', 'Thổ'];
      break;
    case 6:
      return ['Kỷ', 'Thổ'];
      break;
    case 7:
      return ['Canh', 'Kim'];
      break;
    case 8:
      return ['Tân', 'Kim'];
      break;
    case 9:
      return ['Nhâm', 'Thuỷ'];
      break;
    case 0:
      return ['Quý', 'Thuỷ'];
      break;
    default:
      break;
  }
}

function chi(number) {
  switch (number % 12) {
    case 1:
      return ['Tý', 'Mộc'];
      break;
    case 2:
      return ['Sửu', 'Mộc'];
      break;
    case 3:
      return ['Dần', 'Thổ'];
      break;
    case 4:
      return ['Mão', 'Thổ'];
      break;
    case 5:
      return ['Thìn', 'Hoả'];
      break;
    case 6:
      return ['Tị', 'Hoả'];
      break;
    case 7:
      return ['Ngọ', 'Thổ'];
      break;
    case 8:
      return ['Mùi', 'Kim'];
      break;
    case 9:
      return ['Thân', 'Kim'];
      break;
    case 10:
      return ['Dậu', 'Thổ'];
      break;
    case 11:
      return ['Tuất', 'Thuỷ'];
      break;
    case 0:
      return ['Hợi', 'Thuỷ'];
      break;
    default:
      break;
  }
}

function nguhanh(arr) {
  let kim = 0;
  let moc = 0;
  let thuy = 0;
  let hoa = 0;
  let tho = 0;
  arr.forEach((element) => {
    switch (can(element)[1]) {
      case 'Kim':
        kim++;
        break;
      case 'Mộc':
        moc++;
        break;
      case 'Thuỷ':
        thuy++;
        break;
      case 'Hoả':
        hoa++;
        break;
      case 'Thổ':
        tho++;
        break;
      default:
        break;
    }
    switch (chi(element)[1]) {
      case 'Kim':
        kim++;
        break;
      case 'Mộc':
        moc++;
        break;
      case 'Thuỷ':
        thuy++;
        break;
      case 'Hoả':
        hoa++;
        break;
      case 'Thổ':
        tho++;
        break;
      default:
        break;
    }
  });
  let max = Math.max(kim, moc, thuy, hoa, tho);
  switch (max) {
    case kim:
      return 'Kim';
      break;
    case moc:
      return 'Mộc';
      break;
    case thuy:
      return 'Thuỷ';
      break;
    case hoa:
      return 'Hoả';
      break;
    case tho:
      return 'Thổ';
      break;
    default:
      break;
  }
}

function canOfYear(year) {
  switch (year % 10) {
    case 1:
      return ['Tân', 4];
      break;
    case 2:
      return ['Nhâm', 5];
      break;
    case 3:
      return ['Quý', 5];
      break;
    case 4:
      return ['Giáp', 1];
      break;
    case 5:
      return ['Ất', 1];
      break;
    case 6:
      return ['Bính', 2];
      break;
    case 7:
      return ['Đinh', 2];
      break;
    case 8:
      return ['Mậu', 3];
      break;
    case 9:
      return ['Kỷ', 3];
      break;
    case 0:
      return ['Canh', 4];
      break;
  }
}

function chiOfYear(year) {
  year -= 4;
  switch (year % 12) {
    case 1:
      return ['Sửu', 0];
      break;
    case 2:
      return ['Dần', 1];
      break;
    case 3:
      return ['Mão', 1];
      break;
    case 4:
      return ['Thìn', 2];
      break;
    case 5:
      return ['Tị', 2];
      break;
    case 6:
      return ['Ngọ', 0];
      break;
    case 7:
      return ['Mùi', 0];
      break;
    case 8:
      return ['Thân', 1];
      break;
    case 9:
      return ['Dậu', 1];
      break;
    case 10:
      return ['Tuất', 2];
      break;
    case 11:
      return ['Hợi', 2];
      break;
    case 0:
      return ['Tý', 0];
      break;
  }
}

function banmenh(year) {
  let can = canOfYear(year);
  let chi = chiOfYear(year);
  let amlich = can[0] + ' ' + chi[0];
  let am_duong = 'Dương';
  if (amDuong['Âm'].includes(chi[0])) am_duong = 'Âm';
  let rotate = 0;
  let menh = '';
  let sum = can[1] + chi[1];
  while (sum > 5) {
    sum -= 5;
  }
  switch (sum) {
    case 1:
      menh = 'Kim';
      rotate = 0;
      break;
    case 2:
      menh = 'Thuỷ';
      rotate = -144;
      break;
    case 3:
      menh = 'Hoả';
      rotate = -216;
      break;
    case 4:
      menh = 'Thổ';
      rotate = -288;
      break;
    case 5:
      menh = 'Mộc';
      rotate = -72;
      break;
  }
  return [amlich, menh, rotate, am_duong];
}
