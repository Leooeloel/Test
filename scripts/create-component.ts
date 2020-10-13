// yarn ts-node __filename Header vw

import * as fs from "fs";
import * as path from "path";
import { slug_case, TitleCase } from "./util";

if (process.argv.length <= 2) {
    console.log(`usage:
    ${path.basename(__filename)} Counter [vwfn]
    
    v = verbose
    w = write
    f = force
    n = no multi lang`);
    process.exit();
}

const name = process.argv[2];
const componentName = TitleCase(name);
const filename = slug_case(name);
const args = process.argv[3] ?? "";
const is_verbose = args.includes("v");
const is_write = args.includes("w");
const is_force = args.includes("f");
const is_no_multi_lang = args.includes("n");

const file = `./src/components/${filename}.tsx`;
const content = is_no_multi_lang
    ? `import React from "react";

const ${componentName}: React.FC = () => {
    return null;
};

export default ${componentName};
`
    : `import React from "react";

type Variants = {
    CN: React.FC;
    EN: React.FC;
};

const ${componentName}: React.FC<{ lang: string }> & Variants = ({ lang }) => {
    if (lang === "zh-CN") {
        return <${componentName}.CN />;
    } else {
        return <${componentName}.EN />;
    }
};


${componentName}.CN = () => {
    return null;
};

${componentName}.EN = () => {
    return null;
};

export default ${componentName};
`;

if (is_verbose) {
    console.log("create", file);
    console.log("-".repeat(20));
    console.log(content);
}

if (is_write) {
    if (fs.existsSync(file) && !is_force) {
        console.warn("exist file", file);
        console.log('do you want to re-init this file? pass "f" (force) in args');
    } else {
        fs.writeFileSync(file, content);
    }
}
