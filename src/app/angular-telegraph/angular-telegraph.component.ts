import { Component, OnInit } from '@angular/core';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-angular-telegraph',
  templateUrl: './angular-telegraph.component.html',
  styleUrls: ['./angular-telegraph.component.css']
})
export class AngularTelegraphComponent implements OnInit {

  System: any;
  message: string;
  morseTranslation: any = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----'
  };
  output = '';

  constructor() { }

  ngOnInit() {
    const c: any = document.getElementById('flashlight');
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height - 50, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
  }

  async sendTelegraph() {
    console.log(this.message);

    const messageUpper = this.message.toUpperCase();

    for (const char of messageUpper) {
      const morseValue = this.morseTranslation[char];
      this.output = char + ' = ' + morseValue;
      await this.transmit(morseValue);
    }
  }

  async transmit(morseValue) {
      // time = 1200 / words per minute
      // 20 words per minute
      // follows a 3 to 1 ratio
      // 60 milliseconds for one dot
      // 180 milliseconds for a dash
      // multiplied by factor of 4 to slow it down here
      const dot = 60 * 4;
      const dash = 180 * 4;
    for (const morse of morseValue) {
      console.log(morseValue);

      if (morse === '.') {
        // dot
        await this.drawFlashlight('yellow', dot);
        // show white light to show when flash is finished
        await this.drawFlashlight('white', 60);
        // await this.drawWhite();
      } else {
        // dash at 3 X 60 or 180
        await this.drawFlashlight('orange', dash);
        // show white light to show when flash is finished
        await this.drawFlashlight('white', 60);
      }
    }
  }

  drawFlashlight(color: String, time: any): Promise<any> {
    return new Promise(resolve => {
      setTimeout(function() {
        const c: any = document.getElementById('flashlight');
        const ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.arc(c.width / 2, c.height - 50, 50, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
        resolve(true);
      }, time);
    });
  }
}
