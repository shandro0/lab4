<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="center">Лабораторная работа №4</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="right">Выполнил: Шандро Никита Богданович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Написание кода на Node.js и загрузка его на сервер.</p>

<h2>Цели и задачи</h2>
1.	Напишите код, выполнив задание из каждого пункта отдельной строкой:
-	Создайте пустой объект user.
-	Добавьте свойство name со значением John.
-	Добавьте свойство surname со значением Smith.
-	Измените значение свойства name на Pete.
-	Удалите свойство name из объекта.
<br>
2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:
<br>
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
<br>
3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";
<br>
4. У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
<br>
5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
<br>
6. Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // ?
<br>
7. Давайте произведём 5 операций с массивом.
·	Создайте массив styles с элементами «Джаз» и «Блюз».
·	Добавьте «Рок-н-ролл» в конец.
·	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
·	Удалите первый элемент массива и покажите его.
·	Вставьте «Рэп» и «Регги» в начало массива.
·	Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
<br>
8. Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?
<br>
9. Напишите функцию sumInput(), которая:
·	Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
·	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
·	Подсчитывает и возвращает сумму элементов массива.
<br>
  10. На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
<br>
11. Удалить в массиве все числа, которые повторяются более двух раз. 
<br>
12.Введите одномерный целочисленный массив. Найдите наибольший нечетный элемент. Далее трижды осуществите циклический сдвиг влево элементов, стоящих справа от найденного максимума, и один раз сдвиг элементов вправо, стоящих слева от найденного максимума.
<br>
13. Найдите сумму отрицательных элементов массива.
<br>
14. Найдите произведение элементов массива с нечетными номерами.
<br>
15. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в массиве, то выведите ноль.
<br>
16. Найдите наибольший элемент массива.
<br>
17. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент. 
<br>
18. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.
<br>
19. Найдите сумму номеров минимального и максимального элементов. 
<br>
 20. Найдите минимальный по модулю элемент массива.
<br>
21. Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.
<br>
22. Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.
<br>
Задачи CodeWars:
1.	https://www.codewars.com/kata/javascript-mathematician
2.	https://www.codewars.com/kata/javascript-from-the-inside-number-1-map
3.	https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter
4.	https://www.codewars.com/kata/power-bind
5.	https://www.codewars.com/kata/closures-and-scopes
6.	https://www.codewars.com/kata/can-you-keep-a-secret
<br>
Задача с API
Необходимо использовать любое API для написания веб-приложения используя Node JS и Express



<h2>Решение задач</h2>

```js
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
  
```

<h2>Вывод</h2>
Научился основом JavaScript
