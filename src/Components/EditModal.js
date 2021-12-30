import { useState } from "react";
import styles from './Editmodal.module.css';

const EditModal = ({ editModalState, onEdit, hide, shuffleEditModal }) => {
  const [title, setTitle] = useState(editModalState.title);
  const [body, setBody] = useState(editModalState.body);
  console.log('Hide ', hide);
  return (
    <div className={styles.editModal + " " + (hide?"":styles.expandEditModal)} onClick={(e)=>{if(e.target === e.currentTarget)shuffleEditModal();}}>
      <div
      className={styles.modalContainer}>
      <div className={styles.modalContainerHeader}>
        <div className={styles.modalHeading}>Basic Modal</div>
        <div style={{cursor: "pointer"}} onClick={shuffleEditModal}>
          <i
            aria-label="icon: close">
            <svg
              viewBox="64 64 896 896"
              data-icon="close"
              width="1em"
              height="1em"
              fill="rgba(0,0,0,0.65)"
              aria-hidden="true">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </i>
        </div>
      </div>
      <div className={styles.modalContainerBody}>
        <div>
          <label htmlFor="name">Title </label>
          <input
            id="name"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Body </label>
          <input
            id="email"
            value={body}
            type="text"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.modalContainerFooter}>
        <button className={styles.cancelBtn} onClick={shuffleEditModal}>Cancel</button>
        <button
          className={styles.okBtn}
          disabled={!title || !body}
          onClick={() =>{ 
            onEdit(editModalState._id, title, body); 
          }}>
          Ok
        </button>
      </div>
    </div>
    </div>
  );
};
export default EditModal;