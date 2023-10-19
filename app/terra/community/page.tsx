import Conversation from "@/app/components/community/Conversation";
import HeroSection from "@/app/components/community/heroSection";

import React from "react";

export default function page() {
  return (
    <>
      <main className=" bg-black">
        <section className="flex justify-center  pt-4 ">
          <HeroSection />
        </section>

        <section className="flex justify-center mt-44 pb-40">
          <Conversation />
        </section>
      </main>
    </>
  );
}
