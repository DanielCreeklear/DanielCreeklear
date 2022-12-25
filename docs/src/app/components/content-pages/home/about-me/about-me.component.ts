import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @Input() title: string = "";
  subtitle: string = "I'M DANIEL!";
  text: string = "My age is (currentYear - 2001), that is, I am 21 years old. Besides, I have a flute, or rather... Two flutes. Yes, that was a way of saying that I'm a musician, this is one of my hobbies! I studied music at the Escola Municipal de Música de São Paulo, there I studied flute with my teacher Wilson Rezende. I also play guitar, maybe not as much, but I do. For a while I played in the school's orchestras, with presentations at the Theatro Municipal de São Paulo. I've played in other places in São Paulo with other symphonic groups, like Sala São Paulo, MASP. It was a good time. In my school period I studied Mechatronics, I did some small projects, the most relevant among them was HEXPOD. I've been programming in Python since 2018, I use Pandas, BeautifulSoup, Selenium, Pytest, among other things... Also, I have some projects with C++, such as an emulator where I use OpenGL and SDL2. C++ is a language that has also been following me since 2018. I'm currently venturing into the .NET platform, especially ASP.NET. A curiosity is that my first contact with programming was with the Lua language, using the ComputerCraft mod for Minecraft, in 2015."
  paragraphs = [
    "My age is (currentYear - 2001), that is, I am 21 years old. Besides, I have a flute, or rather... Two flutes. Yes, that was a way of saying that I'm a musician, this is one of my hobbies!",
    "I studied music at the Escola Municipal de Música de São Paulo, there I studied flute with my teacher Wilson Rezende. I also play guitar, maybe not as much, but I do.",
    "For a while I played in the school's orchestras, with presentations at the Theatro Municipal de São Paulo. I've played in other places in São Paulo with other symphonic groups, like Sala São Paulo, MASP. It was a good time.",
    "In my school period I studied Mechatronics, I did some small projects, the most relevant among them was HEXPOD.",
    "I've been programming in Python since 2018, I use Pandas, BeautifulSoup, Selenium, Pytest, among other things...",
    "Also, I have some projects with C++, such as an emulator where I use OpenGL and SDL2. C++ is a language that has also been following me since 2018. I'm currently venturing into the .NET platform, especially ASP.NET.",
    "A curiosity is that my first contact with programming was with the Lua language, using the ComputerCraft mod for Minecraft, in 2015."
  ];
  image: string = "/assets/img/daniel2.jpg";
}
