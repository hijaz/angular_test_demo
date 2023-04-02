import { Add } from "./addition";

it('should add numbers correctly', () =>{
    expect(Add(10,20)).toBe(30);
});

it('This Matcher is toEqual', () =>{
    expect(Add(10,20)).toEqual(30);
});

it('This Matcher is toBeGreaterThan', () =>{
    expect(Add(10,20)).toBeGreaterThan(10);
});

it('toBeLessThan check success', () => {
    expect(Add(2, 0)).toBeLessThan(25);
});


