import { Vector } from "../src";

describe("Tests for Vector class", () => {
  const v1 = new Vector(1, 2, 3);
  it("Vector(1,2,3).x should be 1", () => {
    expect(v1.x).toStrictEqual(1);
  });
  it("Vector(1,2,3).y should be 2", () => {
    expect(v1.y).toStrictEqual(2);
  });
  it("Vector(1,2,3).z should be 3", () => {
    expect(v1.z).toStrictEqual(3);
  });
  it("Vector(1,2,3).toString() should be 'Vector(1,2,3)'", () => {
    expect(v1.toString()).toStrictEqual("Vector(1,2,3)");
  });
  const v2 = new Vector(Math.random(), Math.random(), Math.random());
  it(`${v2} should be equal to ${v2}`, () => {
    expect(v2.equals(v2)).toBeTruthy();
  });
  const v3 = new Vector(1, 2, 3);
  const v4 = new Vector(4, 5, 6);
  const v5 = new Vector(-3, 6, -3);
  const v6 = new Vector(3, -6, 3);

  it(`${v3}.cross(${v4}) should be Vector(-3,6,-3)`, () => {
    expect(v3.cross(v4).equals(v5)).toBeTruthy();
  });
  it(`${v4}.cross(${v3}) should be Vector(3,-6,3)`, () => {
    expect(v4.cross(v3).equals(v6)).toBeTruthy();
  });
});
