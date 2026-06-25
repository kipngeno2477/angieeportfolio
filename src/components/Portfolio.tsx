import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  FiMenu, FiX, FiArrowUp, FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter,
  FiArrowRight, FiCheckCircle, FiBriefcase, FiAward, FiTrendingUp, FiUsers
} from "react-icons/fi";
import {
  FaUsers, FaHandshake, FaChartLine, FaUserTie, FaBullseye, FaRocket, FaGlobeAfrica,
  FaStar, FaQuoteLeft, FaLightbulb, FaHeart, FaBalanceScale, FaGraduationCap,
  FaWhatsapp, FaInstagram
} from "react-icons/fa";
import heroImg from "@/assets/indownloader.app_picture_0136527001782146140.jpg";
import aboutImg from "@/assets/indownloader.app_picture_0719311001782133463.jpg";
import logoImg from "@/assets/Screenshot 2026-06-22 194535.png";
import achievementVideo from "@/assets/Angie achiev.mp4";
import blogRecruitment from "@/assets/blog-recruitment.jpg";
import blogCulture from "@/assets/blog-culture.jpg";
import blogEngagement from "@/assets/blog-engagement.jpg";
import blogLeadership from "@/assets/blog-leadership.jpg";
import impactHires from "@/assets/impact-hires.jpg";
import impactRetention from "@/assets/WhatsApp Image 2026-06-24 at 00.42.47.jpeg";
import impactAcademy from "@/assets/impact-academy.jpg";
import impactTransformation from "@/assets/ang1.jpeg";
import impactCulture from "@/assets/impact-culture.jpg";
import impactAfrica from "@/assets/impact-africa.jpg";
import summitGallery1 from "@/assets/ang3.jpeg";
import summitGallery2 from "@/assets/ang4.jpeg";
import summitGallery3 from "@/assets/ang5.jpeg";
import summitGallery4 from "@/assets/ang2.jpeg";
import summitGallery5 from "@/assets/ang6.jpeg";
import summitGallery6 from "@/assets/Screenshot 2026-06-24 195119.png";
import womenInGamingImg from "@/assets/Screenshot 2026-06-24 195052.png";
import megapariAfricaHRLogo from "@/assets/Screenshot 2026-06-24 195134.png";
import linebetLogo from "@/assets/Screenshot 2026-06-24 195629.png";
import eatcLogo from "@/assets/Screenshot 2026-06-24 195520.png";
import stellarbetsLogo from "@/assets/Screenshot 2026-06-24 195537.png";
import megapariLogo from "@/assets/indownloader.app_picture_0279074001782133450.jpg";
import womenEastAfricaImg from "@/assets/snappwhasapp.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const skills = [
  "Management", "Payroll Processing", "Recruiting", "Sales Recruitment",
  "Affiliate Management", "Performance Reviews", "HR Operations", "Team Leadership",
  "Employee Engagement", "Cross-functional Support", "Event Coordination", "Stakeholder Management",
];

const skillLevels: Record<string, number> = {
  "Management": 95, "Payroll Processing": 92, "Recruiting": 96,
  "Sales Recruitment": 90, "Affiliate Management": 93, "Performance Reviews": 91,
  "HR Operations": 89, "Team Leadership": 94, "Employee Engagement": 95,
  "Cross-functional Support": 88, "Event Coordination": 87, "Stakeholder Management": 90,
};

