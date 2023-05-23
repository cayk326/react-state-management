/**
 * プロバイダーコンポーネント
 * ユーザー情報を扱うプロバイダーコンポーネント
 *　・コンテキストを扱う場合はcreateContextをインポートして
 * createContext()でコンテキストを作る
 * contextはproviderを持っているので、UserProviderという名前で
 * 中身をコンテキストとして中身のプロバイダーを返す
 * どんなものでも返せるようにchildrenを返すのが一般的
 * グローバルに参照できるステート値はvalueとして渡す
 */

import { createContext, useState } from "react";

//他の画面でも使えるようにexportする
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  //const contextName = "Tom"; //通常は変数になる。どこからも更新できるし、どこからでも参照できるようにする
  return (
    //stateとセット関数を割り当てることでstateを渡せるし、セット関数でstate更新もできる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
