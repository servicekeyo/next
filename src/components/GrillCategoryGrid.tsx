import Image from "next/image"
import { getGrillCategories, getGrillsByCategory } from "@/lib/wordpress"

type GrillCategoryGridProps = {
  categorySlug: string
  limit?: number
  title?: string
  className?: string
}

const imgFrom = (v: any) => (typeof v === "string" ? v : v?.url || v?.source_url || "")

export default async function GrillCategoryGrid({
  categorySlug,
  limit = 6,
  title,
  className = "",
}: GrillCategoryGridProps) {
  const categories = await getGrillCategories()
  const cat = (Array.isArray(categories) ? categories : []).find((c: any) => c?.slug === categorySlug)
  const items = cat ? await getGrillsByCategory(cat.id, limit) : []
  const list = (Array.isArray(items) ? items : []).slice(0, limit)

  return (
    <section className={className}>
      {title ? (
        <div className="herotitle-w">
          <h2 className="heading-main2">{title}</h2>
        </div>
      ) : null}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((item: any) => {
            const name = item?.title?.rendered ?? item?.title ?? ""
            const media = item?._embedded?.["wp:featuredmedia"]?.[0]
            const fallback = media?.source_url || media?.media_details?.sizes?.medium?.source_url || ""
            const front = imgFrom(item?.acf?.front_image) || fallback
            const back = imgFrom(item?.acf?.back_image) || ""
            return (
              <a key={item?.id ?? name} href={item?.slug ? `/grills/${item.slug}` : "#"} className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
                <div className="relative pt-[100%]">
                  {front ? (
                    <Image src={front} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${back ? "transition-opacity duration-300 group-hover:opacity-0" : ""}`} />
                  ) : null}
                  {back ? (
                    <Image src={back} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  ) : null}
                </div>
                <div className="p-4">
                  <div className="text font-semibold">{name}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

