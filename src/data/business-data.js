import { BusinessDataType } from "@/data/types/business-data-types";

export const business_data = {
    "business": {
        "name": "Bougnat Burger",
        "headline": "Bougnat Burger - La meilleure fabrique de burger de Toulouse",
        "website_url": "https://toulouse-hein.fr/",
        "website_thumbnail_url": "https://tb-static.uber.com/prod/image-proc/processed_images/fe52ccaabc3b616079fb5810a83e704e/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
        "social_media": [
            {
                "name": "instagram",
                "link": "www.instagram.com"
            },{
                "name": "facebook",
                "link": "www.facebook.com"
            },
        ]
    },
    "website_content": {
        "navigation": {
            "menus": [
                "Accueil",
                "Menu",
                "Horaires",
                "Contact",
                "Livraison"
            ]
        },
        "sections": {
            "hero": {
                "title": "Le burger Auvergnat",
                "subtitle": "Dee vrais burgers du terroir Auvergnat.",
                "call_to_action": {
                    "text": "Découvrir le menu",
                    "target_link": "/menu"
                },
                "info": [
                    {
                        "icon": "info-star.svg",
                        "title": "4.6 / 5",
                        "subtitle": "Sur 1200 avis"
                    },
                    {
                        "icon": "/info-calendar.svg",
                        "title": "13 ans",
                        "subtitle": "D'existence"
                    },{
                        "icon": "/info-flag.png",
                        "title": "Viande",
                        "subtitle": "Française"
                    },
                ]
            },
            "story": {
                "title": "Notre histoire",
                "subtitle": "Le Bougnat Burger propose depuis le 02 février 2012 des Burgers Maison accompagnés de Frites Maison et de Salade, confectionnés avec un maximum de produits locaux et régionaux. A consommer sur place, à emporter, en livraison. <br/><br/>Le Saint Nectaire AOP, le Bleu d’Auvergne AOP, le Cantal Salers AOP, le Cantal Jeune AOP, le Carré d'Aurillac AOP, le Jambon d'Auvergne IGP, les Steaks Hachés Façon Bouchère VBF et le Pain Burger Artisanal sont ainsi la base principale des burgers. <br/><br/>Le Bougnat Burger vous invite à découvrir ses Grillades Bio, sa Bavette Bio, mais aussi ses Salades et ses Wraps accompagnés de Frites Maison et de Salade et Mesclun Maison.",
                "milestones": [
                    "2012 - Ouverture du Bougnat",
                ],
                "lastParagraph": "Slogan du Bougnat ?"
            },
            "gallery": {
                "title": "Découvrez nos meilleurs plats",
                "call_to_action": {
                    "text": "Menu",
                    "target_link": "/menu"
                },
            },
            "menu_img": {
                "title": "Découvrez notre menu en image",
                "expandable_menu_items": [
                    {
                        "title": "Burgers simples",
                        "dishes": [
                            {
                                "name": "Lo Ti Mefia Te",
                                "price": 16.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Bleu d'Auvergne AOP, Cantal Jeune AOP, Jambon Sec, Tomates, Pomme Paillasson, Noix, Salade et Son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                                "image": "/menu/dishes/Ti Mefia te.webp"
                            },{
                                "name": "Lo Ti Bougnat",
                                "price": 15.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Jambon Sec, Pomme Paillasson, Salade et son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                                "image": "/menu/dishes/Ti bougnat.webp"
                            },{
                                "name": "Lo Ti Gourmand",
                                "price": 16.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Bleu d'Auvergne AOP, Jambon Sec, Pomme Paillasson, Noix, Salade et son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                                "image": "/menu/dishes/Ti gourmand.webp"
                            },{
                                "name": "Lo Ti Vulcano",
                                "price": 15.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Cantal Jeune AOP, Poivrons, Chorizo, Pomme Paillasson, Salade et Son Mesclun Maison, Sauce Chili.",
                                "image": "/menu/dishes/Ti vulcano.webp"
                            },{
                                "name": "Lo Ti Blue",
                                "price": 15.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Bleu d'Auvergne AOP, Cantal Jeune AOP, Pomme Paillasson, Noix, Salade et Son Mesclun Maison, Sauce au Bleu d'Auvergne AOP.",
                                "image": "/menu/dishes/Ti blue.webp"
                            },{
                                "name": "Lo Ti Rillac",
                                "price": 15.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Carré d'Aurillac AOP, Pomme Paillasson, Noix, Salade et Son Mesclun Maison, Sauce au Bleu d'Auvergne AOP.",
                                "image": "/menu/dishes/Ti rillac.webp"
                            },{
                                "name": "Lo Ti Salers",
                                "price": 16.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Cantal Salers AOP, Jambon Sec, Pomme Paillasson, Salade et Son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                                "image": "/menu/dishes/Ti salers.webp"
                            },{
                                "name": "Lo Ti Cabri",
                                "price": 16.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Fromage de Chèvre Moulé à la Louche, Jambon Sec, Miel, Salade et Son Mesclun Maison, Sauce Crème Ciboulette.",
                                "image": "/menu/dishes/Ti cabri.webp"
                            },{
                                "name": "Lo Ti Vegetario",
                                "price": 14.90,
                                "description": "Pain Burger Artisanal, Galette de Pommes de Terre, Cantal Jeune AOP, Poivrons, Tomates, Salade et Son Mesclun Maison, Sauce Crème Ciboulette.",
                                "image": "/menu/dishes/Ti vegetario.webp"
                            },{
                                "name": "Lo Ti Mefiano",
                                "price": 18.90,
                                "description": "Pain Burger Artisanal, Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Bleu d'Auvergne AOP, Cantal Jeune AOP, Fromage de Chèvre Moulé à la Louche, Jambon Sec, Chorizo, Tomates, Pomme Paillasson, Poivrons, Tomates, Noix, Salade et Son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                                "image": "/menu/dishes/Ti mefiano.webp"
                            }
                        ]
                    },
                    {
                        "title": "Burgers doubles",
                        "dishes": [
                          {
                              "name": "Lo Mefia Te",
                              "price": 18.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Bleu d'Auvergne AOP, Cantal Jeune AOP, Jambon Sec, Tomates, Pomme Paillasson, Noix, Salade et Son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                              "image": "/menu/dishes/Mefia te.webp"
                          },{
                              "name": "Lo Bougnat",
                              "price": 17.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Jambon Sec, Pomme Paillasson, Salade et son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                              "image": "/menu/dishes/Bougnat.webp"
                          },{
                              "name": "Lo Gourmand",
                              "price": 18.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Bleu d'Auvergne AOP, Jambon Sec, Pomme Paillasson, Noix, Salade et son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                              "image": "/menu/dishes/Gourmand.webp"
                          },{
                              "name": "Lo Vulcano",
                              "price": 17.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Cantal Jeune AOP, Poivrons, Chorizo, Pomme Paillasson, Salade et Son Mesclun Maison, Sauce Chili.",
                              "image": "/menu/dishes/Vulcano.webp"
                          },{
                              "name": "Lo Blue",
                              "price": 17.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Bleu d'Auvergne AOP, Cantal Jeune AOP, Pomme Paillasson, Noix, Salade et Son Mesclun Maison, Sauce au Bleu d'Auvergne AOP.",
                              "image": "/menu/dishes/Blue.webp"
                          },{
                              "name": "Lo Rillac",
                              "price": 17.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Carré d'Aurillac AOP, Pomme Paillasson, Noix, Salade et Son Mesclun Maison, Sauce au Bleu d'Auvergne AOP.",
                              "image": "/menu/dishes/Rillac.webp"
                          },{
                              "name": "Lo Salers",
                              "price": 18.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Cantal Salers AOP, Jambon Sec, Pomme Paillasson, Salade et Son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                              "image": "/menu/dishes/Salers.webp"
                          },{
                              "name": "Lo Cabri",
                              "price": 18.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Fromage de Chèvre Moulé à la Louche, Jambon Sec, Miel, Salade et Son Mesclun Maison, Sauce Crème Ciboulette.",
                              "image": "/menu/dishes/Cabri.webp"
                          },{
                              "name": "Lo Vegetario",
                              "price": 16.90,
                              "description": "Pain Burger Artisanal, Double Galette de Pommes de Terre, Cantal Jeune AOP, Poivrons, Tomates, Salade et Son Mesclun Maison, Sauce Crème Ciboulette.",
                              "image": "/menu/dishes/Vegetario.webp"
                          },{
                              "name": "Lo Mefiano",
                              "price": 20.90,
                              "description": "Pain Burger Artisanal, Double Steak Haché Facon Bouchère VBF ou Galette de Pommes de Terre, Saint Nectaire Fermier AOP, Bleu d'Auvergne AOP, Cantal Jeune AOP, Fromage de Chèvre Moulé à la Louche, Jambon Sec, Chorizo, Tomates, Pomme Paillasson, Poivrons, Tomates, Noix, Salade et Son Mesclun Maison, Sauce au Saint Nectaire Fermier AOP.",
                              "image": "/menu/dishes/Mefiano.webp"
                          }
                        ]
                    },
                    {
                        "title": "Salades",
                        "dishes": [
                            {
                                "name": "Allier",
                                "price": 14.90,
                                "description": "Salade Faite Maison et son Mesclun, Saumon Fumé en Auvergne, Bleu d'Auvergne AOP, Cantal Jeune AOP, Tomates Cerises.",
                                "image": "/menu/dishes/Allier.webp"
                            },{
                                "name": "Chèvre chaud",
                                "price": 14.90,
                                "description": "Salade Faite Maison et son Mesclun, Toasts Chauds de Fromage de Chèvre Moulé à la louche, Miel, Jambon d'Auvergne IGP, Pignons de Pin, Herbes de Provence, Tomates Cerises.",
                                "image": "/menu/dishes/Chevre chaud.webp"
                            },{
                                "name": "Vercingétorix VS César",
                                "price": 14.90,
                                "description": "Salade Faite Maison et son Mesclun, Cantal Jeune AOP, Blanc de Poulet, Poivrons, Croûtons à l'Huile d'Olive, Tomates Cerises.",
                                "image": "/menu/dishes/Vercingetorix vs cesar.webp"
                            },{
                                "name": "Auvergnate",
                                "price": 14.90,
                                "description": "Salade Faite Maison et son Mesclun, Jambon d'Auvergne IGP , Bleu d'Auvergne AOP, Cantal Jeune AOP, Noix, Tomates Cerises.",
                                "image": "/menu/dishes/Auvergnate.webp"
                            },{
                                "name": "Sancy",
                                "price": 14.90,
                                "description": "Salade Faite Maison et son Mesclun, Toasts Chauds de Saint Nectaire Fermier AOP, Toasts Chauds de Bleu d'Auvergne AOP, Cantal Jeune AOP, Jambon d'Auvergne IGP, Tomates Cerises.",
                                "image": "/menu/dishes/Sancy.webp"
                            },
                        ]
                    },
                    {
                        "title": "Viandes",
                        "dishes": [
                            {
                                "name": "Bavette Charolais Bio",
                                "price": 17.90,
                                "description": "Bavette Aloyau Race Charolais. Viande Issue De l'Agriculture Biologique. 300 grammes",
                                "image": "/menu/dishes/Bavette.webp"
                            },{
                                "name": "Steak Haché",
                                "price": 14.99,
                                "description": "STEAK HACHE FACON BOUCHERE VBF",
                                "image": "/menu/dishes/Steak haché.webp"
                            },
                        ]
                    },
                    {
                        "title": "Wraps",
                        "dishes": [
                            {
                                "name": "Saumon",
                                "price": 14.90,
                                "description": "Galette de blé, Saumon Fumé en Auvergne, Tomates, Salade Faite Maison et son Mesclun, Sauce à l'aneth.",
                                "image": "/menu/dishes/Saumon.webp"
                            },{
                                "name": "Chèvre",
                                "price": 14.90,
                                "description": "Galette de blé, Fromage de Chèvre Moulé à la Louche, Miel, Jambon d'Auvergne IGP, Tomates, Salade Faite Maison et son Mesclun, Sauce Crème Ciboulette.",
                                "image": "/menu/dishes/Chèvre.webp"
                            },{
                                "name": "Poulet",
                                "price": 14.90,
                                "description": "Galette de blé, Blanc de Poulet, Tomates, Poivrons, Salade Faite Maison et son Mesclun, Sauce Crème Curry. ",
                                "image": "/menu/dishes/Poulet.webp"
                            },
                        ]
                    },
                    {
                        "title": "Desserts",
                        "dishes": [
                            {
                                "name": "Moelleux coeur fondant",
                                "price": 5.90,
                                "description": "Gâteau au Chocolat, et son Cœur Fondant. Servi Tiède Avec de la Crème Anglaise.",
                                "image": "/menu/dishes/Moelleux.webp"
                            },{
                                "name": "Nougat glacé",
                                "price": 5.90,
                                "description": "Base Crème Fraîche et Fruits Secs, Cubes d'Abricots et Raisins Secs ainsi que des Morceaux de Noisettes, Pistaches et Amandes.",
                                "image": "/menu/dishes/Nougat glace.webp"
                            },{
                                "name": "Thé gourmand",
                                "price": 7.90,
                                "description": "Thé au choix parmi notre séletion et Mignardises.",
                                "image": "/menu/dishes/The gourmand.webp"
                            },{
                                "name": "Café gourmand",
                                "price": 6.90,
                                "description": "Café et Mignardises.",
                                "image": "/menu/dishes/Cafe gourmand.webp"
                            },{
                                "name": "Digeo gourmand",
                                "price": 8.90,
                                "description": "Digestif au choix parmi notre sélection accompagné de ses Mignardises.",
                                "image": "/menu/dishes/Digeo gourmand.webp"
                            },
                        ]
                    },{
                        "title": "Desserts maison",
                        "dishes": [
                            {
                                "name": "Framboisier",
                                "price": 7.90,
                                "description": "Génoise Nature, Mousse Bavaroise, Framboises, Amandes Hachées Torréfiées.",
                                "image": "/menu/dishes/Framboisier.webp"
                            },{
                                "name": "Tiramisu Framboise",
                                "price": 7.90,
                                "description": "Brisures de Spéculoos, Appareil à Tiramisu, Brisures de Framboises.",
                                "image": "/menu/dishes/Tiramisu framboise.webp"
                            },{
                                "name": "Forêt Noire",
                                "price": 7.90,
                                "description": "Génoise Chocolat, Crème Chantilly Maison, Copeaux de Chocolat au Lait, Sans Cerise, Sans Alcool.",
                                "image": "/menu/dishes/Foret noire.webp"
                            },{
                                "name": "Mousse chocolat",
                                "price": 7.90,
                                "description": "Mousse Chocolat Noir Faite Maison Accompagnée de Copeaux de Chocolat au Lait.",
                                "image": "/menu/dishes/Mousse au chocolat.webp"
                            },{
                                "name": "Tiramisu Café",
                                "price": 7.90,
                                "description": "Biscuits Cuillères Aromatisés au Café, Appareil à Tiramisu, et Poudre de Cacao.",
                                "image": "/menu/dishes/Tiramisu café.webp"
                            },{
                                "name": "Citron meringué",
                                "price": 7.90,
                                "description": "Pâte Sucrée, Appareil Citron et Meringue.",
                                "image": "/menu/dishes/Citron meringué.webp"
                            },
                        ]
                    },
                ]
            },
            "location": {
                "title": "Venez nous voir !",
                "position": {
                    "lat": 43.60373567060707,
                    "lng": 1.4444728834329283
                },
            },
            "opening_time": {
                "title": "Nous sommes ouvert",
                "opening_days": [
                    {
                        "day": "Lundi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Mardi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Mercredi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Jeudi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Vendredi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Samedi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Dimanche",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                ]
            },
            "useful_info": {
                "title": "Informations utiles"
            },
            "contact": {
                "title": "Contactez nous",
                "phone": "0575846895",
                "email": "touloushein@gmail.com"
            },
            "footer": {

            }
        }
    }
}
