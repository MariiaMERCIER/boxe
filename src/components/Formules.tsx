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

export function Formules() {
  return (
    <div className="flex flex-col lg:flex-row gap-7">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <Image src={image1} alt="amateur" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 flex justify-between"
          >
            Amauter
            <Typography variant="lead" color="red">
              150,00 € / an
            </Typography>
          </Typography>
          <Typography variant="paragraph">
            {
              "Cours loisirs à partir de 13 ans et plus. Tous les lundis et jeudis de 19H00 à 21H00. La pratique des sports de contacts présente de nombreux bienfaits pour tout public. Elle favorise le renforcement musculaire, l'amélioration de la coordination et de l'agilité, ainsi que le développement de l'esprit d'équipe et de la confiance en soi. De plus, elle permet de libérer le stress et de canaliser l'énergie de manière positive. Enfin, les sports de contacts favorisent la discipline, l'apprentissage du respect des règles et la gestion des émotions."
            }
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <Image src={image2} alt="professionel" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 flex justify-between"
          >
            Professionnal
            <Typography variant="lead" color="red">
              200,00 €/ an
            </Typography>
          </Typography>
          <Typography variant="paragraph">
            {
              "Avec quatre à cinq séances par semaine, ces sessions intensives se concentrent sur le développement technico-tactique, le renforcement musculaire et les sessions de Sparring pour améliorer les compétences en situation réelle. Cette routine d'entraînement rigoureuse vise l'amélioration continue des performances, la préparation physique et mentale aux compétitions, et la progression globale dans le sport de contacts. Participation aux compétitions fédérales, Gala nationaux et internationaux."
            }
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <Image src={image3} alt="coaching" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 flex justify-between"
          >
            Coaching privé
            <Typography variant="lead" color="red">
              50,00 € / cours
            </Typography>
          </Typography>
          <Typography variant="paragraph">
            {
              "Le coaching privé offre une attention individuelle, une progression  rapide, une confiance et une motivation accrues, une flexibilité dans l'organisation des séances et une aide pour atteindre vos objectifs spécifiques. La pratique d'un sport ou d'une activité physique présente de nombreux bienfaits sur le plan mental. Elle permet de développer la concentration, la discipline, la maîtrise et le dépassement de soi, ce qui peut avoir un impact positif sur d'autres aspects de la vie quotidienne. En résumé, la pratique d'une activité physique offre une opportunité de se sentir plus fort mentalement et physiquement, tout en améliorant sa condition physique générale."
            }
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
