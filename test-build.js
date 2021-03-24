const assert = require("assert");
const ucc2stl = require("./dist");
const c = new ucc2stl.Point(Math.random(), Math.random(), Math.random());
const d = new ucc2stl.Point(Math.random(), Math.random(), Math.random());
const e = c.subtract(d);
const f = d.subtract(c);
assert.deepStrictEqual(c.add(e).equals(d), true);
assert.deepStrictEqual(d.add(f).equals(c), true);
