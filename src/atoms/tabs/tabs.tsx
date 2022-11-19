import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabsItemProps, TabsProps } from '../../interfaces/tabs/tabs'

const AtomTabs: React.FC<TabsProps> = ({
    value,
    variant,
    onChange,
    children,
    scrollButtons
}): JSX.Element => {
    return (
        <Tabs 
            value={value}
            variant={variant} 
            onChange={onChange}
            scrollButtons={scrollButtons}
            allowScrollButtonsMobile={true}
        >
            {children.map((item: TabsItemProps, index: number) => {
                return (
                    <Tab 
                        icon={item.icon}
                        key={item.text + index}
                        label={item.label || item.text}
                        disabled={item.disabled}
                    />
                )
            })}
        </Tabs>
    )
}

export default AtomTabs