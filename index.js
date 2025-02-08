// function comp(str1, str2) {
//     return str1.length === str2.length;
//   }

// function func1(a,b,c,d) {
//     for(let i=a; i<=b; i--){
//         if (a>b && c<b && d<b) {

//     }
//         if (i == c || i == d) {
//             continue;
//         } else {
//             console.log(i);
//         }    

//     } else {
//             alert("Числа не в заданном промежутке")
//             break;
//         }
//     }

// func1(0,-10,-5,-9)

// for (let i = 1; i <= 9; i++) {
//     let line = '';
//     for (let j = 9; j > i; j--) {
//         line += ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//         line += ' *';
//     }
//     console.log(line);
// }

// function createDiv(className) {
//     let div = document.createElement('div');
//     div.className = className;
//     return div;
// }


// function newFunction() {
//     let block = document.getElementById('block');
//     block.onmouseenter = () => block.style.background = 'lightblue';
//     block.onmouseleave = () => block.style.background = 'blue';
//     block.onclick = () => block.style.background = 'black';
//     document.onkeydown = () => block.remove();
// }

// function changeImage() {
//     let selectElement = document.getElementById('carSelect');
//     let imgElement = document.getElementById('carImage');
//     let selectedValue = selectElement.value;
// }

// let select = document.createElement("select");
// let option1 = document.createElement("option");
// let option2 = document.createElement("option");
// let option3 = document.createElement("option");
// option1.value = "merc"
// option2.value = "bmw"
// option3.value = "audi"
// option1.innerHTML = "merc"
// option2.innerHTML = "bmw"
// option3.innerHTML = "audi"
// select.append(option1)
// select.append(option2)
// select.append(option3)
// document.body.append(select)

// let img = document.createElement("img")
// if (select.value == "merc") {
//     img.src = "https://restylingcar.com/wp-content/uploads/2021/01/2012-mercedes-benz-cls-class-cls-63-amg-1.jpg";
// }
// else if (select.value == "bmw") {
//     img.src = "https://cdn.prod.website-files.com/5b4a3b3971d099f78f362505/66af6120693399c32d65f56e_2019-BMW-M5-Competition%20Sedan-Frozen%20Dark%20Silver%20Metallic-WBSJF0C58KB285881_011.webp";
// }
// else if (select.value == "audi") {
//     img.src = "https://cdn.arstechnica.net/wp-content/uploads/2024/09/2024-Audi-RS7-1-scaled.jpg"
// }
// document.body.append(img);

// let button1 = document.createElement("button")
// let button2 = document.createElement("button")
// let button3 = document.createElement("button")

// button1.id = "button"
// button2.id = "button"
// button3.id = "button"

// Function to handle file input

// let count = 0;

// while (count < 64)
//     {

//     if (count % 2 == 0)
//         {
//         if (count % 8 == 0 && count !=0)
//             {
//             document.write('<br/><div style="background-color:#000000;float:left;">&nbsp</div>');
//             }
//         else    
//             {
//             document.write('<div style="background-color:#000000;float:left;">&nbsp</div>');    
//             }
//         }
//     else
//         {
//         document.write('<div style="background-color:#FFFFFF;float:left;">&nbsp</div>');
//         }     
//     count++;
//     }

// function changeText() {
//     let first = document.querySelector('h1');
//     first.textContent = 'Добро пожаловать в мир JavaScript';

//     let second = document.querySelector('p');
//     second.textContent = 'Текст был изменен!';
// }

// let button = document.createElement('button');
// button.textContent = 'Добавить новый элемент';
// document.body.append(button)

// button.addEventListener('click', function () {
//     let div1 = document.createElement('div');
//     div1.textContent = 'Это новый элемент';

//     div1.addEventListener('click', function () {
//         div1.remove();
//     })
//     document.body.append(div1)
// });

// function openNewTab() {
//     let newPageUrl = 'newpage.html';
//     let newTab = window.open(newPageUrl);

//     if (newTab) {
//         console.log("Новая вкладка открыта: " + newPageUrl);
//     } else {
//         console.log("Не удалось открыть новую вкладку. Возможно, блокировщик всплывающих окон.");
//     }
// }

// function closeCurrentTab() {
//     window.close();
//     console.log("Текущая вкладка закрыта.");
// }

// console.log("Ширина окна браузера: " + window.innerWidth + " пикселей");
// console.log("Высота окна браузера: " + window.innerHeight + " пикселей");


document.getElementById('Button').addEventListener('click', function() {
    let first = document.querySelector('.first');
    first.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

