

function makeStudentsReport(data) {
    // your code here
  const result = [];
  for(let i=0; i<data.length; i++){
   let info = data[i]
   result.push(`${info.name}: ${info.grade}`)
     
  }  
  return result
}

// //makeStudentReport that takes a single argument, data. data is an array of objects. 
// Each object in the array represents a student and their letter grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

// makeStudentReport should return an array of strings. For each item in data, return a string that looks like this: '[name]: [grade]'. 
// The name and grade values on the student object should be substituted in.