/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags((prevTags) => {
        const newTags = [...prevTags, inputValue.trim()];
        return newTags;
      });
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };


  return (
    <div>
      {tags?.length > 0 && (
        
        <div className="flex it gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
         
            <span key={index} className="flex items-center gap-2 text-sm text-slate-900 bg-slate-200 px-3 py-1 rounded-lg">
              #{tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          placeholder="Add Tags"
          className="text-sm-transparent border border-gray-200 px-3 py-2 rounded-lg outline-none hover:bg-slate-200"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          
        />
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-blue-700 hover:bg-blue-700"
          onClick={addNewTag}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
