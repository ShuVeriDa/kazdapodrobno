import {UnControlledOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
   title: 'UncontrolledOnOff',
   component: UnControlledOnOff
}

const callBack = action('on or off clicked')

export const onMode = () => <UnControlledOnOff onChange={callBack} />
export const offMode = () => <UnControlledOnOff onChange={callBack} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>