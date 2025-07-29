// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa';
// import HighlightedText from './HighlightedText'
// import CTAButton from './CTAButton';
// import Instructor from '../../../assets/Images/Instructor.png'

// const InstructorSection = () => {
//   return (
//     <div className='flex flex-col lg:flex-row gap-20 items-center' >
//       <div className=' lg:w-[50%] drop-shadow-[-20px_-20px_rgba(255,255,255)]' >
//         <img src={Instructor} alt="Instructor" />
//       </div>

//       <div className='lg:w-[50%] flex flex-col gap-10' >
//         <div className=' lg:w-[50%] text-4xl font-semibold '>
//           Become an
//           <HighlightedText text="instructor" />
//         </div>
//         <div className='font-medium text-base w-[90%] text-richblack-300' >
//           Instructors from around the world teach millions of students on Logic Labs Ed. We provide the tools and skills to teach what you love.
//         </div>

//         <div className='w-fit' >
//           <CTAButton active={true} linkto={'/signup'} >
//             <div className='flex flex-row items-center gap-2' >
//               Start Teaching Today
//               <FaArrowRight />
//             </div>
//           </CTAButton>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default InstructorSection

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from './HighlightedText';
import CTAButton from './CTAButton';
import Instructor from '../../../assets/Images/Instructor.png';

const InstructorSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
      {/* ─── Image with faux frame ──────────────────────────────── */}
      <div className="relative lg:w-1/2 max-w-xl">
        {/* white frame behind the photo */}
        <span className="absolute -top-6 -left-6 -z-10 block h-full w-full rounded-lg bg-white" />
        <img
          src={Instructor}
          alt="Instructor"
          className="block w-full rounded-lg object-cover"
        />
      </div>

      {/* ─── Content ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-8 lg:w-1/2">
        <h2 className="text-4xl font-semibold leading-snug text-white">
          Become an <HighlightedText text="instructor" />
        </h2>

        <p className="w-[90%] text-base font-medium text-richblack-300">
          Instructors from around the world teach millions of students on Logic Labs Ed.
          We provide the tools and skills to teach what you love.
        </p>

        <CTAButton active linkto="/signup" className="w-fit">
          <div className="flex items-center gap-2">
            Start Teaching Today <FaArrowRight />
          </div>
        </CTAButton>
      </div>
    </section>
  );
};

export default InstructorSection;

