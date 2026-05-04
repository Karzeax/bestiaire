// Fiches descriptives des items, indexées par id.
const ITEMS = {
  "1": {
    "id": 1,
    "name": "Epée courte",
    "weight": 1,
    "BonusDGT": 4,
    "usageCost": 4,
    "slot": "Une main"
  },
  "2": {
    "id": 2,
    "name": "Rondache",
    "weight": 2,
    "ARM": 2,
    "slot": "Une main"
  },
  "7": {
    "id": 7,
    "name": "Cabasset en cuivre",
    "weight": 1,
    "ARM": 2,
    "slot": "Tête"
  },
  "8": {
    "id": 8,
    "name": "Bottes",
    "weight": 1,
    "ARM": 1,
    "RES": 1,
    "slot": "Pieds"
  },
  "9": {
    "id": 9,
    "name": "Cotte de mailles",
    "weight": 4,
    "ARM": 6,
    "slot": "Buste"
  },
  "10": {
    "id": 10,
    "name": "Epée large",
    "weight": 4,
    "usageCost": 4,
    "BonusDGT": 5,
    "slot": "Deux mains"
  },
  "11": {
    "id": 11,
    "name": "Heaume",
    "weight": 2,
    "ARM": 4,
    "slot": "Tête"
  },
  "14": {
    "id": 14,
    "name": "Gantelet",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 5,
    "ARM": 2,
    "status": [
      {
        "value": 1,
        "status": "Assommé"
      }
    ],
    "slot": "Une main"
  },
  "17": {
    "id": 17,
    "name": "Arc lourd composite",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 9,
    "slot": "Deux mains"
  },
  "18": {
    "id": 18,
    "name": "Toge",
    "weight": 1,
    "RES": 4,
    "slot": "Buste"
  },
  "19": {
    "id": 19,
    "name": "Toque",
    "weight": 1,
    "ARM": 1,
    "RES": 1,
    "slot": "Tête"
  },
  "20": {
    "id": 20,
    "name": "Bague rubis",
    "weight": 1,
    "PRE": 5,
    "INT": 1,
    "slot": "Fétiche"
  },
  "21": {
    "id": 21,
    "name": "Pèlerine en soie",
    "weight": 2,
    "ESQ": 15,
    "DM": 15,
    "DIS": 10,
    "slot": "Buste"
  },
  "22": {
    "id": 22,
    "name": "Chaussons",
    "weight": 1,
    "DIS": 10,
    "slot": "Pieds"
  },
  "23": {
    "id": 23,
    "name": "Sceptre",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 4,
    "slot": "Une main"
  },
  "24": {
    "id": 24,
    "name": "Grimoire",
    "weight": 2,
    "INT": 1,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "25": {
    "id": 25,
    "name": "Coiffe en soie",
    "weight": 1,
    "BonusMAG": 1,
    "RES": 3,
    "slot": "Tête"
  },
  "27": {
    "id": 27,
    "name": "Barong",
    "weight": 2,
    "BonusDGT": 5,
    "usageCost": 5,
    "status": [
      {
        "value": 2,
        "status": "Saignement"
      }
    ],
    "slot": "Une main"
  },
  "28": {
    "id": 28,
    "name": "Ecu en cuivre",
    "weight": 2,
    "ARM": 4,
    "slot": "Une main"
  },
  "29": {
    "id": 29,
    "name": "Bouclier à pointes",
    "weight": 2,
    "BonusDGT": 1,
    "ARM": 3,
    "slot": "Une main"
  },
  "30": {
    "id": 30,
    "name": "Jambières",
    "weight": 2,
    "ARM": 2,
    "slot": "Pieds"
  },
  "31": {
    "id": 31,
    "name": "Plastron noble",
    "weight": 3,
    "ARM": 6,
    "INT": 2,
    "slot": "Buste"
  },
  "32": {
    "id": 32,
    "name": "Casque",
    "weight": 2,
    "ARM": 3,
    "slot": "Tête"
  },
  "34": {
    "id": 34,
    "name": "Coutelas",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 3,
    "slot": "Une main"
  },
  "39": {
    "id": 39,
    "name": "Arc court",
    "weight": 2,
    "usageCost": 4,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 4,
    "slot": "Deux mains"
  },
  "47": {
    "id": 47,
    "name": "Poignard",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 3,
    "status": [
      {
        "value": 1,
        "status": "Faille"
      }
    ],
    "slot": "Une main"
  },
  "48": {
    "id": 48,
    "name": "Armure en cuir",
    "weight": 2,
    "ARM": 2,
    "RES": 2,
    "slot": "Buste"
  },
  "49": {
    "id": 49,
    "name": "Masse",
    "weight": 2,
    "usageCost": 4,
    "BonusDGT": 3,
    "status": [
      {
        "value": 1,
        "status": "Assommé"
      }
    ],
    "slot": "Une main"
  },
  "51": {
    "id": 51,
    "name": "Dague",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 3,
    "PRE": 5,
    "slot": "Une main"
  },
  "53": {
    "id": 53,
    "name": "Kukri",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 3,
    "status": [
      {
        "value": 1,
        "status": "Saignement"
      }
    ],
    "slot": "Une main"
  },
  "54": {
    "id": 54,
    "name": "Bâton de voyage",
    "weight": 5,
    "BonusDGT": 2,
    "usageCost": 4,
    "Bonus PA": 100,
    "slot": "Une main"
  },
  "55": {
    "id": 55,
    "name": "Haillon",
    "weight": 1,
    "ARM": 1,
    "RES": 1,
    "slot": "Buste"
  },
  "56": {
    "id": 56,
    "name": "Glaive",
    "weight": 2,
    "BonusDGT": 4,
    "usageCost": 4,
    "slot": "Une main"
  },
  "57": {
    "id": 57,
    "name": "Souliers",
    "weight": 1,
    "RES": 2,
    "slot": "Pieds"
  },
  "58": {
    "id": 58,
    "name": "Tunique en soie",
    "weight": 2,
    "ESQ": 15,
    "DM": 15,
    "INT": 2,
    "slot": "Buste"
  },
  "59": {
    "id": 59,
    "name": "Bandana",
    "weight": 1,
    "ESQ": 10,
    "slot": "Tête"
  },
  "60": {
    "id": 60,
    "name": "Fléau d'armes",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 5,
    "status": [
      {
        "value": 2,
        "status": "Assommé"
      }
    ],
    "slot": "Une main"
  },
  "62": {
    "id": 62,
    "name": "Croc de fer",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 5,
    "status": [
      {
        "value": 1,
        "status": "Faille"
      }
    ],
    "slot": "Une main"
  },
  "64": {
    "id": 64,
    "name": "Brodequins",
    "weight": 1,
    "ARM": 2,
    "RES": 2,
    "slot": "Pieds"
  },
  "74": {
    "id": 74,
    "name": "Brigandine",
    "weight": 2,
    "ARM": 3,
    "RES": 3,
    "slot": "Buste"
  },
  "75": {
    "id": 75,
    "name": "Bracelet",
    "weight": 1,
    "PRE": 5,
    "ESQ": 5,
    "slot": "Fétiche"
  },
  "76": {
    "id": 76,
    "name": "Sceptre émeraude",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 4,
    "MM": 10,
    "slot": "Une main"
  },
  "77": {
    "id": 77,
    "name": "Souliers en soie",
    "weight": 1,
    "BonusMAG": 1,
    "RES": 3,
    "slot": "Pieds"
  },
  "78": {
    "id": 78,
    "name": "Plastron",
    "weight": 3,
    "ARM": 4,
    "slot": "Buste"
  },
  "79": {
    "id": 79,
    "name": "Arc sylvain",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 6,
    "PRE": 15,
    "slot": "Deux mains"
  },
  "80": {
    "id": 80,
    "name": "Griffes",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 2,
    "PRE": 10,
    "ARM": 1,
    "ESQ": 5,
    "slot": "Une main"
  },
  "81": {
    "id": 81,
    "name": "Cuirasse",
    "weight": 3,
    "BonusDGT": 2,
    "ARM": 6,
    "slot": "Buste"
  },
  "82": {
    "id": 82,
    "name": "Armure de plates",
    "weight": 3,
    "ARM": 8,
    "slot": "Buste"
  },
  "83": {
    "id": 83,
    "name": "Chapeau du nomade",
    "weight": 1,
    "ESQ": 5,
    "DM": 5,
    "Bonus PA": 50,
    "slot": "Tête"
  },
  "85": {
    "id": 85,
    "name": "Conque de chasse",
    "weight": 1,
    "PRE": 10,
    "CHA": 2,
    "slot": "Une main"
  },
  "86": {
    "id": 86,
    "name": "Casque astral",
    "weight": 3,
    "ARM": 3,
    "DEX": 1,
    "slot": "Tête"
  },
  "87": {
    "id": 87,
    "name": "Armure astrale",
    "weight": 3,
    "ARM": 6,
    "DEX": 2,
    "slot": "Buste"
  },
  "88": {
    "id": 88,
    "name": "Calice",
    "RES": 3,
    "weight": 2,
    "slot": "Une main"
  },
  "91": {
    "id": 91,
    "name": "Targe",
    "weight": 1,
    "ARM": 2,
    "slot": "Une main"
  },
  "92": {
    "id": 92,
    "name": "Toge en soie",
    "weight": 2,
    "RES": 6,
    "slot": "Buste"
  },
  "95": {
    "id": 95,
    "name": "Mocassins",
    "weight": 1,
    "RES": 3,
    "INT": 1,
    "slot": "Pieds"
  },
  "98": {
    "id": 98,
    "name": "Arquebuse en bois",
    "weight": 3,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 9,
    "slot": "Deux mains"
  },
  "100": {
    "id": 100,
    "name": "Epée de spadassin",
    "weight": 2,
    "BonusDGT": 4,
    "PRE": 10,
    "usageCost": 4,
    "slot": "Une main"
  },
  "101": {
    "id": 101,
    "name": "Tomahawk",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 5,
    "status": [
      {
        "value": 1,
        "status": "Saignement"
      }
    ],
    "slot": "Une main"
  },
  "102": {
    "id": 102,
    "name": "Harpe elfique",
    "weight": 1,
    "MM": 10,
    "CHA": 2,
    "slot": "Une main"
  },
  "103": {
    "id": 103,
    "name": "Hache de guerre",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 5,
    "status": [
      {
        "value": 2,
        "status": "Saignement"
      }
    ],
    "slot": "Une main"
  },
  "104": {
    "id": 104,
    "name": "Lanterne",
    "OBS": 15,
    "weight": 1,
    "slot": "Une main"
  },
  "106": {
    "id": 106,
    "name": "Ceinture de force",
    "weight": 1,
    "ARM": 2,
    "RES": 2,
    "ESQ": 10,
    "FOR": 2,
    "slot": "Buste"
  },
  "108": {
    "id": 108,
    "name": "Masse géante",
    "weight": 5,
    "BonusDGT": 8,
    "status": [
      {
        "value": 2,
        "status": "Assommé"
      }
    ],
    "usageCost": 5,
    "slot": "Deux mains"
  },
  "109": {
    "id": 109,
    "name": "Arc de guerre",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 7,
    "status": [
      {
        "value": 1,
        "status": "Saignement"
      }
    ],
    "slot": "Deux mains"
  },
  "110": {
    "id": 110,
    "name": "Crosse tellurique",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 5,
    "CON": 1,
    "slot": "Une main"
  },
  "111": {
    "id": 111,
    "name": "Cape",
    "weight": 1,
    "ESQ": 15,
    "DM": 15,
    "CHA": 2,
    "slot": "Buste"
  },
  "114": {
    "id": 114,
    "name": "Lame",
    "weight": 2,
    "BonusDGT": 7,
    "usageCost": 5,
    "slot": "Une main"
  },
  "115": {
    "id": 115,
    "name": "Talisman de la dryade",
    "weight": 1,
    "PRE": 5,
    "DEX": 1,
    "slot": "Fétiche"
  },
  "117": {
    "id": 117,
    "name": "Sceptre lumière",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 2,
    "OBS": 10,
    "element": "Lumière",
    "elementaryAffinity": "Lumière",
    "slot": "Une main"
  },
  "118": {
    "id": 118,
    "name": "Médaillon du vétéran",
    "weight": 1,
    "ARM": 1,
    "RES": 1,
    "slot": "Fétiche"
  },
  "119": {
    "id": 119,
    "name": "Falchion",
    "weight": 2,
    "BonusDGT": 9,
    "usageCost": 5,
    "slot": "Une main"
  },
  "121": {
    "id": 121,
    "name": "Bonnet émeraude",
    "weight": 1,
    "RES": 3,
    "INT": 1,
    "slot": "Tête"
  },
  "122": {
    "id": 122,
    "name": "Claymore",
    "weight": 5,
    "usageCost": 5,
    "BonusDGT": 10,
    "PRE": 10,
    "slot": "Deux mains"
  },
  "124": {
    "id": 124,
    "name": "Veston",
    "weight": 1,
    "ARM": 1,
    "RES": 1,
    "DIS": 10,
    "slot": "Buste"
  },
  "125": {
    "id": 125,
    "name": "Masse purificatrice",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 6,
    "element": "Lumière",
    "INT": 2,
    "slot": "Une main"
  },
  "126": {
    "id": 126,
    "name": "Bouclier sacré",
    "weight": 3,
    "ARM": 3,
    "INT": 1,
    "slot": "Une main"
  },
  "127": {
    "id": 127,
    "name": "Arc de chasseur",
    "weight": 2,
    "usageCost": 4,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 5,
    "slot": "Deux mains"
  },
  "128": {
    "id": 128,
    "name": "Arc composite",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 7,
    "slot": "Deux mains"
  },
  "129": {
    "id": 129,
    "name": "Tenue améthyste",
    "weight": 2,
    "BonusMAG": 2,
    "RES": 6,
    "slot": "Buste"
  },
  "136": {
    "id": 136,
    "name": "Epée noble",
    "weight": 2,
    "BonusDGT": 4,
    "usageCost": 4,
    "INT": 2,
    "slot": "Une main"
  },
  "137": {
    "id": 137,
    "name": "Casque noble",
    "weight": 2,
    "ARM": 3,
    "INT": 1,
    "slot": "Tête"
  },
  "138": {
    "id": 138,
    "name": "Bottillons ailés",
    "weight": 1,
    "ARM": 2,
    "ESQ": 10,
    "slot": "Pieds"
  },
  "141": {
    "id": 141,
    "name": "Kandjar",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 3,
    "PRE": 15,
    "slot": "Une main"
  },
  "146": {
    "id": 146,
    "name": "Bandana en soie",
    "weight": 1,
    "ESQ": 10,
    "DM": 10,
    "slot": "Tête"
  },
  "147": {
    "id": 147,
    "name": "Flamberge",
    "weight": 5,
    "usageCost": 5,
    "BonusDGT": 12,
    "slot": "Deux mains"
  },
  "148": {
    "id": 148,
    "name": "Hache",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 3,
    "status": [
      {
        "value": 1,
        "status": "Saignement"
      }
    ],
    "slot": "Une main"
  },
  "149": {
    "id": 149,
    "name": "Bottines sylvaines",
    "weight": 1,
    "ESQ": 10,
    "DIS": 10,
    "slot": "Pieds"
  },
  "150": {
    "id": 150,
    "name": "Fouet",
    "weight": 2,
    "usageCost": 4,
    "range": {
      "min": 1,
      "max": 2
    },
    "BonusDGT": 2,
    "slot": "Une main"
  },
  "151": {
    "id": 151,
    "name": "Magifouet",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 1,
      "max": 2
    },
    "BonusDGT": 4,
    "BonusMAG": 2,
    "slot": "Une main"
  },
  "155": {
    "id": 155,
    "name": "Cabasset à cornes",
    "weight": 2,
    "BonusDGT": 1,
    "ARM": 3,
    "slot": "Tête"
  },
  "156": {
    "id": 156,
    "name": "Bottines",
    "weight": 1,
    "ARM": 1,
    "RES": 1,
    "ESQ": 5,
    "slot": "Pieds"
  },
  "157": {
    "id": 157,
    "name": "Fouet-lame",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 1,
      "max": 2
    },
    "BonusDGT": 6,
    "slot": "Une main"
  },
  "161": {
    "id": 161,
    "name": "Kimono",
    "weight": 2,
    "ARM": 3,
    "RES": 3,
    "ESQ": 10,
    "slot": "Buste"
  },
  "162": {
    "id": 162,
    "name": "Cagoule de l'ombre",
    "weight": 1,
    "ESQ": 10,
    "DIS": 10,
    "slot": "Tête"
  },
  "163": {
    "id": 163,
    "name": "Arc béni",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 6,
    "element": "Lumière",
    "INT": 2,
    "slot": "Deux mains"
  },
  "166": {
    "id": 166,
    "name": "Capuchon",
    "weight": 1,
    "RES": 2,
    "slot": "Tête"
  },
  "167": {
    "id": 167,
    "name": "Griffes larges",
    "weight": 2,
    "usageCost": 4,
    "BonusDGT": 4,
    "ARM": 1,
    "ESQ": 5,
    "slot": "Une main"
  },
  "168": {
    "id": 168,
    "name": "Trident",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 7,
    "ESQ": 10,
    "slot": "Une main"
  },
  "177": {
    "id": 177,
    "name": "Diadème",
    "weight": 1,
    "INT": 1,
    "ESP": 1,
    "CHA": 1,
    "slot": "Tête"
  },
  "181": {
    "id": 181,
    "name": "Anneau",
    "weight": 1,
    "BonusDGT": 1,
    "slot": "Fétiche"
  },
  "182": {
    "id": 182,
    "name": "Anneau ailé",
    "weight": 1,
    "ARM": 1,
    "ESQ": 5,
    "slot": "Fétiche"
  },
  "184": {
    "id": 184,
    "name": "Pèlerine",
    "weight": 2,
    "ESQ": 10,
    "DM": 10,
    "DIS": 10,
    "slot": "Buste"
  },
  "185": {
    "id": 185,
    "name": "Anneau corail",
    "weight": 1,
    "MM": 5,
    "INT": 1,
    "slot": "Fétiche"
  },
  "186": {
    "id": 186,
    "name": "Perle",
    "weight": 1,
    "ESP": 2,
    "slot": "Fétiche"
  },
  "190": {
    "id": 190,
    "name": "Bracelet miroir",
    "weight": 1,
    "RES": 2,
    "DM": 10,
    "slot": "Une main"
  },
  "191": {
    "id": 191,
    "name": "Bliaut",
    "weight": 2,
    "BonusDGT": 2,
    "ESQ": 10,
    "DM": 10,
    "DIS": 10,
    "slot": "Buste"
  },
  "192": {
    "id": 192,
    "name": "Plastron miroir",
    "weight": 3,
    "ARM": 5,
    "DM": 15,
    "slot": "Buste"
  },
  "193": {
    "id": 193,
    "name": "Plastron dragon",
    "weight": 3,
    "ARM": 6,
    "MM": 10,
    "slot": "Buste"
  },
  "194": {
    "id": 194,
    "name": "Casque terrifiant",
    "weight": 3,
    "ARM": 3,
    "FOR": 1,
    "slot": "Tête"
  },
  "196": {
    "id": 196,
    "name": "Langue démon",
    "weight": 2,
    "BonusDGT": 3,
    "usageCost": 4,
    "status": [
      {
        "value": 1,
        "status": "Nécrose"
      }
    ],
    "slot": "Une main"
  },
  "197": {
    "id": 197,
    "name": "Plastron terrifiant",
    "weight": 3,
    "ARM": 6,
    "FOR": 2,
    "slot": "Buste"
  },
  "198": {
    "id": 198,
    "name": "Fourrure",
    "weight": 2,
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
    ],
    "slot": "Buste"
  },
  "199": {
    "id": 199,
    "name": "Flûte",
    "weight": 1,
    "ESQ": 10,
    "CHA": 2,
    "slot": "Une main"
  },
  "200": {
    "id": 200,
    "name": "Cloche",
    "weight": 1,
    "DM": 10,
    "CHA": 2,
    "slot": "Une main"
  },
  "203": {
    "id": 203,
    "name": "Pavois phénix",
    "weight": 2,
    "regeneration": 2,
    "ARM": 3,
    "slot": "Une main"
  },
  "204": {
    "id": 204,
    "name": "Cimeterre",
    "weight": 2,
    "BonusDGT": 6,
    "usageCost": 4,
    "slot": "Une main"
  },
  "205": {
    "id": 205,
    "name": "Sceptre glace",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 4,
    "element": "Glace",
    "elementaryAffinity": "Glace",
    "slot": "Une main"
  },
  "206": {
    "id": 206,
    "name": "Sceptre en mithril",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 3,
    "MM": 10,
    "slot": "Une main"
  },
  "207": {
    "id": 207,
    "name": "Sceptre noble",
    "weight": 2,
    "BonusDGT": 5,
    "usageCost": 5,
    "BonusMAG": 4,
    "slot": "Une main"
  },
  "212": {
    "id": 212,
    "name": "Trèfle à quatre feuilles",
    "weight": 1,
    "Bonus PA": 50,
    "slot": "Fétiche"
  },
  "216": {
    "id": 216,
    "name": "Boucle en or",
    "weight": 1,
    "PRE": 5,
    "MM": 5,
    "slot": "Fétiche"
  },
  "224": {
    "id": 224,
    "name": "Ouvrage sylvestre",
    "weight": 2,
    "DEX": 1,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "226": {
    "id": 226,
    "name": "Recueil sacré",
    "weight": 2,
    "ARM": 1,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "227": {
    "id": 227,
    "name": "Livre des morts",
    "weight": 2,
    "FOR": 1,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "228": {
    "id": 228,
    "name": "Talisman du centaure",
    "weight": 1,
    "PRE": 5,
    "FOR": 1,
    "slot": "Fétiche"
  },
  "229": {
    "id": 229,
    "name": "Chaussons en soie",
    "weight": 1,
    "ESQ": 10,
    "DM": 10,
    "slot": "Pieds"
  },
  "230": {
    "id": 230,
    "name": "Arc de rôdeur",
    "weight": 2,
    "usageCost": 4,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 4,
    "DEX": 2,
    "slot": "Deux mains"
  },
  "231": {
    "id": 231,
    "name": "Brassard runique",
    "weight": 2,
    "ARM": 1,
    "MM": 10,
    "magicalSpace": 1,
    "slot": "Une main"
  },
  "232": {
    "id": 232,
    "name": "Dérobade en soie",
    "weight": 1,
    "RES": 5,
    "MM": 10,
    "slot": "Buste"
  },
  "233": {
    "id": 233,
    "name": "Bassinet plume",
    "weight": 2,
    "ARM": 3,
    "PRE": 5,
    "slot": "Tête"
  },
  "236": {
    "id": 236,
    "name": "Cotte de mailles en mithril",
    "weight": 3,
    "ARM": 7,
    "slot": "Buste"
  },
  "239": {
    "id": 239,
    "name": "Jambières en mithril",
    "weight": 2,
    "ARM": 3,
    "slot": "Pieds"
  },
  "243": {
    "id": 243,
    "name": "Bouclier ailé",
    "weight": 2,
    "ARM": 2,
    "ESQ": 10,
    "slot": "Une main"
  },
  "244": {
    "id": 244,
    "name": "Hache double",
    "weight": 5,
    "BonusDGT": 8,
    "status": [
      {
        "value": 2,
        "status": "Saignement"
      }
    ],
    "usageCost": 5,
    "slot": "Deux mains"
  },
  "245": {
    "id": 245,
    "name": "Guillotineuse",
    "weight": 5,
    "usageCost": 5,
    "BonusDGT": 10,
    "ESQ": 10,
    "slot": "Deux mains"
  },
  "246": {
    "id": 246,
    "name": "Epée géante",
    "weight": 4,
    "usageCost": 5,
    "BonusDGT": 9,
    "slot": "Deux mains"
  },
  "250": {
    "id": 250,
    "name": "Orbe démon",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 6,
    "ESP": -2,
    "element": "Ombre",
    "elementaryAffinity": "Ombre",
    "slot": "Une main"
  },
  "252": {
    "id": 252,
    "name": "Lame solaire",
    "weight": 2,
    "BonusDGT": 6,
    "usageCost": 4,
    "element": "Lumière",
    "CHA": 2,
    "slot": "Une main"
  },
  "256": {
    "id": 256,
    "name": "Tome de cristal",
    "weight": 2,
    "DM": 5,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "257": {
    "id": 257,
    "name": "Testament rituel",
    "weight": 2,
    "ESP": 1,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "260": {
    "id": 260,
    "name": "Jambières en cuivre",
    "weight": 2,
    "ARM": 3,
    "slot": "Pieds"
  },
  "261": {
    "id": 261,
    "name": "Bottes runiques",
    "weight": 1,
    "ARM": 2,
    "DM": 10,
    "slot": "Pieds"
  },
  "269": {
    "id": 269,
    "name": "Castagnettes",
    "weight": 1,
    "Bonus PA": 50,
    "CHA": 2,
    "slot": "Une main"
  },
  "270": {
    "id": 270,
    "name": "Bouclier dragon",
    "weight": 2,
    "ARM": 3,
    "magicalSpace": 1,
    "slot": "Une main"
  },
  "271": {
    "id": 271,
    "name": "Capuchon en soie",
    "weight": 1,
    "RES": 4,
    "slot": "Tête"
  },
  "275": {
    "id": 275,
    "name": "Grimoire astral",
    "weight": 2,
    "MM": 5,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "284": {
    "id": 284,
    "name": "Gourdin clouté",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 3,
    "status": [
      {
        "value": 1,
        "status": "Assommé"
      }
    ],
    "slot": "Une main"
  },
  "285": {
    "id": 285,
    "name": "Casque en bois",
    "weight": 1,
    "ARM": 2,
    "slot": "Tête"
  },
  "286": {
    "id": 286,
    "name": "Barrette en or",
    "weight": 1,
    "DM": 15,
    "slot": "Tête"
  },
  "287": {
    "id": 287,
    "name": "Amulette gelée",
    "weight": 1,
    "DM": 5,
    "RES": 1,
    "slot": "Fétiche"
  },
  "289": {
    "id": 289,
    "name": "Sceptre coeur",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 3,
    "INT": 2,
    "regeneration": 2,
    "slot": "Une main"
  },
  "290": {
    "id": 290,
    "name": "Sceptre foudre",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 4,
    "element": "Foudre",
    "elementaryAffinity": "Foudre",
    "slot": "Une main"
  },
  "291": {
    "id": 291,
    "name": "Capuche féline",
    "weight": 1,
    "ESQ": 15,
    "INT": 1,
    "slot": "Tête"
  },
  "292": {
    "id": 292,
    "name": "Hachoir",
    "weight": 2,
    "usageCost": 4,
    "BonusDGT": 2,
    "slot": "Une main"
  },
  "294": {
    "id": 294,
    "name": "Arc d'élite",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 7,
    "status": [
      {
        "value": 1,
        "status": "Faille"
      }
    ],
    "slot": "Deux mains"
  },
  "296": {
    "id": 296,
    "name": "Tonfa",
    "weight": 2,
    "usageCost": 4,
    "ARM": 1,
    "slot": "Une main"
  },
  "307": {
    "id": 307,
    "name": "Tunique de l'ombre",
    "weight": 2,
    "PRE": 10,
    "ESQ": 15,
    "DIS": 15,
    "slot": "Buste"
  },
  "308": {
    "id": 308,
    "name": "Lance",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 5,
    "status": [
      {
        "value": 2,
        "status": "Faille"
      }
    ],
    "slot": "Une main"
  },
  "309": {
    "id": 309,
    "name": "Orbe angélique",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 2,
    "ESP": 2,
    "element": "Lumière",
    "elementaryAffinity": "Lumière",
    "slot": "Une main"
  },
  "311": {
    "id": 311,
    "name": "Main-gauche",
    "weight": 2,
    "BonusDGT": 3,
    "usageCost": 4,
    "ESQ": 5,
    "slot": "Une main"
  },
  "312": {
    "id": 312,
    "name": "Cercle coeur",
    "weight": 1,
    "regeneration": 2,
    "RES": 3,
    "slot": "Une main"
  },
  "313": {
    "id": 313,
    "name": "Harlequine",
    "weight": 3,
    "ARM": 3,
    "RES": 3,
    "MM": 10,
    "slot": "Buste"
  },
  "316": {
    "id": 316,
    "name": "Epée de cauchemar",
    "weight": 2,
    "BonusDGT": 3,
    "usageCost": 4,
    "status": [
      {
        "value": 1,
        "status": "Terreur"
      }
    ],
    "slot": "Une main"
  },
  "317": {
    "id": 317,
    "name": "Capuche de rôdeur",
    "weight": 1,
    "DIS": 15,
    "DEX": 1,
    "slot": "Tête"
  },
  "318": {
    "id": 318,
    "name": "Manteau de rôdeur",
    "weight": 2,
    "ESQ": 15,
    "DIS": 15,
    "DEX": 2,
    "slot": "Buste"
  },
  "319": {
    "id": 319,
    "name": "Crâne rituel",
    "weight": 2,
    "DM": 10,
    "ESP": 2,
    "slot": "Tête"
  },
  "326": {
    "id": 326,
    "name": "Carabine harpie",
    "weight": 3,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 4
    },
    "BonusDGT": 4,
    "PRE": 10,
    "slot": "Deux mains"
  },
  "327": {
    "id": 327,
    "name": "Fusil",
    "weight": 3,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 7,
    "slot": "Deux mains"
  },
  "328": {
    "id": 328,
    "name": "Badelaire ardent",
    "weight": 2,
    "BonusDGT": 4,
    "usageCost": 5,
    "element": "Feu",
    "status": [
      {
        "value": 2,
        "status": "Brûlure"
      }
    ],
    "slot": "Une main"
  },
  "329": {
    "id": 329,
    "name": "Masque fantôme",
    "weight": 2,
    "ARM": 2,
    "DIS": 10,
    "slot": "Tête"
  },
  "334": {
    "id": 334,
    "name": "Manteau du nomade",
    "weight": 3,
    "ESQ": 10,
    "DM": 10,
    "Bonus PA": 100,
    "slot": "Buste"
  },
  "335": {
    "id": 335,
    "name": "Bottes du nomade",
    "weight": 2,
    "ESQ": 5,
    "DM": 5,
    "Bonus PA": 50,
    "slot": "Pieds"
  },
  "336": {
    "id": 336,
    "name": "Eventail",
    "weight": 1,
    "ESP": 2,
    "ESQ": 10,
    "slot": "Une main"
  },
  "337": {
    "id": 337,
    "name": "Eventail noble",
    "weight": 1,
    "ESP": 2,
    "DM": 10,
    "slot": "Une main"
  },
  "354": {
    "id": 354,
    "name": "Armure de la fournaise",
    "weight": 3,
    "ARM": 7,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Feu"
      }
    ],
    "slot": "Buste"
  },
  "355": {
    "id": 355,
    "name": "Bouclier de la fournaise",
    "ARM": 3,
    "weight": 2,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Feu"
      }
    ],
    "slot": "Une main"
  },
  "356": {
    "id": 356,
    "name": "Fouet enflammé",
    "usageCost": 5,
    "BonusDGT": 3,
    "weight": 2,
    "range": {
      "min": 1,
      "max": 2
    },
    "element": "Feu",
    "status": [
      {
        "value": 1,
        "status": "Brûlure"
      }
    ],
    "slot": "Une main"
  },
  "357": {
    "id": 357,
    "name": "Manicle embrasée",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 2,
    "ARM": 2,
    "element": "Feu",
    "status": [
      {
        "value": 1,
        "status": "Assommé"
      },
      {
        "value": 1,
        "status": "Brûlure"
      }
    ],
    "slot": "Une main"
  },
  "360": {
    "id": 360,
    "name": "Robe des ténèbres",
    "weight": 3,
    "RES": 5,
    "DIS": 10,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Ombre"
      }
    ],
    "slot": "Buste"
  },
  "361": {
    "id": 361,
    "name": "Masque des ténèbres",
    "weight": 2,
    "RES": 2,
    "BonusMAG": 1,
    "elementaryResistances": [
      {
        "value": 20,
        "element": "Ombre"
      }
    ],
    "slot": "Tête"
  },
  "362": {
    "id": 362,
    "name": "Dague sinistre",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 2,
    "element": "Ombre",
    "status": [
      {
        "value": 1,
        "status": "Cécité"
      }
    ],
    "slot": "Une main"
  },
  "363": {
    "id": 363,
    "name": "Arc funeste",
    "weight": 2,
    "usageCost": 5,
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 6,
    "element": "Ombre",
    "status": [
      {
        "value": 1,
        "status": "Cécité"
      }
    ],
    "slot": "Deux mains"
  },
  "364": {
    "id": 364,
    "name": "Crépusculaire",
    "weight": 2,
    "usageCost": 5,
    "BonusDGT": 4,
    "element": "Ombre",
    "status": [
      {
        "value": 2,
        "status": "Cécité"
      }
    ],
    "slot": "Une main"
  },
  "366": {
    "id": 366,
    "name": "Sceptre de pouvoir",
    "weight": 2,
    "BonusDGT": 0,
    "usageCost": 4,
    "BonusMAG": 6,
    "slot": "Une main"
  },
  "367": {
    "id": 367,
    "name": "Codex de pouvoir",
    "weight": 2,
    "BonusMAG": 1,
    "magicalSpace": 3,
    "slot": "Une main"
  },
  "369": {
    "id": 369,
    "name": "Ame légendaire",
    "weight": 1,
    "BonusDGT": 1,
    "BonusMAG": 1,
    "ARM": 1,
    "RES": 1,
    "slot": "Fétiche"
  },
  "401": {
    "id": 401,
    "name": "Maillet",
    "usageCost": 5,
    "BonusDGT": 5,
    "status": [
      {
        "value": 1,
        "status": "Assommé"
      }
    ],
    "weight": 2,
    "slot": "Une main"
  },
  "435": {
    "id": 435,
    "name": "Torche",
    "weight": 2,
    "BonusDGT": 1,
    "OBS": 10,
    "status": [
      {
        "value": 1,
        "status": "Brûlure"
      }
    ],
    "usageCost": 5,
    "slot": "Une main"
  },
  "437": {
    "id": 437,
    "name": "Luth",
    "CHA": 2,
    "weight": 2,
    "slot": "Une main"
  },
  "439": {
    "id": 439,
    "name": "Capuche de voleur",
    "weight": 1,
    "DIS": 15,
    "slot": "Tête"
  },
  "440": {
    "id": 440,
    "name": "Lunettes d'explorateur",
    "weight": 1,
    "OBS": 15,
    "slot": "Tête"
  },
  "441": {
    "id": 441,
    "name": "Baguette",
    "usageCost": 4,
    "BonusDGT": 0,
    "BonusMAG": 4,
    "MM": 5,
    "weight": 2,
    "slot": "Une main"
  },
  "442": {
    "id": 442,
    "name": "Manuel de magie",
    "magicalSpace": 3,
    "weight": 2,
    "slot": "Une main"
  },
  "443": {
    "id": 443,
    "name": "Mandoline",
    "CHA": 3,
    "weight": 2,
    "slot": "Une main"
  },
  "444": {
    "id": 444,
    "name": "Pistolet",
    "range": {
      "min": 2,
      "max": 3
    },
    "BonusDGT": 5,
    "weight": 2,
    "usageCost": 5,
    "slot": "Une main"
  },
  "445": {
    "id": 445,
    "name": "Masse de siège",
    "usageCost": 5,
    "BonusDGT": 7,
    "status": [
      {
        "value": 1,
        "status": "Assommé"
      }
    ],
    "weight": 4,
    "slot": "Deux mains"
  },
  "447": {
    "id": 447,
    "name": "Bracelet des étoiles",
    "weight": 1,
    "MM": 5,
    "DM": 5,
    "slot": "Fétiche"
  },
  "448": {
    "id": 448,
    "name": "Espadon",
    "usageCost": 4,
    "BonusDGT": 7,
    "weight": 4,
    "slot": "Deux mains"
  },
  "451": {
    "id": 451,
    "name": "Bouclier ancien",
    "ARM": 3,
    "weight": 2,
    "slot": "Une main"
  },
  "452": {
    "id": 452,
    "name": "Dague courbe",
    "weight": 1,
    "usageCost": 4,
    "BonusDGT": 3,
    "PRE": 10,
    "slot": "Une main"
  },
  "453": {
    "id": 453,
    "name": "Ceste",
    "usageCost": 4,
    "BonusDGT": 3,
    "ARM": 1,
    "ESQ": 5,
    "weight": 2,
    "slot": "Une main"
  },
  "454": {
    "id": 454,
    "name": "Bâton de sorcier",
    "weight": 2,
    "usageCost": 4,
    "BonusDGT": 0,
    "BonusMAG": 7,
    "slot": "Deux mains"
  },
  "455": {
    "id": 455,
    "name": "Bâton d'hérétique",
    "weight": 2,
    "usageCost": 4,
    "BonusDGT": 0,
    "BonusMAG": 9,
    "slot": "Deux mains"
  }
};
