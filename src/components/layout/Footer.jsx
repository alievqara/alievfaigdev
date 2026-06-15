import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>{t("footer.left")}</p>
      </div>
    </footer>
  );
}

export default Footer;