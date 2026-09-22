import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.jpg";
import c9 from "../images/c9.jpg";
import c10 from "../images/c10.jpg";
import c11 from "../images/c11.jpg";
import c12 from "../images/c12.jpg";

function Popular() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>
      <div className="popular__container">
        <div className="course-card">
          <img src={c5}></img>
          <h3>2026 Python Datavisualization Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c6}></img>
          <h3>Basic to Advanced programming with EMC</h3>
          <p>Col Steele</p>
          <p>3.9 ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c7}></img>
          <h3>Web Development Bootcamp 2026</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c8}></img>
          <h3>Master UI/UX with Figma 2026</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c9}></img>
          <h3>Basic to Advanced programming with EMC</h3>
          <p>Col Steele</p>
          <p>3.9 ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c10}></img>
          <h3>Web Development Bootcamp 2026</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c11}></img>
          <h3>Master UI/UX with Figma 2026</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={c12}></img>
          <h3>2026 Python Datavisualization Masterclass</h3>
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
export default Popular;