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

module.exports = class Calculator {
  static handlePayload(payload) {
    let response;

    switch (payload) {

//-------Start the calculator options-----------------------

      case "DUTY_CALCULATOR":
        response = Response.genQuickReply(i18n.__("duty.model"), [
          {
            title: "Audi",
            payload: "AUDI_CALCULATOR"
          },
          {
            title: "Toyota",
            payload: "TOYOTA_CALCULATOR"
          },
          {
            title: "Nissan",
            payload: "NISSAN_CALCULATOR"
          }
        ]);
        break;

//---------End of options----------------------------------------

//------Different category of vehicles: By year -----------

      case "AUDI_CALCULATOR":
        response = Response.genQuickReply(i18n.__("duty.year"), [
          {
            title: "2018",
            payload: "AUDI_EIGHTEEN_ENGINE"
          },
          {
            title: "2019",
            payload: "AUDI_NINETEEN_ENGINE"
          }
        ]);
        break;

      case "TOYOTA_CALCULATOR":
        response = Response.genQuickReply(i18n.__("duty.year"), [
          {
            title: "2018",
            payload: "TOYOTA_EIGHTEEN_ENGINE"
          },
          {
            title: "2019",
            payload: "TOYOTA_NINETEEN_ENGINE"
          }
        ]);
        break;

      case "NISSAN_CALCULATOR":
        response = Response.genQuickReply(i18n.__("duty.year"), [
          {
            title: "2018",
            payload: "NISSAN_EIGHTEEN_ENGINE"
          },
          {
            title: "2019",
            payload: "NISSAN_NINETEEN_ENGINE"
          }
        ]);
        break;

//----------End --------------------------------------------

//---------Start: Search by engine size --------------------------

      case "AUDI_EIGHTEEN_ENGINE":
        response = Response.genQuickReply(i18n.__("duty.engine"), [
          {
            title: "1300 cc",
            payload: "AUDI_EIGHTEEN_LOWANSWER"
          },
          {
            title: "2560 cc",
            payload: "AUDI_EIGHTEEN_HIGHANSWER"
          }
        ]);
        break;

      case "AUDI_NINETEEN_ENGINE":
        response = Response.genQuickReply(i18n.__("duty.engine"), [
          {
            title: "1700 cc",
            payload: "AUDI_NINETEEN_LOWANSWER"
          },
          {
            title: "3260 cc",
            payload: "AUDI_NINETEEN_HIGHANSWER"
          }
        ]);
        break;

      case "TOYOTA_EIGHTEEN_ENGINE":
        response = Response.genQuickReply(i18n.__("duty.engine"), [
          {
            title: "1450 cc",
            payload: "TOYOTA_EIGHTEEN_LOWANSWER"
          },
          {
            title: "5600 cc",
            payload: "TOYOTA_EIGHTEEN_HIGHANSWER"
          }
        ]);
        break;

      case "TOYOTA_NINETEEN_ENGINE":
        response = Response.genQuickReply(i18n.__("duty.engine"), [
          {
            title: "1800 cc",
            payload: "TOYOTA_NINETEEN_LOWANSWER"
          },
          {
            title: "3200 cc",
            payload: "TOYOTA_NINETEEN_HIGHANSWER"
          }
        ]);
        break;

      case "NISSAN_EIGHTEEN_ENGINE":
        response = Response.genQuickReply(i18n.__("duty.engine"), [
          {
            title: "1340 cc",
            payload: "NISSAN_EIGHTEEN_LOWANSWER"
          },
          {
            title: "3460 cc",
            payload: "NISSAN_EIGHTEEN_HIGHANSWER"
          }
        ]);
        break;

      case "NISSAN_NINETEEN_ENGINE":
        response = Response.genQuickReply(i18n.__("duty.engine"), [
          {
            title: "1100 cc",
            payload: "NISSAN_NINETEEN_LOWANSWER"
          },
          {
            title: "2860 cc",
            payload: "NISSAN_NINETEEN_HIGHANSWER"
          }
        ]);
        break;

//--------End: Search by Engine size-> Next is Answer--------------------


//-----------Start of Audi answers each on different case.---------------------------------------

      case "AUDI_EIGHTEEN_LOWANSWER":
        response = Response.genQuickReply(i18n.__("audi.loweight"), [
          {
            title: "Yes",
            payload: "AUDI_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "AUDI_EIGHTEEN_HIGHANSWER":
        response = Response.genQuickReply(i18n.__("audi.higheight"), [
          {
            title: "Yes",
            payload: "AUDI_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "AUDI_NINETEEN_LOWANSWER":
        response = Response.genQuickReply(i18n.__("audi.lownine"), [
          {
            title: "Yes",
            payload: "AUDI_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "AUDI_NINETEEN_HIGHANSWER":
        response = Response.genQuickReply(i18n.__("audi.highnine"), [
          {
            title: "Yes",
            payload: "AUDI_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;
//-----------End of Audi answers.---------------------------------------

//-----------Start of Toyota answers each on different case.---------------------------------------

      case "TOYOTA_EIGHTEEN_LOWANSWER":
        response = Response.genQuickReply(i18n.__("toyota.loweight"), [
          {
            title: "Yes",
            payload: "TOYOTA_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "TOYOTA_EIGHTEEN_HIGHANSWER":
        response = Response.genQuickReply(i18n.__("toyota.higheight"), [
          {
            title: "Yes",
            payload: "TOYOTA_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "TOYOTA_NINETEEN_LOWANSWER":
        response = Response.genQuickReply(i18n.__("toyota.lownine"), [
          {
            title: "Yes",
            payload: "TOYOTA_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "TOYOTA_NINETEEN_HIGHANSWER":
        response = Response.genQuickReply(i18n.__("toyota.highnine"), [
          {
            title: "Yes",
            payload: "TOYOTA_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

//-----------End of Toyota answers.---------------------------------------


//-----------Start of Nissan answers each on different case.---------------------------------------

      case "NISSAN_EIGHTEEN_LOWANSWER":
        response = Response.genQuickReply(i18n.__("nissan.loweight"), [
          {
            title: "Yes",
            payload: "NISSAN_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "NISSAN_EIGHTEEN_HIGHANSWER":
        response = Response.genQuickReply(i18n.__("nissan.higheight"), [
          {
            title: "Yes",
            payload: "NISSAN_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "NISSAN_NINETEEN_LOWANSWER":
        response = Response.genQuickReply(i18n.__("nissan.lownine"), [
          {
            title: "Yes",
            payload: "NISSAN_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

      case "NISSAN_NINETEEN_HIGHANSWER":
        response = Response.genQuickReply(i18n.__("nissan.highnine"), [
          {
            title: "Yes",
            payload: "NISSAN_RECOMMENDATION"
          },
          {
            title: "No",
            payload: "NOT_INTERESTED"
          }
        ]);
        break;

//-----------End of Nissan answers.---------------------------------------


//--------------Start Audi Recommendations---------------------------
      case "AUDI_RECOMMENDATION":
        response = Response.genGenericTemplate(
          `${config.appUrl}/audi.jpg`,
          i18n.__("recommendation.one"),
          i18n.__("recommendation.discount"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/audi/a6/bg823766/id/1672623/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "AUDI_ANOTHER"
            )
          ]
        );
        break;

      case "AUDI_ANOTHER":
        response = Response.genGenericTemplate(
          `${config.appUrl}/audi2.jpg`,
          i18n.__("recommendation.two"),
          i18n.__("recommendation.discount"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/audi/a3/bg834089/id/1683147/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "CALCULATOR_FINAL"
            )
          ]
        );
        break;
//---------------End Audi Recommendations---------------------------

//--------------Start Toyota Recommendations---------------------------

      case "TOYOTA_RECOMMENDATION":
        response = Response.genGenericTemplate(
          `${config.appUrl}/prado.jpg`,
          i18n.__("recommendation.three"),
          i18n.__("recommendation.discount"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/toyota/land-cruiser-prado/bg818218/id/1666986/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "TOYOTA_ANOTHER"
            )
          ]
        );
        break;

      case "TOYOTA_ANOTHER":
        response = Response.genGenericTemplate(
          `${config.appUrl}/corolla.jpg`,
          i18n.__("recommendation.four"),
          i18n.__("recommendation.discount"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/toyota/corolla-axio/bg826394/id/1675217/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "CALCULATOR_FINAL"
            )
          ]
        );
        break;

//---------------End Toyota Recommendations---------------------------

//--------------Start Nissan Recommendations---------------------------

      case "NISSAN_RECOMMENDATION":
        response = Response.genGenericTemplate(
          `${config.appUrl}/nissan.jpg`,
          i18n.__("recommendation.five"),
          i18n.__("recommendation.discount"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/nissan/serena/bg840012/id/1689076/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "NISSAN_ANOTHER"
            )
          ]
        );
        break;

      case "NISSAN_ANOTHER":
        response = Response.genGenericTemplate(
          `${config.appUrl}/double.jpg`,
          i18n.__("recommendation.six"),
          i18n.__("recommendation.discount"),
          [
            Response.genWebUrlButton(
              i18n.__("recommendation.shop"),
              `${config.shopUrl}/nissan/navara/bg716686/id/1644912/`
            ),
            Response.genPostbackButton(
              i18n.__("recommendation.another"),
              "CALCULATOR_FINAL"
            )
          ]
        );
        break;

//---------------End Nissan Recommendations---------------------------

//----------Goodbye if not interested---------------------------------
      case "NOT_INTERESTED":
        response = Response.genText(i18n.__("general.goodbye"));
        break;

//----------End of Goodbye------------------------------------

//----------Notify me---------------------------------
      case "YES_INTERESTED":
        response = Response.genText(i18n.__("general.notify"));
        break;

//----------End of notify------------------------------------

//----------Goodbye if satisfied---------------------------------
      case "CALCULATOR_FINAL":
        response = Response.genText(i18n.__("general.final"));
        break;

//----------End of Goodbye------------------------------------
    }

    return response;
  }
};
