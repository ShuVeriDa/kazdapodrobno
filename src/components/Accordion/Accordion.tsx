import React from 'react';
type ItemType = {
   title: string
   value: any
}

export type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
   color?: string
   items: ItemType[]
   onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
   console.log("Accordion rendering")
   return (
      <div>
         <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
         {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
      </div>
   );
};


type AccordionTitlePropsType = {
   title: string
   onChange: () => void
   color?: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
   console.log("AccordionTitle rendering")
   return (
      <div>
         <h3 style={{color: props.color ? props.color : 'black'}} onClick={props.onChange}>-- {props.title} -- </h3>
      </div>
   )
}

type AccordionBodyPropsType = {
   items: ItemType[]
   onClick: (value: any) => void
}


const AccordionBody: React.FC<AccordionBodyPropsType> = ({items, ...props}) => {
   console.log("AccordionBody rendering")
   return (
      <ul>
         {
            items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)
         }
      </ul>
   )
}