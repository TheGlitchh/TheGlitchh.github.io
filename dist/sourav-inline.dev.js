"use strict";

$(document).ready(function () {
  var checkscroll = window.scrollY;

  if (checkscroll == 0) {//  $(".container").hide();
  }

  $("#sectionToNavigate").hide(); // $(".closeclass, .close-container, .close-btn").hide();

  fetch('./blog.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    var blogContainer = document.getElementById('blog-container');
    data.forEach(function (post) {
      var article = document.createElement('article');
      article.classList.add('blog-post');
      article.dataset.fullContent = encodeURIComponent(post.full); // Store full content

      article.dataset.title = post.title; // Store title

      article.dataset.date = post.date; // Store date

      article.innerHTML = "\n               <header>\n                   <center><h2 class=\"post-title\">".concat(post.title, "</h2></center>\n                   <p class=\"post-meta\">Posted on ").concat(post.date, " by ").concat(post.author, "</p>\n               </header>\n               <div class=\"post-content\">\n                   <p style=\"color:#a89984\">").concat(post.content, "</p>\n               </div>\n               <footer>\n                   <p class=\"post-tags\">Tags: ").concat(post.tags.map(function (tag) {
        return "<a href=\"#\" style=\"color:#666\">".concat(tag, "</a>");
      }).join(', '), "</p>\n               </footer>\n           ");
      blogContainer.appendChild(article);
    });

    function applyStaggeredAnimation() {
      var titles = document.querySelectorAll('.post-title');
      titles.forEach(function (title) {
        var words = title.textContent.split(' ');
        title.innerHTML = words.map(function (word, index) {
          return "<span style=\"display:inline-block;\">".concat(word, "</span>");
        }).join(' ');
        var spans = title.querySelectorAll('span');
        spans.forEach(function (span, i) {
          span.style.animation = "revolveScale 0.4s forwards";
          span.style.animationDelay = "".concat(i * 0.1, "s"); // Stagger the animation delay based on the word index
        });
      });
    } // Call the function after adding all articles


    applyStaggeredAnimation(); // Add event listener to handle clicks on any blog post

    blogContainer.addEventListener('click', function (event) {
      if (event.target.closest('.blog-post')) {
        var post = event.target.closest('.blog-post');
        var fullContent = decodeURIComponent(post.dataset.fullContent);
        var title = post.dataset.title;
        var date = post.dataset.date; // Show and populate the first .boxclassinfinite div with the full content

        var boxclassinfinite = document.querySelector('.boxclassinfinite');

        if (boxclassinfinite) {
          boxclassinfinite.innerHTML = "\n                   <div class=\"close-container close-btn\">\n                   <div class=\"leftright\"></div>\n                   <div class=\"rightleft\"></div>\n                   <label class=\"close\">close</label>\n               </div>\n                       <header>\n                           <h1 style=\"text-align: center;\">".concat(title, "</h1>\n                           <p style=\"text-align: center; font-style: italic;\">Posted on ").concat(date, "</p>\n                       </header>\n                       <div class=\"full-content\">\n                           <p>").concat(fullContent, "</p>\n                       </div>\n                   ");
          boxclassinfinite.removeAttribute('hidden');
          boxclassinfinite.classList.remove('hide-animation'); // Optional: Close the .boxclassinfinite div when clicking outside of it

          document.addEventListener('click', function (e) {
            if (!boxclassinfinite.contains(e.target) && !e.target.closest('.blog-post')) {
              boxclassinfinite.setAttribute('hidden', true);
            }
          });
          document.addEventListener('click', function (event) {
            var closeButton = event.target.closest('.close-container');
            var boxclassinfinite = document.querySelector('.boxclassinfinite');

            if (closeButton && boxclassinfinite) {
              boxclassinfinite.classList.add('hide-animation');
              boxclassinfinite.addEventListener('animationend', function () {
                boxclassinfinite.setAttribute('hidden', true);
              }, {
                once: true
              });
            }
          });
        }
      }
    });
  })["catch"](function (error) {
    return console.error('Error loading blog posts:', error);
  });
});

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

  window.requestAnimationFrame = requestAnimationFrame;
})(); // Terrain stuff.


var background = document.getElementById("bgCanvas"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = document.body.offsetHeight;
height < 800 ? height = 800 : height;
background.width = width;
background.height = height;

function Terrain(options) {
  options = options || {};
  this.terrain = document.createElement("canvas");
  this.terCtx = this.terrain.getContext("2d");
  this.scrollDelay = options.scrollDelay || 90;
  this.lastScroll = new Date().getTime();
  this.terrain.width = width;
  this.terrain.height = height;
  this.fillStyle = options.fillStyle || "#3c3836";
  this.mHeight = options.mHeight || height; // generate

  this.points = [];
  var displacement = options.displacement || 140,
      power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2))); // set the start height and end height for the terrain

  this.points[0] = this.mHeight; //(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;

  this.points[power] = this.points[0]; // create the rest of the points

  for (var i = 1; i < power; i *= 2) {
    for (var j = power / i / 2; j < power; j += power / i) {
      this.points[j] = (this.points[j - power / i / 2] + this.points[j + power / i / 2]) / 2 + Math.floor(Math.random() * -displacement + displacement);
    }

    displacement *= 0.6;
  }

  document.body.appendChild(this.terrain);
}

