import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';


export default class UITreeNode extends React.Component {
  constructor() {
    super();

    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  renderCollapse() {
    const {index} = this.props;
    const node = index.node;

    if (node.hasChildren || (index.children && index.children.length)) {
      var collapsed = index.node.collapsed;

      return (
        <span
          className={cx('collapse', collapsed ? 'caret-right' : 'caret-down')}
          onMouseDown={function(e) {e.stopPropagation()}}
          onClick={this.handleCollapse}>
        </span>
      );
    }

    return null;
  }

  renderChildren() {
    const {showCollapse = true, index, tree, dragging, paddingLeft, onCollapse, onDragStart, shouldRenderRootNode} = this.props;

    if(index.children && index.children.length) {
      const childrenStyles = {};
      if(index.node.collapsed) childrenStyles.display = 'none';
      childrenStyles['paddingLeft'] = (this.isRoot(index) && ! shouldRenderRootNode ? 0 : paddingLeft  ) + 'px';

      return (
        <div className="children" style={childrenStyles}>
          {index.children.map((child) => {
            var childIndex = tree.getIndex(child);
            return (
              <UITreeNode
                tree={tree}
                index={childIndex}
                key={childIndex.id}
                dragging={dragging}
                paddingLeft={paddingLeft}
                onCollapse={onCollapse}
                onDragStart={onDragStart}
                showCollapse={showCollapse}
                shouldRenderRootNode={shouldRenderRootNode}
              />
            );
          })}
        </div>
      );
    }

    return null;
  }

  renderInner(){
    const {tree, index: {node}, showCollapse = true, shouldRenderRootNode} = this.props;

    if( this.isRoot() && ! shouldRenderRootNode ){
      return null;
    }

    return(
        <div className="inner" ref="inner" onMouseDown={this.handleMouseDown}>
          {showCollapse && this.renderCollapse()}
          {tree.renderNode(node)}
        </div>
     )
  }

  isRoot(){
    const {index : {id}} = this.props;
    return id === 1 ? true : false;
  }

  render() {
    const { index : { id }, dragging } = this.props;
    var styles = {};

    return (
      <div className={cx('m-node', {
        'placeholder': id === dragging
      })} style={styles}>
        {this.renderInner()}
        {this.renderChildren()}
      </div>
    );
  }

  handleCollapse(e) {
    e.stopPropagation();

    const {index : {id: nodeId}, onCollapse} = this.props;
    if(this.props.onCollapse) onCollapse(nodeId);
  }

  handleMouseDown(e) {
    const {index: {id: nodeId}} = this.props;
    const dom = this.refs.inner;

    if(this.props.onDragStart) {
      this.props.onDragStart(nodeId, dom, e);
    }
  }
}
