<?php foreach ($items as $delta => $item): ?>
  <a href="<?php print render($item['#element']['display_url']); ?>" rel="<?php print render($item['#element']['attributes']['rel']); ?>" class="cta cta--<?php print $item['#element']['attributes']['class']; ?>"><?php print render($item['#element']['title']); ?></a>
<?php endforeach; ?>
