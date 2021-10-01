function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });

  Object.defineProperty(this, "stopTime", {
    get: function () {
      return stopTime;
    },
    set: function (value) {
      stopTime = value;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (value) {
      running = value;
    },
  });

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch is already running");
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not running");
  this.running = false;
  this.stopTime = new Date();
  const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.stopTime = null;
  this.running = false;
  this.duration = 0;
};
