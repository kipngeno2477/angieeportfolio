import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  FiMenu, FiX, FiArrowUp, FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter,
  FiArrowRight, FiCheckCircle, FiBriefcase, FiAward, FiTrendingUp, FiUsers
} from "react-icons/fi";
import {
  FaUsers, FaHandshake, FaChartLine, FaUserTie, FaBullseye, FaRocket, FaGlobeAfrica,
  FaStar, FaQuoteLeft, FaLightbulb, FaHeart, FaBalanceScale, FaGraduationCap
} from "react-icons/fa";
import heroAsset from "@/assets/angelica-hero.jpg.asset.json";
import aboutAsset from "@/assets/angelica-about.jpg.asset.json";
import blogRecruitment from "@/assets/blog-recruitment.jpg";
import blogCulture from "@/assets/blog-culture.jpg";
import blogEngagement from "@/assets/blog-engagement.jpg";
import blogLeadership from "@/assets/blog-leadership.jpg";
import blogFuture from "@/assets/blog-future.jpg";
import impactHires from "@/assets/impact-hires.jpg";
import impactRetention from "@/assets/impact-retention.jpg";
import impactAcademy from "@/assets/impact-academy.jpg";
import impactTransformation from "@/assets/impact-transformation.jpg";
import impactCulture from "@/assets/impact-culture.jpg";
import impactAfrica from "@/assets/impact-africa.jpg";

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
  "Recruitment Strategy", "Employee Relations", "HR Analytics", "Workforce Planning",
  "Performance Management", "Conflict Resolution", "Organizational Development",
  "Leadership Development", "Employee Engagement", "HR Compliance",
  "Training & Development", "Talent Acquisition",
];

const skillLevels: Record<string, number> = {
  "Recruitment Strategy": 95, "Employee Relations": 92, "HR Analytics": 88,
  "Workforce Planning": 90, "Performance Management": 93, "Conflict Resolution": 91,
  "Organizational Development": 89, "Leadership Development": 94, "Employee Engagement": 96,
  "HR Compliance": 87, "Training & Development": 90, "Talent Acquisition": 95,
};

const experience = [
  { role: "Human Resource Manager", org: "Strategic People Group", duration: "2022 — Present", points: ["Led HR strategy across 4 business units", "Reduced turnover by 32% in 18 months", "Built leadership development pipeline"] },
  { role: "Affiliate Manager", org: "Pan-African Partnerships", duration: "2021 — Present", points: ["Onboarded 120+ affiliates across Africa", "Grew partner-driven revenue 4×", "Built SEO, PPC & tipster networks"] },
  { role: "Payroll Specialist", org: "Meridian Finance Co.", duration: "2020 — 2022", points: ["Managed payroll for 800+ employees", "Implemented automated payroll workflow", "100% compliance audit record"] },
  { role: "Talent Acquisition Lead", org: "Horizon Talent Solutions", duration: "2019 — 2021", points: ["Hired 350+ professionals in 24 months", "Reduced time-to-hire by 40%", "Built employer brand from scratch"] },
  { role: "Recruitment Specialist", org: "BlueRiver Consulting", duration: "2017 — 2019", points: ["Specialized in tech & finance roles", "Maintained 92% offer acceptance rate"] },
  { role: "HR Consultant", org: "Independent Practice", duration: "2016 — 2017", points: ["Advised SMEs on HR systems & policy", "Designed onboarding frameworks"] },
];

const services = [
  { icon: FaUsers, title: "Talent Acquisition", desc: "Helping organizations attract and hire top talent across industries." },
  { icon: FaHandshake, title: "Employee Relations", desc: "Building positive, productive, and respectful workplace environments." },
  { icon: FaUserTie, title: "HR Consulting", desc: "Providing strategic HR solutions tailored to your business goals." },
  { icon: FaRocket, title: "Leadership Development", desc: "Developing future organizational leaders through structured programs." },
  { icon: FaChartLine, title: "Performance Management", desc: "Enhancing employee productivity, growth, and accountability." },
  { icon: FaBullseye, title: "Workforce Planning", desc: "Strategic planning for future staffing and capability needs." },
  { icon: FaGlobeAfrica, title: "Affiliate Management", desc: "Recruiting affiliates across Africa — tipsters, SEO, PPC partners." },
];

const achievements = [
  { icon: FiAward, img: impactHires, title: "350+ Successful Hires", desc: "Across tech, finance, and operations roles." },
  { icon: FiTrendingUp, img: impactRetention, title: "32% Retention Lift", desc: "Engineered through engagement and culture programs." },
  { icon: FaGraduationCap, img: impactAcademy, title: "Leadership Academy", desc: "Designed and launched a 12-month leadership program." },
  { icon: FiBriefcase, img: impactTransformation, title: "HR Transformation", desc: "Modernized HR systems for 6 mid-sized organizations." },
  { icon: FaHeart, img: impactCulture, title: "Culture Overhaul", desc: "Raised employee NPS from 14 to 62 in one year." },
  { icon: FaGlobeAfrica, img: impactAfrica, title: "Pan-African Network", desc: "120+ affiliates onboarded across 14 countries." },
];

