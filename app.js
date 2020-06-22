//CHAPTER 21-25
//TASK 1
// var firstName=prompt("Enter you first name");
// var lastName=prompt("Enter your last name");
// var fullname=firstName+" "+lastName;
// alert("Welcome"+" "+fullname);

//TASK 2

// var phone=prompt("Enter your favourite phone name")
// var n=phone.length;
// document.write("My favourite phone is: "+phone+"<br>"+"Length of string: "+n);

//TASK 3
// var str="Pakistani";
// var n=str.indexOf("n");
// document.write("String: "+str+"<br>"+"Index of n : "+n);

//TASK 4

// var str="Hello World";
// var n=str.lastIndexOf("l");
// document.write("String: "+str+"<br>"+"Last index of l : "+n);

//TASK 5

// var str="Pakistani";
// var n=str.charAt(3);
// document.write("String: "+str+"<br>"+"Character at index 3 : "+n);

//TASK 6

// var firstName=prompt("Enter you first name");
// var lastName=prompt("Enter your last name");
// var resut=firstName.concat(" ",lastName);
// alert("Welcome "+result);

//TASK 7
// var str1="Hyderabad";
// var n=str1.replace("Hyder","Islam");
// document.write("City: "+str1+"<br>"+"After replacement : "+n);

//TASK 8

// var str1="Ali and Sami are best friends. They play cricket and football together.";
// var n=str1.replaceAll("and","&");
// document.write("Message: "+str1+"<br>"+"After replacement : "+n);

//TASK 9

// var str="472";
// var str2=parseInt(str);
// document.write("Value: "+str+"<br>"+"Type: "+typeof(str)+"<br>"+"Value: "+str2+"<br>"+"Type: "+typeof(str2));

//TASK 10
// var str=prompt("Insert String:");
// var res=str.toUpperCase();
// document.write("User input: "+str+"<br>"+"Upper Case: "+res);

//TASK 11

// function Titlecase(){
//     var str=prompt("Enter String: ")
//     var words=str.toLowerCase().split(" ");
//     for (var i=0; i<words.length; i++){
//         words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//     }
//     document.write(words.join(" "));

// }

//TASK 12

// var str=35.36;
// var str2= str.toString().replace(".", "")
// document.write("Number: "+str+"<br>"+"Result: "+str2);


//TASK 13

// var username=prompt("Enter Username: ");

// for (var i=0 ; i <username.length ; i++){
//     if (username[i] == "!" || username[i]=="." || username[i]=="@" || username[i]==","){
//         alert("Enter a valid username");    
//     }
// }

//TASK 14
// var arr=["cake","apple pie","cookie","chips", "patties"]
// var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var res=search.toLowerCase();
// for(var i=0 ; i < arr.length ; i++){
//     if (arr[i]===res){
//         alert(arr[i]+" is available at index "+arr.indexOf(arr[i])+" in our bakery")
    
//     }

// }


//TASK 16
// var str="University of Karachi";
// var result=str.split("<br>")
// document.write(result)

//TASK 17 
// var user=prompt("Enter input")
// var n=user.charAt(user.length-1)
// document.write("User input: "+user+"<br>"+"Last charcter of input: "+n);

//TASK 18
// function char_count(str, varter) 
// {
//  var varter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == varter) 
//       {
//       varter_Count += 1;
//       }
//   }
//   return varter_Count;
// }

// document.write("Text: "+"the quick brown fox jumps over the lazy dog"+"<br>"+"There are "+char_count ("the quick brown fox jumps over the lazy dog", "the")+" occurences of word the");



//CHAPTER 26-30
//TASK 1
// var number = +(prompt("Enter any postive integer"));
// document.write("number: " + number + "<br>");
// var round = Math.round(number);
// document.write("round off value of: " + round + "<br>");
// var floor = Math.floor(number);
// document.write("floor value of: " + floor + "<br>");
// var ceil = Math.ceil(number);
// document.write("ceil value of: " + ceil);

// TASK 2
// var number = +(prompt("Enter any negative floating point"));
// document.write("number: " + number + "<br>");
// var round = Math.round(number);
// document.write("round off value of: " + round + "<br>");
// var floor = Math.floor(number);
// document.write("floor value of: " + floor + "<br>");
// var ceil = Math.ceil(number);
// document.write("ceil value of: " + ceil);

// TASK 3
// var number = +(prompt("Enter any value to find absolute value"));
// var absolute = Math.abs(number);
// document.write("absolute value of " + number + " is " + absolute);

