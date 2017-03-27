<?php
 $path = current_path();
 $path = drupal_lookup_path('alias',$path);
 global $user;
?>
<?php print $messages; ?>
<?php print render($page['content']); ?>
<?php if (!empty($node)): ?>
  <div class="page-edit-button">
    <a href="<?php print '/node/' . $node->nid . '/edit?destination=' . $path; ?>">Edit Page</a>
  </div>
<?php endif; ?>
