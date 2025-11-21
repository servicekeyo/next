"use client";
import { useLayoutEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AccessoryOption = { id: string; col:number; img: string; class_img:string };
type AccessoryCategory = { id: string; label: string; options: AccessoryOption[] };

// Demo 数据：可替换为真实图片路径（public/images/accessories/...）或远程素材
const accessoryCategories: AccessoryCategory[] = [
  {
    id: 'lids',
    label: 'Lids',
    options: [
      { id: 'lids1',col:1, img: '/images/acc/lids1.png',class_img:'/images/acc/lidsclass1.png'},
      { id: 'lids2',col:1, img: '/images/acc/lids2.png',class_img:'/images/acc/lidsclass2.png'},
      { id: 'lids3',col:1, img: '/images/acc/lids3.png',class_img:'/images/acc/lidsclass3.png'},
      { id: 'lids4',col:1, img: '/images/acc/lids4.png',class_img:'/images/acc/lidsclass4.png'},
    ],
  },
  {
    id: 'side_table',
    label: 'Side Table',
    options: [
      
      { id: 'side_table2',col:1, img: '/images/acc/sidetable2.png' ,class_img:'/images/acc/SideTableclass2.png'},
      { id: 'side_table1',col:1, img: '/images/acc/sidetable1.png' ,class_img:'/images/acc/SideTableclass1.png'},
      { id: 'side_table4',col:1, img: '/images/acc/sidetable4.png' ,class_img:'/images/acc/SideTableclass4.png'},
      { id: 'side_table3',col:1, img: '/images/acc/sidetable3.png' ,class_img:'/images/acc/SideTableclass3.png'},
      { id: 'side_table5',col:2, img: '/images/acc/sidetable5.png' ,class_img:'/images/acc/SideTableclass5.png'},
      { id: 'side_table6',col:2, img: '/images/acc/sidetable6.png' ,class_img:'/images/acc/SideTableclass6.png'},
    ],
  },
  {
    id: 'leg',
    label: 'Leg',
    options: [
      { id: 'leg1',col:1, img: '/images/acc/leg1.png' ,class_img:'/images/acc/legclass1.png'},
      { id: 'leg2',col:1, img: '/images/acc/leg2.png' ,class_img:'/images/acc/legclass2.png'},
    ],
  },
  {
    id: 'surface_treatment',
    label: 'Surface Treatment',
    options: [
      { id: 'surface_treatment1',col:1, img: '/images/acc/SurfaceTreatment1.png',class_img:'/images/acc/surface_treatmentclass1.jpg' },
      { id: 'surface_treatment2',col:1, img: '/images/acc/SurfaceTreatment2.png',class_img:'/images/acc/surface_treatmentclass2.jpg' },
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
