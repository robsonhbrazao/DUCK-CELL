/*
 * DUK CELL — Precisão de Oficina
 * Página editorial assimétrica para assistência técnica premium: diagnóstico claro, prova real e conversão contextual.
 * Fotos reais da loja e do técnico são preservadas; ativos gerados entram apenas como textura e apoio visual.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BatteryWarning,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  ExternalLink,
  ImageOff,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  PlugZap,
  PowerOff,
  Quote,
  ShieldCheck,
  Smartphone,
  Star,
  Store,
  Wrench,
  Waves,
  X,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/5511984551644?text=Ol%C3%A1%2C%20vim%20pelo%20google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20celular..";
const phoneLink = "tel:+5511984551644";
const googleReviewsLink =
  "https://www.google.com/search?q=DUK+CELL+Rua+Augusta+724+Consola%C3%A7%C3%A3o+S%C3%A3o+Paulo";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=DUK%20CELL%20Rua%20Augusta%20724%20Consola%C3%A7%C3%A3o%20S%C3%A3o%20Paulo";

const assets = {
  mark: "/assets/duk-cell-mark.webp",
  heroTexture: "/assets/duk-cell-hero-texture.webp",
  serviceDetail: "/assets/duk-cell-service-detail.webp",
  diagnosticPattern: "/assets/duk-cell-diagnostic-pattern.webp",
  logo: "/assets/logo-main.png",
  technician: "/assets/003d6b907d2c.jpg",
  facade: "/assets/14ee299d6b57.jpg",
  bench: "/assets/3ad5aaac83db.jpg",
  accessories: "/assets/844f8b85c76a.jpg",
  accessoriesVertical: "/assets/a73dc0a81807.jpg",
};

const problems = [
  {
    icon: ImageOff,
    title: "Tela Quebrada",
    detail: "Troca de display completo",
    index: "01",
  },
  {
    icon: BatteryWarning,
    title: "Bateria Ruim",
    detail: "Viciada ou descarregando rápido",
    index: "02",
  },
  {
    icon: Waves,
    title: "Caiu na Água",
    detail: "Desoxidação e limpeza",
    index: "03",
  },
  {
    icon: PowerOff,
    title: "Não Liga",
    detail: "Reparo em placa mãe",
    index: "04",
  },
];

const services = [
  {
    icon: Smartphone,
    eyebrow: "01 / DISPLAY",
    title: "Troca de tela de celular",
    description:
      "Utilizamos displays originais ou premium de alta qualidade para garantir cores vivas, sensibilidade ao toque perfeita e resistência. Substituição rápida, muitas vezes em menos de 2 horas.",
    benefits: ["Mantém a sensibilidade do touch", "Cores idênticas ao original"],
    cta: "Orçar troca de tela",
  },
  {
    icon: BatteryWarning,
    eyebrow: "02 / ENERGIA",
    title: "Troca de Bateria",
    description:
      "Diga adeus à dependência da tomada. Baterias com capacidade real 100% e garantia, restaurando a autonomia original do seu aparelho.",
    benefits: ["Mais autonomia no dia a dia", "Garantia em peça e serviço"],
    cta: "Consultar valor",
  },
  {
    icon: Droplets,
    eyebrow: "03 / RECUPERAÇÃO",
    title: "Avaliação e recuperação de aparelho molhado",
    description:
      "Aparelho caiu na água? Não tente ligar! Nosso processo de desoxidação ultrassônica remove a umidade interna e previne curtos na placa mãe.",
    benefits: ["Análise técnica sem custo", "Processo de desoxidação"],
    cta: "Saber mais",
  },
  {
    icon: PlugZap,
    eyebrow: "04 / CONEXÃO",
    title: "Troca de conector de carga",
    description:
      "Reparo para celulares que apresentam dificuldade ou falha ao carregar. Realizamos a substituição do conector com agilidade e segurança para diferentes modelos de aparelhos.",
    benefits: ["Carga estável novamente", "Reparo com segurança"],
    cta: "Falar com Técnico",
  },
];

const reviews = [
  {
    name: "Hugo Kahn",
    text: "Serviço muito bom e rápido. Gostei dos preços também, pois são bem competitivos com outros da região. Tem vários estilos de capa de celular, trocam película na hora e consertam o celular também.",
    initials: "HK",
  },
  {
    name: "Gabriel Tavares",
    text: "O proprietário, Washington, foi muito solícito e gentil com as minhas necessidades e fornecer um bom serviço, além de ter um bom preço dos produtos que ele vende para celular.",
    initials: "GT",
  },
  {
    name: "Leonardo José da Costa",
    text: "Qualidade no que é vendido e excelente atendimento, com esclarecimentos detalhados sobre o produto. Recomendo.",
    initials: "LC",
  },
];

const faqs = [
  {
    question: "Quais marcas de celular a DUK CELL atende?",
    answer:
      "Atendemos as principais marcas do mercado, incluindo Apple (iPhone), Samsung, Motorola, Xiaomi, Realme, POCO, Infinix...",
  },
  {
    question: "Quanto tempo demora a troca de tela?",
    answer:
      "A maioria das trocas de tela são realizadas em até 2 horas, dependendo da disponibilidade da peça em estoque.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "Sim, realizamos a análise técnica e passamos o orçamento sem custo algum para o cliente.",
  },
  {
    question: "A DUK CELL oferece garantia?",
    answer:
      "Sim, oferecemos garantia de 90 dias em todos os serviços realizados e peças substituídas.",
  },
  {
    question: "O que fazer quando o celular molha?",
    answer:
      "Desligue o aparelho imediatamente, não tente carregar e traga o quanto antes para um banho químico (desoxidação).",
  },
  {
    question: "Vocês vendem celulares usados?",
    answer:
      "Sim, vendemos aparelhos usados com garantia. Entre em contato para verificar os modelos disponíveis.",
  },
  {
    question: "Quais acessórios estão disponíveis?",
    answer:
      "Trabalhamos com uma linha completa de capas, películas de vidro, carregadores homologados e cabos de alta qualidade, além de ferramentas para o dia a dia.",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "De segunda a sexta das 09h às 20hrs. Sábados das 09:30 às 17hrs.",
  },
  {
    question: "Onde fica a DUK CELL?",
    answer:
      "Estamos localizados na Rua Augusta, 724, no bairro da Consolação em São Paulo - SP.",
  },
];

function SectionIntro({
  number,
  eyebrow,
  title,
  description,
  light = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className={`section-intro ${light ? "section-intro--light" : ""}`}>
      <div className="section-intro__number">{number}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-intro__description">{description}</p>
      </div>
    </div>
  );
}

function WhatsappButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`button button--primary ${className}`} href={whatsappLink} target="_blank" rel="noreferrer">
      <MessageCircle size={18} strokeWidth={2.4} />
      <span>{children}</span>
      <ArrowRight className="button__arrow" size={17} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="page-width site-header__inner">
          <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="DUK CELL — início">
            <span className="brand-logo-real"><img src={assets.logo} alt="DUK CELL" /></span>
            <span className="brand-mark brand-mark--secondary"><img src={assets.mark} alt="" /></span>
            <span className="brand-type"><strong>DUK</strong><span>CELL</span></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <WhatsappButton className="site-nav__cta">Orçamento no WhatsApp</WhatsappButton>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-section__texture" aria-hidden="true" />
          <div className="hero-section__grid page-width">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--orange"><span /> ASSISTÊNCIA TÉCNICA EM SÃO PAULO</p>
              <h1>Seu celular apresentou problema?<br /><em>Conte com a DUK CELL.</em></h1>
              <p className="hero-copy__lead">Assistência técnica na Rua Augusta, na região da Consolação, em São Paulo.</p>
              <p className="hero-copy__body">Especialistas em troca de tela, bateria, conector de carga e recuperação de aparelhos molhados com orçamento gratuito.</p>
              <p className="hero-copy__signal"><Wrench size={14} /> Diagnóstico claro antes de qualquer reparo</p>
              <div className="hero-actions">
                <WhatsappButton>Pedir orçamento no WhatsApp</WhatsappButton>
                <a className="button button--quiet" href="#servicos">Ver serviços <ArrowDownRight size={17} /></a>
              </div>
              <a className="location-chip" href={mapsLink} target="_blank" rel="noreferrer">
                <MapPin size={17} />
                <span><small>Estamos aqui</small>Rua Augusta, 724 — Consolação</span>
                <ExternalLink size={15} />
              </a>
            </div>
            <div className="hero-visual">
              <div className="hero-visual__frame">
                <img src={assets.technician} alt="Técnico da DUK CELL realizando um reparo na bancada" width={384} height={512} fetchPriority="high" decoding="async" />
                <div className="hero-visual__wash" aria-hidden="true" />
              </div>
              <div className="hero-visual__tag"><Wrench size={14} /><span>DIAGNÓSTICO PRECISO</span></div>
              <div className="hero-visual__stamp"><strong>DUK</strong><span>90 DIAS<br />DE GARANTIA</span></div>
            </div>
          </div>
          <div className="hero-meta page-width">
            <span><span className="status-dot" /> Atendimento presencial</span>
            <span>Seg–Sex 09h–20h&nbsp;&nbsp;·&nbsp;&nbsp;Sáb 09:30–17h</span>
            <span className="hero-meta__scroll">Role para conhecer <ArrowDownRight size={15} /></span>
          </div>
        </section>

        <section className="problem-section" id="problemas">
          <div className="page-width">
            <div className="problem-heading">
              <div>
                <p className="eyebrow"><span /> DIAGNÓSTICO RÁPIDO</p>
                <h2>Qual o problema<br /><em>do seu aparelho?</em></h2>
              </div>
              <p>Selecione o que mais se aproxima do seu caso e fale com a equipe pelo WhatsApp.</p>
            </div>
            <div className="problem-grid">
              {problems.map(({ icon: Icon, title, detail, index }) => (
                <a className="problem-card" href={whatsappLink} target="_blank" rel="noreferrer" key={title}>
                  <span className="problem-card__index">{index}</span>
                  <span className="problem-card__icon"><Icon size={29} strokeWidth={1.55} /></span>
                  <span className="problem-card__title">{title}</span>
                  <span className="problem-card__detail">{detail}</span>
                  <span className="problem-card__meta">SINTOMA / REPARO</span>
                  <ArrowRight className="problem-card__arrow" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="brands-section">
          <div className="page-width brands-section__inner">
            <p className="eyebrow">ESPECIALISTAS EM</p>
            <div className="brands-list" aria-label="Marcas atendidas">
              {["Apple", "Samsung", "Motorola", "Xiaomi", "Realme", "POCO", "Infinix"].map((brand, index) => (
                <span key={brand} className={index === 0 ? "brand-name brand-name--apple" : "brand-name"}>{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="page-width">
            <SectionIntro number="02" eyebrow="O QUE FAZEMOS" title="Nossos principais serviços" description="Soluções definitivas para os problemas mais complexos, executadas por técnicos certificados. Tela, bateria, água ou carga: o reparo começa pelo sintoma certo." />
            <div className="services-layout">
              <div className="service-feature">
                <img src={assets.serviceDetail} alt="Reparo de celular realizado em uma bancada de precisão" width={1200} height={800} loading="lazy" decoding="async" />
                <div className="service-feature__overlay" />
                <div className="service-feature__copy">
                  <p className="eyebrow eyebrow--orange"><span /> CUIDADO EM CADA DETALHE</p>
                  <h3>O reparo certo<br />começa pelo diagnóstico.</h3>
                  <p>Uma análise clara antes de qualquer serviço, sem custo para você.</p>
                  <WhatsappButton>Falar com um técnico</WhatsappButton>
                </div>
              </div>
              <div className="service-list">
                {services.map(({ icon: Icon, eyebrow, title, description, benefits, cta }, index) => (
                  <article className={`service-row ${index === 0 ? "service-row--active" : ""}`} key={title}>
                    <div className="service-row__topline"><span>{eyebrow}</span><span>0{index + 1}</span></div>
                    <div className="service-row__body">
                      <div className="service-row__icon"><Icon size={25} strokeWidth={1.7} /></div>
                      <div className="service-row__copy">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="benefits-list">
                          {benefits.map((benefit) => <span key={benefit}><Check size={14} /> {benefit}</span>)}
                        </div>
                        <div className="service-row__proof"><span>ORÇAMENTO GRATUITO</span><span>90 DIAS DE GARANTIA</span></div>
                        <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">{cta}<ArrowRight size={16} /></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="trust-band">
          <div className="trust-band__pattern" aria-hidden="true" />
          <div className="page-width trust-band__inner">
            <ShieldCheck size={30} strokeWidth={1.4} />
            <p><strong>Orçamento gratuito.</strong> Garantia de 90 dias em todos os serviços realizados e peças substituídas.</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer">Tire sua dúvida <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="reviews-section" id="avaliacoes">
          <div className="page-width">
            <SectionIntro number="03" eyebrow="CONFIANÇA COMPROVADA" title="A experiência de quem confia na DUK CELL" description="Confira avaliações reais de clientes que já realizaram serviços conosco." light />
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-card__top"><Quote size={26} /><span>AVALIAÇÃO NO GOOGLE</span></div>
                  <div className="stars" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
                  <p>“{review.text}”</p>
                  <div className="review-card__author"><span>{review.initials}</span><strong>{review.name}</strong></div>
                </article>
              ))}
            </div>
            <a className="outline-link" href={googleReviewsLink} target="_blank" rel="noreferrer">Ver todas as avaliações no Google <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="page-width faq-layout">
            <SectionIntro number="04" eyebrow="ANTES DE TRAZER O APARELHO" title="Perguntas frequentes" description="Tire suas dúvidas sobre nossos serviços e processos." />
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={faq.question}>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span><small>{String(index + 1).padStart(2, "0")}</small>{faq.question}</span>
                      <ChevronDown size={19} />
                    </button>
                    <div className="faq-answer" aria-hidden={!isOpen}><p>{faq.answer}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="store-section" id="sobre">
          <div className="page-width store-layout">
            <div className="store-copy">
              <SectionIntro number="05" eyebrow="CONHEÇA A DUK CELL" title="Um espaço preparado para cuidar do seu celular." description="Na DUK Cell, você encontra assistência técnica, acessórios e ferramentas, com atendimento presencial em São Paulo." />
              <div className="store-address"><MapPin size={20} /><div><span>Rua Augusta, 724 — Consolação</span><small>São Paulo — SP</small></div></div>
              <div className="store-actions"><a className="button button--dark" href={mapsLink} target="_blank" rel="noreferrer"><Navigation size={17} /> Visite nossa loja</a><a className="text-link text-link--dark" href={phoneLink}>Ligar para a loja <Phone size={16} /></a></div>
              <div className="store-hours"><Clock3 size={18} /><p><strong>Horário de funcionamento</strong>Segunda a sexta das 09h às 20hrs<br />Sábados das 09:30 às 17hrs</p></div>
            </div>
            <div className="store-gallery">
              <figure className="store-gallery__main"><img src={assets.facade} alt="Fachada da loja DUK CELL na Rua Augusta" width={512} height={384} loading="lazy" decoding="async" /><figcaption><span>01</span> Rua Augusta, 724</figcaption></figure>
              <figure className="store-gallery__bench"><img src={assets.bench} alt="Bancada com ferramentas e equipamentos da DUK CELL" width={512} height={384} loading="lazy" decoding="async" /><figcaption><span>02</span> Oficina</figcaption></figure>
              <figure className="store-gallery__accessories"><img src={assets.accessories} alt="Vitrine com acessórios para celulares" width={512} height={384} loading="lazy" decoding="async" /><figcaption><span>03</span> Acessórios</figcaption></figure>
              <figure className="store-gallery__vertical"><img src={assets.accessoriesVertical} alt="Exposição de acessórios na loja DUK CELL" width={384} height={512} loading="lazy" decoding="async" /></figure>
            </div>
          </div>
        </section>

        <section className="final-cta" id="contato">
          <div className="final-cta__line" aria-hidden="true" />
          <div className="page-width final-cta__inner">
            <p className="eyebrow eyebrow--orange"><span /> PRÓXIMO PASSO</p>
            <h2>Seu celular precisa<br /><em>de assistência?</em></h2>
            <p>Envie o modelo e o problema. A equipe retorna com o próximo passo.</p>
            <div className="final-cta__spec"><span>R. AUGUSTA, 724</span><span>CONSOLAÇÃO / SÃO PAULO</span><span>ATENDIMENTO PRESENCIAL</span></div>
            <WhatsappButton>Pedir orçamento no WhatsApp</WhatsappButton>
          </div>
          <div className="final-cta__number">DUK / 06</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width site-footer__main">
          <div className="footer-brand"><img src={assets.logo} alt="DUK CELL — assistência técnica e acessórios" width={133} height={113} loading="lazy" decoding="async" /><p>Sua assistência técnica de confiança. Rapidez, transparência e qualidade em cada reparo.</p></div>
          <div className="footer-column"><p className="footer-label">LINKS ÚTEIS</p><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#sobre">Sobre nós</a><a href="#faq">Perguntas frequentes</a></div>
          <div className="footer-column footer-contact"><p className="footer-label">CONTATO</p><a href={phoneLink}><Phone size={16} />(11) 98455-1644</a><a href={mapsLink} target="_blank" rel="noreferrer"><MapPin size={16} />Rua Augusta, 724 — Consolação<br />São Paulo — SP</a><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={16} />Falar pelo WhatsApp</a><a href="https://www.instagram.com/dukcell_1/" target="_blank" rel="noreferrer" aria-label="Instagram da DUK CELL"><Instagram size={16} />Instagram</a></div>
        </div>
        <div className="page-width site-footer__bottom"><span>© 2026 DUK CELL — Assistência Técnica Especializada</span><span>São Paulo, SP <span className="footer-dot" /></span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp"><MessageCircle size={24} /><span>Orçamento</span></a>
    </div>
  );
}