// TASK 4
// var dice = (Math.random()) * 7
// var value = Math.floor(dice)
// document.write('random dice value: ' + value);

// TASK 5
// var tail = 1;
// var head = 2;
// var numberGenerate = (Math.random()) * 3;
// var coinToss = Math.floor(numberGenerate);
// if (coinToss == 1) {
//     document.write(tail + "<br>random coin value: Tail");
// } else if (coinToss == 2) {
//     document.write(head + "<br>random coin value: Head");
// } else {
//     document.write("Coin has vanished in System ☺");
// }

// TASK 6
// var number = (Math.random()) * 101;
// var floor = Math.floor(number);
// document.write("Random number between 1 and 100: " + floor);

// TASK 7
// var weight = prompt("Enter your weight in kg");
// document.write("The weight of user is: " + weight);

// TASK 8
// var secretNumber = 7;
// for (var i = 1; i > 0; i++) {
//     var userGuess = +(prompt("Enter a number from 1 to 10"));
//     if (userGuess === secretNumber) {
//         alert("Congratulation");
//         break;
//     } else {
//         alert("Try Again");
//     }
// }



//CHAPTER 31-34
//TASK 1
// var dte = new Date();
// document.write(dte);

// TASK 2
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var dte = new Date();
// var n = month[dte.getMonth()];
// document.write(n);

// TASK 3
// var dte = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[dte.getDay()];
// document.write(n); 

// TASK 4
// var dte = new Date();
// var day = dte.getDay();
// if (day == 6 || day == 7) {
//     document.write("It's Fun Day, Day is " + day);
// } else {
//     document.write("Day is " + day);
// }

// TASK 5
// var dte = new Date();
// var day = dte.getDate();
// if (day < 16) {
//     document.write("First Fifteen Day Of The Month");
// } else {
//     document.write("Last days of the month ");
// }

// TASK 6
// var date = new Date();
// document.write("Current Date: " + date + "<br>");
// var milliSeconds = date.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>");
// var minutes = milliSeconds / (1000 * 60 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + minutes);

// TASK 7
// var dte = new Date();
// var hour = dte.getHours();
// if (hour <= 12) {
//     document.write("It's AM" + hour);
// } else {
//     document.write("It's PM" + hour);
// }

// TASK 8
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var lastDay = new Date(y + 1, 0, 0);
// document.write(lastDay);

// TASK 9
// var today = new Date();
// var RamzanDay = new Date("June 18, 2015");

// var sToday = today.getTime();
// var msRamzanDay = RamzanDay.getTime();

// var sDiff = sToday - msRamzanDay;
// var dDiff = sDiff / (1000 * 60 * 60 * 24);

// dDiff = Math.floor(dDiff);
// document.write(dDiff + " days have passed since 1st Ramadan, 2015");

// TASK 10
// var today = new Date();
// var RamzanDay = new Date("June 18, 2015");

// var sToday = today.getTime();
// var msRamzanDay = RamzanDay.getTime();

// var dDiff = sToday - msRamzanDay;

// dDiff = Math.floor(dDiff);
// document.write("On Reference Date " + RamzanDay + "<br>" + dDiff + " Seconds had passed since beginning of 2015");

// TASK 11
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth(),
//     h = date.getHours();
// var datee = new Date();
// var lastDay = new Date(y, m + 1, 0, h - 1);
// document.write("Current Date: " + datee + "<br>1 Hour Ago, it was " + lastDay);

// TASK 12
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var datee = new Date();
// var lastDay = new Date(y - 100, m + 1, 0);
// alert("Current Date: " + datee + "\n100 Year Back, it was " + lastDay);

// TASK 13
// var age = prompt("Enter Your Age");
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var datee = new Date();
// var lastDay = new Date(y - age, m + 1, 0);
// alert("Your Age is : " + age + "\nYour Birth Year is: " + lastDay);

// TASK 14
// var customerName = prompt("Enter Customer Name");
// var date = new Date();
// var currentMonth = date.getMonth();
// var units = +prompt("Enter Units");
// var perUnits = +prompt("Enter Per Units Charges");
// var inDueDate = Math.floor(units * perUnits);
// var latePayment = 350;
// var grossAmount = inDueDate + latePayment;

// document.write("Customer Name: " + customerName + "<br>Month: " + currentMonth + "<br>Number of Units: " + units + "<br>Charges Per Unit: " + perUnits + "<br><br>Net Amount Payable (within Due Date): " + inDueDate + "<br>Late payment surcharge: " + latePayment + "<br>Gross Amount Payable (after Due Date): " + grossAmount);



