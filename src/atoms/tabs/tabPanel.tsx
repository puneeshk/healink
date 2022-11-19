import * as React from 'react';
import { TabPanelProps } from '../../interfaces/tabs/tabs'

const AtomTabPanel = (props: TabPanelProps) => {
    const {children, index, value, ...other} = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    )
}

export default AtomTabPanel