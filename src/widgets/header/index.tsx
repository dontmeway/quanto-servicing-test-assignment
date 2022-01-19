import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { memo } from "react";
import styles from "./styles.module.scss";

export const Header = memo(() => {
  return (
    <div className={styles.root}>
      <PlaneIcon />
    </div>
  );
});
