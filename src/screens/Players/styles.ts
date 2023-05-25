import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_600};
    `}
    padding: 24px;
`;

export const Form = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
    margin-bottom: 12px;
`;