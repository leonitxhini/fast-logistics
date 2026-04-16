import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Truck,
  Globe2,
  Container,
  ArrowRightLeft,
  Anchor,
  Ship,
  Boxes,
  ShieldCheck,
  Zap,
  Clock,
  MessageSquare,
  Award,
  CircleDollarSign,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ChevronUp,
  Star,
  ArrowRight,
  CheckCircle2,
  HeadphonesIcon,
  PackageCheck,
  Route,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import logoImg from "@assets/image_1776324844085.png";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    transport: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesazhi u dërgua!",
      description: "Faleminderit që na kontaktuat. Do t'ju kthejmë përgjigje brenda 24 orëve.",
    });
    setFormData({ name: "", phone: "", email: "", transport: "", message: "" });
  };

  const services = [
    { icon: Truck, title: "Transport tokësor", desc: "Transport i sigurt me kamionë në mbarë Europën dhe rajonin.", color: "from-green-500/20 to-transparent" },
    { icon: Globe2, title: "Transport ndërkombëtar", desc: "Lidhje e shpejtë e Kosovës me tregjet ndërkombëtare europiane.", color: "from-blue-500/20 to-transparent" },
    { icon: Container, title: "Transport me konteinerë", desc: "Zgjidhje efikase për ngarkesa të mëdha me konteinerë 20' dhe 40'.", color: "from-purple-500/20 to-transparent" },
    { icon: ArrowRightLeft, title: "Import / Export", desc: "Asistencë e plotë në procedurat doganore dhe zhdoganimin.", color: "from-orange-500/20 to-transparent" },
    { icon: Anchor, title: "Nga porti i Durrësit", desc: "Lidhje e drejtpërdrejtë logjistike me portin kryesor të Shqipërisë.", color: "from-cyan-500/20 to-transparent" },
    { icon: Ship, title: "Nga porti i Selanikut", desc: "Transport i sigurt i mallrave nga Greqia drejt Kosovës.", color: "from-teal-500/20 to-transparent" },
    { icon: Boxes, title: "Transport i plotë dhe parcial", desc: "Opsione FTL (Full Truckload) dhe LTL (Less than Truckload) sipas nevojës.", color: "from-green-500/20 to-transparent" },
  ];

  const benefits = [
    { icon: Zap, title: "Shpejtësi", desc: "Optimizim i rrugëve dhe koordinim i plotë për dërgesa në kohë rekord." },
    { icon: ShieldCheck, title: "Siguri", desc: "Mallrat tuaja janë të siguruara dhe të monitoruara gjatë gjithë rrugëtimit." },
    { icon: Award, title: "Besueshmëri", desc: "Fjala jonë është kontratë. Transparencë e plotë dhe asnjë vonesë e papritur." },
    { icon: HeadphonesIcon, title: "Komunikim i qartë", desc: "Suport 24/7 dhe informacion në kohë reale për dërgesën tuaj." },
    { icon: Clock, title: "Eksperiencë", desc: "Vite përvojë në tregun e logjistikës europiane dhe rajonale." },
    { icon: CircleDollarSign, title: "Çmime konkuruese", desc: "Raporti më i mirë cilësi-çmim. Pa kosto të fshehura, pa surpriza." },
  ];

  const testimonials = [
    {
      name: "Artan Krasniqi",
      company: "Krasniqi Import & Export",
      text: "Fast Logistics janë partnerët tanë të besuar prej dy vitesh. Çdo dërgesë mbërrin në kohë dhe pa probleme. Profesionalizëm i lartë!",
      rating: 5,
    },
    {
      name: "Besnik Gashi",
      company: "Gashi Textile SH.P.K",
      text: "Transportuam mallra të vlefshme nga porti i Selanikut deri në Prishtinë. Shërbim i shkëlqyer, komunikim i jashtëzakonshëm dhe çmime të arsyeshme.",
      rating: 5,
    },
    {
      name: "Liridona Berisha",
      company: "Berisha Trading",
      text: "Rekomandoj pa hezitim Fast Logistics. Na ndihmuan me import nga Europa dhe gjithçka kaloi pa asnjë problem. Do punojmë sërisht!",
      rating: 5,
    },
  ];

  const routes = [
    { from: "Prishtinë", to: "Tiranë / Durrës", time: "4–6 orë", icon: Anchor },
    { from: "Prishtinë", to: "Selanik / Greqi", time: "5–7 orë", icon: Ship },
    { from: "Prishtinë", to: "Europë Perëndimore", time: "2–4 ditë", icon: Globe2 },
    { from: "Prishtinë", to: "Turqi", time: "2–3 ditë", icon: Route },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">

      {/* ─── Navbar ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center p-1 flex-shrink-0">
              <img src={logoImg} alt="Fast Logistics" className="h-full w-full object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">FAST LOGISTICS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Shërbimet", id: "sherbimet" },
              { label: "Rreth Nesh", id: "rreth" },
              { label: "Pse Ne", id: "pse-ne" },
              { label: "Procesi", id: "procesi" },
              { label: "Kontakt", id: "kontakt" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("kontakt")}
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all"
            >
              Kërko Ofertë
            </Button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0f1a]/98 backdrop-blur-xl pt-24 px-6 flex flex-col gap-5 md:hidden"
          >
            {[
              { label: "Shërbimet", id: "sherbimet" },
              { label: "Rreth Nesh", id: "rreth" },
              { label: "Pse Ne", id: "pse-ne" },
              { label: "Procesi", id: "procesi" },
              { label: "Kontakt", id: "kontakt" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xl font-semibold text-left border-b border-white/10 pb-4 flex items-center justify-between"
              >
                {item.label} <ChevronRight size={18} className="text-primary" />
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+38345928820" className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-primary" /> +383 45 928 820
              </a>
              <a href="tel:+38345476609" className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-primary" /> +383 45 476 609
              </a>
            </div>
            <Button onClick={() => scrollToSection("kontakt")} className="w-full mt-2 bg-primary hover:bg-primary/90 text-lg py-6 rounded-xl">
              Kërko Ofertë
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Hero ─── */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10" />
          <img src="/hero-bg.png" alt="Logistics Truck" className="w-full h-full object-cover opacity-60" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
              <Zap size={14} />
              <span className="text-sm font-medium">Bazuar në Prishtinë • Transport Ndërkombëtar</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Transport i shpejtë<br />
              dhe i <span className="text-primary">sigurt</span><br />
              për biznesin tuaj
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
              Zgjidhje profesionale për transport kombëtar dhe ndërkombëtar. Ne lidhim Kosovën me portet e Europës me besueshmëri absolute.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("kontakt")}
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-all"
              >
                Na Kontaktoni <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("kontakt")}
                className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/5 flex items-center gap-2"
              >
                Kërko Ofertë <ChevronRight size={18} />
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {[
                { icon: Globe2, label: "Transport Ndërkombëtar" },
                { icon: Zap, label: "Dërgim i Shpejtë" },
                { icon: ShieldCheck, label: "Shërbim i Besueshëm" },
                { icon: PackageCheck, label: "Mallra të Siguruara" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="font-medium text-sm leading-tight">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
          <ChevronRight size={24} className="rotate-90 text-white" />
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-primary py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 5, suffix: "+", label: "Vite Eksperiencë" },
              { value: 500, suffix: "+", label: "Dërgesa të Suksesshme" },
              { value: 15, suffix: "+", label: "Shtete të Mbuluara" },
              { value: 2, suffix: "", label: "Porte Kryesore" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-black text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/80 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="sherbimet" className="py-24 bg-[#0d1320]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">Shërbimet Tona</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Çfarë ofrojmë?</h2>
            <p className="text-gray-400 text-lg">Gamë e plotë shërbimesh logjistike për çdo nevojë të biznesit tuaj.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative rounded-2xl p-6 border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="h-13 w-13 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 w-12 h-12">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="rreth" className="py-24 bg-[#0a0f1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Rreth Nesh
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
                Partneri juaj i besueshëm në logjistikë
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-6 leading-relaxed">
                FAST Logistics është kompani e specializuar në transport ndërkombëtar me zyrë në Prishtinë, Kosovë. Që nga fillimi, misioni ynë ka qenë të ofrojmë shërbime logjistike të nivelit evropian me çmime konkuruese.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-8 leading-relaxed">
                Specializohemi në transport tokësor, transport me konteinerë dhe logjistikën e porteve. Lidhim Kosovën me portin e Durrësit dhe Selanikut, duke siguruar rrugë të shpejta dhe të besueshme për mallrat tuaja.
              </motion.p>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Transport FTL dhe LTL",
                  "Procedura doganore",
                  "Monitorim i ngarkesës",
                  "Ekip me eksperiencë",
                  "Mbulim 15+ shtete",
                  "Çmime transparente",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeIn} className="mt-8">
                <Button onClick={() => scrollToSection("kontakt")} className="bg-primary hover:bg-primary/90 rounded-full px-7 text-white font-semibold">
                  Merr Ofertën Tënde <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <img src="/warehouse-bg.png" alt="Fast Logistics warehouse" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary rounded-2xl p-5 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <div className="text-3xl font-black text-white">5+</div>
                <div className="text-white/90 text-sm font-medium">Vite në Treg</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#0d1320] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-primary fill-primary" />)}
                </div>
                <div className="text-sm font-bold">Cilësi e Lartë</div>
                <div className="text-gray-400 text-xs">500+ dërgesa</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section id="pse-ne" className="py-24 bg-[#0d1320]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">Avantazhet Tona</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pse të zgjidhni ne?</h2>
            <p className="text-gray-400 text-lg">Besimi nuk dhurohet — ai fitohet me çdo dërgesë. Ja pse qindra biznese na besojnë mallrat e tyre.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group flex gap-5 p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/25 transition-all duration-300"
              >
                <div className="mt-1 h-12 w-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{b.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Routes / Coverage ─── */}
      <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">Destinacionet</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Rrugët që mbulojmë</h2>
            <p className="text-gray-400 text-lg">Nga Prishtina, lidhemi me destinacionet kryesore të rajonit dhe Europës.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {routes.map((route, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-300 text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <route.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3 text-sm text-gray-400">
                  <span className="font-semibold text-white">{route.from}</span>
                  <ArrowRight size={14} className="text-primary" />
                  <span className="font-semibold text-white text-right">{route.to}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  <Clock size={11} />
                  {route.time}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-10 text-center"
          >
            <p className="text-gray-500 text-sm">
              Nuk e gjeni destinacionin tuaj? <button onClick={() => scrollToSection("kontakt")} className="text-primary font-semibold hover:underline">Na kontaktoni</button> dhe do të gjejmë zgjidhjen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section id="procesi" className="py-24 bg-[#0d1320]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">Si Funksionon</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Procesi i thjeshtë</h2>
            <p className="text-gray-400 text-lg">Transparent dhe efikas — nga kontakti i parë deri te dërgesa.</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Na kontaktoni", desc: "Dërgoni kërkesën tuaj përmes formularit ose telefonit.", icon: Phone },
                { step: "02", title: "Na tregoni detajet", desc: "Destinacioni, lloji dhe sasia e mallit — gjithçka.", icon: MessageSquare },
                { step: "03", title: "Ne organizojmë", desc: "Marrim përsipër gjithçka — dokumentet, rrugën, transportin.", icon: Truck },
                { step: "04", title: "Dërgesa arrin", desc: "Mallrat mbërrijnë të sigurta dhe në kohë në destinacion.", icon: PackageCheck },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-full bg-[#0a0f1a] border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.25)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">Klientët Tanë</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Çfarë thonë klientët</h2>
            <p className="text-gray-400 text-lg">Reputacioni ynë ndërtohet çdo ditë me çdo dërgesë të suksesshme.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-primary/20 p-7 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0f1a]/85 z-10" />
          <img src="/port-bg.png" alt="Port logistics" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto rounded-3xl border border-primary/25 bg-white/[0.04] backdrop-blur-sm p-10 md:p-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 text-sm">
              <Zap size={14} />
              <span>Gati të nisni?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">Gati për të nisur dërgesën tuaj?</h2>
            <p className="text-xl text-gray-300 mb-10">Na besoni mallrat tuaja. Ne do t'i dërgojmë në mënyrë të sigurt dhe në kohë — çdo herë.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("kontakt")}
                className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 py-6 text-lg shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all"
              >
                Na Kontaktoni Sot
              </Button>
              <a
                href="tel:+38345928820"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full px-10 py-4 text-lg border border-white/20 transition-all"
              >
                <Phone size={18} /> +383 45 928 820
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="kontakt" className="py-24 bg-[#0d1320]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">Kontakt</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Na Kontaktoni</h2>
            <p className="text-gray-400 text-lg">Jemi këtu për t'ju ndihmuar. Dërgoni kërkesën tuaj ose na thirrni direkt.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Info column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {[
                {
                  icon: Phone,
                  label: "Telefoni / Viber / WhatsApp",
                  content: (
                    <div className="flex flex-col gap-1">
                      <a href="tel:+38345928820" className="text-base font-semibold hover:text-primary transition-colors">+383 45 928 820</a>
                      <a href="tel:+38345476609" className="text-base font-semibold hover:text-primary transition-colors">+383 45 476 609</a>
                    </div>
                  ),
                },
                {
                  icon: Mail,
                  label: "Email",
                  content: <a href="mailto:operations@fast-logisticsks.com" className="text-base font-semibold hover:text-primary transition-colors break-all">operations@fast-logisticsks.com</a>,
                },
                {
                  icon: MapPin,
                  label: "Lokacioni",
                  content: <p className="text-base font-semibold">Prishtinë, Kosovë</p>,
                },
                {
                  icon: Clock,
                  label: "Orari i Punës",
                  content: <p className="text-base font-semibold">E Hënë – E Shtunë: 08:00 – 20:00</p>,
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.02]">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-1">{item.label}</div>
                    {item.content}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp direct link */}
              <a
                href="https://wa.me/38345928820"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/25 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Na shkruani në WhatsApp
              </a>
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-xl font-bold mb-6">Dërgo një kërkesë</h3>
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Emri / Kompania *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Shkruani emrin"
                      className="bg-[#0a0f1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Telefoni *</label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+383 ..."
                      className="bg-[#0a0f1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="bg-[#0a0f1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Lloji i Transportit *</label>
                  <Select required onValueChange={(v) => setFormData({ ...formData, transport: v })}>
                    <SelectTrigger className="bg-[#0a0f1a] border-white/10 text-white focus:ring-primary">
                      <SelectValue placeholder="Zgjidhni shërbimin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d1320] border-white/10 text-white">
                      <SelectItem value="tokesor">Transport tokësor</SelectItem>
                      <SelectItem value="nderkombetar">Transport ndërkombëtar</SelectItem>
                      <SelectItem value="konteinere">Transport me konteinerë</SelectItem>
                      <SelectItem value="import-export">Import / Export</SelectItem>
                      <SelectItem value="port-durres">Nga porti i Durrësit</SelectItem>
                      <SelectItem value="port-selanik">Nga porti i Selanikut</SelectItem>
                      <SelectItem value="ftl-ltl">FTL / LTL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Detajet e Kërkesës *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Përshkruani ngarkesën, destinacionin, datën e dëshiruar..."
                    className="min-h-[130px] bg-[#0a0f1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-base rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all"
                >
                  Dërgo Kërkesën <ArrowRight size={18} className="ml-2" />
                </Button>
                <p className="text-center text-xs text-gray-600">Kthejmë përgjigje brenda 24 orëve</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#05080f] pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center p-1">
                  <img src={logoImg} alt="Fast Logistics" className="h-full w-full object-contain" />
                </div>
                <span className="font-bold text-lg">FAST LOGISTICS</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Transport ndërkombëtar dhe logjistikë profesionale, bazuar në Prishtinë, Kosovë.
              </p>
              <a
                href="https://wa.me/38345928820"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/25 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Shërbimet</h4>
              <ul className="flex flex-col gap-3">
                {["Transport tokësor", "Transport ndërkombëtar", "Transport me konteinerë", "Import / Export", "Nga porti i Durrësit", "Nga porti i Selanikut"].map((s) => (
                  <li key={s}>
                    <button onClick={() => scrollToSection("sherbimet")} className="text-gray-500 hover:text-white transition-colors text-sm text-left">{s}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Lidhjet e Shpejta</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Rreth Nesh", id: "rreth" },
                  { label: "Pse Ne", id: "pse-ne" },
                  { label: "Si Funksionon", id: "procesi" },
                  { label: "Kontakt", id: "kontakt" },
                  { label: "Kërko Ofertë", id: "kontakt" },
                ].map((link) => (
                  <li key={link.label}>
                    <button onClick={() => scrollToSection(link.id)} className="text-gray-500 hover:text-white transition-colors text-sm text-left">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Kontakt</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+38345928820" className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                  <Phone size={15} className="text-primary mt-0.5 flex-shrink-0" />
                  +383 45 928 820
                </a>
                <a href="tel:+38345476609" className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                  <Phone size={15} className="text-primary mt-0.5 flex-shrink-0" />
                  +383 45 476 609
                </a>
                <a href="mailto:operations@fast-logisticsks.com" className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm break-all">
                  <Mail size={15} className="text-primary mt-0.5 flex-shrink-0" />
                  operations@fast-logisticsks.com
                </a>
                <div className="flex items-start gap-3 text-gray-500 text-sm">
                  <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
                  Prishtinë, Kosovë
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Fast Logistics L.L.C. Të gjitha të drejtat e rezervuara.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors text-sm">Kushtet e Përdorimit</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors text-sm">Privatësia</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Floating WhatsApp Button ─── */}
      <a
        href="https://wa.me/38345928820"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110"
        title="Na shkruani në WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ─── Scroll to Top ─── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 h-11 w-11 rounded-full bg-[#0d1320] border border-white/20 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-lg"
            title="Kthehu lart"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
