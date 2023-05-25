import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_600};
    `}
    padding: 24px;
`;