import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Our Story Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-playfair font-bold text-primary">Our Story</h1>
            <p className="text-xl text-muted italic">
              A journey of flavor, culture, and community
            </p>
          </section>

          {/* Founders Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-playfair font-bold text-accent">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Kamalo City was founded by Pitchou Ntumba and his wife, who together have created Cape Town's premier African dining and entertainment destination. Their combined vision and expertise in hospitality have transformed this space into a vibrant celebration of African cuisine and culture.
                </p>
                <p className="text-foreground leading-relaxed">
                  Under their leadership, Kamalo City has evolved into more than just a restaurant – it's a cultural hub where people come together to enjoy authentic African cuisine, premium shisha experiences, professional grooming services, and entertainment.
                </p>
              </div>
              <div className="aspect-square relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Founders of Kamalo City"
                  className="rounded-lg object-cover w-full h-full shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Staff Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-playfair font-bold text-accent">Our Dedicated Team</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-foreground leading-relaxed">
                  Behind every exceptional dining experience at Kamalo City is our passionate team of culinary experts, 
                  hospitality professionals, and service staff. Each member brings their unique expertise and dedication 
                  to creating memorable moments for our guests. From our skilled chefs who craft authentic African dishes 
                  to our attentive servers who ensure your comfort, our team is the heart of Kamalo City.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;