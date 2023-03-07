import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export type ButtonStyledIconProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonStyledIconProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    margin-right: 35px;
    padding-bottom: 35px;
    
`

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))`
`