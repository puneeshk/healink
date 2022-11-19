export interface ButtonProps {
    variant: 'contained' | 'outlined' | 'text'
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    disabled?: boolean
    startIcon?: node
    endIcon?: node
    fullWidth?: boolean
    children: node
}