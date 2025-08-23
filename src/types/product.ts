export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  howToUse?: string;
  testimonials?: string[];
  faqs?: { question: string; answer: string }[];
  differentials?: string[];
  affiliateLink: string;
  category: 'business' | 'health' | 'beauty' | 'fitness' | 'tech' | 'education';
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Fórmula Negócio Online FNO Alex Vargas',
    slug: 'formula-negocio-online-alex-vargas',
    shortDescription: 'Transforme sua vida financeira com o método que já mudou milhares de vidas',
    fullDescription: 'A Fórmula Negócio Online (FNO) do Alex Vargas é o método mais completo e eficaz para quem deseja criar um negócio digital lucrativo do zero. Com mais de 10 anos de experiência no mercado digital, Alex desenvolveu um sistema passo a passo que já transformou a vida de milhares de pessoas. O curso oferece estratégias práticas e testadas para criar fontes de renda online consistentes, desde a escolha do nicho até a escala do negócio.',
    benefits: [
      'Aprenda a criar seu negócio digital do zero',
      'Sistema passo a passo validado por milhares de alunos',
      'Suporte completo da equipe Alex Vargas',
      'Acesso vitalício ao conteúdo',
      'Comunidade exclusiva de empreendedores',
      'Estratégias de marketing digital avançadas',
      'Templates e ferramentas prontas para usar'
    ],
    howToUse: 'O curso é 100% online e você pode assistir no seu ritmo. Recomendamos dedicar pelo menos 2 horas diárias para aplicar as estratégias ensinadas. O conteúdo está organizado em módulos progressivos.',
    testimonials: [
      'Consegui meu primeiro resultado de R$ 5.000 em apenas 30 dias aplicando a FNO',
      'Saí do zero absoluto para 6 dígitos por ano seguindo o método do Alex',
      'O suporte da equipe é excepcional, sempre prontos para ajudar'
    ],
    faqs: [
      {
        question: 'Preciso ter conhecimento prévio em marketing digital?',
        answer: 'Não! A FNO foi desenvolvida especialmente para iniciantes que querem começar do zero. Todo o conteúdo é explicado de forma didática.'
      },
      {
        question: 'Quanto tempo para ver os primeiros resultados?',
        answer: 'Os primeiros resultados podem aparecer já nas primeiras semanas, mas recomendamos dedicação de pelo menos 3 meses para resultados consistentes.'
      },
      {
        question: 'Tenho garantia se não funcionar?',
        answer: 'Sim, oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.'
      }
    ],
    differentials: [
      'Método único desenvolvido por Alex Vargas com mais de 10 anos de experiência',
      'Mais de 50.000 alunos já transformaram suas vidas',
      'Suporte direto da equipe especializada',
      'Comunidade ativa de empreendedores',
      'Conteúdo sempre atualizado com as últimas tendências'
    ],
    affiliateLink: 'https://go.hotmart.com/E11195793E',
    category: 'business',
    keywords: ['negócio online', 'marketing digital', 'empreendedorismo', 'alex vargas', 'renda extra'],
    metaTitle: 'Fórmula Negócio Online Alex Vargas - Método Completo para Empreender',
    metaDescription: 'Descubra como criar um negócio digital lucrativo com a Fórmula Negócio Online do Alex Vargas. Método testado por mais de 50.000 alunos.'
  },
  {
    id: '2',
    name: 'Carteira Nacional do Estudante Digital',
    slug: 'carteira-nacional-estudante-digital',
    shortDescription: 'Economize até 50% em ingressos com sua carteira de estudante digital',
    fullDescription: 'A Carteira Nacional do Estudante Digital é a solução mais prática e rápida para você ter acesso aos descontos estudantis em todo o Brasil. Com validade nacional e reconhecida em estabelecimentos por todo o país, você pode economizar significativamente em cinema, teatro, shows, transporte e muito mais. O processo é 100% digital e você recebe sua carteira em poucas horas.',
    benefits: [
      'Desconto de até 50% em ingressos de cinema, teatro e eventos',
      'Válida em todo território nacional',
      'Processo 100% digital e rápido',
      'Reconhecida oficialmente por estabelecimentos',
      'Suporte completo para dúvidas',
      'Não tem data de validade',
      'Aceita em universidades e instituições'
    ],
    howToUse: 'Após a compra, você receberá sua carteira digital em até 24 horas no seu email. Basta apresentar no estabelecimento (impresso ou no celular) para garantir o desconto.',
    affiliateLink: 'https://app.monetizze.com.br/r/AWH25502896',
    category: 'education',
    keywords: ['carteira estudante', 'desconto estudante', 'meia entrada', 'economia estudantil'],
    metaTitle: 'Carteira Nacional do Estudante Digital - Descontos em Todo Brasil',
    metaDescription: 'Garanta sua Carteira Nacional do Estudante Digital e economize até 50% em ingressos. Válida em todo o Brasil, processo 100% online e rápido.'
  },
  {
    id: '3',
    name: 'Carteira Nacional do Estudante Física e Digital',
    slug: 'carteira-estudante-fisica-digital',
    shortDescription: 'Versão completa: carteira física + digital para máxima praticidade',
    fullDescription: 'A versão mais completa da Carteira Nacional do Estudante, incluindo tanto a versão física quanto digital. Tenha sempre em mãos sua identificação estudantil e nunca perca a oportunidade de economizar. A carteira física é enviada pelos Correios com segurança, enquanto a digital fica disponível imediatamente.',
    benefits: [
      'Carteira física e digital incluídas no mesmo produto',
      'Desconto de até 50% em diversos estabelecimentos',
      'Maior praticidade e segurança com duas opções',
      'Aceita em todo território nacional',
      'Entrega rápida da versão física pelos Correios',
      'Backup digital caso perca a física',
      'Material de alta qualidade e durabilidade'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AEG25503067',
    category: 'education',
    keywords: ['carteira estudante completa', 'física digital', 'desconto estudante', 'meia entrada'],
    metaTitle: 'Carteira Estudante Física e Digital - Versão Completa com Descontos',
    metaDescription: 'Adquira sua Carteira Nacional do Estudante nas versões física e digital. Economize em ingressos com a praticidade que você precisa.'
  },
  {
    id: '4',
    name: 'Lovable - Plataforma de IA para Desenvolvimento',
    slug: 'lovable-plataforma-ai-desenvolvimento',
    shortDescription: 'Crie aplicações web com inteligência artificial de forma automatizada',
    fullDescription: 'A Lovable é uma plataforma revolucionária de inteligência artificial criada em 2023 por Anton Osika e Fabian Hedin. Permite a criação automatizada de aplicações web complexas usando apenas comandos de texto. É ideal para desenvolvedores, empreendedores e empresas que querem acelerar o desenvolvimento de projetos digitais.',
    benefits: [
      'Desenvolvimento de aplicações web com IA',
      'Interface intuitiva e fácil de usar',
      'Economize tempo e recursos de desenvolvimento',
      'Tecnologia de ponta em IA generativa',
      'Suporte completo da plataforma',
      'Ideal para prototipagem rápida',
      'Reduz custos de desenvolvimento em até 80%'
    ],
    affiliateLink: 'https://lovable.dev/invite/04d3a1d5-ac6c-4590-be24-e12e5e711a61',
    category: 'tech',
    keywords: ['inteligência artificial', 'desenvolvimento web', 'automação', 'programação', 'IA'],
    metaTitle: 'Lovable - Plataforma de IA para Desenvolvimento Web Automatizado',
    metaDescription: 'Descubra a Lovable, plataforma de IA que revoluciona o desenvolvimento web. Crie aplicações complexas de forma automatizada e eficiente.'
  },
  {
    id: '5',
    name: 'Agênciagram - Seguidores no Instagram',
    slug: 'agenciagram-seguidores-instagram',
    shortDescription: 'Aumente seus seguidores no Instagram com estratégias profissionais',
    fullDescription: 'O Agênciagram é a solução completa para quem deseja crescer no Instagram de forma orgânica e sustentável. Com estratégias testadas e aprovadas por profissionais do marketing digital, você aprenderá técnicas avançadas para aumentar seguidores, engajamento e conversões na maior rede social do mundo.',
    benefits: [
      'Crescimento orgânico e sustentável no Instagram',
      'Estratégias profissionais de marketing digital',
      'Aumento real do engajamento com o público',
      'Suporte especializado em redes sociais',
      'Resultados comprovados por milhares de usuários',
      'Técnicas para monetizar seu perfil',
      'Templates e scripts prontos para usar'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/ALZ12471991',
    category: 'business',
    keywords: ['instagram', 'seguidores', 'marketing digital', 'redes sociais', 'engajamento'],
    metaTitle: 'Agênciagram - Como Aumentar Seguidores no Instagram Organicamente',
    metaDescription: 'Aprenda as estratégias profissionais para crescer no Instagram. Aumente seus seguidores e engajamento com métodos comprovados e orgânicos.'
  },
  {
    id: '6',
    name: 'Mounja Slim - Perda de Peso Saudável',
    slug: 'mounja-slim-perda-peso-saudavel',
    shortDescription: 'O segredo para perda de peso rápida e saudável que realmente funciona',
    fullDescription: 'Mounja Slim representa uma revolução no mundo da perda de peso. Desenvolvido com base em pesquisas científicas avançadas, oferece uma abordagem natural e eficaz para emagrecer de forma saudável, sem comprometer sua saúde ou bem-estar.',
    benefits: [
      'Perda de peso rápida e saudável',
      'Fórmula 100% natural sem efeitos colaterais',
      'Resultados cientificamente comprovados',
      'Acelera o metabolismo naturalmente',
      'Aprovado por especialistas em nutrição',
      'Controla a ansiedade por comida',
      'Melhora a disposição e energia'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AJZ25504136',
    category: 'health',
    keywords: ['emagrecimento', 'perda de peso', 'natural', 'saudável', 'mounja slim'],
    metaTitle: 'Mounja Slim - Perda de Peso Natural e Saudável que Funciona',
    metaDescription: 'Descubra o Mounja Slim, a solução natural para perda de peso rápida e saudável. Fórmula científica sem efeitos colaterais.'
  },
  {
    id: '7',
    name: 'Hidraliso - Alisante de Chuveiro',
    slug: 'hidraliso-alisante-chuveiro',
    shortDescription: 'Cabelos lisos em minutos, sem formol, sem ardência e sem cheiro',
    fullDescription: 'O Hidraliso é a revolução no alisamento capilar. Um produto inovador que proporciona cabelos lisos e hidratados na primeira aplicação, sem os riscos dos alisantes tradicionais. Sua fórmula exclusiva garante resultados profissionais no conforto da sua casa.',
    benefits: [
      'Liso em minutos, simples e prático',
      'Sem formol, sem ardência e sem cheiro',
      'Cabelos lisos e hidratados na primeira aplicação',
      'Não desbota nem amarela os fios',
      'Compatível com qualquer química anterior',
      'Para toda cor e tipo de cabelo',
      'Economia com efeito prolongado de até 3 meses'
    ],
    howToUse: 'Aplique nos cabelos úmidos após a lavagem, massageie suavemente e deixe agir por 3-5 minutos. Enxágue abundantemente e finalize como desejar.',
    affiliateLink: 'https://app.monetizze.com.br/r/AWW11504208',
    category: 'beauty',
    keywords: ['alisante', 'cabelo liso', 'hidratação', 'sem formol', 'beleza'],
    metaTitle: 'Hidraliso - Alisante de Chuveiro Sem Formol para Cabelos Lisos',
    metaDescription: 'Transforme seus cabelos com Hidraliso, o alisante de chuveiro sem formol. Cabelos lisos, hidratados e sem danos em minutos.'
  },
  {
    id: '8',
    name: 'Nutra Vida - Suplemento para Engravidar',
    slug: 'nutra-vida-suplemento-engravidar',
    shortDescription: '2 cápsulas ao dia para aumentar as chances de engravidar naturalmente',
    fullDescription: 'Nutra Vida é um suplemento especialmente desenvolvido para mulheres que desejam engravidar. Testado e aprovado por especialistas, ajuda em diversos casos de infertilidade e desequilíbrios hormonais, oferecendo esperança e resultados para quem sonha em ser mãe.',
    benefits: [
      'Indicado para mulheres com laqueaduras',
      'Eficaz em casos de ovários policísticos',
      'Auxilia em casos de endometriose',
      'Ajuda a reduzir miomas uterinos',
      'Desobstrui trompas naturalmente',
      'Regula menstruação irregular',
      'Equilibra hormônios naturalmente',
      'Previne abortos recorrentes'
    ],
    howToUse: 'Tome 2 cápsulas ao dia, preferencialmente pela manhã, com um copo de água. Recomenda-se uso contínuo por pelo menos 3 meses.',
    affiliateLink: 'https://app.monetizze.com.br/r/AXC25503421',
    category: 'health',
    keywords: ['engravidar', 'fertilidade', 'suplemento', 'gravidez', 'maternidade'],
    metaTitle: 'Nutra Vida - Suplemento Natural para Aumentar Fertilidade',
    metaDescription: 'Nutra Vida é o suplemento natural que ajuda mulheres a engravidar. Eficaz para diversos casos de infertilidade e desequilíbrios hormonais.'
  },
  {
    id: '9',
    name: 'Fignar - Saúde do Fígado',
    slug: 'fignar-saude-figado',
    shortDescription: 'Melhore a saúde do seu fígado com apenas 20 gotas diárias',
    fullDescription: 'Fignar é um suplemento natural desenvolvido especificamente para melhorar e manter a saúde do fígado. Com fórmula concentrada e altamente eficaz, apenas 20 gotas por dia são suficientes para obter resultados significativos na função hepática.',
    benefits: [
      'Melhora a função hepática naturalmente',
      'Desintoxica o fígado de forma eficaz',
      'Apenas 20 gotas por dia',
      'Fórmula 100% natural concentrada',
      'Resultados rápidos e duradouros',
      'Protege contra danos hepáticos',
      'Melhora a digestão e metabolismo'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/APP25503419',
    category: 'health',
    keywords: ['fígado', 'desintoxicação', 'saúde hepática', 'natural', 'suplemento'],
    metaTitle: 'Fignar - Suplemento Natural para Saúde do Fígado',
    metaDescription: 'Cuide da saúde do seu fígado com Fignar. Apenas 20 gotas diárias para desintoxicar e melhorar a função hepática naturalmente.'
  },
  {
    id: '10',
    name: 'SB2 Black - Transformação Corporal',
    slug: 'sb2-black-transformacao-corporal',
    shortDescription: 'Transforme seu corpo neste verão e entre em forma com SB2 Black',
    fullDescription: 'SB2 Black é o suplemento mais potente para transformação corporal. Desenvolvido com tecnologia avançada para acelerar a queima de gordura e definir músculos rapidamente, é a escolha ideal para quem quer resultados rápidos e duradouros.',
    benefits: [
      'Aceleração do metabolismo em até 300%',
      'Queima de gordura intensificada',
      'Definição muscular rápida e eficaz',
      'Mais energia e disposição para treinar',
      'Resultados visíveis em poucas semanas',
      'Reduz a retenção de líquidos',
      'Controla o apetite naturalmente'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/ASS25503415',
    category: 'fitness',
    keywords: ['transformação corporal', 'queima gordura', 'definição muscular', 'verão', 'fitness'],
    metaTitle: 'SB2 Black - Transformação Corporal Rápida para o Verão',
    metaDescription: 'Transforme seu corpo com SB2 Black. O suplemento mais potente para queimar gordura e definir músculos rapidamente para o verão.'
  },
  {
    id: '11',
    name: 'New Detox - Emagrecimento Natural',
    slug: 'new-detox-emagrecimento-natural',
    shortDescription: 'Emagreça com saúde de forma natural sem gastar uma fortuna',
    fullDescription: 'O método NEW DETOX está mudando a vida de milhares de pessoas que desejam emagrecer de forma natural e saudável. Uma abordagem revolucionária que combina desintoxicação e emagrecimento em um só método.',
    benefits: [
      'Emagrecimento natural e saudável',
      'Desintoxicação completa do organismo',
      'Método testado por milhares de pessoas',
      'Resultados duradouros',
      'Sem efeitos colaterais',
      'Melhora da disposição e energia'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/ALW20871672',
    category: 'health',
    keywords: ['detox', 'emagrecimento', 'natural', 'desintoxicação'],
    metaTitle: 'New Detox - Método Natural de Emagrecimento e Desintoxicação',
    metaDescription: 'Descubra o New Detox, método natural que une emagrecimento e desintoxicação. Transforme sua vida de forma saudável e duradoura.'
  },
  {
    id: '12',
    name: 'Slim Gota Black - Elimine Gordura Teimosa',
    slug: 'slim-gota-black-elimina-gordura-teimosa',
    shortDescription: 'Descubra o poder revolucionário que elimina gordura teimosa em gotas',
    fullDescription: 'Slim Gota Black é o tratamento revolucionário em gotas que finalmente vai acabar com sua gordura teimosa. Desenvolvido com tecnologia avançada para resultados rápidos e eficazes.',
    benefits: [
      'Elimina gordura teimosa rapidamente',
      'Fórmula revolucionária em gotas',
      'Resultados visíveis em poucos dias',
      'Acelera o metabolismo',
      'Controla a ansiedade por comida',
      'Fácil de usar'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AUZ21258214',
    category: 'health',
    keywords: ['gordura teimosa', 'emagrecimento', 'gotas', 'slim'],
    metaTitle: 'Slim Gota Black - Elimine Gordura Teimosa com Tratamento Revolucionário',
    metaDescription: 'Acabe com a gordura teimosa usando Slim Gota Black. Tratamento revolucionário em gotas para resultados rápidos e eficazes.'
  },
  {
    id: '13',
    name: 'Kit Restart Intestinal - Desintoxicação Total',
    slug: 'kit-restart-intestinal-desintoxicacao',
    shortDescription: 'Comece sua jornada de desintoxicação e renascimento intestinal',
    fullDescription: 'O Kit Restart Intestinal é o segredo para uma vida livre de inflamações. Um sistema completo de desintoxicação que vai renovar seu intestino e transformar sua saúde de dentro para fora.',
    benefits: [
      'Desintoxicação completa do intestino',
      'Vida livre de inflamações',
      'Melhora da digestão',
      'Aumento da imunidade',
      'Mais energia e disposição',
      'Kit completo para resultados rápidos'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/ACN25503403',
    category: 'health',
    keywords: ['desintoxicação', 'intestino', 'inflamação', 'saúde'],
    metaTitle: 'Kit Restart Intestinal - Desintoxicação Completa e Vida Sem Inflamações',
    metaDescription: 'Transforme sua saúde com Kit Restart Intestinal. Desintoxicação completa para uma vida livre de inflamações e problemas digestivos.'
  },
  {
    id: '14',
    name: 'Super Green Black - Corpo e Mente Poderosos',
    slug: 'super-green-black-corpo-mente-poderosos',
    shortDescription: 'O segredo para um corpo e mente 10x mais poderosos',
    fullDescription: 'Super Green Black vai muito além do emagrecimento! Sua fórmula avançada impulsiona seu corpo e mente, proporcionando benefícios incríveis para uma vida plena e saudável.',
    benefits: [
      'Corpo e mente 10x mais poderosos',
      'Muito além do emagrecimento',
      'Fórmula avançada única',
      'Melhora da capacidade mental',
      'Aumento da energia física',
      'Resultados em múltiplas áreas da vida'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/ASY18248645',
    category: 'health',
    keywords: ['super green', 'energia', 'mente', 'corpo', 'poder'],
    metaTitle: 'Super Green Black - Potencialize Corpo e Mente 10x Mais',
    metaDescription: 'Descubra Super Green Black, a fórmula que vai além do emagrecimento. Potencialize seu corpo e mente para uma vida mais poderosa.'
  },
  {
    id: '15',
    name: 'Clareador Nutralfit - Elimine Manchas da Pele',
    slug: 'clareador-nutralfit-elimina-manchas',
    shortDescription: 'Acabe de vez com as manchas escuras da sua pele',
    fullDescription: 'O Clareador Nutralfit é a solução revolucionária para eliminar manchas escuras da pele. Com tecnologia avançada, proporciona uma pele uniforme e radiante.',
    benefits: [
      'Elimina manchas escuras definitivamente',
      'Clareamento revolucionário',
      'Pele uniforme e radiante',
      'Tecnologia avançada',
      'Resultados rápidos e duradouros',
      'Seguro para todos os tipos de pele'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AJX25503066',
    category: 'beauty',
    keywords: ['clareador', 'manchas', 'pele', 'beleza', 'nutralfit'],
    metaTitle: 'Clareador Nutralfit - Elimine Manchas Escuras da Pele Definitivamente',
    metaDescription: 'Acabe com manchas escuras usando Clareador Nutralfit. Solução revolucionária para uma pele uniforme e radiante.'
  },
  {
    id: '16',
    name: 'Inibe One - Emagrecimento Eficaz',
    slug: 'inibe-one-emagrecimento-eficaz',
    shortDescription: 'Perca peso, ganhe confiança e qualidade de vida',
    fullDescription: 'Se você ainda não está confortável com seu corpo, o Inibe One é a solução que você precisa. Conquiste o corpo dos seus sonhos e a qualidade de vida que você merece.',
    benefits: [
      'Perda de peso eficaz',
      'Ganho de confiança',
      'Melhora da qualidade de vida',
      'Até 30% de desconto + frete grátis',
      'Resultados comprovados',
      'Suporte completo'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/APZ25502897',
    category: 'health',
    keywords: ['emagrecimento', 'confiança', 'qualidade de vida', 'inibe'],
    metaTitle: 'Inibe One - Emagrecimento Eficaz para Ganhar Confiança',
    metaDescription: 'Transforme seu corpo com Inibe One. Emagrecimento eficaz para ganhar confiança e melhorar sua qualidade de vida.'
  },
  {
    id: '17',
    name: 'OzenVitta - Emagrecimento Natural',
    slug: 'ozenvita-emagrecimento-natural',
    shortDescription: 'Fórmula avançada com Inulina e L-Carnitina para emagrecer',
    fullDescription: 'OzenVitta oferece uma fórmula avançada que combina Inulina e L-Carnitina, elevando seu metabolismo e saciedade. Quer perder peso de forma natural e segura, conquistando mais energia e confiança?',
    benefits: [
      'Fórmula avançada com Inulina e L-Carnitina',
      'Eleva metabolismo e saciedade',
      'Emagrecimento natural e seguro',
      'Mais energia e confiança',
      'Qualidade de vida que você precisa',
      'Resultados sustentáveis'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AKA25502741',
    category: 'health',
    keywords: ['ozenvita', 'inulina', 'l-carnitina', 'metabolismo', 'emagrecimento'],
    metaTitle: 'OzenVitta - Emagrecimento Natural com Inulina e L-Carnitina',
    metaDescription: 'Emagreça naturalmente com OzenVitta. Fórmula avançada com Inulina e L-Carnitina para acelerar metabolismo e conquistar confiança.'
  },
  {
    id: '18',
    name: 'Mounjax - Gotas Queima Gordura',
    slug: 'mounjax-gotas-queima-gordura',
    shortDescription: 'Gotinhas revolucionárias que auxiliam na queima de gordura',
    fullDescription: 'Chega de evitar fotos ou se esconder em roupas largas. Com Mounjax, emagreça de forma saudável e recupere a alegria de viver! Gotas revolucionárias para transformar sua vida.',
    benefits: [
      'Gotas que auxiliam queima de gordura',
      'Emagrecimento saudável',
      'Recupera alegria de viver',
      'Pare de se esconder',
      'Resultados rápidos',
      'Fácil de usar'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AYR25502743',
    category: 'health',
    keywords: ['mounjax', 'gotas', 'queima gordura', 'emagrecimento'],
    metaTitle: 'Mounjax - Gotas Revolucionárias para Queimar Gordura',
    metaDescription: 'Pare de se esconder! Mounjax oferece gotas revolucionárias que auxiliam na queima de gordura para emagrecer com saúde.'
  },
  {
    id: '19',
    name: 'Kit S.O.S Crescimento Capilar',
    slug: 'kit-sos-crescimento-capilar',
    shortDescription: 'Kit nº 1 mais potente em crescimento e combate à queda capilar',
    fullDescription: 'Descubra o kit Nº 1 mais potente em crescimento e no combate a queda capilar! Uma solução completa para recuperar a densidade e vitalidade dos seus cabelos.',
    benefits: [
      'Kit nº 1 em crescimento capilar',
      'Combate eficaz à queda',
      'Aumenta densidade capilar',
      'Recupera vitalidade dos fios',
      'Resultados comprovados',
      'Kit completo para máximos resultados'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/ACS21486499',
    category: 'beauty',
    keywords: ['crescimento capilar', 'queda cabelo', 'densidade', 'kit'],
    metaTitle: 'Kit S.O.S Crescimento Capilar - Combate Queda e Acelera Crescimento',
    metaDescription: 'Kit nº 1 em crescimento capilar. Combate a queda e acelera o crescimento para cabelos mais densos e saudáveis.'
  },
  {
    id: '20',
    name: 'Diuriefit Black - Pó Emagrecedor',
    slug: 'diuriefit-black-po-emagrecedor',
    shortDescription: 'Pó emagrecedor 10x mais eficaz com sabor de laranja',
    fullDescription: 'O DiurieFit Black é diferente de tudo que existe no mercado. O que levaria 30 dias, agora você terá resultados nos primeiros 6 dias de uso. Revolução no emagrecimento!',
    benefits: [
      'Pó emagrecedor 10x mais eficaz',
      'Sabor delicioso de laranja',
      'Resultados em apenas 6 dias',
      'Diferente de tudo no mercado',
      'Tecnologia revolucionária',
      'Fácil preparo e consumo'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/APB25502772',
    category: 'health',
    keywords: ['diuriefit', 'pó emagrecedor', 'laranja', 'rápido'],
    metaTitle: 'Diuriefit Black - Pó Emagrecedor 10x Mais Eficaz Sabor Laranja',
    metaDescription: 'Revolucione seu emagrecimento com Diuriefit Black. Pó 10x mais eficaz com sabor de laranja e resultados em 6 dias.'
  },
  {
    id: '21',
    name: 'Lift Detox Black - Emagrecimento Acelerado',
    slug: 'lift-detox-black-emagrecimento-acelerado',
    shortDescription: 'Sistema completo que te faz emagrecer muito mais rápido',
    fullDescription: 'LIFT DETOX BLACK reúne todos os ingredientes na medida certa com tecnologia avançada. Você não precisará preparar receitas complicadas - tudo pronto em 2 cápsulas por dia.',
    benefits: [
      'Ingredientes na medida certa',
      'Tecnologia avançada comprovada',
      'Emagrecimento muito mais rápido',
      'Apenas 2 cápsulas por dia',
      'Sem receitas complicadas',
      'Resultados em poucas semanas'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AQB15367580',
    category: 'health',
    keywords: ['lift detox', 'emagrecimento', 'acelerado', 'cápsulas'],
    metaTitle: 'Lift Detox Black - Emagrecimento Acelerado com Tecnologia Avançada',
    metaDescription: 'Emagreça mais rápido com Lift Detox Black. Tecnologia avançada em 2 cápsulas diárias para resultados extraordinários.'
  },
  {
    id: '22',
    name: 'SB2 Turbo - Suplemento Exclusivo',
    slug: 'sb2-turbo-suplemento-exclusivo',
    shortDescription: 'O suplemento que funciona quando todos os outros falharam',
    fullDescription: 'Desenvolvido exclusivamente para pessoas que já gastaram milhares em produtos que não funcionaram. Acesso limitado a apenas 500 pessoas por mês. Não é para qualquer pessoa.',
    benefits: [
      'Para quem já tentou tudo',
      'Funciona quando outros falharam',
      'Acesso limitado - 500 pessoas/mês',
      'Desenvolvido para casos difíceis',
      'Exclusivo e diferenciado',
      'Resultados onde outros não conseguiram'
    ],
    affiliateLink: 'https://app.monetizze.com.br/r/AXC11504216',
    category: 'health',
    keywords: ['sb2 turbo', 'exclusivo', 'limitado', 'difícil'],
    metaTitle: 'SB2 Turbo - Suplemento Exclusivo para Casos Difíceis',
    metaDescription: 'SB2 Turbo funciona quando outros falharam. Suplemento exclusivo para quem já tentou tudo, acesso limitado a 500 pessoas.'
  },
  {
    id: '23',
    name: 'Replit - Criação de Códigos SaaS',
    slug: 'replit-criacao-codigos-saas',
    shortDescription: 'Crie códigos de SaaS e aplicativos em segundos',
    fullDescription: 'Replit é a plataforma revolucionária que permite criar códigos de SaaS e aplicativos em segundos. Ideal para desenvolvedores e empreendedores que querem agilidade.',
    benefits: [
      'Criação de códigos em segundos',
      'Desenvolvimento de SaaS rápido',
      'Aplicativos profissionais',
      'Interface intuitiva',
      'Economia de tempo',
      'Ideal para empreendedores'
    ],
    affiliateLink: 'https://replit.com/refer/rodobens24horas',
    category: 'tech',
    keywords: ['replit', 'saas', 'aplicativos', 'código', 'desenvolvimento'],
    metaTitle: 'Replit - Crie Códigos de SaaS e Aplicativos em Segundos',
    metaDescription: 'Desenvolva SaaS e aplicativos rapidamente com Replit. Plataforma revolucionária para criar códigos profissionais em segundos.'
  },
  {
    id: '24',
    name: 'Natflix Fitness - Vida em Movimento',
    slug: 'natflix-fitness-vida-movimento',
    shortDescription: 'Vida em movimento com saúde e atividade física',
    fullDescription: 'Natflix Fitness é sua plataforma completa para uma vida em movimento. Programas de saúde e atividade física para transformar seu estilo de vida.',
    benefits: [
      'Vida em movimento ativa',
      'Programas de saúde completos',
      'Atividades físicas variadas',
      'Estilo de vida saudável',
      'Motivação constante',
      'Resultados duradouros'
    ],
    affiliateLink: 'https://go.hotmart.com/X70943392V',
    category: 'fitness',
    keywords: ['natflix', 'fitness', 'saúde', 'atividade física', 'movimento'],
    metaTitle: 'Natflix Fitness - Plataforma Completa de Saúde e Atividade Física',
    metaDescription: 'Transforme sua vida com Natflix Fitness. Plataforma completa de saúde e atividade física para uma vida em movimento.'
  }
];