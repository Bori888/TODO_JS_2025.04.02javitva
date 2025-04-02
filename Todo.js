export default class Todo {
  #text; /*Ezek a privált adattagok*/
  #index;
  constructor(text, pElem, index) {
    this.#text = text;
    this.#index = index;
    this.pElem = pElem;
    this.view();
    this.textElem = document.querySelector(".text:last-child");
    this.OKElem = this.textElem.querySelector(".ready");
    console.log(this.OKElem);
    this.deleteElem = this.textElem.querySelector(".delete:last-child");
    this.OKeventListener();
    this.remEventListener();
  }
  view() {
    let html = 
    `<p class="text" style="color:${this.#text.state?"green":"black"}">${this.#text.todoText}
            <button class="ready">✔</button>
            <button class="delete">🗑</button>
            </p>
            `;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }
  OKeventListener() {
    this.OKElem.addEventListener("click", () => {
      const e = new CustomEvent("done", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
  remEventListener() {
    this.deleteElem.addEventListener("click", () => {
      console.log("delete");
      const e = new CustomEvent("remove", { detail: this.#index });
      window.dispatchEvent(e);
    });
    
  }
}
