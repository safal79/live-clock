let countrySelect = document.getElementById("countrySelect");

let data = {
  india: {
    name: "India 🇮🇳",
    city: "New Delhi",
    lat: "28.6139",
    long: "77.2090",
    offset: 5.5,
    sunrise: "06:00 AM",
    sunset: "06:45 PM",
  },

  france: {
    name: "France 🇫🇷",
    city: "Paris",
    lat: "48.8566",
    long: "2.3522",
    offset: 2,
  },

  japan: {
    name: "Japan 🇯🇵",
    city: "Tokyo",
    lat: "35.6762",
    long: "139.6503",
    offset: 9,
  },

  nepal: {
    name: "Nepal 🇳🇵",
    city: "Kathmandu",
    lat: "27.7172",
    long: "85.3240",
    offset: 5.75,
  },

  dubai: {
    name: "Dubai 🇦🇪",
    city: "Dubai",
    lat: "25.2048",
    long: "55.2708",
    offset: 4,
  },
};

let currentCountry = "india";
let bgIndex = 0;

// change country
function changeCountry() {
  currentCountry = countrySelect.value;
  updateInfo();
  updateClock();
  changeBackground();
}

// info update
function updateInfo() {
  let c = data[currentCountry];

  document.getElementById("countryName").innerText = c.name;
  document.getElementById("cityName").innerText = c.city;

  document.getElementById("coords").innerText =
    "Lat: " + c.lat + " | Long: " + c.long;
}

// live clock
function updateClock() {
  let c = data[currentCountry];

  let now = new Date();

  let utc = now.getTime() + now.getTimezoneOffset() * 60000;

  let cityTime = new Date(utc + 3600000 * c.offset);

  let h = cityTime.getHours();
  let m = cityTime.getMinutes();
  let s = cityTime.getSeconds();

  let hh = h < 10 ? "0" + h : h;
  let mm = m < 10 ? "0" + m : m;
  let ss = s < 10 ? "0" + s : s;

  document.getElementById("time").innerText = hh + ":" + mm + ":" + ss;

  // status
  let status = "";

  if (h >= 5 && h < 12) {
    status = "🌅 Morning";
  } else if (h >= 12 && h < 17) {
    status = "☀️ Afternoon";
  } else if (h >= 17 && h < 20) {
    status = "🌇 Evening";
  } else {
    status = "🌙 Night";
  }

  document.getElementById("status").innerText = status;
}

// dynamic background by time
function changeBackground() {
  let c = data[currentCountry];

  let now = new Date();

  let utc = now.getTime() + now.getTimezoneOffset() * 60000;

  let cityTime = new Date(utc + 3600000 * c.offset);

  let h = cityTime.getHours();

  let img = "";

  if (currentCountry == "india") {
    if (h >= 5 && h < 12) {
      img = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da";
    } else if (h >= 12 && h < 17) {
      img = "https://images.unsplash.com/photo-1477587458883-47145ed94245";
    } else if (h >= 17 && h < 20) {
      img = "https://images.unsplash.com/photo-1587474260584-136574528ed5";
    } else {
      img = "https://images.unsplash.com/photo-1500534623283-312aade485b7";
    }
  }

  if (currentCountry == "france") {
    if (h >= 5 && h < 12) {
      img = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34";
    } else if (h >= 12 && h < 17) {
      img = "https://images.unsplash.com/photo-1499856871958-5b9627545d1a";
    } else {
      img = "https://images.unsplash.com/photo-1431274172761-fca41d930114";
    }
  }

  if (currentCountry == "japan") {
    img = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf";
  }

  if (currentCountry == "nepal") {
    img = "https://images.unsplash.com/photo-1605648916319-cf082f752c52";
  }

  if (currentCountry == "dubai") {
    img = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c";
  }

  document.body.style.backgroundImage = "url('" + img + "')";
}

// intervals
setInterval(updateClock, 1000);
setInterval(changeBackground, 5000);

// first load
updateInfo();
updateClock();
changeBackground();
