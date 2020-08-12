$(document).ready(function () {

    // $(".do-nicescrol").niceScroll();

    $('.header').height($(window).height());


    $('.links i').on('click', function () {
        $('.kaka').animate({
            left: 0
        }, 800, function () {

        });
    });

    $('.kaka > i').on('click', function () {
        $('.kaka').animate({
            left: '-100%'
        }, 1000);
    });


    $(window).on('scroll', function () {
        const x = $(this).scrollTop();
        if (x >= $('.nave').height()) {
            $('.nave').addClass('fixed-nav')
        } else {
            $('.nave').removeClass('fixed-nav')
        }
    });

    $('.dd').click(function () {
        $('html, body').animate({
            scrollTop: $('.featusres').offset().top
        }, 1000);
    });

    //// show more

    $('.our-work button').click(function () {

        $('.our-work .hidd').fadeIn(1000);

    });

    // local reviews data
    const reviews = [{
            id: 1,
            name: "susan smith",
            job: "web developer",
            img: "/imges/Warstwa 9.png",
            text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric. ",
        },
        {
            id: 2,
            name: "anna johnson",
            job: "web designer",
            img: "/imges/Warstwa 9.png",
            text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle.",
        },
        {
            id: 3,
            name: "peter jones",
            job: "intern",
            img: "/imges/Warstwa 9.png",
            text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit.",
        },
        {
            id: 4,
            name: "bill anderson",
            job: "the boss",
            img: "/imges/Warstwa 9.png",
            text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown . ",
        },
    ];

    const btnPrev = $('.left');
    const btnNext = $('.rrr');
    const myImge = document.querySelector('.my-img');
    const myPara = document.querySelector('.para');
    const mySpa = document.querySelector('.spa');

    currentPerson = 1;


    function showPerson(person) {
        const item = reviews[person];
        myImge.src = item.img;
        myPara.textContent = item.text;
        mySpa.textContent = item.name;
    };

    btnNext.on('click', function () {
        currentPerson++;
        if (currentPerson > reviews.length - 1) {
            currentPerson = 0;
        }
        showPerson(currentPerson);
    });


    btnPrev.on('click', function () {
        currentPerson--;
        if (currentPerson < 0) {
            currentPerson = reviews.length - 1
        }
        showPerson(currentPerson);

    });


    btnNext.click(function () {
        console.log(mySpa);
        console.log(myPara);
        console.log(myImge);
    });


///////////////////////////////

    $('.cont-span span').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.cont-span span').eq(1).click(function () {
        $('.person').eq(1).addClass('active').siblings().removeClass('active')
    });

    $('.cont-span span').eq(2).click(function () {
        $('.person').eq(2).addClass('active').siblings().removeClass('active')
    });

    $('.cont-span span').eq(3).click(function () {
        $('.person').eq(3).addClass('active').siblings().removeClass('active')
    });
    $('.cont-span span').eq(0).click(function () {
        $('.person').eq(0).addClass('active').siblings().removeClass('active')
    });



    $(window).on('scroll', function () {
    
        const x = $(window).scrollTop();

        if (x > 200) {
            $('.up').fadeIn(500);
        }else{
            $('.up').fadeOut();
        }

    });

    $('.up').click(function () {
        
        $('html, body').animate({
            scrollTop: 0
        },1000);

    });













});