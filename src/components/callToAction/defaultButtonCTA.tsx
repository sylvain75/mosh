import { FunctionComponent } from 'react';
import styles from './PrimaryCTA.module.css';

type DefaultButtonCTAProps = {
  text: string;
  link?: string;
  handleOnClick?: () => void;
  className?: string;
};
const DefaultButtonCTA: FunctionComponent<DefaultButtonCTAProps> = ({ text, link, handleOnClick, className }) => {
  return (
    <a href={link} className={[styles.container, className].join(' ')} onClick={handleOnClick ?? undefined}>
      <button className={styles.button}>{text.toUpperCase()}</button>
    </a>
  );
};

export default DefaultButtonCTA;
