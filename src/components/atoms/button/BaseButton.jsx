/**
 * Button全体に共通するデザインをコンポーネントとして共通化する
 */
import styled from "styled-components";
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
