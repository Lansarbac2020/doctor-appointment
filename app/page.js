import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";

export default function Home() {
  return (
   <div>
     {/* Hero section */}
     <Hero/>

     {/* search and categroy */}

     <CategorySearch/>
     {/* doctor list */}

     <DoctorList/>
   </div>
  );
}
