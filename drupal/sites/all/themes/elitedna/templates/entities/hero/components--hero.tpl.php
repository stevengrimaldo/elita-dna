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
<section class="section section--hero">
  <div class="section-wrapper">
    <?php if ($user->uid): ?>
      <div class="edit-button">
        <a href="/admin/structure/entity-type<?php print $url . '/edit?destination=' . $path; ?>">Edit</a>
      </div>
    <?php endif; ?>
    <div class="hero__content">
      {{#if copy.sub-title}}
        <div class="hero__content-sub-title">
          <h3>{{{copy.sub-title}}}</h3>
        </div>
      {{/if}}
      {{#if copy}}
        {{#if copy.title}}
          <div class="hero__content-title">
            <h1>{{{copy.title}}}</h1>
          </div>
        {{/if}}
        {{#if copy.text}}
          <div class="hero__content-text">
            {{{copy.text}}}
          </div>
        {{/if}}
        {{#if copy.cta}}
          <div class="cta--container"><a href="{{copy.cta.url}}" class="cta cta--{{copy.cta.type}}">{{copy.cta.text}}</a></div>
        {{/if}}
      {{/if}}
    </div>
    {{#if img}}<div class="hero__img" style="background-image: url('/media/img/{{img}}');"></div>{{/if}}
  </div>
</section>

