import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand h-screen p-10 hidden w-1/2 lg:flex justify-center items-center xl:w-2/5">
        <div className="max-h-[800px] max-w-[400px] space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Logo"
            width={224}
            height={82}
            className="h-auto"
          />
          <div className="space-y-10 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              Awesome, we've created the perfect place for you to store all your
              documents.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:scale-105 hover:rotate-3"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-10 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="Logo"
            width={224}
            height={82}
            className="h-auto"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
