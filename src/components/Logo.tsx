import styles from "./Logo.module.css";

export interface LogoProps {
  imageURL: string;
  url: string;
  shouldRotate?: boolean;
  customClass?: string;
}

export function Logo({
  imageURL,
  url,
  shouldRotate = false,
  customClass,
}: LogoProps) {
  let finalClassList =
    customClass !== undefined
      ? `${styles.logo} ${customClass}`
      : `${styles.logo}`;
  finalClassList = shouldRotate
    ? `${finalClassList} ${styles.rotate}`
    : finalClassList;
  return (
    <a href={url} target="_blank">
      <img src={imageURL} className={finalClassList} alt="Vite logo" />
    </a>
  );
}
