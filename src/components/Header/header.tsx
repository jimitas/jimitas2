import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faHome, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeThemeButton } from "./ChangeThemeButton";
import styles from "src/components/Header/header.module.css";

export function Header() {
  const router = useRouter();

  const reload = () => {
    const result = window.confirm("もういちど　ページを　よみこみますか？");
    if (result === false) return;
    location.reload();
  };

  const back = () => {
    const result = window.confirm("まえの　ページに　もどりますか？");
    if (result === false) return;
    router.back();
  };

  return (
    <header className={`"space-y-4 p-4 sm:px-8 sm:py-4 lg:p-4 xl:px-8 xl:py-4" ${styles.nav}`}>
      <div className={styles.navButton}>
        <Link href="./">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>

      <div className={styles.navButton}>メニュー</div>

      <div onClick={back} className={styles.navButton}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>

      <div onClick={reload} className={styles.navButton}>
        <FontAwesomeIcon icon={faUndo} />
      </div>

      <div className={styles.navButton}>
        <ChangeThemeButton />
      </div>
    </header>
  );
}
