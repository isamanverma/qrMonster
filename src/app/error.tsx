"use client";

import React from "react";

export default function Error() {
  return (
    <div className="grid min-h-screen place-items-center bg-purple-200">
      <div className="flex flex-col items-center justify-center">
        <h1>Whoops! An Error Occurred</h1>
        <button>Return</button>
      </div>
    </div>
  );
}
