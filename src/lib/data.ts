import { Product, ProductCategory, SkinCondition, Treatment } from '@/types';


// Navigation data
export const treatments: Treatment[] = [
  { id: '1', title: "PicoWay®- Picosecond Laser", href: 'https://www.pulse-clinic.co.uk/treatment/picoway-picosecond-laser/' },
  { id: '2', title: "Soprano Titanium Laser Hair Removal", href: 'https://www.pulse-clinic.co.uk/treatment/soprano-titanium-laser-hair-removal/' },
  { id: '3', title: "Electrolysis - Hair Removal", href: 'https://www.pulse-clinic.co.uk/treatment/electrolysis-hair-removal/' },
  { id: '4', title: "Laser Tattoo Removal", href: 'https://www.pulse-clinic.co.uk/treatment/laser-tattoo-removal/' },
  { id: '5', title: "Laser for Red Facial Veins and Rosacea", href: 'https://www.pulse-clinic.co.uk/treatment/laser-for-red-facial-veins/' },
  { id: '6', title: "PhotoFacial Laser for Pigmentation", href: 'https://www.pulse-clinic.co.uk/treatment/laser-for-pigmentation-ipl-aft/' },
  { id: '7', title: "ClearLift Laser Facelift", href: 'https://www.pulse-clinic.co.uk/treatment/clearlift-laser-facelift/' },
  { id: '8', title: "Alma Hybrid CO2 Laser", href: 'https://www.pulse-clinic.co.uk/treatment/alma-hybrid-fractional-co2-laser/' },
  { id: '9', title: "MeLine® Dark Circle Treatment", href: 'https://www.pulse-clinic.co.uk/treatment/meline-dark-circle-treatment/' },
  { id: '10', title: "SkinPen Microneedling", href: 'https://www.pulse-clinic.co.uk/treatment/skinpen-microneedling/' },
  { id: '11', title: "Alma TED Advanced Hair Restoration", href: 'https://www.pulse-clinic.co.uk/treatment/hair-loss-and-thinning-calecim-treatment/' },
  { id: '12', title: "Laser for Leg Veins (LP Nd:YAG)", href: 'https://www.pulse-clinic.co.uk/treatment/laser-for-leg-veins-lp-ndyag/' },
  { id: '13', title: "iPixel Laser Skin Resurfacing", href: 'https://www.pulse-clinic.co.uk/treatment/ipixel-laser-skin-resurfacing/' },
  { id: '14', title: "Lesion Removal - Skin Tag, Milia and Wart Removal", href: 'https://www.pulse-clinic.co.uk/treatment/skin-tag-milia-and-wart-removal/' },
  { id: '15', title: "Morpheus8 – Face & Neck lift", href: 'https://www.pulse-clinic.co.uk/treatment/morpheus8-face-neck-lift/' },
  { id: '16', title: "ClearSkin Pro Acne Treatment", href: 'https://www.pulse-clinic.co.uk/treatment/clearskin-acne-treatment/' },
  { id: '17', title: "Cosmelan Depigmentation peel", href: 'https://www.pulse-clinic.co.uk/treatment/cosmelan-depigmentation-peel/' },
  { id: '18', title: "Dermamelan Intimate Brightening Treatment", href: 'https://www.pulse-clinic.co.uk/treatment/dermamelan-intimate-brightening-treatment/' },
  { id: '19', title: "Forma Radio Frequency", href: 'https://www.pulse-clinic.co.uk/treatment/forma-radio-frequency/' },
  { id: '20', title: "Dermalux LED Phototherapy", href: 'https://www.pulse-clinic.co.uk/treatment/dermalux-led-phototherapy/' },
  { id: '21', title: "Medical Facials", href: 'https://www.pulse-clinic.co.uk/treatment/skin-resurfacing-facial/' },
  { id: '22', title: "Obagi Blue Peel", href: 'https://www.pulse-clinic.co.uk/treatment/injectable-treatments/' },
  { id: '23', title: "Exosome Treatment", href: 'https://www.pulse-clinic.co.uk/treatment/exosome-treatment/' },
  { id: '24', title: "Anti-Wrinkle Injections", href: 'https://www.pulse-clinic.co.uk/treatment/anti-wrinkle-injections/' },
  { id: '25', title: "Skin Boosters / Biostimulators", href: 'https://www.pulse-clinic.co.uk/treatment/skin-boosters-biostimulators/' },
  { id: '26', title: "Dermal Fillers", href: 'https://www.pulse-clinic.co.uk/treatment/injectable-treatments-2/' },
  { id: '27', title: "Near Infra-Red (NIR) Skin Tightening", href: 'https://www.pulse-clinic.co.uk/treatment/near-infra-red-nir-skin-tightening/' },
  { id: '28', title: "Nail Fungus Laser Treatment", href: 'https://www.pulse-clinic.co.uk/treatment/nail-fungus-laser-treatment/' },
  { id: '29', title: "Ultimate ReNU-venate", href: 'https://www.pulse-clinic.co.uk/treatment/pulse-signature-treatments/' },
];

