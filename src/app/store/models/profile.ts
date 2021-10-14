export interface iModuleAccess {
  [key: string]: any;
}

export interface iProfile {
  username: string | null;
  moduleAccess: iModuleAccess | null;
}

export const initiaProfileState: iProfile = {
  username: null,
  moduleAccess: null,
};
