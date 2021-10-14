## Learning Objective
- [x] Make 2 api calls simultaneously using fork join
- [x] Update the application state with the response received


## Implementation Strategy
- [x] let's serve the app info and profile info as stub jsons
- [x] For this we will need a stub json server, detailed instructions are provied in the [Pre-requsite](##Pre-requisite) section below
- [x] Let's make api call to retrieve app info and profile info when the root component is loaded.
- [x] And update the application state 


## Pre-requisite
- [x] integrate a json stub server to the project to serve stub jsons
- [x] download zip folder of json-server from https://github.com/arvind00/json-server
- [x] extract it, you should get a folder `json-server-main`
- [x] copy/cut it and put it to the root folder of this angular project.
- [x] cd into it and run `npm i` 

## Step 1 - Prepare and Serve App Info and Profile Stub Jsons
- [x] create `json-server-main/json_stubs/getProfile.json` as
```json
{
    "username": "Arvind Lairenjam",
    "moduleAccess": {
        "HOME": "A",
        "BOOKS": "A",
        "AUTHOR": "A"
    }
}
```
- The above json means, there is a user with user name: `Arvind Lairenjam` and 
- He has admin(A) access to the following modules:
    - HOME
    - BOOKS
    - AUTHORS
- [x] similarly create `json-server-main/json_stubs/getAppInfo.json` as
```json
{
  "appName": "eBooker",
  "appVersion": "1.0.0"
}
```
- Delete the `json-server-main/json_stubs/getUser.json` as it might confuse with get profile.
- Next update `json-server-main/mappings.js` as
```js
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
```
- Next update `json-server-main/json_stubs/routes.js:29` as
```js
router.get("/services/app/getAppInfo", (req, res) => {
    logRequestDetailsToConsole(req);
    serveJSON(mappings.getAppInfo.jsonPath, req, res);
})

router.get("/services/app/getProfile", (req, res) => {
    logRequestDetailsToConsole(req);
    serveJSON(mappings.getProfile.jsonPath, req, res);
})
```
- install `nodemon` globally if not already installed: `npm i nodemon -g`
- Start the stub json server, cd into `json-server-main` and type `nodemon start`
- To test the above apis open browser and hit: http://localhost:5000/services/app/getAppInfo
- If everything works then you should see `{"appName":"eBooker","appVersion":"1.0.0"}`
- Now your stub json server is ready. Next let's make api call from angular app.

## Step 2 - Make HTTP Request
- update `app.component.ts` to include the below method
```ts
  fetchAppInfoAndProfile() {
    const _dp = forkJoin({
      appInfo: this.appDataServie.sendGetRequest<iAppInfo>(
        'services/app/getAppInfo'
      ),
      profile: this.appDataServie.sendGetRequest<iProfile>(
        'services/app/getProfile'
      ),
    });
    _dp.subscribe(
      (res) => {
        this.store.dispatch(new SetAppInfo(res.appInfo));
        this.store.dispatch(new SetProfile(res.profile));
      },
      (err) => console.log(err.message)
    );
```
- and call this from `ngOnInit()`
- you might get this erro: `ERROR NullInjectorError: R3InjectorError(AppModule)[Store -> Store -> Store]:`
- make sure the root module import has `StoreModule.forRoot(appReducer)`

## Step 3 - Update Service Class
- Note that our json stub server is running on `http://localhost:5000`
- So we need to make sure the http request api endpoints starts with it.
- For this we will update the files in `src/environments` to have `api` property.
- For local development the default evironment file is `src/environments/environment.ts`
- Update it as
```ts
export const environment = {
  production: false,
  api: 'http://localhost:5000/'
};
```
- Next udpate the `src/app/app-data.service.ts`
- Declare and assign a member variable: `private api = environment.api;`
- Make sure the `url` is updated as `url = url.startsWith('/assets/') ? url : this.api + url;`
- Make the above change wherever applicable. 
- By now when our app is loaded it should make the api calls to fetch the app info and profile.
- Check the network tab of browser devtool.