export const skinConditions: SkinCondition[] = [
  { id: '1', title: "Acne Scarring", href: 'https://www.pulse-clinic.co.uk/skin-condition/acne-scarring/' },
  { id: '2', title: "Pigmentation", href: 'https://www.pulse-clinic.co.uk/skin-condition/pigmentation/' },
  { id: '3', title: "Roseacea / Flushing", href: 'https://www.pulse-clinic.co.uk/skin-condition/roseacea-redness-reduction/' },
  { id: '4', title: "Spider / Thread Veins", href: 'https://www.pulse-clinic.co.uk/skin-condition/spider-thread-veins/' },
  { id: '5', title: "Acne", href: 'https://www.pulse-clinic.co.uk/skin-condition/acne-2/' },
  { id: '6', title: "Eyebags / Tired looking eyes", href: 'https://www.pulse-clinic.co.uk/skin-condition/eyebags-tired-looking-eyes/' },
  { id: '7', title: "Hooded eyelids", href: 'https://www.pulse-clinic.co.uk/skin-condition/hooded-eyelids/' },
  { id: '8', title: "Fine lines / Wrinkle Reduction", href: 'https://www.pulse-clinic.co.uk/skin-condition/anti-ageing-wrinkle-reduction/' },
  { id: '9', title: "Enlarged pores/ Blackheads", href: 'https://www.pulse-clinic.co.uk/skin-condition/enlarged-pores-blackheads/' },
  { id: '10', title: "Double chin / Saggy neck", href: 'https://www.pulse-clinic.co.uk/skin-condition/double-chin-saggy-neck/' },
  { id: '11', title: "Male Hair Loss", href: 'https://www.pulse-clinic.co.uk/skin-condition/male-hair-loss/' },
  { id: '12', title: "Female Hair Loss", href: 'https://www.pulse-clinic.co.uk/skin-condition/hair-loss/' },
  { id: '13', title: "Jowl and sagging face", href: 'https://www.pulse-clinic.co.uk/skin-condition/jowl-and-sagging-face/' },
  { id: '14', title: "Stretch Marks", href: 'https://www.pulse-clinic.co.uk/skin-condition/stretch-marks/' },
  { id: '15', title: "Dry / Sensitive skin", href: 'https://www.pulse-clinic.co.uk/skin-condition/dry-sensitive-skin/' },
  { id: '16', title: "Aged Skin", href: 'https://www.pulse-clinic.co.uk/skin-condition/aged-skin/' },
  { id: '17', title: "Aged Hands", href: 'https://www.pulse-clinic.co.uk/skin-condition/aged-hands/' },
  { id: '18', title: "Hyperhidrosis", href: 'https://www.pulse-clinic.co.uk/skin-condition/hyperhidrosis/' },
  { id: '19', title: "PCOS/Hirsutism", href: 'https://www.pulse-clinic.co.uk/skin-condition/excess-hair/' },
  { id: '20', title: "Bingo wings", href: 'https://www.pulse-clinic.co.uk/skin-condition/bingo-wings/' },
  { id: '21', title: "Milia Spots", href: 'https://www.pulse-clinic.co.uk/skin-condition/milia-spots/' },
  { id: '22', title: "Seborrheic Keratosis", href: 'https://www.pulse-clinic.co.uk/skin-condition/seborrhoeic-warts/' },
  { id: '23', title: "Cherry Angioma (blood spots)", href: 'https://www.pulse-clinic.co.uk/skin-condition/cherry-angioma-blood-spots/' },
  { id: '24', title: "Sebaceous cysts", href: 'https://www.pulse-clinic.co.uk/skin-condition/sebaceous-cysts/' },
  { id: '25', title: "Dermatosa Papulosa Nigra", href: 'https://www.pulse-clinic.co.uk/skin-condition/dermatosa-papulosa-nigra/' },
  { id: '26', title: "Nail Fungus", href: 'https://www.pulse-clinic.co.uk/skin-condition/nail-fungus/' },
  { id: '27', title: "Common Warts", href: 'https://www.pulse-clinic.co.uk/skin-condition/comman-warts/' },
  { id: '28', title: "Filiform Warts", href: 'https://www.pulse-clinic.co.uk/skin-condition/filiform-warts/' },
  { id: '29', title: "Verrucas", href: 'https://www.pulse-clinic.co.uk/skin-condition/verrucae/' },
  { id: '30', title: "Genital Warts", href: 'https://www.pulse-clinic.co.uk/skin-condition/genital-warts/' },
];

