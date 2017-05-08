<?php if ($teaser): ?>
  <div class="team__filters__filter">
    <div class="team__filters__filter-location">
      <h4><?php print render($content['field_address']['#items']['0']['locality']); ?></h4>
    </div>
    <?php if (isset($content['field_department'])): ?>
      <div class="team__filters__filter__departments">
        <?php print render($content['field_department']); ?>
      </div>
    <?php endif; ?>
  </div>
<?php else: ?>
  <div class="locations__list-location">
    <div class="locations__list-location__info">
      <?php if (isset($title)): ?>
        <h4><?php print $title; ?></h4>
      <?php endif; ?>
      <?php if (isset($content['field_address'])): ?>
        <p><?php print render($content['field_address']['#items']['0']['thoroughfare']) . ', ' . render($content['field_address']['#items']['0']['premise']) . ', ' . render($content['field_address']['#items']['0']['locality']) . ', ' . render($content['field_address']['#items']['0']['administrative_area']) . ' ' . render($content['field_address']['#items']['0']['postal_code']); ?></p>
      <?php endif; ?>
    </div>
    <div class="locations__list-location__map">
      <div class="locations__list-location__map-code" data-address="<?php print render($content['field_address']['#items']['0']['thoroughfare']) . ', ' . render($content['field_address']['#items']['0']['premise']) . ', ' . render($content['field_address']['#items']['0']['locality']) . ', ' . render($content['field_address']['#items']['0']['administrative_area']) . ' ' . render($content['field_address']['#items']['0']['postal_code']); ?>"></div>
    </div>
  </div>
<?php endif; ?>
