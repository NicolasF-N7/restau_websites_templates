import Image from "next/image";
import Page from "@/components/utility/page";
import Story from "@/components/sections/story";
import HeroPictSide from "@/components/sections/hero-pict-side";


export default function Home() {
  const heroTexts = {
  
    
  }

  const story = {
    title: "Notre histoire",
    subtitle: "Le premier Toulouse'hein à été ouvert en 2008 sur la place du capitole. À l'époque ce concept novateur a beaucoup fait parlé de lui car l'image du burger été encore associé à un repas de mauvaise qualité. Cette réputation venait des chaines de restaurants américaines venu s'implanter en France sans considération de la complexité de la culture française, et en portant peu attention au rapport que les français ont avec la nourriture. C'est pourquoi nous avons créer ce concept de burger fais maison avec des ingrédients de qualité.",
    milestones: [
      "2008 - Premier restaurant ouvert au Capitole",
      "2009 - Recommandé dans plus de 15 articles de presse culinaire",
      "2010 - Première queue de plus de 50 personnes pour notre restaurant",
      "2012 - Ouverture du second Toulouse'Hein à Minimes",
    ],
    lastParagraph: "Venez goûter le gout de l'authentique"
  }

  return (
    <Page currentPage="Accueil" meta={{ desc: "Toulouse'hein - La meilleure fabrique de burger de Toulouse" }}>
      <HeroPictSide textsContent={heroTexts} />
      <Story textsContent={story}/>

    </Page>
  );
}
