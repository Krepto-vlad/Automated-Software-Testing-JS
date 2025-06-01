export default {
  default: {
    import: [
      "--require src/features/step_definitions/**/*.js",
      "--require src/features/support/**/*.js",
    ],
    paths: ["src/features/**/*.feature"],
    format: ["progress", "html:reports/cucumber-report.html"],
    publishQuiet: true,
  },
};
