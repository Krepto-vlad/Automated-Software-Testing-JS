export default {
  default: {
    import: [
      "src/features/step_definitions/*.js",
      "src/features/support/world.js",
    ],
    paths: ["src/features/*.feature"],
    format: ["progress", "html:reports/cucumber-report.html"],
    publishQuiet: true,
  },
};
