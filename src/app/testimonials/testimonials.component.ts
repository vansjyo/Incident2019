import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

const TESTIMONIALS = [
  {
    'image': 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg',
    'text': 'Lorem ipsum dolor sit amet, eu eos quaestio periculis, vis ea lucilius moderatius.',
    'author': 'John Doe 1'
  }, {
    'image': 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg',
    'text': 'Lorem ipsum dolor sit amet, eu eos quaestio periculis, vis ea lucilius moderatius.',
    'author': 'John Doe 2'
  }, {
    'image': 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg',
    'text': 'Lorem ipsum dolor sit amet, eu eos quaestio periculis, vis ea lucilius moderatius.',
    'author': 'John Doe 3'
  },
];

let currentTestimonial = 0;

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % TESTIMONIALS.length;
  const qouteRotation = 180 + (currentTestimonial * 360)
  setTimeout(() => {
    $('.testimonials-container ul').css('transform',
                             `translateX(-${currentTestimonial * 100}%)`);
    $('.qoute-char i').css('transform', `rotate(${qouteRotation}deg)`);
    $('.qoute-char').css('transform', 'scale(3)');
    setTimeout(() => {
      $('.qoute-char').css('transform', 'scale(1)');
    }, 150);
  }, 0);
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  interval = 8; // secs
  testimonials = TESTIMONIALS;

  ngOnInit() {
    setInterval(nextTestimonial, this.interval * 1000);
  }

}
