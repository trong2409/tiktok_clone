import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
function Wrapper({ children }) {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper')}>
        {children}
    </div>;
}

export default Wrapper;
