var app = new Vue({
    el: '#app',
    data: {
  
      me: "images/meNow.jpg",
      dog: "images/dogNow.jpg",
      birthday: "images/birthdayNow.jpg",
      car: "images/carNow.jpg",
      meNow: "images/meNow.jpg",
      dogNow: "images/dogNow.jpg",
      birthdayNow: "images/birthdayNow.jpg",
      carNow: "images/carNow.jpg",
      meThen: "images/meThen.jpg",
      dogThen: "images/dogThen.jpg",
      birthdayThen: "images/birthdayThen.jpg",
      carThen: "images/carThen.jpg",
      captionMe: "In my Kitchen",
      captionDog: "With my dog Thor",
      captionBirthday: "Recent Birthday",
      captionCar: "2002 BMW 325i",
      captionMeNow: "In my Kitchen",
      captionDogNow: "With my dog Thor",
      captionBirthdayNow: "Recent Birthday",
      captionCarNow: "2002 BMW 325i",
      captionMeThen: "Five years old",
      captionDogThen: "With my dog Bootsie",
      captionBirthdayThen: "Not too many candles",
      captionCarThen: "1986 Pontiac Fiero",
      meImage: "images/photo0.jpg",
      meGallery: ["photo0", "photo1", "photo2", "photo3"],
      meCaption: "Recent Professional Headshot",
      meCaptionArray: ["Recent Professsional Headshot", "College Photo", "Four Years Old", "Just Getting Started"],
      meCounter: 0,
    },
  
    methods: {
  
      changeImage: function() {
        if (this.meCounter < this.meGallery.length-1) {
          this.meCounter++;
          this.meImage = `images/${this.meGallery[this.meCounter]}.jpg`;
          this.meCaption = this.meCaptionArray[this.meCounter];
        } else {
          this.meCounter = 0;
          this.meImage = `images/${this.meGallery[this.meCounter]}.jpg`;
          this.meCaption = this.meCaptionArray[this.meCounter];
        }
      },
  
      updateImage: function (time, imageId) {
  
        switch (imageId) {
          case "me":
            if(time==="now") {
              this.me = this.meNow;
              this.captionMe = this.captionMeNow;
            } else {
              this.me = this.meThen;
              this.captionMe = this.captionMeThen;
            }
            break;
          case "dog":
            if(time==="now") {
              this.dog = this.dogNow;
              this.captionDog = this.captionDogNow;
            } else {
              this.dog = this.dogThen;
              this.captionDog = this.captionDogThen;
            }
            break;
          case "birthday":
            if (time==="now") {
              this.birthday = this.birthdayNow;
              this.captionBirthday = this.captionBirthdayNow;
            } else {
              this.birthday = this.birthdayThen;
              this.captionBirthday = this.captionBirthdayThen;
            }
            break;
          case "car":
            if (time==="now") {
              this.car = this.carNow;
              this.captionCar = this.captionCarNow;
            } else {
              this.car = this.carThen;
              this.captionCar = this.captionCarThen;
            }
            break;
        }
  
      },
    }
  })