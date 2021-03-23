import { Point } from "../src";
describe("test Point class", () => {
  const p1 = new Point([1, 2, 3]);
  const p2 = new Point([1, 2, 1]);
  const p3 = new Point([0, 2, 3]);
  const p4 = new Point([1, 0, 3]);
  it("Point(1,2,3).toString() should be 'Point(1,2,3)'", () => {
    expect(p1.toString()).toStrictEqual("Point(1,2,3)");
  });
  it(`${p1.toString()} should be bigger than ${p2.toString()}`, () => {
    expect(p1.isGreaterThan(p2)).toBe(true);
  });
  it(`${p2.toString()} should be less than ${p1.toString()}`, () => {
    expect(p2.isLessThan(p1)).toBe(true);
  });
  it(`${p3.toString()} should be less than ${p1.toString()}`, () => {
    expect(p3.isLessThan(p1)).toBe(true);
  });
  it(`${p4.toString()} should be less than ${p1.toString()}`, () => {
    expect(p4.isLessThan(p1)).toBe(true);
  });
  it(`${p2.toString()} should be less than ${p1.toString()}`, () => {
    expect(p2.isLessThanOrEqual(p1)).toBe(true);
  });
  it(`${p3.toString()} should be less than ${p1.toString()}`, () => {
    expect(p3.isLessThanOrEqual(p1)).toBe(true);
  });
  it(`${p4.toString()} should be less than ${p1.toString()}`, () => {
    expect(p4.isLessThanOrEqual(p1)).toBe(true);
  });
  const c = new Point([Math.random(), Math.random(), Math.random()]);
  const d = new Point([Math.random(), Math.random(), Math.random()]);
  const e = c.subtract(d);
  const f = d.subtract(c);
  it("c + e shoud give d", () => {
    expect(c.add(e).equals(d)).toBe(true);
  });
  it("d + f should give c", () => {
    expect(d.add(f).equals(c)).toBe(true);
  });
});
