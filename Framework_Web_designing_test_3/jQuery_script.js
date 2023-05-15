// for hidden images array
$(document).ready(function () {
    let img = $('.slide');
    // console.log(img)

    // for blur the main container when image is clicked
    let disp = $('.main');
    // console.log(disp)


    // show hidden container
        $(".show").click(function () {
            $("#box").fadeIn("slow");
        });
    

    // close hidden container
    $(".close").click(function () {
        $("#box").fadeOut("slow", function() {
            $("#box").css("display", "none")
            $(disp[0]).attr("id", "");
            // disp[0].id = "";                 // this will work also
        })
    })
    // console.log(disp[0])


    // show enlarged image which is clicked
    $(".current").click(function (n) {
        // console.log(n)
        $(img).css("display", "none")

        // $(img[n.target.id]).css("display", "block")
        $(img[n.target.id]).fadeIn("slow")
        // console.log(img[n.target.id])

        // $(img[parseInt(n.target.id)]).css("display", "block")
        // console.log(n.target.id)
        // console.log(img[parseInt(n.target.id)])

        // disp[0].id = "blur";               //  this will work also
        $(disp[0]).attr("id", "blur");
    })
});