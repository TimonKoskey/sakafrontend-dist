function showSearchForm(){
    var searchBar=document.getElementById("search-form")
    var hideSearchBarButton=document.getElementById("hide-search-form-button")
    var showSearchBarButton=document.getElementById("show-search-form-button")

    searchBar.style.display = "block";
    hideSearchBarButton.style.display = "block";
    showSearchBarButton.style.display = "none";
}

function hideSearchForm(){
    var searchBar=document.getElementById("search-form")
    var hideSearchBarButton=document.getElementById("hide-search-form-button")
    var showSearchBarButton=document.getElementById("show-search-form-button")

    searchBar.style.display = "none";
    showSearchBarButton.style.display = "block";
    hideSearchBarButton.style.display = "none";
}

