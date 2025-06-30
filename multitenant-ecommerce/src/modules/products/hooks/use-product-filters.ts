import { useQueryStates, parseAsString, parseAsArrayOf, parseAsStringLiteral } from "nuqs";

const sortValues = ["newest", "oldest", "default"] as const;

const params = {
    search: parseAsString
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
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

export const useProductFilters = () => {
    return useQueryStates(params);
};