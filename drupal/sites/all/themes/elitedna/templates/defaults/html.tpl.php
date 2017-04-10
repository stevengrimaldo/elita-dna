<!doctype html>
<html lang="en">
  <head profile="<?php print $grddl_profile; ?>">
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0" />
    <link rel="icon" href="/<?php print IMG_PATH; ?>favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/<?php print IMG_PATH; ?>favicon.ico" type="image/x-icon" />
    <?php print $styles; ?>
  </head>
  <body class="<?php print $classes; ?>" <?php print $attributes;?>>
    <?php print $page_top; ?>
    <div class="mobile-menu">
      <nav class="mobile-menu-nav">
        <div class="mobile-menu-header">
          <div class="mobile-menu-close"><i></i></div>
        </div>
        <?php if ($main_menu): ?>
          <div class="mobile-menu-nav-menus">
            <?php print render($main_menu); ?>
          </div>
        <?php endif; ?>
      </nav>
    </div>
    <div class="content-wrap">
      <div class="content">
        <header class="header">
          <div class="header-wrapper">
            <figure class="header__logo">
              <a href="/"><img src="/media/img/logo.png" alt="" /></a>
            </figure>
            <nav class="header__nav">
              <ul class="header__nav-utility">
                <li><a href="#">info@elitednatherapy.com</a></li>
                <li>(239) 223-2751</li>
              </ul>
              <?php if ($main_menu): ?>
                <ul class="header__nav-menu">
                  <?php print render($main_menu); ?>
                </ul>
                <div class="mobile-menu-open"><i></i></div>
              <?php endif; ?>
            </nav>
          </div>
        </header>
        <main class="components">
          <?php print $page; ?>
        </main>
        <footer class="footer">
          <p>&copy; 2017 Elite DNA Therapy. All rights reserved.</p>
        </footer>
      </div>
    </div>
    <div class="scripts">
      <?php print $scripts; ?>
    </div>
    <?php print $page_bottom; ?>
  </body>
</html>
