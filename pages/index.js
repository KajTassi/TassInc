import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import Panels from "../components/panels";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tassi Inc | VW Auto Repair</title>
        <meta
          name="description"
          content="The boilerplate code was done with Nextly, a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/img/vwbug.png" />
      </Head>

      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Common services"
        title="Quotes">
        Some services and repairs are just more common than others, so we have pricing ready to go for you below.
      </SectionTitle>
      <Panels />
      <Cta />
      <Footer />
      <section id="contact" class="contact-mf sect-pt4 route">
      <PopupWidget />
      </section>
    </>
  );
}

export default Home;