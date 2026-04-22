import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../common/Reveal";

function HeroV2() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-v2" id="home">
      <div className="container hero-v2__grid">
        <div className="hero-v2__content">
          <Reveal>
            <p className="hero-v2__eyebrow">{t("hero.eyebrow")}</p>
          </Reveal>

          <Reveal delay={0.05} y={30}>
            <h1 className="hero-v2__title">
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2")}
              <br />
              {t("hero.titleLine3")}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="hero-v2__description">{t("hero.description")}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hero-v2__actions">
              <a href="#work" className="btn btn--primary">
                {t("hero.primaryCta")}
              </a>
              <a href="#contact" className="btn btn--ghost">
                {t("hero.secondaryCta")}
              </a>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="hero-v2__visual"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? {}
              : { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <motion.div
            className="hero-panel hero-panel--top"
            animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
            transition={
              shouldReduceMotion
                ? {}
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="hero-panel__label">{t("hero.featuredLabel")}</span>
            <strong>{t("hero.featuredTitle")}</strong>
            <p>{t("hero.featuredText")}</p>
          </motion.div>

          <motion.div
            className="hero-panel hero-panel--middle"
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={
              shouldReduceMotion
                ? {}
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="hero-panel__label">{t("hero.stackLabel")}</span>
            <ul>
              <li>ASP.NET Core</li>
              <li>React + Vite</li>
              <li>JWT Authentication</li>
              <li>Microservices</li>
            </ul>
          </motion.div>

          <motion.div
            className="hero-panel hero-panel--bottom"
            animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
            transition={
              shouldReduceMotion
                ? {}
                : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="hero-panel__label">{t("hero.focusLabel")}</span>
            <p>{t("hero.focusText")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroV2;