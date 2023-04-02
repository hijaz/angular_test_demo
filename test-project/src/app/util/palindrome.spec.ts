import { palindrome } from "./palindrome";

describe('palindrome', () => {
    it('Test Passes if the string is a palindrome', async() => {
        await expectAsync(palindrome(`Madam, I'm Adam`)).toBeResolvedTo(true);
    });

    it('test failes if the value is not a string', async() => {
        await expectAsync(palindrome(37)).toBeRejectedWithError(/.+ is not a string/);
    });
});
