import React, {useState} from 'react';

type UnControlledAccordionPropsType = {
   titleValue: string
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {
   const [collapsed, setCollapsed] = useState(false)
   const onClickHandler = (b: boolean) => {
      setCollapsed(b)
   }
   return (
      <div>
         <UnControlledAccordionTitle callBack={() => onClickHandler(!collapsed)} title={props.titleValue}/>
         {collapsed && <UnControlledAccordionBody/>}
      </div>
   );
};


type UnControlledAccordionTitlePropsType = {
   title: string
   callBack: () => void
}

const UnControlledAccordionTitle = (props: UnControlledAccordionTitlePropsType) => {
   console.log("UnControlledAccordionTitle rendering")
   const onClickHandler = () => {
      props.callBack()
   }
   return (
      <div>
         <h3 onClick={onClickHandler}>-- {props.title} -- </h3>
      </div>
   )
}


const UnControlledAccordionBody = () => {
   console.log("UnControlledAccordionBody rendering")
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}