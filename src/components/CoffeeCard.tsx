"use client";

import Image from "next/image";
import Link from "next/link";
import { Coffee } from "@app/coffee/page";
import React from "react";

interface CoffeeCardProps {
    coffee: Coffee;
}    

const CoffeeCard : React.FC<CoffeeCardProps> = ({ coffee }) => {
   const handleAddToCart =() =>{
    console.log(` Adding ${coffee.title} to cart`);
   };
   const handleCustomize = () => {
    console.log(` Customizing ${coffee.title}`);
   };
   return(
    <div></div>
   )
}
export default CoffeeCard