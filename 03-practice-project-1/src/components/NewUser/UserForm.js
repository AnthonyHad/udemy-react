import styles from './UserForm.module.css';

const UserForm = () => {
  return (
    <form>
      <div className={styles['new-user__controls']}>
        <div className={styles['new-user__control']}>
          <label>Username</label>
          <input type="text"></input>
        </div>
        <div className={styles['new-user__control']}>
          <label>Age(Years)</label>
          <input type="number" min="10" step="1"></input>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
