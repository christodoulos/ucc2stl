import { CuboidComplex, dense_cuboids } from "ucc2stl";

const cuboids = dense_cuboids(
  "node.txt",
  "connectivity.txt",
  "density.txt",
  0.3
);
console.log("Building a new cuboid complex...");
const complex = new CuboidComplex(cuboids);
console.log(`Done. There are ${complex.cuboids.size} "dense" cuboids.`);
console.log("Starting outer shell caclulations ...");
complex.shell();
console.log(
  `Done. There are ${complex.vertices.size} vertices and ${complex.triangles.length} triangles.`
);
