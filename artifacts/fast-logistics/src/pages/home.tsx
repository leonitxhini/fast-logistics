import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import logoImg from "@assets/image_1776324844085.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesazhi u dërgua",
      description: "Faleminderit që na kontaktuat. Do t'ju kthejmë përgjigje së shpejti.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center p-1 flex-shrink-0">
              <img src={logoImg} alt="Fast Logistics L.L.C" className="h-full w-full object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">FAST LOGISTICS</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('sherbimet')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Shërbimet</button>
            <button onClick={() => scrollToSection('pse-ne')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pse Ne</button>
            <button onClick={() => scrollToSection('procesi')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Procesi</button>
            <Button onClick={() => scrollToSection('kontakt')} className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all">
              Kërko Ofertë
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <button onClick={() => scrollToSection('sherbimet')} className="text-xl font-medium text-left border-b border-white/10 pb-4">Shërbimet</button>
            <button onClick={() => scrollToSection('pse-ne')} className="text-xl font-medium text-left border-b border-white/10 pb-4">Pse Ne</button>
            <button onClick={() => scrollToSection('procesi')} className="text-xl font-medium text-left border-b border-white/10 pb-4">Procesi</button>
            <button onClick={() => scrollToSection('kontakt')} className="text-xl font-medium text-left border-b border-white/10 pb-4">Kontakt</button>
            <Button onClick={() => scrollToSection('kontakt')} className="w-full mt-4 bg-primary hover:bg-primary/90 text-lg py-6 rounded-xl">
              Kërko Ofertë
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10" />
          <img src="/hero-bg.png" alt="Logistics Truck" className="w-full h-full object-cover opacity-60" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
              <Zap size={16} />
              <span className="text-sm font-medium">Bazuar në Prishtinë</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Transport i shpejtë dhe i <span className="text-primary">sigurt</span> për biznesin tuaj
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
              Zgjidhje profesionale për transport kombëtar dhe ndërkombëtar. Ne lidhim Kosovën me portet e Europës me besueshmëri absolute.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('kontakt')} className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all flex items-center gap-2">
                Kërko Ofertë <ArrowRightLeft size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('sherbimet')} className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/5 flex items-center gap-2">
                Shërbimet Tona <ChevronRight size={18} />
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <Globe2 className="text-primary h-8 w-8" />
                <span className="font-medium text-sm md:text-base">Transport Ndërkombëtar</span>
              </div>
              <div className="flex flex-col gap-2">
                <Zap className="text-primary h-8 w-8" />
                <span className="font-medium text-sm md:text-base">Dërgim i Shpejtë</span>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <span className="font-medium text-sm md:text-base">Shërbim i Besueshëm</span>
              </div>
              <div className="flex flex-col gap-2">
                <MapPin className="text-primary h-8 w-8" />
                <span className="font-medium text-sm md:text-base">Mbulim Gjerë</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sherbimet" className="py-24 bg-[#0d1320]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Shërbimet Tona</h2>
            <p className="text-gray-400 text-lg">Ofrojmë një gamë të gjerë shërbimesh logjistike për të përmbushur çdo nevojë të biznesit tuaj.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {[
              { icon: Truck, title: "Transport tokësor", desc: "Transport i sigurt me kamionë në mbarë Europën dhe rajonin." },
              { icon: Globe2, title: "Transport ndërkombëtar", desc: "Lidhje e shpejtë e Kosovës me tregjet ndërkombëtare." },
              { icon: Container, title: "Transport me konteinerë", desc: "Zgjidhje efikase për ngarkesa të mëdha me konteinerë." },
              { icon: ArrowRightLeft, title: "Import / Export", desc: "Asistencë e plotë në procedurat doganore dhe doganimin." },
              { icon: Anchor, title: "Nga porti i Durrësit", desc: "Lidhje e drejtpërdrejtë logjistike me portin kryesor të Shqipërisë." },
              { icon: Ship, title: "Nga porti i Selanikut", desc: "Transport i sigurt i mallrave nga Greqia drejt Kosovës." },
              { icon: Boxes, title: "I plotë dhe parcial", desc: "Opsione FTL (Full Truckload) dhe LTL (Less than Truckload)." }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="glass-card rounded-2xl p-6 hover:bg-white/[0.04] transition-all hover:border-primary/30 group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="pse-ne" className="py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0f1a] z-10" />
          <img src="/warehouse-bg.png" alt="Warehouse" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="lg:w-1/2 pr-0 lg:pr-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Pse të zgjidhni ne?</h2>
              <p className="text-gray-400 text-lg mb-12">Besimi nuk dhurohet, ai fitohet me çdo dërgesë. Ja pse qindra biznese na besojnë mallrat e tyre çdo ditë.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Shpejtësi", desc: "Optimizim i rrugëve për dërgesa në kohë rekord." },
                  { icon: ShieldCheck, title: "Siguri", desc: "Mallrat tuaja janë të siguruara dhe të monitoruara." },
                  { icon: Award, title: "Besueshmëri", desc: "Fjala jonë është kontratë. Asnjë vonesë e papritur." },
                  { icon: MessageSquare, title: "Komunikim i qartë", desc: "Suport 24/7 dhe transparencë e plotë." },
                  { icon: Clock, title: "Eksperiencë", desc: "Vite përvojë në tregun e logjistikës evropiane." },
                  { icon: CircleDollarSign, title: "Çmime konkuruese", desc: "Raporti më i mirë cilësi-çmim në treg." }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-400">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="procesi" className="py-24 bg-[#0d1320]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Si funksionon?</h2>
            <p className="text-gray-400 text-lg">Një proces i thjeshtë, transparent dhe efikas nga fillimi deri në fund.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {[
                { step: "01", title: "Na kontaktoni", desc: "Dërgoni kërkesën tuaj" },
                { step: "02", title: "Na tregoni destinacionin", desc: "Detajet e mallit" },
                { step: "03", title: "Ne organizojmë", desc: "Transportin e sigurt" },
                { step: "04", title: "Dërgesa arrin", desc: "Në destinacion" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0f1a]/80 z-10" />
          <img src="/port-bg.png" alt="Port logistics" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto glass-card p-10 md:p-16 rounded-3xl border border-primary/20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Gati për të nisur dërgesën tuaj?</h2>
            <p className="text-xl text-gray-300 mb-10">Na besoni mallrat tuaja. Ne do t'i dërgojmë në mënyrë të sigurt dhe në kohë.</p>
            <Button size="lg" onClick={() => scrollToSection('kontakt')} className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 py-6 text-lg shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all">
              Na Kontaktoni Sot
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-[#0a0f1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Na Kontaktoni</h2>
              <p className="text-gray-400 text-lg mb-12">Plotësoni formularin për të marrë një ofertë të personalizuar ose na kontaktoni direkt përmes të dhënave më poshtë.</p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Telefoni / Viber / WhatsApp</h4>
                    <p className="text-lg font-medium">+383 45 928 820</p>
                    <p className="text-lg font-medium">+383 45 476 609</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                    <a href="mailto:operations@fast-logisticsks.com" className="text-lg font-medium hover:text-primary transition-colors">operations@fast-logisticsks.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Lokacioni</h4>
                    <p className="text-lg font-medium">Prishtinë, Kosovë</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card p-8 rounded-2xl"
            >
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Emri / Kompania</label>
                    <Input required placeholder="Shkruani emrin" className="bg-background border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Telefoni</label>
                    <Input required placeholder="Nr. i telefonit" className="bg-background border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input required type="email" placeholder="email@example.com" className="bg-background border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Lloji i Transportit</label>
                  <Select required>
                    <SelectTrigger className="bg-background border-white/10 text-white focus:ring-primary">
                      <SelectValue placeholder="Zgjidhni shërbimin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0f1a] border-white/10 text-white">
                      <SelectItem value="tokesor">Transport tokësor</SelectItem>
                      <SelectItem value="nderkombetar">Transport ndërkombëtar</SelectItem>
                      <SelectItem value="konteinere">Transport me konteinerë</SelectItem>
                      <SelectItem value="import-export">Import / Export</SelectItem>
                      <SelectItem value="port-durres">Nga porti i Durrësit</SelectItem>
                      <SelectItem value="port-selanik">Nga porti i Selanikut</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Mesazhi / Detajet e mallit</label>
                  <Textarea required placeholder="Përshkruani ngarkesën, destinacionin..." className="min-h-[120px] bg-background border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary" />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-xl">
                  Dërgo Kërkesën
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05080f] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center p-1 flex-shrink-0">
                <img src={logoImg} alt="Fast Logistics L.L.C" className="h-full w-full object-contain" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white/80">FAST LOGISTICS L.L.C</span>
            </div>
            
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Fast Logistics L.L.C. Të gjitha të drejtat e rezervuara.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Kushtet e Përdorimit</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Privatësia</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
