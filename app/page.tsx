import HomePage from "./Pages/Home";
import About from "./Pages/AboutUs";
import Programs from "./Pages/Programs";
import Trainers from "./Pages/Trainers";
import Pricing from "./Pages/Pricing";
import Testimonial from "./Pages/Testimonial";
import FAQ from "./Pages/FAQs";
import Article from "./Pages/Article";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HomePage />
      <div className="rounded-b-[2rem] border-b-[6px] border-lime-400">
        <About />
        <Programs />
      </div>
      <div className="rounded-b-[2rem] border-b-[6px] border-lime-400">
        <Trainers />
        <Pricing />
      </div>
      <div className="rounded-b-[2rem] border-b-[6px] border-lime-400">
        <Testimonial />
        <FAQ />
      </div>
      <Article />

    </>
  )
}