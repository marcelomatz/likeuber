import React from "react";

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full bg-background">{children}</main>;
}
