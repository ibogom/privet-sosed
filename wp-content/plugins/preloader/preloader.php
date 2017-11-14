<?php
/*
Plugin Name: Preloader Сonfiguration
Description: Плагин для конфигурации загрузчика Preloader
Version: 1.0
Author: Ievgen Bogomolov
*/

define('PRELOADER_DIR', plugin_dir_path(__FILE__));

register_activation_hook(__FILE__, 'preloader_configuration_activation');
register_deactivation_hook(__FILE__, 'preloader_configuration_deactivation');

function preloader_configuration_activation() {
    register_uninstall_hook(__FILE__, 'preloader_configuration_uninstall');
}

function preloader_configuration_deactivation() {
    // при деактивации
}

function preloader_configuration_uninstall() {
    // при удалении
}

function preloader_load_files(){
    if(is_admin())
        require_once(PRELOADER_DIR.'includes/admin.php');

    require_once(PRELOADER_DIR.'includes/core.php');
}

add_action('init', 'preloader_load_files');

?>
