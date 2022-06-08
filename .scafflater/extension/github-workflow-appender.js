const {Appender} = require('scafflater');
const yaml = require('js-yaml');
const merge = require('deepmerge');

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

class GithubWorkflowAppender extends Appender {
  /**
   * Process the input.
   *
   * @param {object} context The context of generation
   * @param {string} srcStr The string to be appended
   * @param {string} destStr The string where srcStr must be appended
   * @returns {Promise<object>} The process result
   */
  append(context, srcStr, destStr) {
    if (srcStr.trim().length <= 0) {
      return destStr;
    }
    if (destStr.trim().length <= 0) {
      return srcStr;
    }
    const src = yaml.load(srcStr);
    const dst = yaml.load(destStr);

    if (src.jobs && context.partial && context.partial.name.match(/infra/gi)) {
      delete src.jobs['ci'];
      delete src.jobs['cd_dev'];
      delete src.jobs['cd_hml'];
      delete src.jobs['cd_prd'];
    } else {
      delete src.jobs['infra_dev'];
      delete src.jobs['infra_hml'];
      delete src.jobs['infra_prd'];
    }

    const merged = merge(dst, src, {arrayMerge: overwriteMerge});
    const result = yaml.dump(merged, {
      noCompatMode: true,
      styles: {'!!null': 'empty'},
    });

    return Promise.resolve({
      context,
      result,
      notAppended: '',
    });
  }
}

module.exports = GithubWorkflowAppender;
