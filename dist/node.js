'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UITreeNode = function (_React$Component) {
  _inherits(UITreeNode, _React$Component);

  function UITreeNode() {
    _classCallCheck(this, UITreeNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UITreeNode).call(this));

    _this.handleCollapse = _this.handleCollapse.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    return _this;
  }

  _createClass(UITreeNode, [{
    key: 'renderCollapse',
    value: function renderCollapse() {
      var index = this.props.index;

      var node = index.node;

      if (node.hasChildren || index.children && index.children.length) {
        var collapsed = index.node.collapsed;

        return _react2.default.createElement('span', {
          className: (0, _classnames2.default)('collapse', collapsed ? 'caret-right' : 'caret-down'),
          onMouseDown: function onMouseDown(e) {
            e.stopPropagation();
          },
          onClick: this.handleCollapse });
      }

      return null;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props;
      var index = _props.index;
      var tree = _props.tree;
      var dragging = _props.dragging;
      var paddingLeft = _props.paddingLeft;
      var onCollapse = _props.onCollapse;
      var onDragStart = _props.onDragStart;
      var shouldRenderRootNode = _props.shouldRenderRootNode;


      if (index.children && index.children.length) {
        var childrenStyles = {};
        if (index.node.collapsed) childrenStyles.display = 'none';
        childrenStyles['paddingLeft'] = (this.isRoot(index) && !shouldRenderRootNode ? 0 : paddingLeft) + 'px';

        return _react2.default.createElement(
          'div',
          { className: 'children', style: childrenStyles },
          index.children.map(function (child) {
            var childIndex = tree.getIndex(child);
            return _react2.default.createElement(UITreeNode, {
              tree: tree,
              index: childIndex,
              key: childIndex.id,
              dragging: dragging,
              paddingLeft: paddingLeft,
              onCollapse: onCollapse,
              onDragStart: onDragStart,
              shouldRenderRootNode: shouldRenderRootNode
            });
          })
        );
      }

      return null;
    }
  }, {
    key: 'renderInner',
    value: function renderInner() {
      var _props2 = this.props;
      var tree = _props2.tree;
      var node = _props2.index.node;
      var shouldRenderRootNode = _props2.shouldRenderRootNode;


      if (this.isRoot() && !shouldRenderRootNode) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'inner', ref: 'inner', onMouseDown: this.handleMouseDown },
        this.renderCollapse(),
        tree.renderNode(node)
      );
    }
  }, {
    key: 'isRoot',
    value: function isRoot() {
      var id = this.props.index.id;

      return id === 1 ? true : false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var id = _props3.index.id;
      var dragging = _props3.dragging;

      var styles = {};

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('m-node', {
            'placeholder': id === dragging
          }), style: styles },
        this.renderInner(),
        this.renderChildren()
      );
    }
  }, {
    key: 'handleCollapse',
    value: function handleCollapse(e) {
      e.stopPropagation();

      var _props4 = this.props;
      var nodeId = _props4.index.id;
      var onCollapse = _props4.onCollapse;

      if (this.props.onCollapse) onCollapse(nodeId);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      var nodeId = this.props.index.id;

      var dom = this.refs.inner;

      if (this.props.onDragStart) {
        this.props.onDragStart(nodeId, dom, e);
      }
    }
  }]);

  return UITreeNode;
}(_react2.default.Component);

exports.default = UITreeNode;