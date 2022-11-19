
export interface ImageProps {
    src: string | undefined
    alt?: string
    className?: string
    onClick?: (event: React.SyntheticEvent<any, Event>) => void | null
    width?: string
    height?: string
}