import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import styles from './HeroPanel.module.css';
import { HeroPanelAccordion } from '@/components/heroPanel/heroPanelAccordion/heroPanelAccordion';

type MoshOptions = {
  consultation: string[];
  therapy: string[];
};

const mockedResponse: MoshOptions = {
  consultation: [
    'Personalised treatment options',
    'Video consults and easy check-ins',
    'Medication, prescribed and delivered',
  ],
  therapy: [
    'Match with a registered therapist',
    'Same day and after hours availability',
    'Confidential online therapy sessions',
  ],
};
const fetchMoshOptions = async () => {
  if (process.env.NODE_ENV === 'development') {
    /*
      During development The mock api went down due to too many request so I implemented
      this mocked response to avoid crashing it again
    */
    return mockedResponse;
  }
  const res = await fetch('https://moshhero.free.beeceptor.com/my/api/options');
  return res.json();
};
const HeroPanel: FunctionComponent = () => {
  const { data: moshOptions, status, error } = useQuery<MoshOptions, Error>('option', fetchMoshOptions);
  if (!moshOptions) {
    // status & error state can be used to handle eventual matching UI
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles['left-content']}>
        <div>
          <h1>Get back on track</h1>
          <div className={styles['sub-text-wrapper']}>
            <p className={styles['sub-text']}>Treatment plan in 24 hours.</p>
            <p className={styles['sub-text']}>Treat anxiety, depression & more</p>
          </div>
        </div>
      </div>
      <div className={styles['right-content']}>
        <HeroPanelAccordion
          title="Free Online Doctor Consultation"
          action={{ text: 'get started', link: 'https://www.getmosh.com.au/quizzes/mental_health_quiz' }}
          imageSrc="/man-with-phone.png"
          imageAlt="man-with-phone"
          listItems={moshOptions?.consultation || []}
        />
        <HeroPanelAccordion
          title="One-on-one therapy sessions"
          action={{ text: 'Book Therapist', link: 'https://www.getmosh.com.au/booking/mental_health' }}
          imageSrc="/man-with-tablet.png"
          imageAlt="man-with-tablet"
          listItems={moshOptions?.therapy || []}
        />
      </div>
    </div>
  );
};

export default HeroPanel;
