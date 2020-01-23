const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const customProperties = require("postcss-custom-properties");

const cssnextObject = {
  browsers: "last 2 versions, ios >= 6, ie > 10",
  features: {
    "nesting-rules": true
  },
  importFrom: ["./dist/eb-colors-css-vars.css"],
  preserve: true,
  stage: 0,
  warnForDuplicates: false
};

const csscreator = postcss.plugin("csscreator", () => {
  const selectors = {};
  return (root, _result) => {
    root.walkRules(rule => {
      rule.walk(something => {
        const prop = something.prop;
        const colorName = prop.split("color--")[1];

        selectors[colorName] = selectors[colorName] || { bg: [], color: [] };

        if (prop.indexOf("--fgcolor--") !== -1) {
          selectors[colorName].bg.push(`color: var(${prop})`);
        } else {
          selectors[colorName].bg.push(`background: var(${prop})`);
          selectors[colorName].color.push(`color: var(${prop})`);
        }
      });
    });
    let cssString = "";
    for (const selector in selectors) {
      cssString += `
      .bg--${selector} { ${selectors[selector].bg.join(";")} }
      .color--${selector} { ${selectors[selector].color.join(";")} }
      `;
    }
    root.append(cssString);
  };
});

const alphabetizeClassNames = postcss.plugin("alphabetizeClassNames", () => {
  const selectors = {};
  const selectorsArr = [];
  return (root, _result) => {
    root.walkRules(rule => {
      if (rule.selector.match(/\.(\w)/)) {
        const firstLetter = rule.selector.match(/\.(\w)/)[1];
        selectors[firstLetter] = selectors[firstLetter] || [];
        selectors[firstLetter].push(rule);
        selectorsArr.push(rule);
        rule.remove();
      }
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

const parser = async css => {
  const created = await postcss([csscreator])
    .process(css, {
      from: "jon",
      to: "dist/colors.css"
    })
    .then(result => {
      try {
        return result.css;
      } catch (err) {
        throw err;
      }
    });
  const processed = await postcss([
    customProperties(cssnextObject),
    alphabetizeClassNames()
  ])
    .process(created, {
      from: "jon",
      to: "dist/colors.css"
    })
    .then(result => {
      try {
        return result.css;
      } catch (err) {
        throw err;
      }
    });

  return processed;
};

const fileHandler = (info, srcFolder) => {
  const fileTypeToFind = ".css";
  const fileName = info.name;

  const fileExt = path.extname(fileName).toLowerCase();

  if (
    fileExt === fileTypeToFind &&
    fileName.indexOf("all") === -1 &&
    fileName.indexOf("-vars") !== -1
  ) {
    return {
      fileName: fileName.split(fileTypeToFind)[0],
      path: `${srcFolder}/${fileName}`
    };
  }
  return "";
};

const findFiles = () => {
  const srcFolder = "./src";
  const cssFilesToRead = [];

  const withFileTypes = true;
  fs.readdirSync(srcFolder, { withFileTypes }).forEach(output => {
    if (output.isFile()) {
      const returnedPath = fileHandler(output, srcFolder);
      if (returnedPath) {
        cssFilesToRead.push(returnedPath);
      }
    } else if (output.isDirectory()) {
      const dirName = `${srcFolder}/${output.name}`;

      fs.readdirSync(dirName, { withFileTypes }).forEach(readContent => {
        if (readContent.isFile()) {
          const returnedPath = fileHandler(readContent, dirName);
          if (returnedPath) {
            cssFilesToRead.push(returnedPath);
          }
        }
      });
    }
  });

  return cssFilesToRead;
};

const makeShit = async filesList => {
  let newCSS = [];

  for (const fileInfo of filesList) {
    newCSS.push(fs.readFileSync(fileInfo.path));
  }
  const retJSON = await parser(newCSS.join(""));

  fs.writeFile("./dist/eb-colors-classes.css", retJSON, () => {
    return true;
  });
};

const filesList = findFiles();

makeShit(filesList);
