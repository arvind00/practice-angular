## Step 2 - Define Models to store state
- `src/app/store/models/app-info.ts`
```ts
export interface iAppInfo {
    appName: string;
    appVersion: string;
}
```
- `src/app/store/models/profile.ts`
```ts
interface iModuleAccess{
    [key: string]: string;
}

export interface iProfile {
    username: string;
    moduleAccess: iModuleAccess;
}
```
