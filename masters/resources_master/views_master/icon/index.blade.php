<?php

// Parse query string parameters
$uid = $_GET['uid'] ?? null;
$size = min(max(intval($_GET['s'] ?? '100'), 20), 500);

// Render icon
$icon = new \Jdenticon\Identicon();
$icon->setValue($uid);
$icon->setSize($size);
$icon->displayImage('png');