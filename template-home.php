<?php
/**
 * Template Name: Home
 */
?>

<?php get_template_part('templates/section', 'nav-bar'); ?>

<?php while (have_posts()) : the_post(); ?>

 	<?php get_template_part('templates/section', 'home-top'); ?>
	
<?php endwhile; ?>

<?php get_template_part('templates/section', 'footer'); ?>