/**
 * 画面の主要となるボタンのデザインを定義
 * いろいろなところで使えるようにする
 * 実際のボタンの中に表示していくラベルなどはpropsで
 * 受け取るようにする
 */

import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const PrimaryButton = (props) => {
  const { children } = props; //親要素のチルドレンを受け取る
  return <SButton>{children}</SButton>;
};

/**
 *
 * Styled componentsの適用
 * Styled-componentsを使うとreturn部がすっきりする
 * しかし、コンポーネントをあてているのか、styled-componentを充てているのか
 * ぱっと見で分からなくなる可能性あり。
 * sassと同じようにhoverが適用される
 * 既存のアプリからの移行が楽になる
 *
 * 既存のデザインコンポーネントに対してさらにデザインを追加適用する場合は
 * styled.ではなくstyled()を使う
 *
 */
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
