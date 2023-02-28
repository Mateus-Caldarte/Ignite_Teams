import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`

export const Logo = styled.Image`
    width: 60px;
    height: 60px;
`

export const BackButton =  styled.TouchableOpacity`
    flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    size: 36,
    color: theme.COLORS.WHITE
}))``