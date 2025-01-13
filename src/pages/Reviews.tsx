import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2024",
      comment: "The authentic African cuisine at Kamalo City transported me straight to West Africa. The Jollof rice was perfectly spiced and the service was impeccable!"
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "March 10, 2024",
      comment: "A hidden gem! The Suya was absolutely delicious and reminded me of my travels through Nigeria. The ambiance is perfect for both casual dining and special occasions."
    },
    {
      name: "Priya Patel",
      rating: 4,
      date: "March 5, 2024",
      comment: "Wonderful atmosphere and excellent food. The Pounded Yam & Egusi Soup was a delightful discovery. Will definitely be coming back!"
    },
    {
      name: "David Williams",
      rating: 5,
      date: "February 28, 2024",
      comment: "First time trying African cuisine and I'm blown away! The staff was very helpful in explaining the menu and making recommendations. The Mafe was outstanding!"
    },
    {
      name: "Emma Thompson",
      rating: 5,
      date: "February 25, 2024",
      comment: "The flavors here are incredible! Every dish tells a story, and the presentation is beautiful. The plantain chips are addictive!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Customer Reviews
          </h1>
          <p className="text-muted text-lg">
            What our valued guests say about us
          </p>
          <Separator className="mt-8 mb-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic">
            We're continuously gathering more reviews from our cherished customers. Check back soon for more dining experiences!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;