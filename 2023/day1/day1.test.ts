import { expect, test } from "bun:test";
import { solution } from "./day1";

test("simpler case", () => {
  expect(solution(`treb7uchet`)).toBe(77);
});

test("simple initial case", () => {
  expect(solution(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`)).toBe(142);
});
