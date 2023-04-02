// string is mirror image or not

// wow is a palindrome
// abcde is not a palindrome
// xyzszyx is a palindrome


export async function palindrome(value: string | number) {
    if (typeof value !== 'string') {
        throw new Error(`${value} is not a string`);
    }
    let chars = value.toLowerCase().replace(/[^a-z]+/g, '');
    return [...chars].reverse().join('') === chars;
}
