function doAnimation() 
{
    var from = 19; // From where
    var to = 450; // To where
    var duration = 1000; // Animation duration
    var start = new Date().getTime(); // Current time
    
    setTimeout(function() 
    {
        // Getting our element
        var element = document.getElementById("logo")
        // Calculating animation time
        var now = (new Date().getTime()) - start;
        // Caluclating animation progress
        var progress = now / duration;

        // Checking if animation was finished
        if (progress > 1)
            progress = 1;
        var pixels = (to - from) * delta(progress) + from; // Calculating number of pixels
        
        element.style.marginLeft = pixels + "px"; // Changing style
        
        // If animation isn't finished continue
        if (progress < 1)
            setTimeout(arguments.callee, 40)
    }, 40)
}

function delta(progress) 
{
    return (1 - progress) * Math.pow(progress, 2);
}