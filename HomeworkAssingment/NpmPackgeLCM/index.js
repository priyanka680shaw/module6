// index.js

/**
 * Calculate the greatest common divisor (GCD) of two numbers.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

/**
 * Calculate the least common multiple (LCM) of two numbers.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function lcm(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    return Math.abs(a * b) / gcd(a, b);
}

module.exports = lcm;
