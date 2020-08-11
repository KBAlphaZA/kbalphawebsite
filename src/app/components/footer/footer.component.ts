import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer footer-light" style="background-color: #2C3E7B">
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="footer-logo">
                    <img alt="KB alpha logo"
                         src="data:image/png;base64,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">
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3 class="subtitle" style="color: white;">KB alpha</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="#">Partners & Clients</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3 style="color: white;">Business</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Partners & Clients</a></li>
                        <li><a href="#">Integration</a></li>
                        <li><a href="#">Admin Portal</a></li>
                        <li><a href="#">Submit An Idea</a></li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3 style="color: white;">Services</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="https://absurd.design/">Mobile development</a></li>
                        <li><a href="#">Web development</a></li>
                        <li><a href="https://github.com/cssninjaStudio/fresh">Industrial software development</a></li>
                        <li><a href="#">Serapis Medical</a><li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3 style="color: white;">Follow us</h3>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item" href="#">
                                    <span class="icon"><i class="fab fa-2x fa-linkedin is-large " style="color: white;"></i></span>
                                </a>
                                <a class="level-item" href="https://www.facebook.com/kbalphasolutions">
                                    <span class="icon"><i class="fab fa-2x fa-facebook" style="color: white;"></i></span>
                                </a>
                                <a class="level-item" href="https://twitter.com/@KBAlphaZA">
                                    <span class="icon"><i class="fab fa-2x fa-twitter" style="color: white;"></i></span>
                                </a>
                                <a class="level-item" href="#">
                                    <span class="icon"><i class="fab fa-2x fa-instagram" style="color: white;"></i></span>
                                </a>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
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
