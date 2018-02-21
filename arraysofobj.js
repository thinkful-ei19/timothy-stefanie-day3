const obj1 = {
 name: "tim",
 jobTitle: "student"
}
const obj2 = {
 name: "stefanie",
 jobTitle: "google programmer"
}
const obj3 = {
    name: "Tom",
    jobTitle: "barista"
}
const arrOfObj = [obj1, obj2, obj3];


// for(let prop1 of arrOfObj){ 
//     console.log(prop1)};

for(let i=0; i<arrOfObj.length; i++){
 console.log(arrOfObj[i].name +" : "+ arrOfObj[i].jobTitle)
}
