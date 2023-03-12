import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './HeroCardAccordionItemContent.module.css';

type HeroCardAccordionItemContentProps = {
  listItems: string[];
};
const HeroCardAccordionItemContent: FunctionComponent<HeroCardAccordionItemContentProps> = ({ listItems }) => {
  if (!listItems?.length) return null;

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item} className={styles['list-item']}>
          <Image src="/valid.svg" width={16} height={16} alt="valid-icon" />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default HeroCardAccordionItemContent;
