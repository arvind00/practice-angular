import { ActionReducerMap } from "@ngrx/store";
import { iAppState } from "../models/app-state";
import { appInfoReducer } from "./app-info.reducer";
import { profileReducer } from "./profile.reducer";


export const appReducer: ActionReducerMap<iAppState, any> = {
    appInfo: appInfoReducer,
    profile: profileReducer
}