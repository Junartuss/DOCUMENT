jQuery( document ).ready(function() {

    // Filtre sur LI
    jQuery('.liste_categorie_all').click(function(){
        jQuery('.ligne-document').css("display", "table-row");
    });

    jQuery('.liste_categorie').click(function(){

        var choix_categ = jQuery(this).attr('data-id-categorie');

        jQuery('.ligne-document').css("display", "none");
        jQuery('.ligne-document').filter(function(){
            var tableau_categ_string = jQuery(this).data("id").toString();
            var tableau_categ = tableau_categ_string.indexOf(',') !== -1 ? tableau_categ_string.split(",") : new Array(tableau_categ_string);

            // recherche dans le tableau des catégories si l'id de la catégorie est présente
            var result = jQuery.inArray(choix_categ, tableau_categ);

            if ( result != -1){
                return true;
            }
            return false;


        }).css("display", "table-row");

    });
});

// Filtre recherche

function barre_recherche() {
    var input, filter, tbody, tr, td, i, date;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tbody = document.getElementById('tableBody');
    tr = tbody.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        date = tr[i].getElementsByClassName('date-filtre')[0];
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || date.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "table-row";
        } else {
            tr[i].style.display = "none";
        }
    }
}
