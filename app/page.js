"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Testimonial from "./_components/Testimonial";

export default function Home() {

  const [doctorList, setDoctorList] = useState([]);

  useEffect(()=>{
    getDoctorsList();
  },[])
   const getDoctorsList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
   }
  return (
   <div>
     {/* Hero section */}
     <Hero/>

     {/* search and categroy */}

     <CategorySearch/>
     {/* doctor list */}

     <DoctorList doctorList={doctorList}/>\
     <Testimonial/>
   </div>
  );
}
