import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrl: './image-tile.component.css'
})
export class ImageTileComponent {
  @Input() imageSrc: any;
  @Input() imageName: any;
  // sr :String="";
  // ngOnInit(){
  //   this.sr=this.imageSrc;
  //   alert("lenght---"+this.sr.length);
  //   alert("Substring----"+this.imageSrc.substring(this.imageSrc.lastIndexOf("/")+1, this.imageSrc.length-4));
  // }
  ngOnInit(){
    // alert("Data from Image tile----"+this.imageSrc)
  }

  getFormattedFileName(name: string | null): string {
    if (!name) {
      return '';
    }
  
    if (name.length <= 20) {
      name = name.substring(0, name.length - 4);
      return name;
    }
  
    // Get the first 3 and last 3 characters and concatenate them with '...'
    name = name.substring(0, name.length - 4);
    const start = name.substring(0, 7);
    const end = name.substring(name.length - 7);
    return `${start}......${end}`;
  }
  
}
