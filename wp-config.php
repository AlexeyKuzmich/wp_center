<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'perin');

/** Имя пользователя MySQL */
define('DB_USER', 'perin');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'Perin$enter17');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */

/*
define('AUTH_KEY',         'впишите сюда уникальную фразу');
define('SECURE_AUTH_KEY',  'впишите сюда уникальную фразу');
define('LOGGED_IN_KEY',    'впишите сюда уникальную фразу');
define('NONCE_KEY',        'впишите сюда уникальную фразу');
define('AUTH_SALT',        'впишите сюда уникальную фразу');
define('SECURE_AUTH_SALT', 'впишите сюда уникальную фразу');
define('LOGGED_IN_SALT',   'впишите сюда уникальную фразу');
define('NONCE_SALT',       'впишите сюда уникальную фразу');
*/

define('AUTH_KEY',         '5sF(5`j#E(ON_- ?iu~MqJa#:!CHj)>+rBvBjyW6p1Q[prktEUfA;iJu]QPk,r6e');
define('SECURE_AUTH_KEY',  'L,:1.:R@|l+X;g=ywxU|~SW78Q(&6_6|]85W`TsX9Wr+k6DZ~3jq9m`.{me%[J-3');
define('LOGGED_IN_KEY',    '43VmkvH,Bx*`R+_sE:5MsU`Lg}Cx5Yj9^|0;->1p&,nAk.oY}6|+s/uoUb}t2{Y/');
define('NONCE_KEY',        'Zf14v>5B yDh_+]06>h@VX`D&F<&d<^V0|%c|YFQ;(w_ztV2D6_W/DX v-q+KbTx');
define('AUTH_SALT',        '!Pte+wV?Vimtb^NCMka- d_zx6y-5n@r)}`%ZictE#u.(W1)Q^ylFA.*JQ7tVV.D');
define('SECURE_AUTH_SALT', '1MjEhz?;!FSAu[8pOWE0I;),)33B02X=hL$4^u5Pqn@{[1 |I-@F0i+9~bf>JR:`');
define('LOGGED_IN_SALT',   'aRP4M)cFT~ &1dk!|PU2wVX:{PP}RV0h&YExbH}. X~9i%O3PLDqusft-|c!$_<b');
define('NONCE_SALT',       'iB*[dHqM>6pLI3JSLC5strfe.s-Hp+O/mu-&gv1F;t,3Zkn<+(;|n?yx?&`.H@~m');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
