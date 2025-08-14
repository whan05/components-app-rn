import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card";
import { CustomSwitch } from "../../components/ui/CustomSwitch";
import { Separator } from "../../components/ui/Separator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Title } from "../../components/ui/Title";



export const SwitchScreen = () => {

    //   const [isEnabled, setIsEnabled] = useState(false);
    //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const { top } = useSafeAreaInsets()

    const [ state, setState ] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })


  return (
    <CustomView margin>
      <Title text="Switches" safe />
      <Card>
        <CustomSwitch
          isOn={ state.isActive}
          onChange={( value ) => setState({...state, isActive: value})}
          text="Esta activo"
        />
        <Separator/>
        <CustomSwitch
          isOn={ state.isHungry}
          onChange={( value ) => setState({...state, isHungry: value})}
          text="Tiene Hambre?"
          />
          <Separator/>
        <CustomSwitch
          isOn={ state.isHappy}
          onChange={( value ) => setState({...state, isHappy: value})}
          text="Es feliz?"
        />
      </Card>
    </CustomView>
  );
}
