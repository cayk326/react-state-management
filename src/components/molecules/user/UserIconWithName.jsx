import React, { memo } from "react";
import styled from "styled-components";
//import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil"; //値を参照するだけの時
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name, height, width } = props; //userで受け取ってもよいが、必要な情報だけ受け取った方が良い

  /**
   * useContextを使うことでグローバルなコンテキストを参照できる
   * 引数にはどこかで定義しているコンテキストを入れる
   * これによってどのコンテキストを使うのか明示できる
   */
  //const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState); //recoilを使う

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={height} width={width} src={image} alt="Profile" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
