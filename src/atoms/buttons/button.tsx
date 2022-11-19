import Button from "@mui/material/Button"
import { Children } from "react"
import { ButtonProps } from "../../interfaces/button/button"


const AtomButton: React.FC<ButtonProps> = ({
    variant,
    color,
    disabled,
    startIcon,
    endIcon,
    fullWidth,
    children
}): JSX.Element | null => {
    return (
        <Button
            variant={variant}
            color={color} 
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            fullWidth={fullWidth}
        >
            {children}
        </Button>
    )
}

export default AtomButton