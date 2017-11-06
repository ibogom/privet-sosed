<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sosed');

/** MySQL database username */
define('DB_USER', 'sosed');

/** MySQL database password */
define('DB_PASSWORD', 'abc123$%^');

/** MySQL hostname */
define('DB_HOST', 'db4free.net');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         't{:QPh]Efk:FgZ2o~wQZjA5RP_>,scqW!3u`S800h4e`IyT2(yOW;c9F8j[Ac8wa');
define('SECURE_AUTH_KEY',  '12+yT.`D{/j%OW^Po,$Qna,!(lEQKb!^ngWa !Xu8~%5CRWCE_)Q>b LyUJ%J*3D');
define('LOGGED_IN_KEY',    'Ky4?oA.(Y]zB7M6!r6MTFP_.k7^dXdZH;Vq;}bBm:9=eETq0Gl5D4(0fLfKb^%HP');
define('NONCE_KEY',        '7PN6[(qPRnoOPB^~N`Q35@6H.wQDEa uc~u+K:Hjeo{(_xy,eZi@VR]AjKL=7|up');
define('AUTH_SALT',        'TJAX~;yh9J6==KKw!QUyo=f`cJu*h}Sc&hV/DN#Oj-OFZ[H@0!A]fk!bu,y]3mcO');
define('SECURE_AUTH_SALT', 's1:J{KmD%D[Hb@ zd<[g:FSWWF%5EP6?97E:wwew.#zrhDH0WjlMS{>.K-ZEbCeG');
define('LOGGED_IN_SALT',   'h@DD 0=[#OUygp(;5:XE#dwN3?lS1[<85En-ufQK|h]_T1 vM(l&jZm>K;8rl }7');
define('NONCE_SALT',       'ufLa5<A_[P:nUO:W(}F1,CmUA#}53d8*k?ae[(i)SzB@>#e0J_koI3N|9FYCPL% ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
