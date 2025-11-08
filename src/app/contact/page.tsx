import ContactForm from "@/components/ContactForm";



export default function Contact() {
  return (
    <div className="relative section-1">
      <div className="grid container grid-cols-1 lg:grid-cols-2 items-center gap80">
          <div className="max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-foreground ring-1 ring-gray-900/10 lg:w-1/2 dark:bg-gray-900 dark:ring-white/10">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} className="fill-white dark:fill-gray-900" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))] dark:block"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10 dark:opacity-20"
                />
              </div>
            </div>
            <h2 className="heading-main">
              Get in touch
            </h2>
            <p className="text mt20 text-hub">
              Thanks for your inquiry! Please complete the brief form and we’ll get back to you.
            </p>
            <div className="mt50 flex flex-col gap30">
              <div className="space-y-1">
                <h3 className="text font-bold">Send Us a Email</h3>
                <p className="text text-hub"><a href="mailto:ky01@keyobbq.com" target="_blank">ky01@keyobbq.com</a></p>
              </div>
              <div className="space-y-1">
                <h3 className="text font-bold">Phone/Whatsapp/Wechat</h3>
                <p className="text text-hub"><a href="tel:+8613612569082" target="_blank">+8613612569082</a></p>
              </div>
              <div className="space-y-1">
                <h3 className="text font-bold">Address</h3>
                <p className="text text-hub">NO.2 Shencun Industrial Zone,Beisha, Lishui Town, Nanhai District, Foshan City, Guangdong, China</p>
              </div>
            </div>
        </div>

        <div className=" xl:pl-20 2xl:pl-40">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

