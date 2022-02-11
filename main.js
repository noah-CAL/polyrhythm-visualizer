document.querySelector('#submit_button').addEventListener("click", e => (
    visualize()
))

function visualize() {
    const [beat, pulse] = collectInputs()
    console.log(`Beat: ${beat}, Pulse: ${pulse}`)
}

/** Returns a list with two INTEGER values, where arr[0] is the BEAT and arr[1] is the PULSE.
 * PULSE is defined as having the larger subdivision between BEAT and PULSE inputs
 * such that PULSE hits on every beat 1 while BEAT hits in between
 */
function collectInputs() {
    const inputs = document.querySelectorAll('#form input')
    const beat = parseInt(inputs[0].value)
    const pulse = parseInt(inputs[1].value)
    if (beat > pulse) {
        const temp = beat
        beat = pulse
        pulse = temp
    }
    return [beat, pulse]
}
