import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();

// eslint-disable-next-line no-console
console.log(response instanceof Promise);
