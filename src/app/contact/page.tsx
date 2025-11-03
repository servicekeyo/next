import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-2 bg-[url('https://packoi.com/wp-content/uploads/2022/03/custom-printed-boxes.jpg')] banner">
        <h1 className="heading-main">Contact</h1>
        <p className="heading-sub mt20">Your trusted partner in custom packaging solutions since 2015</p>
      </section>

      <section className="section-1">
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-2/5 space-y-5 lg:space-y-10 xl:space-y-20">
            <div>
              <h2 className="heading-main2">Contact KEYO Now!</h2>
              <div className="heading-line mt20"></div>
            </div>
            <div className="space-y-2">
              <h3 className="heading-main3">Send Us a Email</h3>
              <p className="text"><a href="mailto:ky01@keyobbq.com" target="_blank">ky01@keyobbq.com</a></p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-main3">Phone/Whatsapp/Wechat</h3>
              <p className="text"><a href="tel:+8613612569082" target="_blank">+8613612569082</a></p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-main3">Address</h3>
              <p className="text">NO.2 Shencun Industrial Zone,Beisha, Lishui Town, Nanhai District, Foshan City, Guangdong, China</p>
            </div>
          </div>
          <div className="lg:w-3/5 bg-foreground p-5 xl:p-12 text-center">
            <h2 className="heading-main2">Quote Request Form</h2>
            <p className="heading-sub mt20">Thanks for your inquiry! For a fast and accurate quote, please take one minute to complete our brief form. Let’s get started!</p>
            <div className="mt40">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}