const button = document.getElementById("ripple_btn");
button.addEventListener("click", (e) => {
  remove_all_effects();
  const click_x = e.clientX;
  const click_y = e.clientY;

  const btn_x = button.offsetLeft;
  const btn_y = button.offsetTop;

  const x_relative_to_btn = click_x - btn_x;
  const y_relative_to_btn = click_y - btn_y;
  console.log(x_relative_to_btn, y_relative_to_btn);
  add_ripple_effect(x_relative_to_btn, y_relative_to_btn);

});

const remove_all_effects = () => {
  const effects = document.querySelectorAll(".effect");
  effects.forEach((e) => {
    e.remove();
  });
};

const add_ripple_effect = (x_relative_to_btn, y_relative_to_btn) => {
  const effectEl = document.createElement("div");
  effectEl.classList.add("effect");
  effectEl.style.top = `${y_relative_to_btn}px`;
  effectEl.style.left = `${x_relative_to_btn}px`;
  button.appendChild(effectEl);
};
