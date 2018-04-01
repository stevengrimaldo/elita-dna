<?php

define('THEME_PATH', drupal_get_path('theme', 'elitedna'));
define('IMG_PATH', THEME_PATH . '/media/img/');

/**
 * Implements hook_preprocess_html().
 */
function elitedna_preprocess_html(&$vars) {
  drupal_add_js(THEME_PATH . '/js/common.js', array('scope' => 'header', 'group' => JS_LIBRARY, 'every_page' => TRUE, 'weight' => 0));
  drupal_add_js(THEME_PATH . '/js/app.js', array('scope' => 'header', 'group' => JS_THEME, 'every_page' => TRUE, 'weight' => 1));
  drupal_add_js(THEME_PATH . '/js/components/mobile-menu.js', array('scope' => 'header', 'group' => JS_THEME, 'every_page' => TRUE, 'weight' => 2));

  $current_entity = menu_get_object('node');

  if ($current_entity && isset($current_entity->type)) {
    $vars['theme_hook_suggestions'][] = 'html__' . $current_entity->type;
    switch ($current_entity->type) {
      case 'basic_page':
        $vars['classes_array'][] = 'page--basic';
        break;
      case 'news':
        $vars['classes_array'][] = 'page--article-detail';
        break;
      default:
        $vars['classes_array'][] = 'page';
        break;
    }
  }

  // Get the entire main menu tree.
  $main_menu_tree = menu_tree_all_data('main-menu');
  // Add the rendered output to the $main_menu_expanded variable.
  $vars['main_menu'] = menu_tree_output($main_menu_tree);
  // Get the entire foter menu menu tree.
  $footer_menu_menu_tree = menu_tree_all_data('menu-footer-menu');
  // Add the rendered output to the $footer_menu_menu_tree variable.
  $vars['footer_menu_menu'] = menu_tree_output($footer_menu_menu_tree);
}

/**
 * Implements hook_process_html().
 */
function elitedna_process_html(&$vars) {
  // http://sonspring.com/journal/html5-in-drupal-7
  // Minify HTML output.
  $vars['header_scripts'] = drupal_get_js('header_scripts');
  $before = array(
    "/>\s\s+/",
    "/\s\s+</",
    "/>\t+</",
    "/\s\s+(?=\w)/",
    "/(?<=\w)\s\s+/"
  );
  $after = array('> ', ' <', '> <', ' ', ' ');
  // Page top.
  $page_top = $vars['page_top'];
  $page_top = preg_replace($before, $after, $page_top);
  $vars['page_top'] = $page_top;
  // Page content.
  if (!preg_match('/<pre|<style|<script|<textarea/', $vars['page'])) {
    $page = $vars['page'];
    $page = preg_replace($before, $after, $page);
    $vars['page'] = $page;
  }
  // Page bottom.
  $page_bottom = $vars['page_bottom'];
  $page_bottom = preg_replace($before, $after, $page_bottom);
  $vars['page_bottom'] = $page_bottom;
}

/**
 * Implements hook_process_html_tag().
 */
function elitedna_process_html_tag(&$vars) {
  // http://sonspring.com/journal/html5-in-drupal-7
  // Purge needless XHTML stuff.
  $el = &$vars['element'];
  // Remove type="..." and CDATA prefix/suffix.
  unset($el['#attributes']['type'], $el['#value_prefix'], $el['#value_suffix']);
  // Remove media="all" but leave others unaffected.
  if (isset($el['#attributes']['media']) && $el['#attributes']['media'] === 'all') {
    unset($el['#attributes']['media']);
  }
}

/**
 * Implements hook_preprocess_page().
 */
function elitedna_preprocess_page(&$vars) {
  // https://www.drupal.org/node/1089656
  // Specific page templates for each content type.
  if (isset($vars['node'])) {
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
  }
  if (arg(0) == 'taxonomy') {
    $vars['theme_hook_suggestions'][] = 'page__taxonomy';
  }
  if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
    unset($vars['page']['content']['system_main']['term_heading']['#prefix']);
    unset($vars['page']['content']['system_main']['term_heading']['#suffix']);
  }
  if (current_path() == 'user' || current_path() == 'user/login' || current_path() == 'user/registration') {
    drupal_add_js(path_to_theme() . '/js/components/form.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
    drupal_add_css(path_to_theme() . '/css/components/form/form.min.css', array('group' => CSS_THEME));
  }
}

/**
 * Implements hook_preprocess_node().
 */
