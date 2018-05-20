<?php
/**
 * Template Name: About
 */
?>

<?php get_template_part('templates/section', 'nav-bar'); ?>

<?php while (have_posts()) : the_post(); ?>

 	<?php get_template_part('templates/section', 'about-top'); ?>
	
<?php endwhile; ?>

<?php get_template_part('templates/section', 'footer'); ?>