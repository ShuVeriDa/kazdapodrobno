import {FC, useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockPropsType = {
   mode?: 'digital' | 'analog'
}

export const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: FC<ClockPropsType> = (props) => {
   const [date, setDate] = useState(new Date())

   useEffect(() => {
      const intervalID = setInterval(() => {
         console.log('TICK')
         setDate(new Date())
      }, 1000)

      return () => {
         clearInterval(intervalID)
      }
   }, [])

   let view

   switch (props.mode) {
      case "analog":
         view = <AnalogClockView date={date}/>
         break
      case 'digital':
         default:
         view = <DigitalClockView date={date} />
   }


   return (
      <div>
         {view}
      </div>
   );
};

export type ClockViewPropsType = {
   date: Date
}

