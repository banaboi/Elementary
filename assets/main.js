let scrollPercent;
let scrollListener = () => {
  let scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
  let scrollBottom = (document.documentElement["scrollHeight"] ||
    document.body["scrollHeight"]) - document.documentElement.clientHeight;
  scrollPercent = scrollTop / scrollBottom * 100 + "%";
  let progress = document.getElementById("_progress");
  progress && progress.style.setProperty("--scroll", scrollPercent);
};
document.addEventListener("scroll", scrollListener, { passive: true });
