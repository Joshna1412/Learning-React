import { useContext } from "react"
import { ConfirmButton, PopupButton, PopupButtonsSection, PopupCardSection } from "../styled-components"
import ThemeContext from "../ThemeContext"

const PopupCard = ({ close, onConfirm }) => {
    const { isDark } = useContext(ThemeContext)

    return (
        <PopupCardSection $isdark={isDark}>
            <h3 style={{ paddingBottom: '10px' }}>Are you sure you want to logout?</h3>
            <PopupButtonsSection>
                <PopupButton $isdark={isDark} onClick={close}>Cancel</PopupButton>
                <ConfirmButton $isdark={isDark} onClick={onConfirm}>Confirm</ConfirmButton>
            </PopupButtonsSection>
        </PopupCardSection >
    )
}

export default PopupCard