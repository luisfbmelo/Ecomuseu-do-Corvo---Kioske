import { css } from '@emotion/core';
import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export const loadingOverride = css`
    display: block;
    margin: 0 auto;
`;

export default styled.div`
  position: fixed;
  top:0;
  left: 0;
  height:100%;
  width: 100%;
  background-color: ${props => hexToRgbA(props.theme.blackBackground, 0.9)};
  z-index: 999999;
  display: flex;
  align-items: center;
`