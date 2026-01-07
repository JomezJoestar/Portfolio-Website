import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'my-portfolio';

  @ViewChild('globalAudio') audioPlayer!: ElementRef<HTMLAudioElement>;
  isMuted: boolean = true;

  ngAfterViewInit() {
    const audio = this.audioPlayer.nativeElement;
    // This starts the "silent" playback immediately on load
    audio.play().catch(() => {
      console.log("Browser blocked initial play. Waiting for user to unmute.");
    });
  }

  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    if (this.isMuted) {
      audio.muted = false;
      audio.play().catch(err => console.log("Playback interaction required"));
      this.isMuted = false;
    } else {
      audio.muted = true;
      audio.pause(); 
      this.isMuted = true;
    }
  }
}