const experience = [
  { 
    role: "Affiliate Manager", 
    org: "Linebet", 
    logo: linebetLogo,
    duration: "2023 — Present", 
    type: "Full-time",
    points: [
      "Managed affiliate partnerships and marketing campaigns",
      "Developed strategic relationships with key partners across Africa",
      "Increased affiliate-driven revenue through targeted recruitment"
    ] 
  },
  { 
    role: "Human Resource Manager / Recruiter", 
    org: "StellarBets", 
    logo: stellarbetsLogo,
    duration: "2022 — 2023", 
    type: "Full-time",
    points: [
      "Led end-to-end recruitment for multiple departments",
      "Implemented HR policies and performance management systems",
      "Reduced time-to-hire by 35% through process optimization"
    ] 
  },
  { 
    role: "HR Recruiter / Team Leader / Affiliate Manager", 
    org: "Megapari", 
    logo: megapariAfricaHRLogo,
    duration: "2021 — Present", 
    type: "Full-time",
    points: [
      "Led recruitment initiatives for iGaming operations across East Africa",
      "Managed affiliate partnerships and onboarding processes",
      "Supervised cross-functional teams and coordinated HR operations"
    ] 
  },
  { 
    role: "Affiliate Management Specialist", 
    org: "NDA", 
    logo: logoImg,
    duration: "2020 — 2021", 
    type: "Contract",
    points: [
      "Specialized in affiliate network development and management",
      "Built relationships with key affiliate partners",
      "Monitored performance metrics and optimized campaigns"
    ] 
  },
  { 
    role: "HR Assistant & Marketing Lead", 
    org: "East African Tax Consulting", 
    logo: eatcLogo,
    duration: "2019 — 2020", 
    type: "Internship",
    points: [
      "Assisted with recruitment, onboarding, and employee relations",
      "Led marketing initiatives and client outreach campaigns",
      "Coordinated internal communications and HR documentation"
    ] 
  },
];

const services = [
  { icon: FaUsers, title: "HR Recruitment", desc: "Specialized recruitment in iGaming, sales, and account management roles." },
  { icon: FaHandshake, title: "Affiliate Management", desc: "Building and managing affiliate partnerships across diverse markets." },
  { icon: FaUserTie, title: "Payroll Processing", desc: "Efficient and accurate payroll management with attention to detail." },
  { icon: FaRocket, title: "Team Leadership", desc: "Leading cross-functional teams in fast-paced, dynamic environments." },
  { icon: FaChartLine, title: "Performance Management", desc: "Conducting comprehensive performance reviews and development planning." },
  { icon: FaBullseye, title: "HR Operations", desc: "Streamlining HR operations and cross-functional support systems." },
  { icon: FaGlobeAfrica, title: "Event Coordination", desc: "Planning and executing corporate events, golf tournaments, and industry summits." },
];

const achievements = [
  { icon: FiAward, img: impactHires, title: "Gaming Tech Summit Africa", desc: "Represented companies at GTSA and Megapari events in Nairobi, Kenya." },
  { icon: FiTrendingUp, img: impactRetention, title: "iGaming AFRIKA Summit", desc: "Attended as HR Manager/Recruiter for Megapari - connecting with industry professionals." },
  { icon: FaGraduationCap, img: impactAcademy, title: "SiGMA Africa Conference", desc: "Participated in premium networking events across multiple iGaming summits." },
  { icon: FiBriefcase, img: impactTransformation, title: "Megapari Africa HR", desc: "Led HR initiatives and voice chat sessions with HR Managers across Africa and Asia." },
  { icon: FaHeart, img: womenInGamingImg, title: "Industry Representation", desc: "Proven ability to represent companies at major iGaming industry events." },
  { icon: FaGlobeAfrica, img: impactAfrica, title: "Pan-African Networking", desc: "Built meaningful connections on the growth and future of gaming in Africa." },
];

const testimonials = [
  { name: "Industry Colleague", role: "iGaming Professional", text: "Angelica's expertise in HR and recruitment has been invaluable. Her professionalism and dedication stand out.", rating: 5 },
  { name: "Team Member", role: "Sales Department", text: "Working with Angelica has been exceptional. She brings clarity, efficiency, and genuine care to every project.", rating: 5 },
  { name: "Business Partner", role: "Affiliate Network", text: "Reliable, detail-oriented, and committed to delivering quality work. A true professional in every sense.", rating: 5 },
];

const brand = [
  { icon: FaLightbulb, title: "Professional Approach", desc: "Adaptable, detail-oriented, and committed to delivering quality work in every situation." },
  { icon: FaBullseye, title: "HR Vision", desc: "Building environments where talent thrives through effective recruitment, management, and support." },
  { icon: FaBalanceScale, title: "Core Values", desc: "Reliability, attention to detail, clear communication, and continuous professional development." },
  { icon: FaRocket, title: "Industry Focus", desc: "Specialized expertise in the iGaming industry with cross-functional organizational skills." },
];

