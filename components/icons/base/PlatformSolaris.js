'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props;
      var className = _props.className;
      var colorIndex = _props.colorIndex;
      var _props2 = this.props;
      var a11yTitle = _props2.a11yTitle;
      var size = _props2.size;
      var responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-solaris', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-solaris');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M10.1802464,4.7643196 C9.30783675,4.45498283 8.90876565,3.63737375 8.90876565,3.63737375 C8.84089823,3.54283936 8.5558284,2.85816509 8.5562284,2.85789842 C8.25689174,2.06482294 7.71088568,1.82242025 7.71088568,1.82242025 C7.03954488,1.42788253 6.21046901,1.41801576 6.21046901,1.41801576 C6.24620274,1.4132157 6.70394115,1.62521806 6.70394115,1.62521806 C7.78395316,2.13989044 7.46048289,3.3691041 7.46048289,3.3691041 C7.39021545,3.70004111 7.37381526,4.33911488 7.37381526,4.33911488 C7.35914843,5.19085768 7.96582184,5.60659563 8.03302259,5.65099612 C8.3674263,5.44779386 8.7239636,5.26739186 9.09756775,5.1147235 C9.45570506,4.96832187 9.81744242,4.85138724 10.1802464,4.7643196 M5.59699552,8.17022411 C4.76098623,8.56862854 3.90111001,8.27249192 3.90111001,8.27249192 C3.78604207,8.25382504 3.10043445,7.97115524 3.10043445,7.97115524 C2.32802587,7.62208469 1.77081968,7.83648707 1.77081968,7.83648707 C1.0168113,8.03182258 0.423738042,8.61142902 0.423738042,8.61142902 C0.445338282,8.58276203 0.919076879,8.40889343 0.919076879,8.40889343 C2.04668941,8.00915566 2.68682985,9.10716786 2.68682985,9.10716786 C2.87149857,9.39063767 3.31177013,9.85410949 3.31177013,9.85410949 C3.9033767,10.4670496 4.62685141,10.3319815 4.70538562,10.3161146 C4.79818665,9.93531039 4.9228547,9.55610618 5.0791231,9.18383538 C5.2288581,8.82703141 5.40166002,8.48876099 5.59699552,8.17022411 M4.76458627,13.8196202 C4.45511617,14.6924299 3.63764042,15.0916344 3.63764042,15.0916344 C3.54310603,15.1592351 2.85843176,15.4444383 2.85816509,15.4443049 C2.06508961,15.7436416 1.82268692,16.2895143 1.82268692,16.2895143 C1.42788253,16.9605885 1.41854909,17.7897977 1.41854909,17.7897977 C1.41361571,17.7540639 1.62535139,17.2963255 1.62535139,17.2963255 C2.14002378,16.2163135 3.36950411,16.5401838 3.36950411,16.5401838 C3.70004111,16.6097846 4.33898154,16.6264514 4.33898154,16.6264514 C5.19085768,16.6415182 5.6068623,16.0343115 5.65099612,15.9676441 C5.4479272,15.6325737 5.26765853,15.2763031 5.1151235,14.9026989 C4.96832187,14.5444283 4.8512539,14.1826909 4.76458627,13.8196202 M8.17075745,18.4032711 C8.56889521,19.2391471 8.27315859,20.0994233 8.27315859,20.0994233 C8.25435838,20.2138246 7.97155524,20.9000989 7.97128857,20.8999656 C7.62195136,21.6722408 7.83675374,22.2297137 7.83675374,22.2297137 C8.03195591,22.9835887 8.61169569,23.5767953 8.61169569,23.5767953 C8.5830287,23.5549284 8.40902677,23.0813231 8.40902677,23.0813231 C8.00942233,21.9535773 9.1077012,21.3135702 9.1077012,21.3135702 C9.39103768,21.1287681 9.85464283,20.6884965 9.85464283,20.6884965 C10.4673163,20.09689 10.3325148,19.3735486 10.3163813,19.2951477 C9.9357104,19.2019467 9.55610618,19.077412 9.18370204,18.9211436 C8.82703141,18.7716752 8.48876099,18.5984733 8.17075745,18.4032711 M13.8200202,19.2359471 C14.6929633,19.5448838 15.0917677,20.3626263 15.0917677,20.3626263 C15.1596351,20.4571606 15.4445716,21.1421016 15.4441716,21.1423682 C15.7435083,21.9353104 16.289781,22.1777131 16.289781,22.1777131 C16.9609885,22.5727841 17.7900643,22.5822509 17.7900643,22.5822509 C17.7545973,22.5869176 17.2967255,22.3749153 17.2967255,22.3749153 C16.2163135,21.8602429 16.5403171,20.6311626 16.5403171,20.6311626 C16.6103179,20.3000922 16.6264514,19.6612851 16.6264514,19.6612851 C16.6416516,18.8092757 16.0344448,18.393271 15.9680441,18.3492705 C15.6328404,18.5524728 15.2767031,18.7326081 14.9026989,18.8852765 C14.5448283,19.0319448 14.1833576,19.1488794 13.8200202,19.2359471 M18.4035378,15.8299092 C19.2394138,15.4312381 20.09969,15.7275081 20.09969,15.7275081 C20.2146246,15.7463083 20.9002322,16.0291114 20.8999656,16.0293781 C21.6726408,16.3783153 22.2299803,16.1636463 22.2299803,16.1636463 C22.984122,15.9681774 23.5769286,15.3887043 23.5769286,15.3887043 C23.5551951,15.4175046 23.0818565,15.5911066 23.0818565,15.5911066 C21.9538439,15.990711 21.3135702,14.8928321 21.3135702,14.8928321 C21.1287681,14.6093623 20.6887632,14.1460238 20.6887632,14.1460238 C20.0970233,13.532817 19.3736819,13.6680185 19.2952811,13.6838854 C19.2023467,14.0645563 19.0775453,14.4441605 18.9214102,14.816298 C18.7720752,15.1731019 18.5988733,15.5113723 18.4035378,15.8299092 M19.2364804,10.1802464 C19.5455505,9.30757008 20.3628929,8.90849898 20.3628929,8.90849898 C20.4574273,8.84063156 21.1426349,8.55542839 21.1429016,8.55596173 C21.9351771,8.25662507 22.1777131,7.71101901 22.1777131,7.71101901 C22.5726508,7.03927821 22.5826509,6.21046901 22.5826509,6.21046901 C22.587051,6.24593607 22.3753153,6.70367449 22.3753153,6.70367449 C21.8606429,7.78368649 20.6312959,7.46021622 20.6312959,7.46021622 C20.3003589,7.39034878 19.6615518,7.37368193 19.6615518,7.37368193 C18.809409,7.35848176 18.393671,7.96582184 18.3492705,8.03235592 C18.5527395,8.36729297 18.7330081,8.72383026 18.8854098,9.09756775 C19.0323448,9.45557173 19.1488794,9.81730908 19.2364804,10.1802464 M15.8303092,5.59659552 C15.4316381,4.76111957 15.7273747,3.90084334 15.7273747,3.90084334 C15.7464416,3.78604207 16.0289781,3.09990111 16.0296448,3.10030111 C16.378582,2.32789253 16.1639129,1.77055301 16.1639129,1.77055301 C15.9681774,1.01641129 15.3892377,0.423471372 15.3892377,0.423471372 C15.417638,0.445338282 15.5916399,0.918810209 15.5916399,0.918810209 C15.9909777,2.04642274 14.8928321,2.68669652 14.8928321,2.68669652 C14.609629,2.87163191 14.1464238,3.31150346 14.1464238,3.31150346 C13.5330837,3.9029767 13.6684185,4.62658474 13.6844187,4.70525228 C14.0649563,4.79791998 14.4445605,4.92298803 14.8164313,5.07885643 C15.1732353,5.22819142 15.511639,5.40139335 15.8301759,5.59659552 M7.58741764,5.98366649 C6.66234069,6.02633363 5.98473316,5.41926021 5.98473316,5.41926021 C5.88633207,5.35752619 5.36419294,4.83058701 5.36432627,4.830187 C4.78831987,4.2085801 4.19124657,4.19017989 4.19124657,4.19017989 C3.42070467,4.07711197 2.64896277,4.38084868 2.64896277,4.38084868 C2.68016311,4.36271514 3.18416871,4.38658207 3.18416871,4.38658207 C4.37844865,4.45618285 4.5417838,5.71699686 4.5417838,5.71699686 C4.60205113,6.04966722 4.82752031,6.6478072 4.82752031,6.6478072 C5.13472372,7.44248269 5.85366504,7.5987511 5.93233258,7.61448461 C6.16580184,7.30021445 6.42793809,6.99874443 6.71660796,6.71660796 C6.99314437,6.44580495 7.2839476,6.20113557 7.58741764,5.98366649 M4.6256514,10.8662541 C4.00151113,11.5502617 3.0933677,11.6003956 3.0933677,11.6003956 C2.97989978,11.6261292 2.23829154,11.6227958 2.23829154,11.6223958 C1.39108212,11.5899954 0.955743953,11.9990667 0.955743953,11.9990667 C0.331337015,12.4642718 0,13.2248136 0,13.2248136 C0.00946677185,13.1897466 0.382670919,12.8502761 0.382670919,12.8502761 C1.27641418,12.0552006 2.2833587,12.8309426 2.2833587,12.8309426 C2.56109512,13.0237447 3.14363493,13.2873476 3.14363493,13.2873476 C3.92271025,13.6320181 4.5417838,13.234147 4.60845121,13.1896132 C4.5513839,12.8021422 4.52338359,12.4037378 4.52805031,12.0002667 C4.53218369,11.612929 4.56498406,11.2343915 4.6256514,10.8662541 M5.98393315,16.4127157 C6.02646696,17.3377926 5.41952688,18.0155335 5.41952688,18.0155335 C5.35752619,18.1140679 4.83058701,18.6360737 4.83032034,18.6359404 C4.2085801,19.2119468 4.19004656,19.8090201 4.19004656,19.8090201 C4.07711197,20.5794287 4.38084868,21.3513039 4.38084868,21.3513039 C4.36284848,21.3201036 4.38658207,20.8162313 4.38658207,20.8162313 C4.45631618,19.6216847 5.71673019,19.4584829 5.71673019,19.4584829 C6.04966722,19.3982155 6.6478072,19.1728797 6.6478072,19.1728797 C7.44248269,18.8658096 7.59901777,18.1466016 7.61461794,18.0680674 C7.30021445,17.8343315 6.9990111,17.5721952 6.7167413,17.2836587 C6.44580495,17.007389 6.2012689,16.7163191 5.98393315,16.4127157 M10.8663874,19.3746153 C11.550395,19.9987555 11.6002622,20.906899 11.6002622,20.906899 C11.6262625,21.0203669 11.6227958,21.7622418 11.6225291,21.7622418 C11.5902621,22.6090512 11.9993333,23.0446561 11.9993333,23.0446561 C12.4644052,23.6693297 13.2248136,24 13.2248136,24 C13.1900132,23.9905332 12.8504094,23.6175958 12.8504094,23.6175958 C12.0552006,22.7237192 12.8310759,21.7170413 12.8310759,21.7170413 C13.023878,21.4391715 13.2873476,20.8566317 13.2873476,20.8566317 C13.6320181,20.0775564 13.2340137,19.4584829 13.1900132,19.3916821 C12.8022756,19.4491494 12.4038712,19.4767497 12.0001333,19.4722164 C11.6131957,19.4679496 11.2345248,19.4354159 10.8663874,19.3746153 M16.4129824,18.0166002 C17.3380593,17.9740664 18.0155335,18.5810065 18.0155335,18.5810065 C18.1140679,18.6427405 18.6363404,19.1696797 18.6359404,19.1699463 C19.2119468,19.7916866 19.8092868,19.8104868 19.8092868,19.8104868 C20.5798287,19.923288 21.3514372,19.6195513 21.3514372,19.6195513 C21.3202369,19.6372849 20.8162313,19.6136846 20.8162313,19.6136846 C19.621818,19.5439505 19.4584829,18.2834031 19.4584829,18.2834031 C19.3983489,17.9505995 19.1727464,17.3525928 19.1727464,17.3525928 C18.8656763,16.557784 18.1466016,16.4012489 18.0682008,16.3855154 C17.8345982,16.7001856 17.5723286,17.0013889 17.2836587,17.2835254 C17.007389,17.5544617 16.7164524,17.7989978 16.4129824,18.0166002 M19.3748819,13.1341459 C19.9988889,12.4497383 20.9070323,12.3998711 20.9070323,12.3998711 C21.0206336,12.3740042 21.7625085,12.3772042 21.7625085,12.3780042 C22.6093179,12.4098712 23.0446561,12.0008 23.0446561,12.0008 C23.669463,11.5355948 24.0004,10.7755864 24.0004,10.7755864 C23.9907999,10.8102534 23.6177291,11.1498572 23.6177291,11.1498572 C22.7239858,11.9451994 21.7167746,11.1693241 21.7167746,11.1693241 C21.4391715,10.9763886 20.8568984,10.7130524 20.8568984,10.7130524 C20.0775564,10.3682485 19.4584829,10.7659863 19.3919488,10.8102534 C19.4491494,11.1978578 19.4767497,11.5965289 19.472083,12 C19.4683496,12.3869376 19.4354159,12.7654752 19.3748819,13.1341459 M18.0167335,7.5872843 C17.973933,6.66220736 18.5808731,5.98473316 18.5808731,5.98473316 C18.6430071,5.88619874 19.1699463,5.36379293 19.170213,5.3640596 C19.7916866,4.78831987 19.8104868,4.19124657 19.8104868,4.19124657 C19.9231547,3.42030467 19.619818,2.64896277 19.619818,2.64896277 C19.6375515,2.68002978 19.6136846,3.18416871 19.6136846,3.18416871 C19.5439505,4.37844865 18.2835365,4.54165046 18.2835365,4.54165046 C17.9505995,4.6019178 17.3527261,4.82752031 17.3527261,4.82752031 C16.557784,5.13445705 16.4013822,5.85366504 16.3853821,5.93206591 C16.7000522,6.16553517 17.0013889,6.42820476 17.2835254,6.71647463 C17.5547284,6.9928777 17.7989978,7.28354759 18.0167335,7.5872843 M13.1341459,4.62551806 C12.450005,4.00164446 12.3997378,3.09323437 12.3997378,3.09323437 C12.3742708,2.97963311 12.3773375,2.23789153 12.3778709,2.23789153 C12.4101379,1.39094879 12.0012,0.955743953 12.0012,0.955743953 C11.5358615,0.330803676 10.7757197,0 10.7757197,0 C10.8103868,0.00946677185 11.1499906,0.382537584 11.1499906,0.382537584 C11.9451994,1.27654752 11.1693241,2.2833587 11.1693241,2.2833587 C10.976522,2.56122846 10.713319,3.14336826 10.713319,3.14336826 C10.3681152,3.92271025 10.766253,4.54165046 10.8103868,4.60858454 C11.1979911,4.5509839 11.5965289,4.52365026 12,4.52818365 C12.3869376,4.53191702 12.7656085,4.56485072 13.1340126,4.62551806', stroke: 'none' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformSolaris';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];