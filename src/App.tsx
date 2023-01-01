import Navbar from "@/scenes/Navbar"
import Home from "@/scenes/Home"
import Benefits from "@/scenes/Benefits"
import ContactUs from "@/scenes/ContactUs"
import Footer from "@/scenes/Footer"
import OurClasses from "@/scenes/ourClasses"
import { useEffect, useState } from "react"
import { SelectedPage } from "./shared/types"

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app overflow-x-hidden">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
