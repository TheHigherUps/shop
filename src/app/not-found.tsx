"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {

  },[])
  return (
   <div className="text-black">
    error 404
    <Image className="[animation-duration:1500ms] animate-spin " src="/assets/images/sad-face.png" alt="Sad Face" width={150} height={150} />
   </div>
  )
}