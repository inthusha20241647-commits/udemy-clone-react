import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">
        <div className="course-card">
          <img src={c1} alt="image1"></img>
          <h3>2026 Python Datavisualization Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c2} alt="image2"></img>
          <h3>Basic to Advanced programming with EMC</h3>
          <p>Col Steele</p>
          <p>3.9 ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c3} alt="image3"></img>
          <h3>Web Development Bootcamp 2026</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c4} alt="image4"></img>
          <h3>Master UI/UX with Figma 2026</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Recommended;