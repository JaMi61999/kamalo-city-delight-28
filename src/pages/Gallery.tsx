import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type Category = "restaurant" | "barbershop" | "shisha";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("restaurant");

  const categories = {
    restaurant: {
      title: "Restaurant",
      description: "Savor authentic African cuisine in an elegant dining atmosphere",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    barbershop: {
      title: "Barbershop",
      description: "Experience professional grooming services in our modern barbershop",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    shisha: {
      title: "Shisha and Perfume",
      description: "Discover our premium shisha lounge and exotic perfume collection",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  };

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
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeCategory === "restaurant" ? "default" : "outline"}
              onClick={() => setActiveCategory("restaurant")}
              className="min-w-[150px]"
            >
              Restaurant
            </Button>
            <Button
              variant={activeCategory === "barbershop" ? "default" : "outline"}
              onClick={() => setActiveCategory("barbershop")}
              className="min-w-[150px]"
            >
              Barbershop
            </Button>
            <Button
              variant={activeCategory === "shisha" ? "default" : "outline"}
              onClick={() => setActiveCategory("shisha")}
              className="min-w-[150px]"
            >
              Shisha and Perfume
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={image}
                  alt={`${categories[activeCategory].title} ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-muted-foreground">
                  {categories[activeCategory].description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;