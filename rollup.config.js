import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import minify from "rollup-plugin-babel-minify";
import nodePolyfills from "rollup-plugin-node-polyfills";
import pkg from "./package.json";

export default [
  {
    input: "dist/index.js",
    output: {
      name: "ucc2stl",
      file: pkg.browser,
      format: "iife",
      sourcemap: "inline",
      // globals: { nlapack: "nlapack", nblas: "nblas" },
      exports: "named",
    },
    // external: ["nlapack", "nblas"],
    plugins: [
      nodePolyfills(),
      resolve(),
      commonjs(),
      minify({ comments: false }),
    ],
  },
];
