<?php
add_action('admin_menu', function () {
    add_menu_page('Конфигурация загрузки', 'Загрузчик', 'manage_options', 'preloader-config', 'preloader_admin_menu', '', 63);
});

function preloader_admin_menu()
{
    if (!current_user_can('manage_options')) {
        wp_die(__('You do not have sufficient permissions to access this page.'));
    }
    echo '</pre> <div class="wrap">';
    echo 'Here is where the form would go if I actually had options.';
    echo '</div> <pre>';
}
?>