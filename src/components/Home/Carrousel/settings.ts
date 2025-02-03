export const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 370,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
            },
        }
    ],
};