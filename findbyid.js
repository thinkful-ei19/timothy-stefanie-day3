const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
    // your code here
    for(let i=0; i<items.length; i++){
        if(items[i].id === idNum){
             return items[i] ;
         }
    }
    
  }
  console.log(findById(scratchData, 28)); 