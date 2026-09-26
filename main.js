const btnAll = document.getElementById("btnAll");
const btnCars = document.getElementById("btnCars");
const btnSuvs = document.getElementById("btnSuvs");
const btnMotos = document.getElementById("btnMotos");
const btnElectrCars = document.getElementById("btnElectrCars");
const btnClassicCars = document.getElementById("btnClassicCars");

const vehiclesGrid = document.getElementById("vehiclesGrid");
const searchInput = document.getElementById("searchInput");
const categoryTitle = document.getElementById("categoryTitle");
const vipModal = document.getElementById("vipModal");




const vehicles = [
 
  {
    title: "Bugatti Chiron",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$3,000,000",
    speed: "420 km/h",
    power: "1,500 ot kuchi",
    year: "2023",
    engine: "8.0L Quad-Turbo W16",
    accel: "2.4 soniya",
    transmission: "7-pog'onali DSG",
    description: "8.0 litrli quad-turbo W16 dvigateli bilan jihozlangan giperkar. Dunyodagi eng tez va eng qimmat seriyali avtomobillardan biri.",
    image: "https://cdn.motor1.com/images/mgl/QE3q0/s1/2021-bugatti-chiron-super-sport-300.jpg"
  },
  {
    title: "Ferrari SF90 Stradale",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$524,000",
    speed: "340 km/h",
    power: "1,000 ot kuchi",
    year: "2024",
    engine: "4.0L Twin-Turbo V8 + 3 Electric",
    accel: "2.5 soniya",
    transmission: "8-pog'onali Dual-Clutch",
    description: "Ferrari brendining birinchi plagin-gibrid giperkari. Formula-1 texnologiyalari asosida yaratilgan.",
    image: "https://www.auto-data.net/images/f52/Ferrari-SF90-Stradale.jpg",
  },
  {
    title: "Porsche 911 Carrera",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$230,000",
    speed: "330 km/h",
    power: "640 ot kuchi",
    year: "2024",
    engine: "3.7L Twin-Turbo Boxer",
    accel: "2.7 soniya",
    transmission: "8-pog'onali PDK",
    description: "Nemis muhandisligining durdonasi. Orqa dvigatelli klassik arxitektura va ajoyib boshqaruv.",
    image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/05/2025-porsche-911-gts-coupe.jpg"
  },
  {
    title: "Lamborghini Huracán Sterrato",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$270,000",
    speed: "260 km/h",
    power: "602 ot kuchi",
    year: "2024",
    engine: "5.2L Atmosferali V10",
    accel: "3.4 soniya",
    transmission: "7-pog'onali LDF Dual-Clutch",
    description: "Off-road sharoitlari va grunt yo'llar uchun maxsus tayyorlangan noyob V10 superkar.",
    image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/huracan_sterrato_og_01.jpg"
  },
  {
    title: "McLaren Artura",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$237,000",
    speed: "330 km/h",
    power: "671 ot kuchi",
    year: "2024",
    engine: "3.0L Twin-Turbo V6 + Electric",
    accel: "3.0 soniya",
    transmission: "8-pog'onali SSG",
    description: "Gibrid kuch-quvvat tizimiga ega g'oyat yengil va zamonaviy Britaniya gibrid superkari.",
    image: "https://media.autoexpress.co.uk/image/private/s--Ee1vuzT6--/v1613482001/autoexpress/2021/02/McLaren%20Artura%202021-24.jpg"
  },
  {
    title: "Aston Martin Vantage",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$190,000",
    speed: "325 km/h",
    power: "656 ot kuchi",
    year: "2025",
    engine: "4.0L Twin-Turbo V8",
    accel: "3.5 soniya",
    transmission: "8-pog'onali ZF Avtomat",
    description: "Agresiv dizayn, klassik old dvigatel joylashuvi va mukammal 50/50 og'irlik muvozanati.",
    image: "https://www.motortrend.com/uploads/2024/02/2025-Aston-Martin-Vantage-V-8-12.png?w=768&width=768&q=75&format=webp"
  },
  {
    title: "Maserati MC20",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$240,000",
    speed: "325 km/h",
    power: "621 ot kuchi",
    year: "2024",
    engine: "3.0L Twin-Turbo Nettuno V6",
    accel: "2.9 soniya",
    transmission: "8-pog'onali Dual-Clutch",
    description: "Formula 1 texnologiyasi bilan jihozlangan Nettuno dvigatelli Italiya o'rta-dvigatelli sportkari.",
    image: "https://www.maserati.com/content/dam/maserati/international/Models/mc20/introduction/01-desktop.jpg"
  },
  {
    title: "Lotus Emira",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$105,000",
    speed: "290 km/h",
    power: "400 ot kuchi",
    year: "2024",
    engine: "3.5L Supercharged V6",
    accel: "4.2 soniya",
    transmission: "6-pog'onali Mexanika",
    description: "Lotus brendining oxirgi ichki yonuv dvigatelli, sof haydash hissiyotini beruvchi yengil kupe avtomobili.",
    image: "https://www.supercars.net/blog/wp-content/uploads/2024/04/lotus_emira_first_edition_5k-3840x2160-1-scaled.jpg"
  },
  {
    title: "Ford GT",
    category: "car",
    categoryLabel: "Sportkar",
    price: "$500,000",
    speed: "347 km/h",
    power: "660 ot kuchi",
    year: "2022",
    engine: "3.5L Twin-Turbo EcoBoost V6",
    accel: "3.0 soniya",
    transmission: "7-pog'onali Getrag Dual-Clutch",
    description: "Le-Man poygalari g'olibi bo'lgan afsonaviy poyga avtomobilining zamonaviy yo'l versiyasi.",
    image: "https://www.motortrend.com/uploads/2022/10/2022-Ford-GT-LM-Final-Special-Edition-2.jpg"
  },
 {
    
    title: "BMW M4 Competition",
    category: "car",
    categoryLabel: "sportcar",
    price: "$95,000",
    speed: "290km/h",
    power: "523 ot kuchi",
    year: "2024",
    engine:"3.0-Litrli Inline-6 Twin-Turbo (S58)",
    accel: "3.5 soniya",
    transmission: "8-pog'onali M Steptronic Avtomat",
    description: "Poyga treklarida to'plangan tajriba va kundalik haydash qulayligini o'zida mukammal birlashtirgan, tajovuzkor dizaynga ega afsonaviy sport kupesi.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQaLQwixeplvSNBvxIHufnz24xOE1VDtR7qlm57QDSimMOwlfPI-PHy9dM-D1Gx1l6EmwVtRX5CIZ908xnRVdpFX3Bkf7okQFaq3HJSD11zrEKnely7uPSAq_4ItmWcCZU5w8lTYJaS7VBQOLbX5NBlqxEMGpQ_OhlXendHBK9CSHiw-l-kjXFIRz2_A/s16000/2023-BMW-M4-CSL-4.jpg",
  },
  {
    
    title: "Mercedes-AMG GT Black Series",
    category: "car",
    categoryLabel: "sportcar",
    price: "$325,000",
    speed: "325km/h",
    power: "720 ot kuchi",
    year: "2023",
    engine:"4.0-Litrli V8 Biturbo (Flat-Plane Crankshaft)",
    accel: "3.2 soniya",
    transmission: "7-pog'onali AMG SPEEDSHIFT DCT Dual-Clutch",
    description: "Mersedes-AMG muhandisligining eng yuqori nuqtasi — Formula-1 texnologiyalariga va ultra-engil uglerod tolasidan ishlangan aerodinamikaga ega superkar.",
    image: "https://bringatrailer.com/wp-content/uploads/2023/01/2021_mercedes-amg_amg-gt-black-series_2021_mercedes_amg_gtbs_black-01-60965.jpg?w=1509",
  },
  {
    title: "Aston Martin DBS 770 Ultimate",
    category: "car",
    categoryLabel : "sportcar",
    price: "$387,600",
    speed: "340 km/h",
    power: "760 ot kuchi",
    year: "2024",
    engine: "5.2L V12 Twin-Turbo",
    accel: "3.4 soniya",
    transmission: "5.2L V12 Twin-Turbo",
    description: "V12 dvigatelining oxirgi va eng quvvatli afsonaviy namoyandasi — 760 ot kuchi va nafis Britaniya uslubining mukammal uyg'unligi.",
    image: "https://robbreport.com/wp-content/uploads/2023/05/10-10.jpg",
  },
  {
    title: "Mercedes-AMG G 63",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$180,000",
    speed: "220 km/h",
    power: "585 ot kuchi",
    year: "2023",
    engine: "4.0L V8 BiTurbo",
    accel: "4.5 soniya",
    transmission: "AMG SPEEDSHIFT TCT 9G",
    description: "Mersedes-AMG muhandisligining eng yuqori nuqtasi — Formula-1 texnologiyalariga va ultra-engil uglerod tolasidan ishlangan aerodinamikaga ega superkar.",
    image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/cropped-24c0078_013.jpg",
  },
   
  {
    title: "Toyota Land Cruiser 300",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$115,000",
    speed: "210 km/h",
    power: "415 ot kuchi",
    year: "2024",
    engine: "3.5L Twin-Turbo V6",
    accel: "6.7 soniya",
    transmission: "10-pog'onali Avtomat",
    description: "Har qanday murakkab ob-havo va yo'llarga chidamli afsonaviy Yaponiya yo'ltanlamasi. Yangi TNGA platformasi.",
    image: "https://img.autocarindia.com/ExtraImages/20250618065840_Hybrid_Land_Cruiser_300_Drifting.jpg"
  },
  {
    title: "Lamborghini Urus",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$230,000",
    speed: "305 km/h",
    power: "657 ot kuchi",
    year: "2023",
    engine: "4.0L Twin-Turbo V8",
    accel: "3.5 soniya",
    transmission: "8-pog'onali Avtomat",
    description: "Dunyodagi eng tezkor Krossover-Superkarlardan biri. Superkar tezligi va oilaviy SUV qulayligi bir joyda jamlangan.",
    image: "https://vladcuzub.github.io/Lamborghini-website/pictures/urus/urus_gate_mob.jpg",
  },
  {
    title: "Range Rover Autobiography",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$160,000",
    speed: "250 km/h",
    power: "523 ot kuchi",
    year: "2024",
    engine: "4.4L Twin-Turbo V8",
    accel: "4.6 soniya",
    transmission: "8-pog'onali Avtomat",
    description: "Aristokratik dizayn, tengsiz qulaylik va eng so'nggi zamonaviy texnologiyalarni o'zida jamlagan premium yo'ltanlamas.",
    image: "https://www.autobahnsouth.com/imagetag/176/main/l/Used-2019-Land-Rover-Range-Rover-Autobiography-1652125840.jpg",
  },
  {
    title: "Cadillac Escalade-V",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$152,000",
    speed: "200 km/h",
    power: "682 ot kuchi",
    year: "2024",
    engine: "6.2L Supercharged V8",
    accel: "4.4 soniya",
    transmission: "10-pog'onali Avtomat",
    description: "Ulkan va haybatli Amerika yo'ltanlamasi. Shovqinli Kompressorli V8 dvigatel va AKG premium audio tizim.",
    image: "https://gmauthority.com/blog/wp-content/uploads/2023/06/2023-Cadillac-Escalade-Luxury-Press-Photos-Exterior-003-side-front-three-quarters.jpg"
  },
  {
    title: "Porsche Cayenne Turbo GT",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$196,000",
    speed: "305 km/h",
    power: "659 ot kuchi",
    year: "2024",
    engine: "4.0L Twin-Turbo V8",
    accel: "3.3 soniya",
    transmission: "8-pog'onali Tiptronic S",
    description: "Nyurburgring poyga yo'lakchasi poygachisi va rekordchisi bo'lgan eng tezkor sport yo'ltanlamasi.",
    image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2024/02/porsche-cayenne-turbo-gt-front-3_4-angle.jpg"
  },
  {
    title: "BMW X7 M60i",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$110,000",
    speed: "250 km/h",
    power: "530 ot kuchi",
    year: "2024",
    engine: "4.4L BMW M TwinPower Turbo V8",
    accel: "4.7 soniya",
    transmission: "8-pog'onali Sport Avtomat",
    description: "Oila uchun mo'ljallangan 3 qator o'rindiqli, nihoyatda qulay va baquvvat lyuks krossover.",
    image: "https://midiawm1.webmotors.com.br/wp-content/uploads/2023/09/18153140/BMW-X7-M60-we.webp"
  },
  {
    title: "Aston Martin DBX707",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$245,000",
    speed: "310 km/h",
    power: "707 ot kuchi",
    year: "2024",
    engine: "4.0L Twin-Turbo AMG V8",
    accel: "3.3 soniya",
    transmission: "9-pog'onali Wet-Clutch",
    description: "707 ot kuchiga ega, Britaniya nafisligi va superkar quvvati birlashtirilgan yo'ltanlamas.",
    image: "https://avatars.avto.ru/get-autoru-vos/2198920/0e34e36ba1e84928a04430e807733d47/1200x900"
  },
  {
    title: "Jeep Wrangler Rubicon 392",
    category: "suv",
    categoryLabel: "Yo'ltanlamas",
    price: "$92,000",
    speed: "180 km/h",
    power: "470 ot kuchi",
    year: "2024",
    engine: "6.4L HEMI V8",
    accel: "4.5 soniya",
    transmission: "8-pog'onali Avtomat",
    description: "Haqiqiy tog'-toshlar va og'ir yo'lsizlik uchun mo'ljallangan V8 dvigatelli professional off-road vositasi.",
    image: "https://motortrend.com/files/65f9e6bce5dc6b00087a0a21/2024-jeep-wrangler-rubicon-392-final-edition.jpg"
  },
  {
    title: "Ferrari Purosangue",
    category: "suv",
    categoryLabel: "Yoltanlamas",
    price: "$402,005",
    speed: "310 km/h",
    power: "715 ot kuchi",
    year: "2024",
    engine: "6.5L Naturally Aspirated V12",
    accel: "3.3 soniya",
    transmission: "8-speed F1 Dual-Clutch",
    description: "Ferrari tarixidagi birinchi 4 eshikli va atmosferali V12 dvigateliga ega bo'lgan krossover superkar.",
    image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2024/01/2023-ferrari-purosangue-blue-front-left.jpg",
  },
  {
    title: "Porsche Cayenne Turbo E-Hybrid",
    category: "suv",
    categoryLabel: "Yoltanlamas",
    price: "$146,900",
    speed: "295 km/h",
    power: "729 ot kuchi",
    year: "2024",
    engine: "4.0L V8 Twin-Turbo + Electric Motor",
    accel: "3.7 soniya",
    transmission: "8-speed Tiptronic S Automatic",
    description: "V8 Twin-Turbo va elektromotorning gibrid jamlanmasi — trek dinamikasi hamda krossover qulayligi.",
    image: "https://cdn.motor1.com/images/mgl/bgm3W6/s1/2024-porsche-cayenne-turbo-e-hybrid-front-3-4.jpg",
  },

 

  // --- MOTOSIKLLAR (category: "moto") ---
  {
    title: "Kawasaki Ninja H2R",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$60,000",
    speed: "400 km/h",
    power: "310 ot kuchi",
    year: "2023",
    engine: "998cc Inline-4 Supercharged",
    accel: "2.2 soniya",
    transmission: "6-pog'onali Dog-Ring",
    description: "Kompressorli (Supercharged) dvigatelga ega giper-mototsikl. Faqat poyga treklari uchun mo'ljallangan.",
    image: "https://www.themilliardaire.com/en/wp-content/uploads/2014/10/kawasaki-ninja-h2r-2.jpg"
  },
  {
    title: "BMW S1000RR",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$22,000",
    speed: "303 km/h",
    power: "205 ot kuchi",
    year: "2024",
    engine: "999cc Inline-4 ShiftCam",
    accel: "2.9 soniya",
    transmission: "6-pog'onali Quickshifter",
    description: "Germaniya muhandisligi durdonasi. ShiftCam texnologiyasi va mukammal aerodinamik qanotchalar.",
    image: "https://ultimatemotorcycling.com/wp-content/uploads/2022/09/bmw-s-1000-rr-first-look-superbike-sport-motorcycle-20.jpg"
  },
  {
    title: "Ducati Panigale V4 R",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$45,000",
    speed: "300 km/h",
    power: "218 ot kuchi",
    year: "2023",
    engine: "998cc Desmosedici V4",
    accel: "2.8 soniya",
    transmission: "6-pog'onali DQS",
    description: "Italiya poyga ruhini o'zida aks ettirgan Superbike. Moto GPT texnologiyalari asosida yaratilgan.",
    image: "https://images5.1000ps.net/b-f_W3005024-ducati-panigale-v4-r-2019-636769596243513474.jpg"
  },
  {
    title: "Yamaha YZF-R1M",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$27,000",
    speed: "299 km/h",
    power: "200 ot kuchi",
    year: "2024",
    engine: "998cc Crossplane Inline-4",
    accel: "2.9 soniya",
    transmission: "6-pog'onali QSS",
    description: "Karbon korpus va Öhlins elektron podveskasi bilan jihozlangan maxsus poyga versiyasi.",
    image: "https://s1.cdn.autoevolution.com/images/moto_gallery/yamaha-yzf-r1-2024-14913_18.jpg"
  },
  {
    title: "Suzuki Hayabusa GSX1300R",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$19,000",
    speed: "299 km/h",
    power: "190 ot kuchi",
    year: "2024",
    engine: "1340cc 4-Cylinder DOHC",
    accel: "3.2 soniya",
    transmission: "6-pog'onali Mexanika",
    description: "'Sapsan qushi' nomi berilgan afsonaviy giper-turer. Uzoq masofalarga katta tezlikda qulay harakatlanadi.",
    image: "https://i.pinimg.com/736x/df/01/1c/df011c4923b63387e3ca13b338cb5a08.jpg"
  },
  {
    title: "Honda CBR1000RR-R Fireblade",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$29,000",
    speed: "299 km/h",
    power: "215 ot kuchi",
    year: "2024",
    engine: "999cc Inline-4 Liquid-Cooled",
    accel: "2.7 soniya",
    transmission: "6-pog'onali Quickshifter",
    description: "Honda brendining trek poygalari uchun mo'ljallangan eng agressiv va eng tezkor mototsikli.",
    image: "https://i.pinimg.com/736x/f7/75/32/f7753289f298e8d7bba36d8d46cee8d2.jpg"
  },
  {
    title: "Aprilia RSV4 Factory 1100",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$26,000",
    speed: "305 km/h",
    power: "217 ot kuchi",
    year: "2024",
    engine: "1099cc 65° V4",
    accel: "2.8 soniya",
    transmission: "6-pog'onali Quickshifter",
    description: "Shassisi va boshqaruv elektronikasi bo'yicha dunyodagi eng zo'r V4 superbayklardan biri.",
    image: "https://i.pinimg.com/1200x/5d/ec/c1/5decc1b9cd8da64c79dabae47811563e.jpg"
  },
  {
    title: "KTM 1290 Super Duke R",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$20,000",
    speed: "280 km/h",
    power: "180 ot kuchi",
    year: "2023",
    engine: "1301cc LC8 V-Twin",
    accel: "3.0 soniya",
    transmission: "6-pog'onali PANKL",
    description: "'Yirtqich' (The Beast) laqabli neyked motosikl. Ulkan V-Twin krucheniy momenti.",
    image: "https://i.pinimg.com/736x/fa/0d/8e/fa0d8e3f99636dd4db368dc4c9845f5d.jpg"
  },
  {
    title: "MV Agusta Rush 1000",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$45,000",
    speed: "300 km/h",
    power: "208 ot kuchi",
    year: "2023",
    engine: "998cc 4-Cylinder DOHC",
    accel: "2.9 soniya",
    transmission: "6-pog'onali EAS 3.0",
    description: "Eksklyuziv Italiya dizayni va drag-poyga uslubidagi agressiv giper-neyked.",
    image: "https://i.pinimg.com/1200x/24/ab/73/24ab73fa28b80462d303294ce9d7e0d9.jpg"
  },
  {
    title: "Ducati Streetfighter V4 SP2",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$37,995",
    speed: "299 km/h",
    power: "208 ot kuchi",
    year: "2024",
    engine: "1,103cc Desmosedici Stradale V4",
    accel: "2.8 soniya",
    transmission: "6-speed DQS Quick Shift",
    description: "Trek texnologiyalariga ega eng tajovuzkor giper-neyked mototsikl.",
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/4xNstuhmPn6oxpRxPPq2d7/ab3c994cc107ac70c5a4ae189b321dd8/Ducati-Streetfighter-V4-SP-MY23-overview-hero-1600x1000.jpg",
  },

  {
    title: "MV Agusta Brutale 1000 RR",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$37,798",
    speed: "300 km/h",
    power: "208 ot kuchi",
    year: "2024",
    engine: "998cc Inline-4",
    accel: "2.9 soniya",
    transmission: "6-speed EAS 3.0 Quickshifter",
    description: "Italiya tasviri san'ati va 300 km/h tezlik chegarasini zabt etuvchi to'rt tsilindrli texnik mo'jiza.",
    image: "https://www.motoplanete.com/mv-agusta/zoom-700px/11012-1000-Brutale-RR-Ottantesimo-2025-1000px.webp",
  },
  {
    title: "Yamaha MT-10 SP",
    category: "moto",
    categoryLabel: "Motosikl",
    price: "$17,599",
    speed: "250 km/h",
    power: "166 ot kuchi",
    year: "2024",
    engine: "998cc CP4 Crossplane Inline-4",
    accel: "2.9 soniya",
    transmission: "6-pog'onali Quick Shift System (QSS)",
    description: "YZF-R1 poyga mototsikli dvigateli va aqlli elektron podveska bilan jihozlangan, o'ta shiddatli va agressiv shahar bayki.",
    image: "https://www.cycleworld.com/resizer/kRTrD2fkgVL25EsoNAm17Luxe4Q=/cloudfront-us-east-1.images.arcpublishing.com/octane/KCPF3GOFPZHCNPKMYASFPVPAN4.jpg",
  },

  // --- ELEKTROMOBILLAR (category: "ev") ---
  {
    title: "Tesla Model 3",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$39,000",
    speed: "225 km/h",
    power: "283 ot kuchi",
    year: "2024",
    engine: "Dual Motor Electric",
    accel: "4.4 soniya",
    transmission: "1-pog'onali Reduktor",
    description: "Zamonaviy avtopilot tizimi, minimalist salon va yuqori darajadagi xavfsizlikka ega zamonaviy elektrokarlar yetakchisi.",
    image: "https://i.pinimg.com/736x/98/8e/ca/988ecad821ff51290aeb30506df77aef.jpg"
  },
  {
    title: "Porsche Taycan Turbo S",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$195,000",
    speed: "260 km/h",
    power: "761 ot kuchi",
    year: "2024",
    engine: "Dual Permanent Magnet Synchronous",
    accel: "2.8 soniya",
    transmission: "2-pog'onali Avtomat (orqa aks)",
    description: "800 voltli arxitekturaga ega nemis sport elektromobili. Ekstremal tezlanish va mukammal boshqaruv dinamikasi.",
    image: "https://ev-database.org/img/auto/Porsche_Taycan_Turbo_S/Porsche_Taycan_Turbo_S-01@2x.jpg"
  },
  {
    title: "Rimac Nevera",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$2,200,000",
    speed: "412 km/h",
    power: "1,914 ot kuchi",
    year: "2023",
    engine: "4 Individual Surface-Mounted Motors",
    accel: "1.81 soniya",
    transmission: "4 ta Mustaqil Reduktor",
    description: "Xorvatiyada ishlab chiqarilgan giper-elektromobil. 1900 ot kuchi bilan giperkarlar orasida mutlaq rekordchi.",
    image: "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/06/Rimac-Automobili-Electric-Nevera-Hypercar-Featured-image.jpg"
  },
  {
    title: "Lucid Air Sapphire",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$249,000",
    speed: "330 km/h",
    power: "1,234 ot kuchi",
    year: "2024",
    engine: "Three-Motor Powertrain",
    accel: "1.89 soniya",
    transmission: "1-pog'onali Reduktor",
    description: "Bir quvvatlanishda 700+ km yuradigan, hashamatli va g'oyat quvvatli lyuks darajadagi Amerika elektro-sedani.",
    image: "https://www.lucidmotors.com/s3fs-public/2023-08/lucid-air-sapphire-front-3qtr-track.webp"
  },
  {
    title: "Zeekr 001 FR",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$140,000",
    speed: "280 km/h",
    power: "1,265 ot kuchi",
    year: "2024",
    engine: "4 e-Motors Torque Vectoring",
    accel: "2.07 soniya",
    transmission: "1-pog'onali Reduktor",
    description: "Tank dek o'z o'rnida 360 darajaga burila oladigan (Tank Turn) Xitoyning eng agressiv Giper-Shooting Brake elektromobili.",
    image: "https://www.carscoops.com/wp-content/uploads/2023/10/Zeekr-001-FRa.jpg"
  },
  {
    title: "Audi RS e-tron GT",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$147,000",
    speed: "250 km/h",
    power: "637 ot kuchi",
    year: "2024",
    engine: "Dual Motor quattro AWD",
    accel: "3.3 soniya",
    transmission: "2-pog'onali Avtomat",
    description: "Aero-dinamik sport dizayni, quattro to'liq tortish tizimi va premium darajadagi nemis qulayligi.",
    image: "https://cdn.motor1.com/images/mgl/9m4RBp/s1/2025-audi-e-tron-gt.jpg"
  },
  {
    title: "BYD Yangwang U9",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$236,000",
    speed: "309 km/h",
    power: "1,305 ot kuchi",
    year: "2024",
    engine: "e4 Quad Motor Platform",
    accel: "2.36 soniya",
    transmission: "4 ta Mustaqil Reduktor",
    description: "DiSus-X intellektual podveskasiga ega elektromobil. U joyida sakray oladi va 3 ta g'ildirakda ham harakatlana oladi.",
    image: "https://www.evearly.news/en/wp-content/uploads/sites/7/2025/01/byd-yangwang-u9-electric-supercar-reaches-100-unit-delivery-milestone.jpg"
  },
  {
    title: "Lotus Evija",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "$2,300,000",
    speed: "350 km/h",
    power: "2,011 ot kuchi",
    year: "2024",
    engine: "4 Electric Motors",
    accel: "2.9 soniya",
    transmission: "1-pog'onali Reduktor",
    description: "2000 ot kuchidan oshuvchi britaniyalik giper-elektromobil. Karbon mono-kok va g'aroyat tunnel shaklidagi havo kanallari.",
    image: "https://www.topgear.com/sites/default/files/2025/05/1-Lotus-Evija-review-2025-UK.jpg?w=1784&h=1004"
  },
  {
    title: "Xiaomi SU 7 Ultra",
    category: "ev",
    categoryLabel: "Elektromobil",
    price: "110,000",
    speed: "350km/h",
    power: "1,548 ot kuchi",
    year: "2025",
    engine: "Triple-Motor (2x V8s + 1x V6s)",
    accel: "1.98 soniya",
    transmission: "1-pog'onali Reduktor",
    description: "Uchta motor bilan jihozlangan va Nyurburgring treki rekordchisi bo'lgan eng tezkor Xitoy elektro-sedani.",
    image: "https://st.arenaev.com/specs/xiaomi/xiaomi-su7-ultra-front.jpg",
},
{
  title: "Porsche Taycan Turbo GT",
  category: "ev",
  categoryLabel: "Elektromobil",
  price: "$230,000",
  speed: "305 km/h",
  power: "1,092 ot kuchi",
  year: "2025",
  engine: "Dual-Motor Electric AWD",
  accel: "2.2 soniya",
  transmission: "2-speed Automatic (Rear Axle)",
  description: "Nurburgring poyga trekida rekord o'rnatgan, 1,092 ot kuchiga ega eng tezkor va quvvatli seriyali Porsche elektromobili.",
  image: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGewirQ911RmWBiYfn7gVdc5QDkt%25XzoGnL8W6eT9yIEVRzumv39h7NDxXj4AUV2y6a%25JshkpRmWBiAHh7gVdcdAaUlhDfghZspAnP9ktiZJyN2HoctBvoQ34f8dXFMB%25PED6u0ILN9nRe2k8o4y7zQJpF%25m8cAzGs8bGVC3N3lc3eUNSWa9vJA4q8j",
},

{
  title: "Tesla Model S Plaid",
  category: "ev",
  categoryLabel: "Elektromobil",
  price: "$89,990",
  speed: "322 km/h",
  power: "1,020 ot kuchi",
  year: "2024",
  engine: "Tri-Motor All-Wheel Drive (AWD)",
  accel: "2.1 soniya",
  transmission: "1-pog'onali Reduktor (Direct Drive",
  description: "Uchar plastinka tezlanishiga va 1,020 ot kuchiga ega afsonaviy seriyali elektromobil.",
  image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/06/tesla-model-s-plaid.jpg",
},

{
  title: "Hyundai Ioniq 5 N",
  category: "ev",
  categoryLabel: "Elektromobil",
  price: "$66,100",
  speed: "3.4 soniya",
  power: "260 km/h",
  year: "2025",
  engine: "Dual-Motor Electric AWD",
  accel: "3.4 soniya",
  transmission: "N e-Shift (Virtual 8-pog'onali uzatmalarni taqlid qiluvchi tizim)",
  description: "Sun'iy dvigatel ovozi va dvigatel uzatmasi hissini beruvchi eng quvnoq va emotsional elektr-xot-xetch.",
  image: "https://www.carscoops.com/wp-content/uploads/2023/11/Hyundai-Ioniq-5-N-Static-1.jpg",
},

{
  title: "Range Rover SV Edition One",
  category: "suv",
  categoryLabel: "Yo'ltanlamas",
  price: "$180,000",
  speed: "290 km/h",
  power: "626 ot kuchi",
  year: "2024",
  engine: "4.4L V8 Twin-Turbo (BMW M)",
  accel: "3.8 soniya",
  transmission: "8-pog'onali Avtomat (ZF)",
  description: "Aristokratik Britaniya hashamati va 626 ot kuchiga ega V8 qudratining oliy ko'rinishi.",
  image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/08/rrs_sv_edition_two_25my_02_dx_marl_grey_070824.jpg",
},
  {
    title: "Ford Mustang Shelby GT500",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$250,000",
    speed: "210 km/h",
    power: "355 ot kuchi",
    year: "1967",
    engine: "7.0L V8 Cobra Jet",
    accel: "6.2 soniya",
    transmission: "4-pog'onali Mexanika",
    description: "Afsonaviy 'Eleanor' maskl-kari. Amerika avto sanoatining eng mashhur klassik durdonalaridan biri.",
    image: "https://www.motortrend.com/uploads/2021/11/2022-Ford-Mustang-Shelby-GT500-Heritage-Edition-14.jpg"
  },
  {
    title: "Mercedes-Benz 300 SL Gullwing",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$1,500,000",
    speed: "260 km/h",
    power: "215 ot kuchi",
    year: "1955",
    engine: "3.0L Inline-6",
    accel: "8.8 soniya",
    transmission: "4-pog'onali Mexanika",
    description: "'Tepaga ochiluvchi qalpoq' (Gullwing) eshiklariga ega afsonaviy nemis supersportkari.",
    image: "https://images.hgmsites.net/hug/1955-mercedes-benz-300-sl-alloy-gullwing--photo-credit-rm-sothebys_100828272_h.jpg"
  },
  {
    title: "Ferrari 250 GTO",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$40,000,000",
    speed: "280 km/h",
    power: "300 ot kuchi",
    year: "1962",
    engine: "3.0L Colombo V12",
    accel: "2.9 soniya",
    transmission: "5-pog'onali Mexanika",
    description: "Dunyodagi eng qimmat klassik avtomobillardan biri. Vaqt o'tsa ham qiymati oshib boruvchi afsona.",
    image: "https://images.carandbike.com/cms/articles/2023/11/3210242/1_Ferrari_250_GTO_527debcba7.jpg"
  },
  {
    title: "Chevrolet Corvette C1",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$120,000",
    speed: "180 km/h",
    power: "230 ot kuchi",
    year: "1958",
    engine: "4.6L Small-Block V8",
    accel: "7.5 soniya",
    transmission: "2-pog'onali Powerglide",
    description: "Birinchi avlod Corvette. Ikki rangli korpus va o'zgacha retro-roster uslubi.",
    image: "https://erclassics.b-cdn.net/media/catalog/product/cache/2/thumbnail/1920x/17f82f742ffe127f42dca9de82fb58b1/c/h/chevrolet-corvette-c1-1961-c5356-054.jpg"
  },
  {
    title: "Aston Martin DB5",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$1,100,000",
    speed: "233 km/h",
    power: "282 ot kuchi",
    year: "1964",
    engine: "4.0L Inline-6",
    accel: "8.0 soniya",
    transmission: "5-pog'onali ZF Mexanika",
    description: "Jeyms Bond (Agent 007)ning afsonaviy mashinasi. Britaniya aristokratik uslubining ramzi.",
    image: "https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/897/1963-aston-martin-db5_100897828.jpg"
  },
  {
    title: "Dodge Charger R/T",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$180,000",
    speed: "220 km/h",
    power: "425 ot kuchi",
    year: "1970",
    engine: "7.0L HEMI V8",
    accel: "5.5 soniya",
    transmission: "3-pog'onali Avtomat",
    description: "Agressiv dizayn va ulkan HEMI V8 dvigateliga ega haqiqiy Amerika 'Muscle Car'.",
    image: "https://cdn.jdpower.com/JDP_2023%20Dodge%20Charger%20RT%20Scat%20Pack%20Widebody%20Front%20Quarter%20View.jpg"
  },
  {
    title: "Porsche 356 Speedster",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$350,000",
    speed: "175 km/h",
    power: "95 ot kuchi",
    year: "1956",
    engine: "1.6L Flat-4 Air-Cooled",
    accel: "10.5 soniya",
    transmission: "4-pog'onali Mexanika",
    description: "Porsche sportkarlarining ajdodi. Yengil va ixcham korpus, havo bilan sovutiluvchi dvigatel.",
    image: "https://cdn.motor1.com/images/mgl/BoRM6/s1/1959-porsche-356-speedster-aquamarine-transitional-by-emory-motorsport.jpg"
  },
  {
    title: "Jaguar E-Type Series 1",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$220,000",
    speed: "241 km/h",
    power: "265 ot kuchi",
    year: "1961",
    engine: "3.8L Inline-6",
    accel: "6.9 soniya",
    transmission: "4-pog'onali Mexanika",
    description: "Enzo Ferrari tomonidan 'dunyodagi eng chiroyli mashina' deb tan olingan afsonaviy Yaguar.",
    image: "https://kolesa-uploads.ru/-/e3c4ae08-01e8-4502-b18a-ae5deb963dc3/0-0.jpg"
  },
  {
    title: "Lamborghini Miura P400",
    category: "classic",
    categoryLabel: "Klassik Avtomobil",
    price: "$2,000,000",
    speed: "280 km/h",
    power: "350 ot kuchi",
    year: "1968",
    engine: "3.9L V12 Transverse",
    accel: "6.7 soniya",
    transmission: "5-pog'onali Mexanika",
    description: "Dunyodagi birinchi haqiqiy o'rta dvigatelli (Mid-engine) superkar hisoblanmish afsonaviy Italiya avtomobili.",
    image: "https://sportscardigest.com/wp-content/uploads/2023/01/1967-Lamborghini-Miura-P400526170_-scaled-e1674631587565.jpg"
  },
   {
    title: "Porsche 911 Carrera RS 2.7",
    category: "classic",
    categoryLabel: "Klassik avtomobil",
    price: "$2,100,000",
    speed: "245 km/h",
    power: "210 ot kuchi",
    year: "1973",
    engine: "2.7L Naturally Aspirated Flat-6",
    accel: "5.8 soniya",
    transmission: "5-speed Manual (Type 915)",
    description: "Mashhur 'Ducktail' spoyleriga ega, poyga yo'llari uchun yengillashtirilgan birinchi afsonaviy Carrera.",
    image: "https://www.supercars.net/blog/wp-content/uploads/2019/11/Porsche-911-Carrera-RS-2.7.png",
  },
  {
    title: "Shelby Cobra 427 (1965)",
    category: "classic",
    categoryLabel: "Klassik avtomobil",
    price: "$2,000,000",
    speed: "265 km/h",
    power: "425 ot kuchi",
    year: "1965",
    engine: "7.0L (427 cu in) V8",
    accel: "4.2 soniya",
    transmission: "4-pog'onali Mexanika (Toploader)",
    description: "Yengil korpus va ulkan 7-litrli V8 dvigateliga ega afsonaviy Amerika-Britaniya poyga roadsteri.",
    image: "https://s1.cdn.autoevolution.com/images/news/gallery/carroll-shelbys-personal-1965-shelby-427-cobra-roadster-sells-makes-history_40.jpg",
  },
  {
     title: "Ford Mustang Boss 429 (1969)",
    category: "classic",
    categoryLabel: "Klassik avtomobil",
    price: "$500,000",
    speed: "206 km/h",
    power: "375 ot kuchi",
    year: "1969",
    engine: "7.0L (429 cu in) V8 Nascar Engine",
    accel: "5.3 soniya",
    transmission: "4-pog'onali Mexanika (Toploader)",
    description: "Nascar poygalari uchun maxsus yaratilgan eng quvvatli va noyob afsonaviy Amerika Muscle Car.",
    image: "https://www.mustangspecs.com/wp-content/uploads/2020/06/1969-Boss-429.jpg",
  },


];
let activeCategory = "all";
let currentRenderedList = [];


