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

// Imports dependencies
const Response = require("./response"),
  i18n = require("../i18n.config"),
  config = require("./config");

module.exports = class Inquiries {
  static handlePayload(payload) {
    let response;

    switch (payload) {

//--------------Start inquiries-------------------------
      case "VEHICLE_TRACK":
        response = Response.genQuickReply(i18n.__("inquire.vehicle"), [
          {
            title: "Ref No",
            payload: "VEHICLE_REF"
          },
          {
            title: "Image",
            payload: "VEHICLE_IMAGE" //Under construction
          },
        ]);
        break;

      case "SPARE_TRACK":
        response = Response.genQuickReply(i18n.__("inquire.spare"), [
          {
            title: "Ref No",
            payload: "VEHICLE_REF"
          },
          {
            title: "Image",
            payload: "VEHICLE_IMAGE" //under construction
          },
        ]);
        break;

//-----------End Inquiries: on to next step------------------------------------

      case "VEHICLE_REF":
        response = Response.genQuickReply(i18n.__("general.later"), [
          {
            title: "Ok! Thanks",
            payload: "CALCULATOR_FINAL"
          },
          {
            title: "Today Offers",
            payload: "OFFER_ONE"
          },
        ]);
        break;

        case "VEHICLE_IMAGE":
          response = Response.genText(i18n.__("general.construction"), [
            {
              title: "Yes",
              payload: "YES_INTERESTED" //Interested to get notified
            },
            {
              title: "No",
              payload: "NOT_INTERESTED"
            }
          ]);
          break;
  
    }

    return response;
  }
};

