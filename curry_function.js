function curry(fn) {

    return function curried(...args) {

        if (args.length >= fn.length) {

            return fn.apply(this, args);
        } else {

            return function(...moreArgs) {

                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); 
console.log(curriedAdd(5)(7)); 
console.log(curriedAdd(10, 15)); 
