import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {Rating} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

function App(props: any) {
   // let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
   let [switchOn, setSwitchOn] = useState<boolean>(false)

   return (
      <div className="App">
         <Rating value={2}/>
         <UnControlledRating/>
         <Accordion titleValue={"Menu"}
                    collapsed={accordionCollapsed}
                    onChange={() => setAccordionCollapsed(!accordionCollapsed)}
         />
         <UnControlledAccordion titleValue={"Menu"} />
         <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>
         <UnControlledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      </div>
   );
}

export default App;
