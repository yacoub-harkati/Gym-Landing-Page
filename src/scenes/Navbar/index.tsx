import { useEffect, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  selectedPage: SelectedPage
  isTopOfPage: boolean
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  useEffect(() => {
    const scrollEvent = () => setIsMenuToggled(false)
    window.addEventListener("scroll", scrollEvent)
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])

  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div
        className={`${navBackground} flex-between top 0 fixed z-30 w-full py-6`}
      >
        <div className="flex-between mx-auto w-5/6">
          <div className="flex-between w-full gap-16">
            <img src={Logo} alt="logo" />

            {isAboveMediumScreens ? (
              <div className="flex-between w-full">
                <div className="flex-between text-small gap-8">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled((prev) => !prev)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {!isAboveMediumScreens && IsMenuToggled && (
          <motion.div
            key={crypto.randomUUID()}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", stiffness: 100 }}
            className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
          >
            {/* Close ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled((prev) => !prev)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