// Product categories
export const productCategories: ProductCategory[] = [
  { id: 20, name: 'Phformula Skincare', value: 'phformula' },
  { id: 47, name: 'Obagi skincare', value: 'obagi' },
];

// Sample products for each category
export const phformulaProducts: Product[] = [
  {
    id: 1,
    name: 'Phformula Active C Serum',
    price: '£85.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/phformula-active-c-serum.jpg',
    category: 'phformula',
    description: 'Vitamin C serum for brightening and protection'
  },
  {
    id: 2,
    name: 'Phformula Retinol Complex',
    price: '£75.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/phformula-retinol.jpg',
    category: 'phformula',
    description: 'Anti-aging retinol treatment'
  },
  {
    id: 3,
    name: 'Phformula B5 Hydration',
    price: '£65.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/phformula-b5.jpg',
    category: 'phformula',
    description: 'Intensive hydration booster'
  },
  {
    id: 4,
    name: 'Phformula Eye Cream',
    price: '£70.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/phformula-eye-cream.jpg',
    category: 'phformula',
    description: 'Revitalizing eye treatment'
  },
];

export const obagiProducts: Product[] = [
  {
    id: 5,
    name: 'Obagi Nu-Derm Clear',
    price: '£65.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/obagi-clear.jpg',
    category: 'obagi',
    description: 'Skin bleaching and correcting gel'
  },
  {
    id: 6,
    name: 'Obagi Nu-Derm Exfoderm',
    price: '£55.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/obagi-exfoderm.jpg',
    category: 'obagi',
    description: 'Exfoliating lotion'
  },
  {
    id: 7,
    name: 'Obagi Vitamin C Serum',
    price: '£95.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/obagi-vitamin-c.jpg',
    category: 'obagi',
    description: 'Powerful antioxidant serum'
  },
  {
    id: 8,
    name: 'Obagi Hydrate Moisturizer',
    price: '£60.00',
    image: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/obagi-hydrate.jpg',
    category: 'obagi',
    description: 'Intensive moisturizing cream'
  },
];

// Banner content
export const bannerContent = {
  title: 'Products',
  description: 'Please book a skin consultation to discuss your skin concerns',
  backgroundImage: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/blog-detail.jpg',
  rightImage: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/banner-right-img-4.jpg'
};

// Social links
export const socialLinks = [
  { name: 'Facebook', href: 'https://www.pulse-clinic.co.uk/', icon: 'facebook-f' },
  { name: 'Twitter', href: 'https://www.pulse-clinic.co.uk/', icon: 'twitter' },
  { name: 'Instagram', href: 'https://www.pulse-clinic.co.uk/', icon: 'instagram' },
];

// As Seen In logos
export const asSeenInLogos = [
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/Aesthetics-Journal-Logo-1.png',
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/s1df.png',
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/zdf23.png',
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/Aesthetics-Journal-Logo-2.png',
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/images.png',
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/Forbes-Emblem-scaled.png',
  'https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/bespokeblackbook.webp',
];
