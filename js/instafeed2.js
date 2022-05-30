// Use the CDN or host the script yourself
// https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js
// https://matthewelsom.com/assets/js/libs/instafeed.min.js

var userFeed = new Instafeed({
    get: 'user',
    userId: '47549096246',
    clientId: '924f677fa3854436947ab4372ffa688d',
    accessToken: 'IGQVJXb1Awc2M2TlVOd09NaGlYSUtXZAlVGanVRYXZAHWWRjOGU1R3lEaHBqemt2aVNZATTctejB0ejB4LUs4X1JPWlFPYU5pVEZAnQmk5ei03S0hCUWlDU1RfZAmlFLUZAVUi1NeTJOSWR0bnB5aDZAoaFB2dQZDZD',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 4,
    links: false
  });
  userFeed.run();