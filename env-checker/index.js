function getEnv() {
    return process.env.NODE_ENV || "development";
  }
  
  function isProduction() {
    return getEnv() === "production";
  }
  
  function isDevelopment() {
    return getEnv() === "development";
  }
  
  function isTest() {
    return getEnv() === "test";
  }
  
  module.exports = {
    getEnv,
    isProduction,
    isDevelopment,
    isTest
  };
  