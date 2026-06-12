"use client";

import { useTypeCar } from "@/context/TypeCarContext";
import Image from "next/image";

function Highlight() {
    const { typeCar, typeCar_list } = useTypeCar();
    const Highlight_data_a = [
        {
            img: "/img/type_a/In/interior 4.jpg",
            detail: "Living area สามารถนั่งได้ถึง 7 ที่นั่ง"
        },
        {
            img: "/img/type_b/In/67-MOTORHOME%20TYPE%20B.png",
            detail: "เตียงนอนด้านบน"
        },
        {
            img: "/img/GalleryM/3/toilet%201_0.jpg",
            detail: ""
        },
        {
            img: "/img/GalleryM/View2/4/windown%201.jpg",
            detail: ""
        },
        {
            img: "/img/type_b/In/interior%209_1.jpg",
            detail: ""
        },
        {
            img: "/img/type_b/In/Shinl.jpg",
            detail: ""
        }
    ]
    const Highlight_data_b = [
        {
            img: "/img/Sesstion/GalleryM/interior 5.jpg",
            detail: "Living area สามารถนั่งได้ถึง 7 ที่นั่ง"
        },
        {
            img: "/img/Sesstion/GalleryM/interior 1.jpg",
            detail: "เตียงนอนด้านบน"
        },
        {
            img: "/img/GalleryM/3/toilet%201_0.jpg",
            detail: ""
        },
        {
            img: "/img/GalleryM/View2/4/windown%201.jpg",
            detail: ""
        },
        {
            img: "/img/type_b/In/interior%209_1.jpg",
            detail: ""
        },
        {
            img: "/img/type_b/In/Shinl.jpg",
            detail: ""
        }
    ]
    const Highlight_data_la = [
        {
            img: "/img/type_l/In/interior-typeLA-1.jpg",
            detail: ""
        },
        {
            img: "/img/type_l/In/interior-typeLA.jpg",
            detail: ""
        },
        {
            img: "/img/type_l/In/interior-typeLA-2.jpg",
            detail: ""
        },
        {
            img: "/img/type_l/In/interior-typeLA-BED.jpg",
            detail: ""
        },
        {
            img: "/img/type_l/In/rv-carryboy-type-LA-in-6.jpg",
            detail: ""
        },
        {
            img: "/img/type_l/In/rv-carryboy-type-LA-in-23.jpg",
            detail: ""
        },
    ]
    
    const Highlight_data_lb = [
        {
            img: "/img/Sesstion/GalleryM/interior 5.jpg",
            detail: "Living area สามารถนั่งได้ถึง 7 ที่นั่ง"
        },
        {
            img: "/img/Sesstion/GalleryM/interior 1.jpg",
            detail: "เตียงนอนด้านบน"
        },
        {
            img: "/img/type_b/In/interior 8.jpg",
            detail: ""
        },
        {
            img: "/img/type_b/In/interior 6.jpg",
            detail: ""
        },
        {
            img: "/img/type_b/In/interior 9_1.jpg",
            detail: ""
        },
        {
            img: "/img/GalleryM/3/86-MOTORHOME TYPE B_0.png",
            detail: ""
        },
    ]
    const Highlight_data = typeCar === typeCar_list[0][1] ? Highlight_data_a : typeCar === typeCar_list[0][2] ? Highlight_data_b : typeCar === typeCar_list[1][2] ? Highlight_data_lb : Highlight_data_la;
    return (
        <div className="bg-gray-100 text-black ">
            <div className="w-[90%] md:max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
                <h2 className="text-xl md:text-3xl font-light mb-4 text-center tracking-widest md:py-4">Highlight</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 overflow-hidden ">
                    {
                        Highlight_data.map((item, index) => (
                            <div key={index} className="flex width-full h-32 md:h-64 overflow-hidden rounded-lg relative">
                                <div className={"mt-2 text-sm md:text-base absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg" + (item.detail === "" ? " hidden" : "")}>
                                    <h4 className="text-sx md:text-base">{item.detail}</h4>
                                </div>
                                <Image src={item.img} alt="" className="object-cover w-[100%]" fill />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Highlight