var app = new Vue({
    el: '#app',
    data: {
  
      footballImage: "images/hobbyImages/football/football0.jpg",
      footballGallery: ["football/football0", "football/football1", "football/football2", "football/football3", "football/football4", "football/football5", "football/football6", "football/football7", "football/football8", "football/football9"],
      footballCaption: "Cal at Michigan State",
      footballCaptionArray: ["Cal at Michigan State", "football1", "football2", "football3", "football4", "football5", "football6", "football7", "football8", "football9"],
      footballCounter: 0,
      dogsImage: "images/hobbyImages/dogs/dog0.jpg",
      dogsGallery: ["dogs/dog0", "dogs/dog1", "dogs/dog2", "dogs/dog3", "dogs/dog4"],
      dogsCaption: "Bootsie",
      dogsCaptionArray: ["Bootise", "Rascal I", "Lady", "Rascal II", "Thor"],
      dogsCounter: 0,

    },
  
    methods: {
  
      changeImage: function(image, gallery, caption, captionArray, counter) {
        if (this[counter] < gallery.length-1) {
          this[counter]++;
          this[image] = `images/hobbyImages/${gallery[this[counter]]}.jpg`;
          this[caption] = captionArray[this[counter]];
        } else {
          this[counter] = 0;
          this[image] = `images/hobbyImages/${gallery[this[counter]]}.jpg`;
          this[caption] = captionArray[this[counter]];
        }
      },
  
    }
  })