let person = {
    name: 'Yuuto'
}

for (let key in person){
    console.log(key);
}




















// function Stopwatch(){
//     let startTime, endTime, running, duration = 0;

//     this.start = function(){
//         if (running)
//             throw new Error('Stopwatch has already started');

//         running = true;

//         startTime= new Date();

//     };

//     this.stop = function(){
//         if(!running)
//             throw new Error('Stop watch has already stopped');

//         running=false;
//         endTime= new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) /1000;

//         duration+=seconds;

//     };

//     this.reset = function(){
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = false;

//     };

//     Object.defineProperty(this, 'duration',{
//         get: function(){return duration}
//     });

// }










// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation ={x:0,y:0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     }

//     let computeOptimumLocation = function(){
//         //
//     };
//     this.draw=function(){
//         computeOptimumLocation(0.1);
//         console.log(draw);
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value){
//             if (!value.x || !value.y)
//                 throw new Error('Invalid Location');
//             defaultLocation=value;

//         }
//     });
// }

// const circle = new Circle(10);

// for (let key in circle){
//     if (typeof circle[key]!=='function') 
//         console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);


// circle.defaultLocation = {x:1, y:1};

// console.log(circle.defaultLocation)
// console.log(keys);



// if ('radius' in circle)
//     console.log('Circle has a radius');









// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }


// const circle = new Circle(10);


// circle.location={x:1};















// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }


// const another = new Circle(1);



// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         },
//     }
// }

// let circle = createCircle();

// circle.draw();


// console.log('oop');