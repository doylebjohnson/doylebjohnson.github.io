var app = new Vue({
    el: '#app',
    data: {
  
      footballImage: "images/hobbyImages/football/football0.jpg",
      footballGallery: ["football/football0", "football/football1", "football/football2", "football/football3", "football/football4", "football/football5", "football/football6", "football/football7"],
      footballCaption: "Cal at Michigan State (46-22), Sep 14, 2002",
      footballCaptionArray: ["Cal at Michigan State (46-22), Sep 14, 2002", "Cal at Tennessee (18-35), Sep 2, 2006", "Cal home game", "Cal home game", "Cal home game", "Cal at Texas (45-44), Sep 19, 2015", "Cal at North Carolina (35-30), Sep 2, 2017", "Cal at Ole Miss (28-20), Sep 21, 2019 "],
      footballCounter: 0,
      dogsImage: "images/hobbyImages/dogs/dog0.jpg",
      dogsGallery: ["dogs/dog0", "dogs/dog1", "dogs/dog2", "dogs/dog3", "dogs/dog4"],
      dogsCaption: "Bootsie",
      dogsCaptionArray: ["Bootise", "Rascal I", "Lady", "Rascal II", "Thor"],
      dogsCounter: 0,
      carsImage: "images/hobbyImages/cars/car0.jpg",
      carsGallery: ["cars/car0", "cars/car1", "cars/car2", "cars/car3","cars/car4","cars/car5", "cars/car6", "cars/car7", "cars/car8"],
      carsCaption: "Working on a Car",
      carsCaptionArray: ["Working on a Car", "AMC Matador", "Fiat 128", "Oldsmobile Starfire", "Pontiac Fiero", "Geo Storm", "Black Ford Explorer", "BMW 325i", "Blue Ford Explorer"],
      carsCounter: 0,
      projectsImage: "images/hobbyImages/projects/project0.jpg",
      projectsGallery: ["projects/project0", "projects/project1", "projects/project2", "projects/project3", "projects/project4"],
      projectsCaption: "Very old controller built using TTL logic",
      projectsCaptionArray: ["Very old controller built using TTL logic", "Automated Plant Watering System built using Mikromedia PIC24EP board", "Close up view of Mikromedia PIC24EP board", "Digilent BASYS 3 board", "Automated Color Counting System using BASYS 3 board"],
      projectsCounter: 0,
      hamRadioImage: "images/hobbyImages/hamRadio/hamRadio0.jpg",
      hamRadioGallery: ["hamRadio/hamRadio0", "hamRadio/hamRadio1", "hamRadio/hamRadio2"],
      hamRadioCaption: "My first radio: Hallicrafters SR-150 tube transceiver",
      hamRadioCaptionArray: ["My first radio: Hallicrafters SR-150 tube transceiver", "My current Yaesu FT-857 transceiver", "My Zero-five Ground Plane Antenna"],
      hamRadioCounter: 0,
    },
  
    methods: {
  
      // Single function is used to change images for all galleries; trick is to receive
      // arguments of image, gallery,etc. for each gallery type (football, dogs, cars, etc.)
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