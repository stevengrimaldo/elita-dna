<div class="reviews__review">
  <div class="reviews__review-text">
    <?php print render($content['body']); ?>
  </div>
  <div class="reviews__review-author">
    <h6><?php print render($content['field_author']); ?></h6>
    <time><?php print render($content['field_post_date']); ?></time>
  </div>
</div>
