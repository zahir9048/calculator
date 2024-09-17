// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="calculator">
        <div className="calculator__display">
          <h2 className="result">12</h2>
        </div>
        <div className="calculator__buttons">
          <div className="calc_num_buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>=</button>
          </div>
          <div className="calc_action_buttons">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
          </div>
        </div>
        
      </div>
      
    </>
  );
}
