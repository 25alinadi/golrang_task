import Header from "../components/share/Header"
import { ReactElement } from "react"

type DefaultLayoutProps = {
    children: ReactElement
}

const DefaultLayout:React.FC<DefaultLayoutProps> = ({children}: DefaultLayoutProps) => {
    return(
        <main className="container">
            <Header />
            {children}
        </main>
    )
}

export default DefaultLayout