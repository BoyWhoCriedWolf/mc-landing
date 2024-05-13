import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image1 from "../assets/Luke Profile.jpg";
import image2 from "../assets/Harvey Profile Pic.jpg";

interface ClientProps {
  title: string;
  description: string;
  image: string;
}

const features: ClientProps[] = [
  {
    title: "Luke",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image1,
  },
  {
    title: "Harvey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image2,
  },
];

export const MoreClient = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        More Client Results
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20">
        {features.map(({ title, description, image }: ClientProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
