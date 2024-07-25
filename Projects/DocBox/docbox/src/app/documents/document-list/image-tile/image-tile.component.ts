import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrl: './image-tile.component.css'
})
export class ImageTileComponent {
  @Input() imageSrc: any;
  // sr :String="";
  // ngOnInit(){
  //   this.sr=this.imageSrc;
  //   alert("lenght---"+this.sr.length);
  //   alert("Substring----"+this.imageSrc.substring(this.imageSrc.lastIndexOf("/")+1, this.imageSrc.length-4));
  // }
}
