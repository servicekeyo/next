import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import { getMetadataFromRankMath } from '@/lib/seoServer';


export const dynamic = 'force-static'
export const revalidate = 600

export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/odmoem'
  return await getMetadataFromRankMath(wpUrl, {
    title: 'ODM Custom Grills – From Idea To Product In 6 Steps | Keyfire Customize',
    description: 'Whether it starts with a sketch, a photo, or simply an idea, our team turns your vision into a real, manufacturable product through a clear six-step process.'
  })
}

export default function ODMOEMPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-80 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <svg x="100%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        <div className='w-4/5 xl:w-3/5 mx-auto text-center' data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Custom BBQ Grill ODM Development in 6 Steps</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">
            Keyfire is a China-based <strong>BBQ grill manufacturer</strong> helping brands, importers and designers build their own <strong>custom BBQ grill</strong> lines. Share a rough idea or reference product and we guide you through a clear <strong>ODM development</strong> flow: 2D drawings, 3D models, tooling, samples and mass production. The whole <strong>custom BBQ grill manufacturing</strong> process is transparent and built around your target market in Europe, North America or the Middle East.
          </p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          {/* Step 1 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image src="/images/odm/odm1.jpg" alt="Keyfire China ODM BBQ grill manufacturer – share custom grill ideas and designs" title="Custom BBQ Grill ODM Concept" className='rounded-xl' width={720} height={500} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <div>
                <span className="heading-sub text-primary font-bold">Step1</span>
                <h2 className="heading-main3 my-5">Share Your BBQ Grill Idea or Reference Design</h2>
                <p className="text ">
                   A <strong>custom BBQ grill</strong> starts with a clear brief. You can send sketches, CAD files, competitor samples or simple notes about size, look and price level. Our <strong>ODM design team</strong> studies your request, checks technical feasibility and gives basic suggestions on structure and cost. Whether you want a new <strong>charcoal grill</strong>, a feature-rich <strong>gas grill</strong> or a hybrid design, we help shape it into something suitable for production.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <div>
                <span className="heading-sub text-primary font-bold">Step2</span>
                <h2 className="heading-main3 my-5">Confirm BBQ Grill Dimensions with 2D Technical Drawings</h2>
                <p className="text ">
                  Based on your brief, our engineers create 2D technical drawings for the <strong>custom BBQ grill</strong>. These CAD files fix key dimensions, materials and basic structures: cooking area, grill height, burner layout for <strong>gas grills</strong>, airflow and ash handling for <strong>charcoal grills</strong>. You check and confirm these drawings, so the foundation is correct before we enter 3D design and tooling.
                </p>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/odm/odm2.jpg" alt="2D technical drawings for custom BBQ grill ODM project" title="BBQ Grill 2D Technical Drawing" className='rounded-xl' width={720} height={500} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image src="/images/odm/odm3.jpg" alt="3D rendering of a custom gas and charcoal BBQ grill from ODM factory" title="Custom BBQ Grill 3D Model" className='rounded-xl' width={720} height={500} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <div>
                <span className="heading-sub text-primary font-bold">Step3</span>
                <h2 className="heading-main3 my-5">Visualize Your Custom BBQ Grill in 3D</h2>
                <p className="text ">
                  With 2D drawings approved, we build a 3D model so you can see the <strong>custom BBQ grill</strong> from all angles. The model shows finishes, colors, shelves, controls and <strong>logo position</strong>. For <strong>gas grills</strong>, <strong>charcoal grills</strong> or mixed-fuel designs, you can adjust appearance to fit your brand image. Many customers use these renderings in early marketing while we prepare the factory for production.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <div>
                <span className="heading-sub text-primary font-bold">Step4</span>
                <h2 className="heading-main3 my-5">Define BBQ Grill Functions and Manufacturing Details</h2>
                <p className="text ">
                  Next we fix how the <strong>BBQ grill</strong> should work and be produced. Together we decide burner power and ignition for <strong>gas grills</strong>, airflow control and charcoal trays for <strong>charcoal grills</strong>, grate materials, temperature range, assembly method and packaging. Our <strong>ODM manufacturing</strong> team balances performance, safety, cost and certificates such as <strong>CE</strong> or <strong>CSA</strong> required in your markets.
                </p>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/odm/odm4.jpg" alt="BBQ grill functional specifications and manufacturing details definition - ODM service" title="BBQ Grill Function Definition" className='rounded-xl' width={720} height={500} />
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image src="/images/home/factory (6).jpg" alt="Keyfire BBQ grill factory tooling and production setup for ODM orders" title="BBQ Grill Tooling and Production Setup" className='rounded-xl hover:scale-105 transition-all duration-500 ease-out' width={720} height={500} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <div>
                <span className="heading-sub text-primary font-bold">Step5</span>
                <h2 className="heading-main3 my-5">BBQ Grill Tooling and Production Setup</h2>
                <p className="text ">
                  After design is locked, our <strong>BBQ grill factory</strong> prepares tooling and jigs for stamping, welding and coating. Trial runs are made to check process stability, assembly time and surface quality. Problems are corrected before full approval, so the first batch of your <strong>custom BBQ grill</strong> is close to the agreed design, even for new <strong>OEM / ODM projects</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <div>
                <span className="heading-sub text-primary font-bold">Step6</span>
                <h2 className="heading-main3 my-5">Custom BBQ Grill Sample Approval and Delivery</h2>
                <p className="text ">
                  We then produce working <strong>custom BBQ grill</strong> samples with the final tooling. Each sample is tested in our Foshan workshop for heating, safety and durability. Samples are sent to you, or you can visit the factory to test and check the <strong>manufacturing process</strong>. Once you approve the sample, it becomes the standard for mass production and future <strong>ODM BBQ grill</strong> repeat orders.
                </p>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/odm/odm6.jpg" alt="Custom BBQ grill sample testing and approval before mass production" title="Custom BBQ Grill Sample Approval" className='rounded-xl' width={720} height={500} />
            </div>
          </div>

        </div>
      </section>
      <FooterContact />
    </div>
  );
}