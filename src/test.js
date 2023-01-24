function* generatorFunction() {
   for (let i = 0; i < 5; i++) {
      yield i
   }
}

const iterable = generatorFunction()

console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
