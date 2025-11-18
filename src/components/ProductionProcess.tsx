"use client"
import { Cube, Scissors, Stamp, Wrench, PaintBrush, PuzzlePiece, Gear } from '@/components/Icons'

export default function ProductionProcess({ title, description }: { title?: string; description?: string }) {
  const heading = title ?? 'Production Process'
  const desc = description ?? 'Every high-quality grill starts with precise design and careful planning. From materials to final assembly, each step is controlled to ensure durability, safety, and consistent performance.'
  return (
    <section className="section-1 bg-foreground">
        <div className="herotitle-w">
          <h2 className="heading-main2">{heading}</h2>
          <p className="heading-sub text-hub mt20">{desc}</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center">
            <Cube size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Raw Materials Selection</h3>
            <p className="text-hub">Premium heat-resistant stainless steel is selected for strength, safety, and long-term durability.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Cube size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Independent Mould Making</h3>
            <p className="text-gray-600">In-house moulds ensure precision, consistency, and faster development without outsourcing errors.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Scissors size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Precision Cutting</h3>
            <p className="text-gray-600">Automated cutting systems and skilled technicians maintain accurate dimensions for each component.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Stamp size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">4. Multi-Stage Stamping</h3>
            <p className="text-gray-600">Stamping lines shape parts with precision, smooth surfaces, and structural strength.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Wrench size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5. Professional Welding</h3>
            <p className="text-gray-600">Experienced welders create strong, clean joints, inspected for load-bearing and accuracy.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <PaintBrush size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">6. Surface Treatment</h3>
            <p className="text-gray-600">Food-safe coatings are applied with heat- and corrosion-resistance, inspected for smooth, defect-free surfaces.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <PuzzlePiece size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">7. Components & Accessories</h3>
            <p className="text-gray-600">Every screw, plate, and accessory is carefully produced or selected to ensure product stability.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Gear size={64} weight="duotone"  className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">8. Final Assembly</h3>
            <p className="text-gray-600">All inspected parts are assembled following strict processes, resulting in a durable, high-quality grill.</p>
          </div>
        </div>
    </section>
  )
}