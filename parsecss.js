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

const HTMLiFier = (stuff, category) => {
  const selectors = {};

  stuff.root.walkRules(rule => {
    rule.walk(something => {
      const prop = something.prop;
      const colorName = prop.split("color--")[1];

      selectors[colorName] = selectors[colorName] || {
        bg: [],
        color: [],
        root: []
      };
      selectors[colorName].root.push(`${prop}: ${something.value}`);
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
    <div class="example">
    <div class="example-visual">
    <div class="bg--${selector}">
      bg--${selector}
    </div>
    <div class="color--${selector}">
      color--${selector}
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;${selectors[selector].root.join(";<br/>&nbsp;&nbsp;")}<br />
    }<br />
    .bg--${selector} { <br />
      &nbsp;&nbsp;${selectors[selector].bg.join(";<br/>&nbsp;&nbsp;")} <br/>
    }<br />
    .color--${selector} { <br/>
      &nbsp;&nbsp;${selectors[selector].color.join(";")} <br/>
    }
    </code>
    </div>
    `;
  }
  cssString = `<h1>${
    category.split("-vars")[0]
  }</h1><div class="flex">${cssString}</div>`;
  return cssString;
};

const parser = async fileInfo => {
  const css = fs.readFileSync(fileInfo.path);
  const processed = await postcss([customProperties(cssnextObject)])
    .process(css, {
      from: "jon",
      to: "dist/colors.css"
    })
    .then(result => {
      try {
        return result;
      } catch (err) {
        throw err;
      }
    });

  const newHTML = HTMLiFier(processed, fileInfo.fileName);

  return newHTML;
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
  // const fileTypeToFind = ".css";

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
  let newJSON = [];

  let htmlString = "";
  for (const fileInfo of filesList) {
    htmlString += await parser(fileInfo, newJSON);
  }
  fs.writeFile("./docs/colorJson.js", `var html = \`${htmlString}\``, () => {
    return true;
  });
};

const filesList = findFiles();

makeShit(filesList);
