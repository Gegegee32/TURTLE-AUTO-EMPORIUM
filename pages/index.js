import Image from "next/image";

export default function Home() {
  const products = [
    { name: "Tyres", img: "/tyre.jpg" },
    { name: "Rims", img: "/rim.jpg" },
    { name: "Tyre Tubes", img: "/tube.jpg" },
    { name: "Batteries", img: "/battery.jpg" },
    { name: "Shock Absorbers", img: "/shock.jpg" },
    { name: "Brake Pads", img: "/brake.jpg" },
    { name: "Oil Filters", img: "/oil-filter.jpg" },
    { name: "Coolants", img: "/coolant.jpg" },
    { name: "Headlights", img: "/headlight.jpg" },
    { name: "Wipers", img: "/wiper.jpg" }
  ];

  const getWhatsAppLink = (product) => {
    const message = `Hello Turtle Auto Emporium, I'm interested in buying: ${product.name}`;
    return `https://wa.me/254702969638?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans relative">
      <header className="bg-green-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Turtle Auto Emporium</h1>
          <p className="text-sm italic">Built for the Long Haul</p>
        </div>
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search parts..."
            className="px-3 py-1 rounded border border-green-700 text-sm w-60"
          />
        </div>
      </header>

      <section className="text-center my-8 px-4">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <div key={idx} className="border rounded-lg shadow hover:shadow-lg transition p-3 bg-green-50 relative">
              <div className="w-full h-32 relative mb-2">
                <Image
                  src={product.img}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="font-semibold text-sm text-green-900">{product.name}</h3>
              <a
                href={getWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10 border-t">
        <div className="mb-2">
          Payments: M-Pesa, PayPal, Pesapal | Delivery Across Kenya, Uganda & Tanzania
        </div>
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Turtle Auto Emporium. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
