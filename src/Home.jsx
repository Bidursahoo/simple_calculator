import React , {useState} from "react";

export default function Home() {
    const [string , setString] = useState("");
    const [operator , setOperator] = useState("");
    const [num , setNum] =useState([]);
    
    function updateString(event){
        let temp = event.target.value;
        if(temp === "+" || temp === "-" || temp === "*" || temp === "/"){
            setNum([...num , string]);
            setOperator(temp);
            setString("");
        }else{
            let a = string.concat(temp);
            setString(a);
        }
    }
    function allClear(){
        setString("");
        setNum([]);
        setOperator("");
    }
    function calculate(){
        if(string.length === 0){
            alert("Please enter some value to calculate");
            return;
        }else if(operator === ""){
            alert("please select correct operator");
            return;
        }
        try {
            let aa = parseInt(num[0]);
            let bb = parseInt(string);
            let res =0;
            switch (operator) {
                case "+":
                    res = aa+bb;
                    setString(res);
                    break;
                case "-":
                    res = aa-bb;
                    setString(res);
                    break;
                case "*":
                    res = aa*bb;
                    setString(res);
                    break;
                case "/":
                    
                    res = aa/bb;
                    if(bb === 0){
                        setString("NaN");
                    }
                    else{
                        setString(res);
                    }
                    break;
            }
        } catch (error) {
            // alert()
            // allClear();
            setString("Some Error occoured")
        }

    }
  return (
    <div class="calculator card container">
      <input
        type="text"
        class="calculator-screen z-depth-1"
        value={string}
        disabled
      />
        
      <div class="calculator-keys">
        <button type="button" class="operator btn btn-info" value="+" onClick={updateString}>
          +
        </button>
        <button type="button" class="operator btn btn-info" value="-" onClick={updateString}>
          -
        </button>
        <button type="button" class="operator btn btn-info" value="*" onClick={updateString}>
          &times;
        </button>
        <button type="button" class="operator btn btn-info" value="/" onClick={updateString}>
          &divide;
        </button>

        <button type="button" value="7" class="btn btn-light waves-effect" onClick={updateString}>
          7
        </button>
        <button type="button" value="8" class="btn btn-light waves-effect" onClick={updateString}>
          8
        </button>
        <button type="button" value="9" class="btn btn-light waves-effect" onClick={updateString}>
          9
        </button>

        <button type="button" value="4" class="btn btn-light waves-effect" onClick={updateString}>
          4
        </button>
        <button type="button" value="5" class="btn btn-light waves-effect" onClick={updateString}>
          5
        </button>
        <button type="button" value="6" class="btn btn-light waves-effect" onClick={updateString}>
          6
        </button>

        <button type="button" value="1" class="btn btn-light waves-effect" onClick={updateString}>
          1
        </button>
        <button type="button" value="2" class="btn btn-light waves-effect" onClick={updateString}>
          2
        </button>
        <button type="button" value="3" class="btn btn-light waves-effect" onClick={updateString}>
          3
        </button>

        <button type="button" value="0" class="btn btn-light waves-effect" onClick={updateString}>
          0
        </button>
        
        <button
          type="button"
          class="all-clear function btn btn-danger btn-sm"
          value="all-clear"
          onClick={allClear}
        >
          AC
        </button>
        <button
          type="button"
          class="equal-sign operator btn btn-default"
          value="="
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}
