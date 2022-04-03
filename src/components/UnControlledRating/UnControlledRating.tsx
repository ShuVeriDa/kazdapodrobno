import {useState} from "react";

type RatingPropsType = {
   
}

export const Rating = (props: RatingPropsType) => {
   const [selected, setSelected] = useState(false)
   return (
      <div>
         <Star selected = {props.value > 0}/><button onClick={() => setSelected(!selected)}>0</button>
         <Star selected = {props.value > 1}/><button onClick={() => setSelected(!selected)}>1</button>
         <Star selected = {props.value > 2}/><button onClick={() => setSelected(!selected)}>2</button>
         <Star selected = {props.value > 3}/><button onClick={() => setSelected(!selected)}>3</button>
         <Star selected = {props.value > 4}/><button onClick={() => setSelected(!selected)}>4</button>
         <Star selected = {props.value > 5}/><button onClick={() => setSelected(!selected)}>5</button>
      </div>
   );
};

type StarPropsType = {
   selected: boolean
}

const Star = (props:StarPropsType) => {
      if (props.selected === true) {
         return <span><b>star</b></span>
      } else {
         return <span>star</span>
      }

}

