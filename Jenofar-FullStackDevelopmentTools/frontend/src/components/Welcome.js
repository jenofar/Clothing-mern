import "../components/style.css";
import { useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            You can have anuthing you want in life if you dress for it
          </h3>
          <p>
          Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.
          </p>
          <button 
            onClick={() => {
              navigate("/product");
            }}
            className="btns"
          >
            shop now
          </button>
        </div>
      </section>
    </>
  );
}
