import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email.endsWith("@dsatm.edu.in")) {
      navigate("/home")
    } else {
      alert("Use your college email ID")
    }
  }

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at top, #1a1a2e, #0f0f0f)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        background: "#111",
        padding: "30px",
        borderRadius: "16px",
        width: "300px",
        boxShadow: "0 0 20px rgba(0,0,0,0.6)"
      }}>
        <h2 style={{ textAlign: "center" }}>Campus Borrow 🚀</h2>

        <input
          type="text"
          placeholder="Enter college email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid #333",
            background: "#000",
            color: "white"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login