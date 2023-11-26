// Задача 1
function task1() {
  let x = parseInt(prompt("Введите x"));
if (x > 0)
    alert(Math.pow(Math.sin(x), 2));
else
    alert(1 - 2 * Math.sin(x*x));
}

// Задача 2
function task2() {
let n = parseInt(prompt("Введите n"));
var numberString = n.toString();
var reversedString = numberString.split('').reverse().join('');
  if (numberString === reversedString) {
    alert(true);
  } else {
    alert(false);
  }
}



// Задача 3
function task3() {
let n = parseInt(prompt("Введите n"));
if(n % 4 == 0 & (n % 100 != 0 || n % 400 == 0))
    alert("Год високосный");
else
    alert("Год не високосный");
}

// Задача 4
function task4() {
  let x = parseInt(prompt("Введите x"));
  if (x < -1) alert("-1");
  if (x > -1) alert(x);
  if (x == -1) alert("1");
}

// Задача 5
function task5() {
  let month = parseInt(prompt("Введите номер месяца"));
  if (month == 12 || month == 1 || month == 2) alert("Зима");
  else if (3 <= month && month <= 5) alert("Весна");
  else if (6 <= month && month <= 8) alert("Лето");
  else if (9 <= month && month <= 11) alert("Осень");
  else alert("Некорректный номер месяца");
}

// Задача 6
function task6() {
let m = parseInt(prompt("Введите номер масти"));
let k = parseInt(prompt("Введите номер карты"));
let suit = "";
let rank = "";
switch (m)
{
    case 1:
        suit = "пик";
        break;
    case 2:
        suit = "треф";
        break;
    case 3:
        suit = "бубен";
        break;
    case 4:
        suit = "червей";
        break;
    default:
        alert("Неверный ввод m");
        return;
}

switch (k)
{
    case 6:
        rank = "Шестерка";
        break;
    case 7:
        rank = "Семерка";
        break;
    case 8:
        rank = "Восьмерка";
        break;
    case 9:
        rank = "Девятка";
        break;
    case 10:
        rank = "Десятка";
        break;
    case 11:
        rank = "Валет";
        break;
    case 12:
        rank = "Дама";
        break;
    case 13:
        rank = "Король";
        break;
    case 14:
        rank = "Туз";
        break;
    default:
        alert("Неверный ввод k");
        return;
}
alert(rank +" "+ suit);

}

// Задача 7
function task7() {
  let year = parseInt(prompt("Введите год"));
  var animals = ['Крыса', 'Корова', 'Тигр', 'Заяц', 'Дракон', 'Змея', 'Лошадь', 'Овца', 'Обезьяна', 'Петух', 'Собака', 'Свинья'];
  var colors = ['Зеленый', 'Красный', 'Желтый', 'Белый', 'Черный'];

  var subCycle = (year - 1984) % 60;
  var animalIndex = subCycle % 12;
  var colorIndex = Math.floor(subCycle / 12);

  alert(animals[animalIndex] + ', ' + colors[colorIndex]);
}

// Задача 8
function task8() {
  let result =  ""
  for (let i = 1; i <= 10; i++) {
  const x = 9 * i;
  result += `9 * ${i} = ${x}` + "\n";
  }
  alert(result);

}

// Задача 9
function task9() {
  let result = "";
  for(let i = 1; i <= 20; i++)
    {
        result += `sin ${i} = ${Math.sin(i)}` + "\n";
    }
  alert(result);
}

// Задача 10
function task10() {
  let result = 0;
  for(let i = 100; i <=500; i++)
      result+= i;
  alert("Сумма от 100 до 500 = " +result);
  
  let a = parseInt(prompt("Введите a"));
  if(a > 500) {
      alert("Число больше 500!");
      return;
  }
  result = 0;
  for(let i = a; i <=500; i++)
      result+= i;
  alert(`Сумма от ${a} до 500 =  ${result}`);
  
  let b = parseInt(prompt("Введите b"));
  if(b < -10)
  {
      alert("Число меньше -10!");
      return;
  }
  result = 0;
  for(let i=-10; i <= b; i++)
  {
      result += i;
  }
  alert(`Сумма от -10 до ${b} =  ${result}`);
  
  a = parseInt(prompt("Введите a"));
  b = parseInt(prompt("Введите b"));
  
  if (a > b) {
      alert("Число a больше b!");
      return;
  }
  result = 0;
  for (let i = a; i <= b; i++)
      result+=i;
  alert(`Сумма от ${a} до ${b} = ${result}`);
}

// Задача 11
function task11() {
  let n = parseInt(prompt("Введите n"));
  let result = 1;
  for(let i = 1; i <= n; i++)
      result+= 1/i;
  alert("Сумма равна: " + result);
}

