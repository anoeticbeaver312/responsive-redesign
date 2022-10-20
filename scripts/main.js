const buttonMenuLinks = document.querySelectorAll(".button-menu a")

const handleButtonMenuClick = (event) => {
  for (let link of buttonMenuLinks) {
    link.classList.remove("highlighted")
  }
  event.target.classList.add("highlighted")
}

for (let link of buttonMenuLinks) {
  link.addEventListener("click", handleButtonMenuClick)
}