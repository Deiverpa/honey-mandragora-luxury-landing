import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Star,
  Leaf,
  MapPin,
  Sparkles,
  Minus,
  Plus,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-cheesecake.jpg";
import clasicoImg from "@/assets/cheesecake-clasico.jpg";
import fresaImg from "@/assets/cheesecake-fresa.jpg";
import matchaImg from "@/assets/cheesecake-matcha.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miel y Mandrágora · Cheesecakes artesanales con alma" },
      {
        name: "description",
        content:
          "Cheesecakes artesanales premium elaborados con miel pura, ingredientes naturales y origen local. Pide en línea con pago seguro.",
      },
      { property: "og:title", content: "Miel y Mandrágora · Cheesecakes artesanales con alma" },
      {
        property: "og:description",
        content:
          "Pastelería premium de cheesecakes artesanales. Miel pura, frutas de temporada y flores comestibles.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const flavors = [
  { id: "clasico", name: "Clásico de Miel", img: clasicoImg, price: 38, blurb: "Cremoso New York con miel cruda de abeja reina." },
  { id: "frutos", name: "Frutos del Bosque", img: fresaImg, price: 42, blurb: "Fresa, mora y violetas comestibles sobre base de almendra." },
  { id: "matcha", name: "Matcha & Pistacho", img: matchaImg, price: 44, blurb: "Matcha ceremonial, pistacho de Bronte y hoja de oro." },
];

const testimonials = [
  { name: "Lucía M.", text: "El cheesecake de miel es una obra de arte. Lo serví en una cena y todos pidieron la receta.", rating: 5 },
  { name: "Andrés R.", text: "Sentí el cariño en cada detalle. La presentación es de pastelería europea.", rating: 5 },
  { name: "Camila V.", text: "Sabor delicado, nada empalagoso. Definitivamente premium y se nota la materia prima.", rating: 5 },
];

