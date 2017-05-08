<div class="articles__article">
  <?php if (isset($content['field_image'])): ?>
    <figure class="articles__article-image">
      <?php print render($content['field_image']); ?>
    </figure>
  <?php endif; ?>
  <div class="articles__article-content">
    <?php if (isset($content['field_source'])): ?>
      <span class="source">Source: <?php print render($content['field_source']); ?></span>
    <?php endif; ?>
    <?php if (isset($title)): ?>
      <h6><?php print $title; ?></h6>
    <?php endif; ?>
  </div>
  <?php if (isset($content['field_link'])): ?>
    <div class="cta--container"><?php print render($content['field_link']); ?></div>
  <?php endif; ?>
</div>