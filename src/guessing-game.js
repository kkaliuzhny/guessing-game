class GuessingGame {
    constructor() {}
    setRange(minimum, maximum) {this.min = minimum; this.max = maximum;}
    guess() 
    {
        this.setRange( this.min,  this.max);
        return Math.round(( this.max +  this.min)/2);
    }
    lower() 
    {   
        this.max = Math.round(( this.max +  this.min)/2);
        this.setRange( this.min,  this.max);
    }
    greater() 
    {
        this.min = Math.round(( this.max +  this.min)/2);
        this.setRange( this.min,  this.max);
    }
}
module.exports = GuessingGame

