function fibrc(n, res1, res2){
    if (n == 0)
        return res2;
    else
        if (n == 1)
            return res2;
        else
            return fibrc(n - 1, res2, res1 + res2);
}

tail_fib = (n) => fibrc(n, 0, 1);

module.exports = tail_fib