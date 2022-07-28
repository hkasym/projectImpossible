




// const numbers = [1,2,3,4];

// try {
//     const count =countOccurences(null,1);
// console.log(count);
// }
// catch (e){
//     console.log(e.message);
// }

// function countOccurences(array, searchElement){
//     if (!Array.isArray(array)){
//         throw new Error('Value is not an array');
        
//     }
//     return array.reduce((accumulator, current)=>{
//         const occurence = (current===searchElement) ? 1 : 0;
//         return accumulator + occurence;
//     },0);
// }










// const circle = {
//     radius:1,
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     },
// };
// console.log(circle.area);







// function sum(...items){
//     if (items.length ===1 && Array.isArray(items[0]))
//         { items =[...items[0]]}

//     return items.reduce((a,b)=> a+b);
    
// }
//   console.log(sum([1,2,3,4,5,6]));







// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         if(typeof value !== 'string') 
//             throw new Error('Value is not a string.');
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error(' Enter a first and last name');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };
// try{
//     person.fullName = '';
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);
// console.log(person);







// function interest(principal, rate=3.5, years=5){
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));






// function sum(discount, ...prices){
//     const total= prices.reduce((a,b)=>a+b);
//     return total * (1-discount);
// }

// console.log(sum(0.1, 20,30,1));









// function sum(...args){
//     return args.reduce((a,b)=>a+b);

// }

// console.log(sum(1,2,3,4,5,10));






// function sum(){
//     let total=0;
//     for (let value of arguments)
//         total+=value;
//     return total;


// }

// console.log(sum(1,2,3,4,5,10));




// const movies =[
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5},
// ]


// const titles = movies
// .filter(m=> m.year ===2018 && m.rating>=4)
// .sort((a,b)=> a.rating - b.rating)
// .reverse().map(m=>m.title)

// console.log(titles);




// const numbers = [1,2,3,4];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array){
//     if(array.length===0) return undefined;
// ////Simple Way:
//     // let max =0;
//     // for(let element of array){
//     //     if(element>max){
//     //         max = element;
//     //     }
//     // }
//     // return max;
// /////More efficient way:
//     array.reduce((accumulator, current)=>{
//         return (current > accumulator) ? current : accumulator;
//     });
// }
// console.log('hey world');

















// const numbers = [1,2,3,4, 1];

// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array, searchElement){
//     // let count = 0;
//     // for (let element of array){   
//     //     if (element === searchElement)
//     //         count++;
//     // return count;

//     array.reduce((accumulator, current) =>{

//     },0);
// }







// //Moving an element in array, super importan concept, down here, dont miss out

// const numbers = [1,2,3,4];

// const output = move(numbers, 0,2);

// console.log(output);

// function move(array,index, offset){
//     const position = index + offset;
//     if(position >=array.length || position < 0){
//         console.error('Invalid Offset.');
//         return;
//     }



//     const output =[...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index +offset, 0, element);
//     return output;
// }

// //Some important stuff up hereeeeeeeeeeeeeeeeeeeeeeeeeeeeee












// const numbers = [1,2,3,4];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array,excluded){
//     const result = [];
//     for(let element of array){
//         if(!excluded.includes(element)){
//             result.push(element);
//         }
//     }
//     return result;
// }




// const numbers = [1,2,3,4];

// console.log(numbers.includes(1));

// function includes(array, searchElement){
//     for(let element of array){
//         if(element===searchElement){
//             return true;
//         }
//     }
//     return false;
// };

// console.log(includes(numbers, 2));



















// const numbers = arrayFromRange(1,4);

// console.log(numbers);

// function arrayFromRange(min, max){
//     let array =[];
//     for(let i = min; i<=max; i++){
//         array.push(i);

//     } 
//     return array;
// }





// const numbers = [2, 3, 1];
// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);







// //factory function

// let address = createAddress('a', 'b', 'c');
// console.log(address);


// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     };
// }




// //constructor function

// function Address(street, city, zipCode){
//     this.street = street;
//     this.city = street;
//     this.zipCode = zipCode;
// }



// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// function areEqual(address1, address2){
//     return address1.street === address2.street &&
//             address1.city === address2.city &&
//             address1.zipCode === address2.zipCode
    

// }


// function areSame(address1, address2){
//     return address1 === address2;
// }


// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));



// let address = {
//     street : 'Kemine',
//     city: "Mary",
//     zipCode: 745400 
// }

// function showAddress(adress){
    
//     for (let key in adress)
//         console.log(key, adress[key]);
// }

// showAddress(address);