/* =========================
   MASHINALARNI CHIQARISH
========================= */

function renderVehicles(list) {

  if (!vehiclesGrid) return;

  currentRenderedList = list;

  if (list.length === 0) {

   vehiclesGrid.innerHTML =
   `
  <div class="empty-result">
    <span>⌕</span>
    Hech qanday texnika topilmadi...
  </div>
  `;

    return;
  }

  let cardsHTML = "";

  for (let i = 0; i < list.length; i++) {

    const item = list[i];

    cardsHTML += `
      <div class="card" style="--delay: ${i * 0.06}s">

        <div class="card-banner">

          <img
            src="${item.image}"
            alt="${item.title}"
            loading="lazy"
          >

          <span class="category-badge">
            ${item.categoryLabel}
          </span>

        </div>

        <div class="card-body">

          <div>
            <h3 class="card-title">
              ${item.title}
            </h3>

            <div class="card-price">
              ${item.price}
            </div>
          </div>

          <div>

            <div class="specs-grid">

              <div class="spec-item">
                <span class="spec-label">
                  Tezlik
                </span>

                <span class="spec-value">
                  ${item.speed}
                </span>
              </div>

              <div class="spec-item">
                <span class="spec-label">
                  Quvvat
                </span>

                <span class="spec-value">
                  ${item.power}
                </span>
              </div>

              <div class="spec-item">
                <span class="spec-label">
                  Turi
                </span>

                <span class="spec-value">
                  ${item.categoryLabel}
                </span>
              </div>

            </div>

            <button
              class="btn-details"
              onclick="openVehicleDetails(${i})"
            >
              BATAFSIL →
            </button>
            <button class="card-compare-btn" onclick="toggleCompare(${i}, event)">
  + Solishtirishga qo'shish
</button>

          </div>

        </div>

      </div>
      `
    ;
  }

  vehiclesGrid.innerHTML = cardsHTML;


  /* Card sichqonchani sezadi */

  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {

    card.addEventListener("mousemove", function(e) {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty(
        "--mouse-x",
        x + "px"
      );

      card.style.setProperty(
        "--mouse-y",
        y + "px"
      );

    });

  });

}


