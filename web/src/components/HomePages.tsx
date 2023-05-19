import { Copyright } from "lucide-react";
import { Blur } from "./Blur";
import { Hero } from "./Hero";
import { SignIn } from "./SignIn";
import { Stripes } from "./Stripes";

export function HomePage(){
  return (
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">

    <Blur />

    <Stripes />

    <SignIn />

    <Hero />

    <Copyright />
    
  </div>
  )
}