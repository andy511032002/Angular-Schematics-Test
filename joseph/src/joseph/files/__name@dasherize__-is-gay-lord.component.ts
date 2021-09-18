import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-<%= dasherize(name) %>',
  template: `<h1>Hello GayLord {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Hello<%= classify(name) %>Component  {
  @Input() <%=addExclamation(name)%>: string;


  isGay: boolean = <% if (isGay) {  %> true<% } else { %> false <% } %>;
  isGay2: boolean = <%=isGay%>;

  <% if (isGay) {  %>
    @Input() IAmGay = true;
  <% } %>


}