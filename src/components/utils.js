export const getBackgroundStyle = (weatherCondition) => {
    /* 
    this code is getting repeated below
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.8)'
    can avoid extra lines of code
    */
    let background = {
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.8)"
    }

    switch (weatherCondition) {
        case 'clear':
                background.backgroundImage = "url('../background-images/14657711_2001.i029.020_realistic clouds sky background.jpg')"
                return background;
            
        case 'clouds':
                background.backgroundImage = `url('../background-images/25501.jpg')`
                return background;

        case 'rain':
                background.backgroundImage = `url('../background-images/18309116_SL-042221-42420-04.jpg')`
                return background;

        case 'thunderstorm':
                background.backgroundImage = `url('../background-images/15244408_SL_042221_42420_05.jpg')`
                return background

        case 'snow':
                background.backgroundImage = `url('../background-images/6345388_3254134.jpg')`
                return background

        default:
                background.backgroundImage = 'linear-gradient(to bottom, #f5f5dc, #ffdab9)'
                return background // Default background
    }
};