const posts = [
  { tag: "iGaming", img: blogRecruitment, title: "Building Strong Recruitment Pipelines in the iGaming Industry", read: "6 min" },
  { tag: "HR Management", img: blogCulture, title: "Effective Payroll and Performance Review Systems", read: "5 min" },
  { tag: "Networking", img: blogEngagement, title: "Lessons from Gaming Tech Summit Africa and SiGMA", read: "7 min" },
  { tag: "Affiliate Management", img: blogLeadership, title: "Growing Affiliate Networks Across African Markets", read: "8 min" },
  { tag: "Industry Events", img: summitGallery5, title: "The Future of iGaming in Africa: Insights from Industry Summits", read: "9 min" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTest, setActiveTest] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const id = setInterval(() => setActiveTest(p => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  const nav = [
    ["Home", "hero"], ["About", "about"], ["Skills", "skills"], ["Experience", "experience"],
    ["Services", "services"], ["Insights", "insights"], ["Contact", "contact"],
  ] as const;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 flex items-center justify-center"
            exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-2 border-transparent border-t-blue-400 border-r-white"
            />
            <span className="absolute mt-32 text-white/90 text-sm tracking-[0.3em] font-semibold">ANGELICA HR PROFESSIONAL</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img src={logoImg} alt="Angelica Logo" className="h-12 w-auto object-contain" />
            <span className="font-display text-xl font-bold tracking-tight text-gray-900">Angelica HR</span>
          </button>
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-gray-700 font-medium hover:text-blue-600 transition relative group">
                {label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-300" />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo("contact")}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition">
              Get in Touch <FiArrowRight />
            </button>
            <button onClick={() => setMenuOpen(o => !o)} className="lg:hidden h-10 w-10 grid place-items-center text-gray-900" aria-label="Menu">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200">
              <div className="px-6 py-4 flex flex-col gap-3">
                {nav.map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="text-left py-2 font-medium text-gray-700 hover:text-blue-600">{label}</button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 overflow-hidden pt-20">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating shapes */}
        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-32 -left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <motion.div animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }} transition={{ duration: 11, repeat: Infinity }}
          className="absolute bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />

        <motion.div style={{ y: heroY }} className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="lg:col-span-7 text-white">
            <motion.div 
              variants={fadeUp}
              initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 border border-white/20"
              style={{ transformStyle: 'preserve-3d' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Human Resource Leadership
            </motion.div>
            <motion.h2 
              variants={fadeUp}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight"
              style={{ transformStyle: 'preserve-3d', fontFamily: "'Playfair Display', 'Georgia', serif" }}>
              I'm Angelica Amina
            </motion.h2>
            <motion.h1 
              variants={fadeUp}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl leading-[1.2] font-bold text-white"
              style={{ transformStyle: 'preserve-3d' }}>
              Human Resource Manager <span className="text-blue-400">.</span> iGaming <span className="text-blue-400">. </span> HR Recruiter <span className="text-blue-400"> .</span> Affiliate Manager <span className="text-blue-400">.</span> Team Leader <span className="text-blue-400">. </span> Sales and Account Manager
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              initial={{ opacity: 0, y: 30, z: -50 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-blue-100 text-base sm:text-lg max-w-xl leading-relaxed"
              style={{ transformStyle: 'preserve-3d' }}>
              Helping organizations build high-performing teams while creating opportunities for growth, innovation and leadership.
            </motion.p>
            <motion.div 
              variants={fadeUp}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4">
              <motion.button 
                onClick={() => scrollTo("services")}
                whileHover={{ scale: 1.05, z: 20 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-md bg-blue-600 text-white font-semibold inline-flex items-center gap-2 hover:bg-blue-700 shadow-lg hover:shadow-xl transition"
                style={{ transformStyle: 'preserve-3d' }}>
                Learn More <FiArrowRight />
              </motion.button>
              <motion.button 
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.05, z: 20 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-md bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition border border-white/20"
                style={{ transformStyle: 'preserve-3d' }}>
                Contact Us
              </motion.button>
            </motion.div>
            <motion.div 
              variants={fadeUp}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex gap-6 text-white/70">
              <a href="https://x.com/Angelica_amina" target="_blank" rel="noreferrer" className="hover:text-white transition"><FiTwitter size={20} /></a>
              <a href="https://www.linkedin.com/in/angelica-hr" target="_blank" rel="noreferrer" className="hover:text-white transition"><FiLinkedin size={20} /></a>
              <a href="mailto:Angelica@megapari.com" className="hover:text-white transition"><FiMail size={20} /></a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -25 }} 
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }} 
            className="lg:col-span-5 relative"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent z-10" />
              <img src={heroImg} alt="Angelica Amina, HR Manager"
                className="w-full h-full object-cover" loading="eager" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.1, z: 30 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl w-56"
              style={{ transformStyle: 'preserve-3d' }}>
              <div className="text-4xl font-bold text-blue-600"><Counter to={6} /></div>
              <div className="text-sm text-gray-700 mt-2 font-medium">Years in iGaming HR Excellence</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity }}
              whileHover={{ scale: 1.1, z: 30 }}
              className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-2xl text-white shadow-lg"
              style={{ transformStyle: 'preserve-3d' }}>
              <FaStar className="text-white mb-1" size={24} />
              <div className="text-xs font-semibold">Industry Expert</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="HR excellence in the iGaming industry with proven results">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60, rotateY: -25 }} 
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} 
            className="lg:col-span-5"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5, z: 30 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
              style={{ transformStyle: 'preserve-3d' }}>
              <img src={aboutImg} alt="Angelica Amina portrait" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 60 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} 
            className="lg:col-span-7 space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed">
              I'm Angelica Amina, a Human Resource Manager with 6 years of experience across the iGaming industry. I specialize in recruitment, payroll management, performance reviews, and operations coordination. My expertise spans talent acquisition for sales and account management roles, affiliate partnerships, and team leadership.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed">
              I've represented companies at major industry events including the iGaming AFRIKA Summit, Gaming Tech Summit Africa (GTSA), and SiGMA Africa. My work focuses on building strong recruitment pipelines, managing cross-functional teams, and supporting organizational growth in fast-paced environments. I'm reliable, detail-oriented, and committed to continuously developing my professional skill set.
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { n: 6, l: "Years Experience" },
                { n: 100, l: "Successful Recruits" },
                { n: 15, l: "Industry Events" },
                { n: 50, l: "Projects Completed" },
              ].map((s, idx) => (
                <motion.div 
                  key={s.l}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -25 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, z: 20 }}
                  className="bg-white rounded-xl p-5 text-center border border-gray-200 shadow-sm hover:shadow-md transition"
                  style={{ transformStyle: 'preserve-3d' }}>
                  <div className="text-3xl font-bold text-blue-600"><Counter to={s.n} /></div>
                  <div className="text-xs text-gray-600 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Video Banner - Compact Version */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400 mb-2">My Journey</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display leading-tight text-white">
              Achievements & Industry Impact
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="relative max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <video 
                className="w-full h-full object-cover"
                controls
                poster={heroImg}
                preload="metadata"
              >
                <source src={achievementVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Section */}
      <Section id="featured" eyebrow="Featured" title="Industry Recognition & Media Coverage">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500" />
            <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-secondary/50 transition-all duration-300 shadow-elegant">
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 aspect-square lg:aspect-auto">
                  <img src={aboutImg} alt="Angelica Amina Featured Article" 
                    className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-secondary mb-3">
                    <FiCheckCircle className="text-emerald-500" />
                    Featured Article
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display leading-snug mb-4 group-hover:text-secondary transition">
                    Angelica Amina on Recruitment in Africa's Gaming and Affiliate Marketing Industry
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Read my insights on recruitment strategies, talent acquisition, and the growing opportunities in Africa's iGaming sector. Featured on iGaming Afrika - the leading voice in African gaming industry.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://igamingafrika.com/angelica-amina-on-recruitment-in-africas-gaming-and-affiliate-marketing-industry/" 
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-emerald text-white font-medium hover:shadow-glow hover:-translate-y-0.5 transition">
                      Read Full Article <FiArrowRight />
                    </a>
                    <a href="https://igamingafrika.com" 
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border hover:border-secondary hover:bg-secondary/5 font-medium transition">
                      Visit iGaming Afrika
                    </a>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaGlobeAfrica className="text-secondary" />
                      <span>iGaming Afrika</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiTrendingUp className="text-secondary" />
                      <span>Industry Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional media mentions */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-3 gap-5">
            {[
              { icon: FiAward, title: "Industry Expert", desc: "Recognized voice in African iGaming recruitment" },
              { icon: FaUsers, title: "Thought Leader", desc: "Sharing insights on talent acquisition strategies" },
              { icon: FaGlobeAfrica, title: "Media Presence", desc: "Featured in leading gaming publications" },
            ].map((item) => (
              <div key={item.title} className="glass-light rounded-2xl p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-emerald text-white mb-3">
                  <item.icon size={20} />
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Capabilities" title="Professional skills built over years of practice" muted>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, idx) => (
            <motion.div key={s} 
              initial={{ opacity: 0, y: 40, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -5, z: 20 }}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition border border-gray-200"
              style={{ transformStyle: 'preserve-3d' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-900">{s}</span>
                <span className="text-xs text-blue-600 font-bold">{skillLevels[s]}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skillLevels[s]}%` }}
                  viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience */}
      <section id="experience" className="py-24 sm:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-14">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-3">Journey</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">Professional Experience & Companies</h2>
          </motion.div>
        {/* Companies Worked With - Circular Profiles */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-16">
          <h3 className="text-base font-display text-center mb-8 text-gray-300">
            Trusted by Leading iGaming & Consulting Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {experience.map((exp, i) => (
              <motion.div key={exp.org} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative">
                <div className="relative">
                  {/* Circular logo container */}
                  <div className="h-28 w-28 rounded-full bg-white dark:bg-slate-800 border-2 border-gray-700 group-hover:border-emerald-400 shadow-md group-hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center p-4 group-hover:scale-110">
                    <img src={exp.logo} alt={`${exp.org} logo`} 
                      className="h-full w-full object-contain opacity-85 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 lg:-translate-x-px" />
          {experience.map((e, i) => (
            <motion.div key={e.role + e.org} 
              initial={{ opacity: 0, x: i % 2 ? 50 : -50 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-20 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 mb-16 ${i % 2 ? "lg:[&>div]:col-start-2" : ""}`}>
              
              {/* Timeline dot - Simple icon, no logo */}
              <div className="absolute left-8 lg:left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center">
                    <FiBriefcase className="text-white" size={20} />
                  </div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-20 blur-md animate-pulse" />
                </div>
              </div>

              <div className={`group ${i % 2 ? "" : "lg:text-right"}`}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
                  
                  {/* Content - NO LOGO HEADER */}
                  <div className="p-8">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${i % 2 ? "" : "lg:flex-row-reverse lg:text-right"}`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold tracking-wider uppercase text-blue-600 ${i % 2 ? "" : "lg:justify-end lg:flex"}`}>
                            {e.duration}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
                            {e.type}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-1 text-gray-900 group-hover:text-blue-600 transition">
                          {e.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiBriefcase size={16} className="text-blue-600" />
                          <span className="font-medium">{e.org}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`space-y-3 ${i % 2 ? "" : "lg:items-end"}`}>
                      {e.points.map((p, idx) => (
                        <motion.li 
                          key={p}
                          initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className={`flex items-start gap-3 text-sm text-gray-700 ${i % 2 ? "" : "lg:flex-row-reverse lg:text-right"}`}>
                          <FiCheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} /> 
                          <span>{p}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Skills badge */}
                    <div className={`mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-2 ${i % 2 ? "" : "lg:justify-end"}`}>
                      {e.role.includes("Affiliate") && (
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                          Affiliate Management
                        </span>
                      )}
                      {e.role.includes("HR") && (
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
                          Human Resources
                        </span>
                      )}
                      {e.role.includes("Recruiter") && (
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                          Recruitment
                        </span>
                      )}
                      {e.role.includes("Team") && (
                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                          Leadership
                        </span>
                      )}
                      {e.role.includes("Marketing") && (
                        <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">
                          Marketing
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { icon: FiBriefcase, number: "5+", label: "Companies", color: "from-emerald-500 to-emerald-600" },
            { icon: FiAward, number: "6+", label: "Years Experience", color: "from-amber-500 to-amber-600" },
            { icon: FaUsers, number: "100+", label: "Professionals Hired", color: "from-blue-500 to-blue-600" },
            { icon: FiTrendingUp, number: "15+", label: "Industry Events", color: "from-purple-500 to-purple-600" },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-gray-800 hover:border-emerald-500/50 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4`}>
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-display font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section id="services" eyebrow="What I Do" title="Services that move organizations forward" muted>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <motion.div key={s.title} variants={fadeUp}
              className="group relative p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-blue-500 to-indigo-500" />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 grid place-items-center text-white mb-5 group-hover:scale-110 transition shadow-md">
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" eyebrow="Impact" title="Achievements & milestones">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map(a => (
            <motion.div key={a.title} variants={fadeUp} whileHover={{ y: -8, scale: 1.02 }}
              className="glass-light rounded-2xl overflow-hidden hover:shadow-elegant transition group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={a.img} alt={a.title} loading="lazy" width={800} height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-xl gradient-gold grid place-items-center text-white shadow-lg group-hover:rotate-6 transition">
                  <a.icon size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Gaming Summit Photo Gallery */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Photo Gallery</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight">
              Gaming Tech Summit Africa Highlights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Representing Megapari at major iGaming industry events across Africa
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: summitGallery1, title: "Golden Race", location: "Cape Town, South Africa" },
              { img: summitGallery2, title: "Igaming Afrika summit ", location: "Nairobi, Kenya" },
              { img: summitGallery6, title: "Aviator studio", location: "Nairobi, Kenya" },
              { img: megapariLogo, title: "Mrs. Angelicah HR", location: "Nairobi, Kenya" }, 
              { img: summitGallery3, title: "Voice Chat with HR managers", location: "Nairobi, Kenya" },
              { img: summitGallery1, title: "Women in Gaming Association East Africa", location: "Nairobi, Kenya" },
              { img: womenEastAfricaImg, title: "Technology support ", location: "Nairobi, Kenya" },
              { img: summitGallery5, title: "Megapari Africa HR", location: "Nairobi, Kenya" },
            ].map((photo, idx) => (
              <motion.div key={idx} variants={fadeUp} whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={photo.img} alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white">
                      <h3 className="font-display text-xl mb-2">{photo.title}</h3>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <FiMapPin size={16} />
                          <span>{photo.location}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <FiAward size={16} />
                          <span>iGaming Summit</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-emerald-500 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    GTSA 2025
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            {[
              { icon: FaGlobeAfrica, number: "8+", label: "Industry Events Attended" },
              { icon: FiUsers, number: "200+", label: "Professional Connections" },
              { icon: FiBriefcase, number: "5", label: "Major Summits Represented" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl gradient-emerald text-white grid place-items-center">
                  <stat.icon size={20} />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold text-gradient-emerald">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Section id="testimonials" eyebrow="Voices" title="What colleagues & clients say" muted>
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              <motion.div key={activeTest}
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 glass-light rounded-3xl p-8 sm:p-12 text-center">
                <FaQuoteLeft className="mx-auto text-secondary/40 text-3xl mb-4" />
                <p className="text-lg sm:text-xl font-display leading-relaxed">"{testimonials[activeTest].text}"</p>
                <div className="mt-6 flex justify-center gap-1 text-amber-400">
                  {Array.from({ length: testimonials[activeTest].rating }).map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="mt-4">
                  <div className="font-medium">{testimonials[activeTest].name}</div>
                  <div className="text-xs text-muted-foreground">{testimonials[activeTest].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTest(i)}
                className={`h-2 rounded-full transition-all ${activeTest === i ? "w-8 bg-secondary" : "w-2 bg-border"}`} />
            ))}
          </div>
        </div>
      </Section>

      {/* Personal Brand */}
      <Section id="brand" eyebrow="Personal Brand" title="The principles that guide my work">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brand.map(b => (
            <motion.div key={b.title} variants={fadeUp}
              className="p-7 rounded-3xl bg-card border border-border hover:shadow-elegant transition group">
              <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary grid place-items-center mb-5 group-hover:scale-110 transition">
                <b.icon size={22} />
              </div>
              <h3 className="font-display text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Insights */}
      <Section id="insights" eyebrow="Blog" title="Insights from the HR frontline" muted>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <motion.article key={p.title} variants={fadeUp} whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 glass text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">{p.tag}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg leading-snug group-hover:text-secondary transition">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.read} read</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in touch" title="Let's build something great together">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-4">
            {[
              { icon: FiMail, label: "Email", value: "Angelica@megapari.com", href: "mailto:Angelica@megapari.com" },
              { icon: FiPhone, label: "Phone", value: "0114 748 365", href: "tel:+254114748365" },
              { icon: FiLinkedin, label: "LinkedIn", value: "@angelica-hr", href: "https://www.linkedin.com/in/angelica-hr" },
              { icon: FiTwitter, label: "X (Twitter)", value: "@Angelica_amina", href: "https://x.com/Angelica_amina" },
              { icon: FiMapPin, label: "Based in", value: "Nairobi, Kenya · Available globally", href: "#" },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl glass-light hover:shadow-elegant hover:-translate-y-0.5 transition">
                <div className="h-12 w-12 rounded-xl gradient-emerald text-white grid place-items-center flex-shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Quick contact buttons */}
            <div className="pt-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Message me directly</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/254114748365" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:brightness-110 hover:-translate-y-0.5 transition shadow-md">
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
                <a href="https://instagram.com/Angelica_amina" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-sm hover:brightness-110 hover:-translate-y-0.5 transition shadow-md"
                  style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                  <FaInstagram size={18} /> Instagram
                </a>
                <a href="https://x.com/Angelica_amina" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 hover:-translate-y-0.5 transition shadow-md">
                  <FiTwitter size={18} /> Twitter / X
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-48 border border-border">
              <iframe
                title="Nairobi map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.6%2C-1.45%2C37.05%2C-1.18&layer=mapnik"
                className="w-full h-full" loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! I'll be in touch shortly."); }}
            className="bg-card rounded-3xl p-8 border border-border shadow-elegant space-y-5">
            <h3 className="font-display text-2xl">Send a message</h3>
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "company", label: "Company", type: "text" },
            ].map(f => (
              <div key={f.name}>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{f.label}</label>
                <input required={f.name !== "company"} type={f.type} name={f.name}
                  className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition" />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={5} name="message"
                className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition resize-none" />
            </div>
            <button type="submit"
              className="w-full py-3.5 rounded-full gradient-emerald text-white font-medium hover:shadow-glow transition inline-flex items-center justify-center gap-2">
              Send Message <FiArrowRight />
            </button>
          </motion.form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white/70 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="lg:col-span-2">
              <div className="font-bold text-2xl text-white">Angelica Amina<span className="text-blue-400">.</span></div>
              <p className="mt-3 max-w-md text-sm">HR Professional specializing in iGaming recruitment, affiliate management, and team leadership.</p>
              <div className="flex gap-4 mt-6">
                <a href="https://x.com/Angelica_amina" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition"><FiTwitter /></a>
                <a href="https://www.linkedin.com/in/angelica-hr" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition"><FiLinkedin /></a>
                <a href="mailto:Angelica@megapari.com" className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition"><FiMail /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {nav.map(([l, id]) => (
                  <li key={id}><button onClick={() => scrollTo(id)} className="hover:text-white transition">{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Reach out</h4>
              <ul className="space-y-2 text-sm">
                <li>Angelica@megapari.com</li>
                <li>+254 114 748 365</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs">
            <div>© {new Date().getFullYear()} Angelica Amina. All rights reserved.</div>
            <div className="font-medium">Delivering HR Excellence in the iGaming Industry.</div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 h-12 w-12 rounded-lg bg-blue-600 text-white grid place-items-center shadow-xl hover:shadow-2xl hover:bg-blue-700 z-40 transition">
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ id, eyebrow, title, children, muted }: {
  id: string; eyebrow: string; title: string; children: React.ReactNode; muted?: boolean;
}) {
  return (
    <section id={id} className={`py-24 sm:py-32 relative ${muted ? "bg-white" : "bg-gray-50"}`}>
      {/* Grid pattern background */}
      {muted && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: -15 }} 
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          className="max-w-2xl mb-14"
          style={{ transformStyle: 'preserve-3d' }}>
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-3">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
