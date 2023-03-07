import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export type ButtonTypesStyledProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonTypesStyledProps;
}

export const Container =  styled(TouchableOpacity) <Props>`
   width: 100%;
   height: 56px;
   background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
   border-radius: 6px;
   align-items: center;
   justify-content: center;
   margin-bottom: 20px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`