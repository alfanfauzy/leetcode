function isPalindrome(x: number): boolean {
    if( x < 0) return false

    const numToStr = x.toString();
    const reverse = numToStr.split('').reverse().join('');

    return numToStr === reverse
};