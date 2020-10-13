### Dev Dependencies

```shell
yarn global add gatsby-cli prettier typescript ts-node
```

### Scripts

#### `yarn cc ComponentName [vwfn]`

Create component at `src/components/component-name.tsx`.

| arg | meaning                        |
| :-: | ------------------------------ |
| `v` | verbose                        |
| `w` | write                          |
| `f` | force (if file already exists) |
| `n` | don't support multi-language   |

Sample component file:

```typescript
import React from "react";

const Counter: React.FC = () => {
    return null;
};

export default Counter;
```

#### `yarn cp PageName [vwf]`

Create page at `src/pages/page-name/index{,.en,.zh-CN}.tsx` (1 folder, 3 files).

The `index.tsx` will export `RedirectIndex()` and `Index(lang)` functions.

| arg | meaning                        |
| :-: | ------------------------------ |
| `v` | verbose                        |
| `w` | write                          |
| `f` | force (if file already exists) |

Sample page file:

```typescript
// index.tsx
import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/about/`));
    }
    return null;
}
// index.zh-CN.tsx
import React from "react";
import Layout from "../../components/layout";

export default function Index() {
    return <Layout></Layout>;
}
```

#### `yarn -s ii [pattern]`

Generate `import img from "../images/img.svg";` statements.

|   arg   | meaning              |
| :-----: | -------------------- |
| pattern | regex to match files |

Sample output:

```typescript
// yarn -s ii home
import home_0 from "../images/home_0.svg";
```
