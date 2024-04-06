import Image from "next/image";
import Page from "@/components/utility/page";
import Story from "@/components/sections/story";
import HeroPictSide from "@/components/sections/hero_right_pict";
import Gallery from "@/components/sections/gallery";
import Menu from "@/components/sections/menu";
import OpeningTimeAndLocationMap from "@/components/sections/opening_time_and_location_map";
import ContactAndInfo from "@/components/sections/contact_and_info";

// Data import
import {business_data} from "@/data/business-data"

export default function Home() {

  return (
    <Page currentPage="Accueil" business={business_data.business} navigation={business_data.website_content.navigation}>
      {/* SECTION TO BUILD & CONNECT */}
      <HeroPictSide content={business_data.website_content.sections.hero} />
      <Story content={business_data.website_content.sections.story}/>
      <Gallery content={business_data.website_content.sections.gallery}/>
      <Menu content={business_data.website_content.sections.menu}/>
      <OpeningTimeAndLocationMap businessInfo={business_data.business} openingTimeContent={business_data.website_content.sections.opening_time} locationContent={business_data.website_content.sections.location}/>
      <ContactAndInfo contactContent={business_data.website_content.sections.contact} usefulInformationContent={business_data.website_content.sections.useful_info}/>
    </Page>
  );
}
