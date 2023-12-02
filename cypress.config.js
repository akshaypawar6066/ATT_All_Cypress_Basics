const { defineConfig } = require("cypress");
const fs= require("fs");
const excelToJson = require("convert-excel-to-json");
const csv= require('@fast-csv/parse');

module.exports = defineConfig({
  e2e: {
    video: true,
    videosFolder: "cypress/videos", // Specify the videos folder path
    setupNodeEvents(on, config) {
    // implement node event listeners here
    //Task to read CSV
      on("task",{
        excelToJson(filepath){
          const readFile = excelToJson({
            source: fs.readFileSync(filepath)
        });
        return readFile;

        }

      })
      
    },
  },
});