/* =========================
   SEARCH + FILTER
========================= */

function filterVehicles() {

  const query = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  const filtered = vehicles.filter(function(v) {

    const matchesCategory =
      activeCategory === "all" ||
      v.category === activeCategory;

    const matchesSearch =
      v.title.toLowerCase().includes(query) ||
      v.categoryLabel.toLowerCase().includes(query) ||
      v.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;

  });

  renderVehicles(filtered);
}


/* =========================
   TABNI O'ZGARTIRISH
========================= */

function setActiveTab(
  selectedBtn,
  categoryKey,
  titleText
) {

  const buttons =
    document.querySelectorAll(".tab-btn");

  buttons.forEach(function(btn) {

    btn.classList.remove("active");

  });


  if (selectedBtn) {

    selectedBtn.classList.add("active");

  }


  activeCategory = categoryKey;


  if (categoryTitle) {

    categoryTitle.textContent =
      titleText;

  }


  filterVehicles();

}


/* =========================
   VIP BATAFSIL OYNASI
========================= */

function openVehicleDetails(index) {

  const car =
    currentRenderedList[index];

  if (!car) return;


  const carImage =
    document.getElementById("carImage");
 const carCategory =
    document.getElementById("carCategory");

  const carTitle =
    document.getElementById("carTitle");

  const carPrice =
    document.getElementById("carPrice");

  const carDesc =
    document.getElementById("carDesc");

  const carYear =
    document.getElementById("carYear");

  const carEngine =
    document.getElementById("carEngine");

  const carSpeed =
    document.getElementById("carSpeed");

  const carPower =
    document.getElementById("carPower");

  const carAccel =
    document.getElementById("carAccel");

  const carTransmission =
    document.getElementById("carTransmission");


  if (carImage) {

    carImage.src = car.image;
    carImage.alt = car.title;

  }


  if (carCategory) {

    carCategory.textContent =
      car.categoryLabel || "VIP EDITION";

  }


  if (carTitle) {

    carTitle.textContent =
      car.title || "---";

  }


  if (carPrice) {

    carPrice.textContent =
      car.price || "$0";

  }


  if (carDesc) {

    carDesc.textContent =
      car.description || "...";

  }


  if (carYear) {

    carYear.textContent =
      car.year || "---";

  }


  if (carEngine) {

    carEngine.textContent =
      car.engine || "---";

  }


  if (carSpeed) {

    carSpeed.textContent =
      car.speed || "---";

  }


  if (carPower) {

    carPower.textContent =
      car.power || "---";

  }


  if (carAccel) {

    carAccel.textContent =
      car.accel || "---";

  }


  if (carTransmission) {

    carTransmission.textContent =
      car.transmission || "---";

  }


  if (vipModal) {

    vipModal.classList.add("active");

    document.body.style.overflow =
      "hidden";

  }

}


