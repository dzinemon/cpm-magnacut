"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export const MacroGalleryTextItem = ({
    title,
    caption,
    isVisible = false,
}: {
    title: string
    caption: string
    isVisible?: boolean
}) => (
    <div className="absolute bottom-0 left-0 p-8 w-full">
        {/* Dark gradient backdrop */}
        <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        />
        <h3
            className={`relative z-10 text-white font-condensed font-bold text-2xl uppercase tracking-wide mb-1 transition-transform duration-500 ${
                isVisible ? "translate-y-0" : "translate-y-4"
            }`}
        >
            {title}
        </h3>
        <p
            className={`relative z-10 text-safety-orange font-mono text-xs uppercase tracking-widest transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-0.5"
            }`}
        >
            {caption}
        </p>
    </div>
)

const MacroItem = ({
    src,
    title,
    caption,
    index,
}: {
    src: string
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
        // Also reset tap state on mouse leave for clean state
        setIsTapped(false)
    }

    // Show text when: hovered OR (in view on mobile via tap)
    const showText = isHovered || isTapped

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="group relative aspect-square overflow-hidden bg-brand-black cursor-pointer touch-manipulation"
            onClick={handleTap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={src}
                alt={title}
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

const macroItems = [
    { src: "/blade-macro.jpg", title: "The Edge", caption: "CPM-Magnacut Steel" },
    { src: "/grip.png", title: "The Grip", caption: "Grade 5 Titanium Architecture" },
    { src: "/top-down.png", title: "The Lock", caption: "Zero-Tolerance Lockup" },
]

export const MacroGallery = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 w-full">
            {macroItems.map((item, index) => (
                <MacroItem key={item.title} {...item} index={index} />
            ))}
        </section>
    )
}