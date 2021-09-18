import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-leo-chen',
  template: `<h1>Hello GayLord {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloLeoChenComponent  {
  @Input() LeoChen_focker: string;


  isGay: boolean =  true ;
  isGay2: boolean = true;

  
    @Input() IAmGay = true;
  


}