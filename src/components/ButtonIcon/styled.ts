import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export type ButtonStyledIconProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonStyledIconProps;
}

export const Container = styled(TouchableOpacity)` 
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))`
`