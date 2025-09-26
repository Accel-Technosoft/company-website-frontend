import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Nakamya",
    position: "CEO",
    company: "Kampala Digital Solutions",
    content: "TechSolutions Uganda transformed our business operations completely. Their custom software development team delivered exactly what we needed - a comprehensive inventory management system that has increased our efficiency by 40%. The team was professional, responsive, and delivered on time.",
    rating: 5,
    image: "/images/testimonials/sarah-nakamya.jpg"
  },
  {
    id: "2",
    name: "James Okello",
    position: "IT Director",
    company: "East Africa Bank",
    content: "We've been working with TechSolutions Uganda for our cybersecurity needs for over two years. Their managed security services have kept our systems secure and compliant. The 24/7 monitoring and rapid incident response have been invaluable for our operations.",
    rating: 5,
    image: "/images/testimonials/james-okello.jpg"
  },
  {
    id: "3",
    name: "Grace Namutebi",
    position: "Operations Manager",
    company: "Uganda Coffee Exporters",
    content: "The cloud migration project led by TechSolutions Uganda was seamless. They moved our entire infrastructure to the cloud with zero downtime. Our operational costs have reduced by 30% and our team can now work remotely without any issues.",
    rating: 5,
    image: "/images/testimonials/grace-namutebi.jpg"
  },
  {
    id: "4",
    name: "David Ssemakula",
    position: "Founder",
    company: "Kampala Tech Hub",
    content: "TechSolutions Uganda built our e-learning platform from scratch. The platform handles over 5,000 concurrent users and has been running smoothly for 18 months. Their expertise in scalable web applications is outstanding.",
    rating: 5,
    image: "/images/testimonials/david-ssemakula.jpg"
  },
  {
    id: "5",
    name: "Patricia Nakato",
    position: "CTO",
    company: "HealthCare Plus Uganda",
    content: "The mobile app development team at TechSolutions Uganda created our patient management app that has revolutionized how we serve our patients. The app is user-friendly, secure, and integrates perfectly with our existing systems.",
    rating: 5,
    image: "/images/testimonials/patricia-nakato.jpg"
  },
  {
    id: "6",
    name: "Robert Kiggundu",
    position: "Managing Director",
    company: "Nile Logistics",
    content: "TechSolutions Uganda's data analytics solution has given us insights we never had before. We can now predict demand patterns, optimize our routes, and reduce operational costs. The ROI has been exceptional.",
    rating: 5,
    image: "/images/testimonials/robert-kiggundu.jpg"
  },
  {
    id: "7",
    name: "Mary Nakirya",
    position: "Head of IT",
    company: "Makerere University",
    content: "The IT infrastructure upgrade project was handled professionally. TechSolutions Uganda modernized our entire network infrastructure, improving connectivity across all campuses. Student and staff satisfaction has increased significantly.",
    rating: 5,
    image: "/images/testimonials/mary-nakirya.jpg"
  },
  {
    id: "8",
    name: "Andrew Mukasa",
    position: "General Manager",
    company: "Kampala Shopping Mall",
    content: "Our POS system and inventory management solution from TechSolutions Uganda has streamlined our retail operations. Real-time inventory tracking and automated reordering have reduced stockouts by 80%.",
    rating: 5,
    image: "/images/testimonials/andrew-mukasa.jpg"
  },
  {
    id: "9",
    name: "Jennifer Namugga",
    position: "Finance Director",
    company: "Uganda Microfinance",
    content: "The custom ERP system developed by TechSolutions Uganda has integrated all our business processes. Financial reporting that used to take days now takes hours. The system is robust, secure, and user-friendly.",
    rating: 5,
    image: "/images/testimonials/jennifer-namugga.jpg"
  },
  {
    id: "10",
    name: "Peter Ssali",
    position: "CEO",
    company: "Kampala Water Works",
    content: "TechSolutions Uganda's IoT solution for water management has revolutionized our operations. We can now monitor water quality and distribution in real-time across the entire city. Customer complaints have reduced by 60%.",
    rating: 4,
    image: "/images/testimonials/peter-ssali.jpg"
  }
];

export const featuredTestimonials = testimonials.slice(0, 6);