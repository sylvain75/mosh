import React, { FunctionComponent, ReactNode, useState } from 'react';
import Image from 'next/image';
import styles from './Accordion.module.css';
import DefaultButtonCTA from '@/components/callToAction/defaultButtonCTA';

type ActionLink = {
  text: string;
  link: string;
};

type ActionClick = {
  text: string;
  handleOnClick: () => void;
};

export type AccordionAction = ActionLink | ActionClick;

type AccordionProps = {
  title: string;
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  action?: AccordionAction;
};

const isActionLink = (action: ActionLink | ActionClick | undefined): action is ActionLink => {
  return (action as ActionLink)?.link !== undefined;
};

const isActionClick = (action: ActionLink | ActionClick | undefined): action is ActionClick => {
  return (action as ActionClick)?.handleOnClick !== undefined;
};
const Accordion: FunctionComponent<AccordionProps> = ({ title, children, action, imageSrc, imageAlt }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordionState = () => {
    setIsActive(!isActive);
  };

  const chevronStyle = isActive ? styles['chevron-up'] : styles['chevron-down'];
  const renderAction = () => {
    if (action) {
      const commonProps = { text: action.text, className: styles.action };
      if (isActionLink(action)) {
        return <DefaultButtonCTA {...commonProps} link={action?.link} />;
      }
      if (isActionClick(action)) {
        return <DefaultButtonCTA {...commonProps} handleOnClick={action?.handleOnClick} />;
      }
      return null;
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {imageSrc ? (
        <div className={styles['image-wrapper']} onClick={toggleAccordionState}>
          <Image src={imageSrc} alt={imageAlt || ''} fill style={{ borderRadius: 20, objectFit: 'cover' }} priority />
        </div>
      ) : null}
      <div className={styles.content}>
        <div className={styles.title} onClick={toggleAccordionState}>
          <p className={styles['accordion-title']}>{title}</p>
          <Image src="/chevron-down.svg" alt="chevron" className={chevronStyle} width={12} height={7} priority />
        </div>
        {isActive && <div className={styles['small-device-content']}>{children}</div>}
        <div className={styles['large-device-content']}>{children}</div>
        {renderAction()}
      </div>
    </div>
  );
};

export default Accordion;
