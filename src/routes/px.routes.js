const express = require("express");
const axios = require("axios");
require("dotenv").config();
const router = express.Router();

function pingBody(obj) {
  return {
    type: "jsonwsp/request",
    version: "1.0",
    methodname: "Lead.Ping",
    LeadData: {
      Target: "Lead.Ping",
      PartnerToken: process.env.PXOPENAPI_PARTNERTOKEN,
      RequestTime: "2018-07-02 14:58:36",
      UserAgent:
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
      OriginalURL: "http://www.exampleURL.com",
      SessionLength: "7",
      TCPAText:
        "By clicking Get My Quotes, I authorize security companies, their dealers and partner companies to contact me about security offers by phone calls and text messages to the number I provided. I authorize that these marketing communications may be delivered to me using an automatic telephone dialing system or by prerecorded message. I understand that my consent is not a condition of purchase",
      AffiliateData: {
        Id: process.env.PXOPENAPI_ID,
        OfferId: process.env.PXOPENAPI_OFFERID,
        SubId: "CD1332",
        Sub2Id: "x25",
        Source: "All",
        VerifyAddress: "false",
        RespondOnNoSale: "true",
        SellResponseURL: "",
        LeadId: "",
        TrustedForm: "",
        ClickConsentID: "",
      },
      ContactData: {
        State: "NY",
        ZIPCode: "90001",
        IPAddress: "255.255.255.255",
        ResidenceType: "Dorm / Student housing",
        YearsAtResidence: "1",
        MonthsAtResidence: "4",
      },
      QuoteRequest: {
        QuoteType: "Auto",
        Drivers: {
          Driver: {
            BirthDate: "1980-07-14",
            MaritalStatus: "Divorced",
            RelationshipToApplicant: "Self",
            Gender: "Male",
            LicenseState: "NY",
            AgeLicensed: "16",
            LicenseStatus: "Current",
            LicenseEverSuspendedRevoked: "No",
            Occupation: "Employeed",
            YearsAtEmployer: "10",
            Education: "Bachelors Degree",
            RequiresSR22Filing: "No",
            CreditRating: "Excellent",
            Incidents: {
              Violations: {
                Violation: {
                  Date: "2011-12-31",
                  Description: "Careless driving",
                },
              },
              MajorViolations: {
                MajorViolation: {
                  Date: "2011-12-31",
                  Description: "DUI/DWAI",
                  State: "NY",
                },
              },
              Accidents: {
                Accident: {
                  AccidentDate: "2011-12-31",
                  Description: "Collided with another car",
                  AtFault: "Yes",
                  Damage: "People",
                  Amount: "1000",
                },
              },
              Claims: {
                Claim: {
                  ClaimDate: "2011-12-31",
                  Description: "Act of Nature",
                  PaidAmount: "50000",
                  Damage: "People",
                },
              },
            },
          },
        },
        CustomField1: "Free text",
        CustomField2: "Free text",
        CustomField3: "Free text",
        CustomField4: "Free text",
        CustomField5: "Free text",
        CustomField6: "Free text",
        CustomField7: "Free text",
        CustomField8: "Free text",
        CustomField9: "Free text",
        CustomField10: "Free text",
        Vehicles: {
          Vehicle: {
            VIN: "1N6BD06T070000000",
            Year: "2011",
            Make: "BMW",
            Model: "1 Series 128I",
            Garage: "No Cover",
            Ownership: "No",
            PrimaryUse: "Commute To/From Work",
            AnnualMiles: "2500",
            WeeklyCommuteDays: "5",
            OneWayDistance: "0",
            ComphrensiveDeductible: "100",
            CollisionDeductible: "100",
          },
        },
        Insurance: {
          CurrentPolicy: {
            InsuranceCompany: "21st Century",
            ExpirationDate: "2012-01-31",
            InsuredSince: "2011-01-31",
          },
          RequestedPolicy: {
            CoverageType: "Superior Protection",
            BodilyInjury: "25/50",
            PropertyDamage: "10000",
          },
        },
      },
    },
  };
}

router.post("/ping", async (req, res) => {
  const { data } = req.body;
  try {
    const response = await axios.post(
      "http://api.open.stagingpx.com/px",
      pingBody(data)
    );
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
