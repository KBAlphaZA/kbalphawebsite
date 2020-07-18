import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer footer-dark">
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="footer-logo">
                    <img alt="KB alpha logo"
                         src="../assets/icons8-alpha-100.png">
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3>KB alpha</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="{{data.links.github}}">Partners & Clients</a></li>
                        <li><a href="{{data.links.bulma-apps}}">About Us</a></li>
                        <li><a href="{{data.links.bulma-apps}}">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3>Business</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="{{ data.links.docs-article}}">Support</a></li>
                        <li><a href="{{data.links.blog-article}}">Partners & Clients</a></li>
                        <li><a href="{{data.links.blog-article}}">Integration</a></li>
                        <li><a href="{{data.links.blog-article}}">Admin Portal</a></li>
                        <li><a href="{{data.links.blog-article}}">Submit An Idea</a></li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3>Services</h3>
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
                        <h3>Follow us</h3>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item" href="{{data.links.github}}">
                                    <span class="icon"><i class="fab fa-github"></i></span>
                                </a>
                                <a class="level-item" href="{{data.links.facebook}}">
                                    <span class="icon"><i class="fab fa-facebook"></i></span>
                                </a>
                                <a class="level-item" href="{{data.links.twitter}}">
                                    <span class="icon"><i class="fab fa-twitter"></i></span>
                                </a>
                                <a class="level-item" href="{{data.links.instagram}}">
                                    <span class="icon"><i class="fab fa-instagram"></i></span>
                                </a>
                            </div>
                        </nav>

                        <a href="https://bulma.io" target="_blank">
                            <img src="../assets/icons8-alpha-100.png" alt="Kb alpha logo" width="128" height="24">
                        </a>
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
