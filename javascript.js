debugger
let obj = {a:10,b:20}
let obj2 = Object.create(obj);
// let obj2 = obj;
console.log(obj);
console.log(obj2.a);
obj.a = 40;
console.log(obj2.a);