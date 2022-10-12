// //=====Задача 1=====
// // Перетворити масив в обʼєкт
// // [{name: 'v', value 'q'}] => {name: 'v', value 'q'}

// //// Рішення №1
// const arr = [{ name: "v", value: "q" }];

// const obj = Object.assign({}, arr);
// console.log(obj);

// //// Рішення №2
// const getObj = (arr) => {
//   const obj = {};

//   arr.forEach((item) => {
//     obj[item.name] = obj[item.value];
//   });
//   return obj;
// };

// console.log("getObj = ", getObj);

// //=====Задача 2=====
// // чи всі парні числа?
// const arr2 = [2, 4, 6, 8];

// //// Рішення №1, чи всі парні числа

// const q = (arr2) => {
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 !== 0) {
//       return false;
//     }
//     return true;
//   }
// };
// console.log("q = ", q([2, 4, 6, 8]));

// //// Рішення №2 (через every), якщо всі парні числа буде true, інакше false
// const isEvens = arr.every((item) => item % 2 === 0);
// [2, 4, 6, 8].every((item) => item % 2 === 0);

// //// Рішення №3 (через some), що є хоча б одне парне число буде true, інакше false
// const isArrEvens = arr.some((item) => item % 2 === 0);

// //=====Задача 3=====

// const API_URL = "https://jsonplaceholder.typicode.com";
// // - Переноситься в файл (.env)
// let todos = "";

// const getTodos = async () => {
//   try {
//     const responce = await fetch(fetch(`${API_URL}/todos`));
//     console.log("responce = ", await responce);
//     todos = responce.data();
//   } catch (e) {
//     console.log("e =>", e.message);
//   }
// };

// getTodos();

// todos.forEach((todo) => {
//   `<div>${todo.id}</div>`;
// });

// async function getUser() {
//   try {
//     const response = await axios.get("/user?ID=12345");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// //=====Задача 4=====

// const users = [
//   { id: "id1a", name: "Oleg", location: "Michigan" },
//   { id: "id2a", name: "Olga", location: "Alabama" },
//   { id: "id5a", name: "Igor", location: "Michigan" },
//   { id: "id4a", name: "Nata", location: "California" },
// ];

// const online = [
//   { id: "id1a", isOnline: true },
//   { id: "id3a", isOnline: true },
//   { id: "id5a", isOnline: false },
//   { id: "id4a", isOnline: true },
// ];

// // Знайти всії онлайн юзерів, які знаходяться в Michigan
// //// Рішення №1

// const getOnlineUsers = (users, online, location) => {
//   const result = [];
//   const onlineStatuses = online.filter((item) => item.isOnline);
//   const onlySelectedLocation = users.filter(
//     (users) => users.location === location
//   );

//   for (let i = 0; i < onlineStatuses.length; i++) {
//     if (
//       onlineStatuses[i].id === onlySelectedLocation[i].id &&
//       onlineStatuses[i].isOnline
//     ) {
//       result.push(onlySelectedLocation[i]);
//     }
//   }
//   return result;
// };

// console.log("getOnlineUsers = ", getOnlineUsers(users, online, "Michigan"));

////// Рішення №2

// const getOnlineUsers2 = (users, online, location) => {
//   const onlineStatuses = [];

//   online.forEach((user) => {
//     user.isOnline && onlineStatuses.push(user.id);
//   });
//   return users.filter((user) => user.location === location &&  onlineStatuses.includes(user.id))
// };

// console.log("getOnlineUsers = ", getOnlineUsers(users, online, "Michigan"));

// //=====Задача 5=====

// Уявимо масив з числами (можуть бути не тільки числа):
// [1,2,4,0,9,0,8,7,6]

// Ми маємо перенести всі нулі в кінець масиву
// const res = [1, 2, 4, 9, 7, 6, 0, 0];

// Інший приклад:
// [0,4,5,1,0,9,0] => [4,5,1,9,0,0,0]
// [5,7,0,9,8,7,5] => [5,7,9,8,7,5,0]

////// Рішення №1
// const arr = [1, 2, 4, 9, 7, 6, 0, 0];

// const filterArr = (arr, a, b) => {
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];

//     // видаляти, якщо не у вказаному діапазоні
//     if (value < a || value > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   arr.push(0, 0);
// }
// filterArr(arr, 1, 9);

// console.log("arr = ", arr);

////// Рішення №2
// const arr = [5, 7, 0, 9, 8, 7, 5];

// function filterArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0, 0);
//     }
//   }
//   return arr;
// }

// console.log("res = ", filterArr(arr));
