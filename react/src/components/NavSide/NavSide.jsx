import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { Link, useNavigate } from "react-router-dom"

import styles from "./NavSide.module.css"

function NavSide(){
    const navigate = useNavigate();

    return(
        <SideNav
            className={styles.NavSide}
            onSelect={(selected=> {
                console.log(selected)
                navigate("/"+selected)
            })}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="home">

                        <NavItem eventKey="home">
                            <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: "1.5em"}}></i></NavIcon>
                            <NavText className={styles.nav_text} style={{ fontSize: "1.7rem"}}>Home</NavText>
                        </NavItem>

                        <NavItem eventKey="galeria">
                            <NavIcon><i className="fa fa-fw fa-image" style={{ fontSize: "1.5em"}}></i></NavIcon>
                            <NavText className={styles.nav_text} style={{ fontSize: "1.7rem"}}>Galeria</NavText>
                        </NavItem>

                        <NavItem eventKey="episodios">
                            <NavIcon><i className="fa fa-fw fa-play" style={{ fontSize: "1.5em"}}></i></NavIcon>
                            <NavText className={styles.nav_text} style={{ fontSize: "1.7rem"}}>Episódios</NavText>
                        </NavItem>  

                </SideNav.Nav>

        </SideNav>
    )
}

export default NavSide