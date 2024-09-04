<?php

/**
 * software class
 *
 * @method string version
 */
if (!class_exists('software')) {
	class software {

		/**
		 * version
		 */
		public static function version() {
<<<<<<< HEAD
			return '5.3.2';
=======
			return '5.2.4';
>>>>>>> 5.2
		}

		/**
		 * numeric_version
		 */
		public static function numeric_version() {
			$v = explode('.', software::version());
			$n = ($v[0] * 10000 + $v[1] * 100 + $v[2]);
			return $n;
		}

	}
}

?>
