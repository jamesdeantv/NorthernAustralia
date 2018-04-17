"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Oil & Gas",
  type: "group",
  items: [
    {
      name: "Onshore Gas Pipelines",
      type: "esri-mapServer",
      url:
        "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer/1",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    {
      name: "Onshore Oil Pipelines",
      type: "esri-mapServer",
      url:
        "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer/0",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    {
      name: "Oil and Gas Platforms",

      type: "wms",
      url:
        "http://services.ga.gov.au/site_9/services/Oil_Gas_Infrastructure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      layers: "National_Oil_Gas_Platforms"
    },
    {
      name: "WA Petroleum",
      type: "wms-getCapabilities",
      url:
        "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer"
    },
    {
      name: "NT Oil Pipelines",
      type: "wms",
      url: "http://wms1.ntlis.nt.gov.au/ilismap",
      layers: "105"
    },
    {
      name: "NT Gas Pipelines",
      type: "wms",
      url: "http://wms1.ntlis.nt.gov.au/ilismap",
      layers: "5"
    },
    {
      name: "Petroleum Wells",
      type: "wms",
      url: "http://services.ga.gov.au/geoserver/boreholes/wms",
      layers: "Boreholes",
      parameters: {
        CQL_FILTER: "WELLTYPE='Petroleum'"
      }
    },
    getFromCatalogPath(externalCatalogs.nationalmap, [
      "National Datasets",
      "Land",
      "Agriculture and Mining",
      "Petroleum Exploration"
    ])
  ]
};