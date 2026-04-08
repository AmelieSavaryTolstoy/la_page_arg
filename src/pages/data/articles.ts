export interface TextBlock {
    type: 'paragraph';
    content: string;
}

export interface QuoteBlock {
    type: 'quote';
    content: string;
}

export interface ImageBlock {
    type: 'image';
    src: string;
    caption?: string;
}

export interface ImageGalleryBlock {
    type: 'gallery';
    images: { src: string; caption?: string }[];
}

export interface ImageTextBlock {
    type: 'image-text';
    src: string;
    caption?: string;
    text: string;
    imageLeft?: boolean;
}

export type ContentBlock =
    | TextBlock
    | QuoteBlock
    | ImageBlock
    | ImageGalleryBlock
    | ImageTextBlock;

export interface Article {
    id: number;
    title: string;
    category: string;
    excerpt: string;
    content: ContentBlock[];
    top_articles: boolean,
    featured: boolean;
    weekly: boolean;
    image: string;
    alt: string;
    tags: string[];
    date: string;
    author: string;
}

export const articles: Article[] = [
    {
        id: 1,
        title: 'La tragédie menée par la secte “Les enfants de la Liberté” mise au grand jour.',
        category: "Fait divers",
        excerpt: "Un suicide collectif réalisé par l’organisation sectaire “Les enfants de la Liberté” affiche un bilan de 110 morts par empoisonnement. De nombreux moyens sont mis en place pour identifier les victimes.",
        content: [
            {
                type: 'paragraph',
                content: "Les Enfants de la Liberté, fondé en 2010 par Raoult Bobinsky, était un mouvement utopique prônant des croyances d’une alternative expérimentale à la guérison de la dépression. Le groupe se distinguait par l'utilisation de la technologie numérique pour diffuser ses croyances auprès d'un public plus large et pour générer des revenus, promettant à ses adeptes un avenir heureux et l'ascension de leur esprit. En 2012, Raoult a convaincu quelque 30 adeptes de se rendre en Centre-Val de Loire, dans un petit village non loin de Châteauroux. C’est grâce aux réseaux que le nombre de personnes atteint rapidement la centaine."
            },
            {
                type: 'paragraph',
                content: "Les membres du temple ont été largement attirés par le discours séduisant de Raoult. Cette fascination s'est rapidement transformée en loyauté, puis en fanatisme. Et cela s'est terminé par de l'idolâtrie."
            },
            {
                type: 'paragraph',
                content: "Le 6 mai 2014, la police a découvert les corps de 110 personnes allongées. Les enquêteurs sur place posent un premier diagnostique : un empoisonnement par liquide de refroidissement. Une tragédie qui laisse beaucoup de famille endeuillée. Un proche d’une des victimes témoigne :"
            },
            {
                type: 'quote',
                content: ' “Elle était intelligente, belle, rayonnante, brillante. Elle allait commencer un master en arts. Aujourd’hui il ne nous reste que son souvenir et l’idée de ce qu’elle aurait pu devenir. Tellement de questions, de pourquoi, de comment…et on doit vivre avec, parce que notre fille ne rentrera pas à la maison”.'
            },
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "",
        alt: 'logo de la secte "Les enfants de la Liberté"',
        tags: ["Secte", "Suicide", "Raoult Bobinsky", "Châteauroux"],
        date: "8 mai 2014",
        author: "M.Dubois"
    },
    {
        id: 2,
        title: "Des étudiants imaginent les logements de demain à Versailles",
        category: "Environnement",
        excerpt: "Une compétition internationale pour repenser l’habitat grâce à l’énergie solaire.",
        content: [
            {
                type: 'paragraph',
                content: "À Versailles, un événement d’envergure internationale a rassemblé des centaines d’étudiants venus du monde entier autour d’un défi commun : concevoir et construire des habitations innovantes fonctionnant uniquement grâce à l’énergie solaire. Pendant plusieurs semaines, une vingtaine d’équipes issues de différents pays ont présenté leurs prototypes à taille réelle, transformant le site en véritable laboratoire du futur."
            },
            {
                type: 'paragraph',
                content: "Ces projets, développés pendant près de deux ans, ne se limitent pas à de simples concepts. Chaque maison est pensée pour être habitable, performante et respectueuse de l’environnement. Les participants doivent ainsi relever de nombreux défis, allant de la conception architecturale à l’efficacité énergétique, en passant par le confort ou encore le coût de construction."
            },
            {
                type: 'paragraph',
                content: "Au-delà de la compétition, l’événement met en lumière de nouvelles façons d’imaginer la ville de demain. Certains projets s’attaquent à la rénovation de bâtiments existants, d’autres proposent des solutions adaptées aux zones urbaines denses ou aux régions exposées à des risques naturels. Chaque équipe apporte ainsi une réponse concrète aux enjeux spécifiques de son pays."
            },
            {
                type: 'paragraph',
                content: "En réunissant innovation, collaboration et préoccupations écologiques, cette manifestation illustre l’évolution du secteur du bâtiment vers des modèles plus durables. Elle montre surtout que les futures générations d’architectes et d’ingénieurs sont déjà à l’œuvre pour inventer des habitats plus responsables et mieux adaptés aux défis environnementaux actuels."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_2.jpg",
        alt: "Maison dans une forêt",
        tags: ["Étudiant", "Énergie solaire", "Logement", "Versailles"],
        date: "26 juin 2014",
        author: "L.Morel"
    },
    {
        id: 3,
        title: "Le concombre de mer, nouvelle cible de la pêche illégale dans l’océan Indien.",
        category: "Environnement",
        excerpt: "Très prisé en Asie, cet animal marin alimente un trafic en pleine expansion.",
        content: [
            {
                type: 'paragraph',
                content: "Peu connu du grand public, le concombre de mer est pourtant devenu une ressource extrêmement convoitée. Dans l’océan Indien, notamment autour de Madagascar et des îles voisines, cet animal marin fait aujourd’hui l’objet d’une pêche intensive, souvent illégale, destinée à alimenter les marchés asiatiques où il est considéré comme un mets de luxe."
            },
            {
                type: 'paragraph',
                content: "Derrière son apparence peu attrayante, cette espèce joue pourtant un rôle essentiel dans l’écosystème marin. En se nourrissant de sédiments et de matières organiques, elle contribue à maintenir l’équilibre des fonds marins et participe à leur oxygénation. Pourtant, la forte demande internationale a fait exploser les prix, atteignant parfois plusieurs centaines, voire plus de mille dollars le kilo pour certaines variétés."
            },
            {
                type: 'paragraph',
                content: "Cette rentabilité attire de nombreux pêcheurs, mais aussi des réseaux illégaux qui opèrent dans des zones protégées ou difficiles à surveiller. Dans certaines régions, cette exploitation incontrôlée menace directement les populations de concombres de mer, déjà en diminution."
            },
            {
                type: 'paragraph',
                content: "Au-delà de l’impact environnemental, cette situation met également en difficulté les économies locales, où les ressources s’épuisent rapidement. Face à cette pression croissante, les autorités tentent de renforcer les contrôles, mais la lutte reste complexe face à un marché international très lucratif."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_3.jpg",
        alt: "Bateau de pêche sur l'eau",
        tags: ["Illégale", "Océan Indien", "Concombre de mer"],
        date: "25 juillet 2014",
        author: "C.Renaud"
    },
    {
        id: 4,
        title: "Débarquement de Provence : un hommage appuyé aux soldats venus d’Afrique.",
        category: "Guerre",
        excerpt: "Soixante-dix ans après, la France met en lumière le rôle essentiel de l’armée d’Afrique.",
        content: [
            {
                type: 'paragraph',
                content: "À l’occasion du 70e anniversaire du débarquement de Provence, la France rend hommage à des combattants longtemps restés dans l’ombre : les soldats de l’armée d’Afrique. Venus du Maghreb et d’Afrique subsaharienne, ils ont joué un rôle déterminant dans cette opération militaire lancée en août 1944 pour libérer le sud du pays."
            },
            {
                type: 'paragraph',
                content: "Lors de cérémonies organisées dans le Var et à Paris, plusieurs anciens combattants ont été décorés pour leur engagement. De moins en moins nombreux avec le temps, ces vétérans sont revenus sur des lieux chargés de mémoire pour rappeler leur participation à un épisode majeur de la Seconde Guerre mondiale."
            },
            {
                type: 'paragraph',
                content: "Le débarquement de Provence, complémentaire de celui de Normandie, a mobilisé des centaines de milliers de soldats alliés, dont une grande proportion de Français issus de l’armée d’Afrique. Cette force, composée à la fois de soldats européens d’Afrique du Nord et de troupes locales, a largement contribué à la reconquête du territoire et à la progression des Alliés vers l’intérieur du pays."
            },
            {
                type: 'paragraph',
                content: "Aujourd’hui, ces commémorations permettent de rappeler l’importance de cette armée dans la libération de la France. Elles soulignent également les liens historiques tissés entre la France et les pays africains, forgés dans les combats et les sacrifices partagés durant la guerre."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_4.jpg",
        alt: "Bord de mer près des falaises en provence",
        tags: ["Soldat", "Provence", "Afrique", "Débarquement"],
        date: "14 août 2014",
        author: "J.Caron"
    },
    {
        id: 5,
        title: "Pauline Ferrand-Prévot sacrée championne du monde à seulement 22 ans.",
        category: "Sport",
        excerpt: "Une victoire historique pour le cyclisme français près de vingt ans après Jeannie Longo.",
        content: [
            {
                type: 'paragraph',
                content: "La Française Pauline Ferrand-Prévot a marqué l’histoire du cyclisme en décrochant le titre de championne du monde sur route lors des Mondiaux disputés à Ponferrada, en Espagne. À seulement 22 ans, elle devient la première Française à remporter ce titre depuis Jeannie Longo en 1995, mettant fin à près de deux décennies d’attente."
            },
            {
                type: 'paragraph',
                content: "Au terme d’une course très disputée, la jeune cycliste s’est imposée au sprint face à plusieurs favorites, confirmant son statut de grande espoir du cyclisme international. Pourtant, rien n’était gagné d’avance. Victime d’une chute quelques jours plus tôt, elle a dû composer avec la douleur tout au long de l’épreuve. Malgré ces difficultés, elle a su rester au contact avant de faire la différence dans les derniers mètres."
            },
            {
                type: 'paragraph',
                content: "Après l’arrivée, l’émotion était encore palpable. Cette victoire vient récompenser une saison déjà impressionnante et confirme son talent dans plusieurs disciplines du cyclisme."
            },
            {
                type: 'paragraph',
                content: "Ce sacre marque également un tournant pour le sport féminin en France. En s’imposant face aux meilleures mondiales, Pauline Ferrand-Prévot ouvre la voie à une nouvelle génération de cyclistes et rappelle que la relève du cyclisme français est bel et bien assurée."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_5.jpg",
        alt: "4 femmes cyclistes en train de pédaler sur leur vélo",
        tags: ["Championne", "Cyclisme", "France", "Pauline Ferrand-Prévot"],
        date: "27 septembre 2014",
        author: "M.Lefèvre"
    },
    {
        id: 6,
        title: "Des débuts en Bourse mitigés pour Zalando.",
        category: "Économie",
        excerpt: "Malgré de fortes attentes, l’introduction du géant de la mode en ligne laisse les investisseurs prudents.",
        content: [
            {
                type: 'paragraph',
                content: "L’arrivée de Zalando à la Bourse de Francfort était très attendue, présentée comme l’une des plus importantes introductions du secteur technologique en Europe. Le groupe allemand, spécialisé dans la vente de vêtements et de chaussures en ligne, a fixé son prix d’introduction autour de 21,50 euros par action, avec l’objectif de lever plus de 600 millions d’euros et de soutenir sa croissance."
            },
            {
                type: 'paragraph',
                content: "Lors de ses premiers échanges, l’action a pourtant connu un démarrage en demi-teinte. Après une hausse initiale qui a brièvement porté le titre au-dessus des 24 euros, l’enthousiasme est rapidement retombé. En fin de séance, le cours est revenu à son niveau de départ, traduisant les hésitations du marché face au modèle économique de l’entreprise."
            },
            {
                type: 'paragraph',
                content: "Cette prudence s’explique notamment par les interrogations sur la rentabilité du groupe. Malgré une croissance rapide et une présence dans plusieurs pays européens, l’entreprise doit encore convaincre qu’elle peut générer des profits durables."
            },
            {
                type: 'paragraph',
                content: "Si cette introduction en Bourse reste une étape importante pour Zalando, elle illustre aussi les attentes élevées des investisseurs envers les entreprises du numérique. Entre promesses de croissance et exigences de rentabilité, le groupe devra désormais faire ses preuves pour s’imposer durablement sur les marchés financiers."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_6.jpg",
        alt: "Écran de statistiques de bourse",
        tags: ["Bourse", "Zalando", "Économie", "Mode en ligne"],
        date: "01 octobre 2014",
        author: "T.Girard"
    },
    {
        id: 7,
        title: "Graver son initiale sur le Colisée peut coûter très cher.",
        category: "Fait divers",
        excerpt: "Un touriste sanctionné après avoir dégradé le célèbre monument de Rome.",
        content: [
            {
                type: 'paragraph',
                content: "Un geste qui peut sembler anodin a eu de lourdes conséquences pour un touriste en visite à Rome. Un homme d’une quarantaine d’années a été surpris en train de graver son initiale sur un mur intérieur du Colisée, l’un des monuments les plus emblématiques d’Italie. Pris en flagrant délit par les autorités, il a rapidement été interpellé."
            },
            {
                type: 'paragraph',
                content: "L’individu a utilisé une pierre pour inscrire une lettre de grande taille sur une paroi du monument antique, causant ainsi des dégradations sur ce site classé au patrimoine historique. La justice italienne a réagi fermement en prononçant une amende de 20.000 euros, accompagnée d’une peine de prison avec sursis."
            },
            {
                type: 'paragraph',
                content: "Ce type d’incident n’est pas isolé. Depuis plusieurs années, les autorités italiennes font face à des actes de vandalisme commis par des visiteurs peu respectueux. Plusieurs touristes ont déjà été sanctionnés pour des faits similaires, ce qui pousse les responsables du site à renforcer les mesures de surveillance."
            },
            {
                type: 'paragraph',
                content: "Face à ces comportements, des dispositifs supplémentaires pourraient être mis en place, comme l’installation de nouvelles caméras ou de panneaux rappelant les règles à respecter. L’objectif est clair : protéger un patrimoine historique exceptionnel tout en sensibilisant les visiteurs à son importance."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_7.jpg",
        alt: "Colisée sur un ciel bleu",
        tags: ["Colisée", "Vandalisme"],
        date: "22 novembre 2014",
        author: "A.	Dubois"
    },
    {
        id: 8,
        title: "AC/DC annonce deux concerts au Stade de France en mai 2015.",
        category: "Événements",
        excerpt: "La légende du hard rock de retour en France pour une étape de sa tournée mondiale.",
        content: [
            {
                type: 'paragraph',
                content: "Les fans de rock ont de quoi se réjouir : le mythique groupe Australien AC/DC a confirmé sa présence au Stade de France en mai 2015, dans le cadre de sa tournée mondiale Rock or Bust World Tour. Deux dates sont programmées, les 23 et 26 mai, faisant de Paris l’une des rares villes françaises à accueillir le groupe lors de cette tournée très attendue."
            },
            {
                type: 'paragraph',
                content: "Cet événement marque le retour sur scène d’AC/DC après plusieurs années d’absence en France, et suscite un engouement considérable auprès des amateurs de hard rock. Le Stade de France, avec sa capacité de plus de 75 000 places, devrait afficher complet pour ces deux soirées qui promettent d’être mémorables."
            },
            {
                type: 'paragraph',
                content: "Le groupe, formé dans les années 1970, continue de promouvoir son seizième album Rock or Bust, sorti en 2014, qui a rencontré un franc succès dans plusieurs pays européens. La tournée qui accompagne cet album comprend des dizaines de dates à travers l’Europe, et le passage à Paris figure parmi les moments forts de l’agenda musical de l’année."
            },
            {
                type: 'paragraph',
                content: "Pour les amateurs de rock, ces concerts sont l’occasion de revivre en live les classiques du groupe comme Back in Black ou Highway to Hell, tout en découvrant les morceaux du dernier album. La tournée s’annonce comme un des grands événements musicaux de 2015 en France."
            }
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_8.jpg",
        alt: "Veste en jean avec des pins AC/DC et Iron Maiden",
        tags: ["Concert", "Musique", "AC/DC", "Stade de France"],
        date: "12 décembre 2014",
        author: "C.Martin"
    },
    {
        id: 9,
        title: "New‑York envisage un téléphérique pour désengorger les transports",
        category: "Environnement",
        excerpt: "Un projet original pour fluidifier les déplacements entre Brooklyn et Manhattan.",
        content: [
            {
                type: 'paragraph',
                content: "À New‑York, une idée surprenante fait débat parmi les solutions possibles pour alléger les transports en commun saturés : installer un téléphérique entre Brooklyn et Manhattan afin de réduire la pression sur le métro, les ferries et les axes routiers aux heures de pointe. Cette proposition, portée par un promoteur immobilier de la ville, s’inspire des systèmes de transport par câble déjà utilisés dans certains pays européens."
            },
            {
                type: 'paragraph',
                content: "Chaque matin, des dizaines de milliers de personnes traversent l’East River pour se rendre à leur travail, surtout via la ligne de métro L qui relie Brooklyn au centre de Manhattan et qui est souvent bondée. Le téléphérique envisagé pourrait transporter jusqu’à 5 000 personnes par heure en seulement quelques minutes, ce qui représenterait un moyen de transport rapide et direct au‑dessus de l’eau."
            },
            {
                type: 'paragraph',
                content: "Pour autant, ce type d’installation ne se met pas en place du jour au lendemain. Outre les coûts et les contraintes techniques d’un tel ouvrage, il faut obtenir de nombreuses autorisations auprès des autorités locales et nationales, notamment parce que les voies navigables comme l’East River sont sous la supervision d’agences spécifiques."
            },
            {
                type: 'paragraph',
                content: "New‑York n’est pas totalement étrangère aux téléphériques urbains : un tramway aérien relie déjà Manhattan à Roosevelt Island depuis plusieurs décennies, offrant à la fois un service de transport et une vue spectaculaire sur la ville. Mais le projet proposé aujourd’hui serait beaucoup plus vaste et destiné à répondre à des besoins bien différents."
            },
        ],
        top_articles: false,
        featured: false,
        weekly: false,
        image: "../src/images/id_9.jpg",
        alt: "Tramway en gare",
        tags: ["New Yorks", "Téléphérique", "Transport", "Musics"],
        date: "04 janvier 2015",
        author: "E.Dubois"
    },
    {
        id: 10,
        title: "L’Île‑de‑France et l’État s’engagent à investir massivement pour les six prochaines années.",
        category: "Économie",
        excerpt: "Un plan d’investissement ambitieux pour moderniser les transports, l’enseignement et l’aménagement du territoire.",
        content: [
            {
                type: 'paragraph',
                content: "L’Île‑de‑France et l’État français ont conclu un accord majeur visant à mobiliser une enveloppe importante d’investissements publics pour la région sur les six prochaines années. Cette initiative fait partie d’un effort concerté pour répondre aux défis de mobilité, d’enseignement, de transition écologique et d’aménagement urbain de la région capitale, qui concentre une grande partie de la population et de l’activité économique du pays."
            },
            {
                type: 'paragraph',
                content: "L’Île‑de‑France et l’État français ont conclu un accord majeur visant à mobiliser une enveloppe importante d’investissements publics pour la région sur les six prochaines années. Cette initiative fait partie d’un effort concerté pour répondre aux défis de mobilité, d’enseignement, de transition écologique et d’aménagement urbain de la région capitale, qui concentre une grande partie de la population et de l’activité économique du pays."
            },
            {
                type: 'paragraph',
                content: "L’enseignement supérieur et la recherche bénéficient également d’un volet spécifique du plan, avec des moyens dédiés à l’amélioration des infrastructures universitaires et des dispositifs favorisant l’emploi et l’innovation. Cette dimension vise à renforcer l’attractivité de l’Île‑de‑France sur la scène internationale en tant que pôle d’excellence académique et technologique."
            },
            {
                type: 'paragraph',
                content: "Parallèlement, la transition écologique figure parmi les priorités de cet engagement pluriannuel. Une partie des investissements est destinée à promouvoir l’efficacité énergétique, le développement des énergies renouvelables et la préservation de l’environnement, en lien avec les objectifs plus larges de développement durable de la région."
            },
            {
                type: 'paragraph',
                content: "Ce plan d’investissement commun représente une étape cruciale pour l’avenir de l’Île‑de‑France, renforçant la coopération entre les acteurs publics pour faire face aux défis démographiques, économiques et environnementaux de ces prochaines années."
            }
        ],
        top_articles: true,
        featured: false,
        weekly: false,
        image: "../src/images/id_10.jpg",
        alt: "Calculatrice et feuille de calcul avec un stylo",
        tags: ["Île‑de‑France", "Investissement", "États"],
        date: "16 février 2015",
        author: "M.Lefèvre"
    },
    {
        id: 11,
        title: " Plus de 10 000 participants à la course Odyssea à Nantes pour lutter contre le cancer du sein.",
        category: "Événements",
        excerpt: "Un grand rassemblement solidaire mobilise la ville autour d’une cause essentielle.",
        content: [
            {
                type: 'paragraph',
                content: "À Nantes, la course solidaire Odyssea a rassemblé plus de 10 000 coureurs et marcheurs de tous âges, venus soutenir la lutte contre le cancer du sein. L’événement, qui mêle sport et solidarité, se déroule chaque année dans la métropole nantaise et attire de plus en plus de participants, désireux de contribuer à une cause qui touche des milliers de familles à travers le pays."
            },
            {
                type: 'paragraph',
                content: "Organisée sur un parcours adapté à tous — des marcheurs aux athlètes confirmés — la manifestation vise à sensibiliser le public tout en collectant des fonds pour la recherche médicale et l’accompagnement des patients. Les participants, souvent vêtus de rose en signe de soutien, ont pu parcourir plusieurs distances dans une ambiance conviviale et festive."
            },
            {
                type: 'paragraph',
                content: "Depuis sa création, la course Odyssea s’est imposée comme un moment fort dans le calendrier des actions de prévention et de soutien autour du cancer du sein. Chaque inscription permet de financer des associations engagées dans l’aide aux malades, la recherche scientifique ou encore l’information sur le dépistage précoce, élément clé pour améliorer les chances de guérison."
            },
            {
                type: 'paragraph',
                content: "Au fil des années, cet événement a su fédérer non seulement des sportifs, mais aussi des familles entières, des groupes d’amis et des entreprises locales. Tous partagent la même envie : faire avancer la cause et montrer que l’on peut se mobiliser ensemble contre une maladie qui touche tant de proches, collègues ou voisins."
            },
            {
                type: 'paragraph',
                content: "À l’arrivée, les organisateurs ont salué l’engagement des participants et souligné l’importance de maintenir un tel rendez‑vous solidaire, capable de créer du lien social tout en rappelant l’importance de la prévention et du soutien à la recherche."
            }
        ],
        top_articles: true,
        featured: false,
        weekly: false,
        image: "../src/images/id_11.jpg",
        alt: 'Plusieurs personne avec des t-shirts rose "Octobre Rose" qui défilent avec des instruments de musique',
        tags: ["Odyssea", "Cancer du sein", "Nantes", "Solidarité"],
        date: "15 mars 2015",
        author: "C.Martin"
    },
    {
        id: 12,
        title: "À Lille, « Bienvenue en Suède » enchante les amateurs de gastronomie nordique.",
        category: "Événements",
        excerpt: "Un festival culinaire fait voyager les papilles jusqu’en Scandinavie.",
        content: [
            {
                type: 'paragraph',
                content: "Lille s’est transformée, l’espace d’un week-end, en un coin de Scandinavie grâce à l’événement « Bienvenue en Suède », un rendez‑vous gastronomique original qui a attiré de nombreux gourmands curieux de découvrir les saveurs venues du Nord. Organisé dans plusieurs lieux emblématiques de la ville, ce festival a mis en lumière la cuisine suédoise, encore peu présente dans le paysage culinaire local."
            },
            {
                type: 'paragraph',
                content: "Durant cette manifestation, les participants ont pu déguster une variété de mets typiques de Suède, des classiques comme les boulettes de viande aux parfums de cannelle et d’aneth, jusqu’aux poissons marinés servis à la mode traditionnelle. L’événement a également permis de rapprocher les cultures culinaires, en montrant comment les saveurs scandinaves peuvent s’intégrer à la scène gastronomique française. L’idée était à la fois de surprendre les palais et d’offrir une expérience immersive, mêlant dégustations, ateliers et rencontres avec des spécialistes."
            },
            {
                type: 'paragraph',
                content: "Dans une ville déjà réputée pour sa cuisine généreuse et inventive, cette incursion dans l’univers suédois a suscité beaucoup d’enthousiasme. Les restaurateurs locaux ont profité de l’occasion pour proposer des menus spéciaux inspirés de la Suède, créant des passerelles entre les traditions culinaires du Nord de l’Europe et celles de la métropole lilloise. Ce type d’initiative s’inscrit dans la dynamique actuelle de Lille, qui multiplie les événements autour de la gastronomie du monde pour enrichir l’offre locale et faire voyager les amateurs."
            },
            {
                type: 'paragraph',
                content: "L’ambiance conviviale et festive a séduit les visiteurs, qui sont repartis avec de nouvelles idées pour leurs propres repas, ainsi qu’une meilleure connaissance de la richesse des cuisines d’ailleurs. En s’ouvrant à des influences inattendues, le festival « Bienvenue en Suède » montre que Lille reste une ville en mouvement, prête à explorer les saveurs du globe tout en célébrant son identité culinaire."
            }
        ],
        top_articles: false,
        featured: true,
        weekly: true,
        image: "../src/images/id_12.jpg",
        alt: "Intérieur de restaurant avec des tables et chaises",
        tags: ["Lille ", "Gastronomie", "Suède", "Festival"],
        date: "02 avril 2015",
        author: "E.Fontaine"
    },
    {
        id: 13,
        title: "“L’Amour est dans le pré” : cinq agriculteurs à suivre dans la saison 2015.",
        category: "Audiovisuel",
        excerpt: "La célèbre émission de télé‑réalité met en lumière la quête amoureuse de plusieurs célibataires du monde agricole.",
        content: [
            {
                type: 'paragraph',
                content: "La dixième saison de L’Amour est dans le pré, diffusée sur M6, continue de passionner les téléspectateurs en mettant en scène la vie sentimentale d’agriculteurs célibataires déterminés à trouver l’amour. Dans l’un des épisodes phares, cinq participants – parmi les nombreux portraits diffusés en début de saison – ont attiré l’attention du public en se lançant dans des rendez-vous souvent riches en émotions."
            },
            {
                type: 'paragraph',
                content: "Parmi eux figurent Franck, un éleveur de vaches laitières plein d’enthousiasme, Michel, un viticulteur expérimenté à la recherche de complicité, Guillaume, passionné par ses brebis, Claire, jeune éleveuse dynamique, et Baptiste, un homme qui espère partager un futur durable avec sa ferme. Chacun, à sa façon, se livre à l’exercice du speed dating avec ses prétendants, espérant que cette aventure télévisée change enfin son quotidien affectif."
            },
            {
                type: 'paragraph',
                content: "Ce rendez-vous à Paris marque une étape décisive pour ces agriculteurs : c’est l’occasion de rencontrer plusieurs personnes intéressées par leur profil après l’ouverture des courriers reçus après la diffusion de leur portrait. Les deux élus choisis à l’issue de ces rencontres auront ensuite la possibilité de passer du temps avec eux dans leur exploitation, dans un contexte plus intime et quotidien."
            },
            {
                type: 'paragraph',
                content: 'Le concept de l’émission, animé par Karine Le Marchand, repose sur cette alternance d’introspection et de rencontres concrètes, qui met en lumière les aspirations amoureuses de personnes souvent confrontées à l’isolement dans leurs professions rurales.'
            },
            {
                type: 'paragraph',
                content: 'Entre suspense, espoirs et petits moments de complicité, ces épisodes continuent de captiver un public fidèle, curieux de suivre l’évolution de ces parcours amoureux pas comme les autres.'
            }
        ],
        top_articles: false,
        featured: true,
        weekly: true,
        image: "../src/images/id_13.jpg",
        alt: "Vache dans un pré qui broute de l'herbe",
        tags: ["Agriculture", "Télévision", "L'amour est dans le pré", "M6"],
        date: "13 mai 2015",
        author: "M.Leroy"
    },
    {
        id: 14,
        title: "Uwe Boll s’emporte contre les internautes après l’échec de son financement.",
        category: "Audiovisuel",
        excerpt: "Le cinéaste controversé réagit vivement face aux critiques qui qualifient ses films de pires réalisations.",
        content: [
            {
                type: 'paragraph',
                content: "Le réalisateur allemand Uwe Boll, connu pour ses adaptations de jeux vidéo au cinéma, s’est récemment retrouvé au centre d’une vive polémique après avoir publié une vidéo très virulente à destination de ceux qui n’ont pas soutenu son dernier projet. Boll, dont plusieurs films ont été largement critiqués par les amateurs et professionnels du 7e art, a exprimé sa frustration de manière directe, déclenchant une nouvelle vague de réactions sur les réseaux sociaux."
            },
            {
                type: 'paragraph',
                content: "Figure controversée du monde du cinéma, Boll s’est longtemps fait une réputation — parfois involontaire — d’auteur de longs métrages mal reçus par la critique et le public. Ses adaptations comme House of the Dead ou Alone in the Dark sont régulièrement citées comme des exemples de productions ratées, ce qui lui a valu des distinctions peu flatteuses et une place sur la liste des réalisateurs les plus critiqués."
            },
            {
                type: 'paragraph',
                content: "Après l’échec de sa campagne de financement participatif pour le film Rampage 3, Boll a publié un message en ligne intitulé “fuck you all” destiné à ceux qui n’avaient pas contribué à son projet. Dans cette vidéo, il ne mâche pas ses mots et exprime de manière crue sa colère envers une partie du public et des plateformes de financement, estimant que l’absence de soutien reflète le manque de reconnaissance pour son travail."
            },
            {
                type: 'paragraph',
                content: 'Cette réaction explosive intervient alors que Boll, malgré la réputation de ses films, continue de susciter des discussions dans le milieu cinématographique. Entre admiration pour son indépendance et critiques acerbes sur la qualité de ses œuvres, le réalisateur divise autant qu’il provoque. Qu’on apprécie ou non son travail, sa manière directe de répondre à ses détracteurs ne passe pas inaperçue.'
            }
        ],
        top_articles: false,
        featured: true,
        weekly: true,
        image: "../src/images/id_14.jpg",
        alt: "Clap de cinéma avec des objectifs d'appareil photo",
        tags: ["Uwe Boll", "Cinéma", "Films", "Controverses"],
        date: "08 juin 2015",
        author: "A.Dupont"
    },
    {
        id: 15,
        title: "La fin d’une poursuite : Raoult B, gourou de la secte “Les Enfants de la Liberté” est retrouvé mort après une année d’enquête.",
        category: "Fait divers",
        excerpt: "Le 25 juillet 2015 marque la fin des recherches pour la police. Raoult Bobinsky est décédé quand les autorités le retrouvent dans un bois près de la commune de Châteauroux.",
        content: [
            {
                type: 'paragraph',
                content: "Présentation des faits - L’affaire du suicide collectif de la secte “Les Enfants de la Liberté” dans un petit village du Centre-Val de Loire révèle enfin l’emplacement de l’homme à sa tête : le corps de Raoult Babinsky à été découvert jeudi au matin sur le sol d’une forêt. La raison de son décès reste encore inconnue, néanmoins l’arme du crime à été retrouvée non loin. Après plusieurs analyses, la piste du suicide est écartée mais le meurtrier n’a pas été encore identifé."
            },
            {
                type: 'paragraph',
                content: "Ce dernier était poursuivi depuis un peu plus d’un an, accusé d’avoir prémédité et poussé 110 adeptes au suicide collectif. La secte prônait la santé mentale et promettait des guérisons expérimentales aux souffrances de l’esprit, telle que la dépression. L’organisation s’est étendue grâce à internet et recrutait de plus en plus de membres, jusqu’au drame du 6 mai 2014 qui les mena tous à la mort."
            },
            {
                type: 'paragraph',
                content: "Le fondateur sera donc jugé post mortem pour son implication dans le suicide collectif, la création de la secte et les nombreux détournements de fond. Une minute de silence sera respectée dans le pays le 28 juillet 2015 à 10h, en mémoire aux victimes et à leur famille."
            }
        ],
        top_articles: false,
        featured: true,
        weekly: false,
        image: "../src/images/id_15.jpg",
        alt: "Portrait du gourou Raoult Bobinsky",
        tags: ["Secte ", "Gourou", "Meurtre", "Enquête"],
        date: "16 juillet 2015",
        author: "Marie D"
    }
];

export function parseDate(d: string): Date {
    if (d === "Aujourd'hui") return new Date();
    
    const monthMap: Record<string, number> = {
        janvier: 0, février: 1, mars: 2, avril: 3, mai: 4, juin: 5,
        juillet: 6, août: 7, septembre: 8, octobre: 9, novembre: 10, décembre: 11
    };

    if (d.includes('.')) {
        const [day, month, year] = d.split('.').map(Number);
        return new Date(year, month - 1, day);
    }

    const parts = d.split(' ');
    if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = monthMap[parts[1].toLowerCase()] ?? 0;
        const year = parseInt(parts[2]);
        return new Date(year, month, day);
    }

    return new Date(0);
}

export const sortedArticles = [...articles].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
);

export const categories = ['Tous', ...Array.from(new Set(articles.map(a => a.category)))];