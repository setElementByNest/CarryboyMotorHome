"use client";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-[url('https://images.unsplash.com/photo-1609688669309-fc15db557633?q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Merry Truckmas from Isuzu.
            </h1>
            <Button className="bg-isuzu-red hover:bg-red-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* N Series & F Series Grid */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-8 text-black">
        <div className="bg-isuzu-lightgray p-8 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80"
            alt="N Series"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-4">N Series</h2>
          <p className="mb-4">
            Light-duty truck that s perfect for urban delivery and transport.
          </p>
          <Button variant="outline">Explore N Series</Button>
        </div>
        <div className="bg-isuzu-lightgray p-8 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80"
            alt="F Series"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-4">F Series</h2>
          <p className="mb-4">
            Medium-duty truck built for reliability and versatility.
          </p>
          <Button variant="outline">Explore F Series</Button>
        </div>
      </section>

      {/* Legendary Reliability */}
      <section className="relative h-[400px] bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Legendary Reliability. Since 1972.
            </h2>
            <Button className="bg-isuzu-red hover:bg-red-700">
              Our Heritage
            </Button>
          </div>
        </div>
      </section>

      {/* FX Series */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-8 items-center text-black">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80"
          alt="FX Series"
          className="rounded-lg w-full h-[400px] object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">FX Series</h2>
          <p className="mb-4">
            Heavy-duty performance for demanding operations.
          </p>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Customer Care */}
      <section className="bg-isuzu-lightgray py-16 text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Isuzu Customer Care
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80"
                alt="Service"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Service Appointments</h3>
              <p className="mb-4">
                Schedule your service with our certified technicians.
              </p>
              <Button className="bg-isuzu-red hover:bg-red-700">
                Book Now
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80"
                alt="Parts"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Parts</h3>
              <p className="mb-4">
                Genuine Isuzu parts for optimal performance.
              </p>
              <Button className="bg-isuzu-red hover:bg-red-700">
                Shop Parts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
