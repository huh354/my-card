import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;
let MyCard = class MyCard extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'My app';
    }
    render() {
        return html `
      <main>
      <div class = "wrapper">
      <div class = "card">
      <div class = "header">
      <head>
        <h1>Welcome to my card</h1>
        </div>
      </head>
        <img src="https://cdn.creatureandcoagency.com/uploads/2021/03/FrogLifecycle_Body_8.png">
       
        <div class = "paragraph">
        <p>This is a picture of a frog that I fond on the internet. It looks really cool and I thought it would be nice to share.</p>
        </div>
      
      <div class="btn-wrapper">
       <a href="https://hax.psu.edu">
         <button>Details</button> </a> </div>
        </div>
        </div>
      </div>
      </main>

      
    `;
    }
};
MyCard.styles = css `
  .color {
    background-color: red;
  }
  body {
    background-color: lightgreen;
    
  }
  .card { 
    border-style: solid;
    border-width: 3px;
    border-color: green;
    border-radius: 10px;
    width: 450px;
  }
  img {
    margin: 25px;
    width: 400px;
    height: auto;
  }
  .btn-wrapper {
    margin: 24px;
  }
  .btn-wrapper button {
    font-size: 24px;
    color: green;
    background-color: white;
  }
  .btn-wrapper button:hover {
    color: white;
    background-color: green;
  }
  .header {
    font-size: 20px;
    margin: 25px;
  }
  .paragraph {
    font-size: 20px;
    margin: 25px;
  }
  @media screen and (max-width: 800px) {  
    div.Frog {
      display: none;
    }
    div.header{
      display: none;
    }
    div.paragraph{
      display: none;
    }
  
  }
  div, span {
    display: inline-block;
  }
  `;
__decorate([
    property({ type: String })
], MyCard.prototype, "header", void 0);
MyCard = __decorate([
    customElement('my-card')
], MyCard);
export { MyCard };
//# sourceMappingURL=my-card.js.map