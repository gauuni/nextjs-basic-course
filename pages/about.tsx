// import Image from "next/image";
// // import styles from '@/styles/Home.module.css'
// import avatar from "../public/avatar.jpg";
// import cover from "../public/cover.jpg";

// function Header() {
//   return (
//     <>
//       <Image src={cover} alt="no image" className="h-1/4 object-cover" />
//       <div className="flex flex-row justify-items-center gap-2 -mt-20 px-4">
//         <div>
//           <Image
//             src={avatar}
//             alt="no image"
//             className="w-32 h-32 object-cover rounded-full border-2 border-white"
//           />
//         </div>
//         <div className="flex flex-col justify-end">
//           <h3 className="text-orange-500 font-semibold text-xl">
//             Nguyễn Khôi Nguyên
//           </h3>
//           <div className="">Senior iOS Developer</div>
//         </div>
//       </div>
//     </>
//   );
// }

// function SectionHeader(props: { title: string }) {
//   return (
//     <>
//       <h3 className="font-bold text-gray-500">{props.title}</h3>
//       <div className=" bg-gray-300" style={{ height: "2px" }}></div>
//       <div className="h-2"></div>
//     </>
//   );
// }

// function Section(props: { data: SectionData }) {
//   let items = props.data.items;
//   return (
//     <>
//       <SectionHeader title={props.data.title} />

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// type SectionData = {
//   title: string;
//   items: string[];
// };

// export default function About() {
//   const data: SectionData[] = [
//     {
//       title: "Contact",
//       items: [
//         "🏠 xxx đường XXX, phường ABC, Nha Trang Khánh Hoà",
//         "✉️ nknguyen.grandm@gmail.com",
//         "📱 01234567890",
//       ],
//     },
//     {
//       title: "Hobbies",
//       items: ["Books", "Game", "Gym", "Running"],
//     },
//     {
//       title: "Skills",
//       items: [
//         "✅ Mobile development",
//         "✅ Backend",
//         "✅ Design",
//         "✅ Web development",
//       ],
//     },
//     {
//       title: "Work experiences",
//       items: ["• Grand M.VN", "• Hamado", "• BCA studio", "• CO2"],
//     },
//   ];

//   const languages = ["typescript", "python", "ruby", "swift"];
//   const frameworks = ["nextjs", "nodejs", "xcode", "visual-studio-code"];

//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="flex flex-row mx-4 gap-4 mb-8">
//         {/* Left */}
//         <div className="w-1/3 flex flex-col gap-4">
//           <Header />

//           {/* Sections */}
//           <div className="flex flex-col gap-4">
//             {data.map((item) => (
//               <div key={item.title}>
//                 <Section data={item} />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-10 mt-2">
//           {/* Programming */}
//           <div>
//             <SectionHeader title="Programming Lanuages"></SectionHeader>
//             <div className="flex flex-row gap-8">
//               {languages.map((lang) => (
//                 <div key={lang} className="">
//                   <Image
//                     src={`/programming/${lang}.svg`}
//                     alt={`${lang}.jpg`}
//                     width={80}
//                     height={0}
//                     className="aspect-square rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* frameworks */}
//           <div>
//             <SectionHeader title="Frameworks"></SectionHeader>
//             <div className="flex flex-row gap-8">
//               {frameworks.map((lang) => (
//                 <div key={lang} className="">
//                   <Image
//                     src={`/programming/${lang}.svg`}
//                     alt={`${lang}.jpg`}
//                     width={80}
//                     height={0}
//                     className="aspect-square rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Gallery */}
//           <div>
//             <SectionHeader title="Photos"></SectionHeader>
//             <div className="grid grid-cols-5 gap-2">
//               {Array.from(Array(20).keys()).map((i) => (
//                 <div key={i} className="">
//                   <Image
//                     src={`/gallery/${i + 1}.jpeg`}
//                     alt={`${i}.jpg`}
//                     width={1}
//                     height={1}
//                     quality={100}
//                     layout="responsive"
//                     className="w-full aspect-square rounded-lg object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Box sx={{ bgcolor: "black" }}> asafssffs</Box>
    </Box>
  );
};

export default About;
