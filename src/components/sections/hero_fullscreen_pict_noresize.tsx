import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import {HeroSection} from '@/data/types/business-data-types'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { transformToSafeUrl } from '../utility/functions';

const HeroFullscreenPict = ({ content }: {content: HeroSection}) => {

  return (
    <div id="accueil" className=" mx-auto overflow-hidden">
      {/* Image background (absolute pos) */}
      <div className=" top-0 left-0 z-[-1] overflow-hidden">
        <InView threshold={0.25} triggerOnce>
          {({ ref, inView}) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.2 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className="flex flex-col justify-start items-start">
                {/* Video frame */}
                <Image
                  src={content.image}
                  alt="Hero image"
                  quality={100}
                  width={2040}
                  height={2040}
                />
            </motion.div>
          )}
        </InView>
      </div>

      {/* Text overlaying the image */}
      <div className='flex flex-col justify-between'>
        <div className="sm:mt-12">
            {/* H1 + CTA */}
            
            <div className={`flex flex-col items-start mt-4 text-left text-header-hero uppercase font-light tracking-widest`}>
              <div className='ml-[10%] absolute top-[15%] sm:top-[20%]'>
                <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-hero-title leading-normal">
                  {content.title}
                </h1>
                <h3 className="text-hero-subtitle text-md font-bold mt-4 mb-6">
                  {content.subtitle}
                </h3>
              </div>
              

              <ScrollLink 
                to={transformToSafeUrl(content.call_to_action.target_link)}
                smooth={true}
                offset={-10}
                duration={200}
                className="cursor-pointer font-bold sm:absolute sm:top-[35%] sm:ml-[10%] sm:self-start self-center">
                  <div className='inline-block text-mainCTA-text bg-mainCTA-normal py-4 px-8 rounded-lg hover:bg-mainCTA-hover transition text-md font-semibold'>{content.call_to_action.text}</div>
              </ScrollLink>
            </div>
              
        </div>

        {/* Info list. Shown in overlay for large screens, and below image for smaller screens */}
        <div className="hidden sm:grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {content.info.map((info, index) => (
            <InView threshold={0.25} triggerOnce>
              {({ ref, inView}) => (
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.5, delay: 0.1*index }}
                  variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: 100, opacity: 0 },
                  }}
                  className=" py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0" key={index} custom={{duration: 2 + index}}>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                      <img src={info.icon} alt={`${info.title} ${info.subtitle}`} className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl text-hero-quick-info font-bold">
                        {info.title}
                      </p>
                      <p className="text-lg text-hero-quick-info">{info.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>
          ))}
        </div>{/* End Info list */}
        

      </div>{/*End Text overlaying the inage */}

      {/* Info list. Shown in overlay for large screens, and below image for smaller screens */}
      <div className="w-full sm:hidden grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {content.info.map((info, index) => (
            <InView threshold={0.25} triggerOnce>
              {({ ref, inView}) => (
                <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.5, delay: 0.1*index }}
                  variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: 100, opacity: 0 },
                  }}
                  className=" py-4 sm:py-6 w-8/12 px-4 sm:w-auto ml-[15%] mx-auto sm:mx-0" key={index} custom={{duration: 2 + index}}>
                  <div className="flex items-center justify-start sm:ml-0">
                    <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                      <img src={info.icon} alt={`${info.title} ${info.subtitle}`} className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl text-black-600 font-bold">
                        {info.title}
                      </p>
                      <p className="text-lg text-black-500">{info.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>
          ))}
        </div>{/* End Info list */}

    </div>
  );
};

export default HeroFullscreenPict;
