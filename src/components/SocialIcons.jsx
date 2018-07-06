import preact from 'preact';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import styles from './SocialIcons.block.css';

const SocialIcons = () => (
  <nav className={styles}>
    <a className={styles.link} href="https://github.com/somehats">
      <GithubIcon className={styles.icon} />
    </a>
    <a className={styles.link} href="https://twitter.com/somehats">
      <TwitterIcon className={styles.icon} />
    </a>
  </nav>
);

export default SocialIcons;
