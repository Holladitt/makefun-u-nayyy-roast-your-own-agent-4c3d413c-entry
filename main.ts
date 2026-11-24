import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Told to copy the winner 99%, my agent shipped eight versions of itself and called it iteration.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
