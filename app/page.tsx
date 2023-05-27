"use client";
import React, { useEffect, useState } from "react";
import { Header, Main, Footer } from "@/components/";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
