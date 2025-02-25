module.exports = {
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.test.js"],
    reporters: [
      "default",
      ["jest-junit", { outputDirectory: "./test-results", outputName: "jest-results.xml" }]
    ]
  };
  