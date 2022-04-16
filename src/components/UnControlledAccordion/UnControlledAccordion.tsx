import React, {useReducer, useState} from 'react';
import {ActionType, reducer, TOGGLE_CONSTANT} from "./reducer";

type UnControlledAccordionPropsType = {
   titleValue: string
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {
   // const [collapsed, setCollapsed] = useState(false)
   const [state, dispatch] = useReducer(reducer, {collapsed: false})
   const onClickHandler = (b: ActionType) => {
      dispatch(b)
   }
   return (
      <div>
         <UnControlledAccordionTitle callBack={() => onClickHandler({type: TOGGLE_CONSTANT})} title={props.titleValue}/>
         {!state.collapsed && <UnControlledAccordionBody />}
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