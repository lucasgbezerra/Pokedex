import { Spinner, keyframes } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { colors } from "../../../styles/Colors"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const customSpinnerStyles = css`
  animation: ${spin} 1s linear infinite;
`;

export function Loading() {
  return (
    <Spinner size="xl" color={colors.white} css={customSpinnerStyles} />
  );
}