import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

const dictionaries = {
  pt: {
    language: {
      current: "Português",
      switchTo: "English",
      short: "PT"
    },
    nav: {
      home: "Início",
      menu: "Menu",
      events: "Agenda",
      about: "Sobre",
      contact: "Contato",
      reserve: "Reservar",
      instagram: "Instagram"
    },
    actions: {
      reserveTable: "Reservar mesa",
      viewMenu: "Ver menu",
      fullMenu: "Menu completo",
      seeEvents: "Ver agenda",
      readStory: "Conhecer a história",
      whatsapp: "WhatsApp"
    },
    home: {
      heroTags: ["Surf shop", "Bar", "Café", "Música"],
      heroTitle: "Pranchas, drinks, comida e música no Centro de Santos.",
      heroDescription:
        "Um ponto de encontro com alma de surf: pranchas autorais, café durante o dia, bar à noite e uma agenda cultural para ficar mais uma rodada.",
      heroLocation: "Rua XV, Centro Histórico de Santos",
      heroMusic: "Música ao vivo, eventos e encontros",
      experience: {
        eyebrow: "A experiência",
        title: "Casa de surf com mesa, balcão e palco.",
        description:
          "A Seventy nasceu da cultura das pranchas clássicas e alternativas. Hoje junta surf shop, restaurante, café, bar e programação musical em um só endereço."
      },
      experiences: [
        {
          title: "Pranchas e design",
          description: "Shape artesanal, referências clássicas e uma loja que carrega o estilo de vida surfista."
        },
        {
          title: "Comida de encontro",
          description: "Burgers, porções e sanduíches para dividir antes da agenda da noite começar."
        },
        {
          title: "Café, bar e drinks",
          description: "Da pausa no Centro ao brinde depois do expediente, com autorais e clássicos na carta."
        },
        {
          title: "Música e cultura",
          description: "Eventos, festas e apresentações que conectam surf, arte e entretenimento."
        }
      ],
      featured: {
        eyebrow: "Destaques do menu",
        title: "O pedido começa no balcão e segue para a mesa.",
        description: "Escolhas da casa entre burgers, porções, drinks autorais, clássicos e bebidas."
      },
      agenda: {
        eyebrow: "Agenda da semana",
        title: "Noite de bar, música e movimento no Centro.",
        description: "A programação pode receber música ao vivo, DJs, eventos especiais e encontros da comunidade."
      },
      story: {
        eyebrow: "Sobre a casa",
        title: "Do shape artesanal ao bar cultural.",
        description:
          "A Seventy carrega Santos na identidade: pranchas, rua histórica, café, mesa cheia e música. É o tipo de lugar que funciona para passar rápido e para ficar sem pressa."
      },
      gallery: {
        eyebrow: "Visual",
        title: "Madeira, mar, balcão e noite acesa.",
        description: "Direção visual inspirada na oficina de pranchas, na surf shop e na energia cultural da casa."
      }
    },
    menu: {
      eyebrow: "Menu",
      title: "Burgers, drinks, cervejas e porções para a mesa.",
      description:
        "Filtre por categoria e escolha entre autorais, clássicos, baldes, sanduíches, acompanhamentos e bebidas sem álcool.",
      featuredLabel: "Destaque",
      ctaTitle: "Bateu fome?",
      ctaDescription: "Reserve uma mesa e comece pelos pedidos da casa."
    },
    events: {
      eyebrow: "Agenda",
      title: "A casa muda de ritmo ao longo da semana.",
      description:
        "Música, festas, encontros e especiais para transformar a noite no Centro em ponto de encontro.",
      ctaTitle: "Vai juntar a turma?",
      ctaDescription: "Chame no WhatsApp para aniversários, grupos e mesas antes da música."
    },
    eventDetails: {
      "monday-closed": {
        date: "Toda segunda",
        day: "Segunda",
        title: "Respiro da Casa",
        description: "Dia de preparo, ajuste de loja e organização da programação.",
        type: "Preparo"
      },
      "tuesday-tacos": {
        date: "Toda terça",
        day: "Terça",
        title: "Encontro no Centro",
        description: "Comida casual, drinks e clima leve para começar a semana sem pressa.",
        type: "Jantar"
      },
      "wednesday-acoustic": {
        date: "Toda quarta",
        day: "Quarta",
        title: "Som no Quintal",
        description: "Música ao vivo, mesa cheia e drinks para acompanhar a noite.",
        type: "Música"
      },
      "thursday-happy-hour": {
        date: "Toda quinta",
        day: "Quinta",
        title: "Depois do Expediente",
        description: "Balcão aberto, pedidos para compartilhar e o Centro ganhando movimento.",
        type: "Happy hour"
      },
      "friday-dj": {
        date: "Toda sexta",
        day: "Sexta",
        title: "Setentinha",
        description: "DJs, amigos e a casa virando pista depois do jantar.",
        type: "DJ"
      },
      "saturday-brunch": {
        date: "Todo sábado",
        day: "Sábado",
        title: "Sábado na XV",
        description: "Almoço tardio, loja aberta, drinks gelados e grupos chegando cedo.",
        type: "Encontro"
      },
      "sunday-family": {
        date: "Todo domingo",
        day: "Domingo",
        title: "Domingo Baixo",
        description: "Ritmo mais calmo, comida confortável e fechamento de semana.",
        type: "Almoço"
      }
    },
    about: {
      eyebrow: "Sobre",
      title: "Uma casa de surf, comida, café e cultura no Centro Histórico.",
      description:
        "A Seventy Surfboards & Design começou em Santos com pranchas alternativas e clássicas. O espaço cresceu para reunir loja, bar, restaurante, café, música e eventos em um ambiente acolhedor para surfistas e curiosos.",
      valuesEyebrow: "Essência",
      valuesTitle: "O que faz a Seventy parecer Seventy.",
      valuesDescription: "O visual do site segue a mistura real da casa: surf artesanal, rua histórica, gastronomia e agenda cultural.",
      values: [
        { title: "Surf autoral", description: "Pranchas, roupas e acessórios como ponto de partida da marca." },
        { title: "Centro vivo", description: "Rua XV, patrimônio, movimento noturno e encontros fora do óbvio." },
        { title: "Mesa casual", description: "Comida e bebida para compartilhar sem perder personalidade." },
        { title: "Cultura", description: "Música, festas, arte e eventos como extensão natural da loja." }
      ],
      moodEyebrow: "Clima",
      moodTitle: "Shape, café, balcão e som."
    },
    contact: {
      eyebrow: "Contato",
      title: "Reserve, pergunte, siga ou encontre a casa.",
      description: "Use o formulário para pedidos de mesa ou fale direto pelo WhatsApp e Instagram.",
      address: "Endereço",
      hours: "Horários",
      mapTitle: "Centro Histórico de Santos",
      mapDescription: "Rua Quinze de Novembro, 53. Substitua este bloco por um mapa incorporado quando quiser."
    },
    reservation: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      phone: "Telefone",
      guests: "Pessoas",
      date: "Data",
      time: "Horário",
      message: "Mensagem",
      messagePlaceholder: "Aniversário, jantar, drinks, evento ou algum detalhe importante.",
      submit: "Pedir reserva",
      note: "Formulário demonstrativo pronto para integração com WhatsApp ou backend."
    },
    footer: {
      tagline: "Surf shop . Bar . Café . Música",
      description:
        "Pranchas, comida, drinks e cultura em uma casa santista feita para encontros, música e a próxima rodada.",
      explore: "Explore",
      visit: "Visite",
      rights: "© 2026 Seventy Surf. Todos os direitos reservados.",
      signoff: "Energia santista, depois do expediente."
    },
    testimonials: {
      eyebrow: "Na conversa",
      title: "Uma casa feita para virar ponto de encontro.",
      description: "Notas fictícias com o tom de público que o site quer atrair.",
      items: [
        {
          quote: "Entrei para ver as pranchas e fiquei para jantar. A casa tem cara de Santos.",
          name: "Marina C.",
          detail: "Mesa de sexta"
        },
        {
          quote: "Drinks bons, música na medida e aquele clima de loja de surf que virou bar.",
          name: "Rafael M.",
          detail: "Balcão"
        },
        {
          quote: "Ótimo para reunir amigos no Centro sem cair no lugar comum.",
          name: "Bianca T.",
          detail: "Aniversário"
        }
      ]
    },
    cta: {
      title: "Garanta a mesa antes da noite mudar de ritmo.",
      description: "Jantar, drinks, encontros e planos de última hora começam com uma mensagem."
    }
  },
  en: {
    language: {
      current: "English",
      switchTo: "Português",
      short: "EN"
    },
    nav: {
      home: "Home",
      menu: "Menu",
      events: "Events",
      about: "About",
      contact: "Contact",
      reserve: "Book",
      instagram: "Instagram"
    },
    actions: {
      reserveTable: "Book a table",
      viewMenu: "View menu",
      fullMenu: "Full menu",
      seeEvents: "See events",
      readStory: "Read the story",
      whatsapp: "WhatsApp"
    },
    home: {
      heroTags: ["Surf shop", "Bar", "Cafe", "Music"],
      heroTitle: "Boards, drinks, food and music in downtown Santos.",
      heroDescription:
        "A meeting point with a surf soul: custom boards, daytime coffee, nighttime bar service and a cultural calendar worth staying for.",
      heroLocation: "Rua XV, historic downtown Santos",
      heroMusic: "Live music, events and gatherings",
      experience: {
        eyebrow: "The experience",
        title: "A surf house with tables, counter and stage.",
        description:
          "Seventy was born from classic and alternative surfboard culture. Today it blends surf shop, restaurant, cafe, bar and music programming in one address."
      },
      experiences: [
        {
          title: "Boards and design",
          description: "Hand-shaped boards, classic references and a shop rooted in surf lifestyle."
        },
        {
          title: "Food to gather",
          description: "Burgers, shared plates and sandwiches before the night agenda picks up."
        },
        {
          title: "Cafe, bar and drinks",
          description: "From a downtown pause to after-work rounds, with house signatures and classics."
        },
        {
          title: "Music and culture",
          description: "Events, parties and performances connecting surf, art and entertainment."
        }
      ],
      featured: {
        eyebrow: "Menu highlights",
        title: "Start at the counter and keep the table moving.",
        description: "House picks across burgers, shared plates, signatures, classics and drinks."
      },
      agenda: {
        eyebrow: "Weekly agenda",
        title: "Bar nights, music and downtown movement.",
        description: "The calendar can hold live music, DJs, special events and community gatherings."
      },
      story: {
        eyebrow: "About the house",
        title: "From hand-shaped boards to a cultural bar.",
        description:
          "Seventy carries Santos in its identity: boards, historic streets, coffee, full tables and music. It works for a quick stop and for staying without watching the clock."
      },
      gallery: {
        eyebrow: "Visual mood",
        title: "Wood, ocean, counter and a lit-up night.",
        description: "A visual direction inspired by the shaping room, the surf shop and the house's cultural energy."
      }
    },
    menu: {
      eyebrow: "Menu",
      title: "Burgers, drinks, beers and plates for the table.",
      description:
        "Filter by category and choose from signatures, classics, buckets, sandwiches, sides and non-alcoholic drinks.",
      featuredLabel: "Featured",
      ctaTitle: "Hungry yet?",
      ctaDescription: "Book a table and start with the house favorites."
    },
    events: {
      eyebrow: "Events",
      title: "The house changes rhythm through the week.",
      description:
        "Music, parties, gatherings and specials turn a night downtown into a meeting point.",
      ctaTitle: "Planning a group night?",
      ctaDescription: "Message us for birthdays, groups and tables before the music."
    },
    eventDetails: {
      "monday-closed": {
        date: "Every Monday",
        day: "Monday",
        title: "House Reset",
        description: "Prep day for the shop, the room and the weekly calendar.",
        type: "Prep"
      },
      "tuesday-tacos": {
        date: "Every Tuesday",
        day: "Tuesday",
        title: "Downtown Table",
        description: "Casual food, drinks and an easy start to the week.",
        type: "Dinner"
      },
      "wednesday-acoustic": {
        date: "Every Wednesday",
        day: "Wednesday",
        title: "Backyard Sound",
        description: "Live music, full tables and drinks for a longer night.",
        type: "Music"
      },
      "thursday-happy-hour": {
        date: "Every Thursday",
        day: "Thursday",
        title: "After Work",
        description: "Open counter, shared orders and downtown picking up movement.",
        type: "Happy hour"
      },
      "friday-dj": {
        date: "Every Friday",
        day: "Friday",
        title: "Setentinha",
        description: "DJs, friends and the house shifting into party mode after dinner.",
        type: "DJ"
      },
      "saturday-brunch": {
        date: "Every Saturday",
        day: "Saturday",
        title: "Saturday on XV",
        description: "Late lunch, open shop, cold drinks and groups arriving early.",
        type: "Gathering"
      },
      "sunday-family": {
        date: "Every Sunday",
        day: "Sunday",
        title: "Low Tide Sunday",
        description: "A slower rhythm, comfort food and a calm end to the week.",
        type: "Lunch"
      }
    },
    about: {
      eyebrow: "About",
      title: "A surf, food, cafe and culture house in historic downtown.",
      description:
        "Seventy Surfboards & Design began in Santos with alternative and classic surfboards. The space grew into a shop, bar, restaurant, cafe, music and events venue for surfers and curious guests.",
      valuesEyebrow: "Essence",
      valuesTitle: "What makes Seventy feel like Seventy.",
      valuesDescription: "The website follows the house's real mix: hand-shaped surf, historic streets, food and a cultural calendar.",
      values: [
        { title: "Authorial surf", description: "Boards, clothes and accessories as the brand's starting point." },
        { title: "Living downtown", description: "Rua XV, heritage, nightlife and gatherings beyond the obvious." },
        { title: "Casual table", description: "Food and drinks to share without losing personality." },
        { title: "Culture", description: "Music, parties, art and events as a natural extension of the shop." }
      ],
      moodEyebrow: "Mood",
      moodTitle: "Shape, cafe, counter and sound."
    },
    contact: {
      eyebrow: "Contact",
      title: "Book, ask, follow or find the house.",
      description: "Use the form for table requests or go straight to WhatsApp and Instagram.",
      address: "Address",
      hours: "Hours",
      mapTitle: "Historic downtown Santos",
      mapDescription: "Rua Quinze de Novembro, 53. Replace this block with an embedded map when ready."
    },
    reservation: {
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      guests: "Guests",
      date: "Date",
      time: "Time",
      message: "Message",
      messagePlaceholder: "Birthday, dinner, drinks, event table or any detail we should know.",
      submit: "Request reservation",
      note: "Demo form ready for WhatsApp or backend integration."
    },
    footer: {
      tagline: "Surf shop . Bar . Cafe . Music",
      description:
        "Boards, food, drinks and culture in a Santos house built for gatherings, music and the next round.",
      explore: "Explore",
      visit: "Visit",
      rights: "© 2026 Seventy Surf. All rights reserved.",
      signoff: "Santos energy after hours."
    },
    testimonials: {
      eyebrow: "Word around town",
      title: "A house built to become a meeting point.",
      description: "Fictional notes with the audience tone this site should attract.",
      items: [
        {
          quote: "I came in for the boards and stayed for dinner. The place feels like Santos.",
          name: "Marina C.",
          detail: "Friday table"
        },
        {
          quote: "Good drinks, the right music and that surf shop feeling turned into a bar.",
          name: "Rafael M.",
          detail: "Counter regular"
        },
        {
          quote: "Great for gathering friends downtown without choosing the obvious place.",
          name: "Bianca T.",
          detail: "Birthday night"
        }
      ]
    },
    cta: {
      title: "Book the table before the night changes rhythm.",
      description: "Dinner, drinks, gatherings and last-minute plans all start with a message."
    }
  }
} as const;

type Dictionary = (typeof dictionaries)[Language];

type LanguageContextValue = {
  language: Language;
  copy: Dictionary;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";
  return window.localStorage.getItem("seventy-language") === "en" ? "en" : "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("seventy-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      copy: dictionaries[language],
      toggleLanguage: () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
      setLanguage
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
