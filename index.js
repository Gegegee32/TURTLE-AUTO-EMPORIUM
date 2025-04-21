
export default function Home() {
  const products = [
    { id: 1, name: "Tyres", price: 8500 },
    { id: 2, name: "Shock Absorbers", price: 7200 },
    { id: 3, name: "Spark Plugs", price: 1500 },
    { id: 4, name: "Headlights", price: 6400 },
    { id: 5, name: "Batteries", price: 12000 },
  ];

  const getWhatsAppLink = (product) => {
    const message = `Hello Turtle Auto Emporium, I'm interested in buying: ${product.name} (KES ${product.price.toLocaleString()})`;
    return `https://wa.me/254702969638?text=${encodeURIComponent(message)}`;
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#006400' }}>Turtle Auto Emporium</h1>
      <p style={{ fontStyle: 'italic', color: '#8B4513' }}>Built for the Long Haul</p>
      <p style={{ maxWidth: 600 }}>
        Welcome to Turtle Auto Emporium, your one-stop shop for high-quality car parts and accessories.
        Based along Kirinyaga Road, Kilome Junction, opposite the newly constructed public toilets,
        we deliver across Kenya, Uganda, and Tanzania. All payments are ETIMS compliant.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 30 }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: 15, width: 250 }}>
            <h3>{product.name}</h3>
            <p>KES {product.price.toLocaleString()}</p>
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              style={{ display: 'inline-block', padding: '10px 15px', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: 5 }}
            >
              Inquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