// const numbers = [1,2,3,4,5,6,1,1,1,2,2,2,2]

// const output =except(numbers, [1,2]);

// console.log(output);

// function except (array, excluded){
//     const output = [];

//     for (let element of array){
//         if (!excluded.includes(element))
//         output.push(element);
//     }
//     return output;
// }





// const numbers = [1,2,3,4];

// function includes(array, searchElement){
//     for(let value of array){
//         if (searchElement === value) 
//         return true;
    
//     }
//     return false;
// }

// console.log(includes(numbers, 5));



// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);



// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i=min; i<=max; i++){
//         output.push(i);
//     }
//     return output;
// }








// const numbers = [1,-1,2,3];

// let sum = numbers.reduce(
//     (accumulator, currentValue)=>accumulator + currentValue
//     );

// console.log(sum);







// const numbers = [1,-1,2,3];
// const items =numbers
// .filter(n=> n>=0)
// .map(n=> ({value:n}))
// .filter(obj => obj.value >1)
// .map(obj => obj.value);

// console.log(items);















// const numbers = [1,-1,2,3];
// const filtered = numbers.filter (n => n>=0);
// const items = filtered.map(n=> '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>'
// console.log(html);



// const numbers = [1,-1, 2,3];

// const atLeastOnePositive = numbers.some(function(value){
//     return value>=0;

// });
// console.log(atLeastOnePositive);

















// const courses = [
//     {id:1, name: 'Node.js'},
//     {if:2, name:'javaScript'},
// ];

// courses.sort(function(a, b){
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });


// console.log(courses);









// const numbers =[2,3,1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);




// const numbers =[1,2,3];
// for (let number of numbers)
// console.log(number);


// numbers.forEach ((number,index ) => console.log(index, number));








// const numbers = [1,2,3,4];

// //END
// const last = numbers.pop();
// console.log(last);
// //BEGINNING
// const first = numbers.shift();
// console.log(first);

// //MIDDLE
// numbers.splice (1,2);



// console.log(numbers);




// const courses = [
//     {id:1, name:'a'},
//     {id:2, name:'b'},
// ];
// const course = courses.find(course => course.name ==='a');
// console.log(course);










// const courses = [
//     {id:1, name: 'a'},
//     {id:2, name: 'b'},
// ];
// const course= courses.find(function(course){
//     return course.name ==='a';
// });

// console.log(course);

// const numbers = [1,2,3, 1,4];

// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));


// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));








// const numbers = [3,4];

// //END
// numbers.push(5,6)

// //Beginning
// numbers.unshift(1,2)
// //MIDDLE
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);



// let priceRanges = [
//     {label:'$', toolTip:"Inexpensive", minPerPerson: 0, maxPerPerson:10},
//     {label:'$$', toolTip:"Moderate", minPerPerson: 11, maxPerPerson:20},
//     {label:'$$$', toolTip:"Expensive", minPerPerson: 21, maxPerPerson:50},
// ];
// let restaraunts = [
//     {averagePerPerson: 5},
// ]
   














// let post ={
//     title:'a',
//     body: 'b',
//     author:'c',
//     views: 10,
//     comments: [
//         {author:'a', body:'b'},
//         {author:'c', body:'d'},
//     ],
//     isLive: true

// };
// console.log(post);


// function Post(title, body, author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views =0;
//     this.comments=[];
//     this.isLive=false;
// }
// let post = new Post('a', 'b', 'c');
// console.log(post);







// //Factory Function
// function createAddress(street, city, zipCode){
//    return {
//     street:street,
//     city:city,
//     zipCode:zipCode
// } 

// }

// let anotherAddress= createAddress('a', 'b', 'c');
// console.log(anotherAddress);




// function Address(street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipCode;
// };


// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');
// let address3 = address1;
// function areEqual(address1, address2){
//     return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode

// }

// function areSame(address1, address2){
//     return address1 === address2;


// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address3));










// let address = {
//     street:"Kemine",
//     city:"Mary",
//     zipCode:"745400",
// }

// function showAddress(address){
//     for(let key in address)
//     console.log(key, address[key]);

// }
// showAddress(address);














// const now = new Date()




// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };


// const another = Object.assign({}, circle);

// console.log(another);















// let circle = {
//     radius:1,
//     location: {
//         x:1,
//         y:1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// }









// showPrimes(100);


// function showPrimes(limit){
//     for (num=2; num<=limit; num++) 
//         if (isPrime(num)) console.log(num);
    
// };

// function isPrime(num){
//     let isPrime = true;
//     for (let factor =2; factor<num; factor++)
        
