function ItemCard({ item }) {
  return (
    <div
      style={{
        background: "#111",
        padding: "18px",
        borderRadius: "16px",
        width: "230px",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p style={{ fontSize: "12px", color: "#aaa" }}>
        {item.owner} • {item.status}
      </p>

      <button style={{
        width: "100%",
        marginTop: "10px",
        padding: "10px",
        borderRadius: "10px",
        background: "#2563eb",
        color: "white",
        border: "none"
      }}>
        Request
      </button>
    </div>
  )
}

export default ItemCard