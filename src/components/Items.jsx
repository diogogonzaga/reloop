function Items() {

  const items = [
    { name: "Bicicleta", img: "https://via.placeholder.com/200" },
    { name: "Livro Harry Potter", img: "https://via.placeholder.com/200" },
    { name: "Mesa pequena", img: "https://via.placeholder.com/200" },
    { name: "Câmara fotográfica", img: "https://via.placeholder.com/200" }
  ];

  return (
    <section className="items">

      <h2>Itens recentes</h2>

      <div className="item-grid">

        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Items;