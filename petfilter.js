//declare global variables for filters
var selectedFilter = "";
var allFilters = ["anysize","nonhypoallergenic", "notservicedog", "norunning", "anylength", "anyshed"];
var sizeFilter = "";
var allergyFilter = "";
var serviceFilter = "";
var exerciseFilter = "";
var runFilter = "";
var shedFilter = "";
var dogName ="";

//function to get specific html text attribute on click
//declare variable
var selectedInfo = "";

//function to filter out of html classes
function init (){

  $(".infocontainer").hide();

  //define function
    $(".item").click(function(){

      //link selectedInfo with data-text attribute in html
      selectedInfo= $(this).data("text");
      dogName= $(this).data("name");

      //grabs text in html attribute and puts it into container
      $("#description").text(selectedInfo);
      $("#dog-name").text(dogName);
      $(".infocontainer").show();

  });


  $(".close").click(function() {
    $(".infocontainer").hide();
  });

  $(".filterbtn").click(function() {
    //get selected filter data attribute
    selectedFilter= $(this).attr("data-filter");


    if ($(this).parent().attr("data-filter-group")== "size"){
      sizeFilter = selectedFilter;
      $("#small-button").removeClass("selected-button");
      $("#medium-button").removeClass("selected-button");
      $("#large-button").removeClass("selected-button");
      $("#any-size").removeClass("selected-button");
        allFilters[0]=sizeFilter;
    }

    if ($(this).parent().attr("data-filter-group")== "allergies"){
      allergyFilter = selectedFilter;
      $("#hypoallergenic-yes-button").removeClass("selected-button");
      $("#hypoallergenic-no-button").removeClass("selected-button");
        allFilters[1]=allergyFilter;
    }

    if ($(this).parent().attr("data-filter-group")== "service"){
      serviceFilter = selectedFilter;
      $("#servicedog-yes-button").removeClass("selected-button");
      $("#servicedog-no-button").removeClass("selected-button");
        allFilters[2]=serviceFilter;
    }

    if ($(this).parent().attr("data-filter-group")== "exercise"){
      exerciseFilter = selectedFilter;
      $("#short-walks-button").removeClass("selected-button");
      $("#medium-walks-button").removeClass("selected-button");
      $("#long-walks-button").removeClass("selected-button");
      $("#any-length-walks-button").removeClass("selected-button");
        allFilters[3]=exerciseFilter;
    }

    if ($(this).parent().attr("data-filter-group")== "run"){
      runFilter = selectedFilter;
      $("#running-button").removeClass("selected-button");
      $("#norunning-button").removeClass("selected-button");
        allFilters[4]=runFilter;
    }

    if ($(this).parent().attr("data-filter-group")== "shed"){
      shedFilter = selectedFilter;
      $("#light-shed-button").removeClass("selected-button");
      $("#medium-shed-button").removeClass("selected-button");
      $("#heavy-shed-button").removeClass("selected-button");
        allFilters[5]=shedFilter;
    }

    $(this).addClass("selected-button");

    //make all images grey
    $(".item").addClass("desaturate");
    //loop through number of filters and remove desaturation
    var chainedClasses = "";
    for(var i=0;i<allFilters.length;i++){
      chainedClasses += "." + allFilters[i];
    }

    $(chainedClasses).removeClass("desaturate");

  });

}

$(document).ready(function(){

	init();
});
