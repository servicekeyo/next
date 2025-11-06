"use client";
import { useState } from 'react';

type AccessoryOption = { id: string; col:number; img: string; class_img:string };
type AccessoryCategory = { id: string; label: string; options: AccessoryOption[] };

// Demo 数据：可替换为真实图片路径（public/images/accessories/...）或远程素材
const accessoryCategories: AccessoryCategory[] = [
  {
    id: 'lids',
    label: 'Lids',
    options: [
      { id: 'lids1',col:1, img: '/images/acc/lids1.png',class_img:'/images/acc/lids class1.png'},
      { id: 'lids2',col:1, img: '/images/acc/lids2.png',class_img:'/images/acc/lids class2.png'},
      { id: 'lids3',col:1, img: '/images/acc/lids3.png',class_img:'/images/acc/lids class3.png'},
      { id: 'lids4',col:1, img: '/images/acc/lids4.png',class_img:'/images/acc/lids class4.png'},
    ],
  },
  {
    id: 'side_table',
    label: 'Side Table',
    options: [
      
      { id: 'side_table2',col:1, img: '/images/acc/side table2.png' ,class_img:'/images/acc/side table class2.png'},
      { id: 'side_table1',col:1, img: '/images/acc/side table1.png' ,class_img:'/images/acc/side table class1.png'},
      { id: 'side_table4',col:1, img: '/images/acc/side table4.png' ,class_img:'/images/acc/side table class4.png'},
      { id: 'side_table3',col:1, img: '/images/acc/side table3.png' ,class_img:'/images/acc/side table class3.png'},
      { id: 'side_table5',col:2, img: '/images/acc/side table5.png' ,class_img:'/images/acc/side table class5.png'},
      { id: 'side_table6',col:2, img: '/images/acc/side table6.png' ,class_img:'/images/acc/side table class6.png'},
    ],
  },
  {
    id: 'leg',
    label: 'Leg',
    options: [
      { id: 'leg1',col:1, img: '/images/acc/leg1.png' ,class_img:'/images/acc/leg class1.png'},
      { id: 'leg2',col:1, img: '/images/acc/leg2.png' ,class_img:'/images/acc/leg class2.png'},
    ],
  },
  {
    id: 'surface_treatment',
    label: 'Surface Treatment',
    options: [
      { id: 'surface_treatment1',col:1, img: '/images/acc/surface treatment1.png',class_img:'/images/acc/surface_treatment class1.jpg' },
      { id: 'surface_treatment2',col:1, img: '/images/acc/surface treatment2.png',class_img:'/images/acc/surface_treatment class2.jpg' },
    ],
  },
];

export default function ProductAccessorySwitcher() {
  const [activeOption, setActiveOption] = useState<AccessoryOption>(accessoryCategories[0].options[0]);

  return (

    <section className="section-1 bg-foreground">
      <div className='w-2/3 mx-auto'>
        <h2 className='heading-main2 text-center'>Customize every detail</h2>
        <p className="heading-sub mt30 text-hub text-center">
          Swap lids, side tables, legs, or finishes — create your own perfect match.
        </p>
      </div>
      <div className="container flex-col md:flex-row flex items-center gap80">
        {/* 左侧产品 */}
        <div className="lg:w-2/3">
          <img
            src={activeOption.img}
            className="w-full h-auto max-h-[700px] object-contain rounded-xl transition-all duration-500"
          />
        </div>

        {/* 右侧配件选择 */}
        <div className="lg:w-1/3 space-y-6">
          {/* 按分类分组展示所有选项（不使用TAB） */}
          {accessoryCategories.map((cat) => (
            <div key={cat.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text font-semibold">{cat.label}</h4>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {cat.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveOption(opt)}
                    className={`col-span-${opt.col} border p-2 rounded-sm overflow-hidden transition 
                      ${activeOption.id === opt.id ? 'border-blue-900 shadow-lg' : 'border-gray-300 hover:shadow-md'}
                    `}
                  >
                    <img src={opt.class_img} className="w-full h-24 object-cover" />
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