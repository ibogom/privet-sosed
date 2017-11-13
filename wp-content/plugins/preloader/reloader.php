<?php
/*
Plugin Name: Preloader configuration
Description: Плагин для конфигурации загрузчика Preloader
Version: 1.0
Author: Ievgen Bogomolov
*/

register_activation_hook(__FILE__, 'preloader_configuration_activation');
register_deactivation_hook(__FILE__, 'preloader_configuration_deactivation');

function preloader_configuration_activation() {

    register_uninstall_hook(__FILE__, 'preloader_configuration_uninstall');
}

function preloader_configuration_deactivation() {

}

function preloader_configuration_uninstall() {
    // при деактивации
}
?>
