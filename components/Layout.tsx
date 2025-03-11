import React from 'react';
import MovingBorderDemo from "./moving-border-demo";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <main className="w-full">{children}</main>
      <div className="flex justify-center items-center w-full fixed bottom-10 z-50">
        <MovingBorderDemo />
      </div>
    </div>
  );
};

export default Layout;