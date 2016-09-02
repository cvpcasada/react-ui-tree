import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import Tree from '../lib/react-ui-tree.js';
import tree from './tree';

import '../lib/react-ui-tree.less';
import './theme.less';
import './app.less';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.onClickNode = this.onClickNode.bind(this);
    this.isNodeCollapsed = this.isNodeCollapsed.bind(this);
    this.renderNode = this.renderNode.bind(this);

    this.state = {
      active: null,
      tree: tree
    }
  }

  renderNode(node) {
    return (
      <span className={cx('node', {
        'is-active': node === this.state.active
      })} onClick={ () => this.onClickNode(node) }>
        {node.module}
      </span>
    );
  }

  onClickNode(node) {
    this.setState({
      active: node
    });
  }

  render() {
    return (
      <div className="app">
        <div className="tree">
          <Tree
            paddingLeft={20}
            tree={this.state.tree}
            onChange={this.handleChange}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            isNodeCollapsed={this.isNodeCollapsed}
            renderNode={this.renderNode}
            shouldRenderRootNode={false}
          />
        </div>
        <div className="inspector">
          <button onClick={this.updateTree}>update tree</button>
          <pre>
          {JSON.stringify(this.state.tree, null, '  ')}
          </pre>
         </div>
      </div>
    );
  }

  handleChange(tree) {
    this.setState({
      tree: tree
    });
  }

  handleDragStart(node) {
    console.log('Drag start on', node.node.module)
    this.dragging = node
  }

  handleDragEnd(node) {
    console.log('Drag start on', node.node.module)
    if (node.parent != this.dragging.parent) {
      console.log('Parent changed', node)
    }
    this.dragging = null
  }

  isNodeCollapsed(args) {
    console.log({args})
  }

  updateTree() {
    var tree = this.state.tree;
    tree.children.push({module: 'test'});
    this.setState({
      tree: tree
    });
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
