import Image from "next/image";
import Nav from "@/components/Nav";
import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import Fifth from "@/components/Fifth";
import Sixth from "@/components/Sixth";
import Seventh from "@/components/Seventh";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="w-full p-3">
      <Nav />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Footer/>
    </main>
  );
}
