<?php
  $address = '/.*,/';
  $zip = '/\d+/';
  $state = '/\FL/';
  $spec = '/[-.]/';
  $space = '/\s+/';
  $location = render($content['field_city']);
  $location = trim(strip_tags($location));
  $location = preg_replace($address, '', $location);
  $location = trim(preg_replace($zip, '', $location));
  $location = trim(preg_replace($state, '', $location));
  $location = preg_replace($spec, '', $location);
  $location = strtolower(preg_replace($space, '-', $location));
  $department = render($content['field_department']);
  $department = trim($department);
  $department = strtolower(preg_replace($space, '-', $department));
?>
<div class="team__members__member" data-department="<?php print $department; ?>" data-location="<?php print $location; ?>">
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
