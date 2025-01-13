import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Gallery = () => {
  const categories = [
    {
      title: "Barbershop",
      description: "Experience professional grooming services in our modern barbershop",
      image: "/placeholder.svg",
    },
    {
      title: "Shisha and Perfume",
      description: "Discover our premium shisha lounge and exotic perfume collection",
      image: "/placeholder.svg",
    },
    {
      title: "Restaurant",
      description: "Savor authentic African cuisine in an elegant dining atmosphere",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Discover the Essence of Kamalo City
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our world-class facilities and services
          </p>
          <Separator className="mt-8 mb-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;