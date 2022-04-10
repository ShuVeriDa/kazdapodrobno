import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
   title: 'components/Accordion',
   component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion onClick={onClickCallBack} titleValue={'Menu'} collapsed={true}
                                                  onChange={callback} items={[]}/>
export const UsersUncontrollapsedMode = () => <Accordion onClick={onClickCallBack} titleValue={'Users'}
                                                         collapsed={false} onChange={callback}
                                                         items={[
                                                            {title: "Ramzan", value: 1},
                                                            {title: "Islam", value: 2}, {title: 'Billy', value: 3},
                                                            {title: '1Abdurrahman', value: 4}
                                                         ]}
/>
export const ModeChanging = () => {
   const [value, setValue] = useState<boolean>(true)
   return <Accordion onClick={(value) => alert(`user with ID ${value} should be happy`)} titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                     items={[
                        {title: "Ramzan", value: 1},
                        {title: "Islam", value: 2},
                        {title: 'Billy', value: 3},
                        {title: '1Abdurrahman', value: 4}
                     ]}/>
}
