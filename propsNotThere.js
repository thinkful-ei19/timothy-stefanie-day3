'use strict';

const obj1 = {
  name: 'tim',
  jobTitle: 'student',
  boss: 'Rich'

};
const obj2 = {
  name: 'stefanie',
  jobTitle: 'google programmer',
  boss: 'Jeff'
};
const obj3 = {
  name: 'Tom',
  jobTitle: 'barista'
};
const arrOfObj = [obj1, obj2, obj3];

//console.log(object1.hasOwnProperty('property1'));
   
//"${title} ${name} reports to ${boss}."
// "${title} ${name} doesn't report to anybody."
// for(let prop1 of arrOfObj){ 
//     console.log(prop1)};
   
let propsNotThere = function() {
  for(let i=0; i<arrOfObj.length; i++){
    if (arrOfObj[i].hasOwnProperty('boss')) {
      console.log(`${arrOfObj[i].jobTitle} ${arrOfObj[i].name} reports to ${arrOfObj[i].boss}.`);
    } 
    else {
      console.log(`${arrOfObj[i].jobTitle} ${arrOfObj[i].name} doesn't report to anybody.`);
    }
  }
};

propsNotThere();

