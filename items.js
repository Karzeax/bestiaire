// Fiches descriptives des items, indexées par id (string).
// Généré depuis inventaire.json — ne pas éditer à la main.
//
// CHAMPS COMMUNS
//   id        {number}  (dérivé de la clé string au chargement — voir bas de fichier)
//   name, weight, rank, slot
//   Stats directes : ARM, RES, ESQ, DIS, INT, FOR, DEX, … + bonusPa
//
// ATTAQUE
//   attack         : { damage, formula, kind, statuses[], … }
//   offhandAttack  : attaque en main secondaire (1 item : Main-gauche #311)
//
// ENCHANTEMENTS / SLOTS
//   magicalSpace         : nombre de slots d'enchantement disponibles
//   doubleSetting        : double l'effet d'un enchantement spécifique
//   enhancedEnchantment  : améliore les enchantements (26 items)
//
// CHAMPS ONE-OFF
//   regeneration       : récupération PV/tour (3 items — brassard runique, pavois phénix, cercle cœur)
//   elementaryAffinity : affinité élémentaire influençant les sorts (armes magiques)
//   BonusDGT, BonusMAG : bonus de dégâts physiques / magiques
const ITEMS = {
  "439": {
    "name": "Capuche de voleur",
    "weight": 1,
    "rank": 2,
    "slot": "Tête",
    "DIS": 15
  },
  "291": {
    "name": "Capuche féline",
    "weight": 1,
    "rank": 4,
    "slot": "Tête",
    "ESQ": 15,
    "INT": 1
  },
  "19": {
    "name": "Toque",
    "weight": 1,
    "rank": 1,
    "slot": "Tête",
    "ARM": 1,
    "RES": 1
  },
  "285": {
    "name": "Casque en bois",
    "weight": 1,
    "rank": 1,
    "slot": "Tête",
    "ARM": 2
  },
  "166": {
    "name": "Capuchon",
    "weight": 1,
    "rank": 2,
    "slot": "Tête",
    "RES": 2
  },
  "7": {
    "name": "Cabasset en cuivre",
    "weight": 1,
    "rank": 1,
    "slot": "Tête",
    "ARM": 2
  },
  "59": {
    "name": "Bandana",
    "weight": 1,
    "rank": 1,
    "slot": "Tête",
    "ESQ": 10
  },
  "32": {
    "name": "Casque",
    "weight": 2,
    "rank": 2,
    "slot": "Tête",
    "ARM": 3
  },
  "329": {
    "name": "Masque fantôme",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "ARM": 2,
    "DIS": 10
  },
  "361": {
    "name": "Masque des ténèbres",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "RES": 2,
    "BonusMAG": 1,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Ombre"
      }
    ]
  },
  "11": {
    "name": "Heaume",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "ARM": 4
  },
  "319": {
    "name": "Crâne rituel",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "DM": 10,
    "ESP": 2
  },
  "25": {
    "name": "Coiffe en soie",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "BonusMAG": 1,
    "RES": 3
  },
  "194": {
    "name": "Casque terrifiant",
    "weight": 3,
    "rank": 3,
    "slot": "Tête",
    "ARM": 3,
    "FOR": 1
  },
  "86": {
    "name": "Casque astral",
    "weight": 3,
    "rank": 3,
    "slot": "Tête",
    "ARM": 3,
    "DEX": 1
  },
  "271": {
    "name": "Capuchon en soie",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "RES": 4
  },
  "317": {
    "name": "Capuche de rôdeur",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "DIS": 15,
    "DEX": 1
  },
  "146": {
    "name": "Bandana en soie",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "ESQ": 10,
    "DM": 10
  },
  "177": {
    "name": "Diadème",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "INT": 1,
    "ESP": 1,
    "CHA": 1,
    "doubleSetting": true
  },
  "83": {
    "name": "Chapeau du nomade",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "ESQ": 5,
    "DM": 5,
    "bonusPa": 50
  },
  "137": {
    "name": "Casque noble",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "ARM": 3,
    "INT": 1
  },
  "162": {
    "name": "Cagoule de l'ombre",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "ESQ": 10,
    "DIS": 10
  },
  "155": {
    "name": "Cabasset à cornes",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "BonusDGT": 1,
    "ARM": 3
  },
  "121": {
    "name": "Bonnet émeraude",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "RES": 3,
    "INT": 1
  },
  "233": {
    "name": "Bassinet plume",
    "weight": 2,
    "rank": 3,
    "slot": "Tête",
    "ARM": 3,
    "PRE": 5
  },
  "286": {
    "name": "Barrette en or",
    "weight": 1,
    "rank": 3,
    "slot": "Tête",
    "DM": 15,
    "doubleSetting": true
  },
  "440": {
    "name": "Lunettes d'explorateur",
    "weight": 1,
    "rank": 2,
    "slot": "Tête",
    "OBS": 15
  },
  "55": {
    "name": "Haillon",
    "weight": 1,
    "rank": 0,
    "slot": "Buste",
    "ARM": 1,
    "RES": 1
  },
  "360": {
    "name": "Robe des ténèbres",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "RES": 5,
    "DIS": 10,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Ombre"
      }
    ]
  },
  "78": {
    "name": "Plastron",
    "weight": 3,
    "rank": 1,
    "slot": "Buste",
    "ARM": 4
  },
  "193": {
    "name": "Plastron dragon",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 6,
    "MM": 10
  },
  "48": {
    "name": "Armure en cuir",
    "weight": 2,
    "rank": 1,
    "slot": "Buste",
    "ARM": 2,
    "RES": 2
  },
  "354": {
    "name": "Armure de la fournaise",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 7,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Feu"
      }
    ]
  },
  "124": {
    "name": "Veston",
    "weight": 1,
    "rank": 1,
    "slot": "Buste",
    "ARM": 1,
    "RES": 1,
    "DIS": 10
  },
  "18": {
    "name": "Toge",
    "weight": 1,
    "rank": 1,
    "slot": "Buste",
    "RES": 4
  },
  "92": {
    "name": "Toge en soie",
    "weight": 2,
    "rank": 2,
    "slot": "Buste",
    "RES": 6
  },
  "184": {
    "name": "Pèlerine",
    "weight": 2,
    "rank": 2,
    "slot": "Buste",
    "ESQ": 10,
    "DM": 10,
    "DIS": 10
  },
  "198": {
    "name": "Fourrure",
    "weight": 2,
    "rank": 2,
    "slot": "Buste",
    "ARM": 2,
    "RES": 2,
    "elementaryResistances": [
      {
        "value": 10,
        "element": "Feu"
      },
      {
        "value": 10,
        "element": "Glace"
      },
      {
        "value": 10,
        "element": "Foudre"
      }
    ]
  },
  "9": {
    "name": "Cotte de mailles",
    "weight": 4,
    "rank": 2,
    "slot": "Buste",
    "ARM": 6
  },
  "74": {
    "name": "Brigandine",
    "weight": 2,
    "rank": 1,
    "slot": "Buste",
    "ARM": 3,
    "RES": 3
  },
  "58": {
    "name": "Tunique en soie",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "ESQ": 15,
    "DM": 15,
    "INT": 2
  },
  "129": {
    "name": "Tenue améthyste",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "BonusMAG": 2,
    "RES": 6
  },
  "21": {
    "name": "Pèlerine en soie",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "ESQ": 15,
    "DM": 15,
    "DIS": 10
  },
  "192": {
    "name": "Plastron miroir",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 5,
    "DM": 15
  },
  "334": {
    "name": "Manteau du nomade",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ESQ": 10,
    "DM": 10,
    "bonusPa": 100
  },
  "318": {
    "name": "Manteau de rôdeur",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "ESQ": 15,
    "DIS": 15,
    "DEX": 2
  },
  "313": {
    "name": "Harlequine",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 3,
    "RES": 3,
    "MM": 10
  },
  "232": {
    "name": "Dérobade en soie",
    "weight": 1,
    "rank": 3,
    "slot": "Buste",
    "RES": 5,
    "MM": 10
  },
  "81": {
    "name": "Cuirasse",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "BonusDGT": 2,
    "ARM": 6
  },
  "236": {
    "name": "Cotte de mailles en mithril",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 7,
    "doubleSetting": true
  },
  "82": {
    "name": "Armure de plates",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 8
  },
  "87": {
    "name": "Armure astrale",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 6,
    "DEX": 2
  },
  "307": {
    "name": "Tunique de l'ombre",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "PRE": 10,
    "ESQ": 15,
    "DIS": 15
  },
  "197": {
    "name": "Plastron terrifiant",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 6,
    "FOR": 2
  },
  "31": {
    "name": "Plastron noble",
    "weight": 3,
    "rank": 3,
    "slot": "Buste",
    "ARM": 6,
    "INT": 2
  },
  "161": {
    "name": "Kimono",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "ARM": 3,
    "RES": 3,
    "ESQ": 10
  },
  "106": {
    "name": "Ceinture de force",
    "weight": 1,
    "rank": 3,
    "slot": "Buste",
    "ARM": 2,
    "RES": 2,
    "ESQ": 10,
    "FOR": 2
  },
  "111": {
    "name": "Cape",
    "weight": 1,
    "rank": 3,
    "slot": "Buste",
    "ESQ": 15,
    "DM": 15,
    "CHA": 2
  },
  "191": {
    "name": "Bliaut",
    "weight": 2,
    "rank": 3,
    "slot": "Buste",
    "BonusDGT": 2,
    "ESQ": 10,
    "DM": 10,
    "DIS": 10
  },
  "435": {
    "name": "Torche",
    "weight": 2,
    "rank": 2,
    "weaponType": "Autre",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 1,
      "statuses": [
        {
          "value": 1,
          "status": "Brûlure"
        }
      ]
    },
    "OBS": 10
  },
  "1": {
    "name": "Epée courte",
    "weight": 1,
    "rank": 1,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4
    }
  },
  "316": {
    "name": "Epée de cauchemar",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Terreur"
        }
      ]
    }
  },
  "114": {
    "name": "Lame",
    "weight": 2,
    "rank": 2,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7
    }
  },
  "56": {
    "name": "Glaive",
    "weight": 2,
    "rank": 2,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4
    }
  },
  "196": {
    "name": "Langue démon",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Nécrose"
        }
      ]
    }
  },
  "119": {
    "name": "Falchion",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 9
    }
  },
  "204": {
    "name": "Cimeterre",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 6
    }
  },
  "328": {
    "name": "Badelaire ardent",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 4,
      "element": "Feu",
      "statuses": [
        {
          "value": 2,
          "status": "Brûlure"
        }
      ]
    }
  },
  "311": {
    "name": "Main-gauche",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3
    },
    "offhandAttack": {
      "usageCost": 4,
      "BonusDGT": 5,
      "PRE": 10
    },
    "ESQ": 5
  },
  "252": {
    "name": "Lame solaire",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 6,
      "element": "Lumière"
    },
    "CHA": 2
  },
  "136": {
    "name": "Epée noble",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4
    },
    "INT": 2
  },
  "100": {
    "name": "Epée de spadassin",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4,
      "PRE": 10
    },
  },
  "27": {
    "name": "Barong",
    "weight": 2,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 2,
          "status": "Saignement"
        }
      ]
    }
  },
  "23": {
    "name": "Sceptre",
    "weight": 2,
    "rank": 1,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 4
  },
  "441": {
    "name": "Baguette",
    "weight": 2,
    "rank": 2,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 4,
    "MM": 5
  },
  "290": {
    "name": "Sceptre foudre",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0,
      "element": "Foudre"
    },
    "BonusMAG": 4,
    "elementaryAffinity": "Foudre"
  },
  "206": {
    "name": "Sceptre en mithril",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "doubleSetting": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 3,
    "MM": 10
  },
  "366": {
    "name": "Sceptre de pouvoir",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 6
  },
  "250": {
    "name": "Orbe démon",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0,
      "element": "Ombre"
    },
    "BonusMAG": 6,
    "ESP": -2,
    "elementaryAffinity": "Ombre"
  },
  "309": {
    "name": "Orbe angélique",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0,
      "element": "Lumière"
    },
    "BonusMAG": 2,
    "ESP": 2,
    "elementaryAffinity": "Lumière"
  },
  "110": {
    "name": "Crosse tellurique",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 5,
    "CON": 1
  },
  "76": {
    "name": "Sceptre émeraude",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 4,
    "MM": 10
  },
  "207": {
    "name": "Sceptre noble",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5
    },
    "BonusMAG": 4
  },
  "117": {
    "name": "Sceptre lumière",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0,
      "element": "Lumière"
    },
    "BonusMAG": 2,
    "OBS": 10,
    "elementaryAffinity": "Lumière"
  },
  "205": {
    "name": "Sceptre glace",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0,
      "element": "Glace"
    },
    "BonusMAG": 4,
    "elementaryAffinity": "Glace"
  },
  "289": {
    "name": "Sceptre coeur",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 3,
    "regeneration": 2,
    "INT": 2
  },
  "34": {
    "name": "Coutelas",
    "weight": 1,
    "rank": 0,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3
    }
  },
  "51": {
    "name": "Dague",
    "weight": 1,
    "rank": 1,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "PRE": 5
    }
  },
  "452": {
    "name": "Dague courbe",
    "weight": 1,
    "rank": 2,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "PRE": 10
    }
  },
  "362": {
    "name": "Dague sinistre",
    "weight": 1,
    "rank": 3,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 2,
      "element": "Ombre",
      "statuses": [
        {
          "value": 1,
          "status": "Cécité"
        }
      ]
    }
  },
  "47": {
    "name": "Poignard",
    "weight": 1,
    "rank": 3,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Faille"
        }
      ]
    }
  },
  "141": {
    "name": "Kandjar",
    "weight": 1,
    "rank": 3,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "PRE": 15
    }
  },
  "53": {
    "name": "Kukri",
    "weight": 1,
    "rank": 3,
    "weaponType": "Dague",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Saignement"
        }
      ]
    }
  },
  "296": {
    "name": "Tonfa",
    "weight": 2,
    "rank": 1,
    "weaponType": "Gant",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3
    },
    "ARM": 1
  },
  "453": {
    "name": "Ceste",
    "weight": 2,
    "rank": 2,
    "weaponType": "Gant",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3
    },
    "ARM": 1,
    "ESQ": 5
  },
  "167": {
    "name": "Griffes larges",
    "weight": 2,
    "rank": 3,
    "weaponType": "Gant",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4
    },
    "ARM": 1,
    "ESQ": 5
  },
  "80": {
    "name": "Griffes",
    "weight": 1,
    "rank": 3,
    "weaponType": "Gant",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 2,
      "PRE": 10
    },
    "ARM": 1,
    "ESQ": 5
  },
  "14": {
    "name": "Gantelet",
    "weight": 2,
    "rank": 3,
    "weaponType": "Gant",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 1,
          "status": "Assommé"
        }
      ]
    },
    "ARM": 2
  },
  "357": {
    "name": "Manicle embrasée",
    "weight": 2,
    "rank": 3,
    "weaponType": "Gant",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 2,
      "element": "Feu",
      "statuses": [
        {
          "value": 1,
          "status": "Assommé"
        },
        {
          "value": 1,
          "status": "Brûlure"
        }
      ]
    },
    "ARM": 2
  },
  "444": {
    "name": "Pistolet",
    "weight": 2,
    "rank": 2,
    "weaponType": "Fusil",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "150": {
    "name": "Fouet",
    "weight": 2,
    "rank": 1,
    "weaponType": "Fouet",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 2,
      "range": {
        "min": 1,
        "max": 2
      }
    }
  },
  "356": {
    "name": "Fouet enflammé",
    "weight": 2,
    "rank": 3,
    "weaponType": "Fouet",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 3,
      "range": {
        "min": 1,
        "max": 2
      },
      "element": "Feu",
      "statuses": [
        {
          "value": 1,
          "status": "Brûlure"
        }
      ]
    }
  },
  "151": {
    "name": "Magifouet",
    "weight": 2,
    "rank": 3,
    "weaponType": "Fouet",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 4,
      "range": {
        "min": 1,
        "max": 2
      }
    },
    "BonusMAG": 2
  },
  "157": {
    "name": "Fouet-lame",
    "weight": 2,
    "rank": 3,
    "weaponType": "Fouet",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 6,
      "range": {
        "min": 1,
        "max": 2
      }
    }
  },
  "292": {
    "name": "Hachoir",
    "weight": 2,
    "rank": 1,
    "weaponType": "Hache",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 2
    }
  },
  "148": {
    "name": "Hache",
    "weight": 2,
    "rank": 1,
    "weaponType": "Hache",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Saignement"
        }
      ]
    }
  },
  "101": {
    "name": "Tomahawk",
    "weight": 2,
    "rank": 2,
    "weaponType": "Hache",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 1,
          "status": "Saignement"
        }
      ]
    }
  },
  "103": {
    "name": "Hache de guerre",
    "weight": 2,
    "rank": 3,
    "weaponType": "Hache",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 2,
          "status": "Saignement"
        }
      ]
    }
  },
  "364": {
    "name": "Crépusculaire",
    "weight": 2,
    "rank": 3,
    "weaponType": "Lance",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 4,
      "element": "Ombre",
      "statuses": [
        {
          "value": 2,
          "status": "Cécité"
        }
      ]
    }
  },
  "62": {
    "name": "Croc de fer",
    "weight": 2,
    "rank": 2,
    "weaponType": "Lance",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 1,
          "status": "Faille"
        }
      ]
    }
  },
  "168": {
    "name": "Trident",
    "weight": 2,
    "rank": 3,
    "weaponType": "Lance",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7
    },
    "ESQ": 10
  },
  "308": {
    "name": "Lance",
    "weight": 2,
    "rank": 3,
    "weaponType": "Lance",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 2,
          "status": "Faille"
        }
      ]
    }
  },
  "284": {
    "name": "Gourdin clouté",
    "weight": 2,
    "rank": 1,
    "weaponType": "Masse",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Assommé"
        }
      ]
    }
  },
  "401": {
    "name": "Maillet",
    "weight": 2,
    "rank": 2,
    "weaponType": "Masse",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 1,
          "status": "Assommé"
        }
      ]
    }
  },
  "125": {
    "name": "Masse purificatrice",
    "weight": 2,
    "rank": 3,
    "weaponType": "Masse",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 6,
      "element": "Lumière"
    },
    "INT": 2
  },
  "49": {
    "name": "Masse",
    "weight": 2,
    "rank": 3,
    "weaponType": "Masse",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 3,
      "statuses": [
        {
          "value": 1,
          "status": "Assommé"
        }
      ]
    }
  },
  "60": {
    "name": "Fléau d'armes",
    "weight": 2,
    "rank": 3,
    "weaponType": "Masse",
    "slot": "Une main",
    "attack": {
      "usageCost": 5,
      "BonusDGT": 5,
      "statuses": [
        {
          "value": 2,
          "status": "Assommé"
        }
      ]
    }
  },
  "54": {
    "name": "Bâton de voyage",
    "weight": 5,
    "rank": 1,
    "weaponType": "Autre",
    "slot": "Une main",
    "attack": {
      "usageCost": 4,
      "BonusDGT": 2
    },
    "bonusPa": 100
  },
  "91": {
    "name": "Targe",
    "weight": 1,
    "rank": 1,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 2
  },
  "2": {
    "name": "Rondache",
    "weight": 2,
    "rank": 1,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 2
  },
  "451": {
    "name": "Bouclier ancien",
    "weight": 2,
    "rank": 2,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 3
  },
  "355": {
    "name": "Bouclier de la fournaise",
    "weight": 2,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 3,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Feu"
      }
    ]
  },
  "28": {
    "name": "Ecu en cuivre",
    "weight": 2,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 4
  },
  "270": {
    "name": "Bouclier dragon",
    "weight": 2,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 3,
    "magicalSpace": 1
  },
  "203": {
    "name": "Pavois phénix",
    "weight": 2,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "regeneration": 2,
    "ARM": 3
  },
  "29": {
    "name": "Bouclier à pointes",
    "weight": 2,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "BonusDGT": 1,
    "ARM": 3
  },
  "126": {
    "name": "Bouclier sacré",
    "weight": 3,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 3,
    "INT": 1
  },
  "243": {
    "name": "Bouclier ailé",
    "weight": 2,
    "rank": 3,
    "weaponType": "Bouclier",
    "slot": "Une main",
    "ARM": 2,
    "ESQ": 10
  },
  "104": {
    "name": "Lanterne",
    "weight": 1,
    "rank": 2,
    "weaponType": "Autre",
    "slot": "Une main",
    "OBS": 15
  },
  "367": {
    "name": "Codex de pouvoir",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "BonusMAG": 1,
    "magicalSpace": 3
  },
  "256": {
    "name": "Tome de cristal",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "DM": 5,
    "magicalSpace": 3
  },
  "257": {
    "name": "Testament rituel",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "ESP": 1,
    "magicalSpace": 3
  },
  "226": {
    "name": "Recueil sacré",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "ARM": 1,
    "magicalSpace": 3
  },
  "224": {
    "name": "Ouvrage sylvestre",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "DEX": 1,
    "magicalSpace": 3
  },
  "227": {
    "name": "Livre des morts",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "FOR": 1,
    "magicalSpace": 3
  },
  "275": {
    "name": "Grimoire astral",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "MM": 5,
    "magicalSpace": 3
  },
  "24": {
    "name": "Grimoire",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "INT": 1,
    "magicalSpace": 3
  },
  "442": {
    "name": "Manuel de magie",
    "weight": 2,
    "rank": 2,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "magicalSpace": 3
  },
  "428": {
    "name": "Carnet de novice",
    "weight": 2,
    "rank": 1,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "magicalSpace": 2
  },
  "231": {
    "name": "Brassard runique",
    "weight": 2,
    "rank": 3,
    "weaponType": "Réceptacle de sorts",
    "slot": "Une main",
    "ARM": 1,
    "MM": 10,
    "magicalSpace": 1
  },
  "102": {
    "name": "Harpe elfique",
    "weight": 1,
    "rank": 3,
    "weaponType": "Instrument",
    "slot": "Une main",
    "MM": 10,
    "CHA": 2
  },
  "199": {
    "name": "Flûte",
    "weight": 1,
    "rank": 3,
    "weaponType": "Instrument",
    "slot": "Une main",
    "ESQ": 10,
    "CHA": 2
  },
  "85": {
    "name": "Conque de chasse",
    "weight": 1,
    "rank": 3,
    "weaponType": "Instrument",
    "slot": "Une main",
    "PRE": 10,
    "CHA": 2
  },
  "200": {
    "name": "Cloche",
    "weight": 1,
    "rank": 3,
    "weaponType": "Instrument",
    "slot": "Une main",
    "DM": 10,
    "CHA": 2
  },
  "443": {
    "name": "Mandoline",
    "weight": 2,
    "rank": 2,
    "weaponType": "Instrument",
    "slot": "Une main",
    "CHA": 3
  },
  "437": {
    "name": "Luth",
    "weight": 2,
    "rank": 1,
    "weaponType": "Instrument",
    "slot": "Une main",
    "CHA": 2
  },
  "269": {
    "name": "Castagnettes",
    "weight": 1,
    "rank": 3,
    "weaponType": "Instrument",
    "slot": "Une main",
    "bonusPa": 50,
    "CHA": 2
  },
  "88": {
    "name": "Calice",
    "weight": 2,
    "rank": 2,
    "weaponType": "Symbole",
    "slot": "Une main",
    "RES": 3
  },
  "190": {
    "name": "Bracelet miroir",
    "weight": 1,
    "rank": 3,
    "weaponType": "Symbole",
    "slot": "Une main",
    "RES": 2,
    "DM": 10
  },
  "337": {
    "name": "Eventail noble",
    "weight": 1,
    "rank": 3,
    "weaponType": "Symbole",
    "slot": "Une main",
    "ESP": 2,
    "DM": 10
  },
  "336": {
    "name": "Eventail",
    "weight": 1,
    "rank": 3,
    "weaponType": "Symbole",
    "slot": "Une main",
    "ESP": 2,
    "ESQ": 10
  },
  "312": {
    "name": "Cercle coeur",
    "weight": 1,
    "rank": 3,
    "weaponType": "Symbole",
    "slot": "Une main",
    "regeneration": 2,
    "RES": 3
  },
  "39": {
    "name": "Arc court",
    "weight": 2,
    "rank": 1,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "127": {
    "name": "Arc de chasseur",
    "weight": 2,
    "rank": 2,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 5,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "128": {
    "name": "Arc composite",
    "weight": 2,
    "rank": 2,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "363": {
    "name": "Arc funeste",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 6,
      "element": "Ombre",
      "range": {
        "min": 2,
        "max": 3
      },
      "statuses": [
        {
          "value": 1,
          "status": "Cécité"
        }
      ]
    }
  },
  "79": {
    "name": "Arc sylvain",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 6,
      "range": {
        "min": 2,
        "max": 3
      },
      "PRE": 15
    }
  },
  "17": {
    "name": "Arc lourd composite",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 9,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "230": {
    "name": "Arc de rôdeur",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 4,
      "range": {
        "min": 2,
        "max": 3
      }
    },
    "DEX": 2
  },
  "163": {
    "name": "Arc béni",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 6,
      "element": "Lumière",
      "range": {
        "min": 2,
        "max": 3
      }
    },
    "INT": 2
  },
  "109": {
    "name": "Arc de guerre",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7,
      "range": {
        "min": 2,
        "max": 3
      },
      "statuses": [
        {
          "value": 1,
          "status": "Saignement"
        }
      ]
    }
  },
  "294": {
    "name": "Arc d'élite",
    "weight": 2,
    "rank": 3,
    "weaponType": "Arc",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7,
      "range": {
        "min": 2,
        "max": 3
      },
      "statuses": [
        {
          "value": 1,
          "status": "Faille"
        }
      ]
    }
  },
  "327": {
    "name": "Fusil",
    "weight": 3,
    "rank": 2,
    "weaponType": "Fusil",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "326": {
    "name": "Carabine harpie",
    "weight": 3,
    "rank": 3,
    "weaponType": "Fusil",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 4,
      "range": {
        "min": 2,
        "max": 4
      },
      "PRE": 10
    }
  },
  "98": {
    "name": "Arquebuse en bois",
    "weight": 3,
    "rank": 3,
    "weaponType": "Fusil",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 9,
      "range": {
        "min": 2,
        "max": 3
      }
    }
  },
  "108": {
    "name": "Masse géante",
    "weight": 5,
    "rank": 3,
    "weaponType": "Masse",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 8,
      "statuses": [
        {
          "value": 2,
          "status": "Assommé"
        }
      ]
    }
  },
  "244": {
    "name": "Hache double",
    "weight": 5,
    "rank": 3,
    "weaponType": "Hache",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 8,
      "statuses": [
        {
          "value": 2,
          "status": "Saignement"
        }
      ]
    }
  },
  "445": {
    "name": "Masse de siège",
    "weight": 4,
    "rank": 2,
    "weaponType": "Masse",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 7,
      "statuses": [
        {
          "value": 1,
          "status": "Assommé"
        }
      ]
    }
  },
  "10": {
    "name": "Epée large",
    "weight": 4,
    "rank": 1,
    "weaponType": "Épée",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 5
    }
  },
  "448": {
    "name": "Espadon",
    "weight": 4,
    "rank": 2,
    "weaponType": "Épée",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 7
    }
  },
  "246": {
    "name": "Epée géante",
    "weight": 4,
    "rank": 2,
    "weaponType": "Épée",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 9
    }
  },
  "245": {
    "name": "Guillotineuse",
    "weight": 5,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 10
    },
    "ESQ": 10
  },
  "147": {
    "name": "Flamberge",
    "weight": 5,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 12
    }
  },
  "122": {
    "name": "Claymore",
    "weight": 5,
    "rank": 3,
    "weaponType": "Épée",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 5,
      "BonusDGT": 10,
      "PRE": 10
    }
  },
  "412": {
    "name": "Bâton d'apprenti",
    "weight": 2,
    "rank": 1,
    "weaponType": "Focaliseur de sorts",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 5
  },
  "454": {
    "name": "Bâton de sorcier",
    "weight": 2,
    "rank": 2,
    "weaponType": "Focaliseur de sorts",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 7
  },
  "455": {
    "name": "Bâton d'hérétique",
    "weight": 2,
    "rank": 3,
    "weaponType": "Focaliseur de sorts",
    "slot": "Deux mains",
    "doubleSetting": true,
    "enhancedEnchantment": true,
    "attack": {
      "usageCost": 4,
      "BonusDGT": 0
    },
    "BonusMAG": 9
  },
  "30": {
    "name": "Jambières",
    "weight": 2,
    "rank": 1,
    "slot": "Pieds",
    "ARM": 2
  },
  "57": {
    "name": "Souliers",
    "weight": 1,
    "rank": 1,
    "slot": "Pieds",
    "RES": 2
  },
  "22": {
    "name": "Chaussons",
    "weight": 1,
    "rank": 1,
    "slot": "Pieds",
    "DIS": 10
  },
  "8": {
    "name": "Bottes",
    "weight": 1,
    "rank": 1,
    "slot": "Pieds",
    "ARM": 1,
    "RES": 1
  },
  "260": {
    "name": "Jambières en cuivre",
    "weight": 2,
    "rank": 2,
    "slot": "Pieds",
    "ARM": 3
  },
  "156": {
    "name": "Bottines",
    "weight": 1,
    "rank": 2,
    "slot": "Pieds",
    "ARM": 1,
    "RES": 1,
    "ESQ": 5
  },
  "229": {
    "name": "Chaussons en soie",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "ESQ": 10,
    "DM": 10
  },
  "261": {
    "name": "Bottes runiques",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "ARM": 2,
    "DM": 10
  },
  "335": {
    "name": "Bottes du nomade",
    "weight": 2,
    "rank": 3,
    "slot": "Pieds",
    "ESQ": 5,
    "DM": 5,
    "bonusPa": 50
  },
  "77": {
    "name": "Souliers en soie",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "BonusMAG": 1,
    "RES": 3
  },
  "95": {
    "name": "Mocassins",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "RES": 3,
    "INT": 1
  },
  "239": {
    "name": "Jambières en mithril",
    "weight": 2,
    "rank": 3,
    "slot": "Pieds",
    "ARM": 3,
    "doubleSetting": true
  },
  "64": {
    "name": "Brodequins",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "ARM": 2,
    "RES": 2
  },
  "149": {
    "name": "Bottines sylvaines",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "ESQ": 10,
    "DIS": 10
  },
  "138": {
    "name": "Bottillons ailés",
    "weight": 1,
    "rank": 3,
    "slot": "Pieds",
    "ARM": 2,
    "ESQ": 10
  },
  "181": {
    "name": "Anneau",
    "weight": 1,
    "rank": 1,
    "slot": "Fétiche",
    "BonusDGT": 1
  },
  "369": {
    "name": "Ame légendaire",
    "weight": 1,
    "rank": 3,
    "slot": "Fétiche",
    "BonusDGT": 1,
    "BonusMAG": 1,
    "ARM": 1,
    "RES": 1,
    "noGems": true
  },
  "212": {
    "name": "Trèfle à quatre feuilles",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "bonusPa": 50
  },
  "228": {
    "name": "Talisman du centaure",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "PRE": 5,
    "FOR": 1
  },
  "115": {
    "name": "Talisman de la dryade",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "PRE": 5,
    "DEX": 1
  },
  "186": {
    "name": "Perle",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "ESP": 2
  },
  "118": {
    "name": "Médaillon du vétéran",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "ARM": 1,
    "RES": 1
  },
  "75": {
    "name": "Bracelet",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "PRE": 5,
    "ESQ": 5
  },
  "447": {
    "name": "Bracelet des étoiles",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "MM": 5,
    "DM": 5
  },
  "216": {
    "name": "Boucle en or",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "PRE": 5,
    "MM": 5
  },
  "20": {
    "name": "Bague rubis",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "PRE": 5,
    "INT": 1
  },
  "185": {
    "name": "Anneau corail",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "MM": 5,
    "INT": 1
  },
  "182": {
    "name": "Anneau ailé",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "ARM": 1,
    "ESQ": 5
  },
  "287": {
    "name": "Amulette gelée",
    "weight": 1,
    "rank": 2,
    "slot": "Fétiche",
    "DM": 5,
    "RES": 1
  }
};

// Injecte item.id depuis la clé string — source unique de vérité, zéro redondance.
for (const [k, v] of Object.entries(ITEMS)) v.id = +k;
