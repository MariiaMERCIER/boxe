import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import image1 from "@/assets/images/nonPro.jpg";
import image2 from "@/assets/images/pro.jpg";
import Image from "next/image";
import image3 from "@/assets/images/coaching.jpg";
import { CardFormule } from "./CardFormule";

export function Formules() {
  return (
    <div className="flex flex-col lg:flex-row gap-7">
      <CardFormule
        name="Amauter"
        price="150,00 € / an"
        alt="amateur"
        image={image1}
        content="Cours loisirs à partir de 13 ans et plus. Tous les lundis et jeudis de 19H00 à 21H00. La pratique des sports de contacts présente de nombreux bienfaits pour tout public. Elle favorise le renforcement musculaire, l'amélioration de la coordination et de l'agilité, ainsi que le développement de l'esprit d'équipe et de la confiance en soi. De plus, elle permet de libérer le stress et de canaliser l'énergie de manière positive. Enfin, les sports de contacts favorisent la discipline, l'apprentissage du respect des règles et la gestion des émotions."
      />
      <CardFormule
        name="Professionnal"
        price="200,00 €/ an"
        alt="professionel"
        image={image2}
        content="Avec quatre à cinq séances par semaine, ces sessions intensives se concentrent sur le développement technico-tactique, le renforcement musculaire et les sessions de Sparring pour améliorer les compétences en situation réelle. Cette routine d'entraînement rigoureuse vise l'amélioration continue des performances, la préparation physique et mentale aux compétitions, et la progression globale dans le sport de contacts. Participation aux compétitions fédérales, Gala nationaux et internationaux."
      />
      <CardFormule
        name="Coaching privé"
        price="50,00 € / cours"
        alt="coaching"
        image={image3}
        content="Le coaching privé offre une attention individuelle, une progression  rapide, une confiance et une motivation accrues, une flexibilité dans l'organisation des séances et une aide pour atteindre vos objectifs spécifiques. La pratique d'un sport ou d'une activité physique présente de nombreux bienfaits sur le plan mental. Elle permet de développer la concentration, la discipline, la maîtrise et le dépassement de soi, ce qui peut avoir un impact positif sur d'autres aspects de la vie quotidienne. En résumé, la pratique d'une activité physique offre une opportunité de se sentir plus fort mentalement et physiquement, tout en améliorant sa condition physique générale."
      />
    </div>
  );
}
