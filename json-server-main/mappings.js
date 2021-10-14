const stubPath = "json_stubs/";

exports.mappings = {
  getAppInfo: {
    jsonPath: stubPath + "getAppInfo.json",
    errorJsonPath: stubPath + "notAuthorised.json",
  },
  getProfile: {
    jsonPath: stubPath + "getProfile.json",
    errorJsonPath: stubPath + "notAuthorised.json",
  },
};