const testimonials = [
  { name: "James Mwangi", role: "CEO, Horizon Talent", text: "Angelica brings rare clarity to HR. She turned our hiring chaos into a precise, repeatable engine.", rating: 5 },
  { name: "Priya Otieno", role: "COO, Meridian Finance", text: "Her payroll and people work was flawless. Compliance, empathy and speed in one package.", rating: 5 },
  { name: "Daniel Achieng", role: "Founder, BlueRiver", text: "The best HR partner we've worked with. Strategic, warm, and deeply professional.", rating: 5 },
];

const brand = [
  { icon: FaLightbulb, title: "Leadership Philosophy", desc: "Lead with clarity, listen with intent, and elevate the people around you every single day." },
  { icon: FaBullseye, title: "HR Vision", desc: "Workplaces where talent thrives, performance is fair, and people are seen as humans first." },
  { icon: FaBalanceScale, title: "Core Values", desc: "Integrity, empathy, excellence, and an unwavering commitment to fairness." },
  { icon: FaRocket, title: "Professional Mission", desc: "Build stronger organizations by designing systems that put people at the center." },
];

const posts = [
  { tag: "Recruitment", img: blogRecruitment, title: "The 2026 Recruitment Trends Every Leader Must Know", read: "6 min" },
  { tag: "Culture", img: blogCulture, title: "Workplace Culture: The Invisible Engine of Performance", read: "5 min" },
  { tag: "Engagement", img: blogEngagement, title: "Beyond Perks: Designing Real Employee Engagement", read: "7 min" },
  { tag: "Leadership", img: blogLeadership, title: "How to Develop Leaders Who Develop Others", read: "8 min" },
  { tag: "Future of Work", img: blogFuture, title: "Hybrid, Async, AI: The New Operating System of Work", read: "9 min" },
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
    ["About", "about"], ["Skills", "skills"], ["Experience", "experience"],
    ["Services", "services"], ["Insights", "insights"], ["Contact", "contact"],
  ] as const;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] gradient-hero flex items-center justify-center"
            exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-2 border-transparent border-t-emerald-400 border-r-amber-400"
            />
            <span className="absolute mt-32 text-white/70 text-sm tracking-[0.3em]">ANGELICA AMINA</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 glass-light"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-xl tracking-tight">
            Angelica<span className="text-gradient-emerald">.</span>
          </button>
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-muted-foreground hover:text-foreground transition relative group">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-secondary transition-all" />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(d => !d)} aria-label="Toggle theme"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full glass-light hover:scale-105 transition">
              {dark ? "☀" : "☾"}
            </button>
            <button onClick={() => scrollTo("contact")}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-emerald text-white text-sm font-medium hover:shadow-glow transition">
              Hire Me <FiArrowRight />
            </button>
            <button onClick={() => setMenuOpen(o => !o)} className="lg:hidden h-10 w-10 grid place-items-center" aria-label="Menu">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
              className="lg:hidden overflow-hidden glass-light border-t border-border">
              <div className="px-6 py-4 flex flex-col gap-3">
                {nav.map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="text-left py-2">{label}</button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen gradient-hero overflow-hidden pt-20">
        {/* Floating shapes */}
        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-32 -left-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <motion.div animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }} transition={{ duration: 11, repeat: Infinity }}
          className="absolute bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-amber-500/15 blur-3xl" />
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl" />

        <motion.div style={{ y: heroY }} className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="lg:col-span-7 text-white">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Human Resource Leadership
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-medium">
              Angelica <span className="text-gradient-gold">Amina</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-white/70 text-base sm:text-lg max-w-xl">
              Human Resource Manager · Affiliate Manager · Payroll Specialist · Recruiter
            </motion.p>
            <motion.p variants={fadeUp} className="mt-6 text-xl sm:text-2xl font-display text-white/90 max-w-2xl leading-snug">
              Empowering organizations through strategic human resource management and people-centered leadership.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => scrollTo("services")}
                className="px-7 py-3.5 rounded-full gradient-emerald text-white font-medium inline-flex items-center gap-2 hover:shadow-glow hover:-translate-y-0.5 transition">
                View Portfolio <FiArrowRight />
              </button>
              <button onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 rounded-full glass text-white font-medium hover:bg-white/15 transition">
                Contact Me
              </button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex gap-6 text-white/60">
              <a href="https://x.com/Angelica_amina" target="_blank" rel="noreferrer" className="hover:text-white transition"><FiTwitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><FiLinkedin size={20} /></a>
              <a href="mailto:Angelicaombacho@gmail.com" className="hover:text-white transition"><FiMail size={20} /></a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <div className="absolute inset-0 gradient-emerald opacity-20 mix-blend-overlay z-10" />
              <img src={heroAsset.url} alt="Angelica Amina, HR Manager"
                className="w-full h-full object-cover" loading="eager" />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-light p-5 rounded-2xl shadow-elegant w-56">
              <div className="text-3xl font-display text-gradient-emerald font-semibold"><Counter to={8} /></div>
              <div className="text-xs text-muted-foreground mt-1">Years building world-class HR</div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl text-white">
              <FaStar className="text-amber-400 mb-1" />
              <div className="text-xs">Trusted by 30+ orgs</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="People-first HR, delivered with strategic precision">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img src={aboutAsset.url} alt="Angelica Amina portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-7 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Angelica Amina, a Human Resource Manager who believes that great companies are built on great people. For nearly a decade I've led recruitment strategies, designed engagement programs, and shaped organizational cultures that perform — and feel human.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans talent acquisition, payroll, affiliate partnerships across Africa, leadership development, and end-to-end HR transformation. I partner with founders, executives and teams who want HR done with rigor, warmth, and clarity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { n: 8, l: "Years Experience" },
                { n: 350, l: "Employees Recruited" },
                { n: 30, l: "Organizations Served" },
                { n: 60, l: "Projects Completed" },
              ].map(s => (
                <div key={s.l} className="glass-light rounded-2xl p-5 text-center">
                  <div className="text-3xl font-display font-semibold text-gradient-emerald"><Counter to={s.n} /></div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Capabilities" title="Professional skills built over years of practice" muted>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(s => (
            <motion.div key={s} variants={fadeUp}
              className="glass-light p-6 rounded-2xl hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">{s}</span>
                <span className="text-xs text-secondary font-semibold">{skillLevels[s]}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skillLevels[s]}%` }}
                  viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full gradient-emerald" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Journey" title="Experience timeline">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />
          {experience.map((e, i) => (
            <motion.div key={e.role} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 mb-12 ${i % 2 ? "lg:[&>div]:col-start-2" : ""}`}>
              <div className="absolute left-4 lg:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full gradient-emerald ring-4 ring-background" />
              <div className={`glass-light rounded-2xl p-6 hover:shadow-elegant transition ${i % 2 ? "" : "lg:text-right"}`}>
                <div className="text-xs text-secondary font-semibold tracking-wider uppercase">{e.duration}</div>
                <h3 className="text-xl font-display mt-1">{e.role}</h3>
                <div className="text-sm text-muted-foreground">{e.org}</div>
                <ul className={`mt-4 space-y-2 ${i % 2 ? "" : "lg:items-end"}`}>
                  {e.points.map(p => (
                    <li key={p} className={`flex items-start gap-2 text-sm text-muted-foreground ${i % 2 ? "" : "lg:flex-row-reverse lg:text-right"}`}>
                      <FiCheckCircle className="text-secondary mt-0.5 flex-shrink-0" /> <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="What I Do" title="Services that move organizations forward" muted>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <motion.div key={s.title} variants={fadeUp}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-secondary/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-emerald" style={{ mixBlendMode: "multiply" }} />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl gradient-emerald grid place-items-center text-white mb-5 group-hover:scale-110 transition">
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
              { icon: FiMail, label: "Email", value: "Angelicaombacho@gmail.com", href: "mailto:Angelicaombacho@gmail.com" },
              { icon: FiPhone, label: "Phone", value: "0799 902 607", href: "tel:+254799902607" },
              { icon: FiLinkedin, label: "LinkedIn", value: "@Angelica Amina", href: "#" },
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
      <footer className="gradient-hero text-white/70 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="lg:col-span-2">
              <div className="font-display text-2xl text-white">Angelica Amina<span className="text-gradient-emerald">.</span></div>
              <p className="mt-3 max-w-md text-sm">Building stronger organizations through people excellence.</p>
              <div className="flex gap-4 mt-6">
                <a href="https://x.com/Angelica_amina" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/15"><FiTwitter /></a>
                <a href="#" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/15"><FiLinkedin /></a>
                <a href="mailto:Angelicaombacho@gmail.com" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/15"><FiMail /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {nav.map(([l, id]) => (
                  <li key={id}><button onClick={() => scrollTo(id)} className="hover:text-white transition">{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Reach out</h4>
              <ul className="space-y-2 text-sm">
                <li>Angelicaombacho@gmail.com</li>
                <li>+254 799 902 607</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs">
            <div>© {new Date().getFullYear()} Angelica Amina. All rights reserved.</div>
            <div className="italic">Building Stronger Organizations Through People Excellence.</div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full gradient-emerald text-white grid place-items-center shadow-elegant hover:shadow-glow z-40">
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
    <section id={id} className={`py-24 sm:py-32 ${muted ? "bg-muted/40" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
