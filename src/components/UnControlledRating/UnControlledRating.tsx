import {useState} from "react";

type UnControlledRatingPropsType = {

}

export const UnControlledRating = (props: UnControlledRatingPropsType) => {
   const onClickHandler = (value: number) => {
      setValue(value)
   }
   const [value, setValue] = useState(0)

   return (
      <div>
         <Star callBack={() => onClickHandler(0)} selected = {value > 0}/>
         <Star callBack={() => onClickHandler(1)} selected = {value > 1}/>
         <Star callBack={() => onClickHandler(2)} selected = {value > 2}/>
         <Star callBack={() => onClickHandler(3)} selected = {value > 3}/>
         <Star callBack={() => onClickHandler(4)} selected = {value > 4}/>
         <Star callBack={() => onClickHandler(5)} selected = {value > 5}/>
      </div>
   );
};

type StarPropsType = {
   selected: boolean
   callBack: () => void
}

const Star = (props:StarPropsType) => {
   const onClickHandler = () => {
      props.callBack()
   }

   return <span onClick={onClickHandler}>{ props.selected ? <b> star </b> : "star"}</span>

}

