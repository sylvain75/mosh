import { FunctionComponent, ReactNode } from 'react';
import styles from './Layout.module.css';

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default Layout;
