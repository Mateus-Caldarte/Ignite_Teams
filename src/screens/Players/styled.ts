import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 10px;
`

export const Form = styled.View` 
    width: 100%;
    padding-right: 60px;
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: 6px;
    height: 60px;
`

export const ContainerButton = styled.View`
    flex: 1;
    justify-content: flex-end;
`

export const HeaderList = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
`
export const NumberOfPlayers = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    margin-right: 3px;
`