import React, { useEffect, useLayoutEffect } from "react";

import Storefinder from "./Storefinder";
const RouteWithStoreLocator = ({
  isStoreFinderBundleLoaded,
  setIsStoreFinderBundleLoaded,
}) => {
  // we need to use useLayoutEffect here and not useEffect, because
  // we first have to unmount the DOM element and after update the screen
  // useEffect does this asynchronously, which throws then errors
  useLayoutEffect(() => {
    return () => {
      window.UberallStorefinderUnmount();
    };
  }, []);

  useEffect(() => {
    if (!isStoreFinderBundleLoaded) {
      // This is the first time we render the store finder. We need to call window.UberallStorefinderStart
      // because we need to fetch the storefinder script and load it into the browsers memory
      window.UberallStorefinderStart();
      setIsStoreFinderBundleLoaded(true);
    } else {
      // When the storefinder bundle is already loaded into the browsers memory, we need to call
      // window.UberallStorefinderRestart to only update the screen again
      window.UberallStorefinderRestart();
    }
  }, []);

  return (
    <div
      id="store-finder-widget"
      data-key="4w3OLJTTT66unD30WlbJhuit7Hd45w"
      data-language="en"
      data-baseurl="https://uberall.com/"
      data-bundleurl="http://localhost:3001/store-finder-widget-bundle-v2-modern.js"
      data-showheader="true"
      data-showbrands="true"
      data-showservices="true"
      data-footertext="Uberall Storefinder Test Footer"
      data-title="Uberall Storefinder"
      data-locationpinurl="https://static-prod.uberall.com/assets/symbol.svg"
      data-showzipcity="true"
      data-filters="services,locatorZip"
      data-filter-services=""
    ></div>
  );
};

export default RouteWithStoreLocator;
