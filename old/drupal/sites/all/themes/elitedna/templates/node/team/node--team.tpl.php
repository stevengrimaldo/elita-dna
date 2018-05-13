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
<?php if ($view_mode == 'teaser'): ?>
  <div class="team__members__member" data-department="<?php print $department; ?>" data-location="<?php print $location; ?>">
    <?php if (isset($content['field_image'])): ?>
      <figure class="team__members__member-image">
        <?php print render($content['field_image']); ?>
      </figure>
    <?php endif; ?>
    <?php if (isset($title)): ?>
      <div class="team__members__member-name">
        <h5>
          <?php if (isset($content['field_hometown'])): ?>
            <a href="<?php print $node_url; ?>"><?php print $title; ?></a>
          <?php else: ?>
            <?php print $title; ?>
          <?php endif; ?>
        </h5>
      </div>
    <?php endif; ?>
  </div>
<?php else: ?>
  <section class="section bio section--bio section--tan section--left-align">
    <div class="section-wrapper">
      <div class="bio__back">
        <a href="/our-team">
          <div class="icon--container"><i class="icon icon--left-arrow"></i></div>
          Back to Our Team
        </a>
      </div>
      <?php if (isset($content['field_image'])): ?>
        <div class="bio__image">
          <?php print render($content['field_image']); ?>
        </div>
      <?php endif; ?>
      <div class="bio__name">
        <h3><?php print $title; ?></h3>
      </div>
      <div class="bio__details">
        <?php if (isset($content['field_hometown'])): ?>
          <div class="bio__details__item">
            <p><strong>Hometown:</strong> <?php print render($content['field_hometown']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_degree'])): ?>
          <div class="bio__details__item">
            <p><strong>Degree(s):</strong> <?php print render($content['field_degree']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_college'])): ?>
          <div class="bio__details__item">
            <p><strong>College(s):</strong> <?php print render($content['field_college']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_special_certifications'])): ?>
          <div class="bio__details__item">
            <p><strong>Special Certifications:</strong> <?php print render($content['field_special_certifications']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_patient_ages_seen'])): ?>
          <div class="bio__details__item">
            <p><strong>Patient Ages Seen:</strong> <?php print render($content['field_patient_ages_seen']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_client_populations_seen'])): ?>
          <div class="bio__details__item">
            <p><strong>Client Populations Seen:</strong> <?php print render($content['field_client_populations_seen']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_therapy_modality_used'])): ?>
          <div class="bio__details__item">
            <p><strong>Therapy Modality Used:</strong> <?php print render($content['field_therapy_modality_used']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_hobbies'])): ?>
          <div class="bio__details__item">
            <p><strong>Hobbies:</strong> <?php print render($content['field_hobbies']); ?></p>
          </div>
        <?php endif; ?>
        <?php if (isset($content['field_favorite_quote'])): ?>
          <div class="bio__details__item">
            <p><strong>Favorite Quote:</strong> <?php print render($content['field_favorite_quote']); ?></p>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </section>
<?php endif; ?>