//CHAPTER 35-38
//TASK 1
// function date() {
//     document.write(new Date());
// }

// date();
// // TASK 2
// function greet(firstName, lastName) {
//     firstName = firstName.toUpperCase()
//     lastName = lastName.toUpperCase()
//     document.write("Hello " + firstName + " " + lastName + "!");
// }
// greet(prompt("Enter your first name"), prompt("Enter your last name"));

// TASK 3
// var sum;
// function add(firstNum, secondNum) {
//     document.write("First Number is : " + firstNum + "<br>")
//     document.write("Second Number is : " + secondNum + "<br>")
//     sum = firstNum + secondNum
//     document.write("Sum: " + sum);
// }
// add(+prompt("Enter first number"), +prompt("Enter second number"));

// TASK 4
// function calculator(num1, operator, num2) {
//     switch (operator) {
//         case "+":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);
//             break;
//         case "-":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);
//             break;
//         case "*":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);
//             break;
//         case "/":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);
//             break;
//         case "%":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);
//             break;
//         default:
//             return document.write("Grr an error accurred")
//         }
// }
// calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// TASK 5
// function square(arg) {
//     document.write("Input is: " + arg + "<br>")
//     document.write("Square is: " + arg * arg);
// }
// square(+prompt("Enter number for square"));

// TASK 6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }else {
//         return num * factorial(num-1);
//     }
// }
// var num = +prompt("Enter Number for factorial");
// var answer = factorial(num);
// document.write("The factorial of " + num + " is " + answer);

// TASK 7
// function counting(num1, num2) {
// document.write("Starting number is: " + num1 + "<br>")
// document.write("Ending number is: " + num2 + "<br>")
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// TASK 8
// function hypo(base, perpendicular) {
//     function square(v1, v2) {
//         document.write("First value is: " + v1 + "<br>");
//         var v1Square = v1*v1;
//         document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
//         document.write("Second value is: " + v2 + "<br>");
//         var v2Square = v2*v2;
//         document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
//         var sqrt = v1*v1 + v2*v2;
//         document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
//     }
//     square(base, perpendicular)
//     document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
// }
// hypo(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// TASK 9
// var height = 5;
// function area(width, height) {
//     document.write("Area of a rectangle is: " + width * height);
// }
// area(10, height);

// TASK 10
// function palin(word) {
//     var reverse = word.split("").reverse().join("");
//     switch (word) {
//         case reverse:
//             return document.write(word + " and " + reverse + " is same so this is a Palindrome word");
//         default:
//             return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");
//     }
// }
// palin(prompt("Enter word"));

// TASK 11
// function titleCase(string) {
//     string = string.split(" ");
//     for (var i = 0; i < string.length; i++) {
//         var firstLetter = string[i].slice(0, 1);
//         firstLetter = firstLetter.toUpperCase();
//         var otherLetters = string[i].slice(1);
//         otherLetters = otherLetters.toLowerCase();
//         var result = firstLetter + otherLetters;
//         document.write(result + " ");
//     }
//      var capitalized = string.replace("the", "The").replace("quick", "Quick").replace("brown", "Brown").replace("fox", "Fox");
//     document.write(capitalized);
// }
// titleCase("the quick brown fox" + "<br>");
// titleCase(prompt("Enter some text"));

// TASK 12
// function longestWord(word) {
//   word = word.split(" ");
//   var result = word[0];
//   for(var i = 1 ; i < word.length ; i++) {
//     if(result.length < word[i].length) {
//     result = word[i];
//     } 
//   }
//   return document.write(result);
// }
// longestWord('Web Development Tutorial');

// TASK 13
// function check(string, letter) {
//     var lett = letter;
//     string = string.toLowerCase();
//     letter = string.match(/s/g).length;
//     document.write("There are " + letter + " occurence(s) of word " + '"' + letter + '"');
// }
// check("JSResourceS.com", "s")

// TASK 14
// document.write("<h1>The Geometrizer</h1> <br>")
// function calcCircumference(radius) {
//     var circumference = 2 * 3.142 * radius
//     document.write("The circumference is " + circumference.toFixed(3) + "<br>");
//     function calcArea(radius) {
//         radius = radius * radius
//         var area = 3.142 * radius;
//         document.write("The area is " + area);
//     }
//     calcArea(20);
// }
// calcCircumference(20);