export type Lang = "pt" | "en";

export const profile = {
  name: "Alan Rodrigues Primo",
  email: "alan.rdg.primo@gmail.com",
  phone: "(11) 96607-8691",
  whatsapp: "5511966078691", // DDI + DDD + número, só dígitos
  // Adicione seus links (ex.: { label: "GitHub", href: "https://github.com/seu-usuario" })
  links: [] as { label: string; href: string }[],
};

type Content = {
  role: string;
  location: string;
  about: string;
  labels: { experience: string; skills: string; projects: string; education: string; courses: string; contact: string; status: string };
  msg: { whatsapp: string; subject: string; body: string };
  projects: { name: string; desc: string; stack: string[]; href?: string }[];
  contactLead: string;
  experience: { period: string; role: string; company: string; items: string[] }[];
  skills: { group: string; list: string[] }[];
  education: { title: string; place: string; note: string }[];
  courses: { title: string; place: string }[];
};

export const content: Record<Lang, Content> = {
  pt: {
    role: "Desenvolvedor Full Stack",
    location: "São Paulo – SP",
    about:
      "Desenvolvedor full stack com experiência em .NET 8, Next.js e TypeScript. Entrei na FI Group em 2023 como estagiário e hoje mantenho e evoluo aplicações corporativas, do banco de dados à interface.",
    labels: { experience: "Experiência", skills: "Skills", projects: "Projetos", education: "Formação", courses: "Cursos", contact: "Contato", status: "Em desenvolvimento" },
    msg: {
      whatsapp: "Olá, Alan! Vi seu portfólio e gostaria de conversar.",
      subject: "Contato pelo portfólio",
      body: "Olá, Alan! Vi seu portfólio e gostaria de conversar.",
    },
    // Edite os projetos abaixo. `href` (opcional) é o link do repositório ou demo.
    projects: [
      { name: "Este portfólio", desc: "Portfólio pessoal bilíngue (PT/EN), feito com Next.js e TypeScript.", stack: ["Next.js", "TypeScript", "CSS"] },
      { name: "HoralyApp", desc: "Simplifique a gestão do seu negócio com agendamento online automático para seus clientes e confirmações por mensagem um dia antes. Tudo o que você precisa para organizar sua agenda sem complicações.", stack: ["Next.js","TypeScript", ".Net 8.0", "SQL Server", "Azure DevOps"] },
    ],
    contactLead: "Aberto a conversar sobre vagas e projetos.",
    experience: [
      {
        period: "ago/2025 – atual",
        role: "Desenvolvedor Full Stack",
        company: "FI Group",
        items: [
          "Desenvolvimento full stack com .NET 8, Next.js e TypeScript.",
          "Manutenção e evolução de aplicações corporativas.",
          "Otimização de performance e redução de chamadas ao back-end.",
          "Reestruturação de banco de dados e relacionamentos.",
          "Integração com Azure Blob Storage.",
          "Processamento de dados em massa via Excel (bulk insert/update).",
          "Clean Code, SOLID, Scrum e Git Flow.",
        ],
      },
      {
        period: "fev/2024 – ago/2025",
        role: "Estagiário C#",
        company: "FI Group",
        items: [
          "Back-end com .NET 6 e .NET 8; front-end com React e TypeScript.",
          "Criação e integração de APIs REST.",
          "Novas funcionalidades, correção de bugs e melhorias.",
          "Scrum, Git e Git Flow.",
        ],
      },
      {
        period: "ago/2023 – fev/2024",
        role: "Estágio Speed",
        company: "FI Group",
        items: [
          "Back-end com Java Spring e SQL.",
          "Testes de software e documentação de bugs.",
          "Manuais, documentação técnica e relatórios executivos e analíticos.",
          "Site maps para plataformas digitais.",
        ],
      },
    ],
    skills: [
      { group: "Front-end", list: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
      { group: "Back-end", list: [".NET 6", ".NET 8", "C#", "Java (Spring)", "APIs REST"] },
      { group: "Dados e nuvem", list: ["Bancos relacionais", "Bancos não relacionais", "SQL", "Azure Blob Storage"] },
      { group: "Processo", list: ["Git Flow", "Scrum", "Clean Code", "SOLID", "Azure DevOps", "Office"] },
    ],
    education: [
      { title: "Ciência da Computação", place: "Universidade Paulista – UNIP", note: "Ensino superior, concluído" },
      { title: "Técnico em Informática", place: "ETEC Dr. Emílio Hernandez Aguilar", note: "Técnico, concluído (18 meses)" },
    ],
    courses: [
      { title: "React do Zero a Maestria", place: "Udemy" },
      { title: "C# Completo: POO + Projetos", place: "Udemy" },
      { title: "Java POO", place: "Curso em Vídeo" },
    ],
  },
  en: {
    role: "Full Stack Developer",
    location: "São Paulo, Brazil",
    about:
      "Full stack developer experienced with .NET 8, Next.js and TypeScript. I joined FI Group in 2023 as an intern and now maintain and evolve enterprise applications, from the database to the interface.",
    labels: { experience: "Experience", skills: "Skills", projects: "Projects", education: "Education", courses: "Courses", contact: "Contact", status: "In progress" },
    msg: {
      whatsapp: "Hi Alan! I saw your portfolio and would like to talk.",
      subject: "Contact via portfolio",
      body: "Hi Alan! I saw your portfolio and would like to talk.",
    },
    projects: [
      { name: "This portfolio", desc: "Bilingual (PT/EN) personal portfolio built with Next.js and TypeScript.", stack: ["Next.js", "TypeScript", "CSS"] },
      { name: "HoralyApp", desc: "Simplify your business management with automatic online booking for your clients and message reminders sent one day in advance. Everything you need to organize your schedule with ease.", stack: ["Next.js", "TypeScript", ".NET 8.0", "SQL Server", "Azure DevOps"] },
    ],
    contactLead: "Open to talk about roles and projects.",
    experience: [
      {
        period: "Aug 2025 – present",
        role: "Full Stack Developer",
        company: "FI Group",
        items: [
          "Full stack development with .NET 8, Next.js and TypeScript.",
          "Maintenance and evolution of enterprise applications.",
          "Performance tuning and fewer back-end calls.",
          "Database and relationship restructuring.",
          "Azure Blob Storage integration.",
          "Bulk data processing from Excel (bulk insert/update).",
          "Clean Code, SOLID, Scrum and Git Flow.",
        ],
      },
      {
        period: "Feb 2024 – Aug 2025",
        role: "C# Intern",
        company: "FI Group",
        items: [
          "Back-end with .NET 6 and .NET 8; front-end with React and TypeScript.",
          "Built and integrated REST APIs.",
          "New features, bug fixes and improvements.",
          "Scrum, Git and Git Flow.",
        ],
      },
      {
        period: "Aug 2023 – Feb 2024",
        role: "Speed Intern",
        company: "FI Group",
        items: [
          "Back-end with Java Spring and SQL.",
          "Software testing and bug documentation.",
          "Manuals, technical documentation, and executive and analytical reports.",
          "Site maps for digital platforms.",
        ],
      },
    ],
    skills: [
      { group: "Front-end", list: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
      { group: "Back-end", list: [".NET 6", ".NET 8", "C#", "Java (Spring)", "REST APIs"] },
      { group: "Data and cloud", list: ["Relational databases", "Non-relational databases", "SQL", "Azure Blob Storage"] },
      { group: "Process", list: ["Git Flow", "Scrum", "Clean Code", "SOLID", "Azure DevOps", "Office"] },
    ],
    education: [
      { title: "Computer Science", place: "Universidade Paulista – UNIP", note: "Bachelor's level, completed" },
      { title: "IT Technician", place: "ETEC Dr. Emílio Hernandez Aguilar", note: "Technical course, completed (18 months)" },
    ],
    courses: [
      { title: "React do Zero a Maestria", place: "Udemy" },
      { title: "C# Completo: POO + Projetos", place: "Udemy" },
      { title: "Java POO", place: "Curso em Vídeo" },
    ],
  },
};
