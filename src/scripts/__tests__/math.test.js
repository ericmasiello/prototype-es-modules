import { it, expect } from 'vitest';
import { add } from '../math';

it('should add two numbers', () => {
    expect(add(4, 5)).toBe(9);
})