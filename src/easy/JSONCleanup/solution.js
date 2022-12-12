const https = require("https");

const URL = "https://coderbyte.com/api/challenges/json/json-cleaning";

https.get(URL, (response) => {
  let data = "";

  response.on("data", (res) => {
    data += res;

    // clean data
    const cleanData = (apiData) => {
      // loop through object
      for (let prop in apiData) {
        if (apiData[prop] instanceof Object) {
          if (Object.keys(apiData[prop]).length === 0) {
            delete apiData[prop];
          } else if (apiData[prop] instanceof Array) {
            const itemIndex = apiData[prop].indexOf("-");
            if (itemIndex > -1) {
              apiData[prop].splice(itemIndex, 1);
            }
          } else {
            cleanData(apiData[prop]);
          }
        } else if (
          apiData[prop] === "N/A" ||
          apiData[prop] === "-" ||
          apiData[prop] === "" ||
          apiData[prop] === undefined ||
          apiData[prop] === null ||
          (apiData[prop] instanceof Object &&
            Object.keys(apiData[prop]).length === 0)
        ) {
          delete apiData[prop];
        }
      }
      return apiData;
    };

    const parsed = JSON.parse(data);
    const result = cleanData(parsed);
    console.log("===========Result===========");
    console.log(JSON.stringify(result));
  });
});
