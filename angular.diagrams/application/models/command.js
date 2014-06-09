function Command(caller, callee, operator, message) {
    this.caller = caller;
    this.callee = callee;
    this.message = message;
    this.operator = operator;
    this.toString= function() {

        return "from " + this.caller + " to " + this.callee + " with " + this.operator + " what: " + this.message;
    }
}