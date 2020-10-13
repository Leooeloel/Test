function splitByUpperCase(str: string) {
    return str.split(/(?=[A-Z])/);
}

export function TitleCase(str: string) {
    str = str.split(".")[0];
    return str[0].toUpperCase() + str.substring(1);
}

export function slug_case(str: string) {
    return splitByUpperCase(str)
        .map((e) => e.toLowerCase())
        .join("-");
}
