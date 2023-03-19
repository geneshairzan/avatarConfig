import React from "react";
import { useState } from "react";
import Circle from "@/component/gip-ui/circle";
import { Stack } from "@mui/material";

export default function App({ path, className }) {
  return (
    <img
      src={`${import.meta.env.VITE_BEURL}/public/${path}`}
      alt="noimg"
      className={className}
    />
  );
}