function Landing() {
  const [selected, setSelected] = useState(flavors[0].id);
  const [qty, setQty] = useState(1);
  const flavor = flavors.find((f) => f.id === selected)!;
  const total = (flavor.price * qty).toFixed(2);

  const onPay = () => {
    toast.success("Pago simulado aprobado", {
      description: `${qty} × ${flavor.name} · $${total} USD`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster />

      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
          <a href="#" className="flex items-center gap-3 group">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--brand-green)] text-gold text-sm font-display italic transition-colors group-hover:bg-[color:var(--brand-green)]">
              M
            </span>
            <span className="font-display text-lg tracking-wide">
              Miel <span className="italic text-gold">&</span> Mandrágora
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            <a href="#sabores" className="hover:text-foreground transition-colors">Sabores</a>
            <a href="#origen" className="hover:text-foreground transition-colors">Origen</a>
            <a href="#pedido" className="hover:text-foreground transition-colors">Pedido</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
          <a
            href="#sabores"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)]"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <img
          src={heroImg}
          alt="Cheesecake artesanal con miel, fresas y flores comestibles"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow animate-fade-in">Pastelería artesanal · Edición limitada</p>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-in">
            Cheesecakes
            <br />
            <span className="italic text-gold font-light">artesanales</span> con alma
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-in">
            Recetas pacientes, miel de origen y materia prima local. Cada pieza se elabora a mano,
            en hornadas pequeñas, para los que entienden de detalle.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a
              href="#sabores"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--ink)] shadow-gold transition-transform duration-500 hover:scale-[1.03]"
            >
              Explorar sabores
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#origen"
              className="story-link text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
            >
              Nuestra historia
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
          Desliza
        </div>
      </section>

      {/* SABORES */}
      <section id="sabores" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow">La carta</p>
              <h2 className="mt-4 text-4xl md:text-6xl max-w-2xl">
                Sabores destacados de la <span className="italic text-gold">temporada</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Tres composiciones que celebran la miel y los frutos locales. Disponibilidad limitada por hornada.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {flavors.map((f, i) => (
              <article
                key={f.id}
                className="group relative overflow-hidden rounded-sm border border-border/60 bg-card transition-all duration-500 hover:-translate-y-2 shadow-luxe hover:shadow-gold"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-[color:var(--ink)]/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold border border-[color:var(--gold)]/30">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl">{f.name}</h3>
                    <span className="text-gold font-display text-xl">${f.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.blurb}</p>
                  <button
                    onClick={() => {
                      setSelected(f.id);
                      document.getElementById("pedido")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground border-b border-[color:var(--gold)]/40 pb-1 transition-colors hover:text-gold hover:border-gold"
                  >
                    Ordenar ahora
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGEN */}
      <section id="origen" className="relative py-28 md:py-40 bg-[color:var(--secondary)]/40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={ingredientsImg}
              alt="Ingredientes naturales: miel cruda, huevos orgánicos, vainilla y queso crema"
              width={1280}
              height={1024}
              loading="lazy"
              className="rounded-sm shadow-luxe"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-10 max-w-[260px] rounded-sm border border-[color:var(--gold)]/40 bg-background/95 backdrop-blur p-6 shadow-gold">
              <div className="flex items-center gap-2 text-gold">
                <Leaf className="h-4 w-4" />
                <span className="eyebrow !text-[10px]">Origen verificado</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Miel de apiarios familiares a menos de 80 km. Sin colorantes, sin conservantes, sin atajos.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Ingredientes</p>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
              De la colmena a tu mesa, <span className="italic text-gold">sin intermediarios</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Trabajamos con apicultores y productores locales que comparten nuestra obsesión por
              el detalle. Cada cheesecake reposa 24 horas para que los sabores se asienten en armonía.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                { icon: Leaf, t: "100% natural", d: "Lácteos frescos, huevos orgánicos y vainilla bourbon." },
                { icon: MapPin, t: "Origen local", d: "Productores certificados a menos de 80 km." },
                { icon: Sparkles, t: "Hornadas pequeñas", d: "Edición limitada cada semana, hecha a mano." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--gold)]/40 text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Lo que dicen</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Una experiencia que se <span className="italic text-gold">recuerda</span>.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group relative rounded-sm border border-border/60 bg-card p-8 transition-all duration-500 hover:border-[color:var(--gold)]/50 hover:-translate-y-1"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/95">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PASARELA / PEDIDO */}
      <section id="pedido" className="relative py-28 md:py-36 bg-[color:var(--secondary)]/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Pedido</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Diseña tu <span className="italic text-gold">cheesecake</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Elige sabor y cantidad. Entrega refrigerada en 24–48h.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-[1.1fr_1fr] gap-0 rounded-sm overflow-hidden border border-border/60 bg-card shadow-luxe">
            <div className="relative aspect-square md:aspect-auto">
              <img
                src={flavor.img}
                alt={flavor.name}
                key={flavor.id}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="p-8 md:p-10">
              <p className="eyebrow">Sabor</p>
              <div className="mt-4 grid gap-2">
                {flavors.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelected(f.id)}
                    className={`group flex items-center justify-between rounded-sm border px-4 py-3 text-left transition-all ${
                      selected === f.id
                        ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10"
                        : "border-border/60 hover:border-[color:var(--gold)]/50"
                    }`}
                  >
                    <span className="font-display text-lg">{f.name}</span>
                    <span className={`text-sm ${selected === f.id ? "text-gold" : "text-muted-foreground"}`}>
                      ${f.price}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="eyebrow">Cantidad</p>
                  <p className="mt-2 text-sm text-muted-foreground">Por hornada</p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-border/60 p-1">
                  <button
                    aria-label="Disminuir"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-[color:var(--gold)]/10 hover:text-gold"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-display text-lg">{qty}</span>
                  <button
                    aria-label="Aumentar"
                    onClick={() => setQty((q) => Math.min(12, q + 1))}
                    className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-[color:var(--gold)]/10 hover:text-gold"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-8 hairline" />

              <div className="mt-6 flex items-baseline justify-between">
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Total</span>
                <span className="font-display text-3xl text-gold">${total}</span>
              </div>

              <button
                onClick={onPay}
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--ink)] shadow-gold transition-transform duration-500 hover:scale-[1.02]"
              >
                <CreditCard className="h-4 w-4" />
                Pagar con tarjeta
              </button>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Pago simulado · 256-bit seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="border-t border-border/60 bg-[color:var(--ink)] pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--brand-green)] text-gold text-sm font-display italic">
                  M
                </span>
                <span className="font-display text-lg tracking-wide">
                  Miel <span className="italic text-gold">&</span> Mandrágora
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Pastelería artesanal de autor. Hornadas pequeñas, miel pura y obsesión por el detalle.
              </p>
              <div className="mt-6 flex gap-3">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Red social"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-[color:var(--gold)] hover:text-gold hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Contacto</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gold" /> hola@mielymandragora.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold" /> +57 320 555 1234
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" /> Atelier · Bogotá
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow">Calidad</p>
              <div className="mt-5 rounded-sm border border-[color:var(--gold)]/30 p-5">
                <ShieldCheck className="h-6 w-6 text-gold" />
                <p className="mt-3 font-display text-lg">Sello Artesano</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Certificación de elaboración manual y materia prima local.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Miel y Mandrágora. Hecho con miel.</p>
            <p className="uppercase tracking-[0.3em]">Edición limitada · Bogotá</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
