import { banmenh, nguhanh, soNut } from './utility.js';
import { meanNumber, numberMenh } from './data.js';
let number_arr = [];

$('.searchBar-input').submit(function (e) {
  e.preventDefault();
  let htmlNumberResult = '';
  let htmlNumberMenhResult = '';
  let compareResult = 'Cân bằng tuyệt đối';
  let phone_number = $('#phone_number').val();
  let positive_count = 0;
  let negative_count = 0;
  let gender = $('input[name="gender"]:checked').val();
  number_arr = phone_number.split('');
  number_arr = number_arr.map((item) => parseInt(item));
  number_arr.forEach((number) => {
    if (number % 2 == 0) {
      negative_count++;
      htmlNumberResult += `<div class="number-item d-flex flex-column number-negative">
															<span class="number-value p-3">${number}</span>
															<span class="number-status p-3">-</span>
														</div>`;
    } else {
      positive_count++;
      htmlNumberResult += `<div class="number-item d-flex flex-column number-positive">
															<span class="number-value p-3">${number}</span>
															<span class="number-status p-3">+</span>
														</div>`;
    }
    for (const key in numberMenh) {
      if (numberMenh[key].includes(number)) {
        let imgPath = `./images/${key}.png`;
        htmlNumberMenhResult += `<div class="number-menh d-flex flex-column align-items-center">
																		<span class="number-menh-number">${number}</span>
																		<span class="number-menh-menh"><img src="${imgPath}" alt=""></span>
																	</div>`;
        break;
      }
    }
  });
  $('.number').html(htmlNumberResult);
  $('.number-m').html(htmlNumberMenhResult);
  if (positive_count - negative_count <= 2 && positive_count - negative_count > 0) {
    compareResult = 'Vượng Dương';
  } else if (positive_count - negative_count >= -2 && positive_count - negative_count < 0) {
    compareResult = 'Vượng Âm';
  } else if (Math.abs(positive_count - negative_count) > 2) {
    compareResult = 'Thiên lệch';
  }
  $('.number-result').html(
    `Kết quả: <strong>${positive_count} dương</strong> và <strong>${negative_count} âm</strong>
		=> <strong>${compareResult}</strong>
		`
  );

  // Số nút
  let so_nut = soNut(number_arr);
  let sonut_result = meanNumber[so_nut];
  $('.sonut-number').text(so_nut);
  $('.sonut-result').text(sonut_result);

  // Ngũ hành
  let number2_array = [];
  let string_length = phone_number.length;
  for (let i = 0; i < string_length; i = i + 2) {
    let subStr = phone_number.substr(i, 2);
    subStr = parseInt(subStr);
    number2_array.push(subStr);
  }
  number2_array = number2_array.map(function (item) {
    if (item > 60) return item - 60;
    return item;
  });
  let nguhanh_result = nguhanh(number2_array);
  $('.nguhanh-result').text(nguhanh_result);
  let year = $('#year').val();
  let banmenh_obj = banmenh(year);
  console.log(banmenh_obj);
  $('.banmenh-img').animate(
    { deg: banmenh_obj[2] },
    {
      duration: 1200,
      step: function (now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      },
    }
  );
  $('.banmenh-result').html(
    `Bạn sinh năm <strong>${year}</strong> - <strong>${banmenh_obj[0]}</strong> - Bản mệnh <strong>${banmenh_obj[1]}</strong> - Thuộc tuổi <strong>${banmenh_obj[3]} ${gender}</strong>`
  );
});
