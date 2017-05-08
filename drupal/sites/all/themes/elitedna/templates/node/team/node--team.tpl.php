<div class="team__members__member" data-department="<?php print render($content['field_department']); ?>" data-location="<?php print render($content['field_location']); ?>">
  <?php if (isset($content['field_image'])): ?>
    <figure class="team__members__member-image">
      <?php print render($content['field_image']); ?>
    </figure>
  <?php endif; ?>
  <?php if (isset($title)): ?>
    <div class="team__members__member-name">
      <h5><?php print $title; ?></h5>
    </div>
  <?php endif; ?>
</div>