import { atom } from "jotai";

export type DeviceType = "android" | "ios" | "desktop";

export interface INavigationState {
  deviceType: DeviceType;
}

export const deviceTypeAtom = atom<DeviceType>("desktop");

export const setDeviceTypeAtom = atom(null, (_, set, update: DeviceType) => {
  set(deviceTypeAtom, update);
});
