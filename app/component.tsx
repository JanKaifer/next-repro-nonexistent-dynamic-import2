"use client";
import { useEffect } from "react";

export const Component = () => {
  useEffect(() => {
    console.log("mounted Component");
    return () => {
      console.log("unmounted Component");
    };
  }, []);
  return <div>Component</div>;
};
