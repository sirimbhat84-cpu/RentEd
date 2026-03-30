import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{
      background: "radial-gradient(circle at top, #1a1a2e, #0f0f0f)",
      minHeight: "100vh",
      color: "white",
      padding: "30px",
      fontFamily: "sans-serif"
    }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ fontSize: "28px" }}>Campus Borrow 🚀</h1>

        {/* PROFILE */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#2563eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold"
          }}>
            S
          </div>

          <div style={{ fontSize: "12px" }}>
            <b>Siri M Bhat</b><br />
            2nd Year ECE-B<br />
            1DT24EC100
          </div>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div style={{
        marginTop: "100px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "36px",
          marginBottom: "20px",
          textShadow: "0 0 20px rgba(255,255,255,0.3)"
        }}>
          What do you need today?
        </h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px"
        }}>

          {/* BORROW BUTTON */}
          <button
            onClick={() => navigate("/borrow")}
            style={{
              padding: "20px 40px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              color: "white",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(59,130,246,0.6)"
            }}
          >
            🔍 Borrow
          </button>

          {/* RENT BUTTON */}
          <button
            onClick={() => navigate("/rent")}
            style={{
              padding: "20px 40px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "white",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(34,197,94,0.6)"
            }}
          >
            ➕ Rent
          </button>

        </div>
      </div>

    </div>
  )
}

export default Home