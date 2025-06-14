import { parseAsString, createLoader, parseAsArrayOf, parseAsStringLiteral } from "nuqs/server";

export const sortValues = ["newest", "oldest", "default"] as const;

const params = {
    sort: parseAsStringLiteral(sortValues).withDefault("default"),
    minPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
    maxPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
    tags: parseAsArrayOf(parseAsString)
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault([]),
};

export const loadProductFilters = createLoader(params);