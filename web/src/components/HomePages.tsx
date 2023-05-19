import { Copyright } from "@/components/Copyright";
import { Blur } from "@/components/Blur";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";
import { Stripes } from "@/components/Stripes";

export function HomePage() {
  return (
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
      <Blur />

      <Stripes />

      <SignIn />

      <Hero />

      <Copyright />
    </div>
  );
}
