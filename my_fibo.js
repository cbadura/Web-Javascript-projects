function my_fibonacci(el) {

    function fibonacci(nbrs) {
        if(nbrs <= 1) return 1;

        let fib = [0, 1];
        let data = [];
        
        for(let i = 2; i <= nbrs; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]; 
            data.push(fib[i]);
        }
        
        return data;
    }

    fiboArr = fibonacci(el);

    return fiboArr[fiboArr.length - 1]
}

console.log(my_fibonacci(6))
