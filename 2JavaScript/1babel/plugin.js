/*
 * @Author: TerryMin
 * @Date: 2021-03-02 13:41:32
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-02 14:05:53
 * @Description: file not
 */

module.exports = function ({ types: t }) {
  return {
    visitor: {
      VariableDeclaration (path) {
        const node = path.node;
        ['let', 'const'].includes(node.kind) && (node.kind = 'var');
      },
      ArrowFunctionExpression (path) {
        let { id, params, body, generator, async } = path.node;
        if (!t.isBlockStatement(body)) {
          const node = t.returnStatement(body);
          body = t.blockStatement([node]);
        }
        path.replaceWith(t.functionExpression(id, params, body, generator, async));
      }
    }
  }
}
