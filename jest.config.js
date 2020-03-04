module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    moduleNameMapper: {
        "@/components/(.*)": "<rootDir>/src/components/$1",
        "@/store/(.*)": "<rootDir>/src/@features/store/$1",
        "@/styling/(.*)": "<rootDir>/src/@features/styling/$1",
        "@/services/(.*)": "<rootDir>/src/@features/services/$1",
        "@/utils/(.*)": "<rootDir>/src/@features/utils/$1",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};