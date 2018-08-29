<?php

class A11y_Theme {
  static public function register_menus() {
    register_nav_menu('main-menu', __('Main Menu'), 'a11y-theme');
  } 
  static public function enqueue_scripts() {
    wp_enqueue_style('menu', A11Y_THEME_URL . '/vendor/ucomm/a11y-menu/build/main.css');

    wp_register_script('navigator', A11Y_THEME_URL . '/vendor/ucomm/a11y-menu/build/index.js', array(), false, false);

    wp_enqueue_script('navigator');
    wp_enqueue_script('index', A11Y_THEME_URL . '/build/index.js', array('navigator'), false, false);
  }
}