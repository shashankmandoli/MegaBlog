import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth/auth"
import { login, logout } from "./store/authSlice"
import {Header, Footer} from "./components/index"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) dispatch(login({userData}))
      else dispatch(logout())
    })
    .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className="bg-gray-700 text-white min-h-screen flex justify-center">
      <div>
        <Header />
        <main>
          TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
