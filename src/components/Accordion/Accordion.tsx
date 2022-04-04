import React from 'react';

export type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
   color?: string
}

export const Accordion = (props: AccordionPropsType) => {
   console.log("Accordion rendering")
   return (
      <div>
         <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
         {!props.collapsed && <AccordionBody/>}
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


const AccordionBody = () => {
   console.log("AccordionBody rendering")
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}