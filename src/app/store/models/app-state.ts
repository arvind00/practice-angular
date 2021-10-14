import { iAppInfo } from "./app-info";
import { iProfile } from "./profile";


export interface iAppState {
    readonly appInfo: iAppInfo;
    readonly profile: iProfile;
}