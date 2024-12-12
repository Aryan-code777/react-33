import { Outlet } from "react-router-dom"
import { HomeHeader } from "../../components/headers/header.component"
import HomeFooter from "../../components/footers/footer.component"

const HomePageLayout = () => {
    return (<>
        <HomeHeader />
        <Outlet />
        <HomeFooter />
    </>)
}
export default HomePageLayout