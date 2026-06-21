import { r as __toESM } from "../_runtime.mjs";
import { t as hero_cheesecake_default } from "./hero-cheesecake-C5BtcUTI.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as Minus, c as Instagram, d as CreditCard, f as ArrowRight, i as Phone, l as Heart, n as Sparkles, o as MapPin, r as Plus, s as Mail, t as Star, u as Facebook } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0CfKkaD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var ccp_default = "/assets/ccp-CjwOHnab.jpg";
var ccfr_default = "/assets/ccfr-C_5PSawE.jpg";
var tvc_default = "/assets/tvc-BYIjnY00.jpg";
var ccbr_default = "/assets/ccbr-BDvAZEm2.jpg";
var nh_default = "/assets/nh-BXkWozmo.jpg";
var flavors = [
	{
		id: "ccp",
		name: "Cheesecake de Pistacho",
		img: ccp_default,
		price: 75e3,
		blurb: "Combina una base crocante, un centro cremoso y una cobertura de pistacho perfectamente equilibrada."
	},
	{
		id: "ccfr",
		name: "Cheesecake de Frutos Rojos",
		img: ccfr_default,
		price: 75e3,
		blurb: "Cada porción viene llena de fruta textura y color, ideal para quienes aman los postres con un toque fresco."
	},
	{
		id: "tvc",
		name: "Torta Vasca Clásica",
		img: tvc_default,
		price: 7e4,
		blurb: "Una torta suave, cremosa y ligeramente tostada por fuera con un centro delicado que se derrite en la boca."
	}
];
var testimonials = [
	{
		name: "Lucía M.",
		text: "El cheesecake de café es una obra de arte. Lo serví en una cena y todos pidieron la receta.",
		rating: 5
	},
	{
		name: "Andrés R.",
		text: "Sentí el cariño en cada detalle. La presentación es de pastelería europea.",
		rating: 5
	},
	{
		name: "Camila V.",
		text: "Sabor delicado, nada empalagoso. Definitivamente premium y se nota la materia prima.",
		rating: 5
	}
];
function Landing() {
	const [selected, setSelected] = (0, import_react.useState)(flavors[0].id);
	const [qty, setQty] = (0, import_react.useState)(1);
	const flavor = flavors.find((f) => f.id === selected);
	const total = (flavor.price * qty).toFixed(2);
	const onPay = () => {
		toast.success("Pago simulado aprobado", { description: `${qty} × ${flavor.name} · $${total} USD` });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "absolute top-0 left-0 right-0 z-30 font-bold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "flex items-center gap-3 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full border border-[color:var(--brand-green)] text-gold text-sm font-display italic transition-colors group-hover:bg-[color:var(--brand-green)]",
								children: "M"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg tracking-wide",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "[color:var(--light-green)]",
										children: "Miel"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "&"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "[color:var(--light-green)]",
										children: "Mandrágora"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-10 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#sabores",
									className: "hover:text-foreground text-lightgreen transition-colors",
									children: "Productos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pedido",
									className: "hover:text-foreground text-lightgreen transition-colors",
									children: "Pedido"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "hover:text-foreground text-lightgreen transition-colors",
									children: "Contacto"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#sabores",
							className: "hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--light-green)]/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-lightgreen transition-all hover:bg-[color:var(--pistacciogreen)] hover:text-[color:var(--cream)]",
							children: "Reservar"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-screen flex items-center justify-center pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_cheesecake_default,
						alt: "Cheesecake artesanal con miel, fresas y flores comestibles",
						width: 1920,
						height: 1080,
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto max-w-4xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow animate-fade-in",
								children: "Envío gratuito en Medellín para compras superiores a $200.000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-in",
								children: [
									"Recetas que se",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold font-light",
										children: "heredan,"
									}),
									" sabores que permanecen"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-8 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-in",
								children: "Tortas vascas, cheesecakes y bites hechos a fuego lento, con ingredientes seleccionados y el cuidado de quien cocina para alguien que quiere. Postres increíbles para celebraciones, encuentros y antojos que merecen algo especial."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#sabores",
									className: "group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--ink)] shadow-gold transition-transform duration-500 hover:scale-[1.03]",
									children: ["Explorar sabores", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#origen",
									className: "story-link text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground",
									children: "Nuestra historia"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70",
						children: "Desliza"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sabores",
				className: "relative py-28 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "La carta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-6xl max-w-2xl",
							children: ["Los favoritos de la ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "casa"
							})]
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-3",
						children: flavors.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative overflow-hidden rounded-sm border border-border/60 bg-card transition-all duration-500 hover:-translate-y-2 shadow-luxe hover:shadow-gold",
							style: { animationDelay: `${i * 80}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: f.img,
										alt: f.name,
										width: 1024,
										height: 1280,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute top-4 left-4 rounded-full bg-[color:var(--ink)]/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold border border-[color:var(--gold)]/30",
										children: ["0", i + 1]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl",
												children: f.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold font-display text-l",
												children: "Desde"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-gold font-display text-xl",
												children: [" $", f.price]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: f.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSelected(f.id);
											document.getElementById("pedido")?.scrollIntoView({ behavior: "smooth" });
										},
										className: "mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground border-b border-[color:var(--gold)]/40 pb-1 transition-colors hover:text-gold hover:border-gold",
										children: ["Ordenar ahora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						}, f.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "origen",
				className: "relative py-28 md:py-40 bg-[color:var(--secondary)]/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: nh_default,
							alt: "Chica horneando tortas",
							width: 1280,
							height: 1024,
							loading: "lazy",
							className: "rounded-sm shadow-luxe"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-xl",
							children: "NUESTRA HISTORIA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-5xl leading-tight",
							children: [
								"Dulzura con ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "raíces"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground leading-relaxed",
							children: "Miel y Mandrágora nació de la creencia de que cocinar es una pequeña alquimia: Ingredientes simples que con tiempo, paciencia y con manos dispuestas, se transforman en algo que se queda en la memoria. Como esas recetas de abuela que nadie escribió pero todos recuerdan, cada postre nuestro está pensado para compartir, celebrar y volver mágico lo cotidiano."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 space-y-5",
							children: [
								{
									icon: MapPin,
									t: "Cercanía local",
									d: "Domicilio en toda el área metropolitana."
								},
								{
									icon: Sparkles,
									t: "Productos frescos",
									d: "Todas nuestras tortas son horneadas el mismo día."
								},
								{
									icon: Heart,
									t: "Sabor profundo",
									d: "Todo el que nos prueba, se queda."
								}
							].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--gold)]/40 text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg",
									children: t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: d
								})] })]
							}, t))
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-28 md:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Lo que dicen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-5xl",
							children: [
								"Una experiencia que se ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "recuerda"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-3",
						children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "group relative rounded-sm border border-border/60 bg-card p-8 transition-all duration-500 hover:border-[color:var(--gold)]/50 hover:-translate-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 text-gold",
									children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-5 font-display text-xl leading-snug text-foreground/95",
									children: [
										"“",
										t.text,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground",
									children: ["— ", t.name]
								})
							]
						}, t.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pedido",
				className: "relative py-28 md:py-36 bg-[color:var(--secondary)]/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Pedido"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl md:text-5xl",
								children: ["Haz tu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "pedido"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "Elige tu producto, sabor y cantidad. Entrega refrigerada en 24h-48h."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid md:grid-cols-[1.1fr_1fr] gap-0 rounded-sm overflow-hidden border border-border/60 bg-card shadow-luxe",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square md:aspect-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: flavor.img,
								alt: flavor.name,
								width: 1024,
								height: 1024,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover animate-fade-in"
							}, flavor.id), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 to-transparent md:bg-gradient-to-r" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Sabor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-2",
									children: flavors.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setSelected(f.id),
										className: `group flex items-center justify-between rounded-sm border px-4 py-3 text-left transition-all ${selected === f.id ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10" : "border-border/60 hover:border-[color:var(--gold)]/50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-lg",
											children: f.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `text-sm ${selected === f.id ? "text-gold" : "text-muted-foreground"}`,
											children: ["$", f.price]
										})]
									}, f.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Cantidad"
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 rounded-full border border-border/60 p-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												"aria-label": "Disminuir",
												onClick: () => setQty((q) => Math.max(1, q - 1)),
												className: "grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-[color:var(--gold)]/10 hover:text-gold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 text-center font-display text-lg",
												children: qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												"aria-label": "Aumentar",
												onClick: () => setQty((q) => Math.min(12, q + 1)),
												className: "grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-[color:var(--gold)]/10 hover:text-gold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 hairline" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm uppercase tracking-[0.2em] text-muted-foreground",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-3xl text-gold",
										children: ["$", total]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: onPay,
									className: "group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--ink)] shadow-gold transition-transform duration-500 hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), "Proceder al pago"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
									children: "Los gastos de envío se calculan al finalizar el pedido, según la dirección de entrega."
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "origen",
				className: "relative py-28 md:py-40 bg-[color:var(--secondary)]/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ccbr_default,
							alt: "Cheesecake de brownie",
							width: 1280,
							height: 1024,
							loading: "lazy",
							className: "rounded-sm shadow-luxe"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-xl",
							children: "EVENTOS ESPECIALES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-5xl leading-tight",
							children: ["Celebraciones con sabor a", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: " memoria"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-muted-foreground leading-relaxed",
							children: [
								"Haz que tus momentos especiales tengan una historia dulce para recordar. En Miel y Mandrágora preparamos postres artesanales para cumpleaños, reuniones familiares, eventos empresariales y mesas dulces. Te ayudamos a armar una propuesta según el tipo de evento, la cantidad de invitados y los sabores que más se ajusten a tu ocasión.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" Porque toda celebración merece un postre que se quede en la memoria."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--ink)] shadow-gold transition-transform duration-500 hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://linktr.ee/mielymandragora",
								children: "Cotizar mi evento"
							})]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				id: "contacto",
				className: "border-t border-border/60 bg-[color:var(--ink)] pt-20 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 md:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-full border border-[color:var(--brand-green)] text-gold text-sm font-display italic",
										children: "M"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-lg tracking-wide",
										children: [
											"Miel ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic text-gold",
												children: "&"
											}),
											" Mandrágora"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed",
									children: "Pedidos por encargo con mínimo un día de anticipación. Horario de atención Martes a Domingo de 9:00 a 16:00."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex gap-3",
									children: [
										Instagram,
										Facebook,
										Phone
									].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://linktr.ee/mielymandragora",
										"aria-label": "Red social",
										className: "grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-[color:var(--gold)] hover:text-gold hover:-translate-y-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}, i))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Contacto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gold" }), " mielymandragora@gmail.com"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }), " +57 301 8781113"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), " Medellín - Colombia"]
								})
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Miel y Mandrágora. Hecho con amor."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "uppercase tracking-[0.3em]",
							children: "Diseñado por DP-EB · MEDELLÍN"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
