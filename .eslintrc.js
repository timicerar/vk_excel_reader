module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: [
        ".eslintrc.js"
    ],
    plugins: ["react-hooks", "simple-import-sort"],
    rules: {
        "no-return-await": "error",
        "require-await": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/imports": ["error", {groups: [["^react", "^\\u0000", "^@?\\w", "^[^.]", "^\\."]]}],
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/no-unused-vars": ["error", {argsIgnorePattern: "^_"}],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    "{}": false,
                },
                extendDefaults: true,
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}