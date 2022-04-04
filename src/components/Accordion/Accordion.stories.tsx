import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const CategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
   table: {
      category: categoryName
   }
})

export default {
   title: 'components/Accordion',
   component: Accordion,
   argTypes: {
      color: {
         control: 'color',
         ...CategoryObj('Color')
      },
      onChange: {
         ...CategoryObj('Event')
      },
      onClick: {
         ...CategoryObj
      },
      items: {...CategoryObj('Main')},
      collapsed: {...CategoryObj('Main')},
      titleValue: {...CategoryObj('Main')}
   }
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
   onChange: callback,
   onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
   ...callbacksProps,
   titleValue: 'Menu',
   collapsed: true,
}