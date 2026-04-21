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
      { nom: "Vulnérabilité Lumière 20%",    type: "don" },
      { nom: "Résistance Ombre40%",       type: "don" }
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
    description: "Il est difficile de savoir si la peur d'être observé est apparue avant ou après les Observateurs de l'Ombre. Une chose est certaine cependant : leur regard perçant glace le sang, d'autant qu'ils sont la majeure partie du temps fondus dans les ombres au point d'être complètement invisibles, ne laissant que cette horrible sensation d'être surveillé. Apparition sur les murs, ombres s'allongeant sur le sol, leur corps quasi translucide ne se dessine qu'aux rayons de lune qui découpent leur silhouette effroyablement humanoïde. Une vieille légende de Nandor raconte que quiconque voit un Observateur connaît un destin tragique dans les quelques jours à venir."
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
      { nom: "Inflige 1 Saignement",          type: "don" },
      { nom: "Inflige 1 Faille",          type: "don" },
      { nom: "Résistance Ombre 20%",          type: "don" },
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
      { nom: "Inflige 2 Terreur",          type: "don" },
      { nom: "Résistance Ombre 20%",          type: "don" },
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
      { nom: "Inflige 2 Nécrose",          type: "don" },
      { nom: "Résistance Ombre 40%",          type: "don" },
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
];