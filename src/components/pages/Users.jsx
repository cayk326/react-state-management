import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
//import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";

//import React, { useContext } from "react";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Tom-${val}`,
    image: "https://source.unsplash.com/N04FIfHhv_k",
    email: "12345.example.com",
    phone: "000-999-8888",
    company: {
      name: "aaa.inc.,"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  //useContextｗ使うとき
  //const { userInfo, setUserInfo } = useContext(UserContext);
  //今のuserInfo.isAdminと反対の値でisAdminを更新する
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  //Recoilを使うとき
  const [userInfo, setUserInfo] = useRecoilState(userState);

  return (
    <SContainer>
      <h2>User List</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Change</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
