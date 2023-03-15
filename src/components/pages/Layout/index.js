import { useState } from "react";
import Header from "../../Header";
import Classifier from "../Classifier";
import AuthPage from "../AuthPage";
import { PAGES } from "../../../consts";

const Layout = ({ page }) => {
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

  let targetPage;

  switch (page) {
    case PAGES.classifier:
      targetPage = <Classifier />;
      break;
    case PAGES.archive:
      targetPage = <h1>Архив услуг</h1>;
      break;
    case PAGES.users:
      targetPage = <h1>Пользователи</h1>;
      break;
    case PAGES.admin:
      targetPage = <h1>Администрирование</h1>;
      break;
    case PAGES.login:
      targetPage = <AuthPage loggedIn={false} />;
      break;
    default:
      break;
  }

  return (
    <>
      {page !== PAGES.login ? (
        <Header
          isProfilePopupVisible={isProfilePopupVisible}
          setIsProfilePopupVisible={setIsProfilePopupVisible}
        />
      ) : null}
      {targetPage}
    </>
  );
};

export default Layout;
