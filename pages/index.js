export default function Home() {
  const products = [
    "Tyres", "Rims", "Tyre Tubes", "Batteries", "Accessories", "Shock Absorbers", "Bonnet", "Brake Pads",
    "Air Filter", "Cabin Filter", "Grease", "Oil", "Oil Filter", "Brake Fluid", "Transmission Fluid",
    "Coolants", "Spark Plugs", "Brake Shoes", "Bushes", "Parts", "Fuel Cleaners", "Fuel Filters",
    "Bumpers", "Nose Cuts", "Springs", "Headlights", "Tail Lights", "Lens", "Side Mirrors",
    "Car Mats", "Wipers", "Lighting and Bulbs", "Fan Belts"
  ].map((name, index) => ({ id: index + 1, name, price: (Math.random() * 10000 + 1000).toFixed(0) }));

  const getWhatsAppLink = (product) => {
    const message = `Hello Turtle Auto Emporium, I'm interested in buying: ${product.name} (KES ${product.price})`;
    return `https://wa.me/254702969638?text=${encodeURIComponent(message)}`;
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#006400' }}>Turtle Auto Emporium</h1>
      <p style={{ fontStyle: 'italic', color: '#8B4513' }}>Built for the Long Haul</p>
      <p style={{ maxWidth: 600 }}>
        Welcome to Turtle Auto Emporium, your one-stop shop for genuine car parts and accessories.
        Based along Kirinyaga Road, Kilome Junction, we supply across Kenya, Uganda, and Tanzania.
        ETIMS-ready invoices, fast delivery, and quality guaranteed.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 30 }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: 15, width: 250 }}>
            <h3>{product.name}</h3>
            <p>KES {parseInt(product.price).toLocaleString()}</p>
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              style={{
                display: 'inline-block',
                padding: '10px 15px',
                backgroundColor: '#25D366',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: 5
              }}
            >
              Inquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
