/**
 * AtomのbuttonコンポーネントとInputコンポーネントを組み合わせて
 * 検索エリアのMoleculesを定義
 *
 */
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import React, { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SerchInput");
  return (
    <SContainer>
      <Input placeholder="Input a search condition" />
      <SButtonWraper>
        <PrimaryButton>Search</PrimaryButton>
      </SButtonWraper>
    </SContainer>
  );
});
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWraper = styled.div`
  padding-left: 8px;
`;
