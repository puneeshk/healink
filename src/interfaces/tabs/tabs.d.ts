export interface TabsProps {
    value?: element | string
    variant: 'fullWidth' | 'scrollable' | 'standard'
    children: element | string
    onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void
    icon?: element | string
    scrollButtons?: boolean
}

export interface TabPanelProps {
    children: element | string
    index: number
    value: element | string
    className?: string
}

export interface TabsItemProps {
    icon?: element | string
    text: string
    label?: React.ReactElement | string
    disabled?: boolean
}