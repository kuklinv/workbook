/*

function animateElement() {
    $("#element").animate({
            left: "+=100px"
        }, 1000)
        .animate({
            left: "-=100px"
        }, 1000);
    setTimeout("element()", 2000);
}


If we pay attention the code within the function, we can see that it runs two animations, one after the other. The first of the two moves the element 100px from the left relative to its current location – as denoted by the ‘+=’. When that animation is complete the next will be triggered, which does the exact opposite and moves the element back to it’s starting location.

When the animations finish then we want to have the same function called again so that they will be repeated. We do this via setTimeout(), which can trigger events based on a timer.

The key point to notice is that the timer (2000 in this case) should be the sum of all the animation times in the previous line. This essentially will allow for each of the animations to complete (1000 + 1000), before restarting the function.
*/

function sunRaft() {
    $("#sun").animate({ opacity: .7 }, 1000).animate({ opacity: 1 }, 1000);
    $("#raft").animate({ top: '-=5px' }, 1000).animate({ top: '+=5px' }, 1000);
    $("#raftripple").animate({ opacity: .1 }, 1000).animate({ opacity: 1 }, 1000);
    setTimeout(sunRaft, 2000);
}

function cloud1() {
    $("#cloud1").animate({ left: '+=850px' }, 10000).animate({ left: '-150px' }, 0);
    setTimeout(cloud1, 10000);
}

function cloud2() {
    $("#cloud2").animate({ left: '+=950px' }, 9000).animate({ left: "-250px" }, 0);
    setTimeout(cloud2, 9000);
}

function cloud3() {
    $("#cloud3").animate({ left: '+=800px' }, 6000).animate({ left: '-100px' }, 0);
    setTimeout(cloud3, 6000);
}

function animation() {
    sunRaft();
    cloud1();
    cloud2();
    cloud3();
}

setTimeout(animation, 300);