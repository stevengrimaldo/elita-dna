<div class="form__header">
  <?php if (isset($content['field_title'])): ?>
    <div class="form__header-title">
      <h3><?php print render($content['field_title']); ?></h3>
    </div>
  <?php endif; ?>
  <?php if (isset($content['field_text'])): ?>
    <div class="form__header-text">
      <?php print render($content['field_text']); ?>
    </div>
  <?php endif; ?>
</div>
<div class="form--container">
  <?php print render($content); ?>
</div>
