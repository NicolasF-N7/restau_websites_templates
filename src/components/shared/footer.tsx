import Link from "next/link";
import React from "react";
import {Business, Navigation} from '@/data/types/business-data-types'
import {transformToSafeUrl} from "@/components/utility/functions"
import Image from "next/image";

function Footer({ businessInfo, navigationInfo } : {businessInfo: Business, navigationInfo: Navigation}) {
  return (
    <footer className="flex flex-col w-full px-5 py-10 mt-16 border-t-2 border-pumpkin in z-5 bg-footer-bg">
      <div className="w-full max-w-4xl m-auto flex flex-row justify-around items-start">
        
        {/* Navigation menu links */}
        <div className="flex flex-col">
          {navigationInfo.menus.map((menuTitle, index) => {
            const menuRoute = "#" + transformToSafeUrl(menuTitle);
            return (
              <div key={index} className="text-left mb-5">
                <Link href={menuRoute}>
                  <h4 className="uppercase text-sm">
                    {menuTitle}
                  </h4>  
                </Link>
              </div>
            );
          })}
        </div>

        {/* Social media links */}
        <div className="flex flex-col">
          {businessInfo.social_media.map((socialMedia, index) => {
            return (
              <div key={index} className="uppercase text-left font-bold mb-5">
                <Link
                  href={socialMedia.link}
                  target="_blank"
                  className="items-center flex">

                  {socialMedia.name}
                </Link>
              </div>
            );
          })}
        </div>
        

      </div>

      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t-2 border-pumpkin">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Réalisé avec{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"/>

                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"/>

                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                  width="100"
                  title="TailwindCSS"/>

                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Fait par Projet Z. Tout droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
