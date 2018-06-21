<?php
$fichier = get_field("file");

if($fichier){
    $fileext = pathinfo($fichier["url"], PATHINFO_EXTENSION);
?>
    <a href="<?php echo $fichier["url"]; ?>" target="_blank" class="un-document">
        <h3 class="nom-fichier"><?php the_title(); ?></h3>
        <span class="tag"><i class="fas fa-fw fa-cloud-download-alt"></i> .<?php echo $fileext ?></span>
    </a>
<?php } ?>
