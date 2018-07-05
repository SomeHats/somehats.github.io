import preact from 'preact';
import styles from './index.block.css';

const Home = () => <h1 className={styles}> this is a web page </h1>;

preact.render(<Home />, document.body);
