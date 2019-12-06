const DevicePlugin = {};
// eslint-disable-next-line no-unused-vars
DevicePlugin.install = function(Vue, options) {
	// 1. add global method or property
	// Vue.myGlobalMethod = function() {
	// 	// some logic ...
	// };

	// 2. add a global asset
	// Vue.directive('my-directive', {
	// 	bind(el, binding, vnode, oldVnode) {
	// 		// some logic ...
	// 	}
	// });

	// 3. inject some component options
	Vue.mixin({
		computed: {
			isMobile: function() {
				if (
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					)
				) {
					return true;
				} else {
					return false;
				}
			}
		}
	});

	// 4. add an instance method
	// Vue.prototype.$myMethod = function(methodOptions) {
	// 	// some logic ...
	// };
};

export { DevicePlugin };
