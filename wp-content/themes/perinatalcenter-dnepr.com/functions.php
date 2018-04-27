<?php

function style_script_load() {
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'bootstrap.min', get_template_directory_uri() . '/libs/bootstrap-3.3.7-dist/js/bootstrap.min.js' );
	wp_enqueue_script( 'parallax.min', get_template_directory_uri() . '/libs/parallax/parallax.min.js' );
	wp_enqueue_script( 'owl.carousel.min', get_template_directory_uri() . '/libs/owlCarusel/owl.carousel.min.js' );
	wp_enqueue_script( 'tagcanvas.min', get_template_directory_uri() . '/libs/tagCloud/jquery.tagcanvas.min.js' );
	wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js' );

	wp_enqueue_style( 'bootstrap.min', get_template_directory_uri() . '/libs/bootstrap-3.3.7-dist/css/bootstrap.min.css' );
	wp_enqueue_style( 'owl.carousel.min', get_template_directory_uri() . '/libs/owlCarusel/owl.carousel.min.css' );
	wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'style_script_load' );

//adminpanel
show_admin_bar(false);

