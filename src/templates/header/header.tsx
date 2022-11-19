import { Container } from "@mui/material"
import AtomButton from "../../atoms/buttons"
import AtomImage from "../../atoms/image"
import { Logo } from "../../helpers/constant/imageUrl"
import './header.scss'

const HeaderTemplate = () => {
    return (
        <div className="header">
            <Container>
                <AtomImage
                    src={Logo}
                />
            </Container>
        </div>
    )
}

export default HeaderTemplate