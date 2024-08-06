/* eslint-disable react/prop-types */
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import moment from "moment"
const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-sm  text-slate-600">{moment(date.createdOn).format("Do MMM YYYY")}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-400"}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-600">{tags.map((tag) => `#${tag}` )}</div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn  hover:text-green-700"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-green-700"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
