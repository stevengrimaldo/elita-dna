<?php
/**
 * @file
 * Default theme implementation for entities.
 *
 * Available variables:
 * - $content: An array of comment items. Use render($content) to print them all, or
 *   print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $title: The (sanitized) entity label.
 * - $url: Direct url of the current entity if specified.
 * - $page: Flag for the full page state.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. By default the following classes are available, where
 *   the parts enclosed by {} are replaced by the appropriate values:
 *   - entity-{ENTITY_TYPE}
 *   - {ENTITY_TYPE}-{BUNDLE}
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_entity()
 * @see template_process()
 */
 $path = current_path();
 $path = drupal_lookup_path('alias', $path);
 global $user;
?>
<section class="section team section--team<?php
  if (isset($content['field_top_slant']) || isset($content['field_bottom_slant'])) {
    print ' section--slant';
  }
  if (isset($content['field_top_slant'])) {
    print ' section--slant--' . $content['field_top_slant']['#items'][0]['value'];
  }
  if (isset($content['field_bottom_slant'])) {
    print ' section--slant--' . $content['field_bottom_slant']['#items'][0]['value'];
  }
  if (isset($content['field_background_color'])) {
    print ' section--' . $content['field_background_color']['#items'][0]['value'];
  }
?>">
  <div class="section-wrapper">
    <?php if ($user->uid): ?>
      <div class="edit-button">
        <a href="/admin/structure/entity-type<?php print $url . '/edit?destination=' . $path; ?>">Edit</a>
      </div>
    <?php endif; ?>
    <?php if (isset($content['field_city'])): ?>
      <div class="team__filters">
        <label class="team__filters-label">Filters:</label>
        <?php print render($content['field_city']); ?>
      </div>
    <?php endif; ?>
    <?php if (isset($content['field_member'])): ?>
      <div class="team__members">
        <?php print render($content['field_member']); ?>
      </div>
    <?php endif; ?>
  </div>
</section>
