import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}
const Link = ({ page, setSelectedPage, selectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/\s/gi, "")
    .trim() as SelectedPage

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage && "text-primary-500"
      } transition duration-500 hover:text-primary-300 `}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
