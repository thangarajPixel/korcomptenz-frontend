import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InspireSection = () => {
  return (
    <div className="container-md  mt-0 md:mt-16 py-4">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="block xl:hidden text-left md:text-center">
          <h1 className="text-xl lg:2xl font-bold text-custom-gray ">
            Best-in-class solutions for key industry challenges
          </h1>
        </div>
        <Card className="border-2 bg-[#E2EBE4] flex-row py-0 rounded-4xl">
          <CardContent className="px-0 flex flex-col justify-between text-[#313941] ">
            <div className="p-6">
              <h3 className="text-xl font-semibold   mb-4">
                Manufacturing
              </h3>
              <p className="text-sm mb-4">
                Struggling with poor supply chain visibility, planning gaps, and
                disconnected operations? We help you simplify processes, boost
                efficiency, and respond better to customer demands.
              </p>
            </div>
            <div className="flex justify-end p-6 pr-0 h-3/4 w-full">
              <KorcomptenzImage
                src="/assets/home/Manufacturing.png"
                alt="Manufacturing robotic arm"
                width={500}
                height={500}
                className=""
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col justify-between gap-5 ">
          <div className="hidden xl:block text-center">
            <h1 className="text-2xl font-bold text-custom-gray mb-6 text-balance">
              Best-in-class solutions for key industry challenges
            </h1>
            <Button
              size="xl"
              arrow={true}
              className="variant:default px-8 py-2 text-lg rounded-full   inline-flex"
            >
              Explore solutions for your industry
            </Button>
          </div>
          <Card className="bg-[#E2EBE4] p-0 h-full rounded-4xl">
            <CardContent className="p-6 text-[#313941]">
              <div className="flex mb-4">
                <KorcomptenzImage
                  src="/assets/home/Healthcare.png"
                  alt="Healthcare stethoscope"
                  width={300}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Healthcare
                </h3>
                <p className=" text-sm">
                  We enable healthcare providers to deliver connected,
                  patient-centric experiences through intuitive design,
                  personalized journeys, and digital innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-8 justify-between">
          <Card className="bg-[#E2EBE4] relative rounded-4xl">
            <CardContent className="p-6 text-[#313941]">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold  mb-2 pt-5">
                    Banking & <br /> Financial Services
                  </h3>
                  <p className=" text-sm">
                    We help you lead in the digital era with AI-driven,
                    customer-centric solutions that enhance engagement, boost
                    efficiency, and elevate customer experiences.
                  </p>
                </div>
                <div className="flex-shrink-0 absolute mt-4 right-3 -top-10">
                  <KorcomptenzImage
                    src="/assets/home/Card.png"
                    alt="Card"
                    width={144}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#E2EBE4] relative rounded-4xl">
            <CardContent className="p-6 text-[#313941]">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold  mb-2 pt-5">
                    Retail & <br /> E-Commerce
                  </h3>
                  <p className=" text-sm">
                    We empower retail brands with connected, end-to-end
                    solutions that streamline operations, improve agility,
                    simplify supply chain management and elevate customer
                    experiences.
                  </p>
                </div>
                <div className="flex-shrink-0 absolute right-3 -top-10">
                  <KorcomptenzImage
                    src="/assets/home/Reatils.png"
                    alt="Retail shopping bags"
                    width={111}
                    height={80}
                    className="rounded-lg mt-4"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex xl:hidden justify-center w-full mt-8">
        <Button
          size="xl"
          arrow={true}
          className="variant:default lg:text-sm text-xs lg:px-8 px-2 py-3 rounded-full w-full inline-flex"
        >
          Explore solutions for your industry
        </Button>
      </div>
    </div>
  );
};

export default InspireSection;


