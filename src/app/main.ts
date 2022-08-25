import "./styles.css";

class PokemonHeader extends HTMLElement {
    private heading: string = "heading";
    
    constructor() {
        super();
    }
    
    async connectedCallback() {
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div>
            <h1>${this.heading}</h1>
        </div>
        `;
    }
}

customElements.define("pokemon-header", PokemonHeader);