import React from 'react'
import '../styles/TagInput.css'
import { MdAdd, MdClose } from 'react-icons/md'
import { useState } from 'react'

const TagInput = ({tags, setTags}) => {
  
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = async(e) => {
    setInputValue(e.target.value);
  }

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = async(e) => {
      if (e.key === "Enter") {
        addNewTag();
      }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove)); 
  };
  
  return (
    <div>
        {tags?.length > 0 && (
          <div className='container-2'>
            {tags.map((tag,index) => (
              <span key={index} className='span-1'>
                # {tag}
                <button className='remove-tag-btn' onClick={() => {handleRemoveTag(tag)}}>
                  <MdClose className='remove-tag-icon'/>
                </button>
              </span>
            ))}
          </div>
        )}
        <div className='tag-container'>
            <input type="text" value={inputValue} className='tag-input' placeholder='Add Tags' onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button className='tag-btn' onClick={() => {
              addNewTag();
            }}>
                <MdAdd className='tag-icon'></MdAdd>
            </button>
        </div>
    </div>
  )
}

export default TagInput