//         if (num % factor ===0)
//         return false;
        

    
//       return true;  
// }








// showStars(2);

// function showStars(rows) {
//     for(let row=1; row <= rows; row++){
//         let pattern = '';
//         for (let i=0; i<row; i++)
//             pattern +='*';
//         console.log(pattern);
//      }
// }


















// const marks = [80, 80, 50];
// console.log(calculateGrade(marks));


// function calculateGrade(marks){
//   const averageNumber =calculateAverage(marks);


//     if (averageNumber <60) return ('F');
//     if (averageNumber<70)return ('D');
//     if (averageNumber<80)return ('C');
//     if (averageNumber<90)return ('B');
//     if (averageNumber<=100)return ('A');
    
// }


// function calculateAverage (array){
//     let sum=0;

//     for(let value of array)
//         sum+=value;

//     return sum / array.length;
// }
























// console.log(sum(10));

// function sum(limit){
//     let sumNumber =0;

//     for(i=0; i<=limit; i++)
//      if (i % 3 === 0 || i % 5 ===0)
//     sumNumber+=i;

//     return sumNumber;
    
// }







// const movie ={
//     tittle: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b',
// }

// showProperties(movie);

// function showProperties(obj) 
// {
//     for(let key in obj) 
//         if (typeof obj[key] === 'string')
//         console.log(key, obj[key]);
// }
    
   















// function countTruthy(array){
//     let number=0;
//     for(let value of array)
//         if (value)
//         number++;
//         return number;
// }

// const array = [0, null, undefined, '', NaN, false, 1, 2, 3];
// console.log(countTruthy(array));





// showNumbers(15);
// function showNumbers(limit){
//     let i=0;
//     while(i<=limit){
//         const OddOrEven = (i%2 ===0) ?'EVEN':'ODD';
//         console.log(i, OddOrEven);
//         i++;
//     };
// }















// checkSpeed(130);


// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint =5;
//     if (speed<speedLimit + kmPerPoint) {
//         console.log("ok");
//         return;}
//     const points = Math.floor((speed - speedLimit)/kmPerPoint);
//     if (points>=12)
//     console.log('Licence Suspended!!!')
//     else
//     console.log('Points: ', points);
// }





// function fizzBuzz(a){
//     if (a%3===0 && a%5!==0) return "Fizz"
//     else if
//      (a%5===0 && a%3!==0) return "Buzz" 
//      else if
//      (a%3===0 && a%5===0) return "FizzBuzz"
//      else if
//      (typeof a !== 'number') return "not a Number"
//      else return a; 
// }
// const output =fizzBuzz('7');
// console.log(output);





// function isLandscape(width, height){
//     return (width>height);
// }
// console.log(isLandscape(800,800));




// function max(a,b){
//         return (a>b) ? a:b;
//     }
// console.log("Max is ", max(4,4))






// function max(a, b){
//     if (a>b)  maxNumber = a;
//     if (b>a)  maxNumber =b;
//     if (a===b) maxNumber = 0;
//     console.log("Max number is ", maxNumber);
// }
// max(25,25);




// let i = 0;

// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }






// for (let i = 1; i<=10; i++){
//     console.log('Hello World!', i);
// }
// for (let i = 1; i<=10; i++){
//     if (i%2 !==0) console.log(i);
// }






// let hour = 19;


// if(6<=hour && hour<12){
//     console.log('Good Morning!');
// } 
// else if(12<=hour && hour<18){
//     console.log('Good afternoon!');
// }
// else 
//     console.log('Good evening!');























// let a = 'red';
// let b = 'blue';

// let c =a;
// a=b;
// b=c;


// console.log(a);
// console.log(b);

















// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);















// pointsOfCustomer = 90;
// typeOfCustomer = pointsOfCustomer >100 ? "gold" : "silver";
// console.log(typeOfCustomer);





// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);



// function square(number) {
//     return number * number;
// }

// console.log(square(2));

// function greet(name, lastName){
//     console.log('Hello ' + name + ' '+ lastName);
// }
// greet('John', 'Snow');



// let interestRate = 0.3;
// interestRate = 1
// console.log(interestRate);
// let person = {
//     contactInfo : {
//         instagramADress : 'hkasym2707',
//         phoneNumber : '+99361828523',
//         emailAdress : "h.kasym2309@gmail.com",
//     },
//     transport : 'skateboard',
//     firstName : 'Kasym',
//     lastName : 'Hojagulyyev',
// };
// console.log(person);



// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// selectedColors[3] = 3;
// console.log(selectedColors.length);
// console.log(selectedColors);


