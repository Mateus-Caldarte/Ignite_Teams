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
