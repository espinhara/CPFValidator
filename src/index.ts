
const input = document.getElementById('input') as HTMLInputElement
import Utils from './utils'
input.addEventListener("input", (event) => {
    const ipt = event.currentTarget as HTMLInputElement
    input.maxLength = "000.000.000-00".length
    
    if (ipt.value != null) {
        (ipt.style.color = "red")
    } else {
        (ipt.style.color = "")
    }
    if (!Utils.cpfIsValid(ipt.value)) {
        (ipt.style.color = "red")
    }else{
        ipt.style.color = "" 
    }
    if (ipt.value.replace(".", "").length > "00".length && ipt.value.length < "000.".length) {
        ipt.value = ipt.value + "."
    }
    if (ipt.value.length <= "000".length ){
        ipt.value = ipt.value.replace(".", "")
    }
    if (ipt.value.length <= "000.000.000-".length) {
        ipt.value = ipt.value.replace("-", "")
    }
    if (ipt.value.length > "000.00".length && ipt.value.length < "000.000.".length) {
        ipt.value = ipt.value + "."
    }
    if (ipt.value.length > "000.000.00".length && ipt.value.length < "000.000.000-".length) {
        ipt.value = ipt.value + "-"
    }
})
