/** @type {import('jest').Config} */
const config = {
  // Use jsdom environment for browser-like testing
  testEnvironment: "jsdom",

  // Array of paths to modules that run after Jest is initialized
  // but before any test files are executed. This is where we load jest-dom.
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // File extensions Jest should look for
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Patterns to match test files
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],

  // Use ts-jest or babel-jest for TypeScript/JSX processing
  // Since the package.json includes TypeScript, we'll use a simple transform config.
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // --- Next.js Specific Configuration ---
  // To handle static imports like CSS, images, etc., which Next.js normally handles
  moduleNameMapper: {
    // Mock CSS and image files during testing
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
    // Handle module aliases (if you use paths like '@/components/...')
    // You would need to set up these paths based on your tsconfig.json
  },

  // Ignore node_modules, dist, etc.
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  // Coverage configuration (optional, based on your original request)
  collectCoverage: true,
  coverageDirectory: "coverage",
};

module.exports = config;
