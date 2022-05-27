import {FC} from "react";
import {ClockViewPropsType} from "./Clock";
import styles from './AnalogClockView.module.css'

export const AnalogClockView: FC<ClockViewPropsType> = ({date}) => {

   const secondStyle = {
      transform: `rotate(${date.getSeconds() * 6}deg)`
   }
   const minutesStyle = {
      transform: `rotate(${date.getMinutes() * 6}deg)`
   }
   const hoursStyle = {
      transform: `rotate(${date.getHours() * 30}deg)`
   }

   return <div className={styles.clock}>
      <div className={styles["analog-clock"]}>
         <div className={`${styles.dial} ${styles.seconds}`} style={secondStyle} />
         <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
         <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
      </div>
   </div>
}