class MyButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const button = `
    
    <button>${this.innerHTML}</button>
    <style>
      button {
        outline: none;
        border: none;
        padding: 20px;
        background: #f80000;
        border-radius: 0.25rem;
      }
    </style>
    `;
    this.innerHTML = button;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }

  disconnectedCallback() {}
}

customElements.define("my-button", MyButton);
