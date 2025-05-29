const hour = new Date().getHours();

if ((hour >= 5 && hour < 7) || (hour >= 17 && hour < 19)) {
  console.log("orange");
} else if (hour >= 7 && hour < 17) {
  console.log("blue");
} else {
  console.log("dark");
}

switch (true) {
  case hour >= 5 && hour < 7:
  case hour >= 17 && hour < 19:
    console.log("orange");
    break;
  case hour >= 7 && hour < 17:
    console.log("blue");
    break;
  default:
    console.log("dark");
}
