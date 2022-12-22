import React, { useEffect } from "react";

const RouteWithWebsiteWidgets = () => {
  useEffect(() => {
    window.startUberallWidgets();
    return () => {
      window.unmountUberallWidgets();
    };
  }, []);

  return (
    <ub-widget-review
      data-language="en"
      data-key="YOUR_WIDGETS_KEY"
      data-locationId="YOUR_LOCATION_ID"
    ></ub-widget-review>
  );
};

export default RouteWithWebsiteWidgets;
