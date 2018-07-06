import preact from 'preact';
import SocialIcons from './SocialIcons';
import styles from './Layout.block.css';

const Layout = ({ children }) => (
  <main className={styles}>
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <SocialIcons />
    </footer>
  </main>
);

export default Layout;
