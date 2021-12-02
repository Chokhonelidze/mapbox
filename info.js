var target = document.getElementById("map");
function openInfo(id, x, y, text) {
  let div = document.createElement("div");
  div.className = "hero";
  div.id = id;
  div.style.top = y + "px";
  div.style.left = x + "px";
  div.innerHTML = text;
  target.appendChild(div);
}
function destroy(id) {
  let el = document.getElementById(id);
  target.removeChild(el);
}
function info1() {
  setTimeout(
    openInfo,
    1000,
    "info1",
    400,
    400,
    "This is simple demo/animation which is using a Mapbox to animate the pin."
  );
  setTimeout(destroy, 8000, "info1");
}
function info2() {
  setTimeout(openInfo, 10000, "info2", 10, 100, "Push this button to start demo");
  setTimeout(destroy, 18000, "info2");
}
function info3() {
    setTimeout(openInfo, 19000, "info3", 0, -150, "");
    setTimeout(destroy, 29000, "info3");
  }
async function start() {
  await info1();
  await info2();
  //await info3();
}
start();
