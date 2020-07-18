import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
  <hr>
    <div class="container">
      <div class="content has-text-centered">
          <h1>Footer section</h1>
      </div>
    </div>
    </footer>
  `,
  styles:[]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
