<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ZX^43#v>6=tb`}A]bZvpV&X!@Zp*cu:`O887/)^8V3bu~#T;~96GV1qGKL=<O~k5' );
define( 'SECURE_AUTH_KEY',  'G&i.]gn:?lvupiq@Br&@LFyzo?|aZj[$Phu[<^ W`V%d%bb7(wPHioNsfH_h;GY{' );
define( 'LOGGED_IN_KEY',    '{QgytFYo8#p,[csv$+GqMiG9!bh3_<({]hyC#AMU?J|]SyZ^Q}=lXw!;x9&ceG>K' );
define( 'NONCE_KEY',        '<+aNV,mdUa(w{PN-J}*Yd[Mhco-HRXGNA4#6G|)G&KKY1Kv0E`PU&)MeLIk7Nm<u' );
define( 'AUTH_SALT',        '%F}9n5]jWa$=9k-m(Qyuvie_eidpN$U0AQ}*J,H;Ln*p-?`(JmZuZ/MgvXRnX5@P' );
define( 'SECURE_AUTH_SALT', '5?*;:{2IN9m!7r ,[KSvkKr{tz%~d3<c8PyxgunJPEL,b4bqJ}J6y|l3o2x=sJ3h' );
define( 'LOGGED_IN_SALT',   '`~%mS`h1]xDk}DDENB7P-J{.:=Pk1PG0F]cERjm*>GCs@cOb!@Fs~}j<{kz<YNq|' );
define( 'NONCE_SALT',       'QaUCQWx u8#7A?,;q}qS;X$UZy#2j_yJf89Q1n(K129SKC1kruBl9<EkIc2L5%OZ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
