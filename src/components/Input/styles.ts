import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    width: 100%;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    padding-left: 16px;
    font-size: 16px;
    padding-bottom: 20px;
    `
