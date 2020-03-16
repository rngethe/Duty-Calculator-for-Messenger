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
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class Offers {
  static handlePayload(payload) {
    let response;

    switch (payload) {

      case "OFFER_ONE":
        response = Response.genGenericTemplate(
          `${config.appUrl}/nissan.jpg`,
          i18n.__("recommendation.five"),
          i18n.__("recommendation.new"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/nissan/serena/bg840012/id/1689076/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "OFFER_TWO"
            )
          ]
        );
        break;

      case "OFFER_TWO":
        response = Response.genGenericTemplate(
          `${config.appUrl}/nissan2.jpg`,
          i18n.__("recommendation.seven"),
          i18n.__("recommendation.new"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/mazda/axela-sport/bg823761/id/1672618/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "CALCULATOR_FINAL"
            )
          ]
        );
        break;

    }

    return response;
  }
};