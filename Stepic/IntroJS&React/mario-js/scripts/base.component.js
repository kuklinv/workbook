import { PhiramidComponent } from "./phiramid.component";

export class BaseComponent {
  constructor({ element }) {
    this.element = element;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <div class="row">
        <div class="col">
            <h2>Introduction to Java Script and React <span class="badge badge-secondary">STEPIC</span></h2>
        </div>
        <div class="col">
            <h2>Behold this wonderful pyramid</h2>
        </div>
    </div>
    // <div class="row">
    //       <div class="col"></div>
    //     <div class="col">
    //       <p><button type="button" class="btn btn-secondary btn-sm">Small button</button></p>
    //       <p><button type="button" class="btn btn-secondary btn-sm">Small button</button></p>
    //     </div>
    // </div>
    // <div class="row">
    //      <div class="col"></div>
    // </div>
        `;
  }
}
