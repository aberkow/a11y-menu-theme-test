<?php // header('X-UA-Compatible: IE=edge'); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/respond.min.js"></script>
<![endif]-->
<?php

wp_head();

?>
</head>

<body <?php body_class(); ?> itemscope="itemscope" itemtype="http://schema.org/WebPage">
	<a href="#page-content" class="screen-reader-link">Skip Navigation</a>
	<div>
    <?php
      $menu_location = 'main-menu';
      $args = array(
        'theme_location' => $menu_location,
        'menu_id' => 'main-menu',
        'items_wrap' => '<ul id="%1$s" class="%2$s" aria-label="call to action menu">%3$s</ul>',
        'container' => 'nav',
        'walker' => new A11y_Menu_Walker()
      );
      wp_nav_menu($args);
    ?>
		<div id="page-content" class="fl-page-content" itemprop="mainContentOfPage">