/* =========================
   MODALNI YOPISH
========================= */

function closeVehicleDetails() {

  if (vipModal) {

    vipModal.classList.remove("active");

    document.body.style.overflow =
      "";

  }

}


/* =========================
   MODAL TASHQARISINI BOSISH
========================= */

window.addEventListener(
  "click",
  function(e) {

    if (
      e.target === vipModal
    ) {

      closeVehicleDetails();

    }

  }
);


/* =========================
   ESC BOSILGANDA YOPISH
========================= */

window.addEventListener(
  "keydown",
  function(e) {

    if (
      e.key === "Escape" &&
      vipModal &&
      vipModal.classList.contains("active")
    ) {

      closeVehicleDetails();

    }

  }
);


/* =========================
   TUGMALAR
========================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    /* Boshlanishida hamma mashina */

    renderVehicles(vehicles);


    if (btnAll) {

      btnAll.classList.add("active");

      btnAll.addEventListener(
        "click",
        function() {

          setActiveTab(
            btnAll,
            "all",
            "Barcha Avtomobillar"
          );

        }
      );

    }


    if (btnCars) {

      btnCars.addEventListener(
        "click",
        function() {

          setActiveTab(
            btnCars,
            "car",
            "Sportkarlar"
          );

        }
      );

    }


    if (btnSuvs) {

      btnSuvs.addEventListener(
        "click",
        function() {

          setActiveTab(
            btnSuvs,
            "suv",
            "Yo'l Tanlamas Moshinalar"
          );

        }
      );

    }


    if (btnMotos) {

      btnMotos.addEventListener(
        "click",
        function() {

          setActiveTab(
            btnMotos,
            "moto",
            "Motosikllar"
          );

        }
      );

    }


    if (btnElectrCars) {

      btnElectrCars.addEventListener(
        "click",
        function() {

          setActiveTab(
            btnElectrCars,
            "ev",
            "Elektromobillar"
          );

        }
      );

    }


    if (btnClassicCars) {

      btnClassicCars.addEventListener(
        "click",
        function() {

          setActiveTab(
            btnClassicCars,
            "classic",
            "Klassik Avtomobillar"
          );

        }
      );

    }


    if (searchInput) {

      searchInput.addEventListener(
        "input",
        filterVehicles
      );

    }

  }
);
let compareList = [];

