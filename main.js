visualize()
document.querySelector("#submit_button").addEventListener("click", e => (
    visualize()
))

function visualize() {
    const [subdiv, pulse] = collectInputs()
    console.log(`Pulse: ${pulse}, Subdivision: ${subdiv}`)
    createGrid(subdiv, pulse)
}

/** Returns a list with two INTEGER values, where arr[0] is the SUBDIVISION and arr[1] is the PULSE.
 * PULSE is defined as having the larger subdivision between BEAT and PULSE inputs
 * such that PULSE hits on every beat 1 while SUBDIVISION hits in between
 */
function collectInputs() {
    const inputs = document.querySelectorAll("#form input")
    let pulse = parseInt(inputs[0].value)
    let subdiv = parseInt(inputs[1].value)
    if (subdiv > pulse) {
        const temp = beat
        subdiv = pulse
        pulse = temp
    }
    return [subdiv, pulse]
}

/** Creates a WIDTH x HEIGHT grid of div.box elements. Returns VOID */
function createGrid(width, height) {
    const grid = document.querySelector(".grid")
    if (grid.children.length > 0) {
        clearGrid()
    } 
    for (let i = 0; i < height; i += 1) {
        const row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < width; j += 1) {
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerText = j + 1
            row.appendChild(box);
        }
        grid.appendChild(row)
    }
}

/** Clears every row from GRID. Returns VOID */
function clearGrid() {
    // FIXME
    return
}