import { Component } from '@angular/core';

import { CarouselItem } from 'src/app/components/interfaces/CarouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  firstItem: CarouselItem = {
    id: 0,
    title: "CHIP-8 Emulator v1.1.0",
    link: "https://github.com/DanielCreeklear/chip8_emulator/releases/tag/v1.1.0",
    image: "https://github.com/DanielCreeklear/chip8_emulator/raw/main/img/chip8_gameover.png"
  }
  items: CarouselItem[] = [
    {
      id: 1,
      title: "Project HEXPOD",
      link: "https://github.com/DanielCreeklear/HEXPOD",
      image: "https://github.com/DanielCreeklear/HEXPOD/raw/master/HEXPOD.png"
    },
    {
      id: 2,
      title: "Concerto para Flauta e Orquestra - Edmundo Villani Cortes",
      link: "https://youtu.be/VSPlf8IVPjE",
      image: "/assets/img/flute.png"
    },
    {
      id: 3,
      title: "Jardim de Hillune",
      link: "https://github.com/DanielCreeklear/JardimDeHillune",
      image: "/assets/img/jardim_hillune_menu.png"
    }
  ]
}
