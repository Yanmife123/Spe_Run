import "./Not_found.css";
import { Link } from "react-router-dom";
import { NotFoundImg } from "../../assets";

const NotFound = () => {
  return (
    <div className="not_Found_Main">
      <div className="not_found_submain">
        <img src={NotFoundImg} alt="" />
        <div>
          <div>Not_found</div>
          <Link to={"/home"}>Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
