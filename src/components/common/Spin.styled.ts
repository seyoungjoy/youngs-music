import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const S = {
  SpinnerContainer: styled.div`
    width: 30px;
    height: 30px;
    display: inline-block;
    overflow: hidden;
    background: transparent;
  `,
  SpinnerWrap: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.3);
    backface-visibility: hidden;
    transform-origin: 0 0;
    > div:nth-of-type(1) {
      transform: rotate(0deg);
      animation-delay: -0.9166666666666666s;
      background: #c2c2c2;
    }
    > div:nth-of-type(2) {
      transform: rotate(30deg);
      animation-delay: -0.8333333333333334s;
      background: #c2c2c2;
    }
    > div:nth-of-type(3) {
      transform: rotate(60deg);
      animation-delay: -0.75s;
      background: #c2c2c2;
    }
    > div:nth-of-type(4) {
      transform: rotate(90deg);
      animation-delay: -0.6666666666666666s;
      background: #c2c2c2;
    }
    > div:nth-of-type(5) {
      transform: rotate(120deg);
      animation-delay: -0.5833333333333334s;
      background: #c2c2c2;
    }
    > div:nth-of-type(6) {
      transform: rotate(150deg);
      animation-delay: -0.5s;
      background: #c2c2c2;
    }
    > div:nth-of-type(7) {
      transform: rotate(180deg);
      animation-delay: -0.4166666666666667s;
      background: #c2c2c2;
    }
    > div:nth-of-type(8) {
      transform: rotate(210deg);
      animation-delay: -0.3333333333333333s;
      background: #c2c2c2;
    }
    > div:nth-of-type(9) {
      transform: rotate(240deg);
      animation-delay: -0.25s;
      background: #c2c2c2;
    }
    > div:nth-of-type(10) {
      transform: rotate(270deg);
      animation-delay: -0.16666666666666666s;
      background: #c2c2c2;
    }
    > div:nth-of-type(11) {
      transform: rotate(300deg);
      animation-delay: -0.08333333333333333s;
      background: #c2c2c2;
    }
    > div:nth-of-type(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
      background: #c2c2c2;
    }
  `,
  SpinnerItem: styled.div`
    left: 47px;
    top: 24px;
    position: absolute;
    animation: ${fadeAnimation} linear 1s infinite;
    background: #c2c2c2;
    width: 6px;
    height: 12px;
    border-radius: 3px / 6px;
    transform-origin: 3px 26px;
    box-sizing: content-box;
  `,
};

export default S;
