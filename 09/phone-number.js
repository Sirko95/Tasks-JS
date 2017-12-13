function PhoneNumber(phoneNum){
    this.phoneNum = phoneNum;
}

PhoneNumber.prototype.number = function number() {
    let oldMask = this.phoneNum.replace(/[^0-9]/g, '').trim();
    let more = false
    let newMask;
    if(oldMask.length >= 11) {
        if(oldMask[0] != 1) {   
            return null
        } else {
            more = true;
            newMask = oldMask.slice(1);        
        }
    } 
    if(oldMask.length <= 9) {
        return null
    }
    if (more) {
        if(newMask[0] < 2 || newMask[3] < 2) {
            return null            
        } else return newMask
    } 
    if(oldMask[0] < 2 || oldMask[3] < 2) {
        return null
    }
    else return oldMask
}


module.exports = PhoneNumber;