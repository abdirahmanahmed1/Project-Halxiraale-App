// This is HTML simple to build our component

{/* <div class="prtdiv">
    <div class="que">
        <span>question info</span>
    </div>
    <div class="answ">
        <p class="ans1"></p>
        <p class="ans2"></p>
    </div>
    <div class="answ2">
        <p class="ans3"></p>
        <p class="ans4"></p>
    </div>
</div> */}

// **************************************************************

// create a component function
function queAndAnsw(que1, answe1, answe2, answe3, answe4) {
    const mainDiv = document.createElement("div")
    const queDiv = document.createElement("div")
    const quepan = document.createElement("span")
    const answDiv = document.createElement("div")
    const ans1p = document.createElement("p")
    const ans2p = document.createElement("p")
    const answ2Div = document.createElement("div")
    const ans3p = document.createElement("p")
    const ans4p = document.createElement("p")

    // connect elements

    mainDiv.appendChild(queDiv);
    queDiv.appendChild(quepan);
    mainDiv.appendChild(answDiv);
    answDiv.appendChild(ans1p);
    answDiv.appendChild(ans2p);
    mainDiv.appendChild(answ2Div);
    answ2Div.appendChild(ans3p);
    answ2Div.appendChild(ans4p);
    entry.appendChild(mainDiv);




    // add content

    // add classes

    // return the parent

}

// connect the entry point

// call API and response the data