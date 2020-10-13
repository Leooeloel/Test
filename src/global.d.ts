declare module "ptz-i18n" {
    export function redirectToHome(langs: string[], defaultLangKey: string): void;
    export function getUserLangKey(langs: string[], defaultLangKey: string): string;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.css" {
    const content: string;
    export default content;
}

declare module "*.inline.svg" {
    const content: React.FC;
    export default content;
}

declare module "*.svg" {
    const content: string;
    export default content;
}
