import { useEffect } from "react";
import json from "../../package.json";

export const usePageTitle = (title = "") => {
  useEffect(() => {
    // Change the page title if provided
    if (!!title) {
      document.title = `${title} (${json.version})`;
    }
  }, [title]);
};