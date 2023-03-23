import { MaterialIcons } from '@expo/vector-icons'
import styled, {css} from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
    border-radius: 6px;
`

export const Title = styled.Text`
    text-transform: uppercase;
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
`

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
    }))`
    margin-left: 16px;
    margin-right: 6px;
    
    `
