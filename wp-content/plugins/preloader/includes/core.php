<?php
/**
 * Created by PhpStorm.
 * User: ibogom
 * Date: 11/14/17
 * Time: 11:23 PM
 */

class Client_Preloader {

    protected $plugin_name;

    protected $version;

    public function __construct() {

        $this->plugin_name = 'client-preloader';
        $this->version = '1.0.0';

        $this->load_dependencies();
        $this->define_admin_hooks();
    }

    private function load_dependencies() {

    }

    private function define_admin_hooks() {

    }
}