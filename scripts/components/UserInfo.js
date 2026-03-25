import { api } from "./Api.js";

export default class UserInfo {
  constructor(api) {
    this._api = api;
  }

  getUserInfo() {
    return this._api.getUserInfo();
  }

  setUserInfo({ name, about }) {
    return this._api.setUserInfo({ name, about });
  }
}