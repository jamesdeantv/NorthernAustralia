"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Mining",
  type: "group",
  preserveOrder: true,
  items: [
    getFromCatalogPath(externalCatalogs.nationalmap, [
      "National Datasets",
      "Land",
      "Agriculture and Mining",
      "Mineral Exploration"
    ]),
    {
      name: "Mineral Occurrences",
      url: "http://services.ga.gov.au/earthresource/wms",
      type: "wms",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ],
      layers: "ama:mineral_occurrences"
    },
    {
      name: "Mines Operating Status",
      url: "http://services.ga.gov.au/earthresource/wms",
      type: "wms",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ],
      layers: "ama:mineral_deposits"
    },
    {
      name: "Mines and Mineral Deposits",
      type: "csv",
      url: "data/Resources_and_Energy/mineral_deposits.csv",
      tableStyle: {
        dataVariable: "COMMODIDS",
        columns: {
          id: { type: "HIDDEN" },
          ENO: { type: "HIDDEN" },
          NAME: { type: "HIDDEN" },
          SYNONYMS: { type: "HIDDEN" },
          ACCURACY: { type: "HIDDEN" },
          SIGNIFICANT: { type: "HIDDEN" },
          SIGNIFICANCE_VALUE: { type: "HIDDEN" },
          SIGNIFICANCE_CALC_METHOD: { type: "HIDDEN" },
          ACCESS_CODE: { type: "HIDDEN" }
        }
      }
    },
    {
      name: "Surface Geology",
      type: "wms-getCapabilities",
      url:
        "http://services.ga.gov.au/site_1/services/GA_Surface_Geology/MapServer/WMSServer",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    {
      name: "WA: Minedex",
      type: "wms",
      url:
        "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
      layers: "11"
    },
    {
      name: "WA: Mining tenements",
      type: "wms",
      url:
        "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
      layers: "8"
    }
  ]
};
