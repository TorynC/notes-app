import React from 'react'
import { MdOutlinePushPin, MdCreate, MdDelete} from 'react-icons/md';
import '../styles/Notecard.css'
import moment from "moment"

const NoteCard = ({title, content, date, tags, isPinned, onEdit, onDelete, onPinNote}) => {
  return (
    <div className='note-card'>
      <div className='note-header'>
        <div>
          <h6 className="note-title">
            {title}
            <span className='note-date'>
              {moment(date).format("Do MMM YYYY")}
            </span>
          </h6>
        </div>

      </div>

      <p className='note-content'>{content?.slice(0,80)}</p>

      <div className='note-footer'>
        <div className="tags">{tags.map((item) => `#${item}   `)}</div>
          <div className='note-actions'>
            <MdCreate className='action-icon' onClick={onEdit}></MdCreate>
            <MdDelete className='action-icon' onClick={onDelete}></MdDelete>
          </div>
      </div>
    </div>
  );
};

export default NoteCard;