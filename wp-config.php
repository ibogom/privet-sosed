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
define('DB_NAME', 'boilerplate');

/** MySQL database username */
define('DB_USER', 'boilerplate');

/** MySQL database password */
define('DB_PASSWORD', 'abc123$%^');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         ')8+>)YR!?T7E5m^(!DrWn!~geT<uM8r_>Az//p>}oln+4:0K=OdRS_%=/L*$EW]b');
define('SECURE_AUTH_KEY',  '={^%F{S)>9rPgy}yN8n5McZrl;N1&s4xIUk+nb?B)~;j}~@afa;ss<:4xYNs<r)b');
define('LOGGED_IN_KEY',    '%]R$@C/Afk7/7h*a a@ nesZ6)R_]XiS*|=|8=:%h{ l(x3j[X0RE?In{!k4U#3j');
define('NONCE_KEY',        'BUR6bAV8fP4t0&4cJ4^yE9`-dQ=ON#><le>P`tpkeu/b$Gs `X u3[Z/{oWD>%4,');
define('AUTH_SALT',        'C_t>[%)Pcc8~J;t:@ygHbOo^fPYk*Zf]b<S-q0w-h1Ii6HT8b.uYsw>S?v~gpbc:');
define('SECURE_AUTH_SALT', 't1t}?b0dB+&]M{sM#pN6.F<;4IiA32>vt?5p3%_2E*qBMY9|zB=}$D;G)$zaJ&|8');
define('LOGGED_IN_SALT',   'Y*tq.t*WP aO]tCeXH1[_hj0ZiHpieeYf(P0??!qb?kP?K#ybQ=PC9aM3HT,/!_J');
define('NONCE_SALT',       's]:*}M6M0?_xB#9]UzN_Q$L+TUk/w$Dp(?sog.,N$B}=.C68VO,d=Lp%,2S}BI07');

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
