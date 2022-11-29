import Caurousel from "react-material-ui-carousel"
import { DEPARTMENTPHOTOS } from "./department-photos"
export function CaurouselComponent() {
    return (
        <Caurousel sx={{ width: "50%",  }} >
            {DEPARTMENTPHOTOS.map((dep) => {
                return <img src={dep.url} key={dep.url} alt={dep.name} style={{ width: "100%", height: "25vh"}} />
            })}
        </Caurousel>
    )
} 