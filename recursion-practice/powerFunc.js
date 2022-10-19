function power(num, exp) {
    if (exp == 0) return 1;
    return num * power(num, exp - 1);
}

const ans = power(2, 2);
console.log(ans);