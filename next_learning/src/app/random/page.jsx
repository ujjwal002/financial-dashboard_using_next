"use client";

import { useEffect, useState } from "react";

export default function generate() {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    function getRandomNumber() {
      setRandom(Math.random());
    }
    getRandomNumber()
  },[]);
  return (
    <>
      <h1>{random}</h1>
    </>
  );
}
