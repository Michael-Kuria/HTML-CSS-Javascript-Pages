document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const image = document.querySelector(".image");

  container.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const containerRect = container.getBoundingClientRect();
    const containerX = containerRect.left;
    const containerY = containerRect.top;

    const imageX = mouseX - containerX - image.width / 2;
    const imageY = mouseY - containerY - image.height / 2;

    image.style.transform = `translate(${imageX}px, ${imageY}px)`;
  });
});
