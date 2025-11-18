import { Package, Factory } from '@/components/Icons'

export default function PackagingShipping() {

  return (
    <section className="section-1 relative overflow-hidden">
      <div className="herotitle-w text-left">
        <h2 className="heading-main2">Packaging & Shipping</h2>
        <p className="text text-hub mt20">Find answers to common questions about our BBQ grills, customization services, and ordering process.</p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap80">
        <div className="step-item !text-left !items-start">
          <div className="flex items-start gap-6">
            <Factory size={64} weight="duotone" />
            <div className="flex flex-col text-left">
              <h3 className="heading-main3">Packing & Delivery</h3>
              <p className="heading-sub mt20">Learn how we handle bulk packing, pallet loading, and container shipment arrangements.</p>
              <div className="mt30">
                <a href="/custom_packaging">Learn More About Packaging →</a>
              </div>
            </div>
          </div>
        </div>
        <div className="step-item !text-left !items-start">
          <div className="flex items-start gap-6">
            <Package size={64} weight="duotone" />
            <div className="flex flex-col text-left">
              <h3 className="heading-main3">Packaging Details</h3>
              <p className="heading-sub mt20">We provide secure and customized packaging solutions to protect your grills during transportation.</p>
              <div className="mt30">
                <a href="/packaging_shipping">View Packing & Delivery Process →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}