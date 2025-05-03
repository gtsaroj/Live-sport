import Image from "next/image"
import Link from "next/link"

interface AdBannerProps {
  banner: {
    id: string
    image: string
    link?: string
  }
  orientation?: "horizontal" | "vertical"
}

export function AdBanner({ banner, orientation = "horizontal" }: AdBannerProps) {
  const content = (
    <div
      className={`relative overflow-hidden rounded-lg ${orientation === "horizontal" ? "aspect-[6/2] sm:aspect-[6/1]" : "aspect-[2/1] sm:aspect-[2/3]"} w-full`}
    >
      <Image
        src={banner.image || `/placeholder.svg?height=200&width=${orientation === "horizontal" ? "1200" : "400"}`}
        alt="Advertisement"
        fill
        className="object-cover"
      />
      <div className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1 rounded">Ad</div>
    </div>
  )

  if (banner.link) {
    return (
      <Link href={banner.link} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    )
  }

  return content
}
