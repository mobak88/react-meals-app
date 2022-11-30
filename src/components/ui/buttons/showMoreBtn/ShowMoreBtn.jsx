import styles from "./ShowMoreBtn.module.css";

const ShowMoreBtn = ({ onShowMoreClick, visibleCount }) => {
  return (
    <div
      className={
        visibleCount % 2 === 1
          ? `${styles["show-more-btn-container"]} ${styles["show-more-btn-container-light"]}`
          : `${styles["show-more-btn-container"]} ${styles["show-more-btn-container-dark"]}`
      }
    >
      <button className={styles["show-more-btn"]} onClick={onShowMoreClick}>
        Load more
      </button>
    </div>
  );
};

export default ShowMoreBtn;
