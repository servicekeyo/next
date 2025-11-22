import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import { getMetadataFromRankMath } from '@/lib/seoServer';
import AOSPageWrapper from '@/components/AOSPageWrapper';

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
    <AOSPageWrapper>
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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">ODM BBQ Grill Development: From Idea To Product In Just 6 Steps</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">Building your own <strong>custom BBQ grill</strong> brand starts with an idea. Whether 
  you have sketches, reference photos, or just a concept in mind, our experienced 
  <strong>ODM team</strong> transforms your vision into a market-ready product through 
  a proven 6-step process. From initial 2D drawings to final sample approval, we make 
  <strong>custom BBQ grill manufacturing</strong> transparent, collaborative, and efficient. 
  This is how <strong>ODM service</strong> works at Keyfire.</p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          {/* Step 1 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image src="/images/odm/odm1.jpg" alt="ODM BBQ grill development step 1 - sharing custom grill design ideas and reference images" title="Custom BBQ Grill Concept Sharing" className='rounded-xl' width={720} height={500} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <div>
                <span className="heading-sub text-primary font-bold">Step1</span>
                <h2 className="heading-main3 my-5">Share Your BBQ Grill Idea or Reference Design</h2>
                <p className="text ">
                   Every successful <strong>custom BBQ grill</strong> starts with an idea. Share your vision 
  through sketches, competitor product photos, Pinterest boards, or simply describe what 
  your target market needs. Our <strong>ODM design team</strong> will analyze your concept, 
  assess technical feasibility, and prepare a preliminary development plan. Whether you want 
  a unique <strong>charcoal grill design</strong>, innovative <strong>gas grill features</strong>, 
  or hybrid cooking solutions, we&apos;ll help refine your idea into a manufacturable product.
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
                  Our engineering team converts your <strong>custom BBQ grill</strong> concept into precise 
  2D technical drawings with all critical dimensions, material specifications, and structural 
  details. These CAD drawings define cooking surface size, grill height, burner placement 
  (for <strong>gas grills</strong>), airflow design (for <strong>charcoal grills</strong>), 
  and component configurations. You&apos;ll review and approve these blueprints before we proceed 
  to 3D modeling, ensuring the foundation is exactly what you need. This is where 
  <strong>ODM manufacturing</strong> precision begins.
                </p>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/odm/odm2.jpg" alt="ODM BBQ grill 2D technical drawings showing dimensions and specifications for custom manufacturing" title="BBQ Grill 2D Technical Design" className='rounded-xl' width={720} height={500} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image src="/images/odm/odm3.jpg" alt="3D model visualization of custom BBQ grill design - ODM development process" title="Custom BBQ Grill 3D Rendering" className='rounded-xl' width={720} height={500} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <div>
                <span className="heading-sub text-primary font-bold">Step3</span>
                <h2 className="heading-main3 my-5">Visualize Your Custom BBQ Grill in 3D Model</h2>
                <p className="text ">
                  See your <strong>custom BBQ grill</strong> before it&apos;s manufactured. Using the approved 
  2D specifications, we create photorealistic 3D renderings that show every detail - from 
  <strong>stainless steel finishes</strong> to logo placement, color schemes, and component 
  arrangements. These 3D models help you visualize how your <strong>gas grill</strong>,
  <strong>charcoal grill</strong>, or <strong>hybrid design</strong> will look on retail
  shelves or in customer backyards. Request changes to aesthetics without affecting tooling
  costs. Perfect for pre-launch marketing materials while we prepare for production.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <div>
                <span className="heading-sub text-primary font-bold">Step4</span>
                <h2 className="heading-main3 my-5">Define BBQ Grill Function & Manufacturing Details</h2>
                <p className="text ">
                  Now we dive deep into how your <strong>custom BBQ grill</strong> will perform. Together 
  we define critical features: burner BTU output and ignition systems (for <strong>gas 
  grills</strong>), airflow controls and ash management (for <strong>charcoal grills</strong>), 
  cooking grate materials, temperature ranges, assembly requirements, packaging design, 
  and quality standards. Our <strong>ODM manufacturing</strong> team ensures every functional 
  detail aligns with your target market expectations - whether you&apos;re selling to budget-conscious 
  consumers or premium outdoor cooking enthusiasts. Certifications like <strong>CE, CSA</strong> 
  are planned at this stage.
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
              <Image src="/images/home/factory (6).jpg" alt="BBQ grill factory production setup and tooling preparation for custom manufacturing" title="BBQ Grill Production Setup" className='rounded-xl hover:scale-105 transition-all duration-500 ease-out' width={720} height={500} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <div>
                <span className="heading-sub text-primary font-bold">Step5</span>
                <h2 className="heading-main3 my-5">BBQ Grill Tooling & Production Setup</h2>
                <p className="text ">
                  With all designs approved, our <strong>BBQ grill factory</strong> begins creating production 
  tooling and molds. This includes stamping dies for metal components, welding jigs for 
  frame assembly, and powder coating fixtures for consistent finishes. We run trial production 
  to validate manufacturing processes, identify potential improvements, and ensure our 
  <strong>custom BBQ grill manufacturing</strong> line is ready for efficient mass production. 
  First articles are inspected against your specifications. This phase typically takes 2-3 
  weeks for <strong>OEM/ODM projects</strong> depending on complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <div>
                <span className="heading-sub text-primary font-bold">Step6</span>
                <h2 className="heading-main3 my-5">Custom BBQ Grill Sample Approval & Delivery</h2>
                <p className="text ">
                  The moment of truth arrives - we manufacture fully functional <strong>custom BBQ grill</strong> 
  samples using your approved designs and production-ready tooling. These samples undergo 
  rigorous testing in our facility: heat distribution tests, safety feature validation, 
  durability testing, and quality inspections. We ship samples to you for hands-on approval. 
  Many clients visit our Foshan factory to test grills personally and see the 
  <strong>manufacturing process</strong> firsthand. Once you approve the sample, it becomes 
  the &quot;golden standard&quot; for mass production. Your <strong>ODM BBQ grill</strong> is now 
  ready to launch.
                </p>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/odm/odm6.jpg" alt="Custom BBQ grill sample testing and approval before mass production - ODM manufacturer" title="BBQ Grill Sample Approval" className='rounded-xl' width={720} height={500} />
            </div>
          </div>

        </div>
      </section>
      <FooterContact />
    </div>
    </AOSPageWrapper>
  )
}