import './write.css';
import { FaPlus } from 'react-icons/fa';

export default function Write() {
  return (
    <div className="write">
      <div className="writeWrapper">
        <div className="writeTop">
          {/* <img className="writeImg" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" /> */}
          <form className="writeForm">
            <div className="writeFormGroup">

              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
              <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <div className="writeFormGroup sameline">
            <label htmlFor="fileInput">
                <FaPlus className="writeIcon" />
              </label>
            </div>
            <div className="writeFormGroup sameline">
            <button className="writeSubmit">Publish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
