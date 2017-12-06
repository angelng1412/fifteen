function fibonacci(n) {
    if (n == 1) {
	return 0; }
    else if (n == 2) {
	return 1; }
    else {
	return fibonacci(n - 1) + fibonacci(n - 2); }
}

/*console.log(fibonacci(8));
console.log(fibonacci(1));
console.log(fibonacci(2)); */

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
	return gcd(b, a);
    }
    if (a % b == 0) {
	return b;
    }
    else {
	return gcd(a, a%b)
    }
}

/*console.log(gcd(24, 6));
console.log(gcd(24, 16));
console.log(gcd(16, 24));
console.log(gcd(11, 23)); */


var students = ["Finn", "Jake", "Marceline", "Bonnibel", "Simon", "Beemo", "Fiona"] 

function randomStudent() {
    index =  Math.floor(Math.random() * students.length)
    return students[index]
} 

for (i = 0; i < 10; i++) {
    console.log(randomStudent());
}
