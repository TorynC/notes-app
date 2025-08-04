import React from 'react'
import '../styles/AddEditNotes.css'
import TagInput from './TagInput'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import axiosInstance from "../utils/axiosinstance"

const AddEditNotes = ({ noteData, type, getAllNotes, onClose }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  // Add Note 
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        getAllNotes()
        onClose()
      }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        }
    }
  };

  // Edit Note

  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        getAllNotes()
        onClose()
      }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  }

  return (
    <div className='add-edit-container'>
      <button className='close-btn' onClick={onClose}>
        <MdClose className='close-icon'></MdClose>
      </button>
 
      <div className='top'>
        <label className='input-label'>Title</label>
        <input type="text" className='input-1' 
        placeholder='Go to the gym at 5' 
        value={title}
        onChange={({target}) => setTitle(target.value)}/>
      </div>

      <div className='content-container'>
        <label className='input-label'>Content</label>
        <textarea type='text' className='content-input' 
        placeholder='Content' 
        rows={10}
        value={content}
        onChange={({target}) => setContent(target.value)}>
        </textarea>
      </div>
      <div className='tags-container'>
        <label className='input-label'> Tags</label>
        <TagInput tags={tags} setTags={setTags}></TagInput>
      </div>

      {error && <p className='error-message'>{error}</p>}

      <button className='add-button' onClick={handleAddNote}>
        {type === 'edit'? 'Update' : 'Add'}
      </button>
    </div>
  )
}

export default AddEditNotes