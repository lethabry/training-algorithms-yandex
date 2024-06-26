// Телефонные номера в адресной книге мобильного телефона имеют один из следующих форматов: +7<код><номер>,
// 8<код><номер>, <номер>, где <номер> — это семь цифр, а <код> — это три цифры или три цифры в круглых скобках.
// Если код не указан, то считается, что он равен 495. Кроме того, в записи телефонного номера может стоять знак “-” между любыми двумя цифрами (см. пример).
//  На данный момент в адресной книге телефона Васи записано всего три телефонных номера, и он хочет записать туда еще один.
// Но он не может понять, не записан ли уже такой номер в телефонной книге. Помогите ему! Два телефонных номера совпадают, если у них равны коды и равны номера.
// Например, +7(916)0123456 и 89160123456 — это один и тот же номер.

// Формат ввода
// В первой строке входных данных записан номер телефона, который Вася хочет добавить в адресную книгу своего телефона.
//  В следующих трех строках записаны три номера телефонов, которые уже находятся в адресной книге телефона Васи.
// Гарантируется, что каждая из записей соответствует одному из трех приведенных в условии форматов.

// Формат вывода
// Для каждого телефонного номера в адресной книге выведите YES (заглавными буквами), если он совпадает с тем телефонным номером,
// который Вася хочет добавить в адресную книгу или NO (заглавными буквами) в противном случае.

// Пример 1
// Ввод
// 8(495)430-23-97
// +7-4-9-5-43-023-97
// 4-3-0-2-3-9-7
// 8-495-430

// Вывод
// YES
// YES
// NO

// Пример 2
// Ввод
// 86406361642
// 83341994118
// 86406361642
// 83341994118

// Вывод
// NO
// YES
// NO

// Пример 3
// Ввод
// +78047952807
// +78047952807
// +76147514928
// 88047952807

// Вывод
// YES
// NO
// YES

const saveNumbers = (value) => value.replace(/\D/g, '');

const updateNumber = (value) => {
  if (value.length === 7) {
    value = '8495' + value;
  }
  if (value[0] === '7') {
    value = '8' + value.substring(1);
  }
  return value;
};

const isPhonesEqual = (phone1, phone2) => (phone1 === phone2 ? 'YES' : 'NO');

function phoneNumber(phone, addedPhone1, addedPhone2, addedPhone3) {
  let updatedPhone = saveNumbers(phone);
  let updatedPhone1 = saveNumbers(addedPhone1);
  let updatedPhone2 = saveNumbers(addedPhone2);
  let updatedPhone3 = saveNumbers(addedPhone3);

  updatedPhone = updateNumber(updatedPhone);
  updatedPhone1 = updateNumber(updatedPhone1);
  updatedPhone2 = updateNumber(updatedPhone2);
  updatedPhone3 = updateNumber(updatedPhone3);

  const ifFirstNumberEqual = isPhonesEqual(updatedPhone, updatedPhone1);
  const ifSecondNumberEqual = isPhonesEqual(updatedPhone, updatedPhone2);
  const ifThirdNumberEqual = isPhonesEqual(updatedPhone, updatedPhone3);
  return [ifFirstNumberEqual, ifSecondNumberEqual, ifThirdNumberEqual];
}

process.stdin.on('data', (data) => {
  let result = phoneNumber(data);
  process.stdout.write(result + '');
  process.exit();
});
