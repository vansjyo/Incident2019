import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as materialize from 'materialize-css';

const CATEGORIES = [
  {
    'name': 'Beach Events',
    'icon': '<i class="material-icons iblack-text">beach_access</i>',
    'hash': 'beach'
  },
  {
    'name': 'Pro Shows',
    'icon': '<i class="material-icons iblack-text">adjust</i>',
    'hash': 'pro_shows'
  },
  {
    'name': 'Music',
    'icon': '<i class="material-icons iblack-text">music_note</i>',
    'hash': 'music'
  },
  {
    'name': 'Dance',
    'icon': '<i class="material-icons iblack-text">group</i>',
    'hash': 'dance'
  }
];

const EVENTS = {
  'beach' : [
    {
      'name': 'Kite Festival',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'kite_fest_1',
      'desc': 'Festival of Kites'
    },
    {
      'name': 'Kite Festival 1',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'kite_fest_2',
      'desc': 'Festival of Kites 1'
    }
  ],
  'pro_shows': [
    {
      'name': 'Pro Show 1',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'pro_show_1',
      'desc': 'Festival of Kites'
    },
    {
      'name': 'Pro Show 2',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'pro_show_2',
      'desc': 'Festival of Kites 1'
    }
  ],
  'music': [
    {
      'name': 'Music 1',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'music_1',
      'desc': 'Festival of Kites'
    },
    {
      'name': 'Music 2',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'music_2',
      'desc': 'Festival of Kites 1'
    }
  ],
  'dance': [
    {
      'name': 'Dance 1',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'dance_1',
      'desc': 'Festival of Kites'
    },
    {
      'name': 'Dance 2',
      'icon': '<i class="material-icons iblack-text">adjust</i>',
      'hash': 'dance_2',
      'desc': 'Festival of Kites 1'
    }
  ]
};

let instance;

function getCategoryNameFromHash(hash) {
  for (const item of CATEGORIES) {
    if (item.hash === hash) {
      return item.name;
    }
  }
}

function handleHashChange() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  const hash = location.hash.replace('#', '');
  if (hash === '') {
    instance.list = CATEGORIES;
    $('.page-title').text('EVENTS');
    $('.back-link').css('opacity', '0');
  } else {
    instance.list = EVENTS[hash];
    $('.page-title').text(getCategoryNameFromHash(hash).toUpperCase());
    $('.back-link').css('opacity', '1');
  }
}

window.onhashchange = handleHashChange;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  constructor() { }

  categories = CATEGORIES;
  events = EVENTS;
  eventKeys = Object.keys(EVENTS);
  list = undefined;
  modalTitle = 'title';
  modalText = 'text';

  listIsCategory () {
    return this.list === CATEGORIES;
  }

  setModalTitleText(event) {
    console.log(event.target);
    this.modalTitle = $(event.target).attr('data-title');
    this.modalText = $(event.target).attr('data-text');
  }

  ngOnInit() {
    instance = this;
    instance.list = undefined;
    $(document).ready(function () {
      const elems = document.querySelectorAll('.modal');
      materialize.Modal.init(elems, {});
      $('a[data-target="modal"]').click(this.setModalTitleText);
    });
    handleHashChange();
    if (instance.list === undefined) {
      instance.list = CATEGORIES;
    }
  }

}
