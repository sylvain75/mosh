import { FunctionComponent, ReactNode } from 'react';
import styles from './HeroCard.module.css';
import Image from 'next/dist/client/image';

type HeroCardProps = {
  imageProps: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const HeroCard: FunctionComponent<HeroCardProps> = ({ imageProps, children }) => {
  return (
    <div className={styles.container}>
      {imageProps ? (
        <div className={styles['hero-card-image-wrapper']}>
          <Image {...imageProps} fill />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default HeroCard;
