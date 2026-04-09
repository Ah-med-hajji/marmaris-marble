"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}

export default function ProductCard({
  name,
  description,
  image,
  alt,
  index,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-center justify-center">
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
          <h3 className="font-serif text-white text-2xl font-bold mb-2">
            {name}
          </h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
      {/* Default Name Tag */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="font-serif text-white text-lg font-semibold">
          {name}
        </h3>
      </div>
    </motion.div>
  );
}
