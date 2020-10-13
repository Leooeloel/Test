// yarn ts-node __filename [regex]

import * as fs from "fs";
import { TitleCase } from "./util";

let a: RegExp | string | null = null;
let regex: RegExp | null = null;
if ((a = process.argv[2])) {
    regex = RegExp(a);
}

for (const file of fs.readdirSync("./src/images")) {
    if (file.startsWith(".")) continue;
    if (regex && !regex.test(file)) continue;
    const name = file.split(".")[0];
    let text: string;
    if (file.endsWith(".inline.svg")) {
        text = `import ${TitleCase(name)} from "../images/${file}";`;
    } else {
        text = `import ${name} from "../images/${file}";`;
    }
    console.log(text);
}
