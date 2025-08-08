import Image from "next/image";
import { AppButton } from "../global/app-button";

export const JoinUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };
  return (
    <section className="md:h-[400px] h-[380px] mb-10 relative md:absolute flex justify-between items-center px-4 lg:px-20 lg:-top-52 top-0 overflow-hidden w-full lg:mx-auto max-w-full lg:max-w-[60rem] rounded-2xl md:rounded-4xl bg-gradient-to-tl to-[#FF9898] from-[#8054FF]">
      <div className="flex md:text-left items-center text-center flex-col gap-8">
        <p className="text-sm">Love our Our Tool?</p>
        <h3 className="text-4xl leading-[50px] font-semibold max-w-[22rem]">
          Fell Free to Join our 15 Days Free Trial
        </h3>

        <AppButton variant="primary" className="md:w-fit w-3/4 text-sm py-3">
          Download Template
        </AppButton>
      </div>

      <Image
        src={"/joinus_image.svg"}
        alt="Join us image"
        width={550}
        height={200}
        className="absolute md:block hidden top-1/2 -translate-y-1/2 right-0 "
      />
    </section>
  );
};

// export const JoinUsSection = () => {
//   // Animation variants

//   return (
//     <motion.section
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="relative h-[300px] sm:h-[350px] md:h-[400px] mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-auto max-w-[60rem] rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gradient-to-tl to-[#FF9898] from-[#8054FF] overflow-hidden shadow-2xl"
//       style={{
//         marginTop: "-8rem",
//       }}
//       whileHover={{
//         scale: 1.02,
//         transition: { duration: 0.3 },
//       }}
//     >
//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12">
//         <motion.div
//           variants={containerVariants}
//           className="flex flex-col gap-4 sm:gap-6 md:gap-8 text-center md:text-left max-w-full md:max-w-[22rem]"
//         >
//           <motion.p
//             variants={itemVariants}
//             className="text-xs sm:text-sm md:text-base text-white/90 font-medium"
//           >
//             Love our Tool?
//           </motion.p>

//           <motion.h3
//             variants={itemVariants}
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight sm:leading-[35px] md:leading-[45px] lg:leading-[50px] font-semibold text-white"
//           >
//             Feel Free to Join our 15 Days Free Trial
//           </motion.h3>

//           <motion.div
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-fit mx-auto md:mx-0"
//           >
//             <AppButton
//               variant="primary"
//               className="text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <span className="sm:hidden">Download</span>
//               <span className="hidden sm:inline">Download Template</span>
//             </AppButton>
//           </motion.div>
//         </motion.div>

//         {/* Image - Hidden on mobile, visible on medium+ screens */}
//         <motion.div
//           variants={imageVariants}
//           className="hidden md:block absolute md:relative top-1/2 md:top-auto -translate-y-1/2 md:translate-y-0 right-0 md:right-auto flex-shrink-0"
//         >
//           <Image
//             src={"/joinus_image.svg"}
//             alt="Join us image"
//             width={550}
//             height={200}
//             className="w-[300px] md:w-[400px] lg:w-[450px] xl:w-[550px] h-auto object-contain"
//             priority
//           />
//         </motion.div>
//       </div>

//       {/* Background decorative elements */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{
//           opacity: [0.1, 0.2, 0.1],
//           scale: [1, 1.1, 1],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 blur-xl"
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{
//           opacity: [0.05, 0.15, 0.05],
//           scale: [1, 1.2, 1],
//           rotate: [360, 180, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//           delay: 2,
//         }}
//         className="absolute bottom-4 left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/5 blur-2xl"
//       />
//     </motion.section>
//   );
// };
