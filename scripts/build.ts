/// <reference types="node" />

import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

await fs.rm("./dist", { recursive: true, force: true });
await fs.mkdir("./dist");

for await (const jamFile of fs.glob("./src/*.json")) {
	const fileContent = await fs.readFile(jamFile, { encoding: "utf-8" });
	await fs.writeFile(
		path.join("dist", path.basename(jamFile).replace(".json", ".min.json")),
		`${JSON.stringify(JSON.parse(fileContent))}${os.EOL}`,
	);
}
