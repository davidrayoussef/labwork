var Identity = function(x) {
  this.value = x;
}

Identity.of = function(x) {
  return new Identity(x);
}

Identity.prototype.map = function(f) {
  return Identity.of(f(this.value));
}

Identity.of('bank').map(function(v) {
  return v.toUpperCase();
});


var Maybe = function(x) {
  this.value = x;
}

Maybe.of = function(x) {
  return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
  return (this.value === null) || (this.value === undefined);
}

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.value));
}
Maybe.of("Malkovich Malkovich").map(function(v) {
  return v.match(/a/ig);
});