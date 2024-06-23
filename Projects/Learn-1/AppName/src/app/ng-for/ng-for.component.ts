import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  product=[
    {prodimg:'https://w7.pngwing.com/pngs/801/224/png-transparent-laptop-emoji-personal-computer-desktop-computers-middle-finger-electronics-rectangle-computer.png', name:'Laptop', id:'101', price:910000},
    {prodimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfnhOg3HR0i-bwSPN0IUhO2h7jj27yC3r1A&s', name:'TV', id:'102', price:14000},
    {prodimg:'https://w7.pngwing.com/pngs/612/12/png-transparent-samsung-galaxy-note-5-iphone-emoji-telephone-symbol-mobile-phone-angle-electronics-gadget.png', name:'Mobile', id:'103', price:17000},
    {prodimg:'https://w7.pngwing.com/pngs/835/418/png-transparent-emoji-clock-watch-emoticon-fitbit-electronics-digital-clock-apple-watch.png', name:'watch', id:'104', price:1500},
    {prodimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECFNQi5fEADBKX1x-vVMJ3Bz0Hbul67wWGQ&s', name:'Cooler', id:'105', price:4000}
  ]
}
