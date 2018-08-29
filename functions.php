<?php
// Wordpress runs all the main theme functions from this file.

/*
* To add the UConn banner (required in composer.json) uncomment the following lines.
* Uncomment the banner instance to your header.php
* require_once('vendor/autoload.php');
* // uncomment this to get started. change names as needed.
* function boilerplate_enqueue_scripts() {
    wp_enqueue_style('boilerplate-styles', get_stylesheet_directory_uri() . '/build/main.css');
*   wp_enqueue_style('uconn-banner', get_stylesheet_directory_uri() . '/vendor/uconn/banner/_site/banner.css');

*   wp_enqueue_script('boilerplate-script', get_stylesheet_directory_uri() . '/build/index.js', array('jquery'), false, true);
* }
* add_action('wp_enqueue_scripts', 'boilerplate_enqueue_scripts');
*
*/

define('A11Y_THEME_DIR', get_template_directory());
define('A11Y_THEME_URL', get_template_directory_uri());

require A11Y_THEME_DIR . '/vendor/autoload.php';

require_once 'includes/class-a11y-theme.php';

add_action('after_setup_theme', 'A11y_Theme::register_menus');
add_action('wp_enqueue_scripts', 'A11y_Theme::enqueue_scripts');