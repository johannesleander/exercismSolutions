var at = (hrs, min = 0) => {
  if (min < 0) {
    hrs -= Math.ceil(-min / 60);
    min = 60 - Math.ceil(-min % 60);
  }
  if (hrs < 0) {
    hrs = 24 - Math.ceil(-hrs % 24);
  }
  while (min >= 60) {
    hrs++;
    min -= 60;
  }
  while (hrs >= 24) {
    hrs -= 24;
  }
  return ((hrs >= 10 ? hrs : "0" + hrs.toString().slice(-2)) + ":" +
          (min >= 10 ? min : "0" + min.toString().slice(-2))
         );
};

String.prototype.plus = function (n = 0) {
  var time = this.split(':');
  var hrs = +(time[0]);
  var min = +(time[1]);
  while (n > 60) {
    hrs++;
    n -= 60;
  }
  min += n;
  while (min > 60) {
    hrs++;
    min -= 60;
  }
  if (hrs >= 24) {
    hrs = hrs-24;
  }
  return at(hrs,min);
};

String.prototype.minus = function (n) {
  var time = this.split(':');
	var hrs = +(time[0]);
	var min = +(time[1]);
	while (n > 60) {
		hrs--;
		n -= 60;
	}
	min -= n;
	while (min < 0) {
		hrs--;
		min += 60;
	}
	if (hrs < 0) {
		hrs = 24 + hrs;
	}
	return at(hrs,min);
};

String.prototype.equals = function (other) {
	var thisTime = this.split(':');
	var thisHrs = +(thisTime[0]);
	var thisMin = +(thisTime[1]);
	var otherTime = other.split(':');
	var otherHrs = +(otherTime[0]);
	var otherMin = +(otherTime[1]);
	return thisHrs === otherHrs && thisMin === otherMin;
};


module.exports = {'at' : at};
