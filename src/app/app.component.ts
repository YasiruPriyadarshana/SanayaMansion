import { Component } from '@angular/core';


declare var $:any;

@Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(){
    $('.tree-toggle').click(function () {	$(this).parent().children('ul.tree').toggle(200);
      });
    $(function(){
    $('.tree-toggle').parent().children('ul.tree').toggle(200);
      })
  }
}
