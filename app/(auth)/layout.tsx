import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10">
        <div>
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Logo"
            width={224}
            height={82}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is the place where you can store all your documents
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="h-auto"
          />
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