// return (
//   <div className="container-lg py-6 mt-0 md:mt-16">
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
//       <div className="block xl:hidden text-left md:text-center">
//         <h1 className="md:text-2xl text-xl font-bold text-custom-gray ">
//           Best-in-class solutions for key industry challenges
//         </h1>
//       </div>
//       <Card className="border-2 bg-[#E2EBE4] flex-row py-3 md:py-0 rounded-4xl">
//         <CardContent className="px-0 flex flex-col justify-between text-[#313941] ">
//           <div className="p-6">
//             <h3 className="md:text-xl text-md font-semibold   mb-4">
//               Manufacturing
//             </h3>
//             <p className="md:text-sm text-xs mb-2 md:mb-4">
//               Struggling with poor supply chain visibility, planning gaps, and
//               disconnected operations? We help you simplify processes, boost
//               efficiency, and respond better to customer demands.
//             </p>
//           </div>
//           <div className="flex justify-end p-4 md:p-6 pr-0 h-3/4 w-full">
//             <KorcomptenzImage
//               src="/assets/home/Manufacturing.png"
//               alt="Manufacturing robotic arm"
//               width={500}
//               height={500}
//               className=""
//             />
//           </div>
//         </CardContent>
//       </Card>
//       <div className="flex flex-col justify-between gap-5 ">
//         <div className="hidden xl:block text-center">
//           <h1 className="text-2xl font-bold text-custom-gray mb-6 text-balance">
//             Best-in-class solutions for key industry challenges
//           </h1>
//           <Button
//             size="xl"
//             arrow={true}
//             className="variant:default px-8 py-2 text-lg rounded-full   inline-flex"
//           >
//             Explore solutions for your industry
//           </Button>
//         </div>
//         <Card className="bg-[#E2EBE4] p-0 h-full rounded-4xl">
//           <CardContent className="p-6 text-[#313941]">
//             <div className="flex mb-4">
//               <KorcomptenzImage
//                 src="/assets/home/Healthcare.png"
//                 alt="Healthcare stethoscope"
//                 width={300}
//                 height={100}
//                 className="rounded-lg"
//               />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">
//                 Healthcare
//               </h3>
//               <p className=" text-sm">
//                 We enable healthcare providers to deliver connected,
//                 patient-centric experiences through intuitive design,
//                 personalized journeys, and digital innovation.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       <div className="flex flex-col gap-8  justify-between">
//         <Card className="bg-[#E2EBE4] relative rounded-4xl">
//           <CardContent className="p-6 text-[#313941]">
//             <div className="flex items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold  mb-2 pt-5">
//                   Banking & <br /> Financial Services
//                 </h3>
//                 <p className=" text-sm">
//                   We help you lead in the digital era with AI-driven,
//                   customer-centric solutions that enhance engagement, boost
//                   efficiency, and elevate customer experiences.
//                 </p>
//               </div>
//               <div className="flex-shrink-0 mt-4  absolute right-3 -top-10">
//                 <KorcomptenzImage
//                   src="/assets/home/Card.png"
//                   alt="Card"
//                   width={144}
//                   height={80}
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="bg-[#E2EBE4] relative rounded-4xl">
//           <CardContent className="p-6 text-[#313941]">
//             <div className="flex items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold  mb-2 pt-5">
//                   Retail & <br /> E-Commerce
//                 </h3>
//                 <p className=" text-sm">
//                   We empower retail brands with connected, end-to-end
//                   solutions that streamline operations, improve agility,
//                   simplify supply chain management and elevate customer
//                   experiences.
//                 </p>
//               </div>
//               <div className="flex-shrink-0 absolute right-3 -top-10">
//                 <KorcomptenzImage
//                   src="/assets/home/Reatils.png"
//                   alt="Retail shopping bags"
//                   width={111}
//                   height={80}
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//     <div className="flex xl:hidden justify-center w-full mt-8">
//       <Button
//         size="xl"
//         arrow={true}
//         className="variant:default lg:text-sm text-xs lg:px-8 px-2 py-3 rounded-full w-full inline-flex"
//       >
//         Explore solutions for your industry
//       </Button>
//     </div>
//   </div>
// );


