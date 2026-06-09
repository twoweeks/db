/// <reference types="node" />

import fs from "node:fs/promises";

import z from "zod";

import schema from "../schema.json" with { type: "json" };

const jamValidationSchema = z.fromJSONSchema(schema as any);
let hasValidationError = false;

for await (const jamFile of fs.glob("./src/*.json")) {
	const fileContent = await fs.readFile(jamFile, { encoding: "utf-8" });
	const { success, error } = jamValidationSchema.safeParse(JSON.parse(fileContent));

	if (success) {
		console.log(`Парсинг ${jamFile} успешный`);
	} else {
		hasValidationError = true;
		console.log(`Ошибка парсинга ${jamFile}`);
		console.dir(z.treeifyError(error), { depth: null });
	}
}

if (hasValidationError) {
	process.exitCode = 1;
}
