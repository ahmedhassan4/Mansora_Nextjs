import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <h1> sidebar</h1>
      <div className="py-1">{children}</div>
    </div>
  );
}