Terrain.prototype.update = function () {
  // draw the terrain
  this.terCtx.clearRect(0, 0, width, height);
  this.terCtx.fillStyle = this.fillStyle;

  if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
    this.lastScroll = new Date().getTime();
    this.points.push(this.points.shift());
  }

  this.terCtx.beginPath();

  for (var i = 0; i <= width; i++) {
    if (i === 0) {
      this.terCtx.moveTo(0, this.points[0]);
    } else if (this.points[i] !== undefined) {
      this.terCtx.lineTo(i, this.points[i]);
    }
  }

  this.terCtx.lineTo(width, this.terrain.height);
  this.terCtx.lineTo(0, this.terrain.height);
  this.terCtx.lineTo(0, this.points[0]);
  this.terCtx.fill();
}; // Second canvas used for the stars


bgCtx.fillStyle = '#282828';
bgCtx.fillRect(0, 0, width, height); // stars

function Star(options) {
  this.size = Math.random() * 2;
  this.speed = Math.random() * .05;
  this.x = options.x;
  this.y = options.y;
}

Star.prototype.reset = function () {
  this.size = Math.random() * 2;
  this.speed = Math.random() * .05;
  this.x = width;
  this.y = Math.random() * height;
};

Star.prototype.update = function () {
  this.x -= this.speed;

  if (this.x < 0) {
    this.reset();
  } else {
    bgCtx.fillRect(this.x, this.y, this.size, this.size);
  }
};

function ShootingStar() {
  this.reset();
}

ShootingStar.prototype.reset = function () {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = Math.random() * 80 + 10;
  this.speed = Math.random() * 10 + 6;
  this.size = Math.random() * 1 + 0.1; // this is used so the shooting stars arent constant

  this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
  this.active = false;
};

ShootingStar.prototype.update = function () {
  if (this.active) {
    this.x -= this.speed;
    this.y += this.speed;

    if (this.x < 0 || this.y >= height) {
      this.reset();
    } else {
      bgCtx.lineWidth = this.size;
      bgCtx.beginPath();
      bgCtx.moveTo(this.x, this.y);
      bgCtx.lineTo(this.x + this.len, this.y - this.len);
      bgCtx.stroke();
    }
  } else {
    if (this.waitTime < new Date().getTime()) {
      this.active = true;
    }
  }
};

var entities = []; // init the stars

for (var i = 0; i < height; i++) {
  entities.push(new Star({
    x: Math.random() * width,
    y: Math.random() * height
  }));
} // Add 2 shooting stars that just cycle.


entities.push(new ShootingStar());
entities.push(new ShootingStar());
entities.push(new Terrain({
  mHeight: height / 2 - 120
}));
entities.push(new Terrain({
  displacement: 120,
  scrollDelay: 50,
  fillStyle: "#282828",
  mHeight: height / 2 - 60
}));
entities.push(new Terrain({
  displacement: 100,
  scrollDelay: 20,
  fillStyle: "#1d2021",
  mHeight: height / 2
})); //animate background

function animate() {
  bgCtx.fillStyle = '#1d2021';
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = '#ffffff';
  bgCtx.strokeStyle = '#ffffff';
  var entLen = entities.length;

  while (entLen--) {
    entities[entLen].update();
  }

  requestAnimationFrame(animate);
}

animate(); // cursor

document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
  i = document.getElementById("cursor3");
  t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", e.style.left = n.clientX + "px", e.style.top = n.clientY + "px", i.style.left = n.clientX + "px", i.style.top = n.clientY + "px";
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

function n(t) {
  e.classList.add("hover"), i.classList.add("hover");
}

function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover");
}

s();

for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
  o(r[a]);
}

function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
}

document.getElementById("downloadCV").addEventListener("mouseover", function () {
  this.innerHTML = "CV";
});
document.getElementById("downloadCV").addEventListener("mouseout", function () {
  this.innerHTML = '<i class="fas fa-id-card"></i>';
});
document.getElementById('downloadCV').addEventListener('click', function () {
  // Create a link element
  var a = document.createElement('a');
  a.href = './resume.pdf'; // Path to the file

  a.download = 'resume.pdf'; // Name of the downloaded file

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
document.querySelectorAll('.chevron').forEach(function (chevron) {
  chevron.addEventListener('click', function () {
    $("#sectionToNavigate").show();
    var target = this.getAttribute('data-scroll-to');
    var targetElement = document.querySelector(target);

    if (targetElement) {
      var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 450; // 10px above

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // For smooth scrolling

      });
    }
  });
});
var hasClickedChevron = false;
document.querySelector('.scrollable-content').addEventListener('scroll', function () {
  jquery(".post-title").removeClass("realname");
});
var lastScrollY = window.scrollY; // Track the previous scroll position

window.addEventListener('scroll', function () {
  var container = document.querySelector('.container');
  var currentScrollY = window.scrollY; // Check if the user is scrolling up

  if (currentScrollY < lastScrollY) {
    // Scroll up detected
    $("#boxcontainer").fadeIn(500);
    $("#sectionToNavigate").fadeOut(50);
    $("#sectionToNavigate").hide(); // $(".container").hide();

    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling to the top

    });
    hasClickedChevron = false; // Reset the flag
  } else if (currentScrollY > 10) {
    // Check if the scroll position is greater than 10px
    if (!hasClickedChevron) {
      document.querySelector(".chevron").click();
      $("#sectionToNavigate").fadeIn(500);
      $("#boxcontainer").fadeOut(50);
      $("#boxcontainer").hide();
      hasClickedChevron = true; // Set the flag to true after clicking
    }
  } else {
    hasClickedChevron = false; // Reset the flag
  } // Update the last scroll position


  lastScrollY = currentScrollY;
});