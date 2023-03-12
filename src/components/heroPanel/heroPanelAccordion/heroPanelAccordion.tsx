import { FunctionComponent } from 'react';
import Accordion, { AccordionAction } from '@/components/accordion/accordion';
import styles from '@/components/heroPanel/HeroPanel.module.css';
import HeroCardAccordionItemContent from '@/components/homePage/heroCardAccordionItemContent';

type HeroPanelAccordionProps = {
  title: string;
  listItems: string[];
  action?: AccordionAction;
  imageSrc?: string;
  imageAlt?: string;
};

export const HeroPanelAccordion: FunctionComponent<HeroPanelAccordionProps> = ({
  title,
  listItems,
  action,
  imageSrc,
  imageAlt,
}) => {
  const filterLengthOption = (list: string[], indexLength: number): string[] => {
    // Safety in case the api send back more than 3 items
    return list.filter((item, index) => index < indexLength);
  };

  return (
    <Accordion title={title} action={action} imageSrc={imageSrc} imageAlt={imageAlt}>
      <div className={styles['accordion-children-wrapper']}>
        <HeroCardAccordionItemContent listItems={filterLengthOption(listItems, 3)} />
      </div>
    </Accordion>
  );
};
