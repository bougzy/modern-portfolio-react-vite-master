// import React from 'react';
// import Strings from '../Shared/Strings';
// import { IoArrowForwardOutline } from 'react-icons/io5';
// import udemy from "../assets/udemy.png";
// import blogg from "../assets/blogg.png";

// interface ProjectCardProps {
//   title: string;
//   imageSrc: string;
//   link: string; // Add a link property to the ProjectCardProps
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, link }) => {
//   return (
//     <div className="max-w-xs mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
//       <a href={link}> {/* Use the link in the anchor element */}
//         <img src={imageSrc} alt={title} className="w-full h-96 object-cover" />
//         <div className="p-4">
//           <h2 className="text-xl font-semibold">{title}</h2>
//         </div>
//       </a>
//     </div>
//   );
// }

// function Services() {
//   const servicesList = [
//     {
//       id: 1,
//       title: Strings.FRONTED,
//       desc: Strings.FRONTED_DESC,
//       logo: '/design.png',
//     },
//     {
//       id: 3,
//       title: Strings.OFFLINE,
//       desc: Strings.OFFLINE_DESC,
//       logo: '/teaching.png',
//     },
//   ];

//   const projects = [
//     {
//       title: "Udemy Clone",
//       imageSrc: udemy,
//       link: "https://udemy-clone-omega.vercel.app/", // Add the link property
//     },
//     {
//       title: "Blog",
//       imageSrc: blogg,
//       link: "https://v-blogg.vercel.app/", // Add the link property
//     },
//     // Add more project objects as needed
//   ];

//   return (
//     <div className="px-12 mt-12">
//       <div className="flex items-center">
//         <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//         <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
//         <h2 className="text-[24px] font-bold">{Strings.SERVICES}</h2>
//         <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
//         <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//       </div>
//       <div className="flex justify-around mt-16">
//         {servicesList.map((item) => (
//           <div
//             className="text-center flex flex-col justify-center items-center gap-6"
//             key={item.id}
//           >
//             <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
//               <img
//                 src={item.logo}
//                 className="w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer"
//               />
//             </div>
//             <h2 className="mt-5 font-bold">{item.title}</h2>
//             <h2 className="text-gray-400">{item.desc}</h2>
//             <IoArrowForwardOutline className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
//           </div>
//         ))}
//       </div>
//       <div className="bg-gray-100 min-h-screen p-8">
//         <h1 className="text-2xl font-semibold text-center mb-4">Projects</h1>
//         <div className="flex flex-wrap justify-center">
//           {projects.map((project) => (
//             <ProjectCard key={project.title} title={project.title} imageSrc={project.imageSrc} link={project.link} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;


import React from 'react';
import Strings from '../Shared/Strings';
import { IoArrowForwardOutline } from 'react-icons/io5';
import udemy from "../assets/udemy.png";
import blogg from "../assets/blogg.png";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, link }) => {
  return (
    <div className="max-w-xs mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <a href={link}>
        <img src={imageSrc} alt={title} className="w-full h-96 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </a>
    </div>
  );
}

function Services() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTED,
      desc: Strings.FRONTED_DESC,
      logo: '/design.png',
    },
    {
      id: 3,
      title: Strings.OFFLINE,
      desc: Strings.OFFLINE_DESC,
      logo: '/teaching.png',
    },
  ];

  const projects = [
    {
      title: "Udemy Clone",
      imageSrc: udemy,
      link: "https://udemy-clone-omega.vercel.app/",
    },
    {
      title: "Blog",
      imageSrc: blogg,
      link: "https://v-blogg.vercel.app/",
    },
    // Add more project objects as needed
  ];

  return (
    <div className="px-4 md:px-12 mt-12">
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full mb-4 md:mb-0"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px] md:mt-0"></div>
        <h2 className="text-2xl md:text-4xl font-bold">{Strings.SERVICES}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full mb-4 md:mb-0"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-8 md:mt-16">
        {servicesList.map((item) => (
          <div
            className="text-center flex flex-col justify-center items-center gap-6"
            key={item.id}
          >
            <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
              <img
                src={item.logo}
                className="w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <h2 className="text-gray-400">{item.desc}</h2>
            <IoArrowForwardOutline className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        ))}
      </div>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-4">Projects</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} imageSrc={project.imageSrc} link={project.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
