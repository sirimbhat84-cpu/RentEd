import { useNavigate } from "react-router-dom"

function Rent() {
  const navigate = useNavigate()

  return (
    <div style={{
      background: "#0f0f0f",
      minHeight: "100vh",
      color: "white",
      padding: "20px"
    }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        <h2>Campus Borrow 🚀</h2>

        <div style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => navigate("/home")}>Borrow</button>
          <button onClick={() => navigate("/rent")}>Rent</button>
        </div>
      </div>

      <h2>➕ Add Item</h2>

      <input placeholder="Item name" style={{ display: "block", margin: "10px 0" }} />
      <input placeholder="Price" style={{ display: "block", margin: "10px 0" }} />
      <input placeholder="Description" style={{ display: "block", margin: "10px 0" }} />

      <button style={{
        padding: "10px",
        background: "green",
        border: "none",
        color: "white"
      }}>
        Upload Item
      </button>

    </div>
  )
}

export default Rent