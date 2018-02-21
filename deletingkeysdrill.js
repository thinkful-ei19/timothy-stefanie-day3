'use strict'

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}
  
var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
}; 