import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
