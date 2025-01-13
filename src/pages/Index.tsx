import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to Kamalo City
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience authentic African cuisine in the heart of the city
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg transition-colors">
              Make a Reservation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;