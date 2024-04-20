import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex h-screen items-center w-full justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
