// Вывод рубрики
<?php echo get_cat_name(3);?>
<!-- вывод описания рубрики -->
<?php echo category_description(3);?>


// Вывод поста (название, контент, картинка)
<?php if ( have_posts() ) : query_posts('p=1');
while (have_posts()) : the_post(); ?>

<?php the_title(); ?>
<?php the_content(); ?>
<?php the_post_thumbnail(array(100, 100)); ?>
<?php the_post_thumbnail('large', array('class' => 'img-responsive')); ?>

<? endwhile; endif; wp_reset_query(); ?>


// Вывод 1 дополнительного поля поста
<?php echo get_post_meta( 7, 'signature', true ); ?>


// Картинка со всплывающим popup
<?php if ( has_post_thumbnail() ) : ?>
    <a class="popup" href="<?php
    $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large' );
    echo $large_image_url[0];
    ?>"><?php the_post_thumbnail(array(900, 900)); ?></a>
<?php endif; ?>