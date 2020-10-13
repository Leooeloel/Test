// yarn ts-node __filename Index.zh-CN vw

import * as fs from "fs";
import * as path from "path";
import { slug_case } from "./util";
// const { langs } = require("../src/data/languages");
const langs = ["zh-CN"];

if (process.argv.length <= 2) {
    console.log(`usage:
    ${path.basename(__filename)} About [vwf]
    
    v = verbose
    w = write
    f = force`);
    process.exit();
}

const name = process.argv[2];
const filename = slug_case(name);
const args = process.argv[3] ?? "";
const is_verbose = args.includes("v");
const is_write = args.includes("w");
const is_force = args.includes("f");

const folder = `./src/pages/${filename}`;
const file = `./src/pages/${filename}/index.tsx`;
const content = `import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(\`/\${langKey}/${filename}/\`));
    }
    return null;
}
`;

if (is_verbose) {
    console.log("create", file);
    console.log("-".repeat(20));
    console.log(content);
}

if (is_write) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    if (fs.existsSync(file) && !is_force) {
        console.warn("exist file", file);
        console.log('do you want to re-init this file? pass "f" (force) in args');
    } else {
        fs.writeFileSync(file, content);
        for (const lang of langs) {
            const f = `./src/pages/${filename}/index.${lang}.tsx`;
            const c = `import React from "react";
import Layout from "../../components/layout";

export default function Index() {
    return <Layout></Layout>;
}
`;
            fs.writeFileSync(f, c);
        }
    }
}
