import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

/**
 * Templeteは情報を持たないので、情報自体はまとめてpropsで受け取れるようにする
 *
 * React-Routerの機能を使う場合は機能を呼び出した領域を
 * BrouserRouterで囲う必要があり
 *
 */
export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
