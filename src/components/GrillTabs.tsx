import GrillTabsClient from './GrillTabsClient'
import { getGrillCategories, getGrillsByCategory } from '@/lib/wordpress'

export default async function GrillTabs() {
  const categories = await getGrillCategories()
  const pairs = await Promise.all(
    (Array.isArray(categories) ? categories : []).map(async (c: any) => {
      const items = await getGrillsByCategory(c.id)
      return [c.id, items] as const
    })
  )
  const itemsByCat = Object.fromEntries(pairs)
  return (
    <div className="container">
      <GrillTabsClient categories={categories} itemsByCat={itemsByCat} />
    </div>
  )
}
