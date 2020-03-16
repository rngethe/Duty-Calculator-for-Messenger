/**
 * Duty Calculator bot
 * 
 * This is a facebook messenger bot to calculate duty of a vehicle in Kenya
 * 
 * Copyright (c) 2020 Robert Ngethe.
 * 
 * GNU GPL v3 or later
 * 
 * https://developers.facebook.com/docs/messenger-platform/getting-started/
 */

"use strict";

module.exports = class User {
  constructor(psid) {
    this.psid = psid;
    this.firstName = "";
    this.lastName = "";
    this.locale = "";
    this.timezone = "";
    this.gender = "neutral";
  }
  setProfile(profile) {
    this.firstName = profile.firstName;
    this.lastName = profile.lastName;
    this.locale = profile.locale;
    this.timezone = profile.timezone;
    if (profile.gender) {
      this.gender = profile.gender;
    }
  }
};
