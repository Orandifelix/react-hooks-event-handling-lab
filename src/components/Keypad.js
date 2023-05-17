// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
    event.preventDefault();
    console.log("Entering password...");
    }
    return (
      <div>
        <form>
          <input type="password" name="password" placeholder="Enter pin..." required onChange={handleChange}/>
          <button>Enter</button>
        </form>
      </div>
    );
}

export default Keypad;