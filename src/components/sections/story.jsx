import Image from 'next/image';


const Story = ({ textsContent }) => (
  <div className="bg-gray-50 max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      {/* Row */}
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" 
            src="/salad-beef-plate.png"
            width={500}
            height={500}
            alt=""/>
          <div className="text-gray-900 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">{textsContent.title}</h2>
              <p className="mb-8 font-light lg:text-xl">{textsContent.subtitle}</p>
              
              {/*  List  */}
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-300 my-7">
                {textsContent.milestones.map((milestoneText, index) => (
                  <li className="flex space-x-3">
                      {/*  Icon  */}
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      <span className="text-base font-medium leading-tight text-gray-900 ">{milestoneText}</span>
                  </li>
                ))}
              </ul>
              <p className="font-light lg:text-xl">{textsContent.lastParagraph}</p>
          </div>
      </div>
  </div>
);

export default Story;