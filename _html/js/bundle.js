/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./allscript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../templates/components/controls/accordeon/acn.ts":
/*!*********************************************************!*\
  !*** ../templates/components/controls/accordeon/acn.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _setDataOptions = _interopRequireDefault(__webpack_require__(/*! utility/setDataOptions */ "./utility/setDataOptions.ts"));

var _getHeight = _interopRequireDefault(__webpack_require__(/*! utility/getHeight */ "./utility/getHeight.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Acn = function Acn(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Acn);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "toggle", void 0);

  _defineProperty(this, "icon", void 0);

  _defineProperty(this, "iconUse", void 0);

  _defineProperty(this, "heading", void 0);

  _defineProperty(this, "content", void 0);

  _defineProperty(this, "container", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    Acn.instances.set(self.el, self);
    self.setHeight();

    if (_this.options.animation === 'dropdown') {
      _this.el.addEventListener('click', function (e) {
        return e.stopPropagation();
      });

      document.addEventListener('click', function () {
        return _this.toggleUp();
      });
    }

    _this.toggle.addEventListener('click', _this.handleClick);

    _this.content.addEventListener('transitionend', function () {
      if (typeof self.options.onTransitionEnd === 'function') {
        self.options.onTransitionEnd(self);
      }
    });
  });

  _defineProperty(this, "setHeight", function () {
    _this.content.style.height = "".concat((0, _getHeight.default)(_this.content), "px");
  });

  _defineProperty(this, "handleClick", function (e) {
    if (_this.el.classList.contains(_this.options.activeClass)) {
      _this.toggleUp();
    } else {
      _this.toggleDown();
    }
  });

  _defineProperty(this, "toggleDown", function () {
    var self = _this;

    if (typeof _this.options.onBeforeOpen === 'function') {
      _this.options.onBeforeOpen(_this);
    }

    var height = (0, _getHeight.default)(_this.content);
    self.el.classList.add(_this.options.activeClass);
    self.toggle.setAttribute('aria-expanded', 'true');
    self.content.style.height = "".concat(height, "px");
    window.addEventListener('transitionend', function removeHeight(event) {
      if (event.propertyName !== 'height') return;
      self.content.style.height = '';
      self.content.style.overflow = '';
      window.removeEventListener('transitionend', removeHeight);
    });

    if (_this.iconUse && _this.options.icons.active && _this.options.icons.default !== _this.options.icons.active) {
      _this.iconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _this.options.icons.active);
    }

    if (typeof _this.options.onOpen === 'function') {
      _this.options.onOpen(_this);
    }
  });

  _defineProperty(this, "toggleUp", function () {
    var self = _this;
    self.toggle.setAttribute('aria-expanded', 'false');
    self.content.style.overflow = 'hidden';
    self.content.style.height = self.content.scrollHeight + 'px';
    window.setTimeout(function () {
      self.content.style.height = '0';
    }, 1);
    window.addEventListener('transitionend', function removeVisibility(event) {
      if (event.propertyName !== 'height') return;
      self.el.classList.remove(self.options.activeClass);
      window.removeEventListener('transitionend', removeVisibility);
    });

    if (_this.iconUse && _this.options.icons.default && _this.options.icons.default !== _this.options.icons.active) {
      _this.iconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _this.options.icons.default);
    }

    if (typeof _this.options.onClose === 'function') {
      _this.options.onClose(_this);
    }
  });

  var defaults = {
    activeClass: 'c-acn_active',
    toggle: '.c-acn__toggle',
    icon: '.c-acn__icon',
    head: '.c-acn__head',
    body: '.c-acn__content',
    container: '.c-acn__inner',
    icons: {
      default: 'images/svg.svg#plus-circle',
      active: 'images/svg.svg#minus-circle'
    },
    group: false,
    animation: 'toggle',
    onBeforeOpen: function onBeforeOpen(instance) {},
    onOpen: function onOpen(instance) {},
    onClose: function onClose(instance) {},
    onTransitionEnd: function onTransitionEnd(instance) {}
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.options = (0, _setDataOptions.default)(this.options, el);
  this.el = el;
  this.toggle = this.el.querySelector(this.options.toggle);
  this.icon = this.el.querySelector(this.options.icon);
  this.iconUse = this.icon ? this.icon.querySelector('use') : null;
  this.heading = this.el.querySelector(this.options.head);
  this.content = this.el.querySelector(this.options.body);
  this.container = this.el.querySelector(this.options.container);
  this.init();
};

_defineProperty(Acn, "instances", new WeakMap());

var _default = Acn;
exports.default = _default;

/***/ }),

/***/ "../templates/components/controls/clock/clock.ts":
/*!*******************************************************!*\
  !*** ../templates/components/controls/clock/clock.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initClock;

var _checkTime = _interopRequireDefault(__webpack_require__(/*! utility/checkTime */ "./utility/checkTime.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initClock(el) {
  window.setInterval(setCurrentDateTime(el), 1000);
  setCity(el);
}

function setCurrentDateTime(el) {
  var elTime = el.querySelector('[data-time]');
  var elDate = el.querySelector('[data-date]');
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date = new Date();
  elTime.innerHTML = "".concat((0, _checkTime.default)(date.getHours()), ":").concat((0, _checkTime.default)(date.getMinutes()));
  elDate.innerHTML = "".concat(weekdays[date.getDay()].substring(0, 3), ", ").concat(months[date.getMonth()].substring(0, 3), " ").concat((0, _checkTime.default)(date.getDate()));
}

function setCity(el) {
  var city = el.querySelector('[data-location]');

  if (city) {
    global.$.ajax({
      url: 'http://ip-api.com/json',
      type: 'POST',
      success: function success(response) {
        city.innerHTML = response.city;
      }
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../templates/components/controls/keyboard/keyboard.ts":
/*!*************************************************************!*\
  !*** ../templates/components/controls/keyboard/keyboard.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _numpad = _interopRequireDefault(__webpack_require__(/*! components/controls/numpad/numpad */ "../templates/components/controls/numpad/numpad.ts"));

var _popup = _interopRequireDefault(__webpack_require__(/*! components/controls/popup/popup */ "../templates/components/controls/popup/popup.ts"));

var _basketList = _interopRequireDefault(__webpack_require__(/*! components/lists/basket-list/basket-list */ "../templates/components/lists/basket-list/basket-list.ts"));

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _attributeToArray = _interopRequireDefault(__webpack_require__(/*! utility/attributeToArray */ "./utility/attributeToArray.ts"));

var _updateControlsList = _interopRequireDefault(__webpack_require__(/*! utility/updateControlsList */ "./utility/updateControlsList.ts"));

var _setPriceFormat = _interopRequireDefault(__webpack_require__(/*! utility/setPriceFormat */ "./utility/setPriceFormat.ts"));

var _handleInputState = _interopRequireDefault(__webpack_require__(/*! utility/handleInputState */ "./utility/handleInputState.ts"));

var _radialLoader = _interopRequireDefault(__webpack_require__(/*! components/loaders/radial-loader/radial-loader */ "../templates/components/loaders/radial-loader/radial-loader.ts"));

var _orderForm2 = _interopRequireDefault(__webpack_require__(/*! components/forms/order-form/order-form */ "../templates/components/forms/order-form/order-form.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Keyboard = function Keyboard(_el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Keyboard);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "panel", void 0);

  _defineProperty(this, "tags", void 0);

  _defineProperty(this, "actions", void 0);

  _defineProperty(this, "input", void 0);

  _defineProperty(this, "reference", void 0);

  _defineProperty(this, "numpad", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    Keyboard.instances.set(self.el, self);
    var numpad = self.el.querySelector('.numpad');

    if (numpad) {
      self.numpad = new _numpad.default(numpad);
    }

    self.state = self.getState();
    (0, _updateControlsList.default)(self.el, self.panel);
    global.$(self.tags).on('click', '.c-badge', function () {
      self.handleTagClick(this);
    });
    global.$(self.el).on('click', '[data-action]', function () {
      var action = global.$(this).attr('data-action');
      var activeItem = global.$('.item-row_active');
      var activeListItem = activeItem.parent();
      var basketList = activeItem.closest('[data-basket]').get(0);

      var basketListInstance = _basketList.default.instances.get(basketList);

      var numpadInstance = self.numpad;

      var PopupInstance = _popup.default.instances.get(self.el);

      var productID = activeItem.length ? activeItem.get(0).getAttribute('data-product-id') : null;
      var basketItemID = activeItem.length ? activeItem.get(0).getAttribute('data-basket-line-id') : null; // let basketID = 'a1';

      var basketID = basketListInstance ? basketListInstance.basket : false;
      var orderForm;
      var basket;
      var orderFormInstance;

      switch (action) {
        case 'save':
          // PopupInstance.close();
          _popup.default.instances.get(document.querySelector('.content')).close();

          if (!self.input) return;
          var shoppingControl = self.input.closest('.shopping-list__item_control');

          var _orderForm = self.input.closest('.order-form');

          var _basket = self.input.closest('[data-basket]');

          if (!_orderForm) return;

          var _orderFormInstance = _orderForm2.default.instances.get(_orderForm);

          var basketInstance = _basketList.default.instances.get(_basket);

          var step = _orderForm.getAttribute('data-step');

          if (shoppingControl) {
            var list = shoppingControl.closest('[data-items-list]');
            var outcome = list.querySelector('[name="OUTCOME"]');
            var income = list.querySelector('[name="INCOME"]');

            switch (step) {
              case 'checkout':
                // console.log(basketInstance, );
                var basketTotal = basketInstance.getTotal();
                var field;
                var prop = self.input.getAttribute('data-prop');
                var item = self.input.closest('.shopping-list__item');
                var isOptional = item.getAttribute('data-optional-value') !== null;

                if (prop === 'price' && !isOptional) {
                  field = item.querySelector('[data-prop="quantity"]');
                  field.value = self.input.value * 100 / basketTotal; // field.val((self.input.value * 100) / valueTotal);

                  (0, _handleInputState.default)(field, 'default');
                } else if (prop === 'quantity') {
                  field = item.querySelector('[data-prop="price"]');
                  field.value = basketTotal / 100 * self.input.value; // field.val((orderFormInstance.state.total / 100) * self.input.value);

                  (0, _handleInputState.default)(field, 'default');
                }

                if (!isOptional) {
                  (0, _handleInputState.default)(self.input, 'default');
                }

                item.classList.remove('shopping-list__item_control-empty');
                item.classList.remove('shopping-list__item_editmode');
                self.setInput(null);
                console.log(basketInstance.getTotal()); // orderFormInstance.setTotal();

                break;
            }
          }

          break;

        case 'copy':
          if (!activeItem) return;
          console.log('BASKET: ' + basketID, basketList);
          basketListInstance.sendRequest('add', {
            productID: productID,
            quantity: 1,
            basketID: basketID,
            item: activeItem.get(0),
            orderId: basketList.getAttribute('data-orderid'),
            props: {
              tags: (0, _attributeToArray.default)(activeItem.get(0).getAttribute('data-tags')),
              code: global.$(activeItem).find('[data-item-code]').length ? global.$(activeItem).find('[data-item-code]').html() : false,
              time: global.$(activeItem).find('[data-item-time]').length ? global.$(activeItem).find('[data-item-time]').find('.c-status span').html() : false,
              tableId: activeItem.closest('.order-form').find('data-title').get(0).innerHTML.replace(/[^0-9]/g, '')
            }
          }); // basketListInstance.handleCopy(activeItem.get(0));

          break;

        case 'delete':
          if (!activeItem) return;
          var orderID = basketList.getAttribute('data-orderid');
          var basketItems = basketListInstance.getItems();
          _orderForm = basketList.closest('.order-form');
          _orderFormInstance = _orderForm2.default.instances.get(_orderForm); // console.log(basketItems);

          if (basketItems.length > 1) {
            basketListInstance.sendRequest('delete', {
              basketItemID: basketItemID,
              basketID: basketID,
              orderId: orderID
            });
          } else {
            _orderFormInstance.deleteOrder(orderID);
          } // basketListInstance.handleDelete(activeItem.get(0));
          // basketListInstance.sendRequest('delete', {basketItemID: basketItemID, basketID: basketID, orderId: orderID});


          break;
        // case 'free':
        //   if (self.numpad) {
        //     self.numpad.input.value = 0;
        //   }
        //   break;
      }
    }); // клик по имени опции

    global.$(self.el).on('click', '[data-name]', function () {
      var name = this.getAttribute('data-name');
      var existingNode = global.$("[name=\"".concat(name, "\"]"));

      if (existingNode.length) {
        var item = existingNode.closest('.shopping-list__item');
        global.$('.shopping-list__item_editmode').each(function () {
          setShoppingItemState(this, 'default', self.numpad);
        });
        setShoppingItemState(item.get(0), 'edit', self.numpad);
      } else {
        var _item = global.$('.shopping-list__item_editmode');

        var newItem = _item.clone();

        newItem.removeClass('shopping-list__item_editmode');
        newItem.addClass('u-hidden');

        _item.closest('.shopping-list').append(newItem);

        var title = global.$(_item).find('.shopping-list__title');
        var value = global.$(_item).find('.shopping-list__value input');
        title.html(this.getAttribute('data-public-name'));
        value.prop('name', name);
      }
    }); // клик по значению опции

    global.$(self.el).on('click', '[data-quantity], [data-value]', function () {
      var value = this.getAttribute('data-value');
      var quantity = this.getAttribute('data-quantity');
      var item = document.querySelector('.shopping-list__item_editmode');
      var input;

      if (quantity) {
        input = item.querySelector('input[data-prop="quantity"]');
        input.focus();
        input.value = quantity;
        item.removeAttribute('data-optional-value');
      } else if (value) {
        input = item.querySelector('input[data-prop="price"]');
        input.focus();
        input.value = value;

        if (value.toLowerCase() === 'optionally') {
          item.setAttribute('data-optional-value', '');
        } else {
          item.removeAttribute('data-optional-value');
        }
      }

      self.setInput(input);
    }); // set offer active

    global.$(self.el).on('click', '.item-row__offers .c-btn', function () {
      var parent = global.$(this).closest('.item-row__offers');
      parent.find('.c-btn_pressed').removeClass('c-btn_pressed');
      global.$(this).addClass('c-btn_pressed');
    }); // select product

    global.$(self.el).on('click', '[data-menu-item]', function (e) {
      if (!self.reference) {
        var firstRef = document.querySelector('[data-keyboard-ref]');

        if (firstRef) {
          self.setReference(firstRef);
        } else {
          return;
        }
      }

      ;
      var basket = global.$(self.reference).closest('[data-basket]').get(0);

      var basketInstance = _basketList.default.instances.get(basket);

      var hasOffers = this.classList.contains('item-row_offers');
      var offer = hasOffers ? global.$(this).find('.c-btn_pressed') : null;
      var data = {
        tags: this.getAttribute('data-tags'),
        productId: this.getAttribute('data-product-id'),
        code: global.$(this).find('[data-item-code]').length ? global.$(this).find('[data-item-code]').html() : false,
        title: global.$(this).find('[data-item-title]').length ? global.$(this).find('[data-item-title]').html() : false,
        time: global.$(this).find('[data-item-time]').length ? global.$(this).find('[data-item-time]').find('.c-status span').html() : false,
        price: hasOffers ? (0, _setPriceFormat.default)(offer.find('span').html(), 'formatted') : (0, _setPriceFormat.default)(global.$(this).find('[data-item-price]').html(), 'formatted'),
        orderId: basket.getAttribute('data-orderid'),
        tableId: global.$(basket).closest('.order-form').find('[data-title]').get(0).innerHTML.replace(/[^0-9]/g, '')
      };

      if (hasOffers) {
        data.offer = offer.attr('data-title');
      }

      var basketID = basketInstance.basket; // let template = document.querySelector('[id^="tmpl-basket-item"]').innerHTML;
      // basketInstance.addItem(template, data, ['<%', '%>']);
      // basketInstance.sendRequest('add', {productID: data.productId, quantity: 1, basketID: 'a1'});

      basketInstance.sendRequest('add', {
        productID: data.productId,
        quantity: 1,
        basketID: basketID,
        orderId: data.orderId,
        props: {
          tags: (0, _attributeToArray.default)(data.tags),
          code: data.code,
          time: data.time,
          tableId: data.tableId
        }
      }); // let tags = this.getAttribute('data-tags');

      var tagsParsed = (0, _attributeToArray.default)(data.tags);
      console.log(tagsParsed);
      self.renderTags(tagsParsed); // recommendations

      var recommendations = document.querySelector('.tiles-menu__panel_recommendations');
      var dataRecom = this.getAttribute('data-linked-items');

      if (recommendations && dataRecom) {
        self.showRecommendations(recommendations, this);
      }
    });
    var rec = document.querySelector('.tiles-menu__panel_recommendations');

    if (rec) {
      var recToggle = rec.querySelector('.tiles-menu__panel-head');
      recToggle && recToggle.addEventListener('click', function () {
        self.closeRecommendations(rec);
      });
    }

    var tilesItems = document.querySelectorAll('.tiles-menu__item_multilevel');

    for (var i = 0; i < tilesItems.length; i++) {
      new _popup.default(tilesItems[i], {
        activeClass: 'tiles-menu__item_opened',
        popup: '.tiles-menu__panel',
        toggle: '.tile-item',
        widthRef: '.tiles-menu',
        beforeAction: function beforeAction(instance) {
          instance.widthRef.style.overflow = 'hidden';
        },
        onInit: function onInit(instance) {
          var closeToggle = instance.popup.querySelector('.item-row_heading');
          closeToggle && closeToggle.addEventListener('click', function () {
            instance.close();
            instance.widthRef.style.overflow = '';
          });
        },
        onOpen: function onOpen(instance) {
          var scrollableParent = global.$(instance.el).closest('[data-simplebar-thin]').get(0);
          var isLoaded = instance.el.classList.contains('u-loaded');

          if (!isLoaded) {
            var iblockID = instance.el.getAttribute('data-iblock-id');
            var sectionID = instance.el.getAttribute('data-id');
            var loader = new _radialLoader.default(instance.popup);
            global.$.ajax({
              url: '/ajax/getSectionItems.php',
              method: 'POST',
              data: {
                iblockID: iblockID,
                sectionID: sectionID
              },
              success: function success(response) {
                // console.log(response);
                global.$(instance.popup).append(response);
                instance.el.classList.add('u-loaded');
                loader.setState('hidden');
              }
            });
          }

          if (scrollableParent) {
            scrollableParent.classList.add('disable-overflow');
          }
        },
        onClose: function onClose(instance) {
          var scrollableParent = global.$(instance.el).closest('[data-simplebar-thin]').get(0);

          if (scrollableParent) {
            scrollableParent.classList.remove('disable-overflow');
          }
        }
      });
    }
  });

  _defineProperty(this, "renderTags", function () {
    var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var self = _this;
    self.tags.innerHTML = '';
    var taglist = document.createElement('ul');
    taglist.className = 'badges-list u-row';
    tags.forEach(function (tag) {
      var tagTemplate = "\n        <li class=\"badges-list__item u-col\">\n            <div class=\"c-badge ".concat(tag.active ? 'c-badge_tertiary-alt' : 'c-badge_tertiary', " c-badge_sm\">").concat(tag.title, "</div>\n        </li>\n      ");
      global.$(taglist).append(tagTemplate);
    });
    global.$(self.tags).append(taglist);
  });

  _defineProperty(this, "handleTagClick", function (tag) {
    var self = _this;
    var tagsArray = [];
    var list = global.$(tag).closest('.badges-list');
    var tags = list.find('.c-badge');

    if (tag.classList.contains('c-badge_tertiary')) {
      tag.classList.remove('c-badge_tertiary');
      tag.classList.add('c-badge_tertiary-alt');
    } else if (tag.classList.contains('c-badge_tertiary-alt')) {
      tag.classList.remove('c-badge_tertiary-alt');
      tag.classList.add('c-badge_tertiary');
    }

    tags.each(function () {
      tagsArray.push({
        title: this.innerHTML.trim(),
        active: this.classList.contains('c-badge_tertiary-alt')
      });
    });

    if (typeof self.options.onTagClick === 'function') {
      self.options.onTagClick(self, tagsArray);
    }
  });

  _defineProperty(this, "getState", function () {
    var state = _this.el.getAttribute('data-state');

    return state;
  });

  _defineProperty(this, "setState", function (state) {
    var self = _this;
    var controls = self.panel.querySelectorAll('.controls-list');
    self.state = state;

    for (var i = 0; i < controls.length; i++) {
      (0, _updateControlsList.default)(self.el, controls);
    }
  });

  _defineProperty(this, "setPanelState", function (state) {
    var self = _this;

    var popupInstance = _popup.default.instances.get(document.querySelector('.content'));

    if (popupInstance && !popupInstance.isOpened) {
      return;
    }

    switch (state) {
      case 'visible':
        self.el.classList.add(self.options.panelActiveClass);
        break;

      case 'hidden':
        self.el.classList.add(self.options.panelActiveClass);
        break;
    }
  });

  _defineProperty(this, "setInput", function (input) {
    var self = _this;
    var oldInput = self.input;
    self.input = input;

    if (self.numpad) {
      self.numpad.input = input;
    } // if (typeof self.options.onInputSet === 'function') {
    //   self.options.onInputSet(self, oldInput);
    // }

  });

  _defineProperty(this, "setReference", function (el) {
    var self = _this;
    var oldRef = self.reference;
    self.reference = el; // if (typeof self.options.onReferenceSet === 'function') {
    //   self.options.onReferenceSet(self, oldRef);
    // }
  });

  _defineProperty(this, "showRecommendations", function (el, item) {
    var iblockID = item.getAttribute('data-iblock-id');
    var data = item.getAttribute('data-linked-items');
    var menu = el.querySelector('.inner-menu');
    global.$.ajax({
      url: '/ajax/getSectionItems.php',
      method: 'POST',
      data: {
        iblockID: iblockID,
        items: (0, _attributeToArray.default)(data)
      },
      success: function success(response) {
        if (menu) {
          menu.parentElement.removeChild(menu);
        }

        global.$(el).append(response);
      }
    });
    el.parentElement.style.overflow = 'hidden';
    el.classList.add('tiles-menu__panel_active');
  });

  _defineProperty(this, "closeRecommendations", function (el) {
    el.parentElement.style.overflow = '';
    el.classList.remove('tiles-menu__panel_active');
    var menu = el.querySelector('.inner-menu');

    if (menu) {
      menu.parentElement.removeChild(menu);
    }
  });

  var defaults = {};
  this.options = (0, _merge.default)(defaults, options);
  this.el = _el;
  this.panel = this.el.querySelector('.keyboard-panel');
  this.tags = this.el.querySelector('.keyboard-panel__tags');
  this.actions = this.el.querySelectorAll('[data-action]');
  this.input = null;
  this.reference = null;
  this.numpad = null;
  this.state = null;
  this.init();
};

_defineProperty(Keyboard, "instances", new WeakMap());

var _default = Keyboard;
exports.default = _default;

function setShoppingItemState(item, state) {
  var numpad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var editClass = 'shopping-list__item_editmode';
  var isOptional = item.getAttribute('data-optional-value') !== null;

  switch (state) {
    case 'edit':
      item.classList.add(editClass);

      if (item.classList.contains('shopping-list__item_multiple-inputs')) {
        var value = global.$(item).find('.shopping-list__value');
        var valueInput = value.find('input');

        if (numpad && document.activeElement.nodeName.toLowerCase() === 'input') {
          numpad.setInput(document.activeElement);
        } else {
          numpad.setInput(valueInput.get(0));
        }

        if (!isOptional) {
          (0, _handleInputState.default)(numpad.input, 'edit');
        }
      } else {
        var _value = global.$(item).find('.shopping-list__value');

        var _valueInput = _value.find('input');

        if (numpad) {
          numpad.setInput(_valueInput.get(0));
        }

        if (!isOptional) {
          (0, _handleInputState.default)(_valueInput, 'edit');
        }

        var title = global.$(item).find('.shopping-list__title');

        if (title.attr('data-focus-text')) {
          title.html(title.attr('data-focus-text'));
        }
      }

      break;

    case 'default':
      global.$(item).removeClass('shopping-list__item_editmode');
      var inputs = global.$(this).find('input');

      if (!isOptional) {
        inputs.each(function () {
          (0, _handleInputState.default)(this, 'default');
        });
      }

      break;
  }
} // function showRecommendations (el: HTMLElement, item: HTMLElement) {
//   let iblockID = item.getAttribute('data-iblock-id');
//   let data = item.getAttribute('data-linked-items');
//   let menu = el.querySelector('.inner-menu');
//   global.$.ajax({
//     url: '/ajax/getSectionItems.php',
//     method: 'POST',
//     data: {iblockID: iblockID, items: data},
//     success: function (response) {
//       if (menu) {
//         menu.parentElement.removeChild(menu);
//       }
//       global.$(el).append(response);
//     }
//   });
//   el.parentElement.style.overflow = 'hidden';
//   el.classList.add('tiles-menu__panel_active');
// }
// function closeRecommendations (el: HTMLElement, data: []) {
//   el.parentElement.style.overflow = '';
//   el.classList.remove('tiles-menu__panel_active');
//   let menu = el.querySelector('.inner-menu');
//   if (menu) {
//     menu.parentElement.removeChild(menu);
//   }
// }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../templates/components/controls/numpad/numpad.ts":
/*!*********************************************************!*\
  !*** ../templates/components/controls/numpad/numpad.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Numpad = function Numpad(_el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Numpad);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "input", void 0);

  _defineProperty(this, "buttons", void 0);

  _defineProperty(this, "keyCodes", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    Numpad.instances.set(self.el, self);

    for (var i = 0; i < self.buttons.length; i++) {
      self.buttons[i].addEventListener('click', function () {
        self.handleClick(this);
      });
    }

    document.addEventListener('keypress', self.handleKeyPress);
  });

  _defineProperty(this, "handleClick", function (el) {
    if (!_this.input) return;
    var self = _this;
    var key = el.getAttribute('data-action');

    _this.setState(key);
  });

  _defineProperty(this, "handleKeyPress", function (e) {
    var self = _this;
    if (!self.input) return;
    var target = e.currentTarget;
    console.log(target, e.which);

    switch (e.which) {
      case 48:
      case 96:
        _this.setState('0');

        break;

      case 49:
      case 97:
        _this.setState('1');

        break;

      case 50:
      case 98:
        _this.setState('2');

        break;

      case 51:
      case 99:
        _this.setState('3');

        break;

      case 52:
      case 100:
        _this.setState('4');

        break;

      case 53:
      case 101:
        _this.setState('5');

        break;

      case 54:
      case 102:
        _this.setState('6');

        break;

      case 55:
      case 103:
        _this.setState('7');

        break;

      case 56:
      case 104:
        _this.setState('8');

        break;

      case 57:
      case 105:
        _this.setState('9');

        break;

      case 8:
        _this.setState('backspace');

        break;
    }
  });

  _defineProperty(this, "setState", function (key) {
    var self = _this;
    if (!self.input) return;

    switch (key) {
      case 'backspace':
        self.input.value = self.input.value.slice(0, -1);
        self.input.dispatchEvent(new Event('input'));
        break;

      default:
        if (self.input.maxLength > -1 && self.input.value.length < self.input.maxLength || self.input.maxLength === -1) {
          self.input.value += key;
          self.input.dispatchEvent(new Event('input'));
        }

        break;
    }
  });

  _defineProperty(this, "setInput", function (input) {
    var oldInput = _this.input;
    _this.input = input;

    if (typeof _this.options.onInputSet === 'function') {
      _this.options.onInputSet(self, oldInput);
    }
  });

  var defaults = {
    onInputSet: function onInputSet(instance, prevInput) {}
  };

  if (!_el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.el = _el;
  this.input = this.options.input;
  this.buttons = this.el.querySelectorAll('.numpad__btn');
  this.keyCodes = {
    backspace: 8,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57
  };
  this.init();
};

_defineProperty(Numpad, "instances", new WeakMap());

var _default = Numpad;
exports.default = _default;

/***/ }),

/***/ "../templates/components/controls/popup/popup.ts":
/*!*******************************************************!*\
  !*** ../templates/components/controls/popup/popup.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getViewport = _interopRequireDefault(__webpack_require__(/*! utility/getViewport */ "./utility/getViewport.ts"));

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _throttle = _interopRequireDefault(__webpack_require__(/*! utility/throttle */ "./utility/throttle.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popup = function Popup(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Popup);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "toggle", void 0);

  _defineProperty(this, "popup", void 0);

  _defineProperty(this, "widthRef", void 0);

  _defineProperty(this, "isOpened", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    Popup.instances.set(self.el, self);
    self.toggle && self.toggle.addEventListener('click', function () {
      if (typeof self.options.beforeAction === 'function') {
        self.options.beforeAction(self);
      }

      self.isOpened ? self.close() : self.open();
    });
    document.addEventListener('click', self.handleClickOutside);
    window.addEventListener('resize', (0, _throttle.default)(function () {
      self.close();
    }, 500));

    if (typeof _this.options.onInit === 'function') {
      _this.options.onInit(self);
    }
  });

  _defineProperty(this, "open", function () {
    var self = _this;
    self.setWidth();
    self.el.classList.add(self.options.activeClass);
    self.position();
    self.popup.style.opacity = '1';
    self.isOpened = true;

    if (typeof _this.options.onOpen === 'function') {
      _this.options.onOpen(self);
    }
  });

  _defineProperty(this, "close", function () {
    var self = _this;
    self.setWidth();
    self.popup.style.cssText = '';
    self.el.classList.remove(self.options.activeClass);
    self.isOpened = false;

    if (typeof _this.options.onClose === 'function') {
      _this.options.onClose(self);
    }
  });

  _defineProperty(this, "handleClickOutside", function (e) {
    var self = _this;
    var target = e.target;

    if (self.isOpened && !self.el.contains(target)) {
      self.close();
    }
  });

  _defineProperty(this, "setWidth", function () {
    var self = _this;
    var width = self.widthRef ? self.widthRef.offsetWidth : (0, _getViewport.default)().width;
    self.popup.style.width = "".concat(width, "px");
  });

  _defineProperty(this, "position", function () {
    var self = _this;
    var elDims = self.popup.getBoundingClientRect();
    var refDims;
    var diff;
    refDims = self.widthRef.getBoundingClientRect();
    diff = refDims.left - elDims.left; // console.log(elDims.top, refDims.top, refDims.top - elDims.top);

    self.popup.style.left = "".concat(diff, "px");

    if (typeof _this.options.onPosition === 'function') {
      _this.options.onPosition(self);
    }
  });

  var defaults = {
    activeClass: 'c-popup_active',
    toggle: '.c-popup__toggle',
    popup: '.c-popup__popup',
    widthRef: 'c-popup',
    onInit: function onInit(instance) {},
    onOpen: function onOpen(instance) {},
    onClose: function onClose(instance) {},
    beforeAction: function beforeAction(instance) {},
    onPosition: function onPosition(instance) {},
    onResize: function onResize(instance) {}
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.el = el;
  this.toggle = this.el.querySelector(this.options.toggle);
  this.popup = this.el.querySelector(this.options.popup);
  this.widthRef = this.options.widthRef ? document.querySelector(this.options.widthRef) : document.documentElement;
  this.isOpened = false;
  this.init();
};

_defineProperty(Popup, "instances", new WeakMap());

var _default = Popup;
exports.default = _default;

/***/ }),

/***/ "../templates/components/controls/progressbar/progressbar.ts":
/*!*******************************************************************!*\
  !*** ../templates/components/controls/progressbar/progressbar.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _setDataOptions = _interopRequireDefault(__webpack_require__(/*! utility/setDataOptions */ "./utility/setDataOptions.ts"));

var _checkTime = _interopRequireDefault(__webpack_require__(/*! utility/checkTime */ "./utility/checkTime.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressBar = function ProgressBar(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, ProgressBar);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "bar", void 0);

  _defineProperty(this, "timer", void 0);

  _defineProperty(this, "interval", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    ProgressBar.instances.set(self.el, self);
    self.setState();

    if (!_this.state.stopped) {
      _this.interval = window.setInterval(function () {
        self.setState();
      }, 1000);
    }
  });

  _defineProperty(this, "stop", function () {
    if (!_this.interval) return;
    clearInterval(_this.interval);
    _this.state.stopped = true;
  });

  _defineProperty(this, "setState", function () {
    var self = _this;

    if (self.bar) {
      var currentWidth = self.state.current / self.options.limit * 100;
      var maxWidth = 100;
      self.bar.style.width = "".concat(currentWidth > maxWidth ? maxWidth : currentWidth, "%");
    }

    if (self.timer) {
      var time = self.getTime(self.state.current);
      self.timer.innerHTML = self.formatTime(time, self.options.timeFormat);
    }

    self.state.current = self.state.current + 1;

    if (typeof self.options.onTick === 'function') {
      self.options.onTick(self);
    }
  });

  _defineProperty(this, "getTime", function (seconds) {
    var days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  });

  _defineProperty(this, "formatTime", function (timeObj, format) {
    var result = format;

    for (var _key in timeObj) {
      result = result.replace(_key, (0, _checkTime.default)(timeObj[_key]));
    }

    return result;
  });

  var defaults = {
    bar: '[data-bar]',
    timer: '[data-timer]',
    start: 0,
    current: 0,
    limit: 10000,
    timeFormat: 'hours:minutes:seconds',
    stop: false,
    onTick: function onTick(instance) {}
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.options = (0, _setDataOptions.default)(this.options, el);
  this.el = el;
  this.bar = this.el.querySelector(this.options.bar);
  this.timer = this.el.querySelector(this.options.timer);
  this.interval = 0;
  this.state = {
    current: parseInt(this.options.current.toString(), 10),
    stopped: this.options.stop
  };
  this.init();
};

_defineProperty(ProgressBar, "instances", new WeakMap());

var _default = ProgressBar;
exports.default = _default;

/***/ }),

/***/ "../templates/components/controls/tabs/tabs.ts":
/*!*****************************************************!*\
  !*** ../templates/components/controls/tabs/tabs.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _setDataOptions = _interopRequireDefault(__webpack_require__(/*! utility/setDataOptions */ "./utility/setDataOptions.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs = function Tabs(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Tabs);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "tablist", void 0);

  _defineProperty(this, "tabs", void 0);

  _defineProperty(this, "tabItems", void 0);

  _defineProperty(this, "contents", void 0);

  _defineProperty(this, "panels", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;

    if (self.options.changeURL === true) {
      var targetID = window.location.hash.substr(1);
      var targetTab = targetID ? _this.tablist.querySelector("#".concat(targetID)) : _this.tabs[0];
      var targetIndex = Array.prototype.indexOf.call(_this.tabs, targetTab);
      self.switchTab(targetIndex);
    }

    Array.prototype.forEach.call(_this.tabs, function (tab, i) {
      tab.addEventListener('click', _this.handleClick);
      tab.addEventListener('keydown', _this.handleKeyPress);
    });

    if (typeof _this.options.onInit === 'function') {
      _this.options.onInit(self);
    }
  });

  _defineProperty(this, "getActiveTab", function () {
    var activeTab = _this.tablist.querySelector('[aria-selected="true"]');

    var tabIndex = Array.prototype.indexOf.call(_this.tabs, activeTab);
    return tabIndex;
  });

  _defineProperty(this, "handleClick", function (e) {
    var self = _this;
    var target = e.currentTarget;
    var index = Array.prototype.indexOf.call(self.tabs, target);
    self.switchTab(index);
    e.preventDefault();
  });

  _defineProperty(this, "handleKeyPress", function (e) {
    var self = _this;
    var target = e.currentTarget; // Get the index of the current tab in the tabs node list

    var index = Array.prototype.indexOf.call(_this.tabs, target); // Work out which key the user is pressing and
    // Calculate the new tab's index where appropriate

    var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

    if (dir !== null) {
      e.preventDefault(); // If the down key is pressed, move focus to the open panel,
      // otherwise switch to the adjacent tab

      dir === 'down' ? _this.panels[index].focus() : _this.tabs[dir] ? self.switchTab(dir) : void 0;
    }
  });

  _defineProperty(this, "switchTab", function () {
    var newTab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var self = _this;
    var oldTab = self.state.activeTab;
    if (oldTab === newTab) return;
    self.tabs[oldTab].setAttribute('tabindex', '-1');
    self.tabs[oldTab].setAttribute('aria-selected', 'false');
    self.panels[oldTab].classList.add(self.options.inactiveClass);
    self.tabs[newTab].focus();
    self.tabs[newTab].removeAttribute('tabindex');
    self.tabs[newTab].setAttribute('aria-selected', 'true');
    self.panels[newTab].classList.remove(self.options.inactiveClass);

    if (self.options.changeURL === true) {
      history.pushState(null, '', '#' + self.tabs[newTab].getAttribute('id'));
    }

    self.state.activeTab = newTab;

    if (typeof _this.options.onChange === 'function') {
      _this.options.onChange(self);
    }
  });

  var defaults = {
    tablistClass: 'c-tabs__tablist',
    contentClass: 'c-tabs__contents',
    tabClass: 'c-tabs__tab',
    linkClass: 'c-tabs__link',
    panelClass: 'c-tabs__section',
    inactiveClass: 'd-none',
    changeURL: false,
    onInit: function onInit(instance) {},
    onChange: function onChange(instance) {}
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.options = (0, _setDataOptions.default)(this.options, el);
  this.el = el;
  this.tablist = this.el.querySelector(".".concat(this.options.tablistClass));
  this.tabs = this.tablist.querySelectorAll(".".concat(this.options.linkClass));
  this.tabItems = this.tablist.querySelectorAll(".".concat(this.options.tabClass));
  this.contents = this.el.querySelector(".".concat(this.options.contentClass));
  this.panels = this.contents.querySelectorAll(".".concat(this.options.panelClass));
  this.state = {
    activeTab: this.getActiveTab()
  };
  this.init();
};

var _default = Tabs;
exports.default = _default;

/***/ }),

/***/ "../templates/components/controls/time-tracker/time-tracker.ts":
/*!*********************************************************************!*\
  !*** ../templates/components/controls/time-tracker/time-tracker.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _updateControlsList = _interopRequireDefault(__webpack_require__(/*! utility/updateControlsList */ "./utility/updateControlsList.ts"));

var _setStateStatus = _interopRequireDefault(__webpack_require__(/*! utility/setStateStatus */ "./utility/setStateStatus.ts"));

var _progressbar = _interopRequireDefault(__webpack_require__(/*! components/controls/progressbar/progressbar */ "../templates/components/controls/progressbar/progressbar.ts"));

var _setControlState = _interopRequireDefault(__webpack_require__(/*! utility/setControlState */ "./utility/setControlState.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;

var TimeTracker = function TimeTracker(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, TimeTracker);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "activePanel", void 0);

  _defineProperty(this, "controlsList", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    self.setDayStatus(self.getDayStatus());
    self.el.addEventListener('click', self.handleClick);
    self.state.breakDuration = self.el.getAttribute('data-break-duration');

    if (['created', 'closed'].indexOf(self.state.dayStatus) > -1) {
      _this.showPanel('open');
    } else if (self.state.dayStatus === 'break') {
      _this.showPanel('break-progress');
    }
  });

  _defineProperty(this, "handleClick", function (e) {
    var self = _this;
    var control;
    var action;

    if (control = e.target.closest('[data-action]')) {
      // обычные кнопки
      action = control.getAttribute('data-action');

      _this.handleAction(action, {
        anchor: control
      });
    } else if (control = e.target.closest('.c-overlay__btn')) {
      // кнопка закрытия панели
      e.stopPropagation();
      self.destroyPanel();
    } else {
      return;
    }
  });

  _defineProperty(this, "handleAction", function (action) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var self = _this;
    var sendRequest = true;
    var data = {
      action: action
    };

    switch (action) {
      case 'break-start':
        sendRequest = false;
        self.showPanel(action);
        break;

      case 'break':
        if (params.anchor) {
          (0, _setControlState.default)(params.anchor, 'disabled', 'c-btn_disabled');
        }

        if (self.state.dayStatus === 'opened' && params.break_duration) {
          data.break_duration = params.break_duration;
        }

        break;

      case 'close-start':
        sendRequest = false;
        self.showPanel(action);
        break;

      case 'close':
        if (params.anchor) {
          (0, _setControlState.default)(params.anchor, 'disabled', 'c-btn_disabled');
        }

      case 'open':
        break;
    }

    if (sendRequest) {
      global.$.ajax({
        url: '/ajax/handleTimeTracking.php',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function success(response) {
          console.log(response, action);

          if (response.STATUS === 'success') {
            self.el.setAttribute('data-state', response.DAY_STATUS);
            (0, _updateControlsList.default)(self.el, self.controlsList);

            if (action === 'open') {
              self.destroyPanel();
            } else if (response.DAY_STATUS === 'break' && action === 'break') {
              setTimeout(function () {
                self.destroyPanel();
                window.location.href = '/?logout=yes';
              }, 1000);
            } else if (response.DAY_STATUS === 'opened' && action === 'break') {
              setTimeout(function () {
                self.destroyPanel();
              }, 1000);
            } else if (action === 'close') {
              if (self.activePanel) {
                var title = self.activePanel.querySelector('.tracker-panel__title');
                var attrs = self.activePanel.querySelectorAll('.timers-list__label_secondary');
                var controls = self.activePanel.querySelector('.tracker-panel__controls');
                title.innerHTML = 'Your day is closed!';
                controls.classList.add('u-hidden');

                for (var i = 0; i < attrs.length; i++) {
                  attrs[i].classList.add('timers-list__label_dimmed');
                }
              }

              setTimeout(function () {
                self.destroyPanel();
                window.location.href = '/?logout=yes';
              }, 1000);
            }
          }
        },
        error: function error(response) {
          console.log(response);
        },
        complete: function complete() {
          if (params.anchor) {
            (0, _setControlState.default)(params.anchor, 'default', 'c-btn_disabled');
          }
        }
      });
    }
  });

  _defineProperty(this, "showPanel", function (panel) {
    var self = _this;
    var template = document.querySelector("[id^=\"tmpl-tracker-panel-".concat(panel, "\"]"));
    var content = document.querySelector('.content');
    var data = {};
    var result;
    if (!template || !content) return;

    switch (panel) {
      case 'open':
        data = {
          dayLength: self.options.dayLength
        };
        result = global.$(global.Mustache.render(template.innerHTML, data, {}, ['<%', '%>'])).appendTo(content).get(0);
        break;

      case 'break-start':
        data = {
          breaks: self.options.breaks
        };
        result = global.$(global.Mustache.render(template.innerHTML, data, {}, ['<%', '%>'])).appendTo(content).get(0);
        result.addEventListener('click', function (e) {
          var control = e.target.closest('.timers-list__label');
          var item;
          var input;
          if (!control) return;
          item = control.closest('.timers-list__item');
          input = item.querySelector('[name="BREAK_TIME"]');
          self.state.breakDuration = input.value;
          self.handleAction('break', {
            break_duration: input.value
          });
        });
        break;

      case 'break-progress':
        data = {
          timePassed: self.el.getAttribute('data-current-time') - self.el.getAttribute('data-break-start'),
          breakLength: self.state.breakDuration,
          breakLengthSec: self.state.breakDuration * 60 // длительность перерыва в секундах

        };
        result = global.$(global.Mustache.render(template.innerHTML, data, {}, ['<%', '%>'])).appendTo(content).get(0);
        var progress = result.querySelector('[data-progressbar]');
        var progressBarStatuses = {
          error: 'u-color-error'
        };
        new _progressbar.default(progress, {
          onTick: function onTick(instance) {
            var timePassed = instance.state.current / instance.options.limit * 100;

            if (timePassed > 100) {
              (0, _setStateStatus.default)(instance.el, 'error', progressBarStatuses);
            }
          }
        });
        break;

      case 'close-start':
        data = {
          data: [{
            key: 'At Work',
            value: '6h'
          }, {
            key: 'Break',
            value: '1h'
          }, {
            key: 'At Work Left',
            value: '2h'
          }, {
            key: 'Openned Tables',
            value: '15'
          }, {
            key: 'Orders',
            value: '34'
          }]
        };
        result = global.$(global.Mustache.render(template.innerHTML, data, {}, ['<%', '%>'])).appendTo(content).get(0);
        break;
    }

    if (result) {
      result.addEventListener('click', self.handleClick);
      _this.activePanel = result;
    }
  });

  _defineProperty(this, "destroyPanel", function () {
    if (_this.activePanel && _this.activePanel.parentElement) {
      _this.activePanel.parentElement.removeChild(_this.activePanel);
    }
  });

  _defineProperty(this, "getDayStatus", function () {
    return _this.el.getAttribute('data-state') || 'created';
  });

  _defineProperty(this, "setDayStatus", function (status) {
    _this.state.dayStatus = status;
    (0, _updateControlsList.default)(_this.el, _this.controlsList);
  });

  var defaults = {
    dayLength: '8h',
    breaks: [{
      index: 1,
      value: 5
    }, {
      index: 2,
      value: 15
    }, {
      index: 3,
      value: 30
    }, {
      index: 4,
      value: 60
    }]
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.el = el;
  this.controlsList = this.el.querySelector('.buttons-menu');
  this.activePanel = null;
  this.state = {
    dayStatus: 'created',
    breakDuration: null
  };
  this.init();
};

var _default = TimeTracker;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../templates/components/forms/order-form/order-form.ts":
/*!**************************************************************!*\
  !*** ../templates/components/forms/order-form/order-form.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _basketList = _interopRequireDefault(__webpack_require__(/*! components/lists/basket-list/basket-list */ "../templates/components/lists/basket-list/basket-list.ts"));

var _setControlState = _interopRequireDefault(__webpack_require__(/*! utility/setControlState */ "./utility/setControlState.ts"));

var _setPriceFormat = _interopRequireDefault(__webpack_require__(/*! utility/setPriceFormat */ "./utility/setPriceFormat.ts"));

var _keyboard = _interopRequireDefault(__webpack_require__(/*! components/controls/keyboard/keyboard */ "../templates/components/controls/keyboard/keyboard.ts"));

var _radialLoader = _interopRequireDefault(__webpack_require__(/*! components/loaders/radial-loader/radial-loader */ "../templates/components/loaders/radial-loader/radial-loader.ts"));

var _setData = _interopRequireDefault(__webpack_require__(/*! utility/setData */ "./utility/setData.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderForm = function OrderForm(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, OrderForm);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "controls", void 0);

  _defineProperty(this, "info", void 0);

  _defineProperty(this, "count", void 0);

  _defineProperty(this, "total", void 0);

  _defineProperty(this, "views", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    OrderForm.instances.set(self.el, self);
    self.state.stage = self.el.getAttribute('data-stage');

    if (self.state.stage === 'table') {} else if (self.state.stage === 'table_update') {} else {
      self.state.view = self.el.getAttribute('data-view') ? self.el.getAttribute('data-view') : 'overall';
      self.state.basket = self.getBasketCode();
      self.setTotal();
      global.$(self.el).on('click', '.order-filter__item [data-view]', function (e) {
        var newView = e.target.getAttribute('data-view');
        if (newView === self.state.view || e.target.classList.contains('c-btn_disabled')) return;
        self.setView(newView);
        self.loadBasket({
          action: 'change_view',
          handleView: true
        }); // self.getData(newView);
      }); // ajaxBasket('load', 0, 0, 1, 'a2', false, function () {
      //   self.setTotal();
      // });
      // loadBasket(self.state.basket, function () {
      //   self.setTotal();
      // });]
      // self.loadBasket();
    }

    self.el.addEventListener('submit', self.handleSubmit);
  });

  _defineProperty(this, "handleSubmit", function (e) {
    var self = _this;
    var sendRequest = true;
    var url;
    var data;
    var baskets;
    var basketID = [];
    var orders;
    var redirect = self.el.getAttribute('data-redirect') || '';
    e.preventDefault();

    switch (self.state.stage) {
      case 'table':
        url = '/ajax/setTable.php';
        data = global.$(self.el).serializeArray();
        data.push({
          name: 'action',
          value: 'open'
        });
        break;

      case 'table_update':
        url = '/ajax/setTable.php';
        data = global.$(self.el).serializeArray();
        data.push({
          name: 'action',
          value: 'update'
        });
        break;

      case 'order':
        // place order
        url = '';
        baskets = self.el.querySelectorAll('[data-basket]');
        orders = [];

        for (var i = 0; i < baskets.length; i++) {
          basketID.push(baskets[i].getAttribute('data-basket'));
          var orderID = baskets[i].getAttribute('data-orderid');

          if (orderID !== null) {
            orders.push(orderID);
          }
        }

        break;

      default:
        sendRequest = false;
        break;
    }

    if (self.state.stage === 'order') {
      var loader = new _radialLoader.default(self.el);
      timePlaceOrder(basketID, orders, {
        time_start: new Date()
      }, function (response) {
        var submitBtn = self.el.querySelector('.order-btn');
        var msg = '';

        if (response.STATUS === 'success') {
          submitBtn.classList.remove('c-btn_error');
          submitBtn.classList.add('c-btn_success');
          msg = self.options.i18n[document.documentElement.lang] && self.options.i18n[document.documentElement.lang][self.state.stage] ? self.options.i18n[document.documentElement.lang][self.state.stage][response.STATUS] : self.options.i18n[document.documentElement.lang]['default'][response.STATUS];
          submitBtn.textContent = msg;

          if (redirect.length > 0) {
            for (var key in response) {
              console.log(redirect.indexOf("#".concat(key, "#")), key, response[key]);

              if (redirect.indexOf("#".concat(key, "#")) > -1) {
                redirect = redirect.replace("#".concat(key, "#"), response[key]);
              }
            }

            console.log(redirect);
            window.setTimeout(function () {
              window.location.href = redirect;
            }, 1000);
          }
        } else if (response.STATUS === 'error') {
          submitBtn.classList.remove('c-btn_success');
          submitBtn.classList.add('c-btn_error');
          var prevText = submitBtn.textContent;
          msg = self.options.i18n[document.documentElement.lang] && self.options.i18n[document.documentElement.lang][self.state.stage] ? self.options.i18n[document.documentElement.lang][self.state.stage][response.STATUS] : self.options.i18n[document.documentElement.lang]['default'][response.STATUS];
          submitBtn.textContent = msg;
          window.setTimeout(function () {
            submitBtn.classList.remove('c-btn_error');
            submitBtn.textContent = prevText;
          }, 1000);
        }
      }, {
        onComplete: function onComplete() {
          loader.setState('hidden');
        }
      });
    } else if (self.state.stage !== 'order' && sendRequest) {
      var _loader = new _radialLoader.default(self.el);

      global.$.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'json',
        success: function success(response) {
          console.log(response);
          var submitBtn = self.el.querySelector('.order-btn');
          var msg = '';

          if (response.STATUS === 'success') {
            submitBtn.classList.remove('c-btn_error');
            submitBtn.classList.add('c-btn_success');
            msg = self.options.i18n[document.documentElement.lang] && self.options.i18n[document.documentElement.lang][self.state.stage] ? self.options.i18n[document.documentElement.lang][self.state.stage][response.STATUS] : self.options.i18n[document.documentElement.lang]['default'][response.STATUS];
            submitBtn.textContent = msg;

            if (redirect.length > 0) {
              for (var key in response) {
                console.log(redirect.indexOf("#".concat(key, "#")), key, response[key]);

                if (redirect.indexOf("#".concat(key, "#")) > -1) {
                  redirect = redirect.replace("#".concat(key, "#"), response[key]);
                }
              }

              console.log(redirect);
              window.setTimeout(function () {
                window.location.href = redirect;
              }, 1000);
            }
          } else if (response.STATUS === 'error') {
            submitBtn.classList.remove('c-btn_success');
            submitBtn.classList.add('c-btn_error');
            var prevText = submitBtn.textContent;
            msg = self.options.i18n[document.documentElement.lang] && self.options.i18n[document.documentElement.lang][self.state.stage] ? self.options.i18n[document.documentElement.lang][self.state.stage][response.STATUS] : self.options.i18n[document.documentElement.lang]['default'][response.STATUS];
            submitBtn.textContent = msg;
            window.setTimeout(function () {
              submitBtn.classList.remove('c-btn_error');
              submitBtn.textContent = prevText;
            }, 1000);
          }
        },
        error: function error(response) {
          console.log(response);
        },
        complete: function complete() {
          _loader.setState('hidden');
        }
      });
    }
  });

  _defineProperty(this, "getTableData", function (id) {
    var self = _this;
    var loader = new _radialLoader.default(self.el);
    global.$.ajax({
      type: 'POST',
      url: '/ajax/getTableData.php',
      data: {
        'id-table': id,
        'view': 'form'
      },
      dataType: 'json',
      success: function success(response) {
        console.log(response);

        if (response.STATUS === 'success') {
          (0, _setData.default)(self.el, response.DATA);
        }
      },
      error: function error(response) {
        console.log(response);
      },
      complete: function complete() {
        loader.setState('hidden');
      }
    });
  });

  _defineProperty(this, "deleteOrder", function (orderID) {
    var self = _this;
    console.log(orderID);
    delOrder(orderID, function () {
      console.log('Order ' + orderID + ' successfully deleted');
      self.loadBasket({
        action: 'change_view',
        handleView: true
      });

      _keyboard.default.instances.get(document.querySelector('.keyboard')).closeRecommendations();
    });
  });

  _defineProperty(this, "loadBasket", function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var self = _this; // let loader: Loader;

    var loader = new _radialLoader.default(self.el);
    var baskets = self.el.querySelectorAll('[data-basket]');

    for (var i = 0; i < baskets.length; i++) {
      var instance = _basketList.default.instances.get(baskets[i]);

      if (instance) instance.destroy();
    }

    var loadParams = {};

    if (params.action === 'change_view') {
      loadParams.processData = function (data) {
        data.view = self.state.view;
        return data;
      };
    }

    loadBasket(self.state.basket, function (response) {
      var baskets = self.el.querySelectorAll('[data-basket]'); // console.log(baskets);

      for (var _i = 0; _i < baskets.length; _i++) {
        // let instance = BasketList.instances.get(baskets[i]);
        // console.log(instance);
        new _basketList.default(baskets[_i], global.basketOptions);
      } // console.log(BasketList.instances);
      // self.setView(baskets.length > 1 ? 'guests' : 'overall');


      if (params.handleView) {
        if (baskets.length > 1) {
          (0, _setControlState.default)(self.el.querySelector('[data-view="overall"]'), 'disabled', 'c-btn_disabled');
        } else {
          (0, _setControlState.default)(self.el.querySelector('[data-view="overall"]'), 'default', 'c-btn_disabled');
        }
      }

      self.setTotal();
      loader.setState('hidden');
      var activeTable = document.querySelector('.order-item_active');

      if (activeTable) {
        console.log('res', response);
        var data = {
          // time_start: '00:00',
          price: self.el.querySelector('[data-total]').textContent // guests: self.el.querySelector('[data-guests]').textContent

        };
        (0, _setData.default)(activeTable, data);
      }
    }, loadParams); // let baskets = self.el.querySelectorAll('[data-basket]');
    // let currentLoader = Loader.instances.get(self.el);
    // if (currentLoader) {
    //   loader = currentLoader;
    // } else {
    //   loader = new Loader(self.el);
    // }
    // console.log(baskets);
    // for (let i = 0; i < baskets.length; i++) {
    //   let instance = BasketList.instances.get(baskets[i]);
    //   console.log(instance);
    //   instance.setBasketCode(self.state.basket);
    //   instance.getData(function () {
    //     if (i === baskets.length - 1) {
    //       loader.setState('hidden');
    //       self.setTotal();
    //     }
    //   });
    // }
  });

  _defineProperty(this, "setPossibleBaskets", function (baskets) {
    console.log(baskets);
    _this.state.possibleBaskets = baskets;
  });

  _defineProperty(this, "getBasketCode", function () {
    var code;
    var activeOrder = document.querySelector('.order-item_active');
    if (!activeOrder) return;
    code = activeOrder.getAttribute('data-code-first-table-basket') || '';
    return code;
  });

  _defineProperty(this, "setBasketCode", function (code) {
    var self = _this;
    self.state.basket = code;
    self.loadBasket({
      action: 'change_view',
      handleView: true
    });
  });

  _defineProperty(this, "setView", function (view) {
    var self = _this;
    self.state.view = view;
    self.el.setAttribute('data-view', view);
    var viewControls = self.el.querySelectorAll('[data-view]');

    for (var i = 0; i < viewControls.length; i++) {
      if (viewControls[i].getAttribute('data-view') !== self.state.view) {
        viewControls[i].classList.remove('c-btn_active');
      } else {
        viewControls[i].classList.add('c-btn_active');
      }
    }
  });

  _defineProperty(this, "setTitle", function (text) {
    var self = _this;
    var title = self.el.querySelector('[data-title]');

    if (title && title.innerHTML !== text) {
      title.innerHTML = text;
    }
  });

  _defineProperty(this, "getData", function (view) {
    var self = _this;
    var loader = new _radialLoader.default(self.el);
    global.$.ajax({
      type: 'POST',
      url: self.el.action,
      data: {
        view: view,
        is_ajax: 'Y'
      },
      success: function success(response) {
        // console.log(response);
        self.setView(view);
        var container = self.el.querySelector('.order-section');

        if (container) {
          var oldBaskets = container.querySelectorAll('[data-basket]');

          for (var i = 0; i < oldBaskets.length; i++) {
            _basketList.default.instances.get(oldBaskets[i]).destroy();
          }

          container.innerHTML = response;
          var baskets = container.querySelectorAll('[data-basket]');

          for (var _i2 = 0; _i2 < baskets.length; _i2++) {
            var instance = new _basketList.default(baskets[_i2], global.basketOptions);

            if (_i2 === 0) {
              var keyboard = document.querySelector('.keyboard');

              if (keyboard) {
                var keyboardInstance = _keyboard.default.instances.get(keyboard);

                keyboardInstance.setReference(baskets[_i2].querySelector('[data-keyboard-ref]'));
              } // BasketList.instances.get(baskets[i]).initGroupControl();


              instance.initGroupControl();
              instance.setBasketCode(self.state.basket);
            } // console.log(self.state.possibleBaskets);
            // instance.setBasketCode('a1');

          }

          self.loadBasket();
        }
      }
    });
  });

  _defineProperty(this, "setTotal", function () {
    var self = _this;
    var baskets = self.el.querySelectorAll('[data-basket]');
    var total = 0;
    var totalItems = 0;
    var step = self.el.getAttribute('data-step');

    if (step && ['payment', 'closed'].indexOf(step) > -1) {
      var items = self.el.querySelectorAll('.shopping-list__item:not([data-calc-result])');

      for (var i = 0; i < items.length; i++) {
        var field = items[i].querySelector('[data-prop="price"]');
        total += (0, _setPriceFormat.default)(field.value, 'clean');
      }
    } else {
      for (var _i3 = 0; _i3 < baskets.length; _i3++) {
        var basketInstance = _basketList.default.instances.get(baskets[_i3]); // console.log(baskets[i], basketInstance, basketInstance.getTotal());


        total += basketInstance.getTotal();
        totalItems += basketInstance.getItems().length;
      }
    }

    self.state.total = total;
    self.total.innerHTML = (0, _setPriceFormat.default)(total, 'formatted').toString();

    if (total > 0) {
      self.info.classList.add('u-color-text');
    } else {
      self.info.classList.remove('u-color-text');
    }

    self.count = self.el.querySelector('[data-count]');

    if (self.count && totalItems > 0) {
      self.count.classList.add('u-color-text');
      self.count.classList.remove('u-color-active-gray');
      self.count.innerHTML = totalItems.toString() + ' ' + (totalItems === 1 ? 'Item' : 'Items');
    } else if (self.count && totalItems === 0) {
      self.count.classList.remove('u-color-text');
      self.count.classList.add('u-color-active-gray');
      self.count.innerHTML = totalItems.toString() + ' ' + 'Items';
    } // self.guests = self.el.querySelector('[data-guests]') as HTMLElement;
    // if (self.guests) {
    //   self.guests.innerHTML = baskets.length + ' ' + getNounForm(baskets.length, 'guest', 'guests');
    // }

  });

  var defaults = {
    i18n: {
      en: {
        order: {
          success: 'Placed!',
          error: 'Oops!'
        },
        default: {
          success: 'Success!',
          error: 'Oops!'
        }
      },
      ru: {
        order: {
          success: 'Placed!',
          error: 'Oops!'
        },
        default: {
          success: 'Success!',
          error: 'Oops!'
        }
      }
    }
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.el = el;
  this.controls = this.el.querySelectorAll('.order-btn');
  this.info = this.el.querySelector('.order-form__info');
  this.total = this.el.querySelector('[data-total]');
  this.count = this.el.querySelector('[data-count]');
  this.views = this.el.querySelectorAll('[data-view]');
  this.state = {
    total: 0,
    stage: null,
    view: 'overall',
    basket: null,
    possibleBaskets: {}
  };
  this.init();
};

_defineProperty(OrderForm, "instances", new WeakMap());

var _default = OrderForm;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../templates/components/lists/basket-list/basket-list.ts":
/*!****************************************************************!*\
  !*** ../templates/components/lists/basket-list/basket-list.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _hasValueInAttribute = _interopRequireDefault(__webpack_require__(/*! utility/hasValueInAttribute */ "./utility/hasValueInAttribute.ts"));

var _attributeToArray = _interopRequireDefault(__webpack_require__(/*! utility/attributeToArray */ "./utility/attributeToArray.ts"));

var _arrayToAttribute = _interopRequireDefault(__webpack_require__(/*! utility/arrayToAttribute */ "./utility/arrayToAttribute.ts"));

var _keyboard = _interopRequireDefault(__webpack_require__(/*! components/controls/keyboard/keyboard */ "../templates/components/controls/keyboard/keyboard.ts"));

var _groupMenu = _interopRequireDefault(__webpack_require__(/*! components/nav/group-menu/group-menu */ "../templates/components/nav/group-menu/group-menu.ts"));

var _setPriceFormat = _interopRequireDefault(__webpack_require__(/*! utility/setPriceFormat */ "./utility/setPriceFormat.ts"));

var _radialLoader = _interopRequireDefault(__webpack_require__(/*! components/loaders/radial-loader/radial-loader */ "../templates/components/loaders/radial-loader/radial-loader.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BasketList = /*#__PURE__*/function () {
  function BasketList(_el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BasketList);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "list", void 0);

    _defineProperty(this, "groupsList", void 0);

    _defineProperty(this, "view", void 0);

    _defineProperty(this, "dragSrc", void 0);

    _defineProperty(this, "init", function () {
      var self = _this;
      BasketList.instances.set(self.el, self);
      self.view = self.getView();
      var order = document.querySelector('.order-item_active');

      if (order) {
        var basketCodes = order.getAttribute('data-code-table-basket') || '';
        var basketCodesParsed = (0, _attributeToArray.default)(basketCodes);
        var basketCodeFirst = order.getAttribute('data-code-first-table-basket');
        var basketCodesArray = Object.keys(basketCodesParsed[0]);
        self.possibleBaskets = basketCodesArray;

        if (self.view === 'overall') {
          // self.el.setAttribute('data-basket', basketCodesArray.indexOf(self.basket));
          self.setBasketCode(basketCodesArray[0]);
        } else if (self.view === 'guests') {
          var group = self.el.getAttribute('data-group') || 1;
          var newCode = basketCodesArray[group - 1]; // self.el.setAttribute('data-basket', basketCodesArray[group - 1]);

          self.setBasketCode(newCode);
        }
      }

      if (self.view === 'overall') {} else if (self.view === 'guests') {
        self.groupsList = global.$(self.el).closest('[data-groups-list]').get(0);
        self.groupsTotal = global.$(self.el).find('[data-basket-total]').get(0);
        self.initGroupControl(); // global.$(document).on('click', '[data-action="add_list"]', function () {
        //   self.addBasket();
        // });
      }

      global.$(self.el).on('click', '[data-action]', function () {
        var action = this.getAttribute('data-action');
        var item = global.$(this).closest('.item-row').get(0);
        var productID = item.getAttribute('data-product-id');
        var basketItemID = item.getAttribute('data-basket-line-id');
        var basketID = self.el.getAttribute('data-basket');
        var orderID = self.el.getAttribute('data-orderid');
        var data = {
          // tags: item.getAttribute('data-tags'),
          code: item.querySelector('[data-item-code]') ? item.querySelector('[data-item-code]').innerHTML : false,
          time: item.querySelector('[data-item-time]') ? item.querySelector('[data-item-time] .c-status span').innerHTML : false,
          tableId: global.$(self.el).closest('.order-form').find('[data-title]').get(0).innerHTML.replace(/[^0-9]/g, '')
        };

        switch (action) {
          case 'copy':
            // self.handleCopy(item);
            self.sendRequest('add', {
              productID: productID,
              quantity: 1,
              basketID: basketID,
              item: item,
              orderId: orderID,
              props: {
                // tags: attributeToArray(data.tags),
                code: data.code,
                time: data.time,
                tableId: data.tableId
              }
            });
            break;

          case 'delete':
            // self.handleDelete(item);
            self.sendRequest('delete', {
              basketItemID: basketItemID,
              basketID: basketID,
              item: item,
              orderId: orderID
            });
            break;
        }
      });
      global.$(self.el).on('click', '[data-item] .item-row__inner', function () {
        var parent = this.parentElement;

        if ((0, _hasValueInAttribute.default)(parent, 'active', 'data-actions')) {
          self.handleActive(parent);
        }
      }); // let draggables = self.el.querySelectorAll('.draggable') as NodeListOf<HTMLElement>;
      // let containers = document.querySelectorAll('[data-basket]') as NodeListOf<HTMLElement>;
      // for (let i = 0; i < draggables.length; i++) {
      //   self.addItemDragEvents(draggables[i]);
      // }
      // for (let i = 0; i < containers.length; i++) {
      //   self.addListDragEvents(containers[i])
      // }

      var contentBlock = document.querySelector('.order-section__body');

      if (contentBlock) {
        var hammertime = new Hammer(contentBlock);
        hammertime.on('swipeleft', function (e) {
          var item = e.target.getAttribute('data-item') !== null ? e.target : global.$(e.target).closest('[data-item]').get(0);
          console.log('left', item);
          if (!item) return;

          if ((0, _hasValueInAttribute.default)(item, 'swipe', 'data-actions')) {
            self.handleSwipe(item, 'left');
          }
        });
        hammertime.on('swiperight', function (e) {
          var item = e.target.getAttribute('data-item') !== null ? e.target : global.$(e.target).closest('[data-item]').get(0);
          console.log('right', item);
          if (!item) return;

          if ((0, _hasValueInAttribute.default)(item, 'swipe', 'data-actions')) {
            self.handleSwipe(item, 'right');
          }
        });
      }

      global.$(self.el).on('click', '[data-state-action]', function () {
        if (!self.groupsList) return;
        var ref = this;
        var action = global.$(this).attr('data-state-action');
        var parentGroup = global.$(ref).closest('[data-group]');
        var list = parentGroup.find('[data-items-list]');
        var items = list.find('.item-row');
        var checkedItems = items.filter(function () {
          return global.$(this).find('[name="CHECKED"]').prop('checked');
        });

        switch (action) {
          case 'move':
            if (items.length === 0 || checkedItems.length === 0) return;
            new _groupMenu.default(self.groupsList, ref);
            break;

          case 'cancel':
            var groupMenu = document.querySelector('.group-menu');

            if (groupMenu) {
              _groupMenu.default.instances.get(groupMenu).destroy();
            }

            checkedItems.find('[name="CHECKED"]').prop('checked', false);
            setTimeout(function () {
              window.location.reload();
            }, 300);
            break;

          case 'delete':
            if (items.length === 0 || checkedItems.length === 0) return;
            checkedItems.each(function () {
              // self.handleDelete(this);
              var basketItemID = this.getAttribute('data-basket-line-id'); // let basketID = 'a1';

              var basketID = self.basket;
              var orderID = self.el.getAttribute('data-orderid');
              self.sendRequest('delete', {
                basketItemID: basketItemID,
                basketID: basketID,
                item: this,
                orderId: orderID
              });
            });
            break;

          case 'save':
            checkedItems.find('[name="CHECKED"]').prop('checked', false);
            break;
        }
      });
      self.updateListState();
    });

    _defineProperty(this, "getData", function (callback) {
      var self = _this;
      loadBasket(self.basket, function () {
        var draggables = self.el.querySelectorAll('.draggable');

        for (var i = 0; i < draggables.length; i++) {
          self.addItemDragEvents(draggables[i]);
        }

        self.addListDragEvents(self.el);
        self.updateListState();

        if (typeof callback === 'function') {
          callback();
        }
      });
    });

    _defineProperty(this, "setBasketCode", function (code) {
      var self = _this;
      self.basket = code;
      self.el.setAttribute('data-basket', code);
    });

    _defineProperty(this, "sendRequest", function (action, params) {
      var self = _this;
      var loader;
      var result;

      switch (action) {
        case 'add':
          loader = new _radialLoader.default(document.querySelector('.content'));
          addElementBasket(params.productID, params.quantity, params.basketID, params.orderId, params.props || false, function (response) {
            console.log('added successfully to basket ' + params.basketID);

            if (self.view === 'guests') {
              // self.updateListState(self.el);
              self.updateListState();
            }

            self.setOrder(response.getPost.orderId);
            loader.setState('hidden');

            if (params.item) {
              self.handleActive(params.item);
            }

            _keyboard.default.instances.get(document.querySelector('.keyboard')).setPanelState('visible');

            if (typeof self.options.onItemAdd === 'function') {
              self.options.onItemAdd(self, params.item);
            }
          }, {
            partial: 'Y',
            processData: function processData(data) {
              data.partial = 'Y';
              return data;
            }
          });
          break;

        case 'delete':
          loader = new _radialLoader.default(document.querySelector('.content'));
          delElementBasket(params.basketItemID, params.basketID, params.orderId, function (response) {
            console.log('deleted successfully from basket ' + params.basketID);

            if (self.view === 'guests') {
              // self.updateListState(self.el);
              self.updateListState();
            }

            loader.setState('hidden');

            if (typeof self.options.onItemDelete === 'function') {
              self.options.onItemDelete(self, params.item);
            }
          }, {
            partial: 'Y',
            processData: function processData(data) {
              data.partial = 'Y';
              return data;
            }
          });
          break;

        case 'deleteOrder':
          loader = new _radialLoader.default(document.querySelector('.content'));
          delOrder(params.orderId, function () {
            console.log('Order ' + params.orderId + ' successfully deleted');

            if (self.view === 'guests') {
              // self.updateListState(self.el);
              self.updateListState();
            }

            loader.setState('hidden');
          });
          break;

        case 'update':
          loader = new _radialLoader.default(document.querySelector('.content'));
          updateElementBasket(params.basketItemID, params.productID, params.basketID, params.orderId, params.props, function (response) {
            console.log("Element ".concat(params.basketItemID, " from basket ").concat(params.basketID, " updated successfully"));
            loader.setState('hidden');

            if (typeof self.options.onItemUpdate === 'function') {
              self.options.onItemUpdate(self, params.item);
            }
          }, {
            partial: 'Y',
            processData: function processData(data) {
              data.partial = 'Y';
              return data;
            }
          });
          break;

        case 'load':
          break;
      }
    });

    _defineProperty(this, "setOrder", function (id) {
      var self = _this;
      if (self.el.getAttribute('data-orderid')) return;
      self.el.setAttribute('data-orderid', id);
    });

    _defineProperty(this, "initGroupControl", function () {
      var self = _this;
      var control = document.querySelector('[data-action="add_list"]');

      if (control && !control.classList.contains('u-inited')) {
        control.addEventListener('click', function () {
          console.log(123);
          self.addBasket();
        });
        control.classList.add('u-inited');
      }
    });

    _defineProperty(this, "destroy", function () {
      BasketList.instances.delete(_this.el);
    });

    _defineProperty(this, "handleDragStart", function (e) {
      var item = e.target;
      var group = global.$(item).closest('[data-basket]').get(0);
      item.classList.add('dragging');
      _this.dragSrc = group;
    });

    _defineProperty(this, "handleDragEnd", function (e) {
      var self = _this;
      var item = e.target;
      var group = global.$(item).closest('[data-basket]').get(0);
      item.classList.remove('dragging');

      if (_this.dragSrc) {
        // self.updateListState(this.dragSrc);
        BasketList.instances.get(_this.dragSrc).updateListState();
      } // self.updateListState(group);


      BasketList.instances.get(group).updateListState();

      if (typeof _this.options.onItemMove === 'function') {
        _this.options.onItemMove(_this, item, _this.dragSrc, group);
      }

      _this.dragSrc = null;
    });

    _defineProperty(this, "addItemDragEvents", function (el) {
      var self = _this;

      if (!el.classList.contains('u-drag-inited')) {
        el.addEventListener('dragstart', self.handleDragStart);
        el.addEventListener('dragend', self.handleDragEnd);
        el.classList.add('u-drag-inited');
      }
    });

    _defineProperty(this, "handleDragOver", function (el, e) {
      e.preventDefault();
      var list = global.$(el).find('[data-items-list]').get(0);

      var afterElement = _this.getDragAfterElement(list, e.clientY);

      var draggable = document.querySelector('.dragging');

      if (afterElement == null) {
        list.appendChild(draggable);
      } else {
        list.insertBefore(draggable, afterElement);
      }
    });

    _defineProperty(this, "getDragAfterElement", function (container, y) {
      var divs = container.querySelectorAll('.draggable:not(.dragging)');
      var draggableElements = Array.prototype.slice.call(divs);
      return draggableElements.reduce(function (closest, child) {
        var box = child.getBoundingClientRect();
        var offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return {
            offset: offset,
            element: child
          };
        } else {
          return closest;
        }
      }, {
        offset: Number.NEGATIVE_INFINITY
      }).element;
    });

    _defineProperty(this, "addBasket", function () {
      var self = _this;
      if (self.view !== 'guests' || !self.groupsList) return;
      var baskets = global.$(self.groupsList).find('[data-group]');
      var lastIndex = baskets.last().attr('data-group') ? parseInt(baskets.last().attr('data-group')) : 1;
      var newIndex = lastIndex + 1; // console.log(BasketList.instances);

      var lastBasketOptions = BasketList.instances.get(baskets.last().get(0)).options;
      var data = {
        index: newIndex
      };
      var template = document.querySelector('[id^="tmpl-basket-group"]').innerHTML; // console.log(baskets.last());

      baskets.last().after(global.Mustache.render(template, data, {}, ['<%', '%>']));
      var newLastList = global.$(self.groupsList).find('[data-group]').last().get(0); // console.log(BasketList.instances.get());

      var newBasket = new BasketList(newLastList, lastBasketOptions);
      var controls = self.groupsList.querySelector('.order-section__controls');
      newBasket.addListDragEvents(newLastList);
      var keyboard = document.querySelector('.keyboard');
      var newRef = newLastList.querySelector('[data-keyboard-ref]');

      if (keyboard && newRef) {
        _keyboard.default.instances.get(keyboard).setReference(newRef);
      } // console.log(newBasket);


      if (newBasket.possibleBaskets.indexOf(newBasket.basket) === newBasket.possibleBaskets.length - 1 && controls) {
        controls.classList.add('u-hidden');
      } else if (newBasket.possibleBaskets.indexOf(newBasket.basket) < newBasket.possibleBaskets.length - 1 && controls) {
        controls.classList.remove('u-hidden');
      }
    });

    _defineProperty(this, "getView", function () {
      var view = _this.el.getAttribute('data-view');

      return view !== null ? view : 'overall';
    });

    _defineProperty(this, "renderItemTags", function (el, tagsArray) {
      var self = _this;
      global.$(el).attr('data-tags', (0, _arrayToAttribute.default)(tagsArray));
      var footer = el.querySelector('.item-row__footer');

      if (footer && tagsArray.length === 0) {
        footer.classList.add('u-hidden');
      } else if (footer && tagsArray.length > 0) {
        footer.classList.remove('u-hidden');
        footer.innerHTML = '';
        global.$(tagsArray).each(function (index) {
          if (this.active) {
            footer.innerHTML += (footer.innerHTML.length > 0 ? ', ' : '') + this.title;
          }
        });
      }

      if (typeof self.options.onItemUpdate === 'function') {
        self.options.onItemUpdate(self, el);
      }
    });

    _defineProperty(this, "handleActive", function (el) {
      var self = _this;
      var activeClass = 'item-row_active';
      var items = document.querySelectorAll(".".concat(activeClass));

      for (var i = 0; i < items.length; i++) {
        if (self.list.contains(items[i]) && items[i] !== el) {
          items[i].classList.remove(activeClass);
        } else if (!self.list.contains(items[i])) {
          // убираем активный пункт у других корзин
          var that = global.$(items[i]).closest('[data-basket]').get(0);

          var _instance = BasketList.instances.get(that);

          _instance && _instance.handleActive(items[i]);
        }
      }

      if (el.classList.contains(activeClass)) {
        el.classList.remove(activeClass);

        if (typeof self.options.onItemActiveRemove === 'function') {
          self.options.onItemActiveRemove(self, el);
        }
      } else {
        el.classList.add(activeClass);

        if (typeof self.options.onItemActiveAdd === 'function') {
          self.options.onItemActiveAdd(self, el);
        }
      }
    });

    _defineProperty(this, "handleSwipe", function (el, direction) {
      if (direction === 'left') {
        global.$(el).addClass('item-row_controls-right');
        var asideRight = global.$(el).find('.item-row__aside-right');
        var width = asideRight.children().get(0).offsetWidth;
        asideRight.css({
          'opacity': '1',
          'position': 'static',
          'height': 'auto',
          'max-width': '0'
        });
        asideRight.stop().animate({
          'max-width': "".concat(width, "px")
        }, {
          duration: 300
        });
      } else if (direction === 'right') {
        global.$(el).removeClass('item-row_controls-right');

        var _asideRight = global.$(el).find('.item-row__aside-right');

        _asideRight.stop().animate({
          'max-width': '0'
        }, {
          duration: 300,
          complete: function complete() {
            _asideRight.css({
              'opacity': '0',
              'position': 'absolute',
              'height': '1px',
              'max-width': 'none'
            });
          }
        });
      }
    });

    _defineProperty(this, "getItems", function () {
      return _this.list.querySelectorAll(_this.options.row);
    });

    _defineProperty(this, "getTotal", function () {
      var self = _this;
      var items = self.getItems();
      var total = 0;
      var inputsArray = ['input'];

      for (var i = 0; i < items.length; i++) {
        var price = items[i].querySelector('[data-item-price]');

        if (price) {
          total += (0, _setPriceFormat.default)(inputsArray.indexOf(price.nodeName.toLowerCase()) > -1 ? price.value : price.innerHTML, 'clean');
        }
      }

      return total;
    });

    _defineProperty(this, "updateListState", function () {
      var self = _this;
      var basketTotal = self.el.querySelector('[data-basket-total]');
      var listSize = self.getItems().length;
      if (!basketTotal) return;
      basketTotal.innerHTML = "".concat(listSize, " ").concat(listSize === 1 ? 'Item' : 'Items');

      if (listSize === 0) {
        basketTotal.classList.add('u-color-active-gray');
      } else {
        basketTotal.classList.remove('u-color-active-gray');
      }
    });

    var defaults = {
      list: '[data-items-list]',
      item: '.basket-list__item',
      row: '[data-item]'
    };

    if (!_el) {
      throw new Error('No element passed');
    }

    ;
    this.options = (0, _merge.default)(defaults, options);
    this.el = _el;
    this.list = this.el.querySelector(this.options.list);
    this.groupsList = null;
    this.groupTotal = null;
    this.view = 'overall';
    this.dragSrc = null;
    this.basket = null;
    this.possibleBaskets = {};
    this.init();
  }

  _createClass(BasketList, [{
    key: "addListDragEvents",
    value: function addListDragEvents(el) {
      var self = this;

      if (!el.classList.contains('u-drag-inited')) {
        el.addEventListener('dragover', function (e) {
          self.handleDragOver(this, e);
        });
        el.classList.add('u-drag-inited');
      }
    }
  }]);

  return BasketList;
}();

_defineProperty(BasketList, "instances", new WeakMap());

var _default = BasketList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../templates/components/lists/orders-list/orders-list.ts":
/*!****************************************************************!*\
  !*** ../templates/components/lists/orders-list/orders-list.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _updateQueryString = _interopRequireDefault(__webpack_require__(/*! utility/updateQueryString */ "./utility/updateQueryString.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;

var OrdersList = function OrdersList(el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, OrdersList);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    OrdersList.instances.set(self.el, self);

    if (self.options.alwaysActive) {
      var activeItem = self.getActiveItem();

      if (activeItem) {
        self.setActiveItem(activeItem);
      } else {
        activeItem = self.el.querySelector(self.options.item);
        if (!activeItem) return;
        self.setActiveItem(activeItem);
      }
    } else {
      document.addEventListener('click', self.handleClickOutside);
    }

    self.el.addEventListener('click', self.handleClick);

    if (typeof self.options.onInit === 'function') {
      _this.options.onInit(self);
    }
  });

  _defineProperty(this, "handleClick", function (e) {
    var self = _this;
    var control;

    if (control = e.target.closest('.order-item')) {
      self.setActiveItem(control);
    } else {
      return;
    }
  });

  _defineProperty(this, "handleClickOutside", function (e) {
    var self = _this;
    var control = e.target.closest(self.options.item);

    if (!self.options.alwaysActive && (!control || !self.el.contains(control))) {
      self.setActiveItem(null);
    }
  });

  _defineProperty(this, "getActiveItem", function () {
    return _this.el.querySelector(".".concat(_this.options.activeClass));
  });

  _defineProperty(this, "setActiveItem", function (item) {
    var self = _this;
    var items = self.el.querySelectorAll(self.options.item);
    var prevItem;
    if (self.state.activeItem === item) return;

    for (var i = 0; i < items.length; i++) {
      if (items[i] !== item) {
        items[i].classList.remove(self.options.activeClass);

        if (item === null) {
          items[i].classList.remove(self.options.inactiveClass);
        } else {
          items[i].classList.add(self.options.inactiveClass);
        }
      }
    }

    if (item !== null) {
      item.classList.remove(self.options.inactiveClass);
      item.classList.add(self.options.activeClass);
    }

    if (self.options.setURL && item !== null) {
      var value = item.getAttribute(self.options.urlAttribute);
      var newURL = (0, _updateQueryString.default)(self.options.urlParam, value, window.location.href);
      window.history.pushState({
        path: newURL
      }, '', newURL);
    }

    prevItem = self.state.activeItem;
    self.state.activeItem = item;

    if (typeof self.options.onSetItem === 'function') {
      _this.options.onSetItem(self, prevItem);
    }
  });

  var defaults = {
    item: '.order-item',
    activeClass: 'order-item_active',
    inactiveClass: 'order-item_dimmed',
    alwaysActive: false,
    setURL: false,
    urlAttribute: 'data-id',
    urlParam: 'data-id',
    onInit: function onInit(instance) {},
    onBeforeClick: function onBeforeClick(instance, e) {},
    onSetItem: function onSetItem(instance, prevItem) {}
  };

  if (!el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.el = el;
  this.state = {
    activeItem: null
  };
  this.init();
};

_defineProperty(OrdersList, "instances", new WeakMap());

var _default = OrdersList;
exports.default = _default;

/***/ }),

/***/ "../templates/components/lists/tables-list-sm/tables-list-sm.ts":
/*!**********************************************************************!*\
  !*** ../templates/components/lists/tables-list-sm/tables-list-sm.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _positionEl = _interopRequireDefault(__webpack_require__(/*! utility/positionEl */ "./utility/positionEl.ts"));

var _manageBadges = _interopRequireDefault(__webpack_require__(/*! utility/manageBadges */ "./utility/manageBadges.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TablesList = function TablesList(_el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, TablesList);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "popup", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    TablesList.instances.set(self.el, self);
    self.el.addEventListener('click', self.handleClick);
    document.addEventListener('click', self.handleClickOutside);
  });

  _defineProperty(this, "handleClick", function (e) {
    var self = _this;
    var control;

    if (control = e.target.closest(self.options.item)) {
      self.setActiveItem(control);
    } else {
      return;
    }

    ;
  });

  _defineProperty(this, "handleClickOutside", function (e) {
    var self = _this;
    var target = e.target;
    var table = target.closest(self.options.item);

    if (!table && self.popup && !self.popup.contains(target)) {
      self.setActiveItem(null);
    }
  });

  _defineProperty(this, "setActiveItem", function (item) {
    var self = _this;
    if (self.state.activeItem === item) return;

    if (self.state.activeItem) {
      self.state.activeItem.classList.remove(self.options.itemActiveClass);
    }

    self.state.activeItem = item;

    if (self.popup) {
      self.popup.parentElement.removeChild(self.popup);
      self.popup = null;
    }

    if (item) {
      item.classList.add(self.options.itemActiveClass);
      global.$.ajax({
        type: 'POST',
        url: '/ajax/getTableData.php',
        data: {
          'id-table': parseInt(item.getAttribute('data-id-table') || '')
        },
        dataType: 'json',
        success: function success(response) {
          console.log(response);
          self.setPopup(response.DATA);
          self.positionPopup(item);
        },
        error: function error(response) {
          console.log(response);
          self.setPopup({
            title: 'Error!',
            action: undefined
          });
          self.positionPopup(item);
        }
      });
    }
  });

  _defineProperty(this, "setPopup", function (data) {
    var self = _this;

    if (!self.popup) {
      var template = document.querySelector("[id^=\"tmpl-table-card\"]");
      var content = document.querySelector('.content');
      if (!template || !content) return;
      self.popup = global.$(global.Mustache.render(template.innerHTML, data, {}, ['<%', '%>'])).appendTo(content).get(0);
    }

    for (var _key in data) {
      var el = self.popup.querySelector("[data-".concat(_key, "]"));

      if (el && data[_key]) {
        el.classList.remove('u-hidden'); // el.innerHTML = data[key];
      } else if (el && !data[_key]) {
        // el.innerHTML = '';
        el.classList.add('u-hidden');
      }
    }

    var badges = self.popup.querySelector('[data-badges]');

    if (badges) {
      (0, _manageBadges.default)(badges, 'compact');
    }
  });

  _defineProperty(this, "positionPopup", function (ref) {
    var self = _this;
    if (!self.popup) return;
    (0, _positionEl.default)(self.popup, ref, {
      horizontal: 'left',
      vertical: 'top'
    });
    self.popup.style.left = parseFloat(self.popup.style.left) + 60 + 'px';
  });

  var defaults = {
    item: '.table-item',
    itemActiveClass: 'table-item_active'
  };

  if (!_el) {
    throw new Error('No element passed');
  }

  ;
  this.options = (0, _merge.default)(defaults, options);
  this.el = _el;
  this.popup = null;
  this.state = {
    activeItem: null
  };
  this.init();
};

_defineProperty(TablesList, "instances", new WeakMap());

var _default = TablesList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../templates/components/loaders/radial-loader/radial-loader.ts":
/*!**********************************************************************!*\
  !*** ../templates/components/loaders/radial-loader/radial-loader.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Loader = function Loader(_el) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Loader);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "parent", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "state", void 0);

  _defineProperty(this, "init", function () {
    Loader.instances.set(_this.parent, _this);
    _this.el = _this.render(_this.parent);

    _this.setState('visible');
  });

  _defineProperty(this, "render", function (el) {
    var div = document.createElement('div');
    div.className = 'loader';

    if (_this.options.overlay === true) {
      div.classList.add('loader_has-overlay');
    }

    div.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"loader__icon\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" fill=\"none\">\n        <circle class=\"loader__outer\" cx=\"50\" cy=\"50\" r=\"30\" stroke=\"".concat(_this.options.colors.secondary, "\" stroke-width=\"4\">\n        </circle>\n        <circle class=\"loader__inner\" cx=\"50\" cy=\"50\" r=\"30\" stroke=\"").concat(_this.options.colors.primary, "\" stroke-width=\"4\" stroke-dasharray=\"20 180\">\n        </circle>\n      </svg>\n    ");
    el.appendChild(div);
    return div;
  });

  _defineProperty(this, "destroy", function () {
    if (_this.el === null) return;

    _this.parent.removeChild(_this.el);

    _this.el = null;
    Loader.instances.delete(_this.parent);
  });

  _defineProperty(this, "setState", function (state) {
    var self = _this;
    if (self.el === null) return;

    if (state === 'visible') {
      self.el.classList.add(self.options.animatedClassName);
    }

    self.el.classList.remove(self.options.states[self.state]);
    self.state = state;
    self.el.classList.add(self.options.states[state]);

    if (state === 'hidden') {
      setTimeout(function () {
        self.el.classList.remove(self.options.animatedClassName);
        self.destroy();
      }, self.options.timeout);
    }
  });

  var defaults = {
    states: {
      visible: 'loader_active',
      hidden: 'loader_hidden'
    },
    colors: {
      primary: '#0f35f8',
      secondary: '#dfdfdf'
    },
    animatedClassName: 'loader_animated',
    timeout: 800,
    overlay: true
  };
  this.options = (0, _merge.default)(defaults, options);
  this.parent = _el;
  this.el = null;
  this.state = 'hidden';
  this.init();
};

_defineProperty(Loader, "instances", new WeakMap());

var _default = Loader;
exports.default = _default;

/***/ }),

/***/ "../templates/components/nav/group-menu/group-menu.ts":
/*!************************************************************!*\
  !*** ../templates/components/nav/group-menu/group-menu.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

var _positionEl = _interopRequireDefault(__webpack_require__(/*! utility/positionEl */ "./utility/positionEl.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GroupMenu = function GroupMenu(_el, ref) {
  var _this = this;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _classCallCheck(this, GroupMenu);

  _defineProperty(this, "el", void 0);

  _defineProperty(this, "parent", void 0);

  _defineProperty(this, "reference", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "init", function () {
    var self = _this;
    GroupMenu.instances.set(self.parent, self);
    self.el = self.render();
    self.parent.addEventListener('click', self.handleClick);
  });

  _defineProperty(this, "handleClick", function (e) {
    var self = _this;
    var el = global.$(e.target).closest('.group-menu__link').get(0);
    if (!el || !self.el) return;
    var group = global.$(document).find("[data-group=\"".concat(self.el.getAttribute('data-for'), "\"]"));
    var list = group.find('[data-items-list]');
    var checkedItems = list.children().filter(function () {
      return global.$(this).find('[name="CHECKED"]').prop('checked');
    });
    var newGroup = global.$(document).find("[data-group=\"".concat(el.getAttribute('data-group-id'), "\"]"));
    var newList = newGroup.find('[data-items-list]');
    checkedItems.appendTo(newList);
    self.destroy();
    checkedItems.find('[name="CHECKED"]').prop('checked', false);
  });

  _defineProperty(this, "render", function () {
    var self = _this;
    var data = self.getData();
    var menu = self.parent.querySelector('.group-menu');
    var isNew = false;
    var parentGroup = global.$(self.reference).closest('[data-group]');
    var groups = global.$(self.parent).find('[data-group]');
    var itemTemplate = "\n      <li class=\"group-menu__item\">\n        <a class=\"group-menu__link\" href=\"javascript:;\" data-group-id=\"{{ id }}\">\n          <div class=\"u-row u-justify-space-between u-align-center\">\n            <span class=\"group-menu__title u-col\">{{ title }}</span>\n            <span class=\"group-menu__counter u-col u-color-active-gray\">{{ size }}</span>\n          </div>\n        </a>\n      </li>\n    ";

    if (menu) {
      global.$(menu).html('');
    } else {
      isNew = true;
      menu = document.createElement('ul');
      menu.className = 'group-menu group-menu_fixed';
      global.$(menu).attr('data-for', parentGroup.attr('data-group'));
      groups.each(function (index) {
        global.$(menu).append(global.Mustache.render(itemTemplate, data[index]));
      });

      if (isNew) {
        global.$(self.parent).append(menu);
      }

      (0, _positionEl.default)(menu, self.reference, {
        vertical: 'top',
        horizontal: 'right'
      });
    }

    return menu;
  });

  _defineProperty(this, "getData", function () {
    var data = [];
    var groupsList = global.$(document).find('[data-groups-list]');
    var groups = groupsList.find('[data-group]');
    groups.each(function () {
      var id = global.$(this).attr('data-group') ? parseInt(global.$(this).attr('data-group')) : 1;
      var title = "Guest ".concat(id);
      var size = global.$(this).find('.basket-list__item').length;
      data.push({
        id: id,
        title: title,
        size: size
      });
    });
    return data;
  });

  _defineProperty(this, "destroy", function () {
    var self = _this;
    if (!self.el) return;
    GroupMenu.instances.delete(self.parent);
    self.parent.removeEventListener('click', self.handleClick);
    global.$(self.el).remove();
  });

  var defaults = {};
  this.options = (0, _merge.default)(defaults, options);
  this.parent = _el;
  this.reference = ref;
  this.el = null;
  this.init();
};

_defineProperty(GroupMenu, "instances", new WeakMap());

var _default = GroupMenu;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./allscript.ts":
/*!**********************!*\
  !*** ./allscript.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _acn = _interopRequireDefault(__webpack_require__(/*! components/controls/accordeon/acn */ "../templates/components/controls/accordeon/acn.ts"));

var _tabs = _interopRequireDefault(__webpack_require__(/*! components/controls/tabs/tabs */ "../templates/components/controls/tabs/tabs.ts"));

var _numpad2 = _interopRequireDefault(__webpack_require__(/*! components/controls/numpad/numpad */ "../templates/components/controls/numpad/numpad.ts"));

var _findAncestor = _interopRequireDefault(__webpack_require__(/*! utility/findAncestor */ "./utility/findAncestor.ts"));

var _popup = _interopRequireDefault(__webpack_require__(/*! components/controls/popup/popup */ "../templates/components/controls/popup/popup.ts"));

var _keyboard = _interopRequireDefault(__webpack_require__(/*! components/controls/keyboard/keyboard */ "../templates/components/controls/keyboard/keyboard.ts"));

var _throttle = _interopRequireDefault(__webpack_require__(/*! utility/throttle */ "./utility/throttle.ts"));

var _basketList = _interopRequireDefault(__webpack_require__(/*! components/lists/basket-list/basket-list */ "../templates/components/lists/basket-list/basket-list.ts"));

var _arrayToAttribute = _interopRequireDefault(__webpack_require__(/*! utility/arrayToAttribute */ "./utility/arrayToAttribute.ts"));

var _attributeToArray = _interopRequireDefault(__webpack_require__(/*! utility/attributeToArray */ "./utility/attributeToArray.ts"));

var _handleInputState = _interopRequireDefault(__webpack_require__(/*! utility/handleInputState */ "./utility/handleInputState.ts"));

var _orderForm = _interopRequireDefault(__webpack_require__(/*! components/forms/order-form/order-form */ "../templates/components/forms/order-form/order-form.ts"));

var _progressbar = _interopRequireDefault(__webpack_require__(/*! components/controls/progressbar/progressbar */ "../templates/components/controls/progressbar/progressbar.ts"));

var _clock = _interopRequireDefault(__webpack_require__(/*! components/controls/clock/clock */ "../templates/components/controls/clock/clock.ts"));

var _formatResult = _interopRequireDefault(__webpack_require__(/*! utility/formatResult */ "./utility/formatResult.ts"));

var _timeTracker = _interopRequireDefault(__webpack_require__(/*! components/controls/time-tracker/time-tracker */ "../templates/components/controls/time-tracker/time-tracker.ts"));

var _tablesListSm = _interopRequireDefault(__webpack_require__(/*! components/lists/tables-list-sm/tables-list-sm */ "../templates/components/lists/tables-list-sm/tables-list-sm.ts"));

var _ordersList = _interopRequireDefault(__webpack_require__(/*! components/lists/orders-list/orders-list */ "../templates/components/lists/orders-list/orders-list.ts"));

var _setURL = _interopRequireDefault(__webpack_require__(/*! utility/setURL */ "./utility/setURL.ts"));

var _positionEl = _interopRequireDefault(__webpack_require__(/*! utility/positionEl */ "./utility/positionEl.ts"));

var _manageBadges = _interopRequireDefault(__webpack_require__(/*! utility/manageBadges */ "./utility/manageBadges.ts"));

var _setData = _interopRequireDefault(__webpack_require__(/*! utility/setData */ "./utility/setData.ts"));

var _getHeight = _interopRequireDefault(__webpack_require__(/*! utility/getHeight */ "./utility/getHeight.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import getClassInstance from 'utility/getClassInstance';
// import positionEl from 'utility/positionEl';
// import numberFormat from 'utility/numberFormat';
// import hasValueInAttribute from 'utility/hasValueInAttribute';
// import setQuantityFormat from 'utility/setQuantityFormat';
// import setPriceFormat from 'utility/setPriceFormat';
// import handleTags from 'utility/handleTags';
// import setState from 'utility/setState';
// import Loader from 'components/loaders/radial-loader/radial-loader';
// import checkTime from 'utility/checkTime';

/**
 * Main script file
 */
global.attributeToArray = _attributeToArray.default;
global.arrayToAttribute = _arrayToAttribute.default;
global.OrdersList = _ordersList.default;
document.addEventListener('DOMContentLoaded', init);

function init() {
  var $ = global.$;
  var SimpleBar = global.SimpleBar;
  var Hammer = global.Hammer;
  var Mustache = global.Mustache;
  var handleViewport = (0, _throttle.default)(setViewport, 500);
  setViewport();
  window.addEventListener('resize', handleViewport);
  var accountPanel = document.querySelector('#accountbar');

  if (accountPanel) {
    new _timeTracker.default(accountPanel);
  }

  var tablesList = document.querySelector('.tables-list[data-interactive]');

  if (tablesList) {
    new _tablesListSm.default(tablesList);
  }

  var ordersListPopup = document.querySelectorAll('.orders-list_popup');
  ;

  var _loop = function _loop(i) {
    var activeClass = 'orders-list_active';
    var popupMenu = ordersListPopup[i].querySelector('.popup-menu');
    new _ordersList.default(ordersListPopup[i], {
      onInit: function onInit(instance) {
        document.addEventListener('click', function (e) {
          var closestItem = e.target.closest(instance.options.item);

          if (!closestItem || !instance.el.contains(closestItem)) {
            instance.el.classList.remove(activeClass);
            instance.setActiveItem(null);
          }
        });
        window.addEventListener('resize', function () {
          if (instance.el.classList.contains(activeClass)) return;
          instance.el.classList.remove(activeClass);
          instance.setActiveItem(null);
        });
      },
      onSetItem: function onSetItem(instance, prevItem) {
        if (instance.state.activeItem !== null) {
          var gap = 8;
          var menuItems = popupMenu.querySelectorAll('[data-sef-tmpl]');

          for (var _i15 = 0; _i15 < menuItems.length; _i15++) {
            var tmpl = menuItems[_i15].getAttribute('data-sef-tmpl') || '';
            var data = {
              id_param: 'table_id',
              id_value: instance.state.activeItem.getAttribute('data-id-table')
            };

            menuItems[_i15].setAttribute('href', (0, _setURL.default)(tmpl, data));
          }

          instance.el.classList.add(activeClass);
          (0, _positionEl.default)(popupMenu, instance.state.activeItem, {
            vertical: 'bottom',
            horizontal: 'right'
          });
          popupMenu.style.top = "".concat(instance.state.activeItem.offsetTop + instance.state.activeItem.getBoundingClientRect().height + gap, "px");
        }
      }
    });
  };

  for (var i = 0; i < ordersListPopup.length; i++) {
    _loop(i);
  }

  var keyboard = document.querySelector('.keyboard');
  var keyboardPopup;

  if (keyboard) {
    var keyboardParent = $(keyboard).closest('.content').get(0);
    new _keyboard.default(keyboard, {
      panelActiveClass: 'keyboard_show-panel',
      onTagClick: function onTagClick(instance, tagsArray) {
        var activeItem = document.querySelector('.item-row_active');

        if (activeItem) {
          var basketList = $(activeItem).closest('[data-basket]').get(0);

          var basketListInstance = _basketList.default.instances.get(basketList);

          var productID = activeItem.getAttribute('data-product-id');
          var basketItemID = activeItem.getAttribute('data-basket-line-id'); // let basketID = 'a1';

          var basketID = basketListInstance.basket;
          var orderID = basketList.getAttribute('data-orderid'); // basketListInstance.renderItemTags(activeItem, tagsArray);

          basketListInstance.sendRequest('update', {
            basketItemID: basketItemID,
            productID: productID,
            basketID: basketID,
            orderId: orderID,
            props: {
              tags: tagsArray
            }
          });
        }
      }
    });
    global.Keyboard = _keyboard.default;
    keyboardPopup = new _popup.default(keyboardParent, {
      activeClass: 'content_show-keyboard',
      popup: '.keyboard',
      widthRef: '.c-page',
      onInit: function onInit(instance) {
        var toggle = document.querySelector('.keyboard-toggle');
        toggle && toggle.addEventListener('click', function () {
          instance.open();
        });
      },
      onClose: function onClose(instance) {
        instance.popup.classList.remove('keyboard_show-panel');
        var orderForm = $('.order-form');
        var basketList = orderForm.find('.shopping-list');
        var newControl = basketList.find('.shopping-list__item.u-hidden');

        if (newControl.length) {
          newControl.removeClass('u-hidden');
        }
      }
    });
    $(document).on('click', '[data-keyboard-ref]', function (e) {
      var self = this;

      var keyboardPopup = _popup.default.instances.get(keyboardParent);

      var keyboardInstance = _keyboard.default.instances.get(keyboard);

      var numpadInstance = keyboardInstance.numpad;

      if (!keyboardPopup.isOpened) {
        keyboardPopup.open();
      }

      keyboardInstance.setReference(this); // console.log(self);

      if (this.classList.contains('shopping-list__item_control')) {
        $('.shopping-list__item_editmode').each(function () {
          $(this).removeClass('shopping-list__item_editmode');
          var inputs = $(this).find('input');
          var isOptional = this.getAttribute('data-optional-value') !== null;

          if (!isOptional) {
            inputs.each(function () {
              (0, _handleInputState.default)(this, 'default');
            });
          }
        });
        this.classList.add('shopping-list__item_editmode');

        if (this.classList.contains('shopping-list__item_multiple-inputs')) {
          var value = $(this).find('.shopping-list__value');
          var valueInput = value.find('input');
          var isOptional = this.getAttribute('data-optional-value') !== null;

          if (document.activeElement.nodeName.toLowerCase() === 'input') {
            keyboardInstance.setInput(document.activeElement);
          } else {
            keyboardInstance.setInput(valueInput.get(0));
          }

          if (!isOptional) {
            (0, _handleInputState.default)(keyboardInstance.input, 'edit');
          }
        } else {
          var _value = $(this).find('.shopping-list__value');

          var _valueInput = _value.find('input');

          var _isOptional = this.getAttribute('data-optional-value') !== null; // if (numpadInstance) {


          keyboardInstance.setInput(_valueInput.get(0)); // }

          if (!_isOptional) {
            (0, _handleInputState.default)(_valueInput, 'edit');
          }

          var title = $(this).find('.shopping-list__title');

          if (title.attr('data-focus-text')) {
            title.html(title.attr('data-focus-text'));
          }
        }

        _keyboard.default.instances.get(keyboard).setPanelState('visible');
      }
    });
  } // function showRecommendations (el: HTMLElement, data: []) {
  //   el.parentElement.style.overflow = 'hidden';
  //   el.classList.add('tiles-menu__panel_active');
  // }
  // function closeRecommendations (el: HTMLElement, data: []) {
  //   el.parentElement.style.overflow = '';
  //   el.classList.remove('tiles-menu__panel_active');
  // }


  $('.menu-slider').each(function () {
    var $this = $(this);
    var $main = $this.find('.menu-slider__main');
    var $aside = $this.find('.menu-slider__aside');
    var $asideSlider = $aside.find('.tiles-tablist__list');
    $main.on('init', function (event, slick) {
      slick.$slides.each(function () {
        var el = this;
        el.setAttribute('data-simplebar-thin', ''); // откладываем инициализацию для корректной работы прокрутки

        setTimeout(function () {
          new SimpleBar(el);
        }, 0);
      });
    });
    $main.slick({
      infinite: true,
      // обязательно, иначе наблюдается баг с последним слайдом в таблисте
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: $asideSlider,
      dots: false,
      mobileFirst: true,
      swipe: false
    });
    $asideSlider.slick({
      infinite: true,
      // обязательно, иначе наблюдается баг с последним слайдом в таблисте
      draggable: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="slick-icon svg-ico"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevron-up"></use></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="slick-icon svg-ico"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevron-down"></use></svg></button>',
      appendArrows: $asideSlider.parent(),
      dots: false,
      autoplaySpeed: 5000,
      focusOnSelect: true,
      asNavFor: $main,
      mobileFirst: true,
      vertical: true,
      swipe: false
    });
  });
  var simplebarsThin = document.querySelectorAll('[data-simplebar-thin]');

  for (var _i = 0; _i < simplebarsThin.length; _i++) {
    new SimpleBar(simplebarsThin[_i]);
  }

  $(document).on('click', '.menu-item', function () {
    var activeClass = 'menu-item_active';
    var details = this.querySelector('.menu-item__details');
    var badges = this.querySelector('.badges-list');

    if (this.classList.contains(activeClass)) {
      this.classList.remove(activeClass);

      if (details) {
        details.style.maxHeight = '0';
        window.addEventListener('transitionend', function removeHeight(event) {
          if (event.propertyName !== 'max-height') return;
          details.style.maxHeight = '';
          window.removeEventListener('transitionend', removeHeight);
        });
      }

      if (badges) {
        (0, _manageBadges.default)(badges, 'compact');
      }
    } else {
      this.classList.add(activeClass);

      if (details) {
        details.style.maxHeight = "".concat((0, _getHeight.default)(details), "px");
      }

      if (badges) {
        (0, _manageBadges.default)(badges, 'full');
      }
    }
  });
  document.addEventListener('click', function (e) {
    var anchor = e.target.getAttribute('data-anchor') !== null ? e.target : (0, _findAncestor.default)(e.target, '[data-anchor]');
    var activeClass = 'c-panel_slided';

    if (anchor) {
      e.preventDefault();
      var target = $(anchor.getAttribute('href'));
      $(".".concat(activeClass)).each(function () {
        if (this !== target.get(0)) {
          $(this).removeClass(activeClass);
        }
      });
      $('.main-menu__item_active').each(function () {
        if (this !== anchor) {
          $(this).removeClass('main-menu__item_active');
        }
      });

      if (target.hasClass('c-panel_slide-in') && !target.hasClass(activeClass)) {
        target.addClass(activeClass);
        $(anchor).parent().addClass('main-menu__item_active');
      } else if (target.hasClass('c-panel_slide-in') && target.hasClass(activeClass)) {
        target.removeClass(activeClass);
        $(anchor).parent().removeClass('main-menu__item_active');
      }
    } else {
      if ($(e.target).closest(".".concat(activeClass)).length === 0) {
        $(".".concat(activeClass)).removeClass(activeClass);
        $('.main-menu__item').removeClass('main-menu__item_active');
      }
    }
  });
  $(document).on('click', '[data-set-state]', function () {
    var parent = $(this).closest('[data-state]');
    parent.attr('data-state', $(this).attr('data-set-state'));
  }); // BASKET LISTS

  var basketLists = document.querySelectorAll('[data-basket]');
  var basketOptions = {
    onItemActiveAdd: function onItemActiveAdd(instance, item) {
      _popup.default.instances.get(document.querySelector('.content')).open();

      var keyboardInstance = _keyboard.default.instances.get(document.querySelector('.keyboard'));

      keyboardInstance.setPanelState('visible');
      var tags = item.getAttribute('data-tags');
      var tagsParsed = (0, _attributeToArray.default)(tags);
      keyboardInstance.renderTags(tagsParsed);
    },
    onItemActiveRemove: function onItemActiveRemove(instance, item) {
      var keyboardInstance = _keyboard.default.instances.get(document.querySelector('.keyboard'));

      keyboardInstance.setPanelState('visible');
      keyboardInstance.renderTags();
    },
    onItemDelete: function onItemDelete(instance, item) {
      var keyboardInstance = _keyboard.default.instances.get(document.querySelector('.keyboard'));

      if (keyboardInstance.reference && $(keyboardInstance.reference).closest('[data-basket]').get(0) === instance.el) {
        keyboardInstance.renderTags();
      }

      keyboardInstance.closeRecommendations(document.querySelector('.tiles-menu__panel_recommendations'));
      var orderForm = document.querySelector('.order-form');

      if (orderForm) {
        _orderForm.default.instances.get(orderForm).setTotal();
      }

      var activeItem = document.querySelector('.order-item_active');

      if (activeItem && orderForm) {
        (0, _setData.default)(activeItem, {
          // time_start: '00:00',
          price: orderForm.querySelector('[data-total]').textContent // guests: orderForm.querySelector('[data-guests]').textContent

        });
      } // let basketItemID = item.getAttribute('data-basket-line-id');
      // let basketID = 'a2';
      // if (basketItemID && typeof delElementBasket === 'function') {
      //   delElementBasket(basketItemID, basketID);
      // }


      console.log(instance, item);
    },
    onItemAdd: function onItemAdd(instance, newItem) {
      var orderForm = document.querySelector('.order-form');

      if (orderForm) {
        _orderForm.default.instances.get(orderForm).setTotal();
      }

      var activeItem = document.querySelector('.order-item_active');

      if (activeItem && orderForm) {
        (0, _setData.default)(activeItem, {
          // time_start: '00:00',
          price: orderForm.querySelector('[data-total]').textContent // guests: orderForm.querySelector('[data-guests]').textContent

        });
      } // let item = newItem.querySelector('.item-row');
      // let productID = item.getAttribute('data-product-id');
      // let quantity = 1;
      // let basketID = 'a2';
      // if (productID && typeof addElementBasket === 'function') {
      //   addElementBasket(productID, quantity, basketID);
      // }


      console.log(instance, newItem);
    },
    onItemUpdate: function onItemUpdate(instance, item) {// let basketItemID = item.getAttribute('data-basket-line-id');
      // let
      // let basketID = 'a1'
    },
    onItemMove: function onItemMove(instance, item, oldGroup, newGroup) {
      console.log(instance, item, oldGroup, newGroup);
    }
  };

  for (var _i2 = 0; _i2 < basketLists.length; _i2++) {
    new _basketList.default(basketLists[_i2], basketOptions);
  }

  global.BasketList = _basketList.default;
  global.basketOptions = basketOptions; // ORDER FORM

  var orderForm = document.querySelector('.order-form');

  if (orderForm) {
    new _orderForm.default(orderForm);
    global.OrderForm = _orderForm.default;
  }

  var ordersLists = document.querySelectorAll('.orders-list_tables');

  for (var _i3 = 0; _i3 < ordersLists.length; _i3++) {
    new _ordersList.default(ordersLists[_i3], {
      alwaysActive: true,
      setURL: true,
      urlParam: 'table_id',
      urlAttribute: 'data-id-table',
      onSetItem: function onSetItem(instance, prevItem) {
        var item = instance.state.activeItem;
        if (!item) return;
        var title = item.querySelector('[data-name]');
        var orderForm = document.querySelector('.order-form');

        if (orderForm) {
          var orderFormInstance = _orderForm.default.instances.get(orderForm);

          var allBaskets = item.getAttribute('data-code-table-basket');

          if (allBaskets) {
            orderFormInstance.setPossibleBaskets(Object.keys((0, _attributeToArray.default)(allBaskets)[0]));
          }

          orderFormInstance.setView('overall');
          orderFormInstance.setBasketCode(orderFormInstance.getBasketCode());
          orderFormInstance.setTitle(title ? title.innerHTML.trim() : '');
          orderForm.querySelector('[data-guests]').innerHTML = item.querySelector('[data-guests]').innerHTML;
        }

        var controlAnchors = document.querySelectorAll('.controls-menu__link[data-sef-tmpl]');
        var newURL = '';

        for (var _i4 = 0; _i4 < controlAnchors.length; _i4++) {
          newURL = controlAnchors[_i4].getAttribute('data-sef-tmpl') || '';
          newURL = newURL.replace('<% id_param %>', instance.options.urlParam);
          newURL = newURL.replace('<% id_value %>', instance.state.activeItem.getAttribute(instance.options.urlAttribute));

          controlAnchors[_i4].setAttribute('href', newURL);
        }
      }
    });
  }

  var ordersListsFree = document.querySelectorAll('.orders-list_free');

  for (var _i5 = 0; _i5 < ordersListsFree.length; _i5++) {
    new _ordersList.default(ordersListsFree[_i5], {
      alwaysActive: true,
      setURL: true,
      urlParam: 'table_id',
      urlAttribute: 'data-id-table',
      onSetItem: function onSetItem(instance, prevItem) {
        var item = instance.state.activeItem;
        var orderForm = document.querySelector('.order-form');
        if (!item || !orderForm) return;
        var tableID = parseInt(item.getAttribute('data-id-table') || '');

        var orderFormInstance = _orderForm.default.instances.get(orderForm);

        orderFormInstance.getTableData(tableID);
      }
    });
  }

  var kitchenOrders = document.querySelectorAll('.order-item[draggable]');

  if (kitchenOrders.length) {
    var handleDragStart = function handleDragStart(e) {
      var item = e.target;
      item.classList.add('dragging');
    };

    var handleDragEnd = function handleDragEnd(e) {
      var item = e.target;
      item.classList.remove('dragging');
    };

    var handleDragOver = function handleDragOver(e) {
      e.preventDefault();
    };

    var handleDragDrop = function handleDragDrop(e) {
      e.preventDefault();
      var draggable = document.querySelector('.dragging');
      if (!draggable) return;
      var group = e.target;
      var state = group.getAttribute('data-state');
      var orderID = draggable.getAttribute('data-order-id');
      var basketItemID = draggable.getAttribute('data-basket-line-id');
      var newGroup = e.target.closest('[data-state]');
      var newState = newGroup.getAttribute('data-state');
      var formData = {
        orderId: orderID,
        basketItemId: basketItemID,
        state: newState
      };
      $.ajax({
        type: 'POST',
        url: '/ajax/setDishState.php',
        data: formData,
        dataType: 'json',
        success: function success(response) {
          console.log(response);

          if (response.STATUS === 'success') {
            var listItem = draggable.parentElement;
            var list = listItem.parentElement;
            list.removeChild(listItem);
          }
        },
        error: function error(response) {
          console.log(response);
        }
      });
    };

    var lists = document.querySelectorAll('.c-panel__body[data-drag-target]');

    for (var _i6 = 0; _i6 < kitchenOrders.length; _i6++) {
      if (!kitchenOrders[_i6].classList.contains('u-drag-inited')) {
        kitchenOrders[_i6].addEventListener('dragstart', handleDragStart);

        kitchenOrders[_i6].addEventListener('dragend', handleDragEnd);

        kitchenOrders[_i6].classList.add('u-drag-inited');
      }
    }

    for (var _i7 = 0; _i7 < lists.length; _i7++) {
      if (!lists[_i7].classList.contains('u-drag-inited')) {
        lists[_i7].addEventListener('dragover', handleDragOver);

        lists[_i7].addEventListener('drop', handleDragDrop);

        lists[_i7].classList.add('u-drag-inited');
      }
    }
  }

  var badgesLists = document.querySelectorAll('.badges-list[data-badges="dynamic"]');

  for (var _i8 = 0; _i8 < badgesLists.length; _i8++) {
    (0, _manageBadges.default)(badgesLists[_i8], 'compact');
  }

  var progressBars = document.querySelectorAll('.orders-list [data-progressbar]');
  var progressBarStatuses = {
    success: 'progressbar_success',
    warning: 'progressbar_warning',
    error: 'progressbar_error'
  };

  function setProgressStatus(el, newStatus, statusMap) {
    for (var status in statusMap) {
      if (status !== newStatus) {
        el.classList.remove(statusMap[status]);
      }

      el.classList.add(statusMap[newStatus]);
    }
  }

  for (var _i9 = 0; _i9 < progressBars.length; _i9++) {
    new _progressbar.default(progressBars[_i9], {
      onTick: function onTick(instance) {
        var timePassed = instance.state.current / instance.options.limit * 100;

        if (timePassed >= 50 && timePassed < 75) {
          setProgressStatus(instance.el, 'warning', progressBarStatuses);
        } else if (timePassed >= 75) {
          setProgressStatus(instance.el, 'error', progressBarStatuses);
        }
      }
    });
  } // ACCORDEONS


  var menuAccordeons = document.querySelectorAll('.menu-section');

  for (var _i10 = 0; _i10 < menuAccordeons.length; _i10++) {
    new _acn.default(menuAccordeons[_i10], {
      activeClass: 'menu-section_active',
      toggle: '.menu-section__head',
      body: '.menu-section__body',
      container: '.menu-section__inner'
    });
  } // TABS


  var authTabs = document.querySelector('.auth-form');

  if (authTabs) {
    new _tabs.default(authTabs, {
      tablistClass: 'auth-form__controls',
      contentClass: 'auth-form__panels',
      tabClass: 'auth-form__ctrl',
      linkClass: 'auth-btn',
      panelClass: 'auth-form__panel',
      inactiveClass: 'u-hidden',
      changeURL: false,
      onChange: function onChange(instance) {
        for (var _i11 = 0; _i11 < instance.tabItems.length; _i11++) {
          if (_i11 === instance.state.activeTab) {
            instance.tabItems[_i11].classList.add('u-hidden');
          } else {
            instance.tabItems[_i11].classList.remove('u-hidden');
          }
        }
      }
    });
  }

  var menuTabs = document.querySelectorAll('.c-panel_menu');

  var initMenuAcns = function initMenuAcns(panel) {
    var acns = panel.querySelectorAll('.menu-section');

    var _loop2 = function _loop2(_i12) {
      var instance = _acn.default.instances.get(acns[_i12]);

      var isLoaded = instance.el.classList.contains('u-loaded');

      if (!isLoaded) {
        var iblockID = instance.el.getAttribute('data-iblock-id');
        var sectionID = instance.el.getAttribute('data-id');
        $.ajax({
          url: '/ajax/getSectionItems.php',
          method: 'POST',
          data: {
            iblockID: iblockID,
            sectionID: sectionID,
            template: 'menuItem'
          },
          success: function success(response) {
            // console.log(response);
            instance.container.innerHTML = '';
            $(instance.container).append(response);
            instance.el.classList.add('u-loaded'); // instance.setHeight();

            var badges = instance.el.querySelector('.badges-list');

            if (badges) {
              (0, _manageBadges.default)(badges, 'compact');
            }

            instance.toggleDown();
          }
        });
      } // Acn.instances.get(acns[i]).toggleDown();

    };

    for (var _i12 = 0; _i12 < acns.length; _i12++) {
      _loop2(_i12);
    }
  };

  function updateMenuTitle(tabItem, tabPanel) {
    var menubar = document.querySelector('#menubar');
    var menuTitle = menubar.querySelector('.c-title');
    var title = tabItem.getAttribute('data-title') || '';
    var items = tabPanel.querySelectorAll('.menu-item');
    menuTitle.innerHTML = "".concat(title, " <sup class=\"c-sup c-body c-body_xs\">").concat(items.length, "</sup>");
  }

  for (var _i13 = 0; _i13 < menuTabs.length; _i13++) {
    new _tabs.default(menuTabs[_i13], {
      tablistClass: 'side-menu',
      contentClass: 'menu-panels',
      tabClass: 'side-menu__item',
      linkClass: 'side-menu__link',
      panelClass: 'menu-panels__panel',
      inactiveClass: 'u-hidden',
      changeURL: false,
      onInit: function onInit(instance) {
        initMenuAcns(instance.panels[instance.state.activeTab]);
        updateMenuTitle(instance.tabItems[instance.state.activeTab], instance.panels[instance.state.activeTab]);
      },
      onChange: function onChange(instance) {
        var active = document.querySelector('.side-menu__item_active');

        if (active) {
          active.classList.remove('side-menu__item_active');
        }

        instance.tabs[instance.state.activeTab].parentElement.classList.add('side-menu__item_active');
        initMenuAcns(instance.panels[instance.state.activeTab]);
        updateMenuTitle(instance.tabItems[instance.state.activeTab], instance.panels[instance.state.activeTab]);
      }
    });
  } // AUTH FORM


  var authCodeForm = document.querySelector('.auth-code-form');

  function handleAuth(form, e) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    e.preventDefault();
    var result = $(form).closest('.auth-form__panel').get(0).querySelector('.auth-form__title');
    var defaultTitle = result.getAttribute('data-default-title');
    var resultSuccessClass = 'u-color-success';
    var resultErrorClass = 'u-color-error';
    var redirect = form.getAttribute('data-redirect');
    var formData = $(form).serializeArray();
    var timeout;
    $.ajax({
      type: form.method,
      url: form.action,
      data: formData,
      dataType: 'json',
      success: function success(response) {
        console.log(response);

        switch (response.STATUS) {
          case 'success':
            result.classList.remove(resultErrorClass);
            result.classList.add(resultSuccessClass);
            result.textContent = (0, _formatResult.default)({
              responseText: response.NOTE
            });
            console.log(timeout);
            window.clearTimeout(timeout);

            if (typeof params.onSuccess === 'function') {
              params.onSuccess(form);
            }

            if (redirect) {
              timeout = window.setTimeout(function () {
                window.location.href = redirect;
              }, 1000);
            }

            break;

          case 'error':
            result.classList.remove(resultSuccessClass);
            result.classList.add(resultErrorClass);
            result.innerHTML = (0, _formatResult.default)({
              responseText: response.ERRORS
            });

            if (typeof params.onError === 'function') {
              params.onError(form);
            }

            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
              result.classList.remove(resultErrorClass);
              result.textContent = defaultTitle;
              var field = form.querySelector('.custom-input_error');
              var input;

              if (field) {
                input = field.querySelector('.custom-input__input');
                field.classList.remove('custom-input_error');
                input.value = '';
                setCustomInputValue(input);
              }

              form.reset();
            }, 3000);
            break;
        }
      },
      error: function error(response) {
        console.log(response);
      }
    });
  }

  if (authCodeForm) {
    var numpad = authCodeForm.querySelector('.numpad');
    var codeInput = authCodeForm.querySelector('[name="CODE"]');
    var customInput = (0, _findAncestor.default)(codeInput, '.custom-input');
    var states = {
      success: 'custom-input_success',
      error: 'custom-input_error'
    };
    new _numpad2.default(numpad, {
      input: codeInput
    });
    authCodeForm.addEventListener('submit', function (e) {
      handleAuth(authCodeForm, e, {
        onSuccess: function onSuccess(authCodeForm) {
          customInput.classList.remove(states['error']);
          customInput.classList.add(states['success']);
        },
        onError: function onError(authCodeForm) {
          customInput.classList.remove(states['success']);
          customInput.classList.add(states['error']);
        }
      });
    });
    codeInput.addEventListener('input', function () {
      setCustomInputValue(codeInput, {
        onChange: function onChange(el) {
          if (el.value.length === el.maxLength) {
            authCodeForm.dispatchEvent(new Event('submit'));
          }
        }
      });
    });
  } else {
    var _numpad = document.querySelector('.numpad');

    new _numpad2.default(_numpad, {
      onInputSet: function onInputSet(instance, prevInput) {
        var item = global.$(prevInput).closest('.shopping-list__item').get(0);

        if (!item && prevInput) {
          (0, _handleInputState.default)(prevInput, 'default');
        } else if (item && prevInput) {
          var isOptional = item.getAttribute('data-optional-value') !== null;

          if (!isOptional) {
            (0, _handleInputState.default)(prevInput, 'default');
          }
        }
      }
    });
  }

  var clock = document.querySelector('.c-clock');

  if (clock) {
    (0, _clock.default)(clock);
  } // utility


  function setCustomInputValue(el) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parent = (0, _findAncestor.default)(el, '.custom-input');
    var marks = parent.querySelectorAll('.custom-input__mark');
    var activeClass = 'custom-input__mark_active';

    for (var _i14 = 0; _i14 < marks.length; _i14++) {
      marks[_i14].classList.remove(activeClass);

      if (_i14 < el.value.length) {
        marks[_i14].classList.add(activeClass);
      }
    }

    if (typeof params.onChange === 'function') {
      params.onChange(el);
    }
  }

  function setViewport() {
    var metaViewport = document.querySelector("meta[name=viewport]");
    var breakpoint = 1024;

    if (screen.width > breakpoint) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
    } else {
      metaViewport.setAttribute('content', "width=".concat(breakpoint));
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./utility/arrayToAttribute.ts":
/*!*************************************!*\
  !*** ./utility/arrayToAttribute.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayToAttribute;

function arrayToAttribute(array) {
  var result = JSON.stringify(array);
  result = result.replace(/"/g, "'");
  return result;
}

/***/ }),

/***/ "./utility/attributeToArray.ts":
/*!*************************************!*\
  !*** ./utility/attributeToArray.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attributeToArray;

function attributeToArray(value) {
  if (value === null || value.length === 0) return [];
  value = value.replace(/'/g, '"');
  var result = JSON.parse(value) || [];
  return result;
}

/***/ }),

/***/ "./utility/camelCaseToDash.ts":
/*!************************************!*\
  !*** ./utility/camelCaseToDash.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelCaseToDash;

function camelCaseToDash(string) {
  var ret = '';
  var prevLowercase = false;

  for (var i = 0; i < string.length; i++) {
    var s = '';
    s = string.charAt(i);
    var isUppercase = s.toUpperCase() === s;

    if (isUppercase && prevLowercase) {
      ret += '-';
    }

    ret += s;
    prevLowercase = !isUppercase;
  }

  return ret.replace(/-+/g, '-').toLowerCase();
}

/***/ }),

/***/ "./utility/checkTime.ts":
/*!******************************!*\
  !*** ./utility/checkTime.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkTime;

function checkTime(char) {
  return char < 10 ? "0".concat(char) : char.toString();
}

/***/ }),

/***/ "./utility/findAncestor.ts":
/*!*********************************!*\
  !*** ./utility/findAncestor.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findAncestor;

function findAncestor(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }

    el = el.parentElement;
  }

  return el;
}

;

/***/ }),

/***/ "./utility/formatResult.ts":
/*!*********************************!*\
  !*** ./utility/formatResult.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatResult;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function formatResult(params) {
  var result = '';

  if (_typeof(params.responseText) === 'object') {
    var responseArray = global.$.map(params.responseText, function (value) {
      return value;
    });

    for (var i = 0; i < responseArray.length; i++) {
      result += responseArray[i].replace('Не заполнены следующие обязательные поля', 'Не заполнено поле') + '<br>';
    }
  } else if (typeof params.responseText === 'string') {
    result = params.responseText;
  }

  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./utility/getHeight.ts":
/*!******************************!*\
  !*** ./utility/getHeight.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHeight;

function getHeight(el) {
  var height = 0;
  el.style.display = 'block';
  height = el.scrollHeight;
  el.style.display = '';
  return height;
}

/***/ }),

/***/ "./utility/getViewport.ts":
/*!********************************!*\
  !*** ./utility/getViewport.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewport;

function getViewport() {
  var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {
    width: viewportWidth,
    height: viewportHeight
  };
}

/***/ }),

/***/ "./utility/getWrappedItems.ts":
/*!************************************!*\
  !*** ./utility/getWrappedItems.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWrappedItems;

function getWrappedItems(el, selector) {
  var result = [];
  var currItem = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: 0,
    width: 0
  };
  var items = el.querySelectorAll(selector);
  var minTop = 0;

  for (var i = 0; i < items.length; i++) {
    currItem = items[i].getBoundingClientRect();

    if (i === 0) {
      minTop = currItem.top;
    } else {
      if (currItem.top > minTop) {
        result.push(items[i]);
      }
    }
  }

  return result;
}

/***/ }),

/***/ "./utility/handleInputState.ts":
/*!*************************************!*\
  !*** ./utility/handleInputState.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleInputState;

var _setQuantityFormat = _interopRequireDefault(__webpack_require__(/*! utility/setQuantityFormat */ "./utility/setQuantityFormat.ts"));

var _setPriceFormat = _interopRequireDefault(__webpack_require__(/*! utility/setPriceFormat */ "./utility/setPriceFormat.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleInputState(input, state) {
  var value = global.$(input).val();
  var prop = global.$(input).attr('data-prop');
  var measure = global.$(input).attr('data-measure');

  switch (state) {
    case 'edit':
      if (prop === 'price') {
        global.$(input).val((0, _setPriceFormat.default)(value, 'clean'));
      } else if (prop === 'quantity') {
        global.$(input).val((0, _setQuantityFormat.default)(value, 'clean', measure));
      }

      break;

    case 'default':
      if (prop === 'price') {
        global.$(input).val((0, _setPriceFormat.default)(value, 'formatted'));
      } else if (prop === 'quantity') {
        global.$(input).val((0, _setQuantityFormat.default)(value, 'formatted', measure));
      }

      break;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./utility/hasValueInAttribute.ts":
/*!****************************************!*\
  !*** ./utility/hasValueInAttribute.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasValueInAttribute;

function hasValueInAttribute(el, action, attribute) {
  var actions = el.getAttribute(attribute);
  var actionsArr = [];

  if (actions) {
    actionsArr = actions.split(',');
  }

  return actionsArr.indexOf(action) !== -1;
}

/***/ }),

/***/ "./utility/manageBadges.ts":
/*!*********************************!*\
  !*** ./utility/manageBadges.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = manageBadges;

var _getWrappedItems = _interopRequireDefault(__webpack_require__(/*! utility/getWrappedItems */ "./utility/getWrappedItems.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function manageBadges(list, state) {
  var overflow = '.badges-list__overflow';
  var wrappedItems = (0, _getWrappedItems.default)(list, '.badges-list__item:not(' + overflow + ')');
  var hiddenClass = 'u-hidden';

  if (wrappedItems.length > 0 && state === 'compact') {
    for (var i = 0; i < wrappedItems.length; i++) {
      wrappedItems[i].classList.add(hiddenClass);
    }

    var badge = document.createElement('li');
    badge.className = 'badges-list__item badges-list__overflow u-col';
    badge.innerHTML = "<div class=\"c-badge c-badge_secondary c-badge_sm\">+".concat(wrappedItems.length, "</div>");
    list.appendChild(badge);
    var newItems = list.querySelectorAll('.badges-list__item:not(.' + hiddenClass + '):not(' + overflow + ')');

    if (badge.getBoundingClientRect().top > newItems[newItems.length - 1].getBoundingClientRect().top) {
      newItems[newItems.length - 1].classList.add(hiddenClass);
    }
  } else {
    var _badge = list.querySelector(overflow);

    if (_badge) {
      list.removeChild(_badge);
    }

    var items = list.querySelectorAll('.badges-list__item');

    for (var _i = 0; _i < items.length; _i++) {
      items[_i].classList.remove(hiddenClass);
    }
  }
}

/***/ }),

/***/ "./utility/merge.ts":
/*!**************************!*\
  !*** ./utility/merge.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function merge(target, source) {
  for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (source[key] instanceof Object) _extends(source[key], merge(target[key], source[key]));
  }

  _extends(target || {}, source);

  return target;
}

/***/ }),

/***/ "./utility/numberFormat.ts":
/*!*********************************!*\
  !*** ./utility/numberFormat.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberFormat;

function numberFormat(number, decimals, decPoint, thousandsSep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
  var dec = typeof decPoint === 'undefined' ? '.' : decPoint;
  var s = '';

  var toFixedFix = function toFixedFix(n, prec) {
    if (('' + n).indexOf('e') === -1) {
      return +(Math.round(n + 'e+' + prec) + 'e-' + prec);
    } else {
      var arr = ('' + n).split('e');
      var sig = '';

      if (+arr[1] + prec > 0) {
        sig = '+';
      }

      return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec);
    }
  }; // @todo: for IE parseFloat(0.55).toFixed(0) = 0;


  s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.');

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec);
}

/***/ }),

/***/ "./utility/positionEl.ts":
/*!*******************************!*\
  !*** ./utility/positionEl.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = positionEl;

function positionEl(el, ref, position) {
  el.style.top = '';
  el.style.right = '';
  el.style.bottom = '';
  el.style.left = '';
  var refDims = ref.getBoundingClientRect();
  var elDims = el.getBoundingClientRect();

  if (position.horizontal === 'left') {
    el.style.left = "".concat(refDims.left - elDims.left, "px");
    el.style.right = 'auto';
  } else if (position.horizontal === 'right') {
    el.style.left = "".concat(refDims.left - elDims.left - elDims.width + refDims.width, "px");
    el.style.right = 'auto';
  }

  if (position.vertical === 'top') {
    el.style.top = "".concat(refDims.top - elDims.top, "px");
    el.style.bottom = 'auto';
  } else if (position.vertical === 'bottom') {
    el.style.top = "".concat(refDims.top - elDims.top - elDims.height + refDims.height, "px");
    el.style.bottom = 'auto';
  }
}

/***/ }),

/***/ "./utility/setControlState.ts":
/*!************************************!*\
  !*** ./utility/setControlState.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setControlState;

function setControlState(control, state, disabledClass) {
  var inputsArray = ['button', 'input'];

  switch (state) {
    case 'default':
      control.classList.remove(disabledClass);

      if (inputsArray.indexOf(control.nodeName.toLowerCase()) > -1) {
        control.disabled = false;
      }

      break;

    case 'disabled':
      control.classList.add(disabledClass);

      if (inputsArray.indexOf(control.nodeName.toLowerCase()) > -1) {
        control.disabled = true;
      }

      break;
  }
}

/***/ }),

/***/ "./utility/setData.ts":
/*!****************************!*\
  !*** ./utility/setData.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setData;

function setData(el, data) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var inputsArray = ['input'];

  for (var key in data) {
    var publicKey = key.replace('_', '-');
    var field = el.querySelector("[data-".concat(publicKey, "]"));
    if (!field) continue;

    if (inputsArray.indexOf(field.nodeName.toLowerCase()) > -1) {
      field.value = data[key];
    } else {
      field.innerHTML = data[key];
    }
  }
}

/***/ }),

/***/ "./utility/setDataOptions.ts":
/*!***********************************!*\
  !*** ./utility/setDataOptions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setDataOptions;

var _camelCaseToDash = _interopRequireDefault(__webpack_require__(/*! utility/camelCaseToDash */ "./utility/camelCaseToDash.ts"));

var _merge = _interopRequireDefault(__webpack_require__(/*! utility/merge */ "./utility/merge.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setDataOptions(options, elem) {
  var newOptions = {};

  for (var option in options) {
    var dataOption = elem.getAttribute("data-".concat((0, _camelCaseToDash.default)(option)));
    if (!dataOption) continue;

    if (dataOption === 'true' || dataOption === 'false') {
      dataOption = dataOption === 'true';
    }

    newOptions[option] = dataOption;
  }

  return (0, _merge.default)(options, newOptions);
}

/***/ }),

/***/ "./utility/setPriceFormat.ts":
/*!***********************************!*\
  !*** ./utility/setPriceFormat.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setPriceFormat;

var _numberFormat = _interopRequireDefault(__webpack_require__(/*! utility/numberFormat */ "./utility/numberFormat.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setPriceFormat(price, state) {
  if (state === 'clean') {
    price = price.toString().replace('$', '').replace(',', '.').replace(' ', '');
    price = price.length > 0 ? parseFloat(price) : price;
  } else if (state === 'formatted') {
    price = setPriceFormat(price, 'clean');
    price = price.toString().length > 0 ? price : 0;
    price = '$' + (0, _numberFormat.default)(price, 2, ',', ' ');
  }

  return price;
}

/***/ }),

/***/ "./utility/setQuantityFormat.ts":
/*!**************************************!*\
  !*** ./utility/setQuantityFormat.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setQuantityFormat;

var _numberFormat = _interopRequireDefault(__webpack_require__(/*! utility/numberFormat */ "./utility/numberFormat.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setQuantityFormat(quantity, state, measure) {
  if (state === 'clean') {
    quantity = quantity.toString().replace(measure, '').replace(',', '.').replace(' ', '');
    quantity = quantity.length > 0 ? parseFloat(quantity) : quantity;
  } else if (state === 'formatted') {
    quantity = setQuantityFormat(quantity, 'clean', measure);
    quantity = quantity.toString().length > 0 ? quantity : 0;
    quantity = (0, _numberFormat.default)(quantity, 2, ',', ' ') + measure;
  }

  return quantity;
}

/***/ }),

/***/ "./utility/setStateStatus.ts":
/*!***********************************!*\
  !*** ./utility/setStateStatus.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setProgressStatus;

function setProgressStatus(el, newStatus, statusMap) {
  for (var status in statusMap) {
    if (status !== newStatus) {
      el.classList.remove(statusMap[status]);
    }

    el.classList.add(statusMap[newStatus]);
  }
}

/***/ }),

/***/ "./utility/setURL.ts":
/*!***************************!*\
  !*** ./utility/setURL.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setURL;

function setURL(template, data) {
  var result = template;

  for (var key in data) {
    if (result.indexOf("<% ".concat(key, " %>")) > -1) {
      result = result.replace("<% ".concat(key, " %>"), data[key]);
    }
  }

  return result;
}

/***/ }),

/***/ "./utility/throttle.ts":
/*!*****************************!*\
  !*** ./utility/throttle.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;

function throttle(f, wait) {
  var isThrottling = false;
  var hasTrailingCall = false;
  var lastContext;
  var lastArgs;
  var lastResult;

  var invokeFunc = function invokeFunc(context, args) {
    lastResult = f.apply(context, args);
    isThrottling = true;
    setTimeout(function () {
      isThrottling = false;

      if (hasTrailingCall) {
        invokeFunc(lastContext, lastArgs);
        lastContext = undefined;
        lastArgs = undefined;
        hasTrailingCall = false;
      }
    }, wait);
  };

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!isThrottling) {
      invokeFunc(this, args);
    } else {
      hasTrailingCall = true;
      lastContext = true;
      lastArgs = args;
    }

    return lastResult;
  };
}

/***/ }),

/***/ "./utility/updateControlsList.ts":
/*!***************************************!*\
  !*** ./utility/updateControlsList.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateControlsList;

var _hasValueInAttribute = _interopRequireDefault(__webpack_require__(/*! utility/hasValueInAttribute */ "./utility/hasValueInAttribute.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateControlsList(el, list) {
  var hiddenClass = 'u-hidden';
  var state = el.getAttribute('data-state') || '';
  var controls = list.querySelectorAll('[data-display-state]');

  for (var i = 0; i < controls.length; i++) {
    if ((0, _hasValueInAttribute.default)(controls[i], state, 'data-display-state')) {
      controls[i].classList.remove(hiddenClass);
    } else {
      controls[i].classList.add(hiddenClass);
    }
  }
}

/***/ }),

/***/ "./utility/updateQueryString.ts":
/*!**************************************!*\
  !*** ./utility/updateQueryString.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateQueryString;

function updateQueryString(key, value) {
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!url) url = window.location.href;
  var re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi');
  var hash;

  if (re.test(url)) {
    if (typeof value !== 'undefined' && value !== null) {
      return url.replace(re, '$1' + key + '=' + value + '$2$3');
    } else {
      hash = url.split('#');
      url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');

      if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
        url += '#' + hash[1];
      }

      return url;
    }
  } else {
    if (typeof value !== 'undefined' && value !== null) {
      var separator = url.indexOf('?') !== -1 ? '&' : '?';
      hash = url.split('#');
      url = hash[0] + separator + key + '=' + value;

      if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
        url += '#' + hash[1];
      }

      return url;
    } else {
      return url;
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvY29udHJvbHMvYWNjb3JkZW9uL2Fjbi50cyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvY29udHJvbHMvY2xvY2svY2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4uL3RlbXBsYXRlcy9jb21wb25lbnRzL2NvbnRyb2xzL2tleWJvYXJkL2tleWJvYXJkLnRzIiwid2VicGFjazovLy8uLi90ZW1wbGF0ZXMvY29tcG9uZW50cy9jb250cm9scy9udW1wYWQvbnVtcGFkLnRzIiwid2VicGFjazovLy8uLi90ZW1wbGF0ZXMvY29tcG9uZW50cy9jb250cm9scy9wb3B1cC9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvY29udHJvbHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3RlbXBsYXRlcy9jb21wb25lbnRzL2NvbnRyb2xzL3RhYnMvdGFicy50cyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvZm9ybXMvb3JkZXItZm9ybS9vcmRlci1mb3JtLnRzIiwid2VicGFjazovLy8uLi90ZW1wbGF0ZXMvY29tcG9uZW50cy9saXN0cy9iYXNrZXQtbGlzdC9iYXNrZXQtbGlzdC50cyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvbGlzdHMvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4uL3RlbXBsYXRlcy9jb21wb25lbnRzL2xpc3RzL3RhYmxlcy1saXN0LXNtL3RhYmxlcy1saXN0LXNtLnRzIiwid2VicGFjazovLy8uLi90ZW1wbGF0ZXMvY29tcG9uZW50cy9sb2FkZXJzL3JhZGlhbC1sb2FkZXIvcmFkaWFsLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHMvbmF2L2dyb3VwLW1lbnUvZ3JvdXAtbWVudS50cyIsIndlYnBhY2s6Ly8vLi9hbGxzY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9hcnJheVRvQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3V0aWxpdHkvYXR0cmlidXRlVG9BcnJheS50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2NhbWVsQ2FzZVRvRGFzaC50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2NoZWNrVGltZS50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2ZpbmRBbmNlc3Rvci50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2Zvcm1hdFJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2dldEhlaWdodC50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2dldFZpZXdwb3J0LnRzIiwid2VicGFjazovLy8uL3V0aWxpdHkvZ2V0V3JhcHBlZEl0ZW1zLnRzIiwid2VicGFjazovLy8uL3V0aWxpdHkvaGFuZGxlSW5wdXRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L2hhc1ZhbHVlSW5BdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9tYW5hZ2VCYWRnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9tZXJnZS50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L251bWJlckZvcm1hdC50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L3Bvc2l0aW9uRWwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9zZXRDb250cm9sU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9zZXREYXRhLnRzIiwid2VicGFjazovLy8uL3V0aWxpdHkvc2V0RGF0YU9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9zZXRQcmljZUZvcm1hdC50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L3NldFF1YW50aXR5Rm9ybWF0LnRzIiwid2VicGFjazovLy8uL3V0aWxpdHkvc2V0U3RhdGVTdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS9zZXRVUkwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS90aHJvdHRsZS50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L3VwZGF0ZUNvbnRyb2xzTGlzdC50cyIsIndlYnBhY2s6Ly8vLi91dGlsaXR5L3VwZGF0ZVF1ZXJ5U3RyaW5nLnRzIl0sIm5hbWVzIjpbIkFjbiIsImVsIiwib3B0aW9ucyIsInNlbGYiLCJpbnN0YW5jZXMiLCJzZXQiLCJzZXRIZWlnaHQiLCJhbmltYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRvY3VtZW50IiwidG9nZ2xlVXAiLCJ0b2dnbGUiLCJoYW5kbGVDbGljayIsImNvbnRlbnQiLCJvblRyYW5zaXRpb25FbmQiLCJzdHlsZSIsImhlaWdodCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlQ2xhc3MiLCJ0b2dnbGVEb3duIiwib25CZWZvcmVPcGVuIiwiYWRkIiwic2V0QXR0cmlidXRlIiwid2luZG93IiwicmVtb3ZlSGVpZ2h0IiwiZXZlbnQiLCJwcm9wZXJ0eU5hbWUiLCJvdmVyZmxvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpY29uVXNlIiwiaWNvbnMiLCJhY3RpdmUiLCJkZWZhdWx0Iiwic2V0QXR0cmlidXRlTlMiLCJvbk9wZW4iLCJzY3JvbGxIZWlnaHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlVmlzaWJpbGl0eSIsInJlbW92ZSIsIm9uQ2xvc2UiLCJkZWZhdWx0cyIsImljb24iLCJoZWFkIiwiYm9keSIsImNvbnRhaW5lciIsImdyb3VwIiwiaW5zdGFuY2UiLCJFcnJvciIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkaW5nIiwiaW5pdCIsIldlYWtNYXAiLCJpbml0Q2xvY2siLCJzZXRJbnRlcnZhbCIsInNldEN1cnJlbnREYXRlVGltZSIsInNldENpdHkiLCJlbFRpbWUiLCJlbERhdGUiLCJtb250aHMiLCJ3ZWVrZGF5cyIsImRhdGUiLCJEYXRlIiwiaW5uZXJIVE1MIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0RGF5Iiwic3Vic3RyaW5nIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiY2l0eSIsImdsb2JhbCIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsIktleWJvYXJkIiwibnVtcGFkIiwiTnVtcGFkIiwic3RhdGUiLCJnZXRTdGF0ZSIsInBhbmVsIiwidGFncyIsIm9uIiwiaGFuZGxlVGFnQ2xpY2siLCJhY3Rpb24iLCJhdHRyIiwiYWN0aXZlSXRlbSIsImFjdGl2ZUxpc3RJdGVtIiwicGFyZW50IiwiYmFza2V0TGlzdCIsImNsb3Nlc3QiLCJnZXQiLCJiYXNrZXRMaXN0SW5zdGFuY2UiLCJCYXNrZXRMaXN0IiwibnVtcGFkSW5zdGFuY2UiLCJQb3B1cEluc3RhbmNlIiwiUG9wdXAiLCJwcm9kdWN0SUQiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJiYXNrZXRJdGVtSUQiLCJiYXNrZXRJRCIsImJhc2tldCIsIm9yZGVyRm9ybSIsIm9yZGVyRm9ybUluc3RhbmNlIiwiY2xvc2UiLCJpbnB1dCIsInNob3BwaW5nQ29udHJvbCIsIk9yZGVyRm9ybSIsImJhc2tldEluc3RhbmNlIiwic3RlcCIsImxpc3QiLCJvdXRjb21lIiwiaW5jb21lIiwiYmFza2V0VG90YWwiLCJnZXRUb3RhbCIsImZpZWxkIiwicHJvcCIsIml0ZW0iLCJpc09wdGlvbmFsIiwidmFsdWUiLCJzZXRJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kUmVxdWVzdCIsInF1YW50aXR5Iiwib3JkZXJJZCIsInByb3BzIiwiY29kZSIsImZpbmQiLCJodG1sIiwidGltZSIsInRhYmxlSWQiLCJyZXBsYWNlIiwib3JkZXJJRCIsImJhc2tldEl0ZW1zIiwiZ2V0SXRlbXMiLCJkZWxldGVPcmRlciIsIm5hbWUiLCJleGlzdGluZ05vZGUiLCJlYWNoIiwic2V0U2hvcHBpbmdJdGVtU3RhdGUiLCJuZXdJdGVtIiwiY2xvbmUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXBwZW5kIiwidGl0bGUiLCJmb2N1cyIsInJlbW92ZUF0dHJpYnV0ZSIsInRvTG93ZXJDYXNlIiwicmVmZXJlbmNlIiwiZmlyc3RSZWYiLCJzZXRSZWZlcmVuY2UiLCJoYXNPZmZlcnMiLCJvZmZlciIsImRhdGEiLCJwcm9kdWN0SWQiLCJwcmljZSIsInRhZ3NQYXJzZWQiLCJyZW5kZXJUYWdzIiwicmVjb21tZW5kYXRpb25zIiwiZGF0YVJlY29tIiwic2hvd1JlY29tbWVuZGF0aW9ucyIsInJlYyIsInJlY1RvZ2dsZSIsImNsb3NlUmVjb21tZW5kYXRpb25zIiwidGlsZXNJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwicG9wdXAiLCJ3aWR0aFJlZiIsImJlZm9yZUFjdGlvbiIsIm9uSW5pdCIsImNsb3NlVG9nZ2xlIiwic2Nyb2xsYWJsZVBhcmVudCIsImlzTG9hZGVkIiwiaWJsb2NrSUQiLCJzZWN0aW9uSUQiLCJsb2FkZXIiLCJMb2FkZXIiLCJtZXRob2QiLCJzZXRTdGF0ZSIsInRhZ2xpc3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsInRhZyIsInRhZ1RlbXBsYXRlIiwidGFnc0FycmF5IiwicHVzaCIsInRyaW0iLCJvblRhZ0NsaWNrIiwiY29udHJvbHMiLCJwb3B1cEluc3RhbmNlIiwiaXNPcGVuZWQiLCJwYW5lbEFjdGl2ZUNsYXNzIiwib2xkSW5wdXQiLCJvbGRSZWYiLCJtZW51IiwiaXRlbXMiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJhY3Rpb25zIiwiZWRpdENsYXNzIiwidmFsdWVJbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsImlucHV0cyIsImJ1dHRvbnMiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ3aGljaCIsInNsaWNlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwibWF4TGVuZ3RoIiwib25JbnB1dFNldCIsInByZXZJbnB1dCIsImtleUNvZGVzIiwiYmFja3NwYWNlIiwib3BlbiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsInNldFdpZHRoIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiY3NzVGV4dCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJlbERpbXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWZEaW1zIiwiZGlmZiIsImxlZnQiLCJvblBvc2l0aW9uIiwib25SZXNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJQcm9ncmVzc0JhciIsInN0b3BwZWQiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJiYXIiLCJjdXJyZW50V2lkdGgiLCJjdXJyZW50IiwibGltaXQiLCJtYXhXaWR0aCIsInRpbWVyIiwiZ2V0VGltZSIsImZvcm1hdFRpbWUiLCJ0aW1lRm9ybWF0Iiwib25UaWNrIiwic2Vjb25kcyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJ0aW1lT2JqIiwiZm9ybWF0IiwicmVzdWx0Iiwic3RhcnQiLCJzdG9wIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIlRhYnMiLCJjaGFuZ2VVUkwiLCJ0YXJnZXRJRCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsInRhcmdldFRhYiIsInRhYmxpc3QiLCJ0YWJzIiwidGFyZ2V0SW5kZXgiLCJBcnJheSIsInByb3RvdHlwZSIsImluZGV4T2YiLCJjYWxsIiwic3dpdGNoVGFiIiwidGFiIiwiYWN0aXZlVGFiIiwidGFiSW5kZXgiLCJpbmRleCIsInByZXZlbnREZWZhdWx0IiwiZGlyIiwicGFuZWxzIiwibmV3VGFiIiwib2xkVGFiIiwiaW5hY3RpdmVDbGFzcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJvbkNoYW5nZSIsInRhYmxpc3RDbGFzcyIsImNvbnRlbnRDbGFzcyIsInRhYkNsYXNzIiwibGlua0NsYXNzIiwicGFuZWxDbGFzcyIsInRhYkl0ZW1zIiwiY29udGVudHMiLCJnZXRBY3RpdmVUYWIiLCJUaW1lVHJhY2tlciIsInNldERheVN0YXR1cyIsImdldERheVN0YXR1cyIsImJyZWFrRHVyYXRpb24iLCJkYXlTdGF0dXMiLCJzaG93UGFuZWwiLCJjb250cm9sIiwiaGFuZGxlQWN0aW9uIiwiYW5jaG9yIiwiZGVzdHJveVBhbmVsIiwicGFyYW1zIiwiYnJlYWtfZHVyYXRpb24iLCJkYXRhVHlwZSIsIlNUQVRVUyIsIkRBWV9TVEFUVVMiLCJjb250cm9sc0xpc3QiLCJocmVmIiwiYWN0aXZlUGFuZWwiLCJhdHRycyIsImVycm9yIiwiY29tcGxldGUiLCJ0ZW1wbGF0ZSIsImRheUxlbmd0aCIsIk11c3RhY2hlIiwicmVuZGVyIiwiYXBwZW5kVG8iLCJicmVha3MiLCJ0aW1lUGFzc2VkIiwiYnJlYWtMZW5ndGgiLCJicmVha0xlbmd0aFNlYyIsInByb2dyZXNzIiwicHJvZ3Jlc3NCYXJTdGF0dXNlcyIsInN0YXR1cyIsInN0YWdlIiwidmlldyIsImdldEJhc2tldENvZGUiLCJzZXRUb3RhbCIsIm5ld1ZpZXciLCJzZXRWaWV3IiwibG9hZEJhc2tldCIsImhhbmRsZVZpZXciLCJoYW5kbGVTdWJtaXQiLCJiYXNrZXRzIiwib3JkZXJzIiwicmVkaXJlY3QiLCJzZXJpYWxpemVBcnJheSIsInRpbWVQbGFjZU9yZGVyIiwidGltZV9zdGFydCIsInN1Ym1pdEJ0biIsIm1zZyIsImkxOG4iLCJsYW5nIiwidGV4dENvbnRlbnQiLCJwcmV2VGV4dCIsIm9uQ29tcGxldGUiLCJpZCIsIkRBVEEiLCJkZWxPcmRlciIsImRlc3Ryb3kiLCJsb2FkUGFyYW1zIiwicHJvY2Vzc0RhdGEiLCJiYXNrZXRPcHRpb25zIiwiYWN0aXZlVGFibGUiLCJwb3NzaWJsZUJhc2tldHMiLCJhY3RpdmVPcmRlciIsInZpZXdDb250cm9scyIsInRleHQiLCJpc19hamF4Iiwib2xkQmFza2V0cyIsImtleWJvYXJkIiwia2V5Ym9hcmRJbnN0YW5jZSIsImluaXRHcm91cENvbnRyb2wiLCJzZXRCYXNrZXRDb2RlIiwidG90YWwiLCJ0b3RhbEl0ZW1zIiwiaW5mbyIsImNvdW50IiwiZW4iLCJvcmRlciIsInJ1Iiwidmlld3MiLCJnZXRWaWV3IiwiYmFza2V0Q29kZXMiLCJiYXNrZXRDb2Rlc1BhcnNlZCIsImJhc2tldENvZGVGaXJzdCIsImJhc2tldENvZGVzQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwibmV3Q29kZSIsImdyb3Vwc0xpc3QiLCJncm91cHNUb3RhbCIsImhhbmRsZUFjdGl2ZSIsImNvbnRlbnRCbG9jayIsImhhbW1lcnRpbWUiLCJIYW1tZXIiLCJoYW5kbGVTd2lwZSIsInJlZiIsInBhcmVudEdyb3VwIiwiY2hlY2tlZEl0ZW1zIiwiZmlsdGVyIiwiR3JvdXBNZW51IiwiZ3JvdXBNZW51IiwicmVsb2FkIiwidXBkYXRlTGlzdFN0YXRlIiwiY2FsbGJhY2siLCJkcmFnZ2FibGVzIiwiYWRkSXRlbURyYWdFdmVudHMiLCJhZGRMaXN0RHJhZ0V2ZW50cyIsImFkZEVsZW1lbnRCYXNrZXQiLCJzZXRPcmRlciIsImdldFBvc3QiLCJzZXRQYW5lbFN0YXRlIiwib25JdGVtQWRkIiwicGFydGlhbCIsImRlbEVsZW1lbnRCYXNrZXQiLCJvbkl0ZW1EZWxldGUiLCJ1cGRhdGVFbGVtZW50QmFza2V0Iiwib25JdGVtVXBkYXRlIiwiYWRkQmFza2V0IiwiZGVsZXRlIiwiZHJhZ1NyYyIsIm9uSXRlbU1vdmUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiYWZ0ZXJFbGVtZW50IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImNsaWVudFkiLCJkcmFnZ2FibGUiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInkiLCJkaXZzIiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJyZWR1Y2UiLCJjaGlsZCIsImJveCIsIm9mZnNldCIsInRvcCIsImVsZW1lbnQiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsImxhc3RJbmRleCIsImxhc3QiLCJuZXdJbmRleCIsImxhc3RCYXNrZXRPcHRpb25zIiwiYWZ0ZXIiLCJuZXdMYXN0TGlzdCIsIm5ld0Jhc2tldCIsIm5ld1JlZiIsImZvb3RlciIsInRoYXQiLCJvbkl0ZW1BY3RpdmVSZW1vdmUiLCJvbkl0ZW1BY3RpdmVBZGQiLCJkaXJlY3Rpb24iLCJhc2lkZVJpZ2h0IiwiY2hpbGRyZW4iLCJjc3MiLCJhbmltYXRlIiwiZHVyYXRpb24iLCJyb3ciLCJpbnB1dHNBcnJheSIsImxpc3RTaXplIiwiZ3JvdXBUb3RhbCIsImhhbmRsZURyYWdPdmVyIiwiT3JkZXJzTGlzdCIsImFsd2F5c0FjdGl2ZSIsImdldEFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwicHJldkl0ZW0iLCJzZXRVUkwiLCJ1cmxBdHRyaWJ1dGUiLCJuZXdVUkwiLCJ1cmxQYXJhbSIsInBhdGgiLCJvblNldEl0ZW0iLCJvbkJlZm9yZUNsaWNrIiwiVGFibGVzTGlzdCIsInRhYmxlIiwiaXRlbUFjdGl2ZUNsYXNzIiwic2V0UG9wdXAiLCJwb3NpdGlvblBvcHVwIiwidW5kZWZpbmVkIiwiYmFkZ2VzIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwicGFyc2VGbG9hdCIsImRpdiIsIm92ZXJsYXkiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJwcmltYXJ5IiwiYW5pbWF0ZWRDbGFzc05hbWUiLCJzdGF0ZXMiLCJ0aW1lb3V0IiwidmlzaWJsZSIsImhpZGRlbiIsIm5ld0dyb3VwIiwibmV3TGlzdCIsImdldERhdGEiLCJpc05ldyIsImdyb3VwcyIsIml0ZW1UZW1wbGF0ZSIsInNpemUiLCJhdHRyaWJ1dGVUb0FycmF5IiwiYXJyYXlUb0F0dHJpYnV0ZSIsIlNpbXBsZUJhciIsImhhbmRsZVZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJhY2NvdW50UGFuZWwiLCJ0YWJsZXNMaXN0Iiwib3JkZXJzTGlzdFBvcHVwIiwicG9wdXBNZW51IiwiY2xvc2VzdEl0ZW0iLCJnYXAiLCJtZW51SXRlbXMiLCJ0bXBsIiwiaWRfcGFyYW0iLCJpZF92YWx1ZSIsIm9mZnNldFRvcCIsImtleWJvYXJkUG9wdXAiLCJrZXlib2FyZFBhcmVudCIsIm5ld0NvbnRyb2wiLCIkdGhpcyIsIiRtYWluIiwiJGFzaWRlIiwiJGFzaWRlU2xpZGVyIiwic2xpY2siLCIkc2xpZGVzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImZhZGUiLCJhc05hdkZvciIsImRvdHMiLCJtb2JpbGVGaXJzdCIsInN3aXBlIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXBwZW5kQXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsImZvY3VzT25TZWxlY3QiLCJzaW1wbGViYXJzVGhpbiIsImRldGFpbHMiLCJtYXhIZWlnaHQiLCJoYXNDbGFzcyIsImJhc2tldExpc3RzIiwib2xkR3JvdXAiLCJvcmRlcnNMaXN0cyIsImFsbEJhc2tldHMiLCJzZXRQb3NzaWJsZUJhc2tldHMiLCJzZXRUaXRsZSIsImNvbnRyb2xBbmNob3JzIiwib3JkZXJzTGlzdHNGcmVlIiwidGFibGVJRCIsImdldFRhYmxlRGF0YSIsImtpdGNoZW5PcmRlcnMiLCJoYW5kbGVEcmFnRHJvcCIsIm5ld1N0YXRlIiwiZm9ybURhdGEiLCJiYXNrZXRJdGVtSWQiLCJsaXN0SXRlbSIsImxpc3RzIiwiYmFkZ2VzTGlzdHMiLCJwcm9ncmVzc0JhcnMiLCJ3YXJuaW5nIiwic2V0UHJvZ3Jlc3NTdGF0dXMiLCJuZXdTdGF0dXMiLCJzdGF0dXNNYXAiLCJtZW51QWNjb3JkZW9ucyIsImF1dGhUYWJzIiwibWVudVRhYnMiLCJpbml0TWVudUFjbnMiLCJhY25zIiwidXBkYXRlTWVudVRpdGxlIiwidGFiSXRlbSIsInRhYlBhbmVsIiwibWVudWJhciIsIm1lbnVUaXRsZSIsImF1dGhDb2RlRm9ybSIsImhhbmRsZUF1dGgiLCJmb3JtIiwiZGVmYXVsdFRpdGxlIiwicmVzdWx0U3VjY2Vzc0NsYXNzIiwicmVzdWx0RXJyb3JDbGFzcyIsInJlc3BvbnNlVGV4dCIsIk5PVEUiLCJjbGVhclRpbWVvdXQiLCJvblN1Y2Nlc3MiLCJFUlJPUlMiLCJvbkVycm9yIiwic2V0Q3VzdG9tSW5wdXRWYWx1ZSIsInJlc2V0IiwiY29kZUlucHV0IiwiY3VzdG9tSW5wdXQiLCJjbG9jayIsIm1hcmtzIiwibWV0YVZpZXdwb3J0IiwiYnJlYWtwb2ludCIsInNjcmVlbiIsImFycmF5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiY2FtZWxDYXNlVG9EYXNoIiwic3RyaW5nIiwicmV0IiwicHJldkxvd2VyY2FzZSIsInMiLCJjaGFyQXQiLCJpc1VwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiY2hlY2tUaW1lIiwiY2hhciIsImZpbmRBbmNlc3RvciIsInNlbGVjdG9yIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZm9ybWF0UmVzdWx0IiwicmVzcG9uc2VBcnJheSIsIm1hcCIsImdldEhlaWdodCIsImRpc3BsYXkiLCJnZXRWaWV3cG9ydCIsInZpZXdwb3J0V2lkdGgiLCJtYXgiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJ2aWV3cG9ydEhlaWdodCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0V3JhcHBlZEl0ZW1zIiwiY3Vyckl0ZW0iLCJib3R0b20iLCJyaWdodCIsIm1pblRvcCIsImhhbmRsZUlucHV0U3RhdGUiLCJ2YWwiLCJtZWFzdXJlIiwiaGFzVmFsdWVJbkF0dHJpYnV0ZSIsImF0dHJpYnV0ZSIsImFjdGlvbnNBcnIiLCJzcGxpdCIsIm1hbmFnZUJhZGdlcyIsIndyYXBwZWRJdGVtcyIsImhpZGRlbkNsYXNzIiwiYmFkZ2UiLCJuZXdJdGVtcyIsIm1lcmdlIiwic291cmNlIiwibnVtYmVyRm9ybWF0IiwibnVtYmVyIiwiZGVjaW1hbHMiLCJkZWNQb2ludCIsInRob3VzYW5kc1NlcCIsIm4iLCJpc0Zpbml0ZSIsInByZWMiLCJhYnMiLCJzZXAiLCJkZWMiLCJ0b0ZpeGVkRml4Iiwicm91bmQiLCJhcnIiLCJzaWciLCJ0b0ZpeGVkIiwiam9pbiIsInBvc2l0aW9uRWwiLCJzZXRDb250cm9sU3RhdGUiLCJkaXNhYmxlZENsYXNzIiwiZGlzYWJsZWQiLCJzZXREYXRhIiwicHVibGljS2V5Iiwic2V0RGF0YU9wdGlvbnMiLCJlbGVtIiwibmV3T3B0aW9ucyIsIm9wdGlvbiIsImRhdGFPcHRpb24iLCJzZXRQcmljZUZvcm1hdCIsInNldFF1YW50aXR5Rm9ybWF0IiwidGhyb3R0bGUiLCJmIiwid2FpdCIsImlzVGhyb3R0bGluZyIsImhhc1RyYWlsaW5nQ2FsbCIsImxhc3RDb250ZXh0IiwibGFzdEFyZ3MiLCJsYXN0UmVzdWx0IiwiaW52b2tlRnVuYyIsImNvbnRleHQiLCJhcmdzIiwiYXBwbHkiLCJ1cGRhdGVDb250cm9sc0xpc3QiLCJ1cGRhdGVRdWVyeVN0cmluZyIsInJlIiwiUmVnRXhwIiwidGVzdCIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtE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QUMsQ0FBRCxDQUFYLEtBQW1CLFdBQW5CLElBQWtDQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksSUFBbEQsRUFBd0Q7QUFDdER2TSxXQUFHLElBQUksTUFBTXVNLElBQUksQ0FBQyxDQUFELENBQWpCO0FBQ0Q7O0FBRUQsYUFBT3ZNLEdBQVA7QUFDRDtBQUNGLEdBYkQsTUFhTztBQUNMLFFBQUksT0FBT2lELEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NBLEtBQUssS0FBSyxJQUE5QyxFQUFvRDtBQUNsRCxVQUFJc2tCLFNBQVMsR0FBR3ZuQixHQUFHLENBQUMrTSxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQXRCLEdBQTBCLEdBQTFCLEdBQWdDLEdBQWhEO0FBQ0FSLFVBQUksR0FBR3ZNLEdBQUcsQ0FBQ2drQixLQUFKLENBQVUsR0FBVixDQUFQO0FBQ0Foa0IsU0FBRyxHQUFHdU0sSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVZ2IsU0FBVixHQUFzQjNlLEdBQXRCLEdBQTRCLEdBQTVCLEdBQWtDM0YsS0FBeEM7O0FBRUEsVUFBSSxPQUFPc0osSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUFuQixJQUFrQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLElBQWxELEVBQXdEO0FBQ3REdk0sV0FBRyxJQUFJLE1BQU11TSxJQUFJLENBQUMsQ0FBRCxDQUFqQjtBQUNEOztBQUVELGFBQU92TSxHQUFQO0FBQ0QsS0FWRCxNQVVPO0FBQ0wsYUFBT0EsR0FBUDtBQUNEO0FBQ0Y7QUFDRixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYWxsc2NyaXB0LnRzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gJ3V0aWxpdHkvbWVyZ2UnO1xuaW1wb3J0IHNldERhdGFPcHRpb25zIGZyb20gJ3V0aWxpdHkvc2V0RGF0YU9wdGlvbnMnO1xuaW1wb3J0IGdldEhlaWdodCBmcm9tICd1dGlsaXR5L2dldEhlaWdodCc7XG5cbmludGVyZmFjZSBJY29ucyB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbiAgYWN0aXZlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBPcHRpb25zIHtcbiAgYWN0aXZlQ2xhc3M6IHN0cmluZztcbiAgdG9nZ2xlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgaGVhZDogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGNvbnRhaW5lcjogc3RyaW5nO1xuICBpY29uczogSWNvbnM7XG4gIGdyb3VwOiBib29sZWFuO1xuICBhbmltYXRpb246IHN0cmluZztcbiAgb25CZWZvcmVPcGVuOiAoaW5zdGFuY2U6IEFjbikgPT4gdm9pZCxcbiAgb25PcGVuOiAoaW5zdGFuY2U6IEFjbikgPT4gdm9pZCxcbiAgb25DbG9zZTogKGluc3RhbmNlOiBBY24pID0+IHZvaWQ7XG4gIG9uVHJhbnNpdGlvbkVuZDogKGluc3RhbmNlOiBBY24pID0+IHZvaWQ7XG4gIFtrZXk6IHN0cmluZ106IE9wdGlvbnNba2V5b2YgT3B0aW9uc107XG59XG5cbmNsYXNzIEFjbiB7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgb3B0aW9uczogT3B0aW9ucztcbiAgdG9nZ2xlOiBIVE1MRWxlbWVudDtcbiAgaWNvbjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBpY29uVXNlOiBTVkdVc2VFbGVtZW50IHwgbnVsbDtcbiAgaGVhZGluZzogSFRNTEVsZW1lbnQ7XG4gIGNvbnRlbnQ6IEhUTUxFbGVtZW50O1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgb3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdHM6IE9wdGlvbnMgPSB7XG4gICAgICBhY3RpdmVDbGFzczogJ2MtYWNuX2FjdGl2ZScsXG4gICAgICB0b2dnbGU6ICcuYy1hY25fX3RvZ2dsZScsXG4gICAgICBpY29uOiAnLmMtYWNuX19pY29uJyxcbiAgICAgIGhlYWQ6ICcuYy1hY25fX2hlYWQnLFxuICAgICAgYm9keTogJy5jLWFjbl9fY29udGVudCcsXG4gICAgICBjb250YWluZXI6ICcuYy1hY25fX2lubmVyJyxcbiAgICAgIGljb25zOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdpbWFnZXMvc3ZnLnN2ZyNwbHVzLWNpcmNsZScsXG4gICAgICAgIGFjdGl2ZTogJ2ltYWdlcy9zdmcuc3ZnI21pbnVzLWNpcmNsZSdcbiAgICAgIH0sXG4gICAgICBncm91cDogZmFsc2UsXG4gICAgICBhbmltYXRpb246ICd0b2dnbGUnLFxuICAgICAgb25CZWZvcmVPcGVuOiBmdW5jdGlvbiAoaW5zdGFuY2U6IEFjbikge30sXG4gICAgICBvbk9wZW46IGZ1bmN0aW9uIChpbnN0YW5jZTogQWNuKSB7fSxcbiAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIChpbnN0YW5jZTogQWNuKSB7fSxcbiAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGluc3RhbmNlOiBBY24pIHt9XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IHBhc3NlZCcpO1xuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZShkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zID0gc2V0RGF0YU9wdGlvbnModGhpcy5vcHRpb25zLCBlbCk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy50b2dnbGUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLnRvZ2dsZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5pY29uID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5pY29uKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmljb25Vc2UgPSB0aGlzLmljb24gPyB0aGlzLmljb24ucXVlcnlTZWxlY3RvcigndXNlJykgYXMgU1ZHVXNlRWxlbWVudCA6IG51bGw7XG4gICAgdGhpcy5oZWFkaW5nID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oZWFkKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmJvZHkpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5jb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIEFjbi5pbnN0YW5jZXMuc2V0KHNlbGYuZWwsIHNlbGYpO1xuXG4gICAgc2VsZi5zZXRIZWlnaHQoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uID09PSAnZHJvcGRvd24nKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZVVwKCkpO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vblRyYW5zaXRpb25FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLm9uVHJhbnNpdGlvbkVuZChzZWxmKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0SGVpZ2h0ID0gKCkgPT4ge1xuICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtnZXRIZWlnaHQodGhpcy5jb250ZW50KX1weGA7XG4gIH1cblxuICBoYW5kbGVDbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpKSB7XG4gICAgICB0aGlzLnRvZ2dsZVVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURvd24gPSAoKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25CZWZvcmVPcGVuKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBoZWlnaHQgPSBnZXRIZWlnaHQodGhpcy5jb250ZW50KTtcblxuICAgIHNlbGYuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgIHNlbGYudG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgc2VsZi5jb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIHJlbW92ZUhlaWdodCAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkge1xuICAgICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSAhPT0gJ2hlaWdodCcpIHJldHVybjtcblxuICAgICAgc2VsZi5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgc2VsZi5jb250ZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHJlbW92ZUhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pY29uVXNlICYmIHRoaXMub3B0aW9ucy5pY29ucy5hY3RpdmUgJiYgdGhpcy5vcHRpb25zLmljb25zLmRlZmF1bHQgIT09IHRoaXMub3B0aW9ucy5pY29ucy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaWNvblVzZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5vcHRpb25zLmljb25zLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25PcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25PcGVuKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVVwID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHNlbGYudG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHNlbGYuY29udGVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHNlbGYuY29udGVudC5zdHlsZS5oZWlnaHQgPSBzZWxmLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgfSwgMSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIHJlbW92ZVZpc2liaWxpdHkgKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgIT09ICdoZWlnaHQnKSByZXR1cm47XG5cbiAgICAgIHNlbGYuZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxmLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCByZW1vdmVWaXNpYmlsaXR5KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmljb25Vc2UgJiYgdGhpcy5vcHRpb25zLmljb25zLmRlZmF1bHQgJiYgdGhpcy5vcHRpb25zLmljb25zLmRlZmF1bHQgIT09IHRoaXMub3B0aW9ucy5pY29ucy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaWNvblVzZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5vcHRpb25zLmljb25zLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY247XG4iLCJpbXBvcnQgY2hlY2tUaW1lIGZyb20gJ3V0aWxpdHkvY2hlY2tUaW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdENsb2NrIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgd2luZG93LnNldEludGVydmFsKHNldEN1cnJlbnREYXRlVGltZShlbCksIDEwMDApO1xuICBzZXRDaXR5KGVsKTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudERhdGVUaW1lIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgbGV0IGVsVGltZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRpbWVdJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGxldCBlbERhdGUgPSBlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlXScpIGFzIEhUTUxFbGVtZW50O1xuXG4gIGxldCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgbGV0IHdlZWtkYXlzID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcblxuICBlbFRpbWUuaW5uZXJIVE1MID0gYCR7Y2hlY2tUaW1lKGRhdGUuZ2V0SG91cnMoKSl9OiR7Y2hlY2tUaW1lKGRhdGUuZ2V0TWludXRlcygpKX1gO1xuICBlbERhdGUuaW5uZXJIVE1MID0gYCR7d2Vla2RheXNbZGF0ZS5nZXREYXkoKV0uc3Vic3RyaW5nKDAsMyl9LCAke21vbnRoc1tkYXRlLmdldE1vbnRoKCldLnN1YnN0cmluZygwLDMpfSAke2NoZWNrVGltZShkYXRlLmdldERhdGUoKSl9YDtcbn1cblxuZnVuY3Rpb24gc2V0Q2l0eSAoZWw6IEhUTUxFbGVtZW50KSB7XG4gIGxldCBjaXR5ID0gZWwucXVlcnlTZWxlY3RvcignW2RhdGEtbG9jYXRpb25dJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaWYgKGNpdHkpIHtcbiAgICBnbG9iYWwuJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9pcC1hcGkuY29tL2pzb24nLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNpdHkuaW5uZXJIVE1MID0gcmVzcG9uc2UuY2l0eTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IE51bXBhZCBmcm9tICdjb21wb25lbnRzL2NvbnRyb2xzL251bXBhZC9udW1wYWQnO1xuaW1wb3J0IFBvcHVwIGZyb20gJ2NvbXBvbmVudHMvY29udHJvbHMvcG9wdXAvcG9wdXAnO1xuaW1wb3J0IEJhc2tldExpc3QgZnJvbSAnY29tcG9uZW50cy9saXN0cy9iYXNrZXQtbGlzdC9iYXNrZXQtbGlzdCc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAndXRpbGl0eS9tZXJnZSc7XG4vLyBpbXBvcnQgaGFzVmFsdWVJbkF0dHJpYnV0ZSBmcm9tICd1dGlsaXR5L2hhc1ZhbHVlSW5BdHRyaWJ1dGUnO1xuLy8gaW1wb3J0IGFycmF5VG9BdHRyaWJ1dGUgZnJvbSAndXRpbGl0eS9hcnJheVRvQXR0cmlidXRlJztcbmltcG9ydCBhdHRyaWJ1dGVUb0FycmF5IGZyb20gJ3V0aWxpdHkvYXR0cmlidXRlVG9BcnJheSc7XG5pbXBvcnQgdXBkYXRlQ29udHJvbHNMaXN0IGZyb20gJ3V0aWxpdHkvdXBkYXRlQ29udHJvbHNMaXN0Jztcbi8vIGltcG9ydCBzZXRRdWFudGl0eUZvcm1hdCBmcm9tICd1dGlsaXR5L3NldFF1YW50aXR5Rm9ybWF0JztcbmltcG9ydCBzZXRQcmljZUZvcm1hdCBmcm9tICd1dGlsaXR5L3NldFByaWNlRm9ybWF0Jztcbi8vIGltcG9ydCBoYW5kbGVUYWdzIGZyb20gJ3V0aWxpdHkvaGFuZGxlVGFncyc7XG5pbXBvcnQgaGFuZGxlSW5wdXRTdGF0ZSBmcm9tICd1dGlsaXR5L2hhbmRsZUlucHV0U3RhdGUnO1xuaW1wb3J0IExvYWRlciBmcm9tICdjb21wb25lbnRzL2xvYWRlcnMvcmFkaWFsLWxvYWRlci9yYWRpYWwtbG9hZGVyJztcbmltcG9ydCBPcmRlckZvcm0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcy9vcmRlci1mb3JtL29yZGVyLWZvcm0nO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIHBhbmVsQWN0aXZlQ2xhc3M6IHN0cmluZztcbiAgb25UYWdDbGljazogKGluc3RhbmNlOiBLZXlib2FyZCwgdGFnc0FycmF5OiB7dGl0bGU6IHN0cmluZywgYWN0aXZlOiBib29sZWFufVtdKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBLZXlib2FyZCB7XG4gIG9wdGlvbnM6IE9wdGlvbnM7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgcGFuZWw6IEhUTUxFbGVtZW50O1xuICB0YWdzOiBIVE1MRWxlbWVudDtcbiAgYWN0aW9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gIGlucHV0OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHJlZmVyZW5jZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBudW1wYWQ6IE51bXBhZCB8IG51bGw7XG4gIHN0YXRlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgb3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLXBhbmVsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy50YWdzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtcGFuZWxfX3RhZ3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjdGlvbl0nKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IG51bGw7XG4gICAgdGhpcy5udW1wYWQgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIEtleWJvYXJkLmluc3RhbmNlcy5zZXQoc2VsZi5lbCwgc2VsZik7XG5cbiAgICBsZXQgbnVtcGFkID0gc2VsZi5lbC5xdWVyeVNlbGVjdG9yKCcubnVtcGFkJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICBzZWxmLm51bXBhZCA9IG5ldyBOdW1wYWQobnVtcGFkKTtcbiAgICB9XG5cbiAgICBzZWxmLnN0YXRlID0gc2VsZi5nZXRTdGF0ZSgpO1xuXG4gICAgdXBkYXRlQ29udHJvbHNMaXN0KHNlbGYuZWwsIHNlbGYucGFuZWwpO1xuXG4gICAgZ2xvYmFsLiQoc2VsZi50YWdzKS5vbignY2xpY2snLCAnLmMtYmFkZ2UnLCBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgIHNlbGYuaGFuZGxlVGFnQ2xpY2sodGhpcyk7XG4gICAgfSk7XG5cbiAgICBnbG9iYWwuJChzZWxmLmVsKS5vbignY2xpY2snLCAnW2RhdGEtYWN0aW9uXScsIGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgbGV0IGFjdGlvbiA9IGdsb2JhbC4kKHRoaXMpLmF0dHIoJ2RhdGEtYWN0aW9uJyk7XG4gICAgICBsZXQgYWN0aXZlSXRlbSA9IGdsb2JhbC4kKCcuaXRlbS1yb3dfYWN0aXZlJyk7XG4gICAgICBsZXQgYWN0aXZlTGlzdEl0ZW0gPSBhY3RpdmVJdGVtLnBhcmVudCgpO1xuICAgICAgbGV0IGJhc2tldExpc3QgPSBhY3RpdmVJdGVtLmNsb3Nlc3QoJ1tkYXRhLWJhc2tldF0nKS5nZXQoMCk7XG4gICAgICBsZXQgYmFza2V0TGlzdEluc3RhbmNlID0gQmFza2V0TGlzdC5pbnN0YW5jZXMuZ2V0KGJhc2tldExpc3QpO1xuICAgICAgbGV0IG51bXBhZEluc3RhbmNlID0gc2VsZi5udW1wYWQ7XG4gICAgICBsZXQgUG9wdXBJbnN0YW5jZSA9IFBvcHVwLmluc3RhbmNlcy5nZXQoc2VsZi5lbCk7XG4gICAgICBsZXQgcHJvZHVjdElEID0gYWN0aXZlSXRlbS5sZW5ndGggPyBhY3RpdmVJdGVtLmdldCgwKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1pZCcpIDogbnVsbDtcbiAgICAgIGxldCBiYXNrZXRJdGVtSUQgPSBhY3RpdmVJdGVtLmxlbmd0aCA/IGFjdGl2ZUl0ZW0uZ2V0KDApLmdldEF0dHJpYnV0ZSgnZGF0YS1iYXNrZXQtbGluZS1pZCcpIDogbnVsbDtcbiAgICAgIC8vIGxldCBiYXNrZXRJRCA9ICdhMSc7XG4gICAgICBsZXQgYmFza2V0SUQgPSBiYXNrZXRMaXN0SW5zdGFuY2UgPyBiYXNrZXRMaXN0SW5zdGFuY2UuYmFza2V0IDogZmFsc2U7XG5cbiAgICAgIGxldCBvcmRlckZvcm07XG4gICAgICBsZXQgYmFza2V0O1xuICAgICAgbGV0IG9yZGVyRm9ybUluc3RhbmNlO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdzYXZlJzpcbiAgICAgICAgIC8vIFBvcHVwSW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgIFBvcHVwLmluc3RhbmNlcy5nZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudCkuY2xvc2UoKTtcblxuICAgICAgICAgaWYgKCFzZWxmLmlucHV0KSByZXR1cm47XG5cbiAgICAgICAgIGxldCBzaG9wcGluZ0NvbnRyb2wgPSBzZWxmLmlucHV0LmNsb3Nlc3QoJy5zaG9wcGluZy1saXN0X19pdGVtX2NvbnRyb2wnKTtcbiAgICAgICAgIGxldCBvcmRlckZvcm0gPSBzZWxmLmlucHV0LmNsb3Nlc3QoJy5vcmRlci1mb3JtJyk7XG4gICAgICAgICBsZXQgYmFza2V0ID0gc2VsZi5pbnB1dC5jbG9zZXN0KCdbZGF0YS1iYXNrZXRdJyk7XG5cbiAgICAgICAgIGlmICghb3JkZXJGb3JtKSByZXR1cm47XG5cbiAgICAgICAgIGxldCBvcmRlckZvcm1JbnN0YW5jZSA9IE9yZGVyRm9ybS5pbnN0YW5jZXMuZ2V0KG9yZGVyRm9ybSk7XG4gICAgICAgICBsZXQgYmFza2V0SW5zdGFuY2UgPSBCYXNrZXRMaXN0Lmluc3RhbmNlcy5nZXQoYmFza2V0KTtcbiAgICAgICAgIGxldCBzdGVwID0gb3JkZXJGb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGVwJyk7XG5cbiAgICAgICAgIGlmIChzaG9wcGluZ0NvbnRyb2wpIHtcbiAgICAgICAgICAgbGV0IGxpc3QgPSBzaG9wcGluZ0NvbnRyb2wuY2xvc2VzdCgnW2RhdGEtaXRlbXMtbGlzdF0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgbGV0IG91dGNvbWUgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiT1VUQ09NRVwiXScpO1xuICAgICAgICAgICBsZXQgaW5jb21lID0gbGlzdC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIklOQ09NRVwiXScpO1xuXG4gICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgICAgICAgICBjYXNlICdjaGVja291dCc6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYmFza2V0SW5zdGFuY2UsICk7XG4gICAgICAgICAgICAgICAgbGV0IGJhc2tldFRvdGFsID0gYmFza2V0SW5zdGFuY2UuZ2V0VG90YWwoKTtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQ7XG4gICAgICAgICAgICAgICAgbGV0IHByb3AgPSBzZWxmLmlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9wJyk7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLmlucHV0LmNsb3Nlc3QoJy5zaG9wcGluZy1saXN0X19pdGVtJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGlzT3B0aW9uYWwgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb25hbC12YWx1ZScpICE9PSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmljZScgJiYgIWlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvcD1cInF1YW50aXR5XCJdJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSAoc2VsZi5pbnB1dC52YWx1ZSAqIDEwMCkgLyBiYXNrZXRUb3RhbDtcbiAgICAgICAgICAgICAgICAvLyBmaWVsZC52YWwoKHNlbGYuaW5wdXQudmFsdWUgKiAxMDApIC8gdmFsdWVUb3RhbCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRTdGF0ZShmaWVsZCwgJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdxdWFudGl0eScpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvcD1cInByaWNlXCJdJyk7XG4gICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSAoYmFza2V0VG90YWwgLyAxMDApICogc2VsZi5pbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyBmaWVsZC52YWwoKG9yZGVyRm9ybUluc3RhbmNlLnN0YXRlLnRvdGFsIC8gMTAwKSAqIHNlbGYuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0U3RhdGUoZmllbGQsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dFN0YXRlKHNlbGYuaW5wdXQsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG9wcGluZy1saXN0X19pdGVtX2NvbnRyb2wtZW1wdHknKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3BwaW5nLWxpc3RfX2l0ZW1fZWRpdG1vZGUnKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldElucHV0KG51bGwpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFza2V0SW5zdGFuY2UuZ2V0VG90YWwoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBvcmRlckZvcm1JbnN0YW5jZS5zZXRUb3RhbCgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY29weSc6XG4gICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSByZXR1cm47XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnQkFTS0VUOiAnICsgYmFza2V0SUQsIGJhc2tldExpc3QpO1xuXG4gICAgICAgICAgYmFza2V0TGlzdEluc3RhbmNlLnNlbmRSZXF1ZXN0KCdhZGQnLCB7cHJvZHVjdElEOiBwcm9kdWN0SUQsIHF1YW50aXR5OiAxLCBiYXNrZXRJRDogYmFza2V0SUQsIGl0ZW06IGFjdGl2ZUl0ZW0uZ2V0KDApLCBvcmRlcklkOiBiYXNrZXRMaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcmlkJyksIHByb3BzOiB7XG4gICAgICAgICAgICB0YWdzOiBhdHRyaWJ1dGVUb0FycmF5KGFjdGl2ZUl0ZW0uZ2V0KDApLmdldEF0dHJpYnV0ZSgnZGF0YS10YWdzJykpLFxuICAgICAgICAgICAgY29kZTogZ2xvYmFsLiQoYWN0aXZlSXRlbSkuZmluZCgnW2RhdGEtaXRlbS1jb2RlXScpLmxlbmd0aCA/IGdsb2JhbC4kKGFjdGl2ZUl0ZW0pLmZpbmQoJ1tkYXRhLWl0ZW0tY29kZV0nKS5odG1sKCkgOiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWU6IGdsb2JhbC4kKGFjdGl2ZUl0ZW0pLmZpbmQoJ1tkYXRhLWl0ZW0tdGltZV0nKS5sZW5ndGggPyBnbG9iYWwuJChhY3RpdmVJdGVtKS5maW5kKCdbZGF0YS1pdGVtLXRpbWVdJykuZmluZCgnLmMtc3RhdHVzIHNwYW4nKS5odG1sKCkgOiBmYWxzZSxcbiAgICAgICAgICAgIHRhYmxlSWQ6IGFjdGl2ZUl0ZW0uY2xvc2VzdCgnLm9yZGVyLWZvcm0nKS5maW5kKCdkYXRhLXRpdGxlJykuZ2V0KDApLmlubmVySFRNTC5yZXBsYWNlKC9bXjAtOV0vZywgJycpXG4gICAgICAgICAgfX0pO1xuICAgICAgICAgIC8vIGJhc2tldExpc3RJbnN0YW5jZS5oYW5kbGVDb3B5KGFjdGl2ZUl0ZW0uZ2V0KDApKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSByZXR1cm47XG5cbiAgICAgICAgICBsZXQgb3JkZXJJRCA9IGJhc2tldExpc3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyaWQnKTtcbiAgICAgICAgICBsZXQgYmFza2V0SXRlbXMgPSBiYXNrZXRMaXN0SW5zdGFuY2UuZ2V0SXRlbXMoKTtcblxuICAgICAgICAgIG9yZGVyRm9ybSA9IGJhc2tldExpc3QuY2xvc2VzdCgnLm9yZGVyLWZvcm0nKTtcbiAgICAgICAgICBvcmRlckZvcm1JbnN0YW5jZSA9IE9yZGVyRm9ybS5pbnN0YW5jZXMuZ2V0KG9yZGVyRm9ybSk7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhiYXNrZXRJdGVtcyk7XG4gICAgICAgICAgaWYgKGJhc2tldEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGJhc2tldExpc3RJbnN0YW5jZS5zZW5kUmVxdWVzdCgnZGVsZXRlJywge2Jhc2tldEl0ZW1JRDogYmFza2V0SXRlbUlELCBiYXNrZXRJRDogYmFza2V0SUQsIG9yZGVySWQ6IG9yZGVySUR9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJGb3JtSW5zdGFuY2UuZGVsZXRlT3JkZXIob3JkZXJJRCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYmFza2V0TGlzdEluc3RhbmNlLmhhbmRsZURlbGV0ZShhY3RpdmVJdGVtLmdldCgwKSk7XG4gICAgICAgICAgLy8gYmFza2V0TGlzdEluc3RhbmNlLnNlbmRSZXF1ZXN0KCdkZWxldGUnLCB7YmFza2V0SXRlbUlEOiBiYXNrZXRJdGVtSUQsIGJhc2tldElEOiBiYXNrZXRJRCwgb3JkZXJJZDogb3JkZXJJRH0pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gY2FzZSAnZnJlZSc6XG4gICAgICAgIC8vICAgaWYgKHNlbGYubnVtcGFkKSB7XG4gICAgICAgIC8vICAgICBzZWxmLm51bXBhZC5pbnB1dC52YWx1ZSA9IDA7XG4gICAgICAgIC8vICAgfVxuXG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDQutC70LjQuiDQv9C+INC40LzQtdC90Lgg0L7Qv9GG0LjQuFxuICAgIGdsb2JhbC4kKHNlbGYuZWwpLm9uKCdjbGljaycsICdbZGF0YS1uYW1lXScsIGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICBsZXQgZXhpc3RpbmdOb2RlID0gZ2xvYmFsLiQoYFtuYW1lPVwiJHtuYW1lfVwiXWApO1xuXG4gICAgICBpZiAoZXhpc3RpbmdOb2RlLmxlbmd0aCkge1xuICAgICAgICBsZXQgaXRlbSA9IGV4aXN0aW5nTm9kZS5jbG9zZXN0KCcuc2hvcHBpbmctbGlzdF9faXRlbScpO1xuXG4gICAgICAgIGdsb2JhbC4kKCcuc2hvcHBpbmctbGlzdF9faXRlbV9lZGl0bW9kZScpLmVhY2goZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgc2V0U2hvcHBpbmdJdGVtU3RhdGUodGhpcywgJ2RlZmF1bHQnLCBzZWxmLm51bXBhZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFNob3BwaW5nSXRlbVN0YXRlKGl0ZW0uZ2V0KDApLCAnZWRpdCcsIHNlbGYubnVtcGFkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpdGVtID0gZ2xvYmFsLiQoJy5zaG9wcGluZy1saXN0X19pdGVtX2VkaXRtb2RlJyk7XG4gICAgICAgIGxldCBuZXdJdGVtID0gaXRlbS5jbG9uZSgpO1xuXG4gICAgICAgIG5ld0l0ZW0ucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWxpc3RfX2l0ZW1fZWRpdG1vZGUnKTtcbiAgICAgICAgbmV3SXRlbS5hZGRDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgaXRlbS5jbG9zZXN0KCcuc2hvcHBpbmctbGlzdCcpLmFwcGVuZChuZXdJdGVtKTtcblxuICAgICAgICBsZXQgdGl0bGUgPSBnbG9iYWwuJChpdGVtKS5maW5kKCcuc2hvcHBpbmctbGlzdF9fdGl0bGUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2xvYmFsLiQoaXRlbSkuZmluZCgnLnNob3BwaW5nLWxpc3RfX3ZhbHVlIGlucHV0Jyk7XG5cbiAgICAgICAgdGl0bGUuaHRtbCh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1wdWJsaWMtbmFtZScpKTtcbiAgICAgICAgdmFsdWUucHJvcCgnbmFtZScsIG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8g0LrQu9C40Log0L/QviDQt9C90LDRh9C10L3QuNGOINC+0L/RhtC40LhcbiAgICBnbG9iYWwuJChzZWxmLmVsKS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHldLCBbZGF0YS12YWx1ZV0nLCBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICBsZXQgcXVhbnRpdHkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1xdWFudGl0eScpO1xuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctbGlzdF9faXRlbV9lZGl0bW9kZScpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgbGV0IGlucHV0O1xuXG4gICAgICBpZiAocXVhbnRpdHkpIHtcbiAgICAgICAgaW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtcHJvcD1cInF1YW50aXR5XCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBxdWFudGl0eTtcbiAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uYWwtdmFsdWUnKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgaW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtcHJvcD1cInByaWNlXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdvcHRpb25hbGx5Jykge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbmFsLXZhbHVlJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW9wdGlvbmFsLXZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRJbnB1dChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgb2ZmZXIgYWN0aXZlXG4gICAgZ2xvYmFsLiQoc2VsZi5lbCkub24oJ2NsaWNrJywgJy5pdGVtLXJvd19fb2ZmZXJzIC5jLWJ0bicsIGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgbGV0IHBhcmVudCA9IGdsb2JhbC4kKHRoaXMpLmNsb3Nlc3QoJy5pdGVtLXJvd19fb2ZmZXJzJyk7XG5cbiAgICAgIHBhcmVudC5maW5kKCcuYy1idG5fcHJlc3NlZCcpLnJlbW92ZUNsYXNzKCdjLWJ0bl9wcmVzc2VkJyk7XG4gICAgICBnbG9iYWwuJCh0aGlzKS5hZGRDbGFzcygnYy1idG5fcHJlc3NlZCcpO1xuICAgIH0pO1xuICAgIC8vIHNlbGVjdCBwcm9kdWN0XG4gICAgZ2xvYmFsLiQoc2VsZi5lbCkub24oJ2NsaWNrJywgJ1tkYXRhLW1lbnUtaXRlbV0nLCBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIGU6IEV2ZW50KSB7XG4gICAgICBpZiAoIXNlbGYucmVmZXJlbmNlKSB7XG4gICAgICAgIGxldCBmaXJzdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWtleWJvYXJkLXJlZl0nKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAoZmlyc3RSZWYpIHtcbiAgICAgICAgICBzZWxmLnNldFJlZmVyZW5jZShmaXJzdFJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgYmFza2V0ID0gZ2xvYmFsLiQoc2VsZi5yZWZlcmVuY2UpLmNsb3Nlc3QoJ1tkYXRhLWJhc2tldF0nKS5nZXQoMCk7XG4gICAgICBsZXQgYmFza2V0SW5zdGFuY2UgPSBCYXNrZXRMaXN0Lmluc3RhbmNlcy5nZXQoYmFza2V0KTtcbiAgICAgIGxldCBoYXNPZmZlcnMgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaXRlbS1yb3dfb2ZmZXJzJyk7XG4gICAgICBsZXQgb2ZmZXIgPSBoYXNPZmZlcnMgPyBnbG9iYWwuJCh0aGlzKS5maW5kKCcuYy1idG5fcHJlc3NlZCcpIDogbnVsbDtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICB0YWdzOiB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YWdzJyksXG4gICAgICAgIHByb2R1Y3RJZDogdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1pZCcpLFxuICAgICAgICBjb2RlOiBnbG9iYWwuJCh0aGlzKS5maW5kKCdbZGF0YS1pdGVtLWNvZGVdJykubGVuZ3RoID8gZ2xvYmFsLiQodGhpcykuZmluZCgnW2RhdGEtaXRlbS1jb2RlXScpLmh0bWwoKSA6IGZhbHNlLFxuICAgICAgICB0aXRsZTogZ2xvYmFsLiQodGhpcykuZmluZCgnW2RhdGEtaXRlbS10aXRsZV0nKS5sZW5ndGggPyBnbG9iYWwuJCh0aGlzKS5maW5kKCdbZGF0YS1pdGVtLXRpdGxlXScpLmh0bWwoKSA6IGZhbHNlLFxuICAgICAgICB0aW1lOiBnbG9iYWwuJCh0aGlzKS5maW5kKCdbZGF0YS1pdGVtLXRpbWVdJykubGVuZ3RoID8gZ2xvYmFsLiQodGhpcykuZmluZCgnW2RhdGEtaXRlbS10aW1lXScpLmZpbmQoJy5jLXN0YXR1cyBzcGFuJykuaHRtbCgpIDogZmFsc2UsXG4gICAgICAgIHByaWNlOiBoYXNPZmZlcnMgPyBzZXRQcmljZUZvcm1hdChvZmZlci5maW5kKCdzcGFuJykuaHRtbCgpLCAnZm9ybWF0dGVkJykgOiBzZXRQcmljZUZvcm1hdChnbG9iYWwuJCh0aGlzKS5maW5kKCdbZGF0YS1pdGVtLXByaWNlXScpLmh0bWwoKSwgJ2Zvcm1hdHRlZCcpLFxuICAgICAgICBvcmRlcklkOiBiYXNrZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyaWQnKSxcbiAgICAgICAgdGFibGVJZDogZ2xvYmFsLiQoYmFza2V0KS5jbG9zZXN0KCcub3JkZXItZm9ybScpLmZpbmQoJ1tkYXRhLXRpdGxlXScpLmdldCgwKS5pbm5lckhUTUwucmVwbGFjZSgvW14wLTldL2csICcnKVxuICAgICAgfTtcbiAgICAgIGlmIChoYXNPZmZlcnMpIHtcbiAgICAgICAgICBkYXRhLm9mZmVyID0gb2ZmZXIuYXR0cignZGF0YS10aXRsZScpXG4gICAgICB9XG4gICAgICBsZXQgYmFza2V0SUQgPSBiYXNrZXRJbnN0YW5jZS5iYXNrZXQ7XG4gICAgICAvLyBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwidG1wbC1iYXNrZXQtaXRlbVwiXScpLmlubmVySFRNTDtcblxuICAgICAgLy8gYmFza2V0SW5zdGFuY2UuYWRkSXRlbSh0ZW1wbGF0ZSwgZGF0YSwgWyc8JScsICclPiddKTtcbiAgICAgIC8vIGJhc2tldEluc3RhbmNlLnNlbmRSZXF1ZXN0KCdhZGQnLCB7cHJvZHVjdElEOiBkYXRhLnByb2R1Y3RJZCwgcXVhbnRpdHk6IDEsIGJhc2tldElEOiAnYTEnfSk7XG5cbiAgICAgIGJhc2tldEluc3RhbmNlLnNlbmRSZXF1ZXN0KCdhZGQnLCB7cHJvZHVjdElEOiBkYXRhLnByb2R1Y3RJZCwgcXVhbnRpdHk6IDEsIGJhc2tldElEOiBiYXNrZXRJRCwgb3JkZXJJZDogZGF0YS5vcmRlcklkLCBwcm9wczoge1xuICAgICAgICB0YWdzOiBhdHRyaWJ1dGVUb0FycmF5KGRhdGEudGFncyksXG4gICAgICAgIGNvZGU6IGRhdGEuY29kZSxcbiAgICAgICAgdGltZTogZGF0YS50aW1lLFxuICAgICAgICB0YWJsZUlkOiBkYXRhLnRhYmxlSWRcbiAgICAgIH19KTtcblxuICAgICAgLy8gbGV0IHRhZ3MgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YWdzJyk7XG4gICAgICBsZXQgdGFnc1BhcnNlZCA9IGF0dHJpYnV0ZVRvQXJyYXkoZGF0YS50YWdzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhZ3NQYXJzZWQpO1xuXG4gICAgICBzZWxmLnJlbmRlclRhZ3ModGFnc1BhcnNlZCk7XG5cbiAgICAgIC8vIHJlY29tbWVuZGF0aW9uc1xuICAgICAgbGV0IHJlY29tbWVuZGF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWxlcy1tZW51X19wYW5lbF9yZWNvbW1lbmRhdGlvbnMnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGxldCBkYXRhUmVjb20gPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rZWQtaXRlbXMnKTtcblxuICAgICAgaWYgKHJlY29tbWVuZGF0aW9ucyAmJiBkYXRhUmVjb20pIHtcbiAgICAgICAgc2VsZi5zaG93UmVjb21tZW5kYXRpb25zKHJlY29tbWVuZGF0aW9ucywgdGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbGVzLW1lbnVfX3BhbmVsX3JlY29tbWVuZGF0aW9ucycpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKHJlYykge1xuICAgICAgbGV0IHJlY1RvZ2dsZSA9IHJlYy5xdWVyeVNlbGVjdG9yKCcudGlsZXMtbWVudV9fcGFuZWwtaGVhZCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICByZWNUb2dnbGUgJiYgcmVjVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmNsb3NlUmVjb21tZW5kYXRpb25zKHJlYyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgdGlsZXNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlcy1tZW51X19pdGVtX211bHRpbGV2ZWwnKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXNJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmV3IFBvcHVwKHRpbGVzSXRlbXNbaV0sIHtcbiAgICAgICAgYWN0aXZlQ2xhc3M6ICd0aWxlcy1tZW51X19pdGVtX29wZW5lZCcsXG4gICAgICAgIHBvcHVwOiAnLnRpbGVzLW1lbnVfX3BhbmVsJyxcbiAgICAgICAgdG9nZ2xlOiAnLnRpbGUtaXRlbScsXG4gICAgICAgIHdpZHRoUmVmOiAnLnRpbGVzLW1lbnUnLFxuICAgICAgICBiZWZvcmVBY3Rpb246IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLndpZHRoUmVmLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgbGV0IGNsb3NlVG9nZ2xlID0gaW5zdGFuY2UucG9wdXAucXVlcnlTZWxlY3RvcignLml0ZW0tcm93X2hlYWRpbmcnKTtcblxuICAgICAgICAgIGNsb3NlVG9nZ2xlICYmIGNsb3NlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLndpZHRoUmVmLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uT3BlbjogZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgbGV0IHNjcm9sbGFibGVQYXJlbnQgPSBnbG9iYWwuJChpbnN0YW5jZS5lbCkuY2xvc2VzdCgnW2RhdGEtc2ltcGxlYmFyLXRoaW5dJykuZ2V0KDApO1xuICAgICAgICAgIGxldCBpc0xvYWRlZCA9IGluc3RhbmNlLmVsLmNsYXNzTGlzdC5jb250YWlucygndS1sb2FkZWQnKTtcblxuICAgICAgICAgIGlmICghaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIGxldCBpYmxvY2tJRCA9IGluc3RhbmNlLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pYmxvY2staWQnKTtcbiAgICAgICAgICAgIGxldCBzZWN0aW9uSUQgPSBpbnN0YW5jZS5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgbGV0IGxvYWRlciA9IG5ldyBMb2FkZXIoaW5zdGFuY2UucG9wdXApO1xuXG4gICAgICAgICAgICBnbG9iYWwuJC5hamF4KHtcbiAgICAgICAgICAgICAgdXJsOiAnL2FqYXgvZ2V0U2VjdGlvbkl0ZW1zLnBocCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7aWJsb2NrSUQ6IGlibG9ja0lELCBzZWN0aW9uSUQ6IHNlY3Rpb25JRH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBnbG9iYWwuJChpbnN0YW5jZS5wb3B1cCkuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5lbC5jbGFzc0xpc3QuYWRkKCd1LWxvYWRlZCcpO1xuICAgICAgICAgICAgICAgIGxvYWRlci5zZXRTdGF0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50KSB7XG4gICAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtb3ZlcmZsb3cnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgbGV0IHNjcm9sbGFibGVQYXJlbnQgPSBnbG9iYWwuJChpbnN0YW5jZS5lbCkuY2xvc2VzdCgnW2RhdGEtc2ltcGxlYmFyLXRoaW5dJykuZ2V0KDApO1xuXG4gICAgICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQpIHtcbiAgICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1vdmVyZmxvdycpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUYWdzID0gKHRhZ3M6IFtdID0gW10pID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLnRhZ3MuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IHRhZ2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgdGFnbGlzdC5jbGFzc05hbWUgPSAnYmFkZ2VzLWxpc3QgdS1yb3cnO1xuXG4gICAgdGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWc6IHt0aXRsZTogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW59KSB7XG4gICAgICBsZXQgdGFnVGVtcGxhdGUgPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cImJhZGdlcy1saXN0X19pdGVtIHUtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1iYWRnZSAke3RhZy5hY3RpdmUgPyAnYy1iYWRnZV90ZXJ0aWFyeS1hbHQnIDogJ2MtYmFkZ2VfdGVydGlhcnknfSBjLWJhZGdlX3NtXCI+JHt0YWcudGl0bGV9PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICBgO1xuXG4gICAgICBnbG9iYWwuJCh0YWdsaXN0KS5hcHBlbmQodGFnVGVtcGxhdGUpO1xuICAgIH0pO1xuXG4gICAgZ2xvYmFsLiQoc2VsZi50YWdzKS5hcHBlbmQodGFnbGlzdCk7XG4gIH1cblxuICBoYW5kbGVUYWdDbGljayA9ICh0YWc6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0YWdzQXJyYXk6IHt0aXRsZTogc3RyaW5nLCBhY3RpdmU6IGJvb2xlYW59W10gPSBbXTtcbiAgICBsZXQgbGlzdCA9IGdsb2JhbC4kKHRhZykuY2xvc2VzdCgnLmJhZGdlcy1saXN0Jyk7XG4gICAgbGV0IHRhZ3MgPSBsaXN0LmZpbmQoJy5jLWJhZGdlJyk7XG5cbiAgICBpZiAodGFnLmNsYXNzTGlzdC5jb250YWlucygnYy1iYWRnZV90ZXJ0aWFyeScpKSB7XG4gICAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZSgnYy1iYWRnZV90ZXJ0aWFyeScpO1xuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ2MtYmFkZ2VfdGVydGlhcnktYWx0Jyk7XG4gICAgfSBlbHNlIGlmICh0YWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjLWJhZGdlX3RlcnRpYXJ5LWFsdCcpKSB7XG4gICAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZSgnYy1iYWRnZV90ZXJ0aWFyeS1hbHQnKTtcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCdjLWJhZGdlX3RlcnRpYXJ5Jyk7XG4gICAgfVxuXG4gICAgdGFncy5lYWNoKGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgdGFnc0FycmF5LnB1c2goe1xuICAgICAgICB0aXRsZTogdGhpcy5pbm5lckhUTUwudHJpbSgpLFxuICAgICAgICBhY3RpdmU6IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjLWJhZGdlX3RlcnRpYXJ5LWFsdCcpXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMub25UYWdDbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2VsZi5vcHRpb25zLm9uVGFnQ2xpY2soc2VsZiwgdGFnc0FycmF5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgc2V0U3RhdGUgPSAoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgY29udHJvbHMgPSBzZWxmLnBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9scy1saXN0JykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG5cbiAgICBzZWxmLnN0YXRlID0gc3RhdGU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1cGRhdGVDb250cm9sc0xpc3Qoc2VsZi5lbCwgY29udHJvbHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhbmVsU3RhdGUgPSAoc3RhdGU6ICd2aXNpYmxlJyB8ICdoaWRkZW4nKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBwb3B1cEluc3RhbmNlID0gUG9wdXAuaW5zdGFuY2VzLmdldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpIGFzIEhUTUxFbGVtZW50KTtcblxuICAgIGlmIChwb3B1cEluc3RhbmNlICYmICFwb3B1cEluc3RhbmNlLmlzT3BlbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgIHNlbGYuZWwuY2xhc3NMaXN0LmFkZChzZWxmLm9wdGlvbnMucGFuZWxBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgIHNlbGYuZWwuY2xhc3NMaXN0LmFkZChzZWxmLm9wdGlvbnMucGFuZWxBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5wdXQgPSAoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBvbGRJbnB1dCA9IHNlbGYuaW5wdXQ7XG5cbiAgICBzZWxmLmlucHV0ID0gaW5wdXQ7XG4gICAgaWYgKHNlbGYubnVtcGFkKSB7XG4gICAgICBzZWxmLm51bXBhZC5pbnB1dCA9IGlucHV0O1xuICAgIH1cblxuICAgIC8vIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uSW5wdXRTZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyAgIHNlbGYub3B0aW9ucy5vbklucHV0U2V0KHNlbGYsIG9sZElucHV0KTtcbiAgICAvLyB9XG4gIH1cblxuICBzZXRSZWZlcmVuY2UgPSAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBvbGRSZWYgPSBzZWxmLnJlZmVyZW5jZTtcblxuICAgIHNlbGYucmVmZXJlbmNlID0gZWw7XG5cbiAgICAvLyBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vblJlZmVyZW5jZVNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vICAgc2VsZi5vcHRpb25zLm9uUmVmZXJlbmNlU2V0KHNlbGYsIG9sZFJlZik7XG4gICAgLy8gfVxuICB9XG5cbiAgc2hvd1JlY29tbWVuZGF0aW9ucyA9IChlbDogSFRNTEVsZW1lbnQsIGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgbGV0IGlibG9ja0lEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWJsb2NrLWlkJyk7XG4gICAgbGV0IGRhdGEgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rZWQtaXRlbXMnKTtcbiAgICBsZXQgbWVudSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbm5lci1tZW51Jyk7XG5cbiAgICBnbG9iYWwuJC5hamF4KHtcbiAgICAgIHVybDogJy9hamF4L2dldFNlY3Rpb25JdGVtcy5waHAnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7aWJsb2NrSUQ6IGlibG9ja0lELCBpdGVtczogYXR0cmlidXRlVG9BcnJheShkYXRhKX0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKG1lbnUpIHtcbiAgICAgICAgICBtZW51LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICBnbG9iYWwuJChlbCkuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsLnBhcmVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCd0aWxlcy1tZW51X19wYW5lbF9hY3RpdmUnKTtcbiAgfVxuXG4gIGNsb3NlUmVjb21tZW5kYXRpb25zID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGVsLnBhcmVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCd0aWxlcy1tZW51X19wYW5lbF9hY3RpdmUnKTtcblxuICAgIGxldCBtZW51ID0gZWwucXVlcnlTZWxlY3RvcignLmlubmVyLW1lbnUnKTtcblxuICAgIGlmIChtZW51KSB7XG4gICAgICBtZW51LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkO1xuXG5mdW5jdGlvbiBzZXRTaG9wcGluZ0l0ZW1TdGF0ZSAoaXRlbTogSFRNTEVsZW1lbnQsIHN0YXRlOiBzdHJpbmcsIG51bXBhZDogTnVtcGFkIHwgbnVsbCA9IG51bGwpIHtcbiAgbGV0IGVkaXRDbGFzcyA9ICdzaG9wcGluZy1saXN0X19pdGVtX2VkaXRtb2RlJztcbiAgbGV0IGlzT3B0aW9uYWwgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb25hbC12YWx1ZScpICE9PSBudWxsO1xuXG4gIHN3aXRjaCAoc3RhdGUpIHtcbiAgICBjYXNlICdlZGl0JzpcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChlZGl0Q2xhc3MpO1xuXG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3BwaW5nLWxpc3RfX2l0ZW1fbXVsdGlwbGUtaW5wdXRzJykpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2xvYmFsLiQoaXRlbSkuZmluZCgnLnNob3BwaW5nLWxpc3RfX3ZhbHVlJyk7XG4gICAgICAgIGxldCB2YWx1ZUlucHV0ID0gdmFsdWUuZmluZCgnaW5wdXQnKTtcblxuICAgICAgICBpZiAobnVtcGFkICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgIG51bXBhZC5zZXRJbnB1dChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1wYWQuc2V0SW5wdXQodmFsdWVJbnB1dC5nZXQoMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc09wdGlvbmFsKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXRTdGF0ZShudW1wYWQuaW5wdXQsICdlZGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdsb2JhbC4kKGl0ZW0pLmZpbmQoJy5zaG9wcGluZy1saXN0X192YWx1ZScpO1xuICAgICAgICBsZXQgdmFsdWVJbnB1dCA9IHZhbHVlLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIG51bXBhZC5zZXRJbnB1dCh2YWx1ZUlucHV0LmdldCgwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT3B0aW9uYWwpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dFN0YXRlKHZhbHVlSW5wdXQsICdlZGl0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGl0bGUgPSBnbG9iYWwuJChpdGVtKS5maW5kKCcuc2hvcHBpbmctbGlzdF9fdGl0bGUnKTtcblxuICAgICAgICBpZiAodGl0bGUuYXR0cignZGF0YS1mb2N1cy10ZXh0JykpIHtcbiAgICAgICAgICB0aXRsZS5odG1sKHRpdGxlLmF0dHIoJ2RhdGEtZm9jdXMtdGV4dCcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgZ2xvYmFsLiQoaXRlbSkucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWxpc3RfX2l0ZW1fZWRpdG1vZGUnKTtcbiAgICAgIGxldCBpbnB1dHMgPSBnbG9iYWwuJCh0aGlzKS5maW5kKCdpbnB1dCcpO1xuXG4gICAgICBpZiAoIWlzT3B0aW9uYWwpIHtcbiAgICAgICAgaW5wdXRzLmVhY2goZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXRTdGF0ZSh0aGlzLCAnZGVmYXVsdCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gc2hvd1JlY29tbWVuZGF0aW9ucyAoZWw6IEhUTUxFbGVtZW50LCBpdGVtOiBIVE1MRWxlbWVudCkge1xuLy8gICBsZXQgaWJsb2NrSUQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pYmxvY2staWQnKTtcbi8vICAgbGV0IGRhdGEgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rZWQtaXRlbXMnKTtcbi8vICAgbGV0IG1lbnUgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5uZXItbWVudScpO1xuXG4vLyAgIGdsb2JhbC4kLmFqYXgoe1xuLy8gICAgIHVybDogJy9hamF4L2dldFNlY3Rpb25JdGVtcy5waHAnLFxuLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgIGRhdGE6IHtpYmxvY2tJRDogaWJsb2NrSUQsIGl0ZW1zOiBkYXRhfSxcbi8vICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbi8vICAgICAgIGlmIChtZW51KSB7XG4vLyAgICAgICAgIG1lbnUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChtZW51KTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgZ2xvYmFsLiQoZWwpLmFwcGVuZChyZXNwb25zZSk7XG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICBlbC5wYXJlbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4vLyAgIGVsLmNsYXNzTGlzdC5hZGQoJ3RpbGVzLW1lbnVfX3BhbmVsX2FjdGl2ZScpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjbG9zZVJlY29tbWVuZGF0aW9ucyAoZWw6IEhUTUxFbGVtZW50LCBkYXRhOiBbXSkge1xuLy8gICBlbC5wYXJlbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4vLyAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RpbGVzLW1lbnVfX3BhbmVsX2FjdGl2ZScpO1xuXG4vLyAgIGxldCBtZW51ID0gZWwucXVlcnlTZWxlY3RvcignLmlubmVyLW1lbnUnKTtcblxuLy8gICBpZiAobWVudSkge1xuLy8gICAgIG1lbnUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChtZW51KTtcbi8vICAgfVxuLy8gfVxuIiwiaW1wb3J0IG1lcmdlIGZyb20gJ3V0aWxpdHkvbWVyZ2UnO1xuXG4vLyB0eXBlIE51bXBhZFN0YXRlID0gJ3Zpc2libGUnIHwgJ2hpZGRlbic7XG5cbmludGVyZmFjZSBPcHRpb25zIHtcbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIG9uSW5wdXRTZXQ6IChpbnN0YW5jZTogTnVtcGFkLCBwcmV2SW5wdXQpID0+IHZvaWQ7XG59XG5cbmNsYXNzIE51bXBhZCB7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgb3B0aW9uczogT3B0aW9ucztcbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xuICBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAga2V5Q29kZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb25JbnB1dFNldDogZnVuY3Rpb24gKGluc3RhbmNlOiBOdW1wYWQsIHByZXZJbnB1dCkge31cbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgcGFzc2VkJyk7XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMub3B0aW9ucy5pbnB1dDtcbiAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1wYWRfX2J0bicpO1xuICAgIHRoaXMua2V5Q29kZXMgPSB7XG4gICAgICBiYWNrc3BhY2U6IDgsXG4gICAgICAwOiA0OCxcbiAgICAgIDE6IDQ5LFxuICAgICAgMjogNTAsXG4gICAgICAzOiA1MSxcbiAgICAgIDQ6IDUyLFxuICAgICAgNTogNTMsXG4gICAgICA2OiA1NCxcbiAgICAgIDc6IDU1LFxuICAgICAgODogNTYsXG4gICAgICA5OiA1N1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBOdW1wYWQuaW5zdGFuY2VzLnNldChzZWxmLmVsLCBzZWxmKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWxmLmJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuaGFuZGxlQ2xpY2sodGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHNlbGYuaGFuZGxlS2V5UHJlc3MpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGtleSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoa2V5KTtcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYuaW5wdXQpIHJldHVybjtcblxuICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zb2xlLmxvZyh0YXJnZXQsIGUud2hpY2gpO1xuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSA0ODpcbiAgICAgIGNhc2UgOTY6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJzAnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OTpcbiAgICAgIGNhc2UgOTc6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJzEnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA1MDpcbiAgICAgIGNhc2UgOTg6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJzInKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA1MTpcbiAgICAgIGNhc2UgOTk6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJzMnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA1MjpcbiAgICAgIGNhc2UgMTAwOlxuICAgICAgICB0aGlzLnNldFN0YXRlKCc0Jyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNTM6XG4gICAgICBjYXNlIDEwMTpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnNScpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDU0OlxuICAgICAgY2FzZSAxMDI6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJzYnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA1NTpcbiAgICAgIGNhc2UgMTAzOlxuICAgICAgICB0aGlzLnNldFN0YXRlKCc3Jyk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNTY6XG4gICAgICBjYXNlIDEwNDpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnOCcpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDU3OlxuICAgICAgY2FzZSAxMDU6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJzknKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA4OlxuICAgICAgICB0aGlzLnNldFN0YXRlKCdiYWNrc3BhY2UnKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5pbnB1dCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2JhY2tzcGFjZSc6XG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBzZWxmLmlucHV0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzZWxmLmlucHV0Lm1heExlbmd0aCA+IC0xICYmIHNlbGYuaW5wdXQudmFsdWUubGVuZ3RoIDwgc2VsZi5pbnB1dC5tYXhMZW5ndGggfHwgc2VsZi5pbnB1dC5tYXhMZW5ndGggPT09IC0xKSB7XG5cbiAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlICs9IGtleTtcbiAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldElucHV0ID0gKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgIGxldCBvbGRJbnB1dCA9IHRoaXMuaW5wdXQ7XG5cbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbklucHV0U2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25JbnB1dFNldChzZWxmLCBvbGRJbnB1dCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bXBhZDtcbiIsImltcG9ydCBnZXRWaWV3cG9ydCBmcm9tICd1dGlsaXR5L2dldFZpZXdwb3J0JztcbmltcG9ydCBtZXJnZSBmcm9tICd1dGlsaXR5L21lcmdlJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICd1dGlsaXR5L3Rocm90dGxlJztcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBhY3RpdmVDbGFzczogc3RyaW5nO1xuICB0b2dnbGU6IHN0cmluZztcbiAgcG9wdXA6IHN0cmluZztcbiAgd2lkdGhSZWY6IHN0cmluZztcbiAgb25Jbml0OiAoaW5zdGFuY2U6IFBvcHVwKSA9PiB2b2lkO1xuICBvbk9wZW46IChpbnN0YW5jZTogUG9wdXApID0+IHZvaWQ7XG4gIG9uQ2xvc2U6IChpbnN0YW5jZTogUG9wdXApID0+IHZvaWQ7XG4gIGJlZm9yZUFjdGlvbjogKGluc3RhbmNlOiBQb3B1cCkgPT4gdm9pZDtcbiAgb25Qb3NpdGlvbjogKGluc3RhbmNlOiBQb3B1cCkgPT4gdm9pZDtcbiAgb25SZXNpemU6IChpbnN0YW5jZTogUG9wdXApID0+IHZvaWQ7XG59XG5cbmNsYXNzIFBvcHVwIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBvcHRpb25zOiBPcHRpb25zO1xuICB0b2dnbGU6IEhUTUxFbGVtZW50O1xuICBwb3B1cDogSFRNTEVsZW1lbnQ7XG4gIHdpZHRoUmVmOiBIVE1MRWxlbWVudDtcbiAgaXNPcGVuZWQ6IEJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+ID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGFjdGl2ZUNsYXNzOiAnYy1wb3B1cF9hY3RpdmUnLFxuICAgICAgdG9nZ2xlOiAnLmMtcG9wdXBfX3RvZ2dsZScsXG4gICAgICBwb3B1cDogJy5jLXBvcHVwX19wb3B1cCcsXG4gICAgICB3aWR0aFJlZjogJ2MtcG9wdXAnLFxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoaW5zdGFuY2U6IFBvcHVwKSB7fSxcbiAgICAgIG9uT3BlbjogZnVuY3Rpb24gKGluc3RhbmNlOiBQb3B1cCkge30sXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoaW5zdGFuY2U6IFBvcHVwKSB7fSxcbiAgICAgIGJlZm9yZUFjdGlvbjogZnVuY3Rpb24gKGluc3RhbmNlOiBQb3B1cCkge30sXG4gICAgICBvblBvc2l0aW9uOiBmdW5jdGlvbiAoaW5zdGFuY2U6IFBvcHVwKSB7fSxcbiAgICAgIG9uUmVzaXplOiBmdW5jdGlvbiAoaW5zdGFuY2U6IFBvcHVwKSB7fVxuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBwYXNzZWQnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2UoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMuZWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMudG9nZ2xlKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLnBvcHVwID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5wb3B1cCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy53aWR0aFJlZiA9IHRoaXMub3B0aW9ucy53aWR0aFJlZiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLndpZHRoUmVmKSBhcyBIVE1MRWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgUG9wdXAuaW5zdGFuY2VzLnNldChzZWxmLmVsLCBzZWxmKTtcblxuICAgIHNlbGYudG9nZ2xlICYmIHNlbGYudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuYmVmb3JlQWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5iZWZvcmVBY3Rpb24oc2VsZik7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuaXNPcGVuZWQgPyBzZWxmLmNsb3NlKCkgOiBzZWxmLm9wZW4oKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi5oYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7c2VsZi5jbG9zZSgpfSwgNTAwKSk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkluaXQoc2VsZik7XG4gICAgfVxuICB9XG5cbiAgb3BlbiA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLnNldFdpZHRoKCk7XG4gICAgc2VsZi5lbC5jbGFzc0xpc3QuYWRkKHNlbGYub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgc2VsZi5wb3NpdGlvbigpO1xuICAgIHNlbGYucG9wdXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBzZWxmLmlzT3BlbmVkID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLm9uT3BlbihzZWxmKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLnNldFdpZHRoKCk7XG4gICAgc2VsZi5wb3B1cC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICAgc2VsZi5lbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgc2VsZi5pc09wZW5lZCA9IGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2Uoc2VsZik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmIChzZWxmLmlzT3BlbmVkICYmICFzZWxmLmVsLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRXaWR0aCA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHdpZHRoID0gc2VsZi53aWR0aFJlZiA/IHNlbGYud2lkdGhSZWYub2Zmc2V0V2lkdGggOiBnZXRWaWV3cG9ydCgpLndpZHRoO1xuXG4gICAgc2VsZi5wb3B1cC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgfVxuXG4gIHBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgZWxEaW1zID0gc2VsZi5wb3B1cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgcmVmRGltcztcbiAgICBsZXQgZGlmZjtcblxuICAgIHJlZkRpbXMgPSBzZWxmLndpZHRoUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGRpZmYgPSByZWZEaW1zLmxlZnQgLSBlbERpbXMubGVmdDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGVsRGltcy50b3AsIHJlZkRpbXMudG9wLCByZWZEaW1zLnRvcCAtIGVsRGltcy50b3ApO1xuXG4gICAgc2VsZi5wb3B1cC5zdHlsZS5sZWZ0ID0gYCR7ZGlmZn1weGA7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vblBvc2l0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25Qb3NpdGlvbihzZWxmKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSAndXRpbGl0eS9tZXJnZSc7XG5pbXBvcnQgc2V0RGF0YU9wdGlvbnMgZnJvbSAndXRpbGl0eS9zZXREYXRhT3B0aW9ucyc7XG5pbXBvcnQgY2hlY2tUaW1lIGZyb20gJ3V0aWxpdHkvY2hlY2tUaW1lJztcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBiYXI6IHN0cmluZztcbiAgdGltZXI6IHN0cmluZztcbiAgc3RhcnQ6IG51bWJlcjtcbiAgY3VycmVudDogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xuICB0aW1lRm9ybWF0OiBzdHJpbmc7XG4gIHN0b3A6IGJvb2xlYW47XG4gIG9uVGljazogKGluc3RhbmNlOiBQcm9ncmVzc0JhcikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRpbWVPYmplY3Qge1xuICBkYXlzOiBudW1iZXI7XG4gIGhvdXJzOiBudW1iZXI7XG4gIG1pbnV0ZXM6IG51bWJlcjtcbiAgc2Vjb25kczogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBudW1iZXI7XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBvcHRpb25zOiBPcHRpb25zO1xuICBiYXI6IEhUTUxFbGVtZW50O1xuICB0aW1lcjogSFRNTEVsZW1lbnQ7XG4gIGludGVydmFsOiBudW1iZXI7XG4gIHN0YXRlOiB7XG4gICAgY3VycmVudDogbnVtYmVyO1xuICAgIHN0b3BwZWQ6IGJvb2xlYW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYmFyOiAnW2RhdGEtYmFyXScsXG4gICAgICB0aW1lcjogJ1tkYXRhLXRpbWVyXScsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICBsaW1pdDogMTAwMDAsXG4gICAgICB0aW1lRm9ybWF0OiAnaG91cnM6bWludXRlczpzZWNvbmRzJyxcbiAgICAgIHN0b3A6IGZhbHNlLFxuICAgICAgb25UaWNrOiBmdW5jdGlvbiAoaW5zdGFuY2U6IFByb2dyZXNzQmFyKSB7fVxuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBwYXNzZWQnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2UoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucyA9IHNldERhdGFPcHRpb25zKHRoaXMub3B0aW9ucywgZWwpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmJhciA9IHRoaXMuZWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuYmFyKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLnRpbWVyID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy50aW1lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5pbnRlcnZhbCA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnQ6IHBhcnNlSW50KHRoaXMub3B0aW9ucy5jdXJyZW50LnRvU3RyaW5nKCksIDEwKSxcbiAgICAgIHN0b3BwZWQ6IHRoaXMub3B0aW9ucy5zdG9wXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIFByb2dyZXNzQmFyLmluc3RhbmNlcy5zZXQoc2VsZi5lbCwgc2VsZik7XG5cbiAgICBzZWxmLnNldFN0YXRlKCk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuc3RvcHBlZCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmludGVydmFsKSByZXR1cm47XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIHRoaXMuc3RhdGUuc3RvcHBlZCA9IHRydWU7XG4gIH1cblxuICBzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoc2VsZi5iYXIpIHtcbiAgICAgIGxldCBjdXJyZW50V2lkdGggPSAoc2VsZi5zdGF0ZS5jdXJyZW50IC8gc2VsZi5vcHRpb25zLmxpbWl0KSAqIDEwMDtcbiAgICAgIGxldCBtYXhXaWR0aCA9IDEwMDtcblxuICAgICAgc2VsZi5iYXIuc3R5bGUud2lkdGggPSBgJHtjdXJyZW50V2lkdGggPiBtYXhXaWR0aCA/IG1heFdpZHRoIDogY3VycmVudFdpZHRofSVgO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnRpbWVyKSB7XG4gICAgICBsZXQgdGltZSA9IHNlbGYuZ2V0VGltZShzZWxmLnN0YXRlLmN1cnJlbnQpO1xuXG4gICAgICBzZWxmLnRpbWVyLmlubmVySFRNTCA9IHNlbGYuZm9ybWF0VGltZSh0aW1lLCBzZWxmLm9wdGlvbnMudGltZUZvcm1hdCk7XG4gICAgfVxuXG4gICAgc2VsZi5zdGF0ZS5jdXJyZW50ID0gc2VsZi5zdGF0ZS5jdXJyZW50ICsgMTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uVGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2VsZi5vcHRpb25zLm9uVGljayhzZWxmKTtcbiAgICB9XG4gIH1cblxuICBnZXRUaW1lID0gKHNlY29uZHM6IG51bWJlcik6IFRpbWVPYmplY3QgPT4ge1xuICAgIGxldCBkYXlzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gKDM2MDAqMjQpKTtcbiAgICBzZWNvbmRzIC09IGRheXMgKiAzNjAwICogMjQ7XG4gICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gICAgc2Vjb25kcyAtPSBob3VycyAqIDM2MDA7XG4gICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgc2Vjb25kcyAtPSBtaW51dGVzICogNjA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF5czogZGF5cyxcbiAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgIG1pbnV0ZXM6IG1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiBzZWNvbmRzXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VGltZSA9ICh0aW1lT2JqOiBUaW1lT2JqZWN0LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGZvcm1hdDtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aW1lT2JqKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShrZXksIGNoZWNrVGltZSh0aW1lT2JqW2tleV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gJ3V0aWxpdHkvbWVyZ2UnO1xyXG5pbXBvcnQgc2V0RGF0YU9wdGlvbnMgZnJvbSAndXRpbGl0eS9zZXREYXRhT3B0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgdGFibGlzdENsYXNzOiBzdHJpbmc7XHJcbiAgY29udGVudENsYXNzOiBzdHJpbmc7XHJcbiAgdGFiQ2xhc3M6IHN0cmluZztcclxuICBsaW5rQ2xhc3M6IHN0cmluZztcclxuICBwYW5lbENsYXNzOiBzdHJpbmc7XHJcbiAgaW5hY3RpdmVDbGFzczogc3RyaW5nO1xyXG4gIGNoYW5nZVVSTDogYm9vbGVhbjtcclxuICBvbkluaXQ6IChpbnN0YW5jZTogVGFicykgPT4gdm9pZDtcclxuICBvbkNoYW5nZTogKGluc3RhbmNlOiBUYWJzKSA9PiB2b2lkO1xyXG4gIFtrZXk6IHN0cmluZ106IE9wdGlvbnNba2V5b2YgT3B0aW9uc107XHJcbn1cclxuXHJcbmNsYXNzIFRhYnMge1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHRhYmxpc3Q6IEhUTUxFbGVtZW50O1xyXG4gIHRhYnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xyXG4gIHRhYkl0ZW1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICBjb250ZW50czogSFRNTEVsZW1lbnQ7XHJcbiAgcGFuZWxzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICBzdGF0ZToge1xyXG4gICAgYWN0aXZlVGFiOiBudW1iZXJcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgb3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHt9KSB7XHJcbiAgICBjb25zdCBkZWZhdWx0czogT3B0aW9ucyA9IHtcclxuICAgICAgdGFibGlzdENsYXNzOiAnYy10YWJzX190YWJsaXN0JyxcclxuICAgICAgY29udGVudENsYXNzOiAnYy10YWJzX19jb250ZW50cycsXHJcbiAgICAgIHRhYkNsYXNzOiAnYy10YWJzX190YWInLFxyXG4gICAgICBsaW5rQ2xhc3M6ICdjLXRhYnNfX2xpbmsnLFxyXG4gICAgICBwYW5lbENsYXNzOiAnYy10YWJzX19zZWN0aW9uJyxcclxuICAgICAgaW5hY3RpdmVDbGFzczogJ2Qtbm9uZScsXHJcbiAgICAgIGNoYW5nZVVSTDogZmFsc2UsXHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGluc3RhbmNlOiBUYWJzKSB7fSxcclxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChpbnN0YW5jZTogVGFicykge31cclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgcGFzc2VkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHNldERhdGFPcHRpb25zKHRoaXMub3B0aW9ucywgZWwpO1xyXG5cclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMudGFibGlzdCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5vcHRpb25zLnRhYmxpc3RDbGFzc31gKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMudGFicyA9IHRoaXMudGFibGlzdC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLm9wdGlvbnMubGlua0NsYXNzfWApIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xyXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMudGFibGlzdC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLm9wdGlvbnMudGFiQ2xhc3N9YCkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLm9wdGlvbnMuY29udGVudENsYXNzfWApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5wYW5lbHMgPSB0aGlzLmNvbnRlbnRzLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMub3B0aW9ucy5wYW5lbENsYXNzfWApIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjdGl2ZVRhYjogdGhpcy5nZXRBY3RpdmVUYWIoKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAoc2VsZi5vcHRpb25zLmNoYW5nZVVSTCA9PT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgdGFyZ2V0SUQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgYXMgc3RyaW5nO1xyXG4gICAgICBsZXQgdGFyZ2V0VGFiID0gdGFyZ2V0SUQgPyB0aGlzLnRhYmxpc3QucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0SUR9YCkgYXMgSFRNTEVsZW1lbnQgOiB0aGlzLnRhYnNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGxldCB0YXJnZXRJbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy50YWJzLCB0YXJnZXRUYWIpO1xyXG5cclxuICAgICAgc2VsZi5zd2l0Y2hUYWIodGFyZ2V0SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy50YWJzLCAodGFiLCBpKSA9PiB7XHJcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5UHJlc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5vbkluaXQoc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmVUYWIgPSAoKSA9PiB7XHJcbiAgICBsZXQgYWN0aXZlVGFiID0gdGhpcy50YWJsaXN0LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbGV0IHRhYkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnRhYnMsIGFjdGl2ZVRhYik7XHJcblxyXG4gICAgcmV0dXJuIHRhYkluZGV4O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGxldCBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZi50YWJzLCB0YXJnZXQpO1xyXG5cclxuICAgIHNlbGYuc3dpdGNoVGFiKGluZGV4KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlQcmVzcyA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB0YWIgaW4gdGhlIHRhYnMgbm9kZSBsaXN0XHJcbiAgICBsZXQgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMudGFicywgdGFyZ2V0KTtcclxuICAgIC8vIFdvcmsgb3V0IHdoaWNoIGtleSB0aGUgdXNlciBpcyBwcmVzc2luZyBhbmRcclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IHRhYidzIGluZGV4IHdoZXJlIGFwcHJvcHJpYXRlXHJcbiAgICBsZXQgZGlyID0gZS53aGljaCA9PT0gMzcgPyBpbmRleCAtIDEgOiBlLndoaWNoID09PSAzOSA/IGluZGV4ICsgMSA6IGUud2hpY2ggPT09IDQwID8gJ2Rvd24nIDogbnVsbCBhcyBudW1iZXIgfCBudWxsO1xyXG5cclxuICAgIGlmIChkaXIgIT09IG51bGwpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyBJZiB0aGUgZG93biBrZXkgaXMgcHJlc3NlZCwgbW92ZSBmb2N1cyB0byB0aGUgb3BlbiBwYW5lbCxcclxuICAgICAgLy8gb3RoZXJ3aXNlIHN3aXRjaCB0byB0aGUgYWRqYWNlbnQgdGFiXHJcbiAgICAgIGRpciA9PT0gJ2Rvd24nID8gdGhpcy5wYW5lbHNbaW5kZXhdLmZvY3VzKCkgOiB0aGlzLnRhYnNbZGlyXSA/IHNlbGYuc3dpdGNoVGFiKGRpcikgOiB2b2lkIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hUYWIgPSAobmV3VGFiOiBudW1iZXIgPSAwKSA9PiB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgb2xkVGFiID0gc2VsZi5zdGF0ZS5hY3RpdmVUYWI7XHJcblxyXG4gICAgaWYgKG9sZFRhYiA9PT0gbmV3VGFiKSByZXR1cm47XHJcblxyXG4gICAgc2VsZi50YWJzW29sZFRhYl0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgc2VsZi50YWJzW29sZFRhYl0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XHJcbiAgICBzZWxmLnBhbmVsc1tvbGRUYWJdLmNsYXNzTGlzdC5hZGQoc2VsZi5vcHRpb25zLmluYWN0aXZlQ2xhc3MpO1xyXG5cclxuICAgIHNlbGYudGFic1tuZXdUYWJdLmZvY3VzKCk7XHJcbiAgICBzZWxmLnRhYnNbbmV3VGFiXS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XHJcbiAgICBzZWxmLnRhYnNbbmV3VGFiXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG4gICAgc2VsZi5wYW5lbHNbbmV3VGFiXS5jbGFzc0xpc3QucmVtb3ZlKHNlbGYub3B0aW9ucy5pbmFjdGl2ZUNsYXNzKTtcclxuXHJcbiAgICBpZiAoc2VsZi5vcHRpb25zLmNoYW5nZVVSTCA9PT0gdHJ1ZSkge1xyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgJyMnICsgc2VsZi50YWJzW25ld1RhYl0uZ2V0QXR0cmlidXRlKCdpZCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnN0YXRlLmFjdGl2ZVRhYiA9IG5ld1RhYjtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMub25DaGFuZ2Uoc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xyXG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSAndXRpbGl0eS9tZXJnZSc7XG5pbXBvcnQgdXBkYXRlQ29udHJvbHNMaXN0IGZyb20gJ3V0aWxpdHkvdXBkYXRlQ29udHJvbHNMaXN0JztcbmltcG9ydCBzZXRTdGF0ZVN0YXR1cyBmcm9tICd1dGlsaXR5L3NldFN0YXRlU3RhdHVzJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdjb21wb25lbnRzL2NvbnRyb2xzL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyJztcbmltcG9ydCBzZXRDb250cm9sU3RhdGUgZnJvbSAndXRpbGl0eS9zZXRDb250cm9sU3RhdGUnO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIGRheUxlbmd0aDogc3RyaW5nO1xuICBicmVha3M6IG9iamVjdFtdO1xufTtcblxuaW50ZXJmYWNlIFNlcnZlclJlc3BvbnNlIHtcbiAgU1RBVFVTOiBzdHJpbmc7XG4gIE5PVEU/OiBzdHJpbmc7XG4gIEVSUk9SUz86IFtdIHwgc3RyaW5nO1xuICBEQVlfU1RBVFVTOiBzdHJpbmc7XG59XG5cbnR5cGUgRGF5U3RhdHVzID0gJ2NyZWF0ZWQnIHwgJ29wZW5lZCcgfCAnYnJlYWsnIHwgJ2Nsb3NlZCc7XG5cbmNsYXNzIFRpbWVUcmFja2VyIHtcbiAgb3B0aW9uczogT3B0aW9ucztcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBhY3RpdmVQYW5lbDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBjb250cm9sc0xpc3Q6IEhUTUxFbGVtZW50O1xuICBzdGF0ZToge1xuICAgIGRheVN0YXR1czogc3RyaW5nO1xuICAgIGJyZWFrRHVyYXRpb246IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzOiBPcHRpb25zID0ge1xuICAgICAgZGF5TGVuZ3RoOiAnOGgnLFxuICAgICAgYnJlYWtzOiBbXG4gICAgICAgIHtpbmRleDogMSwgdmFsdWU6IDV9LFxuICAgICAgICB7aW5kZXg6IDIsIHZhbHVlOiAxNX0sXG4gICAgICAgIHtpbmRleDogMywgdmFsdWU6IDMwfSxcbiAgICAgICAge2luZGV4OiA0LCB2YWx1ZTogNjB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IHBhc3NlZCcpO1xuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZShkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb250cm9sc0xpc3QgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zLW1lbnUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF5U3RhdHVzOiAnY3JlYXRlZCcsXG4gICAgICBicmVha0R1cmF0aW9uOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuc2V0RGF5U3RhdHVzKHNlbGYuZ2V0RGF5U3RhdHVzKCkpO1xuICAgIHNlbGYuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLmhhbmRsZUNsaWNrKTtcbiAgICBzZWxmLnN0YXRlLmJyZWFrRHVyYXRpb24gPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1icmVhay1kdXJhdGlvbicpO1xuXG4gICAgaWYgKFsnY3JlYXRlZCcsICdjbG9zZWQnXS5pbmRleE9mKHNlbGYuc3RhdGUuZGF5U3RhdHVzKSA+IC0xKSB7XG4gICAgICB0aGlzLnNob3dQYW5lbCgnb3BlbicpO1xuICAgIH0gZWxzZSBpZiAoc2VsZi5zdGF0ZS5kYXlTdGF0dXMgPT09ICdicmVhaycpIHtcbiAgICAgIHRoaXMuc2hvd1BhbmVsKCdicmVhay1wcm9ncmVzcycpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBjb250cm9sO1xuICAgIGxldCBhY3Rpb247XG5cbiAgICBpZiAoY29udHJvbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbl0nKSkge1xuICAgICAgLy8g0L7QsdGL0YfQvdGL0LUg0LrQvdC+0L/QutC4XG4gICAgICBhY3Rpb24gPSBjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKGFjdGlvbiwge1xuICAgICAgICBhbmNob3I6IGNvbnRyb2xcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jLW92ZXJsYXlfX2J0bicpKSB7XG4gICAgICAvLyDQutC90L7Qv9C60LAg0LfQsNC60YDRi9GC0LjRjyDQv9Cw0L3QtdC70LhcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzZWxmLmRlc3Ryb3lQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWN0aW9uID0gKGFjdGlvbjogc3RyaW5nLCBwYXJhbXM6IHt9ID0ge30pID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNlbmRSZXF1ZXN0ID0gdHJ1ZTtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfTtcblxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlICdicmVhay1zdGFydCc6XG4gICAgICAgIHNlbmRSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIHNlbGYuc2hvd1BhbmVsKGFjdGlvbik7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JyZWFrJzpcbiAgICAgICAgaWYgKHBhcmFtcy5hbmNob3IpIHtcbiAgICAgICAgICBzZXRDb250cm9sU3RhdGUocGFyYW1zLmFuY2hvciwgJ2Rpc2FibGVkJywgJ2MtYnRuX2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5zdGF0ZS5kYXlTdGF0dXMgPT09ICdvcGVuZWQnICYmIHBhcmFtcy5icmVha19kdXJhdGlvbikge1xuICAgICAgICAgIGRhdGEuYnJlYWtfZHVyYXRpb24gPSBwYXJhbXMuYnJlYWtfZHVyYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjbG9zZS1zdGFydCc6XG4gICAgICAgIHNlbmRSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIHNlbGYuc2hvd1BhbmVsKGFjdGlvbik7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgaWYgKHBhcmFtcy5hbmNob3IpIHtcbiAgICAgICAgICBzZXRDb250cm9sU3RhdGUocGFyYW1zLmFuY2hvciwgJ2Rpc2FibGVkJywgJ2MtYnRuX2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnb3Blbic6XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHNlbmRSZXF1ZXN0KSB7XG4gICAgICBnbG9iYWwuJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2FqYXgvaGFuZGxlVGltZVRyYWNraW5nLnBocCcsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlOiBTZXJ2ZXJSZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBhY3Rpb24pO1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLlNUQVRVUyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBzZWxmLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHJlc3BvbnNlLkRBWV9TVEFUVVMpO1xuICAgICAgICAgICAgdXBkYXRlQ29udHJvbHNMaXN0KHNlbGYuZWwsIHNlbGYuY29udHJvbHNMaXN0KTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICAgIHNlbGYuZGVzdHJveVBhbmVsKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLkRBWV9TVEFUVVMgPT09ICdicmVhaycgJiYgYWN0aW9uID09PSAnYnJlYWsnKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGVzdHJveVBhbmVsKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLz9sb2dvdXQ9eWVzJztcbiAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLkRBWV9TVEFUVVMgPT09ICdvcGVuZWQnICYmIGFjdGlvbiA9PT0gJ2JyZWFrJykge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc3Ryb3lQYW5lbCgpO1xuICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLmFjdGl2ZVBhbmVsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gc2VsZi5hY3RpdmVQYW5lbC5xdWVyeVNlbGVjdG9yKCcudHJhY2tlci1wYW5lbF9fdGl0bGUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cnMgPSBzZWxmLmFjdGl2ZVBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcnMtbGlzdF9fbGFiZWxfc2Vjb25kYXJ5JykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xzID0gc2VsZi5hY3RpdmVQYW5lbC5xdWVyeVNlbGVjdG9yKCcudHJhY2tlci1wYW5lbF9fY29udHJvbHMnKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdZb3VyIGRheSBpcyBjbG9zZWQhJztcbiAgICAgICAgICAgICAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKCd1LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzW2ldLmNsYXNzTGlzdC5hZGQoJ3RpbWVycy1saXN0X19sYWJlbF9kaW1tZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc3Ryb3lQYW5lbCgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8/bG9nb3V0PXllcyc7XG4gICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChwYXJhbXMuYW5jaG9yKSB7XG4gICAgICAgICAgICBzZXRDb250cm9sU3RhdGUocGFyYW1zLmFuY2hvciwgJ2RlZmF1bHQnLCAnYy1idG5fZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dQYW5lbCA9IChwYW5lbDogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZF49XCJ0bXBsLXRyYWNrZXItcGFuZWwtJHtwYW5lbH1cIl1gKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSB8fCAhY29udGVudCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChwYW5lbCkge1xuICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgZGF5TGVuZ3RoOiBzZWxmLm9wdGlvbnMuZGF5TGVuZ3RoXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdCA9IGdsb2JhbC4kKGdsb2JhbC5NdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUuaW5uZXJIVE1MLCBkYXRhLCB7fSwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oY29udGVudCkuZ2V0KDApO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdicmVhay1zdGFydCc6XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgYnJlYWtzOiBzZWxmLm9wdGlvbnMuYnJlYWtzXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdCA9IGdsb2JhbC4kKGdsb2JhbC5NdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUuaW5uZXJIVE1MLCBkYXRhLCB7fSwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oY29udGVudCkuZ2V0KDApO1xuICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gZS50YXJnZXQuY2xvc2VzdCgnLnRpbWVycy1saXN0X19sYWJlbCcpO1xuICAgICAgICAgIGxldCBpdGVtO1xuICAgICAgICAgIGxldCBpbnB1dDtcblxuICAgICAgICAgIGlmICghY29udHJvbCkgcmV0dXJuO1xuXG4gICAgICAgICAgaXRlbSA9IGNvbnRyb2wuY2xvc2VzdCgnLnRpbWVycy1saXN0X19pdGVtJyk7XG4gICAgICAgICAgaW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiQlJFQUtfVElNRVwiXScpO1xuICAgICAgICAgIHNlbGYuc3RhdGUuYnJlYWtEdXJhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgIHNlbGYuaGFuZGxlQWN0aW9uKCdicmVhaycsIHticmVha19kdXJhdGlvbjogaW5wdXQudmFsdWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JyZWFrLXByb2dyZXNzJzpcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB0aW1lUGFzc2VkOiBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50LXRpbWUnKSAtIHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJyZWFrLXN0YXJ0JyksXG4gICAgICAgICAgYnJlYWtMZW5ndGg6IHNlbGYuc3RhdGUuYnJlYWtEdXJhdGlvbixcbiAgICAgICAgICBicmVha0xlbmd0aFNlYzogc2VsZi5zdGF0ZS5icmVha0R1cmF0aW9uICogNjAgLy8g0LTQu9C40YLQtdC70YzQvdC+0YHRgtGMINC/0LXRgNC10YDRi9Cy0LAg0LIg0YHQtdC60YPQvdC00LDRhVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGdsb2JhbC4kKGdsb2JhbC5NdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUuaW5uZXJIVE1MLCBkYXRhLCB7fSwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oY29udGVudCkuZ2V0KDApO1xuXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9ncmVzc2Jhcl0nKTtcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyU3RhdHVzZXMgPSB7XG4gICAgICAgICAgZXJyb3I6ICd1LWNvbG9yLWVycm9yJ1xuICAgICAgICB9O1xuICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIocHJvZ3Jlc3MsIHtcbiAgICAgICAgICBvblRpY2s6IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSAoaW5zdGFuY2Uuc3RhdGUuY3VycmVudCAvIGluc3RhbmNlLm9wdGlvbnMubGltaXQpICogMTAwO1xuXG4gICAgICAgICAgICBpZiAodGltZVBhc3NlZCA+IDEwMCkge1xuICAgICAgICAgICAgICBzZXRTdGF0ZVN0YXR1cyhpbnN0YW5jZS5lbCwgJ2Vycm9yJywgcHJvZ3Jlc3NCYXJTdGF0dXNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2xvc2Utc3RhcnQnOlxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnQXQgV29yaycsXG4gICAgICAgICAgICAgIHZhbHVlOiAnNmgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdCcmVhaycsXG4gICAgICAgICAgICAgIHZhbHVlOiAnMWgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdBdCBXb3JrIExlZnQnLFxuICAgICAgICAgICAgICB2YWx1ZTogJzJoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnT3Blbm5lZCBUYWJsZXMnLFxuICAgICAgICAgICAgICB2YWx1ZTogJzE1J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnT3JkZXJzJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICczNCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdCA9IGdsb2JhbC4kKGdsb2JhbC5NdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUuaW5uZXJIVE1MLCBkYXRhLCB7fSwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oY29udGVudCkuZ2V0KDApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYuaGFuZGxlQ2xpY2spO1xuICAgICAgdGhpcy5hY3RpdmVQYW5lbCA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95UGFuZWwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwgJiYgdGhpcy5hY3RpdmVQYW5lbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLmFjdGl2ZVBhbmVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmVQYW5lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF5U3RhdHVzID0gKCk6IERheVN0YXR1cyA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykgYXMgRGF5U3RhdHVzIHx8ICdjcmVhdGVkJztcbiAgfVxuXG4gIHNldERheVN0YXR1cyA9IChzdGF0dXM6IERheVN0YXR1cykgPT4ge1xuICAgIHRoaXMuc3RhdGUuZGF5U3RhdHVzID0gc3RhdHVzO1xuXG4gICAgdXBkYXRlQ29udHJvbHNMaXN0KHRoaXMuZWwsIHRoaXMuY29udHJvbHNMaXN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lVHJhY2tlcjtcbiIsImltcG9ydCBtZXJnZSBmcm9tICd1dGlsaXR5L21lcmdlJztcbmltcG9ydCBCYXNrZXRMaXN0IGZyb20gJ2NvbXBvbmVudHMvbGlzdHMvYmFza2V0LWxpc3QvYmFza2V0LWxpc3QnO1xuaW1wb3J0IHNldENvbnRyb2xTdGF0ZSBmcm9tICd1dGlsaXR5L3NldENvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgc2V0UHJpY2VGb3JtYXQgZnJvbSAndXRpbGl0eS9zZXRQcmljZUZvcm1hdCc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnY29tcG9uZW50cy9jb250cm9scy9rZXlib2FyZC9rZXlib2FyZCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvbG9hZGVycy9yYWRpYWwtbG9hZGVyL3JhZGlhbC1sb2FkZXInO1xuaW1wb3J0IHNldERhdGEgZnJvbSAndXRpbGl0eS9zZXREYXRhJztcbmltcG9ydCBnZXROb3VuRm9ybSBmcm9tICd1dGlsaXR5L2dldE5vdW5Gb3JtJztcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xufVxuXG5pbnRlcmZhY2UgRm9ybVN0YXRlIHtcbiAgdG90YWw6IG51bWJlcjtcbiAgc3RhZ2U6IHN0cmluZyB8IG51bGw7XG4gIHZpZXc6IHN0cmluZyB8IG51bGw7XG4gIGJhc2tldDogc3RyaW5nIHwgbnVsbDtcbiAgcG9zc2libGVCYXNrZXRzOiB7fTtcbn1cblxuY2xhc3MgT3JkZXJGb3JtIHtcbiAgZWw6IEhUTUxGb3JtRWxlbWVudDtcbiAgb3B0aW9uczogT3B0aW9ucztcbiAgY29udHJvbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICBpbmZvOiBIVE1MRWxlbWVudDtcbiAgY291bnQ6IEhUTUxFbGVtZW50O1xuICB0b3RhbDogSFRNTEVsZW1lbnQ7XG4gIHZpZXdzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgc3RhdGU6IEZvcm1TdGF0ZTtcblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEZvcm1FbGVtZW50LCBvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+ID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGkxOG46IHtcbiAgICAgICAgZW46IHtcbiAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgc3VjY2VzczogJ1BsYWNlZCEnLFxuICAgICAgICAgICAgZXJyb3I6ICdPb3BzISdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzIScsXG4gICAgICAgICAgICBlcnJvcjogJ09vcHMhJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnU6IHtcbiAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgc3VjY2VzczogJ1BsYWNlZCEnLFxuICAgICAgICAgICAgZXJyb3I6ICdPb3BzISdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzIScsXG4gICAgICAgICAgICBlcnJvcjogJ09vcHMhJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBwYXNzZWQnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2UoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItYnRuJyk7XG4gICAgdGhpcy5pbmZvID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybV9faW5mbycpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMudG90YWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvdGFsXScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuY291bnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvdW50XScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMudmlld3MgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZpZXddJyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgc3RhZ2U6IG51bGwsXG4gICAgICB2aWV3OiAnb3ZlcmFsbCcsXG4gICAgICBiYXNrZXQ6IG51bGwsXG4gICAgICBwb3NzaWJsZUJhc2tldHM6IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIE9yZGVyRm9ybS5pbnN0YW5jZXMuc2V0KHNlbGYuZWwsIHNlbGYpO1xuXG4gICAgc2VsZi5zdGF0ZS5zdGFnZSA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJyk7XG5cbiAgICBpZiAoc2VsZi5zdGF0ZS5zdGFnZSA9PT0gJ3RhYmxlJykge1xuXG4gICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlLnN0YWdlID09PSAndGFibGVfdXBkYXRlJykge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc3RhdGUudmlldyA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSA6ICdvdmVyYWxsJztcbiAgICAgIHNlbGYuc3RhdGUuYmFza2V0ID0gc2VsZi5nZXRCYXNrZXRDb2RlKCk7XG5cbiAgICAgIHNlbGYuc2V0VG90YWwoKTtcbiAgICAgIGdsb2JhbC4kKHNlbGYuZWwpLm9uKCdjbGljaycsICcub3JkZXItZmlsdGVyX19pdGVtIFtkYXRhLXZpZXddJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG5ld1ZpZXcgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpO1xuXG4gICAgICAgIGlmIChuZXdWaWV3ID09PSBzZWxmLnN0YXRlLnZpZXcgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjLWJ0bl9kaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgc2VsZi5zZXRWaWV3KG5ld1ZpZXcpO1xuICAgICAgICBzZWxmLmxvYWRCYXNrZXQoe2FjdGlvbjogJ2NoYW5nZV92aWV3JywgaGFuZGxlVmlldzogdHJ1ZX0pO1xuICAgICAgICAvLyBzZWxmLmdldERhdGEobmV3Vmlldyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gYWpheEJhc2tldCgnbG9hZCcsIDAsIDAsIDEsICdhMicsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgIHNlbGYuc2V0VG90YWwoKTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gbG9hZEJhc2tldChzZWxmLnN0YXRlLmJhc2tldCwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICBzZWxmLnNldFRvdGFsKCk7XG4gICAgICAvLyB9KTtdXG4gICAgICAvLyBzZWxmLmxvYWRCYXNrZXQoKTtcbiAgICB9XG5cbiAgICBzZWxmLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlbGYuaGFuZGxlU3VibWl0KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IChlOiBFdmVudCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc2VuZFJlcXVlc3QgPSB0cnVlO1xuICAgIGxldCB1cmw7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGJhc2tldHM7XG4gICAgbGV0IGJhc2tldElEID0gW107XG4gICAgbGV0IG9yZGVycztcbiAgICBsZXQgcmVkaXJlY3QgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpIHx8ICcnO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc3dpdGNoIChzZWxmLnN0YXRlLnN0YWdlKSB7XG4gICAgICBjYXNlICd0YWJsZSc6XG4gICAgICAgIHVybCA9ICcvYWpheC9zZXRUYWJsZS5waHAnO1xuICAgICAgICBkYXRhID0gZ2xvYmFsLiQoc2VsZi5lbCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgZGF0YS5wdXNoKHtuYW1lOiAnYWN0aW9uJywgdmFsdWU6ICdvcGVuJ30pO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YWJsZV91cGRhdGUnOlxuICAgICAgICB1cmwgPSAnL2FqYXgvc2V0VGFibGUucGhwJztcbiAgICAgICAgZGF0YSA9IGdsb2JhbC4kKHNlbGYuZWwpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIGRhdGEucHVzaCh7bmFtZTogJ2FjdGlvbicsIHZhbHVlOiAndXBkYXRlJ30pO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvcmRlcic6XG4gICAgICAgIC8vIHBsYWNlIG9yZGVyXG4gICAgICAgIHVybCA9ICcnO1xuICAgICAgICBiYXNrZXRzID0gc2VsZi5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iYXNrZXRdJyk7XG4gICAgICAgIG9yZGVycyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFza2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJhc2tldElELnB1c2goYmFza2V0c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFza2V0JykpO1xuICAgICAgICAgIGxldCBvcmRlcklEID0gYmFza2V0c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXJpZCcpO1xuXG4gICAgICAgICAgaWYgKG9yZGVySUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKG9yZGVySUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZW5kUmVxdWVzdCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnN0YXRlLnN0YWdlID09PSAnb3JkZXInKSB7XG4gICAgICBsZXQgbG9hZGVyID0gbmV3IExvYWRlcihzZWxmLmVsKTtcblxuXG4gICAgICB0aW1lUGxhY2VPcmRlcihiYXNrZXRJRCwgb3JkZXJzLCB7dGltZV9zdGFydDogbmV3IERhdGUoKX0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBsZXQgc3VibWl0QnRuID0gc2VsZi5lbC5xdWVyeVNlbGVjdG9yKCcub3JkZXItYnRuJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGxldCBtc2cgPSAnJztcblxuICAgICAgICBpZiAocmVzcG9uc2UuU1RBVFVTID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYy1idG5fZXJyb3InKTtcbiAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYy1idG5fc3VjY2VzcycpO1xuICAgICAgICAgIG1zZyA9IHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXSAmJiBzZWxmLm9wdGlvbnMuaTE4bltkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZ11bc2VsZi5zdGF0ZS5zdGFnZV0gPyBzZWxmLm9wdGlvbnMuaTE4bltkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZ11bc2VsZi5zdGF0ZS5zdGFnZV1bcmVzcG9uc2UuU1RBVFVTXSA6IHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXVsnZGVmYXVsdCddW3Jlc3BvbnNlLlNUQVRVU11cbiAgICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBtc2c7XG5cbiAgICAgICAgICBpZiAocmVkaXJlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZGlyZWN0LmluZGV4T2YoYCMke2tleX0jYCksIGtleSwgcmVzcG9uc2Vba2V5XSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0LmluZGV4T2YoYCMke2tleX0jYCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0ID0gcmVkaXJlY3QucmVwbGFjZShgIyR7a2V5fSNgLCByZXNwb25zZVtrZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVkaXJlY3QpO1xuXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Q7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuU1RBVFVTID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2MtYnRuX3N1Y2Nlc3MnKTtcbiAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYy1idG5fZXJyb3InKTtcbiAgICAgICAgICBsZXQgcHJldlRleHQgPSBzdWJtaXRCdG4udGV4dENvbnRlbnQ7XG4gICAgICAgICAgbXNnID0gc2VsZi5vcHRpb25zLmkxOG5bZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmddICYmIHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXVtzZWxmLnN0YXRlLnN0YWdlXSA/IHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXVtzZWxmLnN0YXRlLnN0YWdlXVtyZXNwb25zZS5TVEFUVVNdIDogc2VsZi5vcHRpb25zLmkxOG5bZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmddWydkZWZhdWx0J11bcmVzcG9uc2UuU1RBVFVTXTtcbiAgICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBtc2c7XG5cbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYy1idG5fZXJyb3InKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IHByZXZUZXh0O1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsb2FkZXIuc2V0U3RhdGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUuc3RhZ2UgIT09ICdvcmRlcicgJiYgc2VuZFJlcXVlc3QpIHtcbiAgICAgIGxldCBsb2FkZXIgPSBuZXcgTG9hZGVyKHNlbGYuZWwpO1xuXG4gICAgICBnbG9iYWwuJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIGxldCBzdWJtaXRCdG4gPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1idG4nKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBsZXQgbXNnID0gJyc7XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UuU1RBVFVTID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjLWJ0bl9lcnJvcicpO1xuICAgICAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2MtYnRuX3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIG1zZyA9IHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXSAmJiBzZWxmLm9wdGlvbnMuaTE4bltkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZ11bc2VsZi5zdGF0ZS5zdGFnZV0gPyBzZWxmLm9wdGlvbnMuaTE4bltkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZ11bc2VsZi5zdGF0ZS5zdGFnZV1bcmVzcG9uc2UuU1RBVFVTXSA6IHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXVsnZGVmYXVsdCddW3Jlc3BvbnNlLlNUQVRVU11cbiAgICAgICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IG1zZztcblxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVkaXJlY3QuaW5kZXhPZihgIyR7a2V5fSNgKSwga2V5LCByZXNwb25zZVtrZXldKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdC5pbmRleE9mKGAjJHtrZXl9I2ApID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJlZGlyZWN0ID0gcmVkaXJlY3QucmVwbGFjZShgIyR7a2V5fSNgLCByZXNwb25zZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVkaXJlY3QpO1xuXG4gICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0O1xuICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLlNUQVRVUyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2MtYnRuX3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdjLWJ0bl9lcnJvcicpO1xuICAgICAgICAgICAgbGV0IHByZXZUZXh0ID0gc3VibWl0QnRuLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbXNnID0gc2VsZi5vcHRpb25zLmkxOG5bZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmddICYmIHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXVtzZWxmLnN0YXRlLnN0YWdlXSA/IHNlbGYub3B0aW9ucy5pMThuW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nXVtzZWxmLnN0YXRlLnN0YWdlXVtyZXNwb25zZS5TVEFUVVNdIDogc2VsZi5vcHRpb25zLmkxOG5bZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmddWydkZWZhdWx0J11bcmVzcG9uc2UuU1RBVFVTXTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IG1zZztcblxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYy1idG5fZXJyb3InKTtcbiAgICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gcHJldlRleHQ7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbG9hZGVyLnNldFN0YXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFibGVEYXRhID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGxvYWRlciA9IG5ldyBMb2FkZXIoc2VsZi5lbCk7XG5cbiAgICBnbG9iYWwuJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hamF4L2dldFRhYmxlRGF0YS5waHAnLFxuICAgICAgZGF0YToge1xuICAgICAgICAnaWQtdGFibGUnOiBpZCxcbiAgICAgICAgJ3ZpZXcnOiAnZm9ybSdcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuU1RBVFVTID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBzZXREYXRhKHNlbGYuZWwsIHJlc3BvbnNlLkRBVEEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZGVyLnNldFN0YXRlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZU9yZGVyID0gKG9yZGVySUQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGNvbnNvbGUubG9nKG9yZGVySUQpO1xuXG4gICAgZGVsT3JkZXIob3JkZXJJRCwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ09yZGVyICcgKyBvcmRlcklEICsgJyBzdWNjZXNzZnVsbHkgZGVsZXRlZCcpO1xuXG4gICAgICBzZWxmLmxvYWRCYXNrZXQoe2FjdGlvbjogJ2NoYW5nZV92aWV3JywgaGFuZGxlVmlldzogdHJ1ZX0pO1xuICAgICAgS2V5Ym9hcmQuaW5zdGFuY2VzLmdldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQnKSkuY2xvc2VSZWNvbW1lbmRhdGlvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRCYXNrZXQgPSAocGFyYW1zID0ge30pID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gbGV0IGxvYWRlcjogTG9hZGVyO1xuICAgIGxldCBsb2FkZXIgPSBuZXcgTG9hZGVyKHNlbGYuZWwpO1xuXG4gICAgbGV0IGJhc2tldHMgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJhc2tldF0nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFza2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGluc3RhbmNlID0gQmFza2V0TGlzdC5pbnN0YW5jZXMuZ2V0KGJhc2tldHNbaV0pO1xuXG4gICAgICBpZiAoaW5zdGFuY2UpIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsZXQgbG9hZFBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcy5hY3Rpb24gPT09ICdjaGFuZ2VfdmlldycpIHtcbiAgICAgIGxvYWRQYXJhbXMucHJvY2Vzc0RhdGEgPSBmdW5jdGlvbiAoZGF0YToge30pIHtcbiAgICAgICAgZGF0YS52aWV3ID0gc2VsZi5zdGF0ZS52aWV3O1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRCYXNrZXQoc2VsZi5zdGF0ZS5iYXNrZXQsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgbGV0IGJhc2tldHMgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJhc2tldF0nKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coYmFza2V0cyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFza2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBsZXQgaW5zdGFuY2UgPSBCYXNrZXRMaXN0Lmluc3RhbmNlcy5nZXQoYmFza2V0c1tpXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcbiAgICAgICAgbmV3IEJhc2tldExpc3QoYmFza2V0c1tpXSwgZ2xvYmFsLmJhc2tldE9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhCYXNrZXRMaXN0Lmluc3RhbmNlcyk7XG5cbiAgICAgIC8vIHNlbGYuc2V0VmlldyhiYXNrZXRzLmxlbmd0aCA+IDEgPyAnZ3Vlc3RzJyA6ICdvdmVyYWxsJyk7XG5cbiAgICAgIGlmIChwYXJhbXMuaGFuZGxlVmlldykge1xuICAgICAgICBpZiAoYmFza2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc2V0Q29udHJvbFN0YXRlKHNlbGYuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmlldz1cIm92ZXJhbGxcIl0nKSwgJ2Rpc2FibGVkJywgJ2MtYnRuX2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0Q29udHJvbFN0YXRlKHNlbGYuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmlldz1cIm92ZXJhbGxcIl0nKSwgJ2RlZmF1bHQnLCAnYy1idG5fZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLnNldFRvdGFsKCk7XG4gICAgICBsb2FkZXIuc2V0U3RhdGUoJ2hpZGRlbicpO1xuXG4gICAgICBsZXQgYWN0aXZlVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbV9hY3RpdmUnKTtcblxuICAgICAgaWYgKGFjdGl2ZVRhYmxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXNwb25zZSk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgLy8gdGltZV9zdGFydDogJzAwOjAwJyxcbiAgICAgICAgICBwcmljZTogc2VsZi5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b3RhbF0nKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAvLyBndWVzdHM6IHNlbGYuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtZ3Vlc3RzXScpLnRleHRDb250ZW50XG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0RGF0YShhY3RpdmVUYWJsZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfSwgbG9hZFBhcmFtcyk7XG4gICAgLy8gbGV0IGJhc2tldHMgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJhc2tldF0nKTtcbiAgICAvLyBsZXQgY3VycmVudExvYWRlciA9IExvYWRlci5pbnN0YW5jZXMuZ2V0KHNlbGYuZWwpO1xuXG4gICAgLy8gaWYgKGN1cnJlbnRMb2FkZXIpIHtcbiAgICAvLyAgIGxvYWRlciA9IGN1cnJlbnRMb2FkZXI7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGxvYWRlciA9IG5ldyBMb2FkZXIoc2VsZi5lbCk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc29sZS5sb2coYmFza2V0cyk7XG5cblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYmFza2V0cy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbGV0IGluc3RhbmNlID0gQmFza2V0TGlzdC5pbnN0YW5jZXMuZ2V0KGJhc2tldHNbaV0pO1xuXG4gICAgLy8gICBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cblxuICAgIC8vICAgaW5zdGFuY2Uuc2V0QmFza2V0Q29kZShzZWxmLnN0YXRlLmJhc2tldCk7XG4gICAgLy8gICBpbnN0YW5jZS5nZXREYXRhKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgaWYgKGkgPT09IGJhc2tldHMubGVuZ3RoIC0gMSkge1xuICAgIC8vICAgICAgIGxvYWRlci5zZXRTdGF0ZSgnaGlkZGVuJyk7XG4gICAgLy8gICAgICAgc2VsZi5zZXRUb3RhbCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gIH1cblxuICBzZXRQb3NzaWJsZUJhc2tldHMgPSAoYmFza2V0czogW10pID0+IHtcbiAgICBjb25zb2xlLmxvZyhiYXNrZXRzKTtcblxuICAgIHRoaXMuc3RhdGUucG9zc2libGVCYXNrZXRzID0gYmFza2V0cztcbiAgfVxuXG4gIGdldEJhc2tldENvZGUgPSAoKTogc3RyaW5nID0+IHtcbiAgICBsZXQgY29kZTtcbiAgICBsZXQgYWN0aXZlT3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbV9hY3RpdmUnKTtcblxuICAgIGlmICghYWN0aXZlT3JkZXIpIHJldHVybjtcblxuICAgIGNvZGUgPSBhY3RpdmVPcmRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29kZS1maXJzdC10YWJsZS1iYXNrZXQnKSB8fCAnJztcblxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cbiAgc2V0QmFza2V0Q29kZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLnN0YXRlLmJhc2tldCA9IGNvZGU7XG5cbiAgICBzZWxmLmxvYWRCYXNrZXQoe2FjdGlvbjogJ2NoYW5nZV92aWV3JywgaGFuZGxlVmlldzogdHJ1ZX0pO1xuICB9XG5cbiAgc2V0VmlldyA9ICh2aWV3OiBzdHJpbmcpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLnN0YXRlLnZpZXcgPSB2aWV3O1xuICAgIHNlbGYuZWwuc2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnLCB2aWV3KTtcblxuICAgIGxldCB2aWV3Q29udHJvbHMgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZpZXddJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZXdDb250cm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZpZXdDb250cm9sc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpICE9PSBzZWxmLnN0YXRlLnZpZXcpIHtcbiAgICAgICAgdmlld0NvbnRyb2xzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2MtYnRuX2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld0NvbnRyb2xzW2ldLmNsYXNzTGlzdC5hZGQoJ2MtYnRuX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRpdGxlID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdGl0bGUgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRpdGxlXScpO1xuXG4gICAgaWYgKHRpdGxlICYmIHRpdGxlLmlubmVySFRNTCAhPT0gdGV4dCkge1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gIH1cbiAgLy8gZGVwcmVjYXRlZFxuICBnZXREYXRhID0gKHZpZXc6IHN0cmluZykgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbG9hZGVyID0gbmV3IExvYWRlcihzZWxmLmVsKTtcblxuICAgIGdsb2JhbC4kLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBzZWxmLmVsLmFjdGlvbixcbiAgICAgIGRhdGE6IHt2aWV3OiB2aWV3LCBpc19hamF4OiAnWSd9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgc2VsZi5zZXRWaWV3KHZpZXcpO1xuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1zZWN0aW9uJyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgIGxldCBvbGRCYXNrZXRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJhc2tldF0nKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkQmFza2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgQmFza2V0TGlzdC5pbnN0YW5jZXMuZ2V0KG9sZEJhc2tldHNbaV0pLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICBsZXQgYmFza2V0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iYXNrZXRdJyk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBCYXNrZXRMaXN0KGJhc2tldHNbaV0sIGdsb2JhbC5iYXNrZXRPcHRpb25zKTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgbGV0IGtleWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJyk7XG5cbiAgICAgICAgICAgICAgaWYgKGtleWJvYXJkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleWJvYXJkSW5zdGFuY2UgPSBLZXlib2FyZC5pbnN0YW5jZXMuZ2V0KGtleWJvYXJkKTtcblxuICAgICAgICAgICAgICAgIGtleWJvYXJkSW5zdGFuY2Uuc2V0UmVmZXJlbmNlKGJhc2tldHNbaV0ucXVlcnlTZWxlY3RvcignW2RhdGEta2V5Ym9hcmQtcmVmXScpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIEJhc2tldExpc3QuaW5zdGFuY2VzLmdldChiYXNrZXRzW2ldKS5pbml0R3JvdXBDb250cm9sKCk7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmluaXRHcm91cENvbnRyb2woKTtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc2V0QmFza2V0Q29kZShzZWxmLnN0YXRlLmJhc2tldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuc3RhdGUucG9zc2libGVCYXNrZXRzKTtcblxuXG4gICAgICAgICAgICAvLyBpbnN0YW5jZS5zZXRCYXNrZXRDb2RlKCdhMScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYubG9hZEJhc2tldCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3RhbCA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGJhc2tldHMgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJhc2tldF0nKTtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGxldCB0b3RhbEl0ZW1zID0gMDtcbiAgICBsZXQgc3RlcCA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKTtcblxuICAgIGlmIChzdGVwICYmIFsncGF5bWVudCcsICdjbG9zZWQnXS5pbmRleE9mKHN0ZXApID4gLTEpIHtcbiAgICAgIGxldCBpdGVtcyA9IHNlbGYuZWwucXVlcnlTZWxlY3RvckFsbCgnLnNob3BwaW5nLWxpc3RfX2l0ZW06bm90KFtkYXRhLWNhbGMtcmVzdWx0XSknKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGQgPSBpdGVtc1tpXS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9wPVwicHJpY2VcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0b3RhbCArPSBzZXRQcmljZUZvcm1hdChmaWVsZC52YWx1ZSwgJ2NsZWFuJykgYXMgbnVtYmVyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhc2tldEluc3RhbmNlID0gQmFza2V0TGlzdC5pbnN0YW5jZXMuZ2V0KGJhc2tldHNbaV0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJhc2tldHNbaV0sIGJhc2tldEluc3RhbmNlLCBiYXNrZXRJbnN0YW5jZS5nZXRUb3RhbCgpKTtcblxuICAgICAgICB0b3RhbCArPSBiYXNrZXRJbnN0YW5jZS5nZXRUb3RhbCgpO1xuICAgICAgICB0b3RhbEl0ZW1zICs9IGJhc2tldEluc3RhbmNlLmdldEl0ZW1zKCkubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuc3RhdGUudG90YWwgPSB0b3RhbDtcbiAgICBzZWxmLnRvdGFsLmlubmVySFRNTCA9IHNldFByaWNlRm9ybWF0KHRvdGFsLCAnZm9ybWF0dGVkJykudG9TdHJpbmcoKTtcblxuICAgIGlmICh0b3RhbCA+IDApIHtcbiAgICAgIHNlbGYuaW5mby5jbGFzc0xpc3QuYWRkKCd1LWNvbG9yLXRleHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5pbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ3UtY29sb3ItdGV4dCcpO1xuICAgIH1cblxuICAgIHNlbGYuY291bnQgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvdW50XScpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKHNlbGYuY291bnQgJiYgdG90YWxJdGVtcyA+IDApIHtcbiAgICAgIHNlbGYuY291bnQuY2xhc3NMaXN0LmFkZCgndS1jb2xvci10ZXh0Jyk7XG4gICAgICBzZWxmLmNvdW50LmNsYXNzTGlzdC5yZW1vdmUoJ3UtY29sb3ItYWN0aXZlLWdyYXknKTtcbiAgICAgIHNlbGYuY291bnQuaW5uZXJIVE1MID0gdG90YWxJdGVtcy50b1N0cmluZygpICsgJyAnICsgKHRvdGFsSXRlbXMgPT09IDEgPyAnSXRlbScgOiAnSXRlbXMnKTtcbiAgICB9IGVsc2UgaWYgKHNlbGYuY291bnQgJiYgdG90YWxJdGVtcyA9PT0gMCkge1xuICAgICAgc2VsZi5jb3VudC5jbGFzc0xpc3QucmVtb3ZlKCd1LWNvbG9yLXRleHQnKTtcbiAgICAgIHNlbGYuY291bnQuY2xhc3NMaXN0LmFkZCgndS1jb2xvci1hY3RpdmUtZ3JheScpO1xuICAgICAgc2VsZi5jb3VudC5pbm5lckhUTUwgPSB0b3RhbEl0ZW1zLnRvU3RyaW5nKCkgKyAnICcgKyAnSXRlbXMnO1xuICAgIH1cblxuICAgIC8vIHNlbGYuZ3Vlc3RzID0gc2VsZi5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdHNdJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBpZiAoc2VsZi5ndWVzdHMpIHtcbiAgICAvLyAgIHNlbGYuZ3Vlc3RzLmlubmVySFRNTCA9IGJhc2tldHMubGVuZ3RoICsgJyAnICsgZ2V0Tm91bkZvcm0oYmFza2V0cy5sZW5ndGgsICdndWVzdCcsICdndWVzdHMnKTtcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJGb3JtO1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gJ3V0aWxpdHkvbWVyZ2UnO1xuLy8gaW1wb3J0IHNldENvbnRyb2xTdGF0ZSBmcm9tICd1dGlsaXR5L3NldENvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgaGFzVmFsdWVJbkF0dHJpYnV0ZSBmcm9tICd1dGlsaXR5L2hhc1ZhbHVlSW5BdHRyaWJ1dGUnO1xuaW1wb3J0IGF0dHJpYnV0ZVRvQXJyYXkgZnJvbSAndXRpbGl0eS9hdHRyaWJ1dGVUb0FycmF5JztcbmltcG9ydCBhcnJheVRvQXR0cmlidXRlIGZyb20gJ3V0aWxpdHkvYXJyYXlUb0F0dHJpYnV0ZSc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnY29tcG9uZW50cy9jb250cm9scy9rZXlib2FyZC9rZXlib2FyZCc7XG4vLyBpbXBvcnQgUG9wdXAgZnJvbSAnY29tcG9uZW50cy9jb250cm9scy9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgR3JvdXBNZW51IGZyb20gJ2NvbXBvbmVudHMvbmF2L2dyb3VwLW1lbnUvZ3JvdXAtbWVudSc7XG4vLyBpbXBvcnQgaGFuZGxlVGFncyBmcm9tICd1dGlsaXR5L2hhbmRsZVRhZ3MnO1xuLy8gaW1wb3J0IHBvc2l0aW9uRWwgZnJvbSAndXRpbGl0eS9wb3NpdGlvbkVsJztcbmltcG9ydCBzZXRQcmljZUZvcm1hdCBmcm9tICd1dGlsaXR5L3NldFByaWNlRm9ybWF0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnY29tcG9uZW50cy9sb2FkZXJzL3JhZGlhbC1sb2FkZXIvcmFkaWFsLWxvYWRlcic7XG5cbmludGVyZmFjZSBPcHRpb25zIHtcbiAgb25JdGVtQWRkOiAoaW5zdGFuY2U6IEJhc2tldExpc3QsIG5ld0l0ZW06IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xuICBvbkl0ZW1BY3RpdmVBZGQ6IChpbnN0YW5jZTogQmFza2V0TGlzdCwgZWw6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xuICBvbkl0ZW1BY3RpdmVSZW1vdmU6IChpbnN0YW5jZTogQmFza2V0TGlzdCwgZWw6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xuICBvbkl0ZW1EZWxldGU6IChpbnN0YW5jZTogQmFza2V0TGlzdCwgaXRlbTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG4gIG9uSXRlbU1vdmU6IChpbnN0YW5jZTogQmFza2V0TGlzdCwgaXRlbTogSFRNTEVsZW1lbnQsIG9sZEdyb3VwOiBIVE1MRWxlbWVudCwgbmV3R3JvdXA6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xuICBvbkl0ZW1VcGRhdGU6IChpbnN0YW5jZTogQmFza2V0TGlzdCwgaXRlbTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBCYXNrZXRJdGVtIHtcbiAgdGFnczogc3RyaW5nO1xuICBwcm9kdWN0SWQ6IG51bWJlcjtcbiAgY29kZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG4gIHByaWNlOiBzdHJpbmc7XG4gIG9mZmVyOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBSZXF1ZXN0IHtcbiAgcHJvZHVjdElEPzogbnVtYmVyO1xuICBiYXNrZXRJdGVtSUQ/OiBudW1iZXI7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xuICBiYXNrZXRJRD86IHN0cmluZztcbiAgcHJvcHM/OiB7fTtcbiAgaXRlbT86IEhUTUxFbGVtZW50O1xufVxuXG5jbGFzcyBCYXNrZXRMaXN0IHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBvcHRpb25zOiBPcHRpb25zO1xuICBsaXN0OiBIVE1MRWxlbWVudDtcbiAgZ3JvdXBzTGlzdDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICB2aWV3OiBzdHJpbmc7XG4gIGRyYWdTcmM6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbGlzdDogJ1tkYXRhLWl0ZW1zLWxpc3RdJyxcbiAgICAgIGl0ZW06ICcuYmFza2V0LWxpc3RfX2l0ZW0nLFxuICAgICAgcm93OiAnW2RhdGEtaXRlbV0nXG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IHBhc3NlZCcpO1xuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZShkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubGlzdCk7XG4gICAgdGhpcy5ncm91cHNMaXN0ID0gbnVsbDtcbiAgICB0aGlzLmdyb3VwVG90YWwgPSBudWxsO1xuICAgIHRoaXMudmlldyA9ICdvdmVyYWxsJztcbiAgICB0aGlzLmRyYWdTcmMgPSBudWxsO1xuICAgIHRoaXMuYmFza2V0ID0gbnVsbDtcbiAgICB0aGlzLnBvc3NpYmxlQmFza2V0cyA9IHt9O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIEJhc2tldExpc3QuaW5zdGFuY2VzLnNldChzZWxmLmVsLCBzZWxmKTtcbiAgICBzZWxmLnZpZXcgPSBzZWxmLmdldFZpZXcoKTtcblxuICAgIGxldCBvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1pdGVtX2FjdGl2ZScpO1xuXG4gICAgaWYgKG9yZGVyKSB7XG4gICAgICBsZXQgYmFza2V0Q29kZXMgPSBvcmRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29kZS10YWJsZS1iYXNrZXQnKSB8fCAnJztcbiAgICAgIGxldCBiYXNrZXRDb2Rlc1BhcnNlZCA9IGF0dHJpYnV0ZVRvQXJyYXkoYmFza2V0Q29kZXMpO1xuICAgICAgbGV0IGJhc2tldENvZGVGaXJzdCA9IG9yZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2RlLWZpcnN0LXRhYmxlLWJhc2tldCcpO1xuICAgICAgbGV0IGJhc2tldENvZGVzQXJyYXkgPSBPYmplY3Qua2V5cyhiYXNrZXRDb2Rlc1BhcnNlZFswXSk7XG5cbiAgICAgIHNlbGYucG9zc2libGVCYXNrZXRzID0gYmFza2V0Q29kZXNBcnJheTtcblxuICAgICAgaWYgKHNlbGYudmlldyA9PT0gJ292ZXJhbGwnKSB7XG4gICAgICAgIC8vIHNlbGYuZWwuc2V0QXR0cmlidXRlKCdkYXRhLWJhc2tldCcsIGJhc2tldENvZGVzQXJyYXkuaW5kZXhPZihzZWxmLmJhc2tldCkpO1xuICAgICAgICBzZWxmLnNldEJhc2tldENvZGUoYmFza2V0Q29kZXNBcnJheVswXSk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYudmlldyA9PT0gJ2d1ZXN0cycpIHtcbiAgICAgICAgbGV0IGdyb3VwID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKSB8fCAxO1xuICAgICAgICBsZXQgbmV3Q29kZSA9IGJhc2tldENvZGVzQXJyYXlbZ3JvdXAgLSAxXTtcblxuICAgICAgICAvLyBzZWxmLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1iYXNrZXQnLCBiYXNrZXRDb2Rlc0FycmF5W2dyb3VwIC0gMV0pO1xuICAgICAgICBzZWxmLnNldEJhc2tldENvZGUobmV3Q29kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudmlldyA9PT0gJ292ZXJhbGwnKSB7XG5cbiAgICB9IGVsc2UgaWYgKHNlbGYudmlldyA9PT0gJ2d1ZXN0cycpIHtcbiAgICAgIHNlbGYuZ3JvdXBzTGlzdCA9IGdsb2JhbC4kKHNlbGYuZWwpLmNsb3Nlc3QoJ1tkYXRhLWdyb3Vwcy1saXN0XScpLmdldCgwKTtcbiAgICAgIHNlbGYuZ3JvdXBzVG90YWwgPSBnbG9iYWwuJChzZWxmLmVsKS5maW5kKCdbZGF0YS1iYXNrZXQtdG90YWxdJykuZ2V0KDApO1xuICAgICAgc2VsZi5pbml0R3JvdXBDb250cm9sKCk7XG4gICAgICAvLyBnbG9iYWwuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWFjdGlvbj1cImFkZF9saXN0XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICBzZWxmLmFkZEJhc2tldCgpO1xuICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2xvYmFsLiQoc2VsZi5lbCkub24oJ2NsaWNrJywgJ1tkYXRhLWFjdGlvbl0nLCBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcbiAgICAgIGxldCBpdGVtID0gZ2xvYmFsLiQodGhpcykuY2xvc2VzdCgnLml0ZW0tcm93JykuZ2V0KDApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgbGV0IHByb2R1Y3RJRCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtaWQnKTtcbiAgICAgIGxldCBiYXNrZXRJdGVtSUQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1iYXNrZXQtbGluZS1pZCcpO1xuICAgICAgbGV0IGJhc2tldElEID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFza2V0Jyk7XG4gICAgICBsZXQgb3JkZXJJRCA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyaWQnKTtcblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIC8vIHRhZ3M6IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhZ3MnKSxcbiAgICAgICAgY29kZTogaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pdGVtLWNvZGVdJykgPyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWl0ZW0tY29kZV0nKS5pbm5lckhUTUwgOiBmYWxzZSxcbiAgICAgICAgdGltZTogaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pdGVtLXRpbWVdJykgPyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWl0ZW0tdGltZV0gLmMtc3RhdHVzIHNwYW4nKS5pbm5lckhUTUwgOiBmYWxzZSxcbiAgICAgICAgdGFibGVJZDogZ2xvYmFsLiQoc2VsZi5lbCkuY2xvc2VzdCgnLm9yZGVyLWZvcm0nKS5maW5kKCdbZGF0YS10aXRsZV0nKS5nZXQoMCkuaW5uZXJIVE1MLnJlcGxhY2UoL1teMC05XS9nLCAnJylcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2NvcHknOlxuICAgICAgICAgIC8vIHNlbGYuaGFuZGxlQ29weShpdGVtKTtcbiAgICAgICAgICBzZWxmLnNlbmRSZXF1ZXN0KCdhZGQnLCB7cHJvZHVjdElEOiBwcm9kdWN0SUQsIHF1YW50aXR5OiAxLCBiYXNrZXRJRDogYmFza2V0SUQsIGl0ZW06IGl0ZW0sIG9yZGVySWQ6IG9yZGVySUQsIHByb3BzOiB7XG4gICAgICAgICAgICAvLyB0YWdzOiBhdHRyaWJ1dGVUb0FycmF5KGRhdGEudGFncyksXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXG4gICAgICAgICAgICB0YWJsZUlkOiBkYXRhLnRhYmxlSWRcbiAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgIC8vIHNlbGYuaGFuZGxlRGVsZXRlKGl0ZW0pO1xuICAgICAgICAgIHNlbGYuc2VuZFJlcXVlc3QoJ2RlbGV0ZScsIHtiYXNrZXRJdGVtSUQ6IGJhc2tldEl0ZW1JRCwgYmFza2V0SUQ6IGJhc2tldElELCBpdGVtOiBpdGVtLCBvcmRlcklkOiBvcmRlcklEfSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGdsb2JhbC4kKHNlbGYuZWwpLm9uKCdjbGljaycsICdbZGF0YS1pdGVtXSAuaXRlbS1yb3dfX2lubmVyJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAoaGFzVmFsdWVJbkF0dHJpYnV0ZShwYXJlbnQsICdhY3RpdmUnLCAnZGF0YS1hY3Rpb25zJykpIHtcbiAgICAgICAgc2VsZi5oYW5kbGVBY3RpdmUocGFyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxldCBkcmFnZ2FibGVzID0gc2VsZi5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICAgLy8gbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iYXNrZXRdJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIHNlbGYuYWRkSXRlbURyYWdFdmVudHMoZHJhZ2dhYmxlc1tpXSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBzZWxmLmFkZExpc3REcmFnRXZlbnRzKGNvbnRhaW5lcnNbaV0pXG4gICAgLy8gfVxuXG4gICAgbGV0IGNvbnRlbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1zZWN0aW9uX19ib2R5Jyk7XG5cbiAgICBpZiAoY29udGVudEJsb2NrKSB7XG4gICAgICBsZXQgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIoY29udGVudEJsb2NrKTtcbiAgICAgIGhhbW1lcnRpbWUub24oJ3N3aXBlbGVmdCcsIGZ1bmN0aW9uIChlOiBFdmVudCkge1xuICAgICAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtJykgIT09IG51bGwgPyBlLnRhcmdldCA6IGdsb2JhbC4kKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1pdGVtXScpLmdldCgwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xlZnQnLCBpdGVtKTtcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGhhc1ZhbHVlSW5BdHRyaWJ1dGUoaXRlbSwgJ3N3aXBlJywgJ2RhdGEtYWN0aW9ucycpKSB7XG4gICAgICAgICAgc2VsZi5oYW5kbGVTd2lwZShpdGVtLCAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaGFtbWVydGltZS5vbignc3dpcGVyaWdodCcsIGZ1bmN0aW9uIChlOiBFdmVudCkge1xuICAgICAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtJykgIT09IG51bGwgPyBlLnRhcmdldCA6IGdsb2JhbC4kKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1pdGVtXScpLmdldCgwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0JywgaXRlbSk7XG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChoYXNWYWx1ZUluQXR0cmlidXRlKGl0ZW0sICdzd2lwZScsICdkYXRhLWFjdGlvbnMnKSkge1xuICAgICAgICAgIHNlbGYuaGFuZGxlU3dpcGUoaXRlbSwgJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdsb2JhbC4kKHNlbGYuZWwpLm9uKCdjbGljaycsICdbZGF0YS1zdGF0ZS1hY3Rpb25dJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoIXNlbGYuZ3JvdXBzTGlzdCkgcmV0dXJuO1xuXG4gICAgICBsZXQgcmVmID0gdGhpcztcbiAgICAgIGxldCBhY3Rpb24gPSBnbG9iYWwuJCh0aGlzKS5hdHRyKCdkYXRhLXN0YXRlLWFjdGlvbicpO1xuICAgICAgbGV0IHBhcmVudEdyb3VwID0gZ2xvYmFsLiQocmVmKS5jbG9zZXN0KCdbZGF0YS1ncm91cF0nKTtcbiAgICAgIGxldCBsaXN0ID0gcGFyZW50R3JvdXAuZmluZCgnW2RhdGEtaXRlbXMtbGlzdF0nKTtcbiAgICAgIGxldCBpdGVtcyA9IGxpc3QuZmluZCgnLml0ZW0tcm93Jyk7XG4gICAgICBsZXQgY2hlY2tlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLiQodGhpcykuZmluZCgnW25hbWU9XCJDSEVDS0VEXCJdJykucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDAgfHwgY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgbmV3IEdyb3VwTWVudShzZWxmLmdyb3Vwc0xpc3QsIHJlZik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgIGxldCBncm91cE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtbWVudScpO1xuXG4gICAgICAgICAgaWYgKGdyb3VwTWVudSkge1xuICAgICAgICAgICAgR3JvdXBNZW51Lmluc3RhbmNlcy5nZXQoZ3JvdXBNZW51KS5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrZWRJdGVtcy5maW5kKCdbbmFtZT1cIkNIRUNLRURcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDAgfHwgY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgY2hlY2tlZEl0ZW1zLmVhY2goZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBzZWxmLmhhbmRsZURlbGV0ZSh0aGlzKTtcbiAgICAgICAgICAgIGxldCBiYXNrZXRJdGVtSUQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1iYXNrZXQtbGluZS1pZCcpO1xuICAgICAgICAgICAgLy8gbGV0IGJhc2tldElEID0gJ2ExJztcbiAgICAgICAgICAgIGxldCBiYXNrZXRJRCA9IHNlbGYuYmFza2V0O1xuICAgICAgICAgICAgbGV0IG9yZGVySUQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcmlkJyk7XG5cbiAgICAgICAgICAgIHNlbGYuc2VuZFJlcXVlc3QoJ2RlbGV0ZScsIHtiYXNrZXRJdGVtSUQ6IGJhc2tldEl0ZW1JRCwgYmFza2V0SUQ6IGJhc2tldElELCBpdGVtOiB0aGlzLCBvcmRlcklkOiBvcmRlcklEfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzYXZlJzpcbiAgICAgICAgICBjaGVja2VkSXRlbXMuZmluZCgnW25hbWU9XCJDSEVDS0VEXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VsZi51cGRhdGVMaXN0U3RhdGUoKTtcbiAgfVxuXG4gIGdldERhdGEgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbG9hZEJhc2tldChzZWxmLmJhc2tldCwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRyYWdnYWJsZXMgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUnKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGYuYWRkSXRlbURyYWdFdmVudHMoZHJhZ2dhYmxlc1tpXSk7XG4gICAgICB9XG4gICAgICBzZWxmLmFkZExpc3REcmFnRXZlbnRzKHNlbGYuZWwpO1xuICAgICAgc2VsZi51cGRhdGVMaXN0U3RhdGUoKTtcblxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QmFza2V0Q29kZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLmJhc2tldCA9IGNvZGU7XG4gICAgc2VsZi5lbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYmFza2V0JywgY29kZSk7XG4gIH1cblxuICBzZW5kUmVxdWVzdCA9IChhY3Rpb246IHN0cmluZywgcGFyYW1zOiBSZXF1ZXN0KSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBsb2FkZXI6IExvYWRlcjtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIGxvYWRlciA9IG5ldyBMb2FkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgICAgYWRkRWxlbWVudEJhc2tldChwYXJhbXMucHJvZHVjdElELCBwYXJhbXMucXVhbnRpdHksIHBhcmFtcy5iYXNrZXRJRCwgcGFyYW1zLm9yZGVySWQsIHBhcmFtcy5wcm9wcyB8fCBmYWxzZSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FkZGVkIHN1Y2Nlc3NmdWxseSB0byBiYXNrZXQgJyArIHBhcmFtcy5iYXNrZXRJRCk7XG4gICAgICAgICAgaWYgKHNlbGYudmlldyA9PT0gJ2d1ZXN0cycpIHtcbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlzdFN0YXRlKHNlbGYuZWwpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVMaXN0U3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zZXRPcmRlcihyZXNwb25zZS5nZXRQb3N0Lm9yZGVySWQpO1xuICAgICAgICAgIGxvYWRlci5zZXRTdGF0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgaWYgKHBhcmFtcy5pdGVtKSB7XG4gICAgICAgICAgICBzZWxmLmhhbmRsZUFjdGl2ZShwYXJhbXMuaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEtleWJvYXJkLmluc3RhbmNlcy5nZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJykgYXMgSFRNTEVsZW1lbnQpLnNldFBhbmVsU3RhdGUoJ3Zpc2libGUnKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vbkl0ZW1BZGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkl0ZW1BZGQoc2VsZiwgcGFyYW1zLml0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhcnRpYWw6ICdZJyxcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZnVuY3Rpb24gKGRhdGE6IHt9KSB7XG4gICAgICAgICAgICBkYXRhLnBhcnRpYWwgPSAnWSc7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIGxvYWRlciA9IG5ldyBMb2FkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgICAgZGVsRWxlbWVudEJhc2tldChwYXJhbXMuYmFza2V0SXRlbUlELCBwYXJhbXMuYmFza2V0SUQsIHBhcmFtcy5vcmRlcklkLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCBzdWNjZXNzZnVsbHkgZnJvbSBiYXNrZXQgJyArIHBhcmFtcy5iYXNrZXRJRCk7XG4gICAgICAgICAgaWYgKHNlbGYudmlldyA9PT0gJ2d1ZXN0cycpIHtcbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlzdFN0YXRlKHNlbGYuZWwpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVMaXN0U3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9hZGVyLnNldFN0YXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vbkl0ZW1EZWxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkl0ZW1EZWxldGUoc2VsZiwgcGFyYW1zLml0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhcnRpYWw6ICdZJyxcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZnVuY3Rpb24gKGRhdGE6IHt9KSB7XG4gICAgICAgICAgICBkYXRhLnBhcnRpYWwgPSAnWSc7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RlbGV0ZU9yZGVyJzpcbiAgICAgICAgbG9hZGVyID0gbmV3IExvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpIGFzIEhUTUxFbGVtZW50KTtcblxuICAgICAgICBkZWxPcmRlcihwYXJhbXMub3JkZXJJZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPcmRlciAnICsgcGFyYW1zLm9yZGVySWQgKyAnIHN1Y2Nlc3NmdWxseSBkZWxldGVkJyk7XG4gICAgICAgICAgaWYgKHNlbGYudmlldyA9PT0gJ2d1ZXN0cycpIHtcbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlzdFN0YXRlKHNlbGYuZWwpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVMaXN0U3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9hZGVyLnNldFN0YXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgIGxvYWRlciA9IG5ldyBMb2FkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgICAgdXBkYXRlRWxlbWVudEJhc2tldChwYXJhbXMuYmFza2V0SXRlbUlELCBwYXJhbXMucHJvZHVjdElELCBwYXJhbXMuYmFza2V0SUQsIHBhcmFtcy5vcmRlcklkLCBwYXJhbXMucHJvcHMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFbGVtZW50ICR7cGFyYW1zLmJhc2tldEl0ZW1JRH0gZnJvbSBiYXNrZXQgJHtwYXJhbXMuYmFza2V0SUR9IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YCk7XG5cbiAgICAgICAgICBsb2FkZXIuc2V0U3RhdGUoJ2hpZGRlbicpO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uSXRlbVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uSXRlbVVwZGF0ZShzZWxmLCBwYXJhbXMuaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFydGlhbDogJ1knLFxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmdW5jdGlvbiAoZGF0YToge30pIHtcbiAgICAgICAgICAgIGRhdGEucGFydGlhbCA9ICdZJztcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldE9yZGVyID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXJpZCcpKSByZXR1cm47XG5cbiAgICBzZWxmLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcmlkJywgaWQpO1xuICB9XG5cbiAgaW5pdEdyb3VwQ29udHJvbCA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3Rpb249XCJhZGRfbGlzdFwiXScpO1xuXG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWluaXRlZCcpKSB7XG4gICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygxMjMpO1xuXG4gICAgICAgIHNlbGYuYWRkQmFza2V0KCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgndS1pbml0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ID0gKCkgPT4ge1xuICAgIEJhc2tldExpc3QuaW5zdGFuY2VzLmRlbGV0ZSh0aGlzLmVsKTtcbiAgfVxuXG4gIGhhbmRsZURyYWdTdGFydCA9IChlOiBEcmFnRXZlbnQpID0+IHtcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCBncm91cCA9IGdsb2JhbC4kKGl0ZW0pLmNsb3Nlc3QoJ1tkYXRhLWJhc2tldF0nKS5nZXQoMCk7XG5cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgdGhpcy5kcmFnU3JjID0gZ3JvdXA7XG4gIH07XG5cbiAgaGFuZGxlRHJhZ0VuZCA9IChlOiBEcmFnRXZlbnQpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgZ3JvdXAgPSBnbG9iYWwuJChpdGVtKS5jbG9zZXN0KCdbZGF0YS1iYXNrZXRdJykuZ2V0KDApO1xuXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIGlmICh0aGlzLmRyYWdTcmMpIHtcbiAgICAgIC8vIHNlbGYudXBkYXRlTGlzdFN0YXRlKHRoaXMuZHJhZ1NyYyk7XG4gICAgICBCYXNrZXRMaXN0Lmluc3RhbmNlcy5nZXQodGhpcy5kcmFnU3JjKS51cGRhdGVMaXN0U3RhdGUoKTtcbiAgICB9XG4gICAgLy8gc2VsZi51cGRhdGVMaXN0U3RhdGUoZ3JvdXApO1xuICAgIEJhc2tldExpc3QuaW5zdGFuY2VzLmdldChncm91cCkudXBkYXRlTGlzdFN0YXRlKCk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkl0ZW1Nb3ZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25JdGVtTW92ZSh0aGlzLCBpdGVtLCB0aGlzLmRyYWdTcmMsIGdyb3VwKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdTcmMgPSBudWxsO1xuICB9XG5cbiAgYWRkTGlzdERyYWdFdmVudHMgKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWRyYWctaW5pdGVkJykpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2VsZi5oYW5kbGVEcmFnT3Zlcih0aGlzLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgndS1kcmFnLWluaXRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEl0ZW1EcmFnRXZlbnRzID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWRyYWctaW5pdGVkJykpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHNlbGYuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBzZWxmLmhhbmRsZURyYWdFbmQpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgndS1kcmFnLWluaXRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURyYWdPdmVyID0gKGVsOiBIVE1MRWxlbWVudCwgZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGxpc3QgPSBnbG9iYWwuJChlbCkuZmluZCgnW2RhdGEtaXRlbXMtbGlzdF0nKS5nZXQoMCk7XG4gICAgbGV0IGFmdGVyRWxlbWVudCA9IHRoaXMuZ2V0RHJhZ0FmdGVyRWxlbWVudChsaXN0LCBlLmNsaWVudFkpO1xuICAgIGxldCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcblxuICAgIGlmIChhZnRlckVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0Lmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RHJhZ0FmdGVyRWxlbWVudCA9IChjb250YWluZXI6IEhUTUxFbGVtZW50LCB5OiBudW1iZXIpID0+IHtcbiAgICBsZXQgZGl2cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpJylcbiAgICBsZXQgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkaXZzKTtcblxuICAgIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMlxuICAgICAgaWYgKG9mZnNldCA8IDAgJiYgb2Zmc2V0ID4gY2xvc2VzdC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0OiBvZmZzZXQsIGVsZW1lbnQ6IGNoaWxkIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0XG4gICAgICB9XG4gICAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50XG4gIH1cblxuICBhZGRCYXNrZXQgPSAoKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYudmlldyAhPT0gJ2d1ZXN0cycgfHwgIXNlbGYuZ3JvdXBzTGlzdCkgcmV0dXJuO1xuXG4gICAgbGV0IGJhc2tldHMgPSBnbG9iYWwuJChzZWxmLmdyb3Vwc0xpc3QpLmZpbmQoJ1tkYXRhLWdyb3VwXScpO1xuICAgIGxldCBsYXN0SW5kZXggPSBiYXNrZXRzLmxhc3QoKS5hdHRyKCdkYXRhLWdyb3VwJykgPyBwYXJzZUludChiYXNrZXRzLmxhc3QoKS5hdHRyKCdkYXRhLWdyb3VwJykpIDogMTtcbiAgICBsZXQgbmV3SW5kZXggPSBsYXN0SW5kZXggKyAxO1xuICAgIC8vIGNvbnNvbGUubG9nKEJhc2tldExpc3QuaW5zdGFuY2VzKTtcblxuICAgIGxldCBsYXN0QmFza2V0T3B0aW9ucyA9IEJhc2tldExpc3QuaW5zdGFuY2VzLmdldChiYXNrZXRzLmxhc3QoKS5nZXQoMCkpLm9wdGlvbnM7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBpbmRleDogbmV3SW5kZXhcbiAgICB9O1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJ0bXBsLWJhc2tldC1ncm91cFwiXScpLmlubmVySFRNTDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGJhc2tldHMubGFzdCgpKTtcblxuICAgIGJhc2tldHMubGFzdCgpLmFmdGVyKGdsb2JhbC5NdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIGRhdGEsIHt9LCBbJzwlJywgJyU+J10pKTtcblxuICAgIGxldCBuZXdMYXN0TGlzdCA9IGdsb2JhbC4kKHNlbGYuZ3JvdXBzTGlzdCkuZmluZCgnW2RhdGEtZ3JvdXBdJykubGFzdCgpLmdldCgwKTtcbiAgICAvLyBjb25zb2xlLmxvZyhCYXNrZXRMaXN0Lmluc3RhbmNlcy5nZXQoKSk7XG4gICAgbGV0IG5ld0Jhc2tldCA9IG5ldyBCYXNrZXRMaXN0KG5ld0xhc3RMaXN0LCBsYXN0QmFza2V0T3B0aW9ucyk7XG4gICAgbGV0IGNvbnRyb2xzID0gc2VsZi5ncm91cHNMaXN0LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1zZWN0aW9uX19jb250cm9scycpO1xuXG4gICAgbmV3QmFza2V0LmFkZExpc3REcmFnRXZlbnRzKG5ld0xhc3RMaXN0KTtcblxuICAgIGxldCBrZXlib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZCcpO1xuICAgIGxldCBuZXdSZWYgPSBuZXdMYXN0TGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rZXlib2FyZC1yZWZdJyk7XG5cbiAgICBpZiAoa2V5Ym9hcmQgJiYgbmV3UmVmKSB7XG4gICAgICBLZXlib2FyZC5pbnN0YW5jZXMuZ2V0KGtleWJvYXJkKS5zZXRSZWZlcmVuY2UobmV3UmVmKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdCYXNrZXQpO1xuICAgIGlmIChuZXdCYXNrZXQucG9zc2libGVCYXNrZXRzLmluZGV4T2YobmV3QmFza2V0LmJhc2tldCkgPT09IG5ld0Jhc2tldC5wb3NzaWJsZUJhc2tldHMubGVuZ3RoLTEgJiYgY29udHJvbHMpIHtcbiAgICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ3UtaGlkZGVuJyk7XG4gICAgfSBlbHNlIGlmIChuZXdCYXNrZXQucG9zc2libGVCYXNrZXRzLmluZGV4T2YobmV3QmFza2V0LmJhc2tldCkgPCBuZXdCYXNrZXQucG9zc2libGVCYXNrZXRzLmxlbmd0aC0xICYmIGNvbnRyb2xzKSB7XG4gICAgICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCd1LWhpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZpZXcgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXcgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3Jyk7XG5cbiAgICByZXR1cm4gdmlldyAhPT0gbnVsbCA/IHZpZXcgOiAnb3ZlcmFsbCc7XG4gIH1cblxuICAvLyBhZGRJdGVtID0gKHRlbXBsYXRlOiBzdHJpbmcsIGRhdGE6IEJhc2tldEl0ZW0sIG11c3RhY2hlVGFnczogc3RyaW5nW10gPSBbJ3t7JywgJ319J10pID0+IHtcbiAgLy8gICBsZXQgc2VsZiA9IHRoaXM7XG4gIC8vICAgbGV0IG5ld0l0ZW0gPSBnbG9iYWwuTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBkYXRhLCB7fSwgbXVzdGFjaGVUYWdzKTtcblxuICAvLyAgIG5ld0l0ZW0gPSBnbG9iYWwuJChuZXdJdGVtKS5hcHBlbmRUbyhzZWxmLmxpc3QpLmdldCgwKTtcbiAgLy8gICBzZWxmLmhhbmRsZUFjdGl2ZShnbG9iYWwuJChuZXdJdGVtKS5maW5kKCcuaXRlbS1yb3cnKS5nZXQoMCkpO1xuXG4gIC8vICAgS2V5Ym9hcmQuaW5zdGFuY2VzLmdldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQnKSBhcyBIVE1MRWxlbWVudCkuc2V0UGFuZWxTdGF0ZSgndmlzaWJsZScpO1xuXG4gIC8vICAgaWYgKHNlbGYudmlldyA9PT0gJ2d1ZXN0cycgJiYgc2VsZi5ncm91cHNMaXN0KSB7XG4gIC8vICAgICAvLyBzZWxmLnVwZGF0ZUxpc3RTdGF0ZShzZWxmLmVsKTtcbiAgLy8gICAgIHNlbGYudXBkYXRlTGlzdFN0YXRlKCk7XG4gIC8vICAgfVxuXG4gIC8vICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMub25JdGVtQWRkID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vICAgICBzZWxmLm9wdGlvbnMub25JdGVtQWRkKHNlbGYsIG5ld0l0ZW0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHJlbmRlckl0ZW1UYWdzID0gKGVsOiBIVE1MRWxlbWVudCwgdGFnc0FycmF5OiBbXSkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBnbG9iYWwuJChlbCkuYXR0cignZGF0YS10YWdzJywgYXJyYXlUb0F0dHJpYnV0ZSh0YWdzQXJyYXkpKTtcblxuICAgIGxldCBmb290ZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1yb3dfX2Zvb3RlcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKGZvb3RlciAmJiB0YWdzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndS1oaWRkZW4nKTtcbiAgICB9IGVsc2UgaWYgKGZvb3RlciAmJiB0YWdzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtaGlkZGVuJyk7XG4gICAgICBmb290ZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIGdsb2JhbC4kKHRhZ3NBcnJheSkuZWFjaChmdW5jdGlvbiAodGhpczoge3RpdGxlOiBzdHJpbmcsIGFjdGl2ZTogYm9vbGVhbn0sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgZm9vdGVyLmlubmVySFRNTCArPSAoZm9vdGVyLmlubmVySFRNTC5sZW5ndGggPiAwID8gJywgJyA6ICcnKSArIHRoaXMudGl0bGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uSXRlbVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2VsZi5vcHRpb25zLm9uSXRlbVVwZGF0ZShzZWxmLCBlbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWN0aXZlID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgYWN0aXZlQ2xhc3MgPSAnaXRlbS1yb3dfYWN0aXZlJztcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHthY3RpdmVDbGFzc31gKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzZWxmLmxpc3QuY29udGFpbnMoaXRlbXNbaV0pICYmIGl0ZW1zW2ldICE9PSBlbCkge1xuICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNlbGYubGlzdC5jb250YWlucyhpdGVtc1tpXSkpIHtcbiAgICAgICAgLy8g0YPQsdC40YDQsNC10Lwg0LDQutGC0LjQstC90YvQuSDQv9GD0L3QutGCINGDINC00YDRg9Cz0LjRhSDQutC+0YDQt9C40L1cbiAgICAgICAgbGV0IHRoYXQgPSBnbG9iYWwuJChpdGVtc1tpXSkuY2xvc2VzdCgnW2RhdGEtYmFza2V0XScpLmdldCgwKTtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gQmFza2V0TGlzdC5pbnN0YW5jZXMuZ2V0KHRoYXQpO1xuXG4gICAgICAgIGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUFjdGl2ZShpdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXG4gICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vbkl0ZW1BY3RpdmVSZW1vdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLm9uSXRlbUFjdGl2ZVJlbW92ZShzZWxmLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xuXG4gICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vbkl0ZW1BY3RpdmVBZGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLm9uSXRlbUFjdGl2ZUFkZChzZWxmLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3dpcGUgPSAoZWw6IEhUTUxFbGVtZW50LCBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIGdsb2JhbC4kKGVsKS5hZGRDbGFzcygnaXRlbS1yb3dfY29udHJvbHMtcmlnaHQnKTtcblxuICAgICAgbGV0IGFzaWRlUmlnaHQgPSBnbG9iYWwuJChlbCkuZmluZCgnLml0ZW0tcm93X19hc2lkZS1yaWdodCcpO1xuICAgICAgbGV0IHdpZHRoID0gYXNpZGVSaWdodC5jaGlsZHJlbigpLmdldCgwKS5vZmZzZXRXaWR0aDtcblxuICAgICAgYXNpZGVSaWdodC5jc3Moe1xuICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ3N0YXRpYycsXG4gICAgICAgICdoZWlnaHQnOiAnYXV0bycsXG4gICAgICAgICdtYXgtd2lkdGgnOiAnMCdcbiAgICAgIH0pO1xuXG4gICAgICBhc2lkZVJpZ2h0LnN0b3AoKS5hbmltYXRlKHsnbWF4LXdpZHRoJzogYCR7d2lkdGh9cHhgfSwge1xuICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZ2xvYmFsLiQoZWwpLnJlbW92ZUNsYXNzKCdpdGVtLXJvd19jb250cm9scy1yaWdodCcpO1xuXG4gICAgICBsZXQgYXNpZGVSaWdodCA9IGdsb2JhbC4kKGVsKS5maW5kKCcuaXRlbS1yb3dfX2FzaWRlLXJpZ2h0Jyk7XG5cbiAgICAgIGFzaWRlUmlnaHQuc3RvcCgpLmFuaW1hdGUoeydtYXgtd2lkdGgnOiAnMCd9LCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXNpZGVSaWdodC5jc3Moe1xuICAgICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxcHgnLFxuICAgICAgICAgICAgJ21heC13aWR0aCc6ICdub25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBoYW5kbGVDb3B5ID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAvLyAgIGxldCBzZWxmID0gdGhpcztcbiAgLy8gICBsZXQgY29waWVkSXRlbSA9IGdsb2JhbC4kKGVsLnBhcmVudEVsZW1lbnQpLmNsb25lKCk7XG5cbiAgLy8gICBjb3BpZWRJdGVtLmZpbmQoJy5pdGVtLXJvd19hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXRlbS1yb3dfYWN0aXZlJyk7XG4gIC8vICAgZ2xvYmFsLiQoY29waWVkSXRlbSkuaW5zZXJ0QWZ0ZXIoZWwucGFyZW50RWxlbWVudCk7XG5cbiAgLy8gICBpZiAoc2VsZi52aWV3ID09PSAnZ3Vlc3RzJyAmJiBzZWxmLmdyb3Vwc0xpc3QpIHtcbiAgLy8gICAgIC8vIHNlbGYudXBkYXRlTGlzdFN0YXRlKHNlbGYuZWwpO1xuICAvLyAgICAgc2VsZi51cGRhdGVMaXN0U3RhdGUoKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBoYW5kbGVEZWxldGUgPSAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIC8vICAgbGV0IHNlbGYgPSB0aGlzO1xuICAvLyAgIGxldCBsaXN0SXRlbSA9IGVsLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgLy8gICBsaXN0SXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcblxuICAvLyAgIGlmIChzZWxmLnZpZXcgPT09ICdndWVzdHMnICYmIHNlbGYuZ3JvdXBzTGlzdCkge1xuICAvLyAgICAgLy8gc2VsZi51cGRhdGVMaXN0U3RhdGUoc2VsZi5lbCk7XG4gIC8vICAgICBzZWxmLnVwZGF0ZUxpc3RTdGF0ZSgpO1xuICAvLyAgIH1cblxuICAvLyAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uSXRlbURlbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyAgICAgc2VsZi5vcHRpb25zLm9uSXRlbURlbGV0ZShzZWxmLCBlbCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZ2V0SXRlbXMgPSAoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPT4ge1xuICAgIHJldHVybiB0aGlzLmxpc3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMucm93KTtcbiAgfVxuXG4gIGdldFRvdGFsID0gKCk6IG51bWJlciA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBpdGVtcyA9IHNlbGYuZ2V0SXRlbXMoKTtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGxldCBpbnB1dHNBcnJheSA9IFsnaW5wdXQnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcmljZSA9IGl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWl0ZW0tcHJpY2VdJyk7XG5cbiAgICAgIGlmIChwcmljZSkge1xuICAgICAgICB0b3RhbCArPSBzZXRQcmljZUZvcm1hdChpbnB1dHNBcnJheS5pbmRleE9mKHByaWNlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEgPyBwcmljZS52YWx1ZSA6IHByaWNlLmlubmVySFRNTCwgJ2NsZWFuJykgYXMgbnVtYmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIC8vIHVwZGF0ZUxpc3RTdGF0ZSA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgdXBkYXRlTGlzdFN0YXRlID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgYmFza2V0VG90YWwgPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJhc2tldC10b3RhbF0nKTtcbiAgICBsZXQgbGlzdFNpemUgPSBzZWxmLmdldEl0ZW1zKCkubGVuZ3RoO1xuXG4gICAgaWYgKCFiYXNrZXRUb3RhbCkgcmV0dXJuO1xuXG4gICAgYmFza2V0VG90YWwuaW5uZXJIVE1MID0gYCR7bGlzdFNpemV9ICR7bGlzdFNpemUgPT09IDEgPyAnSXRlbScgOiAnSXRlbXMnfWA7XG4gICAgaWYgKGxpc3RTaXplID09PSAwKSB7XG4gICAgICBiYXNrZXRUb3RhbC5jbGFzc0xpc3QuYWRkKCd1LWNvbG9yLWFjdGl2ZS1ncmF5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2tldFRvdGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtY29sb3ItYWN0aXZlLWdyYXknKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFza2V0TGlzdDtcbiIsImltcG9ydCBtZXJnZSBmcm9tICd1dGlsaXR5L21lcmdlJztcbmltcG9ydCB1cGRhdGVRdWVyeVN0cmluZyBmcm9tICd1dGlsaXR5L3VwZGF0ZVF1ZXJ5U3RyaW5nJztcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBpdGVtOiBzdHJpbmc7XG4gIGFjdGl2ZUNsYXNzOiBzdHJpbmc7XG4gIGluYWN0aXZlQ2xhc3M6IHN0cmluZztcbiAgYWx3YXlzQWN0aXZlOiBib29sZWFuOyAvLyDRg9GB0YLQsNC90LDQstC70LjQstCw0YLRjCDQsNC60YLQuNCy0L3Ri9C5INC/0YPQvdC60YIg0L/RgNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gIHNldFVSTDogdHJ1ZTsgLy8g0LjQt9C80LXQvdGP0YLRjCDQo9Cg0JtcbiAgdXJsQXR0cmlidXRlOiBzdHJpbmc7XG4gIHVybFBhcmFtOiBzdHJpbmc7IC8vINC/0LDRgNCw0LzQtdGC0YAg0LTQu9GPINC/0L7QtNGB0YLQsNC90L7QstC60Lgg0LIg0KPQoNCbXG4gIG9uSW5pdDogKGluc3RhbmNlOiBPcmRlcnNMaXN0KSA9PiB2b2lkLFxuICBvbkJlZm9yZUNsaWNrOiAoaW5zdGFuY2U6IE9yZGVyc0xpc3QsIGU6IEV2ZW50KSA9PiB2b2lkIHwgYm9vbGVhbjtcbiAgb25TZXRJdGVtOiAoaW5zdGFuY2U6IE9yZGVyc0xpc3QsIHByZXZJdGVtOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHZvaWQ7XG59O1xuXG5jbGFzcyBPcmRlcnNMaXN0IHtcbiAgb3B0aW9uczogT3B0aW9ucztcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBzdGF0ZToge1xuICAgIGFjdGl2ZUl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgb3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBpdGVtOiAnLm9yZGVyLWl0ZW0nLFxuICAgICAgYWN0aXZlQ2xhc3M6ICdvcmRlci1pdGVtX2FjdGl2ZScsXG4gICAgICBpbmFjdGl2ZUNsYXNzOiAnb3JkZXItaXRlbV9kaW1tZWQnLFxuICAgICAgYWx3YXlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIHNldFVSTDogZmFsc2UsXG4gICAgICB1cmxBdHRyaWJ1dGU6ICdkYXRhLWlkJyxcbiAgICAgIHVybFBhcmFtOiAnZGF0YS1pZCcsXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uIChpbnN0YW5jZTogT3JkZXJzTGlzdCkge30sXG4gICAgICBvbkJlZm9yZUNsaWNrOiBmdW5jdGlvbiAoaW5zdGFuY2U6IE9yZGVyc0xpc3QsIGU6IEV2ZW50KSB7fSxcbiAgICAgIG9uU2V0SXRlbTogZnVuY3Rpb24gKGluc3RhbmNlOiBPcmRlcnNMaXN0LCBwcmV2SXRlbTogSFRNTEVsZW1lbnQgfCBudWxsKSB7fVxuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBwYXNzZWQnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2UoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSXRlbTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBXZWFrTWFwO1xuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgT3JkZXJzTGlzdC5pbnN0YW5jZXMuc2V0KHNlbGYuZWwsIHNlbGYpO1xuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5hbHdheXNBY3RpdmUpIHtcbiAgICAgIGxldCBhY3RpdmVJdGVtID0gc2VsZi5nZXRBY3RpdmVJdGVtKCk7XG5cbiAgICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbShhY3RpdmVJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUl0ZW0gPSBzZWxmLmVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLml0ZW0pO1xuXG4gICAgICAgIGlmICghYWN0aXZlSXRlbSkgcmV0dXJuO1xuXG4gICAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbShhY3RpdmVJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuICAgIHNlbGYuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLmhhbmRsZUNsaWNrKTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLm9uSW5pdChzZWxmKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgY29udHJvbDtcblxuICAgIGlmIChjb250cm9sID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcub3JkZXItaXRlbScpIGFzIEhUTUxFbGVtZW50KSB7XG4gICAgICBzZWxmLnNldEFjdGl2ZUl0ZW0oY29udHJvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGlja091dHNpZGUgPSAoZTogRXZlbnQpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGNvbnRyb2wgPSBlLnRhcmdldC5jbG9zZXN0KHNlbGYub3B0aW9ucy5pdGVtKTtcblxuICAgIGlmICghc2VsZi5vcHRpb25zLmFsd2F5c0FjdGl2ZSAmJiAoIWNvbnRyb2wgfHwgIXNlbGYuZWwuY29udGFpbnMoY29udHJvbCkpKSB7XG4gICAgICBzZWxmLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlSXRlbSA9ICgpOiBIVE1MRWxlbWVudCB8IG51bGwgPT4ge1xuICAgIHJldHVybiB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVDbGFzc31gKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUl0ZW0gPSAoaXRlbTogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBpdGVtcyA9IHNlbGYuZWwucXVlcnlTZWxlY3RvckFsbChzZWxmLm9wdGlvbnMuaXRlbSk7XG4gICAgbGV0IHByZXZJdGVtO1xuXG4gICAgaWYgKHNlbGYuc3RhdGUuYWN0aXZlSXRlbSA9PT0gaXRlbSkgcmV0dXJuO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGl0ZW1zW2ldICE9PSBpdGVtKSB7XG4gICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcblxuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5vcHRpb25zLmluYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoc2VsZi5vcHRpb25zLmluYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxmLm9wdGlvbnMuaW5hY3RpdmVDbGFzcyk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoc2VsZi5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLnNldFVSTCAmJiBpdGVtICE9PSBudWxsKSB7XG4gICAgICBsZXQgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShzZWxmLm9wdGlvbnMudXJsQXR0cmlidXRlKSBhcyBzdHJpbmc7XG4gICAgICBsZXQgbmV3VVJMID0gdXBkYXRlUXVlcnlTdHJpbmcoc2VsZi5vcHRpb25zLnVybFBhcmFtLCB2YWx1ZSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXdVUkwgfSwgJycsIG5ld1VSTCk7XG4gICAgfVxuXG4gICAgcHJldkl0ZW0gPSBzZWxmLnN0YXRlLmFjdGl2ZUl0ZW07XG4gICAgc2VsZi5zdGF0ZS5hY3RpdmVJdGVtID0gaXRlbTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLm9uU2V0SXRlbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLm9uU2V0SXRlbShzZWxmLCBwcmV2SXRlbSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyc0xpc3Q7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSAndXRpbGl0eS9tZXJnZSc7XHJcbmltcG9ydCBwb3NpdGlvbkVsIGZyb20gJ3V0aWxpdHkvcG9zaXRpb25FbCc7XHJcbmltcG9ydCBtYW5hZ2VCYWRnZXMgZnJvbSAndXRpbGl0eS9tYW5hZ2VCYWRnZXMnO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gIGl0ZW06IHN0cmluZztcclxuICBpdGVtQWN0aXZlQ2xhc3M6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlcnZlclJlc3BvbnNlIHtcclxuICBTVEFUVVM6IHN0cmluZztcclxuICBEQVRBOiBQb3B1cERhdGFcclxufVxyXG5cclxuaW50ZXJmYWNlIFBvcHVwRGF0YSB7XHJcbiAgdGltZT86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGd1ZXN0cz86IHN0cmluZztcclxuICBwcmljZT86IHN0cmluZztcclxuICBhY3Rpb24/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogUG9wdXBEYXRhW2tleW9mIFBvcHVwRGF0YV07XHJcbn1cclxuXHJcbmNsYXNzIFRhYmxlc0xpc3Qge1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHBvcHVwOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgc3RhdGU6IHtcclxuICAgIGFjdGl2ZUl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgb3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHt9KSB7XHJcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcclxuICAgICAgaXRlbTogJy50YWJsZS1pdGVtJyxcclxuICAgICAgaXRlbUFjdGl2ZUNsYXNzOiAndGFibGUtaXRlbV9hY3RpdmUnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgcGFzc2VkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWN0aXZlSXRlbTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gIGluaXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgVGFibGVzTGlzdC5pbnN0YW5jZXMuc2V0KHNlbGYuZWwsIHNlbGYpO1xyXG4gICAgc2VsZi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYuaGFuZGxlQ2xpY2spO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRyb2w7XHJcblxyXG4gICAgaWYgKGNvbnRyb2wgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3Qoc2VsZi5vcHRpb25zLml0ZW0pIGFzIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbShjb250cm9sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGlja091dHNpZGUgPSAoZTogRXZlbnQpID0+IHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGxldCB0YWJsZSA9IHRhcmdldC5jbG9zZXN0KHNlbGYub3B0aW9ucy5pdGVtKTtcclxuXHJcbiAgICBpZiAoIXRhYmxlICYmIChzZWxmLnBvcHVwICYmICFzZWxmLnBvcHVwLmNvbnRhaW5zKHRhcmdldCkpKSB7XHJcbiAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbShudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZUl0ZW0gPSAoaXRlbTogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHNlbGYuc3RhdGUuYWN0aXZlSXRlbSA9PT0gaXRlbSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChzZWxmLnN0YXRlLmFjdGl2ZUl0ZW0pIHtcclxuICAgICAgc2VsZi5zdGF0ZS5hY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5vcHRpb25zLml0ZW1BY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgICBzZWxmLnN0YXRlLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG5cclxuICAgIGlmIChzZWxmLnBvcHVwKSB7XHJcbiAgICAgIHNlbGYucG9wdXAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzZWxmLnBvcHVwKTtcclxuICAgICAgc2VsZi5wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHNlbGYub3B0aW9ucy5pdGVtQWN0aXZlQ2xhc3MpO1xyXG5cclxuICAgICAgZ2xvYmFsLiQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogJy9hamF4L2dldFRhYmxlRGF0YS5waHAnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICdpZC10YWJsZSc6IHBhcnNlSW50KGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkLXRhYmxlJykgfHwgJycpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZTogU2VydmVyUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHNlbGYuc2V0UG9wdXAocmVzcG9uc2UuREFUQSk7XHJcbiAgICAgICAgICBzZWxmLnBvc2l0aW9uUG9wdXAoaXRlbSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICBzZWxmLnNldFBvcHVwKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciEnLFxyXG4gICAgICAgICAgICBhY3Rpb246IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZWxmLnBvc2l0aW9uUG9wdXAoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFBvcHVwID0gKGRhdGE6IFBvcHVwRGF0YSkgPT4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICghc2VsZi5wb3B1cCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWRePVwidG1wbC10YWJsZS1jYXJkXCJdYCk7XHJcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuXHJcbiAgICAgIGlmICghdGVtcGxhdGUgfHwgIWNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIHNlbGYucG9wdXAgPSBnbG9iYWwuJChnbG9iYWwuTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLmlubmVySFRNTCwgZGF0YSwge30sIFsnPCUnLCAnJT4nXSkpLmFwcGVuZFRvKGNvbnRlbnQpLmdldCgwKVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgIGxldCBlbCA9IHNlbGYucG9wdXAucXVlcnlTZWxlY3RvcihgW2RhdGEtJHtrZXl9XWApO1xyXG5cclxuICAgICAgaWYgKGVsICYmIGRhdGFba2V5XSkge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgLy8gZWwuaW5uZXJIVE1MID0gZGF0YVtrZXldO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsICYmICFkYXRhW2tleV0pIHtcclxuICAgICAgICAvLyBlbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCd1LWhpZGRlbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJhZGdlcyA9IHNlbGYucG9wdXAucXVlcnlTZWxlY3RvcignW2RhdGEtYmFkZ2VzXScpO1xyXG5cclxuICAgIGlmIChiYWRnZXMpIHtcclxuICAgICAgbWFuYWdlQmFkZ2VzKGJhZGdlcywgJ2NvbXBhY3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvc2l0aW9uUG9wdXAgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICghc2VsZi5wb3B1cCkgcmV0dXJuO1xyXG5cclxuICAgIHBvc2l0aW9uRWwoc2VsZi5wb3B1cCBhcyBIVE1MRWxlbWVudCwgcmVmLCB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9KTtcclxuICAgIHNlbGYucG9wdXAuc3R5bGUubGVmdCA9IHBhcnNlRmxvYXQoc2VsZi5wb3B1cC5zdHlsZS5sZWZ0KSArIDYwICsgJ3B4JztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlc0xpc3Q7XHJcbiIsImltcG9ydCBtZXJnZSBmcm9tICd1dGlsaXR5L21lcmdlJztcclxuXHJcbnR5cGUgTG9hZGVyU3RhdGUgPSAndmlzaWJsZScgfCAnaGlkZGVuJztcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICBzdGF0ZXM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICB9LFxyXG4gIGNvbG9yczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYW5pbWF0ZWRDbGFzc05hbWU6IHN0cmluZztcclxuICB0aW1lb3V0OiBudW1iZXI7XHJcbiAgb3ZlcmxheTogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTG9hZGVyIHtcclxuICBlbDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcbiAgb3B0aW9uczogT3B0aW9ucztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7fSkge1xyXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0YXRlczoge1xyXG4gICAgICAgIHZpc2libGU6ICdsb2FkZXJfYWN0aXZlJyxcclxuICAgICAgICBoaWRkZW46ICdsb2FkZXJfaGlkZGVuJ1xyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiAnIzBmMzVmOCcsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiAnI2RmZGZkZidcclxuICAgICAgfSxcclxuICAgICAgYW5pbWF0ZWRDbGFzc05hbWU6ICdsb2FkZXJfYW5pbWF0ZWQnLFxyXG4gICAgICB0aW1lb3V0OiA4MDAsXHJcbiAgICAgIG92ZXJsYXk6IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZShkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnBhcmVudCA9IGVsO1xyXG4gICAgdGhpcy5lbCA9IG51bGw7XHJcbiAgICB0aGlzLnN0YXRlID0gJ2hpZGRlbic7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIExvYWRlci5pbnN0YW5jZXMuc2V0KHRoaXMucGFyZW50LCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmVsID0gdGhpcy5yZW5kZXIodGhpcy5wYXJlbnQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgndmlzaWJsZScpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGRpdi5jbGFzc05hbWUgPSAnbG9hZGVyJztcclxuICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSA9PT0gdHJ1ZSkge1xyXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbG9hZGVyX2hhcy1vdmVybGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgY2xhc3M9XCJsb2FkZXJfX2ljb25cIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgIDxjaXJjbGUgY2xhc3M9XCJsb2FkZXJfX291dGVyXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMzBcIiBzdHJva2U9XCIke3RoaXMub3B0aW9ucy5jb2xvcnMuc2Vjb25kYXJ5fVwiIHN0cm9rZS13aWR0aD1cIjRcIj5cclxuICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICA8Y2lyY2xlIGNsYXNzPVwibG9hZGVyX19pbm5lclwiIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjMwXCIgc3Ryb2tlPVwiJHt0aGlzLm9wdGlvbnMuY29sb3JzLnByaW1hcnl9XCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1kYXNoYXJyYXk9XCIyMCAxODBcIj5cclxuICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgZWwuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICB0aGlzLmVsID0gbnVsbDtcclxuICAgIExvYWRlci5pbnN0YW5jZXMuZGVsZXRlKHRoaXMucGFyZW50KTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlID0gKHN0YXRlOiBMb2FkZXJTdGF0ZSkgPT4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmIChzZWxmLmVsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHN0YXRlID09PSAndmlzaWJsZScpIHtcclxuICAgICAgc2VsZi5lbC5jbGFzc0xpc3QuYWRkKHNlbGYub3B0aW9ucy5hbmltYXRlZENsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5lbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYub3B0aW9ucy5zdGF0ZXNbc2VsZi5zdGF0ZV0pO1xyXG4gICAgc2VsZi5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgc2VsZi5lbC5jbGFzc0xpc3QuYWRkKHNlbGYub3B0aW9ucy5zdGF0ZXNbc3RhdGVdKTtcclxuXHJcbiAgICBpZiAoc3RhdGUgPT09ICdoaWRkZW4nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNlbGYuZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxmLm9wdGlvbnMuYW5pbWF0ZWRDbGFzc05hbWUpO1xyXG4gICAgICAgIHNlbGYuZGVzdHJveSgpO1xyXG4gICAgICB9LCBzZWxmLm9wdGlvbnMudGltZW91dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCBtZXJnZSBmcm9tICd1dGlsaXR5L21lcmdlJztcbmltcG9ydCBwb3NpdGlvbkVsIGZyb20gJ3V0aWxpdHkvcG9zaXRpb25FbCc7XG5cbmludGVyZmFjZSBPcHRpb25zIHt9XG5cbmludGVyZmFjZSBNZW51SXRlbSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbn1cblxuY2xhc3MgR3JvdXBNZW51IHtcbiAgZWw6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgcmVmZXJlbmNlOiBIVE1MRWxlbWVudDtcbiAgb3B0aW9uczogT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIHJlZjogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge31cblxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnBhcmVudCA9IGVsO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIEdyb3VwTWVudS5pbnN0YW5jZXMuc2V0KHNlbGYucGFyZW50LCBzZWxmKTtcbiAgICBzZWxmLmVsID0gc2VsZi5yZW5kZXIoKTtcbiAgICBzZWxmLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYuaGFuZGxlQ2xpY2spO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZTogRXZlbnQpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGVsID0gZ2xvYmFsLiQoZS50YXJnZXQpLmNsb3Nlc3QoJy5ncm91cC1tZW51X19saW5rJykuZ2V0KDApO1xuXG4gICAgaWYgKCFlbCB8fCAhc2VsZi5lbCkgcmV0dXJuO1xuXG4gICAgbGV0IGdyb3VwID0gZ2xvYmFsLiQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLWdyb3VwPVwiJHtzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3InKX1cIl1gKTtcbiAgICBsZXQgbGlzdCA9IGdyb3VwLmZpbmQoJ1tkYXRhLWl0ZW1zLWxpc3RdJyk7XG4gICAgbGV0IGNoZWNrZWRJdGVtcyA9IGxpc3QuY2hpbGRyZW4oKS5maWx0ZXIoZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZ2xvYmFsLiQodGhpcykuZmluZCgnW25hbWU9XCJDSEVDS0VEXCJdJykucHJvcCgnY2hlY2tlZCcpO1xuICAgIH0pO1xuXG4gICAgbGV0IG5ld0dyb3VwID0gZ2xvYmFsLiQoZG9jdW1lbnQpLmZpbmQoYFtkYXRhLWdyb3VwPVwiJHtlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAtaWQnKX1cIl1gKTtcbiAgICBsZXQgbmV3TGlzdCA9IG5ld0dyb3VwLmZpbmQoJ1tkYXRhLWl0ZW1zLWxpc3RdJyk7XG4gICAgY2hlY2tlZEl0ZW1zLmFwcGVuZFRvKG5ld0xpc3QpO1xuICAgIHNlbGYuZGVzdHJveSgpO1xuICAgIGNoZWNrZWRJdGVtcy5maW5kKCdbbmFtZT1cIkNIRUNLRURcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICB9XG5cbiAgcmVuZGVyID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBzZWxmLmdldERhdGEoKTtcbiAgICBsZXQgbWVudSA9IHNlbGYucGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1tZW51JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IGlzTmV3ID0gZmFsc2U7XG4gICAgbGV0IHBhcmVudEdyb3VwID0gZ2xvYmFsLiQoc2VsZi5yZWZlcmVuY2UpLmNsb3Nlc3QoJ1tkYXRhLWdyb3VwXScpO1xuICAgIGxldCBncm91cHMgPSBnbG9iYWwuJChzZWxmLnBhcmVudCkuZmluZCgnW2RhdGEtZ3JvdXBdJyk7XG4gICAgbGV0IGl0ZW1UZW1wbGF0ZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cImdyb3VwLW1lbnVfX2l0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJncm91cC1tZW51X19saW5rXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGRhdGEtZ3JvdXAtaWQ9XCJ7eyBpZCB9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1LXJvdyB1LWp1c3RpZnktc3BhY2UtYmV0d2VlbiB1LWFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncm91cC1tZW51X190aXRsZSB1LWNvbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncm91cC1tZW51X19jb3VudGVyIHUtY29sIHUtY29sb3ItYWN0aXZlLWdyYXlcIj57eyBzaXplIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIGA7XG5cbiAgICBpZiAobWVudSkge1xuICAgICAgZ2xvYmFsLiQobWVudSkuaHRtbCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzTmV3ID0gdHJ1ZTtcbiAgICAgIG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgbWVudS5jbGFzc05hbWUgPSAnZ3JvdXAtbWVudSBncm91cC1tZW51X2ZpeGVkJztcbiAgICAgIGdsb2JhbC4kKG1lbnUpLmF0dHIoJ2RhdGEtZm9yJywgcGFyZW50R3JvdXAuYXR0cignZGF0YS1ncm91cCcpKTtcblxuICAgICAgZ3JvdXBzLmVhY2goZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGdsb2JhbC4kKG1lbnUpLmFwcGVuZChnbG9iYWwuTXVzdGFjaGUucmVuZGVyKGl0ZW1UZW1wbGF0ZSwgZGF0YVtpbmRleF0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgZ2xvYmFsLiQoc2VsZi5wYXJlbnQpLmFwcGVuZChtZW51KTtcbiAgICAgIH1cblxuICAgICAgcG9zaXRpb25FbChtZW51LCBzZWxmLnJlZmVyZW5jZSwge3ZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0J30pO1xuICAgIH1cblxuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgZ2V0RGF0YSA9ICgpOiBNZW51SXRlbVtdID0+IHtcbiAgICBsZXQgZGF0YTogTWVudUl0ZW1bXSA9IFtdO1xuICAgIGxldCBncm91cHNMaXN0ID0gZ2xvYmFsLiQoZG9jdW1lbnQpLmZpbmQoJ1tkYXRhLWdyb3Vwcy1saXN0XScpO1xuICAgIGxldCBncm91cHMgPSBncm91cHNMaXN0LmZpbmQoJ1tkYXRhLWdyb3VwXScpO1xuXG4gICAgZ3JvdXBzLmVhY2goZnVuY3Rpb24odGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGxldCBpZCA9IGdsb2JhbC4kKHRoaXMpLmF0dHIoJ2RhdGEtZ3JvdXAnKSA/IHBhcnNlSW50KGdsb2JhbC4kKHRoaXMpLmF0dHIoJ2RhdGEtZ3JvdXAnKSkgOiAxO1xuICAgICAgbGV0IHRpdGxlID0gYEd1ZXN0ICR7aWR9YDtcbiAgICAgIGxldCBzaXplID0gZ2xvYmFsLiQodGhpcykuZmluZCgnLmJhc2tldC1saXN0X19pdGVtJykubGVuZ3RoO1xuXG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZGVzdHJveSA9ICgpID0+IHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYuZWwpIHJldHVybjtcblxuICAgIEdyb3VwTWVudS5pbnN0YW5jZXMuZGVsZXRlKHNlbGYucGFyZW50KTtcbiAgICBzZWxmLnBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYuaGFuZGxlQ2xpY2spO1xuICAgIGdsb2JhbC4kKHNlbGYuZWwpLnJlbW92ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwTWVudTtcbiIsImltcG9ydCBBY24gZnJvbSAnY29tcG9uZW50cy9jb250cm9scy9hY2NvcmRlb24vYWNuJztcbmltcG9ydCBUYWJzIGZyb20gJ2NvbXBvbmVudHMvY29udHJvbHMvdGFicy90YWJzJztcbmltcG9ydCBOdW1wYWQgZnJvbSAnY29tcG9uZW50cy9jb250cm9scy9udW1wYWQvbnVtcGFkJztcbmltcG9ydCBmaW5kQW5jZXN0b3IgZnJvbSAndXRpbGl0eS9maW5kQW5jZXN0b3InO1xuaW1wb3J0IFBvcHVwIGZyb20gJ2NvbXBvbmVudHMvY29udHJvbHMvcG9wdXAvcG9wdXAnO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJ2NvbXBvbmVudHMvY29udHJvbHMva2V5Ym9hcmQva2V5Ym9hcmQnO1xuLy8gaW1wb3J0IGdldENsYXNzSW5zdGFuY2UgZnJvbSAndXRpbGl0eS9nZXRDbGFzc0luc3RhbmNlJztcbi8vIGltcG9ydCBwb3NpdGlvbkVsIGZyb20gJ3V0aWxpdHkvcG9zaXRpb25FbCc7XG4vLyBpbXBvcnQgbnVtYmVyRm9ybWF0IGZyb20gJ3V0aWxpdHkvbnVtYmVyRm9ybWF0JztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICd1dGlsaXR5L3Rocm90dGxlJztcbmltcG9ydCBCYXNrZXRMaXN0IGZyb20gJ2NvbXBvbmVudHMvbGlzdHMvYmFza2V0LWxpc3QvYmFza2V0LWxpc3QnO1xuaW1wb3J0IHVwZGF0ZUNvbnRyb2xzTGlzdCBmcm9tICd1dGlsaXR5L3VwZGF0ZUNvbnRyb2xzTGlzdCc7XG5pbXBvcnQgYXJyYXlUb0F0dHJpYnV0ZSBmcm9tICd1dGlsaXR5L2FycmF5VG9BdHRyaWJ1dGUnO1xuaW1wb3J0IGF0dHJpYnV0ZVRvQXJyYXkgZnJvbSAndXRpbGl0eS9hdHRyaWJ1dGVUb0FycmF5Jztcbi8vIGltcG9ydCBoYXNWYWx1ZUluQXR0cmlidXRlIGZyb20gJ3V0aWxpdHkvaGFzVmFsdWVJbkF0dHJpYnV0ZSc7XG4vLyBpbXBvcnQgc2V0UXVhbnRpdHlGb3JtYXQgZnJvbSAndXRpbGl0eS9zZXRRdWFudGl0eUZvcm1hdCc7XG4vLyBpbXBvcnQgc2V0UHJpY2VGb3JtYXQgZnJvbSAndXRpbGl0eS9zZXRQcmljZUZvcm1hdCc7XG5pbXBvcnQgaGFuZGxlSW5wdXRTdGF0ZSBmcm9tICd1dGlsaXR5L2hhbmRsZUlucHV0U3RhdGUnO1xuLy8gaW1wb3J0IGhhbmRsZVRhZ3MgZnJvbSAndXRpbGl0eS9oYW5kbGVUYWdzJztcbi8vIGltcG9ydCBzZXRTdGF0ZSBmcm9tICd1dGlsaXR5L3NldFN0YXRlJztcbmltcG9ydCBPcmRlckZvcm0gZnJvbSAnY29tcG9uZW50cy9mb3Jtcy9vcmRlci1mb3JtL29yZGVyLWZvcm0nO1xuLy8gaW1wb3J0IExvYWRlciBmcm9tICdjb21wb25lbnRzL2xvYWRlcnMvcmFkaWFsLWxvYWRlci9yYWRpYWwtbG9hZGVyJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdjb21wb25lbnRzL2NvbnRyb2xzL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyJztcbi8vIGltcG9ydCBjaGVja1RpbWUgZnJvbSAndXRpbGl0eS9jaGVja1RpbWUnO1xuaW1wb3J0IGluaXRDbG9jayBmcm9tICdjb21wb25lbnRzL2NvbnRyb2xzL2Nsb2NrL2Nsb2NrJztcbmltcG9ydCBmb3JtYXRSZXN1bHQgZnJvbSAndXRpbGl0eS9mb3JtYXRSZXN1bHQnO1xuaW1wb3J0IExvYWRlciBmcm9tICdjb21wb25lbnRzL2xvYWRlcnMvcmFkaWFsLWxvYWRlci9yYWRpYWwtbG9hZGVyJztcbmltcG9ydCBUaW1lVHJhY2tlciBmcm9tICdjb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtdHJhY2tlci90aW1lLXRyYWNrZXInO1xuaW1wb3J0IFRhYmxlc0xpc3QgZnJvbSAnY29tcG9uZW50cy9saXN0cy90YWJsZXMtbGlzdC1zbS90YWJsZXMtbGlzdC1zbSc7XG5pbXBvcnQgT3JkZXJzTGlzdCBmcm9tICdjb21wb25lbnRzL2xpc3RzL29yZGVycy1saXN0L29yZGVycy1saXN0JztcbmltcG9ydCBzZXRVUkwgZnJvbSAndXRpbGl0eS9zZXRVUkwnO1xuaW1wb3J0IHBvc2l0aW9uRWwgZnJvbSAndXRpbGl0eS9wb3NpdGlvbkVsJztcbmltcG9ydCBtYW5hZ2VCYWRnZXMgZnJvbSAndXRpbGl0eS9tYW5hZ2VCYWRnZXMnO1xuaW1wb3J0IHNldERhdGEgZnJvbSAndXRpbGl0eS9zZXREYXRhJztcbmltcG9ydCBnZXRIZWlnaHQgZnJvbSAndXRpbGl0eS9nZXRIZWlnaHQnO1xuXG5cbi8qKlxuICogTWFpbiBzY3JpcHQgZmlsZVxuICovXG5cbmdsb2JhbC5hdHRyaWJ1dGVUb0FycmF5ID0gYXR0cmlidXRlVG9BcnJheTtcbmdsb2JhbC5hcnJheVRvQXR0cmlidXRlID0gYXJyYXlUb0F0dHJpYnV0ZTtcbmdsb2JhbC5PcmRlcnNMaXN0ID0gT3JkZXJzTGlzdDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgY29uc3QgJCA9IGdsb2JhbC4kO1xuICBjb25zdCBTaW1wbGVCYXIgPSBnbG9iYWwuU2ltcGxlQmFyO1xuICBjb25zdCBIYW1tZXIgPSBnbG9iYWwuSGFtbWVyO1xuICBjb25zdCBNdXN0YWNoZSA9IGdsb2JhbC5NdXN0YWNoZTtcblxuICBsZXQgaGFuZGxlVmlld3BvcnQgPSB0aHJvdHRsZShzZXRWaWV3cG9ydCwgNTAwKTtcbiAgc2V0Vmlld3BvcnQoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVZpZXdwb3J0KTtcblxuICBsZXQgYWNjb3VudFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnRiYXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoYWNjb3VudFBhbmVsKSB7XG4gICAgbmV3IFRpbWVUcmFja2VyKGFjY291bnRQYW5lbCk7XG4gIH1cblxuICBsZXQgdGFibGVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZXMtbGlzdFtkYXRhLWludGVyYWN0aXZlXScpO1xuXG4gIGlmICh0YWJsZXNMaXN0KSB7XG4gICAgbmV3IFRhYmxlc0xpc3QodGFibGVzTGlzdCk7XG4gIH1cblxuICBsZXQgb3JkZXJzTGlzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVycy1saXN0X3BvcHVwJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJzTGlzdFBvcHVwLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGFjdGl2ZUNsYXNzID0gJ29yZGVycy1saXN0X2FjdGl2ZSc7XG4gICAgbGV0IHBvcHVwTWVudSA9IG9yZGVyc0xpc3RQb3B1cFtpXS5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbWVudScpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgbmV3IE9yZGVyc0xpc3Qob3JkZXJzTGlzdFBvcHVwW2ldLCB7XG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbGV0IGNsb3Nlc3RJdGVtID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KGluc3RhbmNlLm9wdGlvbnMuaXRlbSk7XG5cbiAgICAgICAgICBpZiAoIWNsb3Nlc3RJdGVtIHx8ICFpbnN0YW5jZS5lbC5jb250YWlucyhjbG9zZXN0SXRlbSkgKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5lbC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5lbC5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3MpKSByZXR1cm47XG5cbiAgICAgICAgICBpbnN0YW5jZS5lbC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICBpbnN0YW5jZS5zZXRBY3RpdmVJdGVtKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvblNldEl0ZW06IGZ1bmN0aW9uIChpbnN0YW5jZSwgcHJldkl0ZW0pIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmFjdGl2ZUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICBsZXQgZ2FwID0gODtcbiAgICAgICAgICBsZXQgbWVudUl0ZW1zID0gcG9wdXBNZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNlZi10bXBsXScpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0bXBsID0gbWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWYtdG1wbCcpIHx8ICcnO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgIGlkX3BhcmFtOiAndGFibGVfaWQnLFxuICAgICAgICAgICAgICBpZF92YWx1ZTogaW5zdGFuY2Uuc3RhdGUuYWN0aXZlSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQtdGFibGUnKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbWVudUl0ZW1zW2ldLnNldEF0dHJpYnV0ZSgnaHJlZicsIHNldFVSTCh0bXBsLCBkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluc3RhbmNlLmVsLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIHBvc2l0aW9uRWwocG9wdXBNZW51LCBpbnN0YW5jZS5zdGF0ZS5hY3RpdmVJdGVtLCB7dmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAncmlnaHQnfSk7XG4gICAgICAgICAgcG9wdXBNZW51LnN0eWxlLnRvcCA9IGAke2luc3RhbmNlLnN0YXRlLmFjdGl2ZUl0ZW0ub2Zmc2V0VG9wICsgaW5zdGFuY2Uuc3RhdGUuYWN0aXZlSXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyBnYXB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsZXQga2V5Ym9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgbGV0IGtleWJvYXJkUG9wdXA6IFBvcHVwO1xuXG4gIGlmIChrZXlib2FyZCkge1xuICAgIGxldCBrZXlib2FyZFBhcmVudCA9ICQoa2V5Ym9hcmQpLmNsb3Nlc3QoJy5jb250ZW50JykuZ2V0KDApO1xuXG4gICAgbmV3IEtleWJvYXJkKGtleWJvYXJkLCB7XG4gICAgICBwYW5lbEFjdGl2ZUNsYXNzOiAna2V5Ym9hcmRfc2hvdy1wYW5lbCcsXG4gICAgICBvblRhZ0NsaWNrOiBmdW5jdGlvbiAoaW5zdGFuY2UsIHRhZ3NBcnJheSkge1xuICAgICAgICBsZXQgYWN0aXZlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXJvd19hY3RpdmUnKTtcblxuICAgICAgICBpZiAoYWN0aXZlSXRlbSkge1xuICAgICAgICAgIGxldCBiYXNrZXRMaXN0ID0gJChhY3RpdmVJdGVtKS5jbG9zZXN0KCdbZGF0YS1iYXNrZXRdJykuZ2V0KDApO1xuICAgICAgICAgIGxldCBiYXNrZXRMaXN0SW5zdGFuY2UgPSBCYXNrZXRMaXN0Lmluc3RhbmNlcy5nZXQoYmFza2V0TGlzdCk7XG4gICAgICAgICAgbGV0IHByb2R1Y3RJRCA9IGFjdGl2ZUl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtaWQnKTtcbiAgICAgICAgICBsZXQgYmFza2V0SXRlbUlEID0gYWN0aXZlSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFza2V0LWxpbmUtaWQnKTtcbiAgICAgICAgICAvLyBsZXQgYmFza2V0SUQgPSAnYTEnO1xuICAgICAgICAgIGxldCBiYXNrZXRJRCA9IGJhc2tldExpc3RJbnN0YW5jZS5iYXNrZXQ7XG4gICAgICAgICAgbGV0IG9yZGVySUQgPSBiYXNrZXRMaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcmlkJyk7XG5cbiAgICAgICAgICAvLyBiYXNrZXRMaXN0SW5zdGFuY2UucmVuZGVySXRlbVRhZ3MoYWN0aXZlSXRlbSwgdGFnc0FycmF5KTtcbiAgICAgICAgICBiYXNrZXRMaXN0SW5zdGFuY2Uuc2VuZFJlcXVlc3QoJ3VwZGF0ZScsIHtiYXNrZXRJdGVtSUQ6IGJhc2tldEl0ZW1JRCwgcHJvZHVjdElEOiBwcm9kdWN0SUQsIGJhc2tldElEOiBiYXNrZXRJRCwgb3JkZXJJZDogb3JkZXJJRCwgcHJvcHM6IHtcbiAgICAgICAgICAgIHRhZ3M6IHRhZ3NBcnJheVxuICAgICAgICAgIH19KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGdsb2JhbC5LZXlib2FyZCA9IEtleWJvYXJkO1xuXG4gICAga2V5Ym9hcmRQb3B1cCA9IG5ldyBQb3B1cChrZXlib2FyZFBhcmVudCwge1xuICAgICAgYWN0aXZlQ2xhc3M6ICdjb250ZW50X3Nob3cta2V5Ym9hcmQnLFxuICAgICAgcG9wdXA6ICcua2V5Ym9hcmQnLFxuICAgICAgd2lkdGhSZWY6ICcuYy1wYWdlJyxcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtdG9nZ2xlJyk7XG5cbiAgICAgICAgdG9nZ2xlICYmIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbnN0YW5jZS5vcGVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZF9zaG93LXBhbmVsJyk7XG5cbiAgICAgICAgbGV0IG9yZGVyRm9ybSA9ICQoJy5vcmRlci1mb3JtJyk7XG4gICAgICAgIGxldCBiYXNrZXRMaXN0ID0gb3JkZXJGb3JtLmZpbmQoJy5zaG9wcGluZy1saXN0Jyk7XG4gICAgICAgIGxldCBuZXdDb250cm9sID0gYmFza2V0TGlzdC5maW5kKCcuc2hvcHBpbmctbGlzdF9faXRlbS51LWhpZGRlbicpO1xuXG4gICAgICAgIGlmIChuZXdDb250cm9sLmxlbmd0aCkge1xuICAgICAgICAgIG5ld0NvbnRyb2wucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1rZXlib2FyZC1yZWZdJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50LCBlOiBFdmVudCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGtleWJvYXJkUG9wdXAgPSBQb3B1cC5pbnN0YW5jZXMuZ2V0KGtleWJvYXJkUGFyZW50KTtcbiAgICAgIGxldCBrZXlib2FyZEluc3RhbmNlID0gS2V5Ym9hcmQuaW5zdGFuY2VzLmdldChrZXlib2FyZCk7XG4gICAgICBsZXQgbnVtcGFkSW5zdGFuY2UgPSBrZXlib2FyZEluc3RhbmNlLm51bXBhZDtcblxuICAgICAgaWYgKCFrZXlib2FyZFBvcHVwLmlzT3BlbmVkKSB7XG4gICAgICAgIGtleWJvYXJkUG9wdXAub3BlbigpO1xuICAgICAgfVxuICAgICAga2V5Ym9hcmRJbnN0YW5jZS5zZXRSZWZlcmVuY2UodGhpcyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYpO1xuXG4gICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3BwaW5nLWxpc3RfX2l0ZW1fY29udHJvbCcpKSB7XG4gICAgICAgICQoJy5zaG9wcGluZy1saXN0X19pdGVtX2VkaXRtb2RlJykuZWFjaChmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1saXN0X19pdGVtX2VkaXRtb2RlJyk7XG4gICAgICAgICAgbGV0IGlucHV0cyA9ICQodGhpcykuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICBsZXQgaXNPcHRpb25hbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbmFsLXZhbHVlJykgIT09IG51bGw7XG5cbiAgICAgICAgICBpZiAoIWlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGlucHV0cy5lYWNoKGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICBoYW5kbGVJbnB1dFN0YXRlKHRoaXMsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2hvcHBpbmctbGlzdF9faXRlbV9lZGl0bW9kZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvcHBpbmctbGlzdF9faXRlbV9tdWx0aXBsZS1pbnB1dHMnKSkge1xuICAgICAgICAgIGxldCB2YWx1ZSA9ICQodGhpcykuZmluZCgnLnNob3BwaW5nLWxpc3RfX3ZhbHVlJyk7XG4gICAgICAgICAgbGV0IHZhbHVlSW5wdXQgPSB2YWx1ZS5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgIGxldCBpc09wdGlvbmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uYWwtdmFsdWUnKSAhPT0gbnVsbDtcblxuICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIGtleWJvYXJkSW5zdGFuY2Uuc2V0SW5wdXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleWJvYXJkSW5zdGFuY2Uuc2V0SW5wdXQodmFsdWVJbnB1dC5nZXQoMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZUlucHV0U3RhdGUoa2V5Ym9hcmRJbnN0YW5jZS5pbnB1dCwgJ2VkaXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gJCh0aGlzKS5maW5kKCcuc2hvcHBpbmctbGlzdF9fdmFsdWUnKTtcbiAgICAgICAgICBsZXQgdmFsdWVJbnB1dCA9IHZhbHVlLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgbGV0IGlzT3B0aW9uYWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb25hbC12YWx1ZScpICE9PSBudWxsO1xuXG4gICAgICAgICAgLy8gaWYgKG51bXBhZEluc3RhbmNlKSB7XG4gICAgICAgICAgICBrZXlib2FyZEluc3RhbmNlLnNldElucHV0KHZhbHVlSW5wdXQuZ2V0KDApKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgaWYgKCFpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICBoYW5kbGVJbnB1dFN0YXRlKHZhbHVlSW5wdXQsICdlZGl0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHRpdGxlID0gJCh0aGlzKS5maW5kKCcuc2hvcHBpbmctbGlzdF9fdGl0bGUnKTtcblxuICAgICAgICAgIGlmICh0aXRsZS5hdHRyKCdkYXRhLWZvY3VzLXRleHQnKSkge1xuICAgICAgICAgICAgdGl0bGUuaHRtbCh0aXRsZS5hdHRyKCdkYXRhLWZvY3VzLXRleHQnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgS2V5Ym9hcmQuaW5zdGFuY2VzLmdldChrZXlib2FyZCkuc2V0UGFuZWxTdGF0ZSgndmlzaWJsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gc2hvd1JlY29tbWVuZGF0aW9ucyAoZWw6IEhUTUxFbGVtZW50LCBkYXRhOiBbXSkge1xuICAvLyAgIGVsLnBhcmVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgLy8gICBlbC5jbGFzc0xpc3QuYWRkKCd0aWxlcy1tZW51X19wYW5lbF9hY3RpdmUnKTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGNsb3NlUmVjb21tZW5kYXRpb25zIChlbDogSFRNTEVsZW1lbnQsIGRhdGE6IFtdKSB7XG4gIC8vICAgZWwucGFyZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAvLyAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RpbGVzLW1lbnVfX3BhbmVsX2FjdGl2ZScpO1xuICAvLyB9XG5cbiAgJCgnLm1lbnUtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgIGxldCAkbWFpbiA9ICR0aGlzLmZpbmQoJy5tZW51LXNsaWRlcl9fbWFpbicpO1xuICAgIGxldCAkYXNpZGUgPSAkdGhpcy5maW5kKCcubWVudS1zbGlkZXJfX2FzaWRlJyk7XG4gICAgbGV0ICRhc2lkZVNsaWRlciA9ICRhc2lkZS5maW5kKCcudGlsZXMtdGFibGlzdF9fbGlzdCcpO1xuXG4gICAgJG1haW4ub24oJ2luaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50LCBzbGljaykge1xuICAgICAgc2xpY2suJHNsaWRlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcztcblxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlYmFyLXRoaW4nLCAnJyk7XG4gICAgICAgIC8vINC+0YLQutC70LDQtNGL0LLQsNC10Lwg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y4g0LTQu9GPINC60L7RgNGA0LXQutGC0L3QvtC5INGA0LDQsdC+0YLRiyDQv9GA0L7QutGA0YPRgtC60LhcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbmV3IFNpbXBsZUJhcihlbCk7XG4gICAgICAgIH0sIDApXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICRtYWluLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLCAvLyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+LCDQuNC90LDRh9C1INC90LDQsdC70Y7QtNCw0LXRgtGB0Y8g0LHQsNCzINGBINC/0L7RgdC70LXQtNC90LjQvCDRgdC70LDQudC00L7QvCDQsiDRgtCw0LHQu9C40YHRgtC1XG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIGFzTmF2Rm9yOiAkYXNpZGVTbGlkZXIsXG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgc3dpcGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAkYXNpZGVTbGlkZXIuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsIC8vINC+0LHRj9C30LDRgtC10LvRjNC90L4sINC40L3QsNGH0LUg0L3QsNCx0LvRjtC00LDQtdGC0YHRjyDQsdCw0LMg0YEg0L/QvtGB0LvQtdC00L3QuNC8INGB0LvQsNC50LTQvtC8INCyINGC0LDQsdC70LjRgdGC0LVcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1hcnJvd1wiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwic2xpY2staWNvbiBzdmctaWNvXCI+PHVzZSB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiI2NoZXZyb24tdXBcIj48L3VzZT48L3N2Zz48L2J1dHRvbj4nLFxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJzbGljay1pY29uIHN2Zy1pY29cIj48dXNlIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWY9XCIjY2hldnJvbi1kb3duXCI+PC91c2U+PC9zdmc+PC9idXR0b24+JyxcbiAgICAgIGFwcGVuZEFycm93czogJGFzaWRlU2xpZGVyLnBhcmVudCgpLFxuICAgICAgZG90czogZmFsc2UsXG4gICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgIGFzTmF2Rm9yOiAkbWFpbixcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICBzd2lwZTogZmFsc2UsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGxldCBzaW1wbGViYXJzVGhpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNpbXBsZWJhci10aGluXScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2ltcGxlYmFyc1RoaW4ubGVuZ3RoOyBpKyspIHtcbiAgICBuZXcgU2ltcGxlQmFyKHNpbXBsZWJhcnNUaGluW2ldKTtcbiAgfVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVudS1pdGVtJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IGFjdGl2ZUNsYXNzID0gJ21lbnUtaXRlbV9hY3RpdmUnO1xuICAgIGxldCBkZXRhaWxzID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubWVudS1pdGVtX19kZXRhaWxzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IGJhZGdlcyA9IHRoaXMucXVlcnlTZWxlY3RvcignLmJhZGdlcy1saXN0JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3MpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuICAgICAgaWYgKGRldGFpbHMpIHtcbiAgICAgICAgZGV0YWlscy5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gcmVtb3ZlSGVpZ2h0IChldmVudDogVHJhbnNpdGlvbkV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSAhPT0gJ21heC1oZWlnaHQnKSByZXR1cm47XG5cbiAgICAgICAgICBkZXRhaWxzLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVtb3ZlSGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYmFkZ2VzKSB7XG4gICAgICAgIG1hbmFnZUJhZGdlcyhiYWRnZXMsICdjb21wYWN0Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgICBpZiAoZGV0YWlscykge1xuICAgICAgICBkZXRhaWxzLnN0eWxlLm1heEhlaWdodCA9IGAke2dldEhlaWdodChkZXRhaWxzKX1weGA7XG4gICAgICB9XG4gICAgICBpZiAoYmFkZ2VzKSB7XG4gICAgICAgIG1hbmFnZUJhZGdlcyhiYWRnZXMsICdmdWxsJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlOiBFdmVudCkge1xuICAgIGxldCBhbmNob3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykgIT09IG51bGwgPyBlLnRhcmdldCA6IGZpbmRBbmNlc3RvcihlLnRhcmdldCwgJ1tkYXRhLWFuY2hvcl0nKTtcbiAgICBsZXQgYWN0aXZlQ2xhc3MgPSAnYy1wYW5lbF9zbGlkZWQnO1xuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgdGFyZ2V0ID0gJChhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXG4gICAgICAkKGAuJHthY3RpdmVDbGFzc31gKS5lYWNoKGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcyAhPT0gdGFyZ2V0LmdldCgwKSkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJCgnLm1haW4tbWVudV9faXRlbV9hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcyAhPT0gYW5jaG9yKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbWFpbi1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnYy1wYW5lbF9zbGlkZS1pbicpICYmICF0YXJnZXQuaGFzQ2xhc3MoYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIHRhcmdldC5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICAgICQoYW5jaG9yKS5wYXJlbnQoKS5hZGRDbGFzcygnbWFpbi1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2MtcGFuZWxfc2xpZGUtaW4nKSAmJiB0YXJnZXQuaGFzQ2xhc3MoYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICAgICQoYW5jaG9yKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbWFpbi1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdChgLiR7YWN0aXZlQ2xhc3N9YCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoYC4ke2FjdGl2ZUNsYXNzfWApLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgJCgnLm1haW4tbWVudV9faXRlbScpLnJlbW92ZUNsYXNzKCdtYWluLW1lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtc2V0LXN0YXRlXScsIGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLXN0YXRlXScpO1xuXG4gICAgcGFyZW50LmF0dHIoJ2RhdGEtc3RhdGUnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtc2V0LXN0YXRlJykpO1xuICB9KTtcblxuICAvLyBCQVNLRVQgTElTVFNcbiAgY29uc3QgYmFza2V0TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iYXNrZXRdJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gIGNvbnN0IGJhc2tldE9wdGlvbnMgPSB7XG4gICAgb25JdGVtQWN0aXZlQWRkOiBmdW5jdGlvbiAoaW5zdGFuY2UsIGl0ZW0pIHtcbiAgICAgIFBvcHVwLmluc3RhbmNlcy5nZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudCkub3BlbigpO1xuICAgICAgbGV0IGtleWJvYXJkSW5zdGFuY2UgPSBLZXlib2FyZC5pbnN0YW5jZXMuZ2V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZCcpIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGtleWJvYXJkSW5zdGFuY2Uuc2V0UGFuZWxTdGF0ZSgndmlzaWJsZScpO1xuICAgICAgbGV0IHRhZ3MgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10YWdzJyk7XG4gICAgICBsZXQgdGFnc1BhcnNlZCA9IGF0dHJpYnV0ZVRvQXJyYXkodGFncyk7XG5cbiAgICAgIGtleWJvYXJkSW5zdGFuY2UucmVuZGVyVGFncyh0YWdzUGFyc2VkKTtcbiAgICB9LFxuICAgIG9uSXRlbUFjdGl2ZVJlbW92ZTogZnVuY3Rpb24gKGluc3RhbmNlLCBpdGVtKSB7XG4gICAgICBsZXQga2V5Ym9hcmRJbnN0YW5jZSA9IEtleWJvYXJkLmluc3RhbmNlcy5nZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJykgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAga2V5Ym9hcmRJbnN0YW5jZS5zZXRQYW5lbFN0YXRlKCd2aXNpYmxlJyk7XG4gICAgICBrZXlib2FyZEluc3RhbmNlLnJlbmRlclRhZ3MoKTtcbiAgICB9LFxuICAgIG9uSXRlbURlbGV0ZTogZnVuY3Rpb24gKGluc3RhbmNlLCBpdGVtKSB7XG4gICAgICBsZXQga2V5Ym9hcmRJbnN0YW5jZSA9IEtleWJvYXJkLmluc3RhbmNlcy5nZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJykgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICBpZiAoa2V5Ym9hcmRJbnN0YW5jZS5yZWZlcmVuY2UgJiYgJChrZXlib2FyZEluc3RhbmNlLnJlZmVyZW5jZSkuY2xvc2VzdCgnW2RhdGEtYmFza2V0XScpLmdldCgwKSA9PT0gaW5zdGFuY2UuZWwpIHtcbiAgICAgICAga2V5Ym9hcmRJbnN0YW5jZS5yZW5kZXJUYWdzKCk7XG4gICAgICB9XG5cbiAgICAgIGtleWJvYXJkSW5zdGFuY2UuY2xvc2VSZWNvbW1lbmRhdGlvbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbGVzLW1lbnVfX3BhbmVsX3JlY29tbWVuZGF0aW9ucycpIGFzIEhUTUxFbGVtZW50KTtcblxuICAgICAgbGV0IG9yZGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtJyk7XG5cbiAgICAgIGlmIChvcmRlckZvcm0pIHtcbiAgICAgICAgT3JkZXJGb3JtLmluc3RhbmNlcy5nZXQob3JkZXJGb3JtKS5zZXRUb3RhbCgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgYWN0aXZlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1pdGVtX2FjdGl2ZScpO1xuXG4gICAgICBpZiAoYWN0aXZlSXRlbSAmJiBvcmRlckZvcm0pIHtcbiAgICAgICAgc2V0RGF0YShhY3RpdmVJdGVtLCB7XG4gICAgICAgICAgLy8gdGltZV9zdGFydDogJzAwOjAwJyxcbiAgICAgICAgICBwcmljZTogb3JkZXJGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvdGFsXScpLnRleHRDb250ZW50LFxuICAgICAgICAgIC8vIGd1ZXN0czogb3JkZXJGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWd1ZXN0c10nKS50ZXh0Q29udGVudFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gbGV0IGJhc2tldEl0ZW1JRCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJhc2tldC1saW5lLWlkJyk7XG4gICAgICAvLyBsZXQgYmFza2V0SUQgPSAnYTInO1xuXG4gICAgICAvLyBpZiAoYmFza2V0SXRlbUlEICYmIHR5cGVvZiBkZWxFbGVtZW50QmFza2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyAgIGRlbEVsZW1lbnRCYXNrZXQoYmFza2V0SXRlbUlELCBiYXNrZXRJRCk7XG4gICAgICAvLyB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlLCBpdGVtKTtcbiAgICB9LFxuICAgIG9uSXRlbUFkZDogZnVuY3Rpb24gKGluc3RhbmNlLCBuZXdJdGVtKSB7XG4gICAgICBsZXQgb3JkZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm0nKTtcblxuICAgICAgaWYgKG9yZGVyRm9ybSkge1xuICAgICAgICBPcmRlckZvcm0uaW5zdGFuY2VzLmdldChvcmRlckZvcm0pLnNldFRvdGFsKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBhY3RpdmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWl0ZW1fYWN0aXZlJyk7XG5cbiAgICAgIGlmIChhY3RpdmVJdGVtICYmIG9yZGVyRm9ybSkge1xuICAgICAgICBzZXREYXRhKGFjdGl2ZUl0ZW0sIHtcbiAgICAgICAgICAvLyB0aW1lX3N0YXJ0OiAnMDA6MDAnLFxuICAgICAgICAgIHByaWNlOiBvcmRlckZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtdG90YWxdJykudGV4dENvbnRlbnQsXG4gICAgICAgICAgLy8gZ3Vlc3RzOiBvcmRlckZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZ3Vlc3RzXScpLnRleHRDb250ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBsZXQgaXRlbSA9IG5ld0l0ZW0ucXVlcnlTZWxlY3RvcignLml0ZW0tcm93Jyk7XG4gICAgICAvLyBsZXQgcHJvZHVjdElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1pZCcpO1xuICAgICAgLy8gbGV0IHF1YW50aXR5ID0gMTtcbiAgICAgIC8vIGxldCBiYXNrZXRJRCA9ICdhMic7XG5cbiAgICAgIC8vIGlmIChwcm9kdWN0SUQgJiYgdHlwZW9mIGFkZEVsZW1lbnRCYXNrZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vICAgYWRkRWxlbWVudEJhc2tldChwcm9kdWN0SUQsIHF1YW50aXR5LCBiYXNrZXRJRCk7XG4gICAgICAvLyB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlLCBuZXdJdGVtKTtcbiAgICB9LFxuICAgIG9uSXRlbVVwZGF0ZTogZnVuY3Rpb24gKGluc3RhbmNlLCBpdGVtKSB7XG4gICAgICAvLyBsZXQgYmFza2V0SXRlbUlEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFza2V0LWxpbmUtaWQnKTtcbiAgICAgIC8vIGxldFxuICAgICAgLy8gbGV0IGJhc2tldElEID0gJ2ExJ1xuICAgIH0sXG4gICAgb25JdGVtTW92ZTogZnVuY3Rpb24gKGluc3RhbmNlLCBpdGVtLCBvbGRHcm91cCwgbmV3R3JvdXApIHtcbiAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlLCBpdGVtLCBvbGRHcm91cCwgbmV3R3JvdXApO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2tldExpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgbmV3IEJhc2tldExpc3QoYmFza2V0TGlzdHNbaV0sIGJhc2tldE9wdGlvbnMpO1xuICB9XG5cbiAgZ2xvYmFsLkJhc2tldExpc3QgPSBCYXNrZXRMaXN0O1xuICBnbG9iYWwuYmFza2V0T3B0aW9ucyA9IGJhc2tldE9wdGlvbnM7XG5cbiAgLy8gT1JERVIgRk9STVxuICBjb25zdCBvcmRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICBpZiAob3JkZXJGb3JtKSB7XG4gICAgbmV3IE9yZGVyRm9ybShvcmRlckZvcm0pO1xuICAgIGdsb2JhbC5PcmRlckZvcm0gPSBPcmRlckZvcm07XG4gIH1cblxuICBsZXQgb3JkZXJzTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJzLWxpc3RfdGFibGVzJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcnNMaXN0cy5sZW5ndGg7IGkrKykge1xuICAgIG5ldyBPcmRlcnNMaXN0KG9yZGVyc0xpc3RzW2ldLCB7XG4gICAgICBhbHdheXNBY3RpdmU6IHRydWUsXG4gICAgICBzZXRVUkw6IHRydWUsXG4gICAgICB1cmxQYXJhbTogJ3RhYmxlX2lkJyxcbiAgICAgIHVybEF0dHJpYnV0ZTogJ2RhdGEtaWQtdGFibGUnLFxuICAgICAgb25TZXRJdGVtOiBmdW5jdGlvbiAoaW5zdGFuY2UsIHByZXZJdGVtKSB7XG4gICAgICAgIGxldCBpdGVtID0gaW5zdGFuY2Uuc3RhdGUuYWN0aXZlSXRlbTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgICAgICBsZXQgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWVdJyk7XG4gICAgICAgIGxldCBvcmRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybScpO1xuXG4gICAgICAgIGlmIChvcmRlckZvcm0pIHtcbiAgICAgICAgICBsZXQgb3JkZXJGb3JtSW5zdGFuY2UgPSBPcmRlckZvcm0uaW5zdGFuY2VzLmdldChvcmRlckZvcm0pO1xuICAgICAgICAgIGxldCBhbGxCYXNrZXRzID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29kZS10YWJsZS1iYXNrZXQnKTtcblxuICAgICAgICAgIGlmIChhbGxCYXNrZXRzKSB7XG4gICAgICAgICAgICBvcmRlckZvcm1JbnN0YW5jZS5zZXRQb3NzaWJsZUJhc2tldHMoT2JqZWN0LmtleXMoYXR0cmlidXRlVG9BcnJheShhbGxCYXNrZXRzKVswXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcmRlckZvcm1JbnN0YW5jZS5zZXRWaWV3KCdvdmVyYWxsJyk7XG4gICAgICAgICAgb3JkZXJGb3JtSW5zdGFuY2Uuc2V0QmFza2V0Q29kZShvcmRlckZvcm1JbnN0YW5jZS5nZXRCYXNrZXRDb2RlKCkpO1xuICAgICAgICAgIG9yZGVyRm9ybUluc3RhbmNlLnNldFRpdGxlKHRpdGxlID8gdGl0bGUuaW5uZXJIVE1MLnRyaW0oKSA6ICcnKTtcblxuICAgICAgICAgIG9yZGVyRm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdHNdJykuaW5uZXJIVE1MID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdHNdJykuaW5uZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRyb2xBbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRyb2xzLW1lbnVfX2xpbmtbZGF0YS1zZWYtdG1wbF0nKTtcbiAgICAgICAgbGV0IG5ld1VSTCA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbEFuY2hvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuZXdVUkwgPSBjb250cm9sQW5jaG9yc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VmLXRtcGwnKSB8fCAnJztcbiAgICAgICAgICBuZXdVUkwgPSBuZXdVUkwucmVwbGFjZSgnPCUgaWRfcGFyYW0gJT4nLCBpbnN0YW5jZS5vcHRpb25zLnVybFBhcmFtKTtcbiAgICAgICAgICBuZXdVUkwgPSBuZXdVUkwucmVwbGFjZSgnPCUgaWRfdmFsdWUgJT4nLCBpbnN0YW5jZS5zdGF0ZS5hY3RpdmVJdGVtLmdldEF0dHJpYnV0ZShpbnN0YW5jZS5vcHRpb25zLnVybEF0dHJpYnV0ZSkpO1xuICAgICAgICAgIGNvbnRyb2xBbmNob3JzW2ldLnNldEF0dHJpYnV0ZSgnaHJlZicsIG5ld1VSTCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxldCBvcmRlcnNMaXN0c0ZyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJzLWxpc3RfZnJlZScpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJzTGlzdHNGcmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgbmV3IE9yZGVyc0xpc3Qob3JkZXJzTGlzdHNGcmVlW2ldLCB7XG4gICAgICBhbHdheXNBY3RpdmU6IHRydWUsXG4gICAgICBzZXRVUkw6IHRydWUsXG4gICAgICB1cmxQYXJhbTogJ3RhYmxlX2lkJyxcbiAgICAgIHVybEF0dHJpYnV0ZTogJ2RhdGEtaWQtdGFibGUnLFxuICAgICAgb25TZXRJdGVtOiBmdW5jdGlvbiAoaW5zdGFuY2UsIHByZXZJdGVtKSB7XG4gICAgICAgIGxldCBpdGVtID0gaW5zdGFuY2Uuc3RhdGUuYWN0aXZlSXRlbTtcbiAgICAgICAgbGV0IG9yZGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCFpdGVtIHx8ICFvcmRlckZvcm0pIHJldHVybjtcblxuICAgICAgICBsZXQgdGFibGVJRCA9IHBhcnNlSW50KGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkLXRhYmxlJykgfHwgJycpO1xuICAgICAgICBsZXQgb3JkZXJGb3JtSW5zdGFuY2UgPSBPcmRlckZvcm0uaW5zdGFuY2VzLmdldChvcmRlckZvcm0pO1xuXG4gICAgICAgIG9yZGVyRm9ybUluc3RhbmNlLmdldFRhYmxlRGF0YSh0YWJsZUlEKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxldCBraXRjaGVuT3JkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLWl0ZW1bZHJhZ2dhYmxlXScpO1xuXG4gIGlmIChraXRjaGVuT3JkZXJzLmxlbmd0aCkge1xuICAgIGxldCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLXBhbmVsX19ib2R5W2RhdGEtZHJhZy10YXJnZXRdJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtpdGNoZW5PcmRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICgha2l0Y2hlbk9yZGVyc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3UtZHJhZy1pbml0ZWQnKSkge1xuICAgICAgICBraXRjaGVuT3JkZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgICAgIGtpdGNoZW5PcmRlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGhhbmRsZURyYWdFbmQpO1xuICAgICAgICBraXRjaGVuT3JkZXJzW2ldLmNsYXNzTGlzdC5hZGQoJ3UtZHJhZy1pbml0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWxpc3RzW2ldLmNsYXNzTGlzdC5jb250YWlucygndS1kcmFnLWluaXRlZCcpKSB7XG4gICAgICAgIGxpc3RzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xuICAgICAgICBsaXN0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJhZ0Ryb3ApO1xuICAgICAgICBsaXN0c1tpXS5jbGFzc0xpc3QuYWRkKCd1LWRyYWctaW5pdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0IChlOiBEcmFnRXZlbnQpIHtcbiAgICAgIGxldCBpdGVtID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kIChlOiBEcmFnRXZlbnQpIHtcbiAgICAgIGxldCBpdGVtID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnT3ZlciAoZTogRHJhZ0V2ZW50KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnRHJvcCAoZTogRHJhZ0V2ZW50KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcblxuICAgICAgaWYgKCFkcmFnZ2FibGUpIHJldHVybjtcblxuICAgICAgbGV0IGdyb3VwID0gZS50YXJnZXQ7XG4gICAgICBsZXQgc3RhdGUgPSBncm91cC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKTtcbiAgICAgIGxldCBvcmRlcklEID0gZHJhZ2dhYmxlLmdldEF0dHJpYnV0ZSgnZGF0YS1vcmRlci1pZCcpO1xuICAgICAgbGV0IGJhc2tldEl0ZW1JRCA9IGRyYWdnYWJsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFza2V0LWxpbmUtaWQnKTtcblxuICAgICAgbGV0IG5ld0dyb3VwID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc3RhdGVdJyk7XG4gICAgICBsZXQgbmV3U3RhdGUgPSBuZXdHcm91cC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKTtcblxuICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICBvcmRlcklkOiBvcmRlcklELFxuICAgICAgICBiYXNrZXRJdGVtSWQ6IGJhc2tldEl0ZW1JRCxcbiAgICAgICAgc3RhdGU6IG5ld1N0YXRlXG4gICAgICB9XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnL2FqYXgvc2V0RGlzaFN0YXRlLnBocCcsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UuU1RBVFVTID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGRyYWdnYWJsZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBsaXN0SXRlbS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxldCBiYWRnZXNMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWRnZXMtbGlzdFtkYXRhLWJhZGdlcz1cImR5bmFtaWNcIl0nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGdlc0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWFuYWdlQmFkZ2VzKGJhZGdlc0xpc3RzW2ldLCAnY29tcGFjdCcpO1xuICB9XG5cbiAgbGV0IHByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcnMtbGlzdCBbZGF0YS1wcm9ncmVzc2Jhcl0nKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgbGV0IHByb2dyZXNzQmFyU3RhdHVzZXMgPSB7XG4gICAgc3VjY2VzczogJ3Byb2dyZXNzYmFyX3N1Y2Nlc3MnLFxuICAgIHdhcm5pbmc6ICdwcm9ncmVzc2Jhcl93YXJuaW5nJyxcbiAgICBlcnJvcjogJ3Byb2dyZXNzYmFyX2Vycm9yJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNldFByb2dyZXNzU3RhdHVzIChlbDogSFRNTEVsZW1lbnQsIG5ld1N0YXR1czogc3RyaW5nLCBzdGF0dXNNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7XG4gICAgZm9yIChsZXQgc3RhdHVzIGluIHN0YXR1c01hcCkge1xuICAgICAgaWYgKHN0YXR1cyAhPT0gbmV3U3RhdHVzKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoc3RhdHVzTWFwW3N0YXR1c10pO1xuICAgICAgfVxuXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKHN0YXR1c01hcFtuZXdTdGF0dXNdKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2dyZXNzQmFycy5sZW5ndGg7IGkrKykge1xuICAgIG5ldyBQcm9ncmVzc0Jhcihwcm9ncmVzc0JhcnNbaV0sIHtcbiAgICAgIG9uVGljazogZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGxldCB0aW1lUGFzc2VkID0gKGluc3RhbmNlLnN0YXRlLmN1cnJlbnQgLyBpbnN0YW5jZS5vcHRpb25zLmxpbWl0KSAqIDEwMDtcblxuICAgICAgICBpZiAodGltZVBhc3NlZCA+PSA1MCAmJiB0aW1lUGFzc2VkIDwgNzUpIHtcbiAgICAgICAgICBzZXRQcm9ncmVzc1N0YXR1cyhpbnN0YW5jZS5lbCwgJ3dhcm5pbmcnLCBwcm9ncmVzc0JhclN0YXR1c2VzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lUGFzc2VkID49IDc1KSB7XG4gICAgICAgICAgc2V0UHJvZ3Jlc3NTdGF0dXMoaW5zdGFuY2UuZWwsICdlcnJvcicsIHByb2dyZXNzQmFyU3RhdHVzZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBBQ0NPUkRFT05TXG4gIGNvbnN0IG1lbnVBY2NvcmRlb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtc2VjdGlvbicpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUFjY29yZGVvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBuZXcgQWNuKG1lbnVBY2NvcmRlb25zW2ldLCB7XG4gICAgICBhY3RpdmVDbGFzczogJ21lbnUtc2VjdGlvbl9hY3RpdmUnLFxuICAgICAgdG9nZ2xlOiAnLm1lbnUtc2VjdGlvbl9faGVhZCcsXG4gICAgICBib2R5OiAnLm1lbnUtc2VjdGlvbl9fYm9keScsXG4gICAgICBjb250YWluZXI6ICcubWVudS1zZWN0aW9uX19pbm5lcidcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRBQlNcbiAgbGV0IGF1dGhUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtZm9ybScpIGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmIChhdXRoVGFicykge1xuICAgIG5ldyBUYWJzKGF1dGhUYWJzLCB7XG4gICAgICB0YWJsaXN0Q2xhc3M6ICdhdXRoLWZvcm1fX2NvbnRyb2xzJyxcbiAgICAgIGNvbnRlbnRDbGFzczogJ2F1dGgtZm9ybV9fcGFuZWxzJyxcbiAgICAgIHRhYkNsYXNzOiAnYXV0aC1mb3JtX19jdHJsJyxcbiAgICAgIGxpbmtDbGFzczogJ2F1dGgtYnRuJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdhdXRoLWZvcm1fX3BhbmVsJyxcbiAgICAgIGluYWN0aXZlQ2xhc3M6ICd1LWhpZGRlbicsXG4gICAgICBjaGFuZ2VVUkw6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChpbnN0YW5jZTogVGFicykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RhbmNlLnRhYkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPT09IGluc3RhbmNlLnN0YXRlLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgaW5zdGFuY2UudGFiSXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgndS1oaWRkZW4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UudGFiSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgndS1oaWRkZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxldCBtZW51VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLXBhbmVsX21lbnUnKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgbGV0IGluaXRNZW51QWNucyA9IGZ1bmN0aW9uIChwYW5lbDogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgYWNucyA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb24nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNucy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGluc3RhbmNlID0gQWNuLmluc3RhbmNlcy5nZXQoYWNuc1tpXSk7XG4gICAgICBsZXQgaXNMb2FkZWQgPSBpbnN0YW5jZS5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3UtbG9hZGVkJyk7XG5cbiAgICAgIGlmICghaXNMb2FkZWQpIHtcbiAgICAgICAgbGV0IGlibG9ja0lEID0gaW5zdGFuY2UuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlibG9jay1pZCcpO1xuICAgICAgICBsZXQgc2VjdGlvbklEID0gaW5zdGFuY2UuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICcvYWpheC9nZXRTZWN0aW9uSXRlbXMucGhwJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7aWJsb2NrSUQ6IGlibG9ja0lELCBzZWN0aW9uSUQ6IHNlY3Rpb25JRCwgdGVtcGxhdGU6ICdtZW51SXRlbSd9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaW5zdGFuY2UuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgJChpbnN0YW5jZS5jb250YWluZXIpLmFwcGVuZChyZXNwb25zZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5lbC5jbGFzc0xpc3QuYWRkKCd1LWxvYWRlZCcpO1xuICAgICAgICAgICAgLy8gaW5zdGFuY2Uuc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGxldCBiYWRnZXMgPSBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yKCcuYmFkZ2VzLWxpc3QnKTtcblxuICAgICAgICAgICAgaWYgKGJhZGdlcykge1xuICAgICAgICAgICAgICBtYW5hZ2VCYWRnZXMoYmFkZ2VzLCAnY29tcGFjdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnN0YW5jZS50b2dnbGVEb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIEFjbi5pbnN0YW5jZXMuZ2V0KGFjbnNbaV0pLnRvZ2dsZURvd24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVNZW51VGl0bGUgKHRhYkl0ZW06IEhUTUxFbGVtZW50LCB0YWJQYW5lbDogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgbWVudWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51YmFyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IG1lbnVUaXRsZSA9IG1lbnViYXIucXVlcnlTZWxlY3RvcignLmMtdGl0bGUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgdGl0bGUgPSB0YWJJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpIHx8ICcnO1xuICAgIGxldCBpdGVtcyA9IHRhYlBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcblxuICAgIG1lbnVUaXRsZS5pbm5lckhUTUwgPSAgYCR7dGl0bGV9IDxzdXAgY2xhc3M9XCJjLXN1cCBjLWJvZHkgYy1ib2R5X3hzXCI+JHtpdGVtcy5sZW5ndGh9PC9zdXA+YDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudVRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICBuZXcgVGFicyhtZW51VGFic1tpXSwge1xuICAgICAgdGFibGlzdENsYXNzOiAnc2lkZS1tZW51JyxcbiAgICAgIGNvbnRlbnRDbGFzczogJ21lbnUtcGFuZWxzJyxcbiAgICAgIHRhYkNsYXNzOiAnc2lkZS1tZW51X19pdGVtJyxcbiAgICAgIGxpbmtDbGFzczogJ3NpZGUtbWVudV9fbGluaycsXG4gICAgICBwYW5lbENsYXNzOiAnbWVudS1wYW5lbHNfX3BhbmVsJyxcbiAgICAgIGluYWN0aXZlQ2xhc3M6ICd1LWhpZGRlbicsXG4gICAgICBjaGFuZ2VVUkw6IGZhbHNlLFxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoaW5zdGFuY2U6IFRhYnMpIHtcbiAgICAgICAgaW5pdE1lbnVBY25zKGluc3RhbmNlLnBhbmVsc1tpbnN0YW5jZS5zdGF0ZS5hY3RpdmVUYWJdKTtcbiAgICAgICAgdXBkYXRlTWVudVRpdGxlKGluc3RhbmNlLnRhYkl0ZW1zW2luc3RhbmNlLnN0YXRlLmFjdGl2ZVRhYl0sIGluc3RhbmNlLnBhbmVsc1tpbnN0YW5jZS5zdGF0ZS5hY3RpdmVUYWJdKTtcbiAgICAgIH0sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGluc3RhbmNlOiBUYWJzKSB7XG4gICAgICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1tZW51X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1tZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnRhYnNbaW5zdGFuY2Uuc3RhdGUuYWN0aXZlVGFiXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NpZGUtbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgaW5pdE1lbnVBY25zKGluc3RhbmNlLnBhbmVsc1tpbnN0YW5jZS5zdGF0ZS5hY3RpdmVUYWJdKTtcbiAgICAgICAgdXBkYXRlTWVudVRpdGxlKGluc3RhbmNlLnRhYkl0ZW1zW2luc3RhbmNlLnN0YXRlLmFjdGl2ZVRhYl0sIGluc3RhbmNlLnBhbmVsc1tpbnN0YW5jZS5zdGF0ZS5hY3RpdmVUYWJdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFVVEggRk9STVxuICBsZXQgYXV0aENvZGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtY29kZS1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG4gIGludGVyZmFjZSBBSkFYUmVzcG9uc2Uge1xuICAgIFNUQVRVUzogc3RyaW5nO1xuICAgIEVSUk9SUzogW10gfCBzdHJpbmc7XG4gICAgTk9URTogc3RyaW5nO1xuICB9XG5cbiAgaW50ZXJmYWNlIEF1dGhQYXJhbXMge1xuICAgIG9uU3VjY2Vzcz86IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHZvaWRcbiAgICBvbkVycm9yPzogKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4gdm9pZFxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXV0aCAoZm9ybTogSFRNTEZvcm1FbGVtZW50LCBlOiBFdmVudCwgcGFyYW1zOiBBdXRoUGFyYW1zID0ge30pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcmVzdWx0ID0gJChmb3JtKS5jbG9zZXN0KCcuYXV0aC1mb3JtX19wYW5lbCcpLmdldCgwKS5xdWVyeVNlbGVjdG9yKCcuYXV0aC1mb3JtX190aXRsZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCBkZWZhdWx0VGl0bGUgPSByZXN1bHQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQtdGl0bGUnKTtcbiAgICBsZXQgcmVzdWx0U3VjY2Vzc0NsYXNzID0gJ3UtY29sb3Itc3VjY2Vzcyc7XG4gICAgbGV0IHJlc3VsdEVycm9yQ2xhc3MgPSAndS1jb2xvci1lcnJvcic7XG4gICAgbGV0IHJlZGlyZWN0ID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgICBsZXQgZm9ybURhdGEgPSAkKGZvcm0pLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgbGV0IHRpbWVvdXQ6IG51bWJlcjtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBmb3JtLm1ldGhvZCxcbiAgICAgIHVybDogZm9ybS5hY3Rpb24sXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2U6IEFKQVhSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2UuU1RBVFVTKSB7XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICByZXN1bHQuY2xhc3NMaXN0LnJlbW92ZShyZXN1bHRFcnJvckNsYXNzKTtcbiAgICAgICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKHJlc3VsdFN1Y2Nlc3NDbGFzcyk7XG4gICAgICAgICAgICByZXN1bHQudGV4dENvbnRlbnQgPSBmb3JtYXRSZXN1bHQoe3Jlc3BvbnNlVGV4dDogcmVzcG9uc2UuTk9URX0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGltZW91dCk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5vblN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLm9uU3VjY2Vzcyhmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdDtcbiAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUocmVzdWx0U3VjY2Vzc0NsYXNzKTtcbiAgICAgICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKHJlc3VsdEVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGZvcm1hdFJlc3VsdCh7cmVzcG9uc2VUZXh0OiByZXNwb25zZS5FUlJPUlN9KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMub25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBwYXJhbXMub25FcnJvcihmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUocmVzdWx0RXJyb3JDbGFzcyk7XG4gICAgICAgICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGRlZmF1bHRUaXRsZTtcbiAgICAgICAgICAgICAgbGV0IGZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLWlucHV0X2Vycm9yJyk7XG4gICAgICAgICAgICAgIGxldCBpbnB1dDtcblxuICAgICAgICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20taW5wdXRfX2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20taW5wdXRfZXJyb3InKTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHNldEN1c3RvbUlucHV0VmFsdWUoaW5wdXQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZToge30pIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGF1dGhDb2RlRm9ybSkge1xuICAgIGxldCBudW1wYWQgPSBhdXRoQ29kZUZvcm0ucXVlcnlTZWxlY3RvcignLm51bXBhZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCBjb2RlSW5wdXQgPSBhdXRoQ29kZUZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJDT0RFXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBsZXQgY3VzdG9tSW5wdXQgPSBmaW5kQW5jZXN0b3IoY29kZUlucHV0LCAnLmN1c3RvbS1pbnB1dCcpO1xuICAgIGxldCBzdGF0ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgc3VjY2VzczogJ2N1c3RvbS1pbnB1dF9zdWNjZXNzJyxcbiAgICAgIGVycm9yOiAnY3VzdG9tLWlucHV0X2Vycm9yJ1xuICAgIH1cblxuICAgIG5ldyBOdW1wYWQobnVtcGFkLCB7XG4gICAgICBpbnB1dDogY29kZUlucHV0XG4gICAgfSk7XG5cbiAgICBhdXRoQ29kZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGhhbmRsZUF1dGgoYXV0aENvZGVGb3JtLCBlLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKGF1dGhDb2RlRm9ybSkge1xuICAgICAgICAgIGN1c3RvbUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzWydlcnJvciddKTtcbiAgICAgICAgICBjdXN0b21JbnB1dC5jbGFzc0xpc3QuYWRkKHN0YXRlc1snc3VjY2VzcyddKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGF1dGhDb2RlRm9ybSkge1xuICAgICAgICAgIGN1c3RvbUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzWydzdWNjZXNzJ10pO1xuICAgICAgICAgIGN1c3RvbUlucHV0LmNsYXNzTGlzdC5hZGQoc3RhdGVzWydlcnJvciddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb2RlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRDdXN0b21JbnB1dFZhbHVlKGNvZGVJbnB1dCwge1xuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgaWYgKGVsLnZhbHVlLmxlbmd0aCA9PT0gZWwubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBhdXRoQ29kZUZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGxldCBudW1wYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtcGFkJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBuZXcgTnVtcGFkKG51bXBhZCwge1xuICAgICAgb25JbnB1dFNldDogZnVuY3Rpb24gKGluc3RhbmNlLCBwcmV2SW5wdXQpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBnbG9iYWwuJChwcmV2SW5wdXQpLmNsb3Nlc3QoJy5zaG9wcGluZy1saXN0X19pdGVtJykuZ2V0KDApO1xuXG4gICAgICAgIGlmICghaXRlbSAmJiBwcmV2SW5wdXQpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dFN0YXRlKHByZXZJbnB1dCwgJ2RlZmF1bHQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtICYmIHByZXZJbnB1dCkge1xuICAgICAgICAgIGxldCBpc09wdGlvbmFsID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uYWwtdmFsdWUnKSAhPT0gbnVsbDtcblxuICAgICAgICAgIGlmICghaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgaGFuZGxlSW5wdXRTdGF0ZShwcmV2SW5wdXQsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsZXQgY2xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1jbG9jaycpIGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmIChjbG9jaykge1xuICAgIGluaXRDbG9jayhjbG9jayk7XG4gIH1cblxuICAvLyB1dGlsaXR5XG4gIGludGVyZmFjZSBDdXN0b21JbnB1dE9wdGlvbnMge1xuICAgIG9uQ2hhbmdlPzogKGVsOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB2b2lkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3VzdG9tSW5wdXRWYWx1ZSAoZWw6IEhUTUxJbnB1dEVsZW1lbnQsIHBhcmFtczogQ3VzdG9tSW5wdXRPcHRpb25zID0ge30pIHtcbiAgICBsZXQgcGFyZW50ID0gZmluZEFuY2VzdG9yKGVsLCAnLmN1c3RvbS1pbnB1dCcpO1xuICAgIGxldCBtYXJrcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWlucHV0X19tYXJrJyk7XG4gICAgbGV0IGFjdGl2ZUNsYXNzID0gJ2N1c3RvbS1pbnB1dF9fbWFya19hY3RpdmUnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbWFya3NbaV0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG5cbiAgICAgIGlmIChpIDwgZWwudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIG1hcmtzW2ldLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy5vbkNoYW5nZShlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Vmlld3BvcnQgKCkge1xuICAgIGxldCBtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPXZpZXdwb3J0XVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgYnJlYWtwb2ludCA9IDEwMjQ7XG5cbiAgICBpZiAoc2NyZWVuLndpZHRoID4gYnJlYWtwb2ludCkge1xuICAgICAgbWV0YVZpZXdwb3J0LnNldEF0dHJpYnV0ZSgnY29udGVudCcsICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhVmlld3BvcnQuc2V0QXR0cmlidXRlKCdjb250ZW50JywgYHdpZHRoPSR7YnJlYWtwb2ludH1gKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5VG9BdHRyaWJ1dGUoYXJyYXk6IFtdKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcblxuICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdHRyaWJ1dGVUb0FycmF5ICh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IFtdIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJy9nLCAnXCInKTtcblxuICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZSh2YWx1ZSkgfHwgW107XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaCAoc3RyaW5nOiBzdHJpbmcpIHtcclxuICBsZXQgcmV0ID0gJyc7XHJcbiAgbGV0IHByZXZMb3dlcmNhc2UgPSBmYWxzZTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzID0gJyc7XHJcbiAgICBzID0gc3RyaW5nLmNoYXJBdChpKTtcclxuXHJcbiAgICBjb25zdCBpc1VwcGVyY2FzZSA9IHMudG9VcHBlckNhc2UoKSA9PT0gcztcclxuXHJcbiAgICBpZiAoaXNVcHBlcmNhc2UgJiYgcHJldkxvd2VyY2FzZSkge1xyXG4gICAgICByZXQgKz0gJy0nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldCArPSBzO1xyXG4gICAgcHJldkxvd2VyY2FzZSA9ICFpc1VwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXQucmVwbGFjZSgvLSsvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrVGltZSAoY2hhcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNoYXIgPCAxMCA/IGAwJHtjaGFyfWAgOiBjaGFyLnRvU3RyaW5nKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQW5jZXN0b3IgKGVsOiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykge1xyXG4gIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbC5tYXRjaGVzIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3I7XHJcblxyXG4gIHdoaWxlIChlbCkge1xyXG4gICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsLCBzZWxlY3RvcikpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufTtcclxuIiwiaW50ZXJmYWNlIE9wdGlvbnMge1xuICByZXNwb25zZVRleHQ6IHN0cmluZyB8IG9iamVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0UmVzdWx0IChwYXJhbXM6IE9wdGlvbnMpIHtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLnJlc3BvbnNlVGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICBsZXQgcmVzcG9uc2VBcnJheSA9IGdsb2JhbC4kLm1hcChwYXJhbXMucmVzcG9uc2VUZXh0LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSByZXNwb25zZUFycmF5W2ldLnJlcGxhY2UoJ9Cd0LUg0LfQsNC/0L7Qu9C90LXQvdGLINGB0LvQtdC00YPRjtGJ0LjQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LUg0L/QvtC70Y8nLCAn0J3QtSDQt9Cw0L/QvtC70L3QtdC90L4g0L/QvtC70LUnKSArICc8YnI+JztcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5yZXNwb25zZVRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gcGFyYW1zLnJlc3BvbnNlVGV4dDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIZWlnaHQgKGVsOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIGxldCBoZWlnaHQgPSAwO1xuXG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBoZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQ7XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICByZXR1cm4gaGVpZ2h0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnQgKCkge1xyXG4gIGxldCB2aWV3cG9ydFdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcclxuICBsZXQgdmlld3BvcnRIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogdmlld3BvcnRXaWR0aCxcclxuICAgIGhlaWdodDogdmlld3BvcnRIZWlnaHRcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdyYXBwZWRJdGVtcyAoZWw6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgY3Vyckl0ZW06IENsaWVudFJlY3QgPSB7Ym90dG9tOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBoZWlnaHQ6IDAsIHdpZHRoOiAwfTtcbiAgbGV0IGl0ZW1zID0gZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGxldCBtaW5Ub3AgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjdXJySXRlbSA9IGl0ZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIG1pblRvcCA9IGN1cnJJdGVtLnRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnJJdGVtLnRvcCA+IG1pblRvcCkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBzZXRRdWFudGl0eUZvcm1hdCBmcm9tICd1dGlsaXR5L3NldFF1YW50aXR5Rm9ybWF0JztcbmltcG9ydCBzZXRQcmljZUZvcm1hdCBmcm9tICd1dGlsaXR5L3NldFByaWNlRm9ybWF0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlSW5wdXRTdGF0ZSAoaW5wdXQ6IEhUTUxFbGVtZW50LCBzdGF0ZTogJ2VkaXQnIHwgJ2RlZmF1bHQnKSB7XG4gIGxldCB2YWx1ZSA9IGdsb2JhbC4kKGlucHV0KS52YWwoKTtcbiAgbGV0IHByb3AgPSBnbG9iYWwuJChpbnB1dCkuYXR0cignZGF0YS1wcm9wJyk7XG4gIGxldCBtZWFzdXJlID0gZ2xvYmFsLiQoaW5wdXQpLmF0dHIoJ2RhdGEtbWVhc3VyZScpO1xuXG4gIHN3aXRjaCAoc3RhdGUpIHtcbiAgICBjYXNlICdlZGl0JzpcbiAgICAgIGlmIChwcm9wID09PSAncHJpY2UnKSB7XG4gICAgICAgIGdsb2JhbC4kKGlucHV0KS52YWwoc2V0UHJpY2VGb3JtYXQodmFsdWUsICdjbGVhbicpKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3F1YW50aXR5Jykge1xuICAgICAgICBnbG9iYWwuJChpbnB1dCkudmFsKHNldFF1YW50aXR5Rm9ybWF0KHZhbHVlLCAnY2xlYW4nLCBtZWFzdXJlKSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICBpZiAocHJvcCA9PT0gJ3ByaWNlJykge1xuICAgICAgICBnbG9iYWwuJChpbnB1dCkudmFsKHNldFByaWNlRm9ybWF0KHZhbHVlLCAnZm9ybWF0dGVkJykpO1xuICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAncXVhbnRpdHknKSB7XG4gICAgICAgIGdsb2JhbC4kKGlucHV0KS52YWwoc2V0UXVhbnRpdHlGb3JtYXQodmFsdWUsICdmb3JtYXR0ZWQnLCBtZWFzdXJlKSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNWYWx1ZUluQXR0cmlidXRlIChlbDogSFRNTEVsZW1lbnQsIGFjdGlvbjogc3RyaW5nLCBhdHRyaWJ1dGU6IHN0cmluZykge1xuICBsZXQgYWN0aW9ucyA9IGVsLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICBsZXQgYWN0aW9uc0Fycjogc3RyaW5nW10gPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGFjdGlvbnNBcnIgPSBhY3Rpb25zLnNwbGl0KCcsJyk7XG4gIH1cblxuICByZXR1cm4gYWN0aW9uc0Fyci5pbmRleE9mKGFjdGlvbikgIT09IC0xO1xufVxuIiwiaW1wb3J0IGdldFdyYXBwZWRJdGVtcyBmcm9tICd1dGlsaXR5L2dldFdyYXBwZWRJdGVtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hbmFnZUJhZGdlcyAobGlzdDogRWxlbWVudCwgc3RhdGU6ICdjb21wYWN0JyB8ICdmdWxsJykge1xuICBsZXQgb3ZlcmZsb3cgPSAnLmJhZGdlcy1saXN0X19vdmVyZmxvdyc7XG4gIGxldCB3cmFwcGVkSXRlbXMgPSBnZXRXcmFwcGVkSXRlbXMobGlzdCwgJy5iYWRnZXMtbGlzdF9faXRlbTpub3QoJyArIG92ZXJmbG93ICsgJyknKTtcbiAgbGV0IGhpZGRlbkNsYXNzID0gJ3UtaGlkZGVuJztcblxuICBpZiAod3JhcHBlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgc3RhdGUgPT09ICdjb21wYWN0Jykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd3JhcHBlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3cmFwcGVkSXRlbXNbaV0uY2xhc3NMaXN0LmFkZChoaWRkZW5DbGFzcyk7XG4gICAgfVxuXG4gICAgbGV0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGJhZGdlLmNsYXNzTmFtZSA9ICdiYWRnZXMtbGlzdF9faXRlbSBiYWRnZXMtbGlzdF9fb3ZlcmZsb3cgdS1jb2wnO1xuICAgIGJhZGdlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYy1iYWRnZSBjLWJhZGdlX3NlY29uZGFyeSBjLWJhZGdlX3NtXCI+KyR7d3JhcHBlZEl0ZW1zLmxlbmd0aH08L2Rpdj5gO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICBsZXQgbmV3SXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWRnZXMtbGlzdF9faXRlbTpub3QoLicgKyBoaWRkZW5DbGFzcyArJyk6bm90KCcgKyBvdmVyZmxvdyArICcpJyk7XG5cbiAgICBpZiAoYmFkZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoLTFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkge1xuICAgICAgbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoLTFdLmNsYXNzTGlzdC5hZGQoaGlkZGVuQ2xhc3MpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgYmFkZ2UgPSBsaXN0LnF1ZXJ5U2VsZWN0b3Iob3ZlcmZsb3cpO1xuXG4gICAgaWYgKGJhZGdlKSB7XG4gICAgICBsaXN0LnJlbW92ZUNoaWxkKGJhZGdlKTtcbiAgICB9XG5cbiAgICBsZXQgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWRnZXMtbGlzdF9faXRlbScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5DbGFzcyk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZSAodGFyZ2V0OiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcclxuICAgIGlmIChzb3VyY2Vba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkgT2JqZWN0LmFzc2lnbihzb3VyY2Vba2V5XSwgbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKSlcclxuICB9XHJcblxyXG4gIE9iamVjdC5hc3NpZ24odGFyZ2V0IHx8IHt9LCBzb3VyY2UpO1xyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlckZvcm1hdCAobnVtYmVyOiBudW1iZXJ8c3RyaW5nLCBkZWNpbWFsczogbnVtYmVyLCBkZWNQb2ludDogc3RyaW5nLCB0aG91c2FuZHNTZXA6IHN0cmluZykge1xuICBudW1iZXIgPSAobnVtYmVyICsgJycpLnJlcGxhY2UoL1teMC05K1xcLUVlLl0vZywgJycpO1xuICB2YXIgbiA9ICFpc0Zpbml0ZSgrbnVtYmVyKSA/IDAgOiArbnVtYmVyO1xuICB2YXIgcHJlYyA9ICFpc0Zpbml0ZSgrZGVjaW1hbHMpID8gMCA6IE1hdGguYWJzKGRlY2ltYWxzKTtcbiAgdmFyIHNlcCA9ICh0eXBlb2YgdGhvdXNhbmRzU2VwID09PSAndW5kZWZpbmVkJykgPyAnLCcgOiB0aG91c2FuZHNTZXA7XG4gIHZhciBkZWMgPSAodHlwZW9mIGRlY1BvaW50ID09PSAndW5kZWZpbmVkJykgPyAnLicgOiBkZWNQb2ludDtcbiAgdmFyIHMgPSAnJztcblxuICB2YXIgdG9GaXhlZEZpeCA9IGZ1bmN0aW9uIChuLCBwcmVjKSB7XG4gICAgaWYgKCgnJyArIG4pLmluZGV4T2YoJ2UnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiArKE1hdGgucm91bmQobiArICdlKycgKyBwcmVjKSArICdlLScgKyBwcmVjKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJyID0gKCcnICsgbikuc3BsaXQoJ2UnKVxuICAgICAgdmFyIHNpZyA9ICcnXG4gICAgICBpZiAoK2FyclsxXSArIHByZWMgPiAwKSB7XG4gICAgICAgIHNpZyA9ICcrJ1xuICAgICAgfVxuICAgICAgcmV0dXJuICgrKE1hdGgucm91bmQoK2FyclswXSArICdlJyArIHNpZyArICgrYXJyWzFdICsgcHJlYykpICsgJ2UtJyArIHByZWMpKS50b0ZpeGVkKHByZWMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEB0b2RvOiBmb3IgSUUgcGFyc2VGbG9hdCgwLjU1KS50b0ZpeGVkKDApID0gMDtcbiAgcyA9IChwcmVjID8gdG9GaXhlZEZpeChuLCBwcmVjKS50b1N0cmluZygpIDogJycgKyBNYXRoLnJvdW5kKG4pKS5zcGxpdCgnLicpO1xuICBpZiAoc1swXS5sZW5ndGggPiAzKSB7XG4gICAgc1swXSA9IHNbMF0ucmVwbGFjZSgvXFxCKD89KD86XFxkezN9KSsoPyFcXGQpKS9nLCBzZXApXG4gIH1cbiAgaWYgKChzWzFdIHx8ICcnKS5sZW5ndGggPCBwcmVjKSB7XG4gICAgc1sxXSA9IHNbMV0gfHwgJydcbiAgICBzWzFdICs9IG5ldyBBcnJheShwcmVjIC0gc1sxXS5sZW5ndGggKyAxKS5qb2luKCcwJylcbiAgfVxuXG4gIHJldHVybiBzLmpvaW4oZGVjKVxufVxuIiwiaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgdmVydGljYWw6ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIGhvcml6b250YWw6ICdsZWZ0JyB8ICdyaWdodCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb25FbCAoZWw6IEhUTUxFbGVtZW50LCByZWY6IEhUTUxFbGVtZW50LCBwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgZWwuc3R5bGUudG9wID0gJyc7XG4gIGVsLnN0eWxlLnJpZ2h0ID0gJyc7XG4gIGVsLnN0eWxlLmJvdHRvbSA9ICcnO1xuICBlbC5zdHlsZS5sZWZ0ID0gJyc7XG5cbiAgbGV0IHJlZkRpbXMgPSByZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBlbERpbXMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBpZiAocG9zaXRpb24uaG9yaXpvbnRhbCA9PT0gJ2xlZnQnKSB7XG4gICAgZWwuc3R5bGUubGVmdCA9IGAke3JlZkRpbXMubGVmdCAtIGVsRGltcy5sZWZ0fXB4YDtcbiAgICBlbC5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgfSBlbHNlIGlmIChwb3NpdGlvbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgZWwuc3R5bGUubGVmdCA9IGAke3JlZkRpbXMubGVmdCAtIGVsRGltcy5sZWZ0IC0gZWxEaW1zLndpZHRoICsgcmVmRGltcy53aWR0aH1weGA7XG4gICAgZWwuc3R5bGUucmlnaHQgPSAnYXV0byc7XG4gIH1cblxuICBpZiAocG9zaXRpb24udmVydGljYWwgPT09ICd0b3AnKSB7XG4gICAgZWwuc3R5bGUudG9wID0gYCR7cmVmRGltcy50b3AgLSBlbERpbXMudG9wfXB4YDtcbiAgICBlbC5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgZWwuc3R5bGUudG9wID0gYCR7cmVmRGltcy50b3AgLSBlbERpbXMudG9wIC0gZWxEaW1zLmhlaWdodCArIHJlZkRpbXMuaGVpZ2h0fXB4YDtcbiAgICBlbC5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENvbnRyb2xTdGF0ZSAoY29udHJvbDogSFRNTElucHV0RWxlbWVudHxIVE1MQnV0dG9uRWxlbWVudHxIVE1MRWxlbWVudCwgc3RhdGU6IHN0cmluZywgZGlzYWJsZWRDbGFzczogc3RyaW5nKSB7XHJcbiAgbGV0IGlucHV0c0FycmF5ID0gWydidXR0b24nLCAnaW5wdXQnXTtcclxuXHJcbiAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgY2FzZSAnZGVmYXVsdCc6XHJcbiAgICAgIGNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShkaXNhYmxlZENsYXNzKTtcclxuICAgICAgaWYgKGlucHV0c0FycmF5LmluZGV4T2YoY29udHJvbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgY29udHJvbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ2Rpc2FibGVkJzpcclxuICAgICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKGRpc2FibGVkQ2xhc3MpO1xyXG5cclxuICAgICAgaWYgKGlucHV0c0FycmF5LmluZGV4T2YoY29udHJvbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgY29udHJvbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcbiIsImludGVyZmFjZSBQYXJhbXMge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RGF0YSAoZWw6IEVsZW1lbnQsIGRhdGE6IHt9LCBwYXJhbXM6IFBhcmFtcyA9IHt9KSB7XG4gIGxldCBpbnB1dHNBcnJheSA9IFsnaW5wdXQnXTtcblxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgIGxldCBwdWJsaWNLZXkgPSBrZXkucmVwbGFjZSgnXycsICctJyk7XG4gICAgbGV0IGZpZWxkID0gZWwucXVlcnlTZWxlY3RvcihgW2RhdGEtJHtwdWJsaWNLZXl9XWApO1xuXG4gICAgaWYgKCFmaWVsZCkgY29udGludWU7XG5cbiAgICBpZiAoaW5wdXRzQXJyYXkuaW5kZXhPZihmaWVsZC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICBmaWVsZC52YWx1ZSA9IGRhdGFba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuaW5uZXJIVE1MID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNhbWVsQ2FzZVRvRGFzaCBmcm9tICd1dGlsaXR5L2NhbWVsQ2FzZVRvRGFzaCc7XHJcbmltcG9ydCBtZXJnZSBmcm9tICd1dGlsaXR5L21lcmdlJztcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldERhdGFPcHRpb25zIChvcHRpb25zOiBPcHRpb25zLCBlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gIGxldCBuZXdPcHRpb25zOiBPcHRpb25zID0ge307XHJcblxyXG4gIGZvciAobGV0IG9wdGlvbiBpbiBvcHRpb25zKSB7XHJcbiAgICBsZXQgZGF0YU9wdGlvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKGBkYXRhLSR7Y2FtZWxDYXNlVG9EYXNoKG9wdGlvbil9YCkgYXMgc3RyaW5nIHwgYm9vbGVhbjtcclxuXHJcbiAgICBpZiAoIWRhdGFPcHRpb24pIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChkYXRhT3B0aW9uID09PSAndHJ1ZScgfHwgZGF0YU9wdGlvbiA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICBkYXRhT3B0aW9uID0gZGF0YU9wdGlvbiA9PT0gJ3RydWUnO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld09wdGlvbnNbb3B0aW9uXSA9IGRhdGFPcHRpb247XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVyZ2Uob3B0aW9ucywgbmV3T3B0aW9ucyk7XHJcbn1cclxuIiwiaW1wb3J0IG51bWJlckZvcm1hdCBmcm9tICd1dGlsaXR5L251bWJlckZvcm1hdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFByaWNlRm9ybWF0IChwcmljZTogc3RyaW5nIHwgbnVtYmVyLCBzdGF0ZTogJ2NsZWFuJyB8ICdmb3JtYXR0ZWQnKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgaWYgKHN0YXRlID09PSAnY2xlYW4nKSB7XG4gICAgcHJpY2UgPSBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoJyQnLCAnJykucmVwbGFjZSgnLCcsICcuJykucmVwbGFjZSgnICcsICcnKTtcbiAgICBwcmljZSA9IHByaWNlLmxlbmd0aCA+IDAgPyBwYXJzZUZsb2F0KHByaWNlKSA6IHByaWNlO1xuICB9IGVsc2UgaWYgKHN0YXRlID09PSAnZm9ybWF0dGVkJykge1xuICAgIHByaWNlID0gc2V0UHJpY2VGb3JtYXQocHJpY2UsICdjbGVhbicpXG4gICAgcHJpY2UgPSBwcmljZS50b1N0cmluZygpLmxlbmd0aCA+IDAgPyBwcmljZSA6IDA7XG4gICAgcHJpY2UgPSAnJCcgKyBudW1iZXJGb3JtYXQocHJpY2UsIDIsICcsJywgJyAnKTtcbiAgfVxuXG4gIHJldHVybiBwcmljZTtcbn1cbiIsImltcG9ydCBudW1iZXJGb3JtYXQgZnJvbSAndXRpbGl0eS9udW1iZXJGb3JtYXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRRdWFudGl0eUZvcm1hdCAocXVhbnRpdHk6IHN0cmluZyB8IG51bWJlciwgc3RhdGU6ICdjbGVhbicgfCAnZm9ybWF0dGVkJywgbWVhc3VyZTogc3RyaW5nKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgaWYgKHN0YXRlID09PSAnY2xlYW4nKSB7XG4gICAgcXVhbnRpdHkgPSBxdWFudGl0eS50b1N0cmluZygpLnJlcGxhY2UobWVhc3VyZSwgJycpLnJlcGxhY2UoJywnLCAnLicpLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgcXVhbnRpdHkgPSBxdWFudGl0eS5sZW5ndGggPiAwID8gcGFyc2VGbG9hdChxdWFudGl0eSkgOiBxdWFudGl0eTtcbiAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ2Zvcm1hdHRlZCcpIHtcbiAgICBxdWFudGl0eSA9IHNldFF1YW50aXR5Rm9ybWF0KHF1YW50aXR5LCAnY2xlYW4nLCBtZWFzdXJlKTtcbiAgICBxdWFudGl0eSA9IHF1YW50aXR5LnRvU3RyaW5nKCkubGVuZ3RoID4gMCA/IHF1YW50aXR5IDogMDtcbiAgICBxdWFudGl0eSA9IG51bWJlckZvcm1hdChxdWFudGl0eSwgMiwgJywnLCAnICcpICsgbWVhc3VyZTtcbiAgfVxuXG4gIHJldHVybiBxdWFudGl0eTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFByb2dyZXNzU3RhdHVzIChlbDogSFRNTEVsZW1lbnQsIG5ld1N0YXR1czogc3RyaW5nLCBzdGF0dXNNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7XG4gIGZvciAobGV0IHN0YXR1cyBpbiBzdGF0dXNNYXApIHtcbiAgICBpZiAoc3RhdHVzICE9PSBuZXdTdGF0dXMpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoc3RhdHVzTWFwW3N0YXR1c10pO1xuICAgIH1cblxuICAgIGVsLmNsYXNzTGlzdC5hZGQoc3RhdHVzTWFwW25ld1N0YXR1c10pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVUkwgKHRlbXBsYXRlOiBzdHJpbmcsIGRhdGE6IHt9KSB7XG4gIGxldCByZXN1bHQgPSB0ZW1wbGF0ZTtcblxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihgPCUgJHtrZXl9ICU+YCkgPiAtMSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYDwlICR7a2V5fSAlPmAsIGRhdGFba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlIChmOiBGdW5jdGlvbiwgd2FpdDogbnVtYmVyKSB7XHJcbiAgbGV0IGlzVGhyb3R0bGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxldCBoYXNUcmFpbGluZ0NhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBsZXQgbGFzdENvbnRleHQ6IGFueTtcclxuICBsZXQgbGFzdEFyZ3M6IGFueTtcclxuICBsZXQgbGFzdFJlc3VsdDogYW55O1xyXG5cclxuICBjb25zdCBpbnZva2VGdW5jID0gKGNvbnRleHQ6IGFueSwgYXJnczogYW55KSA9PiB7XHJcbiAgICBsYXN0UmVzdWx0ID0gZi5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIGlzVGhyb3R0bGluZyA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlzVGhyb3R0bGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGhhc1RyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgIGludm9rZUZ1bmMobGFzdENvbnRleHQsIGxhc3RBcmdzKTtcclxuXHJcbiAgICAgICAgbGFzdENvbnRleHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGFzdEFyZ3MgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaGFzVHJhaWxpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sIHdhaXQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuICAgIGlmICghaXNUaHJvdHRsaW5nKSB7XHJcbiAgICAgIGludm9rZUZ1bmModGhpcywgYXJncyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYXNUcmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICBsYXN0Q29udGV4dCA9IHRydWU7XHJcbiAgICAgIGxhc3RBcmdzID0gYXJncztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBoYXNWYWx1ZUluQXR0cmlidXRlIGZyb20gJ3V0aWxpdHkvaGFzVmFsdWVJbkF0dHJpYnV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2xzTGlzdCAoZWw6IEhUTUxFbGVtZW50LCBsaXN0OiBIVE1MRWxlbWVudCkge1xuICBsZXQgaGlkZGVuQ2xhc3MgPSAndS1oaWRkZW4nO1xuICBsZXQgc3RhdGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSB8fCAnJztcbiAgbGV0IGNvbnRyb2xzID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kaXNwbGF5LXN0YXRlXScpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzVmFsdWVJbkF0dHJpYnV0ZShjb250cm9sc1tpXSwgc3RhdGUsICdkYXRhLWRpc3BsYXktc3RhdGUnKSkge1xuICAgICAgY29udHJvbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xzW2ldLmNsYXNzTGlzdC5hZGQoaGlkZGVuQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmcgKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB1cmw6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG4gIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKCcoWz8mXSknICsga2V5ICsgJz0uKj8oJnwjfCQpKC4qKScsICdnaScpO1xuICBsZXQgaGFzaDtcblxuICBpZiAocmUudGVzdCh1cmwpKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1cmwucmVwbGFjZShyZSwgJyQxJyArIGtleSArICc9JyArIHZhbHVlICsgJyQyJDMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFzaCA9IHVybC5zcGxpdCgnIycpO1xuICAgICAgdXJsID0gaGFzaFswXS5yZXBsYWNlKHJlLCAnJDEkMycpLnJlcGxhY2UoLygmfFxcPykkLywgJycpO1xuXG4gICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcbiAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc2VwYXJhdG9yID0gdXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XG4gICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICB1cmwgPSBoYXNoWzBdICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbCkge1xuICAgICAgICB1cmwgKz0gJyMnICsgaGFzaFsxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=