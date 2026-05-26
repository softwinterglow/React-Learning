// i just did revision of these topics for react
// its been long without trying js


// let state = [1,2,3,4,5]
// let copy = [...state]
// copy.pop()

// console.log(state)
// console.log(copy)




// // objects
// let user ={
//     name:"eren",
//     age:20
// }
// user.name ="armin"
// console.log(user) //now i cannot directly change its value in react so we create a copy
// let user2 = {...user}
// user2.name = "mikasa"
// user = user2

// console.log(user)

// // now i cannot directly change va



// // destructring
// // array destructring
// let nums =[1,2,3,4,5,6,7]
// let [a,b,c,d,...e] = nums;

// console.log(nums[1]) // now instead of doing this i can destructure


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)



// let obj = {
//     name:"paimon",
//     age:17,
//     game:{
//         name:"genshin impact",
//         type:"open world exploration"

//     },
//     friends:["nana","rath","ellie"]

// }
// // console.log(obj)

// let {name,age, game:{name:gameName,type},friends:[f1,f2,f3]} = obj;
// console.log(name)
// console.log(age)
// console.log(gameName)
// console.log(type)
// console.log(f1)



// // destructring individually by copilot

// let obj = {
//     name: "paimon",
//     age: 17,
//     game: {
//         name: "genshin impact",
//         type: "open world exploration"
//     },
//     friends: ["nana", "rath", "ellie"]
// };

// // // Step 1: destructure main object
// let { name, age, game, friends } = obj;

// // // Step 2: destructure nested values
// let { name: gameName, type } = game;
// let [f1, f2, f3] = friends;

// // // Output
// console.log(name);        // paimon
// console.log(age);         // 17

// console.log(game);        // full game object
// console.log(game.name);   // genshin impact
// console.log(game.type);   // open world exploration

// console.log(friends);     // full array
// console.log(f1);          // nana
// console.log(f2);          // rath
// console.log(f3);          // ellie



// const greet = function(){
//     console.log("hello")
// } 

// function sayHello(fn){
//      fn()
// }

// sayHello(greet)



// //  Map filter



// let numbers = [2,3,4,5,6,7,8]

// let result = numbers.map(n => n*2)
// console.log(result)


let elem = [3,6,4,12,90,100,2]

let elemRes = elem.map(elem=> elem>5? elem+2:elem)
elem = elemRes
console.log(elem)




//// filters

let arrs = [2,4,6,8,10,12,14,16,18,20]

let arrFilter = arrs.filter(elem => elem>10)
arrs = arrFilter;
console.log(arrs)



let peoples =[{
    name:"annie",
    gender :"female"
    },
      {
     name :"hughie",
    gender :"male",
    },
    {
    name : "A-train",
    gender : "male"
    }

]


peoplesFilters = peoples.filter(elem => elem.gender ==="male")
console.log(peoplesFilters)