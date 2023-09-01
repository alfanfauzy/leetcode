function isPalindrome(s: string): boolean {
    if(s === '') return true

    const smallString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseString = smallString.split('').reverse().join('')

    return smallString === reverseString
};