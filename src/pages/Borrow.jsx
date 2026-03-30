import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCard from "../components/ItemCard"

function Borrow() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const items = [
    { name: "Calculator 📟", price: "₹10 / hour", owner: "2nd Year", status: "Online" },
    { name: "Lab Coat 🥼", price: "₹15 / day", owner: "1st Year", status: "Offline" },
    { name: "Charger 🔌", price: "₹5 / hour", owner: "3rd Year", status: "Online" }
  ]

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

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
        <h2>Borrow Items</h2>
        <button onClick={() => navigate("/home")}>⬅ Back</button>
      </div>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        {filtered.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))}
      </div>

    </div>
  )
}

export default Borrow