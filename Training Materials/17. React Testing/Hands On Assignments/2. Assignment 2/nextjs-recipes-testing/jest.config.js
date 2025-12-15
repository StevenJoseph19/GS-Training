// jest.config.mjs  (ESM)
import nextJest from "next/jest.js"; // ESM import per Next.js docs

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.mjs and .env
  dir: "./",
});

// Any custom Jest config you want to pass
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

// Export ESM default so next/jest can load Next config asynchronously
export default createJestConfig(config);
