const getRealPath = (pathname, desc = false) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }
  let names = pathname.split("/");
  if (desc === false) {
    for (let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  } else {
    for (let i = 0; i < names.length; ++i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  }
  return "/";
};

let links = document.querySelectorAll(".nexmoe-list-item");
let rootRealPath = getRealPath(location.pathname, false);
let activeBtn = 0;
for (let link of links) {
  let linkPath = link.getAttribute("href");
  let linkRealPath = getRealPath(linkPath, false)  // 从后向前截断
  if (linkPath && linkRealPath === rootRealPath) {
    link.className = "active nexmoe-list-item mdui-list-item mdui-ripple";
    activeBtn = 1;
    break;
  }
}
// 打开文章后，保持”返回首页“按钮底色激活
if (activeBtn == 0){
  links[0].className = "active nexmoe-list-item mdui-list-item mdui-ripple";
}

$("table")
  .has("img")
  .addClass("nexmoe-album");

function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}
