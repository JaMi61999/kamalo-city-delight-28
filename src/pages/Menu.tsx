import Navigation from "@/components/Navigation";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

const Menu = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Jollof Rice",
      description: "Traditional West African rice dish cooked in rich tomato sauce with aromatic spices",
      price: "$15.99",
      category: "Main Courses"
    },
    {
      name: "Suya",
      description: "Spicy grilled beef skewers marinated in ground peanuts and African spices",
      price: "$12.99",
      category: "Starters"
    },
    {
      name: "Pounded Yam & Egusi Soup",
      description: "Smooth yam paste served with melon seed soup and choice of protein",
      price: "$18.99",
      category: "Main Courses"
    },
    {
      name: "Mshikaki",
      description: "East African grilled meat skewers with special marinade",
      price: "$14.99",
      category: "Starters"
    },
    {
      name: "Plantain Chips",
      description: "Crispy fried plantain slices seasoned with African spices",
      price: "$6.99",
      category: "Sides"
    },
    {
      name: "African Meat Pie",
      description: "Flaky pastry filled with seasoned minced meat and vegetables",
      price: "$8.99",
      category: "Starters"
    },
    {
      name: "Fufu & Light Soup",
      description: "Cassava and plantain dough served with spicy aromatic soup",
      price: "$16.99",
      category: "Main Courses"
    },
    {
      name: "Mafe",
      description: "West African peanut stew with tender meat and vegetables",
      price: "$17.99",
      category: "Main Courses"
    },
    {
      name: "Zobo Drink",
      description: "Refreshing hibiscus drink with hints of ginger and pineapple",
      price: "$4.99",
      category: "Beverages"
    }
  ];

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h1>
          <p className="text-muted text-lg">
            Discover the authentic flavors of Africa
          </p>
          <Separator className="mt-8 mb-12" />
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-semibold text-accent mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                          <span className="text-lg font-medium text-muted">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;