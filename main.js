document.querySelector("#submit_button").addEventListener("click", e => (
    visualize()
))

function visualize() {
    const [beat, pulse] = collectInputs()
    console.log(`Beat: ${beat}, Pulse: ${pulse}`)
    createGrid(beat, pulse)
}

/** Returns a list with two INTEGER values, where arr[0] is the BEAT and arr[1] is the PULSE.
 * PULSE is defined as having the larger subdivision between BEAT and PULSE inputs
 * such that PULSE hits on every beat 1 while BEAT hits in between
 */
function collectInputs() {
    const inputs = document.querySelectorAll("#form input")
    let beat = parseInt(inputs[0].value)
    let pulse = parseInt(inputs[1].value)
    if (beat > pulse) {
        const temp = beat
        beat = pulse
        pulse = temp
    }
    return [beat, pulse]
}

/** Creates a WIDTH x HEIGHT grid of div.box elements */
function createGrid(width, height) {
    const grid = document.querySelector(".grid")
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