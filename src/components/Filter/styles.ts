import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export type FilterButtonProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterButtonProps>`
    
    ${({theme, isActive}) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `};
    border-radius: 6px;
    margin-right: 12px;
    height: 38px;
    width: 70px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const Title = styled.Text`
    text-transform: uppercase;
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
`