function elitedna_preprocess_node(&$vars) {
  if (arg(0) == 'taxonomy') {
    array_push($vars['theme_hook_suggestions'], 'node__taxonomy');
  }

  if (!empty($vars['field_components'])) {
    foreach ($vars['field_components'] as $bundle) {
      // drupal_add_js(path_to_theme() . '/js/components/' . $bundle['entity']->type . '.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
      // drupal_add_css(path_to_theme() . '/css/components/' . $bundle['entity']->type . '/' . $bundle['entity']->type . '.min.css', array('group' => CSS_THEME));
      switch ($bundle['entity']->type) {
        case 'accordion':
          drupal_add_js(path_to_theme() . '/js/components/accordion.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/accordion/accordion.min.css', array('group' => CSS_THEME));
          break;
        case 'documents':
          drupal_add_js(path_to_theme() . '/js/components/documents.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/documents/documents.min.css', array('group' => CSS_THEME));
          break;
        case 'featured_content':
          drupal_add_js(path_to_theme() . '/js/components/featured-content.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/featured-content/featured-content.min.css', array('group' => CSS_THEME));
          break;
        case 'hero':
          drupal_add_js(path_to_theme() . '/js/components/hero.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/hero/hero.min.css', array('group' => CSS_THEME));
          break;
        case 'resources':
          drupal_add_js(path_to_theme() . '/js/components/resources.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/resources/resources.min.css', array('group' => CSS_THEME));
          break;
        case 'solutions':
          drupal_add_js(path_to_theme() . '/js/components/solutions.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/solutions/solutions.min.css', array('group' => CSS_THEME));
          break;
        case 'split_content':
          drupal_add_js(path_to_theme() . '/js/components/split-content.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/split-content/split-content.min.css', array('group' => CSS_THEME));
          break;
        case 'tools':
          drupal_add_js(path_to_theme() . '/js/components/tools.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/tools/tools.min.css', array('group' => CSS_THEME));
          break;
        case 'profile':
          drupal_add_js(path_to_theme() . '/js/components/profile.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/profile/profile.min.css', array('group' => CSS_THEME));
          break;
        case 'reviews':
          drupal_add_js(path_to_theme() . '/js/components/reviews.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/reviews/reviews.min.css', array('group' => CSS_THEME));
          break;
        case 'locations':
          drupal_add_js(path_to_theme() . '/js/components/locations.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/locations/locations.min.css', array('group' => CSS_THEME));
          break;
        case 'articles':
          drupal_add_js(path_to_theme() . '/js/components/articles.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/articles/articles.min.css', array('group' => CSS_THEME));
          break;
        case 'team':
          drupal_add_js(path_to_theme() . '/js/components/team.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/team/team.min.css', array('group' => CSS_THEME));
          break;
        case 'form':
          drupal_add_js(path_to_theme() . '/js/components/form.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/form/form.min.css', array('group' => CSS_THEME));
          break;
        case 'main_content':
          drupal_add_js(path_to_theme() . '/js/components/main-content.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/main-content/main-content.min.css', array('group' => CSS_THEME));
          break;
        case 'video':
          drupal_add_js(path_to_theme() . '/js/components/video.js', array('scope' => 'header', 'group' => JS_THEME, 'weight' => 2));
          drupal_add_css(path_to_theme() . '/css/components/video/video.min.css', array('group' => CSS_THEME));
          break;
      }
    }
  }
}

/**
 * Implements hook_css_alter().
 */
function elitedna_css_alter(&$css) {
  // Unset core css for better performance and less risk of conflicts.
  $system_path = drupal_get_path('module', 'system');
  unset(
    $css[$system_path . '/system.base.css'], // has ajax spinner gif
    $css[$system_path . '/system.menus.css'],
    $css[$system_path . '/system.messages.css'],
    $css[$system_path . '/system.theme.css'],
    $css[drupal_get_path('module', 'comment') . '/comment.css'],
    $css[drupal_get_path('module', 'field') . '/theme/field.css'],
    $css[drupal_get_path('module', 'node') . '/node.css'],
    $css[drupal_get_path('module', 'search') . '/search.css'],
    $css[drupal_get_path('module', 'user') . '/user.css'],
    $css[drupal_get_path('module', 'views') . '/css/views.css'],
    $css[drupal_get_path('module', 'ckeditor') . '/css/ckeditor.css'],
    $css[drupal_get_path('module', 'ctools') . '/css/ctools.css']
  );
}

/**
 * Implements hook_js_alter().
 */
function elitedna_js_alter(&$js) {
  // Unset core js for better performance and less conflicts.
  // unset($js['misc/jquery.js']);
  $js['misc/jquery.once.js']['weight'] = 1;
  $js['misc/drupal.js']['weight'] = 2;
}