function toggleCompare(index, event) {
  event.stopPropagation();
  // currentRenderedList - sizda hozir ekranda turgan mashinalar massivi nomi (agar boshqacha bo'lsa, o'zingiznikini yozing)
  const car = currentRenderedList[index]; 
  
  const existIndex = compareList.findIndex(c => c.title === car.title);
  
  if (existIndex > -1) {
    compareList.splice(existIndex, 1);
    event.target.textContent = "+ Solishtirishga qo'shish";
    event.target.classList.remove("selected");
  } else {
    if (compareList.length >= 2) {
      alert("Faqat 2 ta avtomobilni solishtirish mumkin!");
      return;
    }
    compareList.push(car);
    event.target.textContent = "✓ Qo'shildi";
    event.target.classList.add("selected");
  }
  
  document.getElementById("compareCount").textContent = compareList.length;
}

function openCompareModal() {
  const modal = document.getElementById("compareModal");
  const grid = document.getElementById("compareGrid");
  
  if (compareList.length ===0) {
    alert("Solishtirish uchun avtomobil tanlanmagan!");
    return;
  }
  
  let html = "";
  compareList.forEach(car => {
    html +=`
      <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1);">
        <img src="${car.image}" style="width:100%; height:150px; object-fit:cover; border-radius:10px; margin-bottom:15px;">
        <h3 style="color:var(--white); margin-bottom:5px;">${car.title}</h3>
        <p style="color:var(--gold); font-weight:bold; margin-bottom:15px;">${car.price}</p>
        <p style="font-size:12px; color:var(--muted); margin-bottom:5px;"><b>Tezlik:</b> ${car.speed}</p>
        <p style="font-size:12px; color:var(--muted); margin-bottom:5px;"><b>Quvvat:</b> ${car.power}</p>
        <p style="font-size:12px; color:var(--muted); margin-bottom:5px;"><b>Tezlashuv:</b> ${car.accel}</p>
        <p style="font-size:12px; color:var(--muted);"><b>Yili:</b> ${car.year}</p>
      </div>
    `;
  });
  
  grid.innerHTML = html;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
// 1. Yangilangan va ta'sirchan matnlar bazasi
var heroContentData = {
  btnAll: {
    subtitle: "Tezlik va Mukammallik",
    title: "Orzuyingizdagi Moshinalar Bu Yerda"
  },
  btnCars: {
    subtitle: "Adrenalin va Cheksiz Ot Kuchi",
    title: "Poyga Yo'lakchasi Afsonalari"
  },
  btnMotos: {
    subtitle: "Tezlik, Erkinlik va Adrenalin", // "Ehtiros" so'zi almashtirildi
    title: "Ikki G'ildirakdagi Erkin Harakat"
  },
  btnSuvs: {
    subtitle: "Quvvat va Murosasiz Komfort",
    title: "Har Qanday Yo'lda Ustunlik"
  },
  btnElectrCars: {
    subtitle: "Jimjitlik va Lahzalik Tezlanish",
    title: "Kelajak Texnologiyasi Bugun"
  },
  btnClassicCars: {
    subtitle: "Vaqt Sinovidan O'tgan Afsonalar",
    title: "Haqiqiy Uslub va Tarix"
  }
};

// 2. Tezkor animatsiya funksiyasi
function updateHeroTextByBtnId(btnId) {
  var subtitleEl = document.querySelector(".hero-subtitle");
  var titleEl = document.querySelector(".hero-title");

  if (!subtitleEl || !titleEl) return;

  var data = heroContentData[btnId] || heroContentData.btnAll;

  // Lahzalik yo'qolish
  subtitleEl.style.opacity = "0";
  titleEl.style.opacity = "0";
  subtitleEl.style.transform = "translateY(-6px)";
  titleEl.style.transform = "translateY(-6px)";

  // Tezroq almashish: 100ms (avvalgi 250ms o'rniga)
  setTimeout(function () {
    subtitleEl.innerText = data.subtitle;
    titleEl.innerText = data.title;

    subtitleEl.style.opacity = "1";
    titleEl.style.opacity = "1";
    subtitleEl.style.transform = "translateY(0)";
    titleEl.style.transform = "translateY(0)";
  }, 100);
}

// 3. Hodisalarni ulab qo'yish
document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      updateHeroTextByBtnId(this.id);
    });
  });
});
var currentMode = "eco";
var baseRange = 650; 

