"use client";
import React, { useState } from "react";

export default function Counter() {
  const [coutner, setCounter] = useState(0);
  return (
    <button
      onClick={() => setCounter(coutner + 1)}
      className="p-5 text-2xl bg-teal-400"
    >
      Counter: {coutner}
    </button>
  );
}
