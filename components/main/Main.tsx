"use client";
import React, { useEffect, useState } from "react";
import {
  Hero,
  Reasons,
  SupportPlans,
  Worries,
  BreakCommonSense,
  Recommend,
  Faqs,
  Sns,
  ScrollToTop,
  Service,
} from "./index";
import Appointment from "./Appointment";

const Main = () => {
  return (
    // <div className="container mx-auto">
    <div className="mx-auto">
      <Hero />
      <BreakCommonSense />
      <Worries />
      <Recommend />
      <div className="container mx-auto max-w-5xl px-3 sm:px-5">
        {/* <div className="container max-w-5xl mx-auto px-5"> */}
        <Reasons />
        <SupportPlans />
      </div>
      <Service />
      {/* <Attentions /> */}
      <Faqs />
      <Sns />

      <ScrollToTop />
      <Appointment />
    </div>
  );
};

export default Main;
