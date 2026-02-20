document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            document.body.classList.add('menu-open');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }
});

const chooseusData = [
    {
        Image: "assets/payment-pic.png",
        title: "Payment methods",
        description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
    },
    {
        Image: "assets/search-pic.png",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son",
    },
    {
        Image: "assets/support-pic.png",
        title: "24/7 Support",
        description: "Is there something you don't<br>understand? Feel free to call us. <br> Phone number in the footer",
    },
    {
        Image: "assets/nice-pic.png",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here",
    },

];

const renderProduct = data => {
    const container = document.getElementById('chooseusContainer');
    if (!container) return;
    let htmlContent = '';
    data.forEach(item => {
        htmlContent += `
           <div>
                    <img src="${item.Image}" alt="">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
        `;
    });
    container.innerHTML = htmlContent;
}

renderProduct(chooseusData);

const specialoffersData = [
    {
        image1: "assets/1st-bed.png",
        image2: "assets/rating.png",
        image3: "assets/favorite.png",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
    {
        image1: "assets/2nd-bed.png",
        image2: "assets/rating.png",
        image3: "assets/favorite.png",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
    {
        image1: "assets/3rd-bed.png",
        image2: "assets/rating.png",
        image3: "assets/favorite.png",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },

]

const renderContainer = data => {
    const container = document.getElementById('specialoffersContainer');
    if (!container) return;
    let htmlContent = '';
    data.forEach(item => {
        htmlContent += `
           <div class="first-bed" id="beds">
                    <img src="${item.image1}" alt="" id="first-bed">
                    <img src="${item.image2}" alt="" class="rating1">
                    <img src="${item.image3}" alt="" class="favorite1">
                    <h4>${item.title}</h4>
                    <p class="october">${item.description1}</p>
                    <p class="price">${item.description2}</p>
                </div>
        `
    });
    container.innerHTML = htmlContent;
}
renderContainer(specialoffersData);

const reviewData = [
    {
        Image: "assets/review-pic-1.png",
        description1: "I quickly found the right tour for me, <br> but I had a few questions about the hotel, <br> I wrote to tech support and they answered all my questions within an hour.<br> The vacation itself was perfect.Thank you very much. I will come back again and again.",
        description2: "<strong> Jannike Borg,</strong> Publisher",
    },
    {
        Image: "assets/review-pic-2.png",
        description1: "I quickly found the right tour for me,<br> but I had a few questions about the hotel,<br> I wrote to tech support and they answered all my questions within an hour.<br> The vacation itself was perfect. Thank you very much. I will come back again and again.",
        description2: "<strong> LeBron Durant,</strong> Flight attendant",
    },
    {
        Image: "assets/review-pic-3.png",
        description1: "I quickly found the right tour for me,<br> but I had a few questions about the hotel,<br> I wrote to tech support and they answered all my questions within an hour.<br> The vacation itself was perfect. Thank you very much. I will come back again and again.",
        description2: "<strong>Kaarel Piho,</strong> Chiropodist",
    },

];

const renderReview = data => {
    const container = document.getElementById('reviewContainer');
    if (!container) return;
    let htmlContent = '';
    data.forEach(item => {
        htmlContent += `
          <div class="first-review">
                    <img src="${item.Image}" alt="" id="first-review-pic">
                        <p>${item.description1}</p>
                       <p class="first-review-author"> ${item.description2}</p>
                </div>
        `;
    });
    container.innerHTML = htmlContent;
}

renderReview(reviewData);

const postData = [
    {
        image1: "assets/athens.png",
        description1: "May 23, 2022",
        image2: "assets/time-5minutes.png",
        title: "My trip to Athens",
        description2: "It would seem that in a city where Theseus,<br> Plato and Epicurus once walked,<br> the very idea of the subway is alien to the city, but already...",
    },
    {
        image1: "assets/vilnius.png",
        description1: "May 22, 2022",
        image2: "assets/time-1minute.png",
        title: "Vilnius resorts",
        description2: "I haven't seen any resorts in Vilnius,<br>but there are wonderful people and pubs",
    },
    {
        image1: "assets/plane.png",
        description1: "May 22, 2022",
        image2: "assets/time-15minutes.png",
        title: "Tips for flying on a plane",
        description2: "If you have a fear of flying,<br> here's a helpful tip:<br> bring your co-pilot so you can take a nap while he steers the plane for you",
    },

];

const renderPost = data => {
    const container = document.getElementById('postContainer');
    if (!container) return;
    let htmlContent = '';
    data.forEach(item => {
        htmlContent += `
               <div class="trip-to-athens">
                       <img src="${item.image1}" alt="" class="athens-pic">
                        <p>${item.description1}</p>
                        <img src="${item.image2}" alt="" class="five-minutes">
                        <h4 class="trip-to-athens">${item.title}</h4>
                        <p class="athens-paragraph">${item.description2}</p>
                </div>
        `;
    });
    container.innerHTML = htmlContent;
}

renderPost(postData);