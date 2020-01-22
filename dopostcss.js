const fs = require("fs");
const postcss = require("postcss");
const postcssImport = require("postcss-import")({
  skipDuplicates: true
});
const customProperties = require("postcss-custom-properties");

const cssnextObject = {
  browsers: "last 2 versions, ios >= 6, ie > 10",
  features: {
    "nesting-rules": true
  },
  importFrom: ["./dist/eb-colors-css-vars.css"],
  preserve: false,
  stage: 0,
  warnForDuplicates: false
};

const inputFile = "./src/all-with-classes.css";
const outputFile = "./dist/eb-colors-classes.css";
const css = fs.readFileSync(inputFile);

const alphabetizeClassNames = postcss.plugin("alphabetizeClassNames", () => {
  const selectors = {};
  const selectorsArr = [];
  return (root, _result) => {
    root.walkRules(rule => {
      const firstLetter = rule.selector.match(/\.(\w)/)[1];
      selectors[firstLetter] = selectors[firstLetter] || [];
      selectors[firstLetter].push(rule);
      selectorsArr.push(rule);
      rule.remove();
    });
    selectorsArr.sort((a, b) => {
      if (a.selector < b.selector) {
        return -1;
      }
      if (a.selector > b.selector) {
        return 1;
      }
      return 0;
    });

    for (const letterRule of selectorsArr) {
      root.append(letterRule);
    }
  };
});

postcss([postcssImport, customProperties(cssnextObject), alphabetizeClassNames])
  .process(css, {
    from: inputFile,
    to: "dist/colors.css"
  })
  .then(result => {
    try {
      fs.writeFile(outputFile, result.css, () => {
        return true;
      });
      console.log(`postcss ${inputFile} -> ${outputFile}`);
    } catch (err) {
      throw err;
    }
  });
