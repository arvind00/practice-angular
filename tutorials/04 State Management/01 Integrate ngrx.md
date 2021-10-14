## Learning Objective
- [x] integrate ngrx

## Step 1 - Install the package
```sh
npm i @ngrx/store
```

## Implementation strategy
- Let's store some info related to profiling(like username, authorizationInfo) and app info (like appName, appVersion)
- To store profile info we will create `src/app/store/state/profile.ts`
- To store app info we will create `src/app/store/state/app-info.ts`
- Here we will define the fields of profile object and fields of appInfo object as interface
- Next we will define another interface `src/app/store/state/app-state.ts` to define app state. Here we will define properties of type profile and appInfo defined above.
- Then we will define what actions we can perform to this profile object in `src/app/store/actions/profile.actions.ts`
- Then we will define what actions we can perform to this appInfo object in `src/app/store/actions/app-info.actions.ts`
- Next we will create reducer fuction using which we will retrive or update the profile info in `src/app/store/reducers/profile.reducer.ts`
- Next we will create reducer fuction using which we will retrive or update the app info in `src/app/store/reducers/app-info.reducer.ts`
- Next we will create an ActionReducerMap whose keys will be what we defined in `app-state` interface and whose value will b the corresponding reducers defined above
- Next we will create selector for profile in `src/app/store/selectors/profile.selector.ts`, this will be used later to obtain an observable to listen to profile object.
- Next we will create selector for app info in `src/app/store/selectors/app-info.selector.ts`, this will be used later to obtain an observable to listen to appInfo object.


## Step 2 - Define Models to store state

## Steps 3 - Define Actions

## Steps 4 - Define Reducers

## Steps 5 - Define Selectors

## Steps 6 - Store Info

## Step 7 - Retrieve Info