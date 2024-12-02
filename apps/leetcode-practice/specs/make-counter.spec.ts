import { makeCounter, makeCounter2 } from '../src/app/lib/make-counter/solution';

describe('makeCounter', () => {
    describe('Solution 1: Basic Implementation', () => {
        it('should start from 0 when no initial value is provided', () => {
            const counter = makeCounter();
            expect(counter()).toBe(0);
            expect(counter()).toBe(1);
            expect(counter()).toBe(2);
        });

        it('should start from the provided initial value', () => {
            const counter = makeCounter(5);
            expect(counter()).toBe(5);
            expect(counter()).toBe(6);
            expect(counter()).toBe(7);
        });

        it('should maintain separate states for different counters', () => {
            const counter1 = makeCounter(1);
            const counter2 = makeCounter(10);

            expect(counter1()).toBe(1);
            expect(counter2()).toBe(10);
            expect(counter1()).toBe(2);
            expect(counter2()).toBe(11);
        });

        it('should handle negative initial values', () => {
            const counter = makeCounter(-3);
            expect(counter()).toBe(-3);
            expect(counter()).toBe(-2);
            expect(counter()).toBe(-1);
        });
    });

    describe('Solution 2: Concise Implementation', () => {
        it('should start from 0 when no initial value is provided', () => {
            const counter = makeCounter2();
            expect(counter()).toBe(0);
            expect(counter()).toBe(1);
            expect(counter()).toBe(2);
        });

        it('should start from the provided initial value', () => {
            const counter = makeCounter2(5);
            expect(counter()).toBe(5);
            expect(counter()).toBe(6);
            expect(counter()).toBe(7);
        });

        it('should maintain separate states for different counters', () => {
            const counter1 = makeCounter2(1);
            const counter2 = makeCounter2(10);

            expect(counter1()).toBe(1);
            expect(counter2()).toBe(10);
            expect(counter1()).toBe(2);
            expect(counter2()).toBe(11);
        });

        it('should handle negative initial values', () => {
            const counter = makeCounter2(-3);
            expect(counter()).toBe(-3);
            expect(counter()).toBe(-2);
            expect(counter()).toBe(-1);
        });
    });
}); 