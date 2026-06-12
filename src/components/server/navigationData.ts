// navigationData.ts

// ฟังก์ชัน useTranslations สำหรับการแปลข้อความ

// ฟังก์ชันสร้างข้อมูล navigation และใช้ useTranslations ดึงคำแปล
export const getNavigationData = (t: (key: string) => string) => {
  return {
    // categories: [
    //   {
    //     id: "women",
    //     name: "Women",
    //     featured: [
    //       {
    //         name: "New Arrivals",
    //         href: "#",
    //         imageSrc:
    //           "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
    //         imageAlt:
    //           "Models sitting back to back, wearing Basic Tee in black and bone.",
    //       },
    //       {
    //         name: "Basic Tees",
    //         href: "#",
    //         imageSrc:
    //           "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
    //         imageAlt:
    //           "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
    //       },
    //     ],
    //     sections: [
    //       {
    //         id: "clothing",
    //         name: "Clothing",
    //         items: [
    //           { name: "Tops", href: "#" },
    //           { name: "Dresses", href: "#" },
    //           { name: "Pants", href: "#" },
    //           { name: "Denim", href: "#" },
    //           { name: "Sweaters", href: "#" },
    //           { name: "T-Shirts", href: "#" },
    //           { name: "Jackets", href: "#" },
    //           { name: "Activewear", href: "#" },
    //           { name: "Browse All", href: "#" },
    //         ],
    //       },
    //       // ส่วนอื่น ๆ ของข้อมูล navigation...
    //     ],
    //   },
    //   // ข้อมูลเพิ่มเติมสำหรับหมวดหมู่ Men...
    // ],
    categories: [
      {
        id: "canopy",
        name: t("fiberglassroof.fiberglassroof"),
        featured: [
          {
            name: "",
            href: "",
            imageSrc: "",
            imageAlt: "",
          },
        ],
        sections: [
          {
            id: "touring_canopy",
            name: t("fiberglassroof.touringroof"),
            items: [
              {
                name: t("fiberglassroof.zx"),
                href: "https://carryboycanopy.com/lift-up-windows/zx/th/",
              },
              {
                name: t("fiberglassroof.sr5"),
                href: "https://carryboycanopy.com/sliding-windows/sr5/th/",
              },
              {
                name: t("fiberglassroof.series5"),
                href: "https://carryboycanopy.com/sliding-windows/series-5/th/",
              },
              {
                name: t("fiberglassroof.series6"),
                href: "https://carryboycanopy.com/pop-out-windows/series-6/th/",
              },
              {
                name: t("fiberglassroof.series7"),
                href: "https://carryboycanopy.com/pop-out-windows/series-7/th/",
              },
              {
                name: t("fiberglassroof.g500"),
                href: "https://carryboycanopy.com/pop-out-windows/g500/th/",
              },
              {
                name: t("fiberglassroof.g3"),
                href: "https://carryboycanopy.com/sliding-windows/g3/th/",
              },
            ],
          },
          {
            id: "commercial_canopy",
            name: t("fiberglassroof.commercialroof"),
            items: [
              {
                name: t("fiberglassroof.slr"),
                href: "https://carryboycanopy.com/lift-up-windows/slr/th/",
              },
              {
                name: t("fiberglassroof.so"),
                href: "https://carryboycanopy.com/lift-up-windows/so/th/",
              },
              {
                name: t("fiberglassroof.son"),
                href: "https://carryboycanopy.com/lift-up-windows/son/th/",
              },
              {
                name: t("fiberglassroof.so56"),
                href: "https://carryboycanopy.com/lift-up-windows/so56/th/",
              },
              {
                name: t("fiberglassroof.cityboy840"),
                href: "https://carryboycanopy.com/commercial/city-boy-840/th/",
              },
              {
                name: t("fiberglassroof.suzukicarry"),
                href: "https://carryboycanopy.com/commercial/suzuki-carry/th/",
              },
              {
                name: t("fiberglassroof.container1050"),
                href: "https://carryboycanopy.com/commercial/container-1050/th/",
              },
              {
                name: t("fiberglassroof.workmanwm"),
                href: "https://carryboycanopy.com/gull-wing/workman/th/",
              },
              {
                name: t("fiberglassroof.cargo2000"),
                href: "https://carryboycanopy.com/commercial/cargo-2000/th/",
              },
              {
                name: t("fiberglassroof.ecobox"),
                href: "https://carryboycargobox.com/eco-box/th/",
              },
            ],
          },
          // ส่วนอื่น ๆ ของข้อมูล navigation...
        ],
      },
      // ข้อมูลเพิ่มเติมสำหรับหมวดหมู่ Men...
      {
        id: "sportlid",
        name: t("sportlid.sportlid"),
        featured: [
          {
            name: "",
            href: "",
            imageSrc: "",
            imageAlt: "",
          },
        ],
        sections: [
          {
            id: "hard_cover",
            name: t("sportlid.pickupcoverhandle"),
            items: [
              {
                name: t("sportlid.sv"),
                href: "https://carryboysportlid.com/tonneau-covers/sv/th/",
              },
              {
                name: t("sportlid.rseriescb795"),
                href: "https://carryboysportlid.com/r-series/cb-795/th/",
              },
              {
                name: t("sportlid.fooboxcb762"),
                href: "https://carryboysportlid.com/hard-tonneau-cover/cb-762/th/",
              },
              {
                name: t("sportlid.grxupdate"),
                href: "https://carryboysportlid.com/hard-tonneau-cover/grx/th/",
              },
              {
                name: t("sportlid.sx"),
                href: "https://carryboysportlid.com/tonneau-covers/sx/th/",
              },
              {
                name: t("sportlid.sra"),
                href: "https://carryboysportlid.com/tonneau-covers/sra/th/",
              },
            ],
          },
          {
            id: "electric_motor",
            name: t("sportlid.electricmotorstrut"),
            items: [
              {
                name: t("sportlid.grxe"),
                href: "https://carryboysportlid.com/hard-tonneau-cover/grxe/th/",
              },
              {
                name: t("sportlid.smx"),
                href: "https://carryboysportlid.com/tonneau-covers/smx/th/",
              },
              {
                name: t("sportlid.smx2"),
                href: "https://carryboysportlid.com/tonneau-covers/smx-2/th/",
              },
              {
                name: t("sportlid.rseriescb796"),
                href: "https://carryboysportlid.com/r-series/cb-796/th/",
              },
              {
                name: t("sportlid.gmx2r"),
                href: "https://carryboysportlid.com/hard-tonneau-cover/gmx-2-r/th/",
              },
              {
                name: t("sportlid.gmxr"),
                href: "https://carryboysportlid.com/hard-tonneau-cover/gmx-r/th/",
              },
              {
                name: t("sportlid.gmx"),
                href: "https://carryboysportlid.com/hard-tonneau-cover/gmx/th/",
              },
            ],
          },
          {
            id: "roller_lid",
            name: t("sportlid.rollerlid"),
            items: [
              {
                name: t("sportlid.cyberlid"),
                href: "https://carryboysportlid.com/retractable-covers/cyber-lid/th/",
              },
              {
                name: t("sportlid.cb899"),
                href: "https://carryboysportlid.com/retractable-covers/cb-899/th/",
              },
              {
                name: t("sportlid.cb789"),
                href: "https://carryboysportlid.com/retractable-covers/cb-789/th/",
              },
              {
                name: t("sportlid.cb789f"),
                href: "https://carryboysportlid.com/retractable-covers/cb-789-f/th/",
              },
              {
                name: t("sportlid.rseriescb799"),
                href: "https://carryboysportlid.com/r-series/cb-799/th/",
              },
              {
                name: t("sportlid.cb744"),
                href: "https://carryboysportlid.com/retractable-covers/cb-744/th/",
              },
            ],
          },
          {
            id: "soft_lid",
            name: t("sportlid.softlid"),
            items: [
              {
                name: t("sportlid.cb743n"),
                href: "https://carryboysportlid.com/soft-tonneau-cover/cb-743n/th/",
              },
              {
                name: t("sportlid.cb743cover"),
                href: "https://carryboysportlid.com/soft-tonneau-cover/cb-743/th/",
              },
              {
                name: t("sportlid.cb781sportbar"),
                href: "https://carryboysportlid.com/soft-tonneau-cover/cb-781/th/",
              },
            ],
          },
          // ส่วนอื่น ๆ ของข้อมูล navigation...
        ],
      },

      {
        id: "accessories",
        name: t("accessories.caraccessorykit"),
        featured: [],
        sections: [
          {
            id: "pickup_accessories",
            name: t("accessories.pickupaccessorykit"),
            items: [
              {
                name: t("accessories.titan"),
                href: "https://carryboyaccessories.com/titan/th/",
              },
              {
                name: t("accessories.bluebarbumper"),
                href: "https://carryboyaccessories.com/titan/th/#bull-bars",
              },
              {
                name: t("accessories.frontbumper"),
                href: "https://carryboyaccessories.com/front-guards/th/",
              },
              {
                name: t("accessories.sidestep"),
                href: "https://carryboyaccessories.com/side-steps/th/",
              },
              {
                name: t("accessories.triplelock"),
                href: "http://carryboy3lock.com/th/",
              },
              {
                name: t("accessories.windowfilm"),
                href: "http://carryboyfilms.com/th/",
              },
            ],
          },
          {
            id: "roll_bar",
            name: t("accessories.rollbar"),
            items: [
              {
                name: t("accessories.cb791792"),
                href: "https://carryboyaccessories.com/roll-bar/cb-791/th/",
              },
              {
                name: t("accessories.steelrollbar"),
                href: "https://carryboyaccessories.com/titan/th/#steel-rollbar",
              },
              {
                name: t("accessories.rseriescb794"),
                href: "https://carryboyaccessories.com/roll-bar/cb-794/th/",
              },
              {
                name: t("accessories.cb793rollbar"),
                href: "https://carryboyaccessories.com/roll-bar/cb-793/th/",
              },
              {
                name: t("accessories.otherrollbars"),
                href: "https://carryboyaccessories.com/roll-bar/th/",
              },
            ],
          },
          {
            id: "roof_rack",
            name: t("accessories.roofrackkit"),
            items: [
              {
                name: t("accessories.titanrack"),
                href: "https://carryboyaccessories.com/flat-racks/th/",
              },
              {
                name: t("accessories.steelrack"),
                href: "https://carryboyaccessories.com/roof-racks/th/#cb114",
              },
              {
                name: t("accessories.aluminumrack"),
                href: "https://carryboyaccessories.com/roof-racks/th/#cb550n",
              },
              {
                name: t("accessories.dooredgemount"),
                href: "https://carryboyaccessories.com/roof-racks/th/#cb558",
              },
              {
                name: t("accessories.dooredgemount"),
                href: "https://carryboyaccessories.com/roof-racks/th/#cb716r",
              },
            ],
          },
          {
            id: "cargo_box",
            name: t("accessories.boxslides"),
            items: [
              {
                name: t("accessories.campingbox"),
                href: "https://carryboyaccessories.com/camping-box/th/",
              },
              {
                name: t("accessories.pickupdrawer"),
                href: "https://carryboyaccessories.com/cargo-drawers/th/",
              },
              {
                name: t("accessories.slidefloor"),
                href: "https://carryboyaccessories.com/slide-floor/th/",
              },
              {
                name: t("accessories.pickupbox"),
                href: "https://carryboyaccessories.com/utility-box/th/",
              },
            ],
          },
          {
            id: "general_products",
            name: t("accessories.generalgoods"),
            items: [
              {
                name: t("accessories.rooftoptent"),
                href: "https://carryboy-camper.com/",
              },
              {
                name: t("accessories.rubbertray"),
                href: "https://carryboyaccessories.com/general/latex-car-mats/th/",
              },
              {
                name: t("accessories.frontbonnetshock"),
                href: "https://carryboyaccessories.com/general/hood-shocks/th/",
              },
              {
                name: t("accessories.tailgateassist"),
                href: "https://carryboyaccessories.com/general/tailgate-damper/th/",
              },
              {
                name: t("accessories.tailgateseal"),
                href: "https://carryboyaccessories.com/general/tailgate-damper/th/#tailgate-seal",
              },
            ],
          },
        ],
      },
      {
        id: "cargobox",
        name: t("cargobox.cargobox"),
        featured: [],
        sections: [
          {
            id: "dry_freight",
            name: t("cargobox.closedcontainer"),
            items: [
              {
                name: t("cargobox.cbll_cbm_cbs"),
                href: "https://carryboycargobox.com/dry-freight/th/",
              },
              {
                name: t("cargobox.custommade"),
                href: "https://carryboycargobox.com/made-to-order/th/",
              },
            ],
          },
          {
            id: "truck_body",
            name: t("cargobox.cargo_truck"),
            items: [
              {
                name: t("cargobox.lightcontainer_smalltruck"),
                href: "https://carryboycargobox.com/truck-body/lightweight/th/",
              },
              {
                name: t("cargobox.ten_doors_container"),
                href: "https://carryboycargobox.com/truck-body/th/",
              },
              {
                name: t("cargobox.custommade"),
                href: "https://carryboycargobox.com/truck-specials/th/",
              },
            ],
          },
          {
            id: "pickup_truck",
            name: t("cargobox.pickuptruck_container"),
            items: [
              {
                name: t("cargobox.champbox_new"),
                href: "https://carryboycargobox.com/hilux-champ/th/",
              },
              {
                name: t("cargobox.ecobox"),
                href: "https://carryboycargobox.com/eco-box/th/",
              },
            ],
          },
          {
            id: "half_box",
            name: t("cargobox.halfcontainer"),
            items: [
              {
                name: t("cargobox.cargo2000"),
                href: "https://carryboycanopy.com/commercial/cargo-2000/th/",
              },
              {
                name: t("cargobox.cargo_half"),
                href: "https://carryboycargobox.com/cargo-half/th/",
              },
              {
                name: t("cargobox.composite_half"),
                href: "https://carryboycargobox.com/composite-half/th/",
              },
            ],
          },
          {
            id: "cool_box",
            name: t("cargobox.coldroom_container"),
            items: [
              {
                name: t("cargobox.coolminus20_new"),
                href: "https://carryboycargobox.com/cool-box/minus-20/th/",
              },
              {
                name: t("cargobox.cbll_cbm_cbs"),
                href: "https://carryboycargobox.com/cool-box/th/",
              },
              {
                name: t("cargobox.half_cool"),
                href: "https://carryboycargobox.com/cool-box/half-cool/th/",
              },
              {
                name: t("cargobox.cargo_truck"),
                href: "https://carryboycargobox.com/cool-box/refrigerated-truck/th/",
              },
              {
                name: t("cargobox.custommade"),
                href: "https://carryboycargobox.com/cool-box/made-to-order/th/",
              },
            ],
          },
          {
            id: "food_truck",
            name: t("cargobox.advertisingtruck"),
            items: [
              {
                name: t("cargobox.kiosk2000_new"),
                href: "https://carryboykiosk.com/kiosk-2000/th/",
              },
              {
                name: t("cargobox.foodtruck"),
                href: "https://carryboykiosk.com/food-trucks/th/",
              },
              {
                name: t("cargobox.kiosk3000_trailer"),
                href: "https://carryboytrailer.com/kiosk-3000/th/",
              },
              {
                name: t("cargobox.kiosk4000_trailer"),
                href: "https://carryboytrailer.com/kiosk-4000/th/",
              },
              {
                name: t("cargobox.stagecar_adcar"),
                href: "https://carryboykiosk.com/moving-stage/th/",
              },
              {
                name: t("cargobox.custommade"),
                href: "https://carryboykiosk.com/custom-made/th/",
              },
              {
                name: t("cargobox.kiosk_a"),
                href: "https://carryboykiosk.com/kiosk-a/th/",
              },
              {
                name: t("cargobox.kiosk_b"),
                href: "https://carryboykiosk.com/kiosk-b/th/",
              },
              {
                name: t("cargobox.bank"),
                href: "https://carryboykiosk.com/mobile-banking-vehicles/th/",
              },
              {
                name: t("cargobox.suzukicarry"),
                href: "https://carryboykiosk.com/suzuki-carry/th/",
              },
              {
                name: t("cargobox.caravan"),
                href: "https://carryboycaravan.com/",
              },
            ],
          },
          {
            id: "trailers",
            name: t("cargobox.trailercontainer"),
            items: [
              {
                name: t("cargobox.cargo3000"),
                href: "https://carryboytrailer.com/th/",
              },
              {
                name: t("cargobox.cargo4000"),
                href: "https://carryboytrailer.com/th/#cargo4000",
              },
              {
                name: t("cargobox.eco_trailer"),
                href: "https://carryboytrailer.com/eco-trailer/th/",
              },
              {
                name: t("cargobox.custommade"),
                href: "https://carryboytrailer.com/made-to-order/th/",
              },
            ],
          },
        ],
      },
      {
        id: "caravan",
        name: t("caravan.caravan"),
        featured: [],
        sections: [
          {
            id: "motorhome",
            name: t("caravan.motorhome"),
            items: [
              {
                name: t("caravan.popular_motorhome"),
                href: "https://carryboymotorhome.com/",
              },
            ],
          },
          {
            id: "slide_in",
            name: t("caravan.slidein"),
            items: [
              {
                name: t("caravan.slidein_camper_new"),
                href: "https://carryboymotorhome.com/pdf/Carryboy-Slide-In-Camper.pdf",
              },
            ],
          },
          {
            id: "trailer_caravan",
            name: t("caravan.towable_motorhome"),
            items: [
              {
                name: t("caravan.caravan_4m"),
                href: "https://carryboycaravan.com/caravans/th/",
              },
              {
                name: t("caravan.mini_caravan_3m"),
                href: "https://carryboycaravan.com/mini-caravan/th/",
              },
              {
                name: t("caravan.caravan_840"),
                href: "https://carryboycaravan.com/teardrop-camper/th/",
              },
            ],
          },
          {
            id: "touring",
            name: t("caravan.touring"),
            items: [
              {
                name: t("caravan.chassis_canopy"),
                href: "https://carryboytouring.com/",
              },
              {
                name: t("caravan.touring_package"),
                href: "https://carryboytouring.com/",
              },
            ],
          },
        ],
      },
      {
        id: "ecobus",
        name: t("ecobus.ecobus"),
        featured: [],
        sections: [
          {
            id: "minibus",
            name: t("ecobus.ecobus"),
            items: [
              {
                name: t("ecobus.ecobus2"),
                href: "https://carryboyambulance.com/emergency-van/abl-commu-alsv-r/th/",
              },
            ],
          },
        ],
        href: "https://carryboy.co.th/",
        iconClass: "fas fa-home",
      },
      {
        id: "ambulance",
        name: t("ambulance.ambulance"),
        featured: [],
        sections: [
          {
            id: "emergency_van",
            name: t("ambulance.ambulance_van"),
            items: [
              {
                name: t("ambulance.abl_commu_alsv_r_new"),
                href: "https://carryboyambulance.com/emergency-van/abl-commu-alsv-r/th/",
              },
              {
                name: t("ambulance.abl_van_alsv"),
                href: "https://carryboyambulance.com/emergency-van/abl-van-alsv/th/",
              },
              {
                name: t("ambulance.ambulance_for_donation"),
                href: "https://carryboyambulance.com/donate/th/",
              },
              {
                name: t("ambulance.antimicrobial_coating"),
                href: "https://carryboyambulance.com/antimicrobials/th/",
              },
            ],
          },
          {
            id: "full_body_chassis",
            name: t("ambulance.chassis_cab_fullbody"),
            items: [
              {
                name: t("ambulance.abl_xtl_sl_latest"),
                href: "https://carryboyambulance.com/box-body/abl-xlt-sl/th/",
              },
              {
                name: t("ambulance.abl_lt_sl_new"),
                href: "https://carryboyambulance.com/box-body/abl-lt-sl/th/",
              },
              {
                name: t("ambulance.abl_lt_ex"),
                href: "https://carryboyambulance.com/box-body/abl-lt-ex/th/",
              },
              {
                name: t("ambulance.abl_m_sl_new"),
                href: "https://carryboyambulance.com/box-body/abl-m-sl/th/",
              },
              {
                name: t("ambulance.abl_m_ex"),
                href: "https://carryboyambulance.com/box-body/abl-m-ex/th/",
              },
            ],
          },
          {
            id: "half_body_pickup",
            name: t("ambulance.pickup_halfbody"),
            items: [
              {
                name: t("ambulance.abl_1100_f_new"),
                href: "https://carryboyambulance.com/half-body/abl-1100-f/th/",
              },
              {
                name: t("ambulance.abl_1100_f_4x4"),
                href: "https://carryboyambulance.com/half-body/abl-1100-f/4x4/th/",
              },
              {
                name: t("ambulance.abl_1100_f_ex"),
                href: "https://carryboyambulance.com/half-body/abl-1100-f-ex/th/",
              },
              {
                name: t("ambulance.abl_1100_f_exn"),
                href: "https://carryboyambulance.com/half-body/abl-1100-f-ex/th/#1100-f-exn",
              },
              {
                name: t("ambulance.abl_900"),
                href: "https://carryboyambulance.com/half-body/abl-900/th/",
              },
              {
                name: t("ambulance.abl_860"),
                href: "https://carryboyambulance.com/half-body/abl-860/th/",
              },
              {
                name: t("ambulance.used_ambulance"),
                href: "https://carryboyambulance.com/secondhand/th/",
              },
            ],
          },
          {
            id: "rescue_vehicle",
            name: t("ambulance.rescue_vehicle_light"),
            items: [
              {
                name: t("ambulance.double_cab"),
                href: "https://carryboyrescue.com/double-cab/th/",
              },
              {
                name: t("ambulance.smart_cab"),
                href: "https://carryboyrescue.com/access-cab/th/",
              },
              {
                name: t("ambulance.standard_cab"),
                href: "https://carryboyrescue.com/long-bed/th/",
              },
            ],
          },
        ],
      },
      {
        id: "custom",
        name: t("custom_made.custom_made"),
        featured: [],
        sections: [
          {
            id: "aluminum_tray",
            name: t("custom_made.aluminum_bed"),
            items: [
              {
                name: t("custom_made.single_cab"),
                href: "https://carryboytray.com/th/",
              },
              {
                name: t("custom_made.open_cab"),
                href: "https://carryboytray.com/th/",
              },
              {
                name: t("custom_made.double_cab"),
                href: "https://carryboytray.com/th/",
              },
            ],
          },
          {
            id: "mobile_service",
            name: t("custom_made.mobile_service_vehicle"),
            items: [
              {
                name: t("custom_made.single_cab"),
                href: "https://carryboycarservices.com/service-body/single-cab/th/",
              },
              {
                name: t("custom_made.open_cab"),
                href: "https://carryboycarservices.com/service-body/extra-cab/th/",
              },
              {
                name: t("custom_made.double_cab"),
                href: "https://carryboycarservices.com/service-body/th/",
              },
              {
                name: t("custom_made.roll_up_door"),
                href: "https://carryboycarservices.com/shutter-door/th/",
              },
            ],
          },
          {
            id: "steel_tray",
            name: t("custom_made.flat_bed_steel"),
            items: [
              {
                name: t("custom_made.single_cab"),
                href: "https://carryboysuperjumbo.com/single-cab/th/",
              },
              {
                name: t("custom_made.open_cab"),
                href: "https://carryboysuperjumbo.com/extra-cab/th/",
              },
              { name: t("custom_made.double_cab"), href: "#" },
            ],
          },
        ],
      },
      {
        id: "fleet",
        name: t("fleet.fleet"),
        featured: [],
        sections: [
          {
            id: "fleet_sales",
            name: t("fleet.fleet_sales"),
            items: [
              {
                name: t("fleet.fleet_roof"),
                href: "https://carryboyfleetsales.com/th/",
              },
              {
                name: t("fleet.dutch_mill_company"),
                href: "https://carryboyfleetsales.com/foods-drinks/dutch-mill/th/",
              },
              {
                name: t("fleet.toyota_motor"),
                href: "https://carryboycanopy.com/made-to-order/th/",
              },
              {
                name: t("fleet.nissan_thailand"),
                href: "https://carryboycanopy.com/made-to-order/th/",
              },
              {
                name: t("fleet.true_corporation"),
                href: "https://carryboycanopy.com/made-to-order/th/",
              },
              {
                name: t("fleet.department_of_corrections"),
                href: "https://carryboycanopy.com/made-to-order/th/",
              },
            ],
          },
        ],
      },
      // ข้อมูลเพิ่มเติมสำหรับหมวดหมู่ Men...
    ],
    pages: [
      { name: "home", href: "#" },
      // { name: "new", href: "#" },
    ],
  };
};
