<?php foreach ($items as $delta => $item): ?>
  <div class="tools__item">
    <a href="<?php print render($item['#element']['display_url']); ?>" rel="<?php print render($item['#element']['attributes']['rel']); ?>">
      <h5><?php print render($item['#element']['title']); ?></h5>
      <div class="icon--container"><i class="icon icon--<?php print $item['#element']['attributes']['class']; ?>"></i></div>
    </a>
  </div>
<?php endforeach; ?>
