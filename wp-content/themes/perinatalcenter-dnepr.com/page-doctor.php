<?php
/*
Template Name: Страница доктора
*/
?>
<?php get_header(); ?>

<section class="person">
  <div class="container">
    <div class="row">
      <div class="col-md-4 personImg">
        <?php the_post_thumbnail('large', array('class' => 'img-responsive')); ?>
      </div>
      <div class="col-md-8 persontext">
        <h2><strong><?php the_title(); ?></strong></h2>
        <h2><strong><?php echo get_post_meta( 'position', true ); ?></strong></h2>
        <h3><em><?php echo get_post_meta( 'degree', true ); ?></em></h3>
      </div>
    </div>
  </div>
</section>

<section class="personDescription">
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <?php the_content(); ?>

      </div>
    </div>
  </div>    
</section>

<?php get_footer(); ?>