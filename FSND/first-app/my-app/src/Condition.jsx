import './App.css'

function Condition(){

    const isLoggedIn = true;
    let message;
   
    // with if else
    if(isLoggedIn){
        message = <h1>Welcome User!</h1>
    }else{
        message = <h2>please Login</h2>
    }
    return <div>{message}</div>

    // with turnary
    return(
        <div>
            {isLoggedIn ? (<h1>Welcome user!</h1>): (<h2>Please Login</h2>)}
        </div>
    )



const isVisible = true;
return(
    <div>
    <h1 className={isVisible ? "visible" : "unvisible"}>Conditional Rendering</h1>
<p>Lorem ipsum dolor sit amet.</p>
</div>
)


}

export default Condition