const MONSTERS = [
  {
    id: 87,
    name: "Observateur",
    zone: "Forêt enchantée (Nandor)",
    rang: 3,
    hp: 160,
    esq: 50,
    dm: 40,
    arm: 0,
    res: 8,
    competences: [
      { nom: "Disparition soudaine", type: "tech_combat" },
      { nom: "Recherche intuitive",  type: "tech_combat" },
      { nom: "Piqûre",               type: "magie" },
      { nom: "Invisibilité",         type: "magie" },
      { nom: "Maléfice de nécrose",  type: "magie" },
      { nom: "Rapide",               type: "don" },
      { nom: "Vulnérabilité lumière_icone 20%",    type: "don" },
      { nom: "Résistance ombre_icone 40%",       type: "don" }
    ],
    items: [
      { id: 361, nom: "Masque des ténèbres", emplacement: "Tête" },
      { id: 232, nom: "Dérobade en soie",    emplacement: "Buste" },
      { id: 76,  nom: "Sceptre émeraude",    emplacement: "Une main" },
      { id: 186, nom: "Perle",               emplacement: "Fétiche" }
    ],
    drops: [
      { id: 142, nom: "Fibre violette" },
      { id: 0, nom: "20-40" },
    ],
    description: "Il est difficile de savoir si la peur d'être observé est apparue avant ou après les Observateurs de l'Ombre. Une chose est certaine cependant : leur regard perçant glace le sang, d'autant qu'ils sont la majeure partie du temps fondue dans les ombres au point d'être complètement invisibles, ne laissant que cette horrible sensation d'être surveillé. Apparition sur les murs, ombres s'allongeant sur le sol, leur corps quasi translucide ne se dessine qu'aux rayons de lune qui découpent leur silhouette effroyablement humanoïde. Une vieille légende de Nandor raconte que quiconque voit un Observateur connaît un destin tragique dans les quelques jours à venir."
  },
  {
    id: 85,
    name: "Matagot",
    zone: "Forêt enchantée (Nandor)",
    rang: 3,
    hp: 200,
    esq: 85,
    dm: 40,
    arm: 0,
    res: 0,
    competences: [
      { nom: "Attaque sournoise",    type: "tech_combat" },
      { nom: "Attaque rapide",       type: "tech_combat" },
      { nom: "Disparition soudaine", type: "tech_combat" },
      { nom: "Permutation",          type: "magie" },
      { nom: "Inflige 1 saignement_icone",          type: "don" },
      { nom: "Inflige 1 faille_icone",          type: "don" },
      { nom: "Résistance ombre_icone 20%",          type: "don" },
    ],
    items: [
      { id: 162, nom: "Cagoule de l'ombre", emplacement: "Tête" },
      { id: 307, nom: "Tunique de l'ombre", emplacement: "Buste" },
      { id: 362, nom: "Dague sinistre",     emplacement: "Une main" }
    ],
    drops: [
      { id: 342, nom: "Encre" },
      { id: 0, nom: "20-40" },
    ],
    description: "Les Matagots sont des esprits qui hantent les cimetières. Des âmes-sorcières qui ont pris dans la mort l'apparence de chat noir aux yeux de rubis. Des monstruosités qui peuvent grandir ou rétrécir à volonté dans la pénombre. Leur discrétion est à la hauteur de leur souplesse. Si leur morsure est à craindre, c'est surtout leur sournoiserie qui fait frémir les baroudeurs, même les plus expérimentés. Nombreux sont les voyageurs ayant cru s'en prendre à un matagot et en ressortir vivant, pour finalement se retrouver quelques mètres plus loin, aux mains d'ennemis bien plus nombreux que prévu. Car le matagot a une petite astuce, que ce soit pour attaquer ou pour fuir : si sa proie ne veut pas s'approcher, le chat-sorcier peut bien décider pour lui."
  },
  {
    id: 84,
    name: "Cauchemar",
    zone: "Forêt enchantée (Nandor)",
    rang: 3,
    hp: 200,
    esq: 40,
    dm: 50,
    arm: 9,
    res: 4,
    competences: [
      { nom: "Attaque hypnotique",    type: "tech_combat" },
      { nom: "Tourmenter",       type: "tech_combat" },
      { nom: "Siphonner", type: "tech_combat" },
      { nom: "Inflige 2 terreur_icone",          type: "don" },
      { nom: "Résistance ombre_icone 20%",          type: "don" },
    ],
    items: [
      { id: 194, nom: "Casque terrifiant", emplacement: "Tête" },
      { id: 197, nom: "Plastron terrifiant", emplacement: "Buste" },
      { id: 364, nom: "Crépusculaire",     emplacement: "Une main" }
    ],
    drops: [
      { id: 342, nom: "Encre" },
      { id: 0, nom: "20-40" },
    ],
    description: "Les Cauchemars sont des spectres alimentés par une haine froide et calculée. La brutalité dont ils font preuve ne rompt jamais le silence qui les entoure. Sous leur habit épais, vous devinez un corps fait d'ombres tangibles dont il est possible de tirer des gerbes de sang couleur encre. La légende veut que ce soient les âmes qui ont péri de par leur mensonge ou leur trahison, condamnés à ne jamais pouvoir s'excuser. Rendus fous par ce silence coupable, ils se délectent des hurlements qu'ils causent, d'autant que leur aura impose un sentiment de frayeur féroce à quiconque les approche. En effet, bien qu'entouré, sitôt que le Cauchemar pose son attention sur vous, vous avez l'intime conviction que personne ne saurait vraiment vous en protéger."
  },
  {
    id: 86,
    name: "Fée maline",
    zone: "Forêt enchantée (Nandor)",
    rang: 3,
    hp: 160,
    esq: 60,
    dm: 40,
    arm: 0,
    res: 4,
    competences: [
      { nom: "Attaque hypnotique",    type: "tech_combat" },
      { nom: "Attaque rapide",       type: "tech_combat" },
      { nom: "Disparition soudaine", type: "tech_combat" },
      { nom: "Vol de magie", type: "magie" },
      { nom: "Inflige 2 nécrose_icone",          type: "don" },
      { nom: "Résistance ombre_icone 40%",          type: "don" },
    ],
    items: [
      { id: 360, nom: "Robe des ténèbres", emplacement: "Buste" },
      { id: 363, nom: "Arc funeste", emplacement: "Deux mains" },
      { id: 149, nom: "Bottines sylvaines",     emplacement: "Pieds" }
    ],
    drops: [
      { id: 224, nom: "Ouvrage sylvestre" },
      { id: 295, nom: "Aile de fée" },
      { id: 0, nom: "20-40" },
    ],
    description: "Les fées corrompues par l'Ombre prennent cette couleur significative, celle des cendres qui sont éclairées par la lune. Il est pourtant difficile de la dissocier des autres espèces de fées qui vivent dans les forêts ou dans les marais, puisqu'elles ont tout comme celles-ci un petit corps doté de quatre belles ailes. C'est seulement à la lumière de la lune que leur véritable apparence se dévoile et que les membres de la petite créature se font plus maigrelets, et leurs petits doigts ressemblent à des osselets funestes. Leur rire se veut alors plus carnassier qu'enjoué. Il ne fait dès lors aucun doute que ce qu'elle désire, c'est un peu plus d'engrais pour faire éclore les fleurs nocturnes qui ornent le jardin que vous profanez."
  },
  {
    id: 88,
    name: "Princesse Sombre",
    zone: "Forêt enchantée (Nandor)",
    rang: 4,
    hp: 1000,
    esq: 80,
    dm: 90,
    arm: 10,
    res: 17,
    competences: [
      { nom: "Offrir son sang",    type: "tech_combat" },
      { nom: "Méditation défensive",       type: "tech_combat" },
      { nom: "Drain de vie", type: "magie" },
      { nom: "Légende", type: "don" },
      { nom: "Endurance",          type: "don" },
      { nom: "Vulnérabilité feu_icone 20%",          type: "don" },
      { nom: "Résistance ombre_icone 70%",          type: "don" },
    ],
    items: [
      { id: 361, nom: "Masque des ténèbres", emplacement: "Tête" },
      { id: 360, nom: "Robe des ténèbres", emplacement: "Buste" },
      { id: 309, nom: "Orbe angélique", emplacement: "Une main" },
      { id: 337, nom: "Eventail noble",     emplacement: "Une main" }
    ],
    drops: [
      { id: 369, nom: "Ame légendaire" },
      { id: 176, nom: "Gemme améthyste" },
      { id: 177, nom: "Diadème" },
      { id: 15, nom: "Potion d'expérience" },
      { id: 0, nom: "30-50" },
    ],
    description: "Bellinda de Nandor, sinistrement connue sous le nom de la Princesse Sombre, est la fille de Cerilla de Nandor, dernière descendante du Roi-Musicien Belen. S'il n'en reste désormais qu'un fantôme pâle qui semble plus réel à la lumière des flammes que de la lune, elle fut de son temps condamnée par la population suite aux nombreuses rumeurs de sacrifice humain que la famille Nandor aurait effectué afin de s'assurer le pouvoir. Pourtant, le titre royal ne semble en rien usurpé : la créature éthérée porte sur elle toute la grâce héritée de son sang et un quelque chose, à la fois, de terrifiant. Comme si sa seule présence pouvait drainer en quelque sorte l'énergie ou la hargne qui habite d'ordinaire le cœur des hommes. La légende veut que ceux qui rencontrent la mort de la main de la Princesse Sombre ne peuvent plus jamais mourir et que leur âme est alors piégée dans la Chapelle Nocturne. Une note de plus sur la grande partition. Une note fatidique pour celle dont les doigts atrophiés et douloureux, comme brisés par des coups violents, ne saurait plus jamais jouer la Musique de l'Ombre."
  },
  {
    id: 96,
    name: "Adorateur du Sang",
    zone: "Zone ensanglantée (Nandor)",
    rang: 3,
    hp: 240,
    esq: 50,
    dm: 40,
    arm: 8,
    res: 2,
    competences: [
      { nom: "Attaque puissante",    type: "tech_combat" },
      { nom: "Entailler",       type: "tech_combat" },
      { nom: "Sauvagerie",          type: "don" },
      { nom: "Endurance",          type: "don" },
    ],
    items: [
      { id: 11, nom: "Heaume", emplacement: "Tête" },
      { id: 106, nom: "Ceinture de force", emplacement: "Buste" },
      { id: 244, nom: "Hache double", emplacement: "Deux mains" },
      { id: 30, nom: "Jambières",     emplacement: "Pieds" }
    ],
    drops: [
      { id: 210, nom: "Sang" },
      { id: 178, nom: "Potion de vigueur" },
      { id: 0, nom: "20-40" },
    ],
    description: "Les Adorateurs sont les bourreaux des cultistes, des êtres qui trouvèrent dans cette nouvelle idéologie une nouvelle façon de vivre ce qui jadis leur était interdit. À quoi bon s’en faire de tuer dans un monde où la mort est partout après tout ? Leur soif de sang ne sera épanchée que le jour où la dernière tête du dernier vivant tombera, et comme il en vient régulièrement, des aventuriers pensant pouvoir les sauver, cela fait bien leur affaire. Si d’aventure, vous voudriez leur faire entendre raison, vous ne tomberez que sur un visage émacié, à l’haleine suintant le fer et balbutiant des mots obscènes, vous faisant comprendre bien vite que la chose qui se tient devant vous n’est plus que l’ombre d’un humain. Un fou aurait plus d’humanité."
  },
  {
    id: 96,
    name: "Adorateur du Sang",
    zone: "Zone ensanglantée (Nandor)",
    rang: 3,
    hp: 240,
    esq: 50,
    dm: 40,
    arm: 8,
    res: 2,
    competences: [
      { nom: "Attaque puissante",    type: "tech_combat" },
      { nom: "Entailler",       type: "tech_combat" },
      { nom: "Sauvagerie",          type: "don" },
      { nom: "Endurance",          type: "don" },
    ],
    items: [
      { id: 11, nom: "Heaume", emplacement: "Tête" },
      { id: 106, nom: "Ceinture de force", emplacement: "Buste" },
      { id: 245, nom: "Guillotineuse", emplacement: "Deux mains" },
      { id: 30, nom: "Jambières",     emplacement: "Pieds" }
    ],
    drops: [
      { id: 210, nom: "Sang" },
      { id: 178, nom: "Potion de vigueur" },
      { id: 0, nom: "20-40" },
    ],
    description: "Les Adorateurs sont les bourreaux des cultistes, des êtres qui trouvèrent dans cette nouvelle idéologie une nouvelle façon de vivre ce qui jadis leur était interdit. À quoi bon s’en faire de tuer dans un monde où la mort est partout après tout ? Leur soif de sang ne sera épanchée que le jour où la dernière tête du dernier vivant tombera, et comme il en vient régulièrement, des aventuriers pensant pouvoir les sauver, cela fait bien leur affaire. Si d’aventure, vous voudriez leur faire entendre raison, vous ne tomberez que sur un visage émacié, à l’haleine suintant le fer et balbutiant des mots obscènes, vous faisant comprendre bien vite que la chose qui se tient devant vous n’est plus que l’ombre d’un humain. Un fou aurait plus d’humanité."
  },
  {
    id: 97,
    name: "Pactisant du Sang",
    zone: "Zone ensanglantée (Nandor)",
    rang: 3,
    hp: 200,
    esq: 40,
    dm: 40,
    arm: 0,
    res: 9,
    competences: [
      { nom: "Offrir son sang",    type: "tech_combat" },
      { nom: "Méditation défensive",       type: "tech_combat" },
      { nom: "Piqûre",       type: "magie" },
      { nom: "Maléfice de saignement",       type: "magie" },
      { nom: "Sauvagerie",          type: "don" },
    ],
    items: [
      { id: 129, nom: "Tenue améthyste", emplacement: "Buste" },
      { id: 366, nom: "Sceptre de pouvoir", emplacement: "Une main" },
      { id: 367, nom: "Codex de pouvoir", emplacement: "Une main" },
      { id: 77, nom: "Souliers en soie",     emplacement: "Pieds" }
    ],
    drops: [
      { id: 210, nom: "Sang" },
      { id: 45, nom: "Viande" },
      { id: 221, nom: "Fiole d'argent" },
      { id: 298, nom: "Clé en ossements" },
      { id: 0, nom: "20-40" },
    ],
    description: "Les pactisants sont poussés leur recherche de solution jusqu’à sacrifier une partie d’eux-mêmes afin d’obtenir d’un autre monde, d’une autre réalité, des pouvoirs bien obscurs. Souvent insuffisants, ils cherchent désormais comment tirer de cet autre monde qu’ils ont pu entrevoir le pouvoir nécessaire non plus pour réparer les maux, mais pour devenir plus puissants encore. Car avoir vu l’autre-monde les a rendu aveugles, comme à chaque fois qu’on observe l’abîme et qu’il nous observe en retour. Ce qu’ils ont vu là-bas a dévoré leur humanité et ils ne restent désormais d’eux qu’une coquille désespérée d’obtenir davantage, libérant des diablotins pour assouvir leur pulsion de domination et de mort."
  },
  {
    id: 100,
    name: "Limon de Sang",
    zone: "Zone ensanglantée (Nandor)",
    rang: 3,
    hp: 200,
    esq: 50,
    dm: 40,
    arm: 6,
    res: 6,
    competences: [
      { nom: "Attaque défensive",    type: "tech_combat" },
      { nom: "Inflige 2 saignement_icone",          type: "don" },
      { nom: "Inflige 2 lenteur_icone",          type: "don" },
      { nom: "Vulnérabilité foudre_icone 20%",          type: "don" },
    ],
    items: [
    ],
    drops: [
      { id: 210, nom: "Sang" },
      { id: 68, nom: "Estomac" },
      { id: 73, nom: "Tripes" },
      { id: 15, nom: "Potion d'expérience" },
      { id: 0, nom: "20-40" },
    ],
    description: "La gelée de sang émerge du sol ou tombe mollement des arbres qui généralement les abritent. Il apparaît comme une masse visqueuse, d’un carmin brillant. Ses contours fluctuants semblent constamment en mutation alors qu’il tente par tous les moyens de piéger toute source de vie à même son corps. Des éclats d’os et de métal sont piégés dans sa gelée sinistre, témoins des précédentes victimes à peine digérées. Une odeur de soufre et de fer flotte partout où il va, indiquant bien souvent sa présence avant qu’on ne l’aperçoive. La simple vue de ce limon éveille généralement chez les aventuriers une frayeur toute primale."
  },
];