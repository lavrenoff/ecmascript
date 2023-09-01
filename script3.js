// Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

let sum = 1
function factorial(n) {
    if (n === 0) {
        return sum
    } else {
        sum = sum * n
        factorial(n - 1)
    }
}
factorial(5);
console.log(sum);