// Задача 12
function task12() {
  let x = parseInt(prompt("Введите x"));
  let y = parseInt(prompt("Введите y"));

  let result = x;
  for(let i = 1; i < y; i++)
    result += x;
  alert(`${x} * ${y} = ${result}`);  
}

// Задача 13
function task13() {
  let x = parseInt(prompt("Введите n"));
  let result = 0;
  for (let i = 1; i <= x ; i++)
      result += 2 * i - 1;
  alert(x + "^2 = " + result);
}

// Задача 14
function task14() {
  let x = 0;
  for (let i = 50; i >= 1; i--)
  {
      x= Math.sqrt(i + x);
  }
  alert(x);
}

// Задача 15
function task15() {
  let numbers = [1, 8, 5, 2, 3, 0];
  let sum = 0;
  let count = 0;
  for(let i = 0; numbers[i] != 0; i++)
  {
      sum += numbers[i];
      count ++;
  }
  alert("Сумма: " + sum );
  alert("Кол-во чисел: " + count );
}

// Задача 16
function task16() {
  let numbers = [1, 8, 5, 2, 3, -6];
  let result = 0;
  let sum = 0;
  for(let i = 0; numbers[i] >= 0; i++)
  {
    sum+= numbers[i];
  }
  result = sum / (numbers.length - 1);
  alert("Среднее: " + result);
}

// Задача 17
function task17() {
  let n = parseInt(prompt("Введите n"));
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 1;
  var f = 0;

  var numberString = n.toString();

  for (var i = 0; i < numberString.length; i++) {
    var digit = parseInt(numberString[i]);

    if (digit === 3) {
      a++;
    }

    if (digit === parseInt(numberString[numberString.length - 1])) {
      b++;
    }

    if (digit % 2 === 0) {
      c++;
    }

    if (digit > 5) {
      d+= digit;
    }

    if (digit > 7) {
      e*= digit;
    }

    if (digit === 0 || digit === 5) {
      c++;
    }
  }
  alert('Количество цифр 3: ' + a + '\n'
  + 'Сколько раз встречается последняя цифра: ' + b + '\n'
  + 'Количество четных цифр: ' + c + '\n'
  + 'Сумма цифр, больших пяти: ' + d + '\n'
  + 'Произведение цифр, больших семи: ' + e + '\n'
  + 'Количество встреч цифр 0 и 5: ' + f);
}

// Задача 18
function task18() {
  let number = parseInt(prompt("Введите n"));
  let strNumber = number.toString(); // Преобразуем число в строку
  let maxDigit = -1;
  let minDigit = 10;
  let maxIndexReversed, maxIndex, minIndexReversed, minIndex;

  for (let i = 0; i < strNumber.length; i++) {
    let digit = parseInt(strNumber[i]);

    // Находим максимальную цифру и ее индекс с конца числа
    if (digit > maxDigit) {
      maxDigit = digit;
      maxIndexReversed = i;
    }

    if (digit < minDigit) {
      minDigit = digit;
      minIndexReversed = i;
    }    
  }
  maxIndex = strNumber.length - 1 - maxIndexReversed;
  minIndex = strNumber.length - 1 - minIndexReversed;
  alert('порядковый номер максимальной цифры от конца числа: ' + (maxIndexReversed) + '\n'
    + 'порядковый номер максимальной цифры от начала числа: ' + maxIndex + '\n'
    + 'порядковый номер минимальной цифры от конца числа: ' + minIndexReversed + '\n'
    + 'порядковый номер минимальной цифры от начала числа: ' + minIndex + '\n')
    
}

// Задача 19
function task19() {
  let n = parseInt(prompt('Введите число n'));
  let value = 2;
  while(value != n)
  {
      if (n % value == 0)
      {
          alert("Число не простое");
          return;
      } 
      value++;
  }
  alert("Число простое");
}

// Задача 20
function task20() {
  let n = prompt('Введите число n');

  for(let i = 0; i < n.length - 1; i++)
      if (n[i] >= n[i + 1]) 
      {
          alert("false");
          return;
      }
  alert('true');
}

// Задача 21
function task21() {
  let array = [];
  for (let i = 1; i <= 10000; i++)
      array.push(i);

  let n = parseInt(prompt('Введите число n'));
  for (let i = 0; i < array.length; i++)
  {
      if (array[i] > n)
      {
          alert(i);
          return;
      }
  }
  alert('Нет такого числа');
}

// Задача 22
function task22() {
  let str = "";
  let value = 10;
  let max = 30;

  while (value <= 30)
  {
      str+=`${value}\n`;
      value++;
  }

  alert(str);

  str = "";
  value = 10;

  do{
      str+=`${value}\n`;
      value++;
  } while (value <= 30);

  alert(str);
}