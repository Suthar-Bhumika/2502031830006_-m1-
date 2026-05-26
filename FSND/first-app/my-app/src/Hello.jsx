import './App.css'

function  Hello() {

    const getName=(yourname)=>{
        return yourname;
    }

    function handleClick(){
        alert("Button was cliked")
    }

    const handleInput =(event)=>{
        console.clear()
        console.log("value: ", event.target.value)
    }

    const handleMouseOver = () => console.log("mouse is over the text")
    
    const handleDoubleClick =()=> console.log("double clicked")

    

    const name="bhumi";
    const name1="bhumika";
    return(
        <>
            <h1>Hello {getName(name)}</h1>
            <h2>Bye {getName(name1)}</h2>
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nulla.</p>
            <button style={{ width: '150px' }}  onClick={handleClick}>click me</button>
            <br/>
            <button style={{ width: '150px' , backgroundColor: 'pink'}}  onClick={()=> alert("Hello from inline function")}>Say Hello</button>
            <br/>
            <input type="text" onChange={handleInput} placeholder='Type something...'/>
            <br/>
        </>
    )
}


export default Hello