function setDriveMode(btnElement, mode) {
  document.querySelectorAll(".mode-btn").forEach(function(b) {
    b.classList.remove("active");
  });
  btnElement.classList.add("active");
  currentMode = mode;
  calculateRange();
}

function calculateRange() {
  var speed = parseInt(document.getElementById("speedInput").value);
  document.getElementById("speedValue").innerText = speed + " km/h";

  var modeMultiplier = 1;
  if (currentMode === "comfort") modeMultiplier = 0.85;
  if (currentMode === "sport") modeMultiplier = 0.65;

 
  var speedPenalty = (speed - 50) * 1.8;
  var finalKm = Math.max(120, Math.round((baseRange - speedPenalty) * modeMultiplier));

  // Animatsiyali natija
  document.getElementById("rangeKm").innerText = finalKm;
  
  // Batareya visual ko'rsatkichi
  var batteryPercent = Math.min(100, Math.round((finalKm / 650) * 100));
  document.getElementById("batteryBar").style.width = batteryPercent + "%";
}
// 1. Savollar bazasi (5 ta kengaytirilgan savol)
var quizQuestions = [
  {
    question: "1. Yo'lda yurganingizda siz uchun eng asosiy his-tuyg'u qaysi?",
    options: [
      { text: "⚡ Adrenalin va yuqori tezlikni his qilish", type: "sport" },
      { text: "🏍️ Shamol nafasi, erkinlik va moslashuvchanlik", type: "moto" },
      { text: "👑 Ishonch, qulaylik va yuqori pozitsiya", type: "suv" },
      { text: "🔋 Jimjitlik va kelajak texnologiyasi", type: "ev" },
      { text: "📜 Estetika, tarix va odamlarning havas bop qarashi", type: "classic" }
    ]
  },
  {
    question: "2. Sizning ideal dam olish kuningiz qanday o'tadi?",
    options: [
      { text: "🏎️ Poyga trassasida (Track day) tezlik bilan", type: "sport" },
      { text: "🏍️ Motosiklda tog' yo'llari bo'ylab erkin sayr", type: "moto" },
      { text: "⛰️ Tabiat qo'ynida, og'ir yo'lsizliklarni yengish", type: "suv" },
      { text: "🌆 Zamonaviy aqlli shaharda sayr qilish", type: "ev" },
      { text: "🛠️ Retro mashinani yuvib, ko'rgazmalarga olib chiqish", type: "classic" }
    ]
  },
  {
    question: "3. Dvigatel (motor) ovoziga munosabatingiz?",
    options: [
      { text: "🔥 V12 dvigatelining baland va agressiv ovozi!", type: "sport" },
      { text: "🔊 Motosikl glushitelining yuqori oborotli ovozi", type: "moto" },
      { text: "🔊 Baquvvat, past chastotali xillagchi quvvat ovozi", type: "suv" },
      { text: "🤫 Umuman ovozsiz, mutlaq jimjitlik ma'qul", type: "ev" },
      { text: "🎶 Klassik Karbyurator va xos mexanik ovoz", type: "classic" }
    ]
  },
  {
    question: "4. Avtomobil/Mototransport dizaynida nimani qadrlaysiz?",
    options: [
      { text: "📐 Aerodinamika va uglerod (carbon) detallar", type: "sport" },
      { text: "⚙️ Ochiq qolgan dvigatel va ixcham, yengil karkas", type: "moto" },
      { text: "🛡️ Botiq, tajovuzkor va baquvvat korpus", type: "suv" },
      { text: "💡 Futurist neon chiroqlar va minimalist salon", type: "ev" },
      { text: "✨ Xrom detallar, charm salon va vaqt sinagan shakllar", type: "classic" }
    ]
  },
  {
    question: "5. Yo'l tirbandligida (probkada) qanday yo'l tutasiz?",
    options: [
      { text: "🚦 Birinchi bo'lib svetofordan tezlanib chiqib ketaman", type: "sport" },
      { text: "🛵 Mashinalar orasidan osongina o'tib ketaman", type: "moto" },
      { text: "🛋️ Baland o'rindiqda maza qilib, shoshmasdan kutaman", type: "suv" },
      { text: "🤖 Avtopilotni yoqib, musiqadan bahramand bo'laman", type: "ev" },
      { text: "🎵 Retro musiqani qo'yib, o'z estetikamdan rohatlanaman", type: "classic" }
    ]
  }
];


