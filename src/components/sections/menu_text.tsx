// Represents a section to display a restaurant menu with description text and images for dishes

import Image from 'next/image';
import Link from 'next/link';
import {IntegratedMenuSection} from '@/data/types/business-data-types'
import ExpandableSection from '@/components/utility/expandable';
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MenuText = ({ content } : {content: IntegratedMenuSection}) => (
  <div id="menu" className="overflow-hidden max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
    {/* Title */} 
    <h2 className="font-bold text-3xl">{content.title}</h2>
     
    <div className='flex flex-row justify-center'>
      

      
      <div className='w-full mx-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          
          {/* Menu categories (e.g. burger, salades, entrees) */}
          {content.categories.map((menuCategory, index) => (
            <InView threshold={0} triggerOnce>
              {({ ref, inView}) => (
              <motion.div
                ref={ref}
                initial={{ x:-100, opacity: 0 }}
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -100, opacity: 0 },
                }}
                className='py-4 rounded-xl'>
                {/* Category title */}
                <h3 className='text-2xl font-bold border-t-2 border-b-2 py-4 border-navbar'>{menuCategory.title}</h3>

                {/* Dishes list */}
                {menuCategory.dishes.map((dish, index) =>(
                  <div className='text-left mx-2 p-4 my-4'>

                    {/* Dish title and price  */}
                    <div className='flex flex-row justify-between mb-2 w-full'>
                      {dish.name && <p className='text-l font-bold '>{dish.name}</p>}
                      {dish.price && <p className='text-md font-bold text-deepPumpkin'>{dish.price} €</p>}
                    </div>
                    
                    {/* Dish Description */}
                    {dish.description && <p className='text-md'>{dish.description}</p>}
                  </div>
                ))}

                {/* Category image. It is arbitrarily set to the image of the first dish of that category */}
                <div className='flex flex-row justify-center mx-2'>
                  <div className='rounded-xl overflow-hidden my-auto'>
                    {menuCategory.dishes[0].image && 
                    <Image 
                    width={360}
                    height={360}
                    src={menuCategory.dishes[0].image}
                    alt={`Image du plat ${menuCategory.dishes[0].name}`}
                    className='object-contain'></Image>}
                  </div>
                  
                </div>

                {/* Divider */}
                {/* <div className="mt-8 border-t-2 border-navbar"></div> */}
              </motion.div>
              )}
            </InView>
          ))}
          
      </div>
      

    </div>
    
     
  </div>
);

export default MenuText;