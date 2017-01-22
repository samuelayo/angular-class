//import the angular component from angular core
import { Component } from '@angular/core';

@Component({
	// define the selector for your app
  selector: 'app-root',
  //pass in the template url
  templateUrl: './app.component.html',
  //pass in the css of the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //set a property that holds a random color for our style.
  randomcolor=this.getRandomColor();
  //declare the fontsize and background color properties
  public font_size="12px";
  public background_color="grey ";

  //declare a variable to hold class name:
  public my_Class = 'style1';

  isClass1Visible: false;
  isClass2Visible: false;

  //function to get random colors
  public getRandomColor(){
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++){
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }

 //function to set a new random collor
 setColor(){
 	this.randomcolor=this.getRandomColor();
 }

 //function to change the class from style1 to style 2 when clicked
 toggle_class(){
 	if(this.my_Class=="style1"){
 		this.my_Class='style2';
 	}else{
 		this.my_Class='style1';
 	}
 }

	

}