var quizResultsData = {
  sport: { 
    name: "Porsche 911 GT3 RS", 
    desc: "Siz poyga yo'llari va yuqori adrenalin uchun tug'ilgansiz! Sizga maksimal ot kuchi va aerodinamika mos keladi." 
  },
  moto: { 
    name: "Kawasaki Ninja H2R", 
    desc: "Siz uchun erkinlik va shamol tezligi birinchi o'rinda. Ikki g'ildirakdagi haqiqiy quvvat va dinamika sizniki!" 
  },
  suv: { 
    name: "Mercedes-Benz G63 AMG", 
    desc: "Siz har qanday yo'lda va vaziyatda ustunlikni xohlaysiz. Murosasiz quvvat va komfort sizning tanlovingiz." 
  },
  ev: { 
    name: "Tesla Model S Plaid", 
    desc: "Siz kelajak texnologiyasi va zamonaviy innovatsiyalar tarafdorisiz. Lahzalik tezlanish va jimjitlik sizga mos." 
  },
  classic: { 
    name: "1967 Ford Mustang Shelby GT500", 
    desc: "Sizda haqiqiy estetik did va tarixga hurmat bor. Vaqt sinovidan o'tgan afsonaviy uslub va xarakter sizniki!" 
  }
};

var currentStep = 0;
var userScores = { sport: 0, moto: 0, suv: 0, ev: 0, classic: 0 };

