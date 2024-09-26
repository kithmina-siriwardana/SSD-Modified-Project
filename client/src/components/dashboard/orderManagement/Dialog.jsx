function Dialog({message, onDialog}) {
    return(
        <div
        style={{
            position: "fixed",
            top: "0",
            left:"0",
            right:"0",
            bottom:"0",
            backgroundColor: "rgba(0,0,0,0.5)"
        }} >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "canter",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                padding: "50px"
 }}>
                     <h3 style={{color:'#111'}}>{message}</h3>
                     <div style={{ display: "flex", alignments: "center"}}>
                        <button onClick={()=>onDialog(true)} class="btn btn-danger rounded-pill" style={{marginRight:"5px"}}>Save Changes</button>
                        <button onClick={()=>onDialog(false)} class="btn btn-success rounded-pill" style={{marginLeft:"5px"}}> Cancel </button>
                        </div>
                        </div>
                        </div>
    );
}

export default Dialog;