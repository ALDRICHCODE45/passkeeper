"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

import { Clipboard, File, Signature, Table } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./acceternity/bento-grid";
import Image from "next/image";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-10 md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2]  [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-black"></div>
);

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
      >
        <Image
          src="/lock1.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tus datos estan seguros
        </p>
        <p className="border border-red-500  bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Secure
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border  flex flex-col items-center justify-center">
        <Image
          src="/lock1.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          No olvides mas tus contrasenas
        </p>
        <p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Efficient
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border  flex flex-col items-center justify-center"
      >
        <Image
          src="/lock1.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Accede a ellas desde donde sea
        </p>
        <p className="border border-orange-500 bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Fast
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => (
  <div className="bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
    <div className="max-w-[200px]">
      <Image
        src="/lock1.jpg"
        height={100}
        width={100}
        alt="lock"
        className="w-full h-full object-cover" // Asegúrate de que la imagen se ajuste al contenedor
      />
    </div>
  </div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border  border-white/[0.2] p-2  items-center space-x-2  bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto  bg-black"
      >
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2  bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg  flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Simplifica tu vida",
    description:
      "No más contraseñas olvidadas. Organiza y accede a tus cuentas fácilmente.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Clipboard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Adiós a los Post-its",
    description:
      "Olvídate de los Post-its con contraseñas pegados en tu escritorio.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <File className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Protección total",
    description:
      "Mantén tus contraseñas seguras en un solo lugar, sin riesgo de pérdida o robo.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <Signature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Seguridad a tu alcance",
    description:
      "Accede a tus contraseñas de manera rápida y segura desde cualquier dispositivo.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Table className="h-4 w-4 text-neutral-500" />,
  },
];