function renderQuizStep() {
  var qData = quizQuestions[currentStep];
  var totalQuestions = quizQuestions.length;
  var progressPercent = ((currentStep + 1) / totalQuestions) * 100;

  document.getElementById("progressBar").style.width = progressPercent + "%";
  document.getElementById("quizStepText").innerText = (currentStep + 1) + "/" + totalQuestions;
  document.getElementById("quizQuestion").innerText = qData.question;

  var optionsContainer = document.getElementById("quizOptions");
  optionsContainer.innerHTML = "";

  qData.options.forEach(function (opt) {
    var btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.innerText = opt.text;
    btn.onclick = function () {
      selectQuizOption(opt.type);
    };
    optionsContainer.appendChild(btn);
  });
}

function selectQuizOption(type) {
  userScores[type] = (userScores[type] || 0) + 1;
  currentStep++;

  if (currentStep < quizQuestions.length) {
    renderQuizStep();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById("quizStep").style.display = "none";
  document.getElementById("quizResult").style.display = "block";

  // Eng ko'p ball toplagan kategoriyani topish
  var winnerType = "sport";
  var maxScore = -1;

  for (var category in userScores) {
    if (userScores[category] > maxScore) {
      maxScore = userScores[category];
      winnerType = category;
    }
  }

  var res = quizResultsData[winnerType] || quizResultsData.sport;
  document.getElementById("resultCarName").innerText = res.name;
  document.getElementById("resultCarDesc").innerText = res.desc;
}

function resetQuiz() {
  currentStep = 0;
  userScores = { sport: 0, moto: 0, suv: 0, ev: 0, classic: 0 };
  document.getElementById("quizStep").style.display = "block";
  document.getElementById("quizResult").style.display = "none";
  renderQuizStep();
}

document.addEventListener("DOMContentLoaded", function () {
  renderQuizStep();
});
