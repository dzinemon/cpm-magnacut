"use client"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MacroGalleryTextItem } from "@/components/pdp/MacroGallery"

const LifestyleItem = ({
    src,
    alt,
    title,
    caption,
    index,
}: {
    src: string
    alt: string
    title: string
    caption: string
    index: number
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const [isTapped, setIsTapped] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleTap = () => {
        setIsTapped((prev) => !prev)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setIsTapped(false)
    }

    const showText = isHovered || isTapped

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="group relative aspect-square bg-brand-grey overflow-hidden cursor-pointer touch-manipulation"
            onClick={handleTap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className={`object-cover transition-all duration-700 ease-out ${
                    showText ? "opacity-100 scale-110" : "opacity-80 scale-100"
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />
            <MacroGalleryTextItem
                title={title}
                caption={caption}
                isVisible={showText}
            />
        </motion.div>
    )
}

const lifestyleItems = [
    {
        src: "/discreet-carry.png",
        alt: "Deep Carry Clip",
        title: "Discreet Carry",
        caption: "Deep-carry titanium clip.",
    },
    {
        src: "/hand-holding-product.png",
        alt: "In Hand Scale",
        title: "Combat Ready",
        caption: "Optimized saber grip ergonomics.",
    },
]

export const LifestyleGallery = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {lifestyleItems.map((item, index) => (
                    <LifestyleItem key={item.title} {...item} index={index} />
                ))}
            </div>
        </section>
    )
}