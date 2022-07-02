import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function AccountItem() {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper')}>
        <img src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665207694565382~c5_300x300.webp?x-expires=1656939600&x-signature=IOW%2BmJFonyk0yXRVunjhIeCTSXg%3D" alt="Hoa" className={cx('avatar')}/>
        <div className={cx('infor')}>
            <p className={cx('name')}> 
                <span>asmrmissmi</span>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
            </p>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;
