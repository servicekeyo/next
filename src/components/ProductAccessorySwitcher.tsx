"use client";
import { useLayoutEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AccessoryOption = { id: string; col:number; img: string; img_alt:string; img_title:string; class_img:string;class_img_alt:string;class_img_title:string };
type AccessoryCategory = { id: string; label: string; options: AccessoryOption[] };

// Demo 数据：可替换为真实图片路径（public/images/accessories/...）或远程素材
const accessoryCategories: AccessoryCategory[] = [
  {
    id: 'lids',
    label: 'Lids',
    options: [
      { id: 'lids1',col:1, img: '/images/acc/lids1.png',img_alt:'Custom BBQ grill lid options - stainless steel and powder coated designs',img_title:'BBQ Grill Lid Customization',class_img:'/images/acc/lidsclass1.png',class_img_alt:'Dome lid design for custom gas grill - OEM option',class_img_title:'Dome Style BBQ Lid'},
      { id: 'lids2',col:1, img: '/images/acc/lids2.png',img_alt:'Custom BBQ grill lid options - stainless steel and powder coated designs',img_title:'BBQ Grill Lid Customization',class_img:'/images/acc/lidsclass2.png',class_img_alt:'Flat lid with thermometer for charcoal grill - custom manufacturing',class_img_title:'Flat BBQ Lid with Gauge'},
      { id: 'lids3',col:1, img: '/images/acc/lids3.png',img_alt:'Custom BBQ grill lid options - stainless steel and powder coated designs',img_title:'BBQ Grill Lid Customization',class_img:'/images/acc/lidsclass3.png',class_img_alt:'Hinged lid design for kettle grill - ODM service',class_img_title:'Hinged Kettle Grill Lid'},
      { id: 'lids4',col:1, img: '/images/acc/lids4.png',img_alt:'Custom BBQ grill lid options - stainless steel and powder coated designs',img_title:'BBQ Grill Lid Customization',class_img:'/images/acc/lidsclass4.png',class_img_alt:'Double-walled insulated grill lid - premium BBQ option',class_img_title:'Insulated BBQ Grill Lid'},
    ]
  },
  {
    id: 'side_table',
    label: 'Side Table',
    options: [
      
      { id: 'side_table2',col:1, img: '/images/acc/sidetable2.png',img_alt:'Custom BBQ grill Side Table options - stainless steel and powder coated designs',img_title:'BBQ Grill Side Table Customization',class_img:'/images/acc/SideTableclass2.png',class_img_alt:'Stainless steel side table for gas grill - custom BBQ accessory',class_img_title:'Stainless Steel Side Shelf'},
      { id: 'side_table1',col:1, img: '/images/acc/sidetable1.png',img_alt:'Custom BBQ grill Side Table options - stainless steel and powder coated designs',img_title:'BBQ Grill Side Table Customization',class_img:'/images/acc/SideTableclass1.png',class_img_alt:'Foldable side table for portable grill - space saving design',class_img_title:'Foldable Grill Side Table'},
      { id: 'side_table4',col:1, img: '/images/acc/sidetable4.png',img_alt:'Custom BBQ grill Side Table options - stainless steel and powder coated designs',img_title:'BBQ Grill Side Table Customization',class_img:'/images/acc/SideTableclass4.png',class_img_alt:'Wooden side shelf for outdoor BBQ grill - premium finish',class_img_title:'Wood Grain Side Table'},
      { id: 'side_table3',col:1, img: '/images/acc/sidetable3.png',img_alt:'Custom BBQ grill Side Table options - stainless steel and powder coated designs',img_title:'BBQ Grill Side Table Customization',class_img:'/images/acc/SideTableclass3.png',class_img_alt:'Side burner table for gas grill - multi-function design',class_img_title:'Side Burner Table'},
      { id: 'side_table5',col:2, img: '/images/acc/sidetable5.png',img_alt:'Custom BBQ grill Side Table options - stainless steel and powder coated designs',img_title:'BBQ Grill Side Table Customization',class_img:'/images/acc/SideTableclass5.png',class_img_alt:'Extended prep table for commercial BBQ grill',class_img_title:'Commercial Prep Station'},
      { id: 'side_table6',col:2, img: '/images/acc/sidetable6.png',img_alt:'Custom BBQ grill Side Table options - stainless steel and powder coated designs',img_title:'BBQ Grill Side Table Customization',class_img:'/images/acc/SideTableclass6.png',class_img_alt:'Modular side table system for custom grill configuration',class_img_title:'Modular Side Table System'},
    ],
  },
  {
    id: 'leg',
    label: 'Leg',
    options: [
      { id: 'leg1',col:1, img: '/images/acc/leg1.png',img_alt:'Custom BBQ grill Leg options - stainless steel and powder coated designs',img_title:'BBQ Grill Leg Customization',class_img:'/images/acc/legclass1.png',class_img_alt:'Powder coated steel legs for portable BBQ grill - durable construction',class_img_title:'Steel Grill Legs'},
      { id: 'leg2',col:1, img: '/images/acc/leg2.png',img_alt:'Custom BBQ grill Leg options - stainless steel and powder coated designs',img_title:'BBQ Grill Leg Customization',class_img:'/images/acc/legclass2.png',class_img_alt:'Stainless steel legs with wheels for mobile grill cart',class_img_title:'Mobile Grill Cart Legs'},
    ],
  },
  {
    id: 'surface_treatment',
    label: 'Surface Treatment',
    options: [
      { id: 'surface_treatment1',col:1, img: '/images/acc/SurfaceTreatment1.png',img_alt:'Custom BBQ grill Surface Treatment options - stainless steel and powder coated designs',img_title:'BBQ Grill Surface Treatment Customization',class_img:'/images/acc/surface_treatmentclass1.jpg',class_img_alt:'High-temperature powder coating for BBQ grill - custom color options',class_img_title:'Powder Coating Finish' },
      { id: 'surface_treatment2',col:1, img: '/images/acc/SurfaceTreatment2.png',img_alt:'Custom BBQ grill Surface Treatment options - stainless steel and powder coated designs',img_title:'BBQ Grill Surface Treatment Customization',class_img:'/images/acc/surface_treatmentclass2.jpg',class_img_alt:'Brushed stainless steel finish for premium BBQ grill',class_img_title:'Brushed Steel Surface' },
    ],
  },
];

export default function ProductAccessorySwitcher() {
  const [activeOption, setActiveOption] = useState<AccessoryOption>(accessoryCategories[0].options[0]);

  useLayoutEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
    AOS.refresh()
  }, [])

  return (

    <section className="section-1 bg-foreground">
      <div className='herotitle-w' data-aos="fade-in">
        <h2 className='heading-main2 text-center'>Every Component Customizable for Your Brand</h2>
        <p className="heading-sub mt20 text-hub text-center">
          True <strong>custom BBQ grill manufacturing</strong> means every visible component reflects 
  your brand identity. Mix and match lids, side tables, leg designs, and surface treatments 
  to create distinctive products that stand out on retail shelves. Our modular approach lets 
  you configure unique grill combinations without expensive tooling for each variation.
        </p>
      </div>
      <div className="container flex-col md:flex-row flex items-center gap80">
        {/* 左侧产品 */}
        <div className="lg:w-2/3" data-aos="zoom-in">
          <img
            src={activeOption.img}
            className="w-full h-auto max-h-[700px] object-contain rounded-xl transition-all duration-500"
          />
        </div>

        {/* 右侧配件选择 */}
        <div className="lg:w-1/3 space-y-6" data-aos="fade-left" data-aos-delay="100">
          {/* 按分类分组展示所有选项（不使用TAB） */}
          {accessoryCategories.map((cat) => (
            <div key={cat.id} className="space-y-3" data-aos="fade-up">
              <div className="flex items-center justify-between">
                <h4 className="text font-semibold">{cat.label}</h4>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {cat.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveOption(opt)}
                    className={`col-span-${opt.col} border p-2 rounded-sm overflow-hidden transition 
                      ${activeOption.id === opt.id ? 'border-primary shadow-lg' : 'border-gray-300 hover:shadow-md'}
                    `}
                  >
                    <img src={opt.class_img} className=" object-cover" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
