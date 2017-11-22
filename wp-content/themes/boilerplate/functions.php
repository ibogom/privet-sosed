<?php

add_action('wp_enqueue_scripts', 'load_client_scripts', 100);

function load_client_scripts() {
    wp_enqueue_style('reactwp_css', get_template_directory_uri() . '/dist/main.css', false, NULL);
    wp_enqueue_script('reactwp_js', get_template_directory_uri() . '/dist/main.min.js', [], NULL, true);

    global $wp_filesystem;

    if (empty($wp_filesystem)) {
        require (ABSPATH . '/wp-admin/includes/file.php');
        WP_Filesystem();
    }

    $src = ABSPATH . '/assets/images/';
    $dist = ABSPATH . '/wp-content/themes/boilerplate/src/assets/images/';

    copy_dir($src, $dist);

    if ($wp_filesystem->errors->get_error_code() ) {
        foreach ( $wp_filesystem->errors->get_error_messages() as $message )
            echo '<div> Error: ' . $message . ' </div>';
        return;
    }
}