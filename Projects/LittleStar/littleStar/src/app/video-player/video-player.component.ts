import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  video: any;

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.videoService.getVideoById(id).subscribe(data => {
        this.video = data;
      });
    } else {
      // Handle the case where the id is null
      console.error('Video ID is null');
    }
  }
}
