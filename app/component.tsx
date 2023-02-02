"use client";

import React from "react";
import { useEffect } from "react";

export const Component = React.memo(() => {
  useEffect(() => {
    console.log("mounted Component");
    return () => {
      console.log("unmounted Component");
    };
  }, []);
  return <div>Component</div>;
});
