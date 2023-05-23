import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
//import { useContext } from "react";
//import { UserContext } from "../../providers/UserProvider";

import { useSetRecoilState } from "recoil"; //set関数だけ使うとき
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  //const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const OnClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const OnClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <SContainer>
      <h2>Top Page</h2>
      <SecondaryButton onClick={OnClickAdmin}>Admin User</SecondaryButton>
      <br />
      <br />

      <SecondaryButton onClick={OnClickGeneral}>User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
