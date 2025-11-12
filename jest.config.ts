import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./", // Path to Next.js app
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(customJestConfig);
