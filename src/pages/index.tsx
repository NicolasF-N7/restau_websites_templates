import Image from "next/image";
import Page from "@/components/utility/page";
import Story from "@/components/sections/story";
import HeroPictSide from "@/components/sections/hero-pict-side";
import Gallery from "@/components/sections/gallery";

// Data import
import {business_data} from "@/data/business-data"

export default function Home() {

  return (
    <Page currentPage="Accueil" business={business_data.business} navigation={business_data.website_content.navigation}>
      {/* SECTION TO BUILD & CONNECT */}
      <HeroPictSide content={business_data.website_content.sections.hero} />
      <Story content={business_data.website_content.sections.story}/>
      <Gallery />

    </Page>
  );
}
