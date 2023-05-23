/**
 * Inputの共通デザインを定義する
 * Placeholderなどは動的に変更できるようにする
 */

import styled from "styled-components";
export const Input = (props) => {
  const { placeholder = "" } = props; //デフォルトは空文字
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
