import React from 'react';
import Tree from './tree';
import Node from './node';

class UITree extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.init(props);

    this.dragStart = this.dragStart.bind(this);
    this.drag = this.drag.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if(!this._updated) this.setState(this.init(nextProps));
    else this._updated = false;
  }

  init(props) {
    var tree = new Tree(props.tree);
    tree.isNodeCollapsed = props.isNodeCollapsed;
    tree.renderNode = props.renderNode;
    tree.changeNodeCollapsed = props.changeNodeCollapsed;
    tree.updateNodesPosition();

    return {
      tree: tree,
      dragging: {
        id: null,
        x: null,
        y: null,
        w: null,
        h: null
      }
    };
  }

  getDraggingDom() {
    var tree = this.state.tree;
    var dragging = this.state.dragging;

    if(dragging && dragging.id) {
      var draggingIndex = tree.getIndex(dragging.id);
      var draggingStyles = {
        top: dragging.y,
        left: dragging.x,
        width: dragging.w
      };

      return (
        <div className="m-draggable" style={draggingStyles}>
          <Node
            tree={tree}
            index={draggingIndex}
            paddingLeft={this.props.paddingLeft}
            showCollapse={this.props.showCollapse}
          />
        </div>
      );
    }

    return null;
  }

  render() {
    var tree = this.state.tree;
    var dragging = this.state.dragging;
    var draggingDom = this.getDraggingDom();

    const style = !this.props.shouldRenderRootNode ? { top: '-36px'  } : {}

    return (
      <div className="m-tree" style={style}>
        {draggingDom}
        <Node
          tree={tree}
          index={tree.getIndex(1)}
          key={1}
          paddingLeft={this.props.paddingLeft}
          onDragStart={this.dragStart}
          onCollapse={this.toggleCollapse}
          dragging={dragging && dragging.id}
          showCollapse={this.props.showCollapse}
          shouldRenderRootNode={this.props.shouldRenderRootNode}
        />
      </div>
    );
  }

  dragStart(id, dom, e) {
    const { onDragStart } = this.props;
    this.dragging = {
      id: id,
      w: dom.offsetWidth,
      h: dom.offsetHeight,
      x: dom.offsetLeft,
      y: dom.offsetTop
    };

    this._startX = dom.offsetLeft;
    this._startY = dom.offsetTop;
    this._offsetX = e.clientX;
    this._offsetY = e.clientY;
    this._start = true;

    // create a snapshot of the tree to compare
    const currentNode = this.getNode(id);
    const parent = this.getNode(currentNode.parent);

    if(parent && parent.children) {
      this.setState({
        siblings: [currentNode.prev, currentNode.next]
      });
    } else {
      this.setState({
        siblings: []
      });
    }

    onDragStart && onDragStart(this.getNode(id));

    window.addEventListener('mousemove', this.drag);
    window.addEventListener('mouseup', this.dragEnd);
  }

  // oh
  drag(e) {

    if(this._start) {
      this.setState({
        dragging: this.dragging
      });
      this._start = false;
    }

    const {tree, dragging} = this.state;
    const {paddingLeft} = this.props;

    let newIndex = null;

    let index = tree.getIndex(dragging.id);
    const collapsed = index.node.collapsed;

    const {_startX, _startY, _offsetX, _offsetY} = this;

    const pos = {
      x: _startX + e.clientX - _offsetX,
      y: _startY + e.clientY - _offsetY
    };
    dragging.x = pos.x;
    dragging.y = pos.y;

    let diffX = dragging.x - paddingLeft/2 - (index.left-2) * paddingLeft;
    let diffY = dragging.y - dragging.h/2 - (index.top-2) * dragging.h;

    if(diffX < 0) { // left
      if(index.parent && !index.next) {
        newIndex = tree.move(index.id, index.parent, 'after');
      }
    } else if(diffX > paddingLeft) { // right
      if(index.prev) {
        var prevNode = tree.getIndex(index.prev).node;
        if(!prevNode.collapsed && !prevNode.leaf) {
          newIndex = tree.move(index.id, index.prev, 'append');
        }
      }
    }

    if(newIndex) {
      index = newIndex;
      newIndex.node.collapsed = collapsed;
      dragging.id = newIndex.id;
    }

    if(diffY < 0) { // up
      var above = tree.getNodeByTop(index.top-1);
      newIndex = tree.move(index.id, above.id, 'before');
    } else if(diffY > dragging.h) { // down
      if(index.next) {
        var below = tree.getIndex(index.next);
        if(below.children && below.children.length && !below.node.collapsed) {
          newIndex = tree.move(index.id, index.next, 'prepend');
        } else {
          newIndex = tree.move(index.id, index.next, 'after');
        }
      } else {
        var below = tree.getNodeByTop(index.top+index.height);
        if(below && below.parent !== index.id) {
          if(below.children && below.children.length) {
            newIndex = tree.move(index.id, below.id, 'prepend');
          } else {
            newIndex = tree.move(index.id, below.id, 'after');
          }
        }
      }
    }

    if(newIndex) {
      newIndex.node.collapsed = collapsed;
      dragging.id = newIndex.id;
    }

    this.setState({
      tree: tree,
      dragging: dragging
    });
  }

  dragEnd() {
    const { onDragEnd } = this.props;
    const { tree, dragging: { id } } = this.state;

    const currentNode = this.getNode(id);

    id && onDragEnd && onDragEnd(currentNode);

    // if tree has changed we only trigger change evt
    const parent = id && this.getNode(currentNode.parent);

    if (id && parent && parent.children &&
      (this.state.siblings[0] !== currentNode.prev || this.state.siblings[1] !== currentNode.next)) {
      this.change(tree, currentNode, parent);
    }

    this.setState({
      siblings: [],
      dragging: {
        id: null,
        x: null,
        y: null,
        w: null,
        h: null
      }
    });

    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('mouseup', this.dragEnd);
  }

  getNode(id) {
    const { tree } = this.state;
    return tree.getIndex(id);
  }

  change(tree, currentNode, parent) {
    this._updated = true;
    if(this.props.onChange) this.props.onChange(tree.obj, currentNode, parent);
  }

  toggleCollapse(nodeId) {
    var tree = this.state.tree;
    var index = tree.getIndex(nodeId);
    var node = index.node;

    if (this.props.onLazyloadNode && node.lazy && node.hasChildren){
      node.lazy = false;
      this.props.onLazyloadNode(node, function(nodes){
        nodes.map(newNode => {
          tree.append(newNode,nodeId);
        });
        this.makeToggleUpdate(node);
      }.bind(this));
    } else {
      this.makeToggleUpdate(node);
    }
  }

  makeToggleUpdate(node) {
    var tree = this.state.tree;
    node.collapsed = !node.collapsed;
    tree.updateNodesPosition();

    this.setState({
      tree: tree
    });

    this.change(tree);
  }
}

UITree.propTypes = {
  tree: React.PropTypes.object.isRequired,
  paddingLeft: React.PropTypes.number,
  renderNode: React.PropTypes.func.isRequired,
  onDragStart: React.PropTypes.func,
  onDragEnd: React.PropTypes.func,
  showCollapse: React.PropTypes.bool,
  shouldRenderRootNode: React.PropTypes.bool
};

UITree.defaultProps = {
  paddingLeft: 20,
  showCollapse: true,
  shouldRenderRootNode: true
};

export